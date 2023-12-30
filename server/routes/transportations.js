const express = require("express");
const cors = require("cors");

const router = express.Router();

const Transportation = require("../models/transportation");
const DestTrans = require("../models/dest_trans");

router.use(cors());

// admin
router.post('/admin/getAllTransportation', (req, res) => {
    Transportation.findAll({
        limit: 300,
        include: [{
            model: DestTrans,
            attributes: ['destId'],
            as: 'dest_trans',
        }]
    })
        .then(router => {
            if (router) {
                const responseData = router.map(transportation => ({
                    id: transportation.id,
                    destIds: transportation.dest_trans.map(dest_trans => dest_trans.destId),
                    type: transportation.type,
                    additionInfo: transportation.additionInfo,
                    demoImage: transportation.demoImage,
                }));
                res.json(responseData);
            } else {
                res.status(400).json({ error: 'No transportation found' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

router.post('/admin/addTransportation', async (req, res) => {
    const new_transportation = req.body.new_transportation;

    try {
        const createdTransportation = await Transportation.create({
            type: new_transportation.type,
            additionInfo: new_transportation.additionInfo,
            demoImage: new_transportation.demoImage,
        });

        for (const destId of new_transportation.destId) {
            await DestTrans.create({
                transId: createdTransportation.id,
                destId: destId
            });
        }

        res.json({
            msg: 'Transportation added successfully',
            transportation: {
                id: createdTransportation.id,
                type: createdTransportation.type,
                additionInfo: createdTransportation.additionInfo,
                demoImage: createdTransportation.demoImage,
            }
        });
    } catch (error) {
        console.error('Error adding tour:', error);
        res.status(400).json({ error: 'Error adding tour' });
    }
});

router.post('/admin/deleteTransportation', async (req, res) => {
    const old_transportation = req.body.old_transportation;

    try {
        const transportationToDelete = await Transportation.findByPk(old_transportation.id);

        if (!transportationToDelete) {
            return res.status(404).json({ error: 'Transportation not found'});
        }

        await DestTrans.destroy({
            where: {
                transId: transportationToDelete.id
            }
        })

        await transportationToDelete.destroy();

        res.json({ msg: 'Transportation deleted successfully' });
    } catch (error) {
        console.error('Error deleting Transportation:', error);
        res.status(400).json({ error: 'Error deleting Transportation' });
    }
});


module.exports = router;
