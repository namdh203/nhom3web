// This function is used to extract links from demoImage data
export default function extractLink(inputLink) {
    var links = inputLink.split(",");
    links = links.map(function (link) {
        return link.trim();
    })
    return links;
}