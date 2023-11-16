-- insert into tour(title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting, tour_dest) values ('Paris', 'Paris is unarguably one of the most beautiful cities in the world, the capital of France, of art and of fashion.', 5, 23.5, 'USD', '2023-10-20', '2023-10-25', 'Best tour, Delicious food, 'https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg', 54465, '2 3 4')
-- create database travelam;
use travelam;

-- INSERT INTO Country (countryName, description, additionInfo, demoImage)
-- VALUES('United States', 'The United States is a diverse country in North America, known for its vast landscapes, cultural melting pot, and economic power.', 'A country with a rich history and various cultural influences.', 'https://www.goworldtravel.com/wp-content/uploads/2020/03/travel-landscapes-usa.jpg');

-- INSERT INTO Country (countryName, description, additionInfo, demoImage)
-- VALUES('Japan', 'Japan is an island nation in East Asia, known for its rich history, technological innovation, and traditional arts.', 'Famous for sushi, cherry blossoms, and advanced technology.', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/97/39/7f/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_f31158e4bb953d28a308');

-- INSERT INTO Country (countryName, description, additionInfo, demoImage)
-- VALUES('Australia', 'Australia is a continent and a country, famous for its unique wildlife, beautiful landscapes, and vibrant cities.', 'Home to the Great Barrier Reef and iconic landmarks like the Sydney Opera House.', 'https://images7.alphacoders.com/716/716104.jpg');

-- INSERT INTO Country (countryName, description, additionInfo, demoImage)
-- VALUES('Brazil', 'Brazil is the largest country in South America, known for its Amazon rainforest, carnival celebrations, and diverse culture.', 'Explore the vibrant culture, music, and dance of Brazil.', 'https://i.ytimg.com/vi/vlxqterQMhs/maxresdefault.jpg');

-- INSERT INTO Country (countryName, description, additionInfo, demoImage)
-- VALUES('South Africa', 'South Africa is located at the southern tip of the African continent, recognized for its diverse landscapes, wildlife, and cultural heritage.', 'Experience the stunning wildlife safaris and rich cultural history.', 'https://wallpapercave.com/wp/wp1842994.jpg');

-- INSERT INTO Country (countryName, description, additionInfo, demoImage)
-- VALUES('France', 'France is a European country known for its romantic ambiance, art, and historic landmarks.', 'Indulge in exquisite cuisine, fashion, and iconic landmarks like the Eiffel Tower.', 'https://www.wallpaperflare.com/static/615/284/1019/city-paris-france-tower-wallpaper.jpg');

-- INSERT INTO Country (countryName, description, additionInfo, demoImage)
-- VALUES('India', 'India is a vast and diverse country in South Asia, known for its ancient history, cultural heritage, and spirituality.', 'Explore the vibrant festivals, diverse cuisine, and architectural wonders.', 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?b=1&s=612x612&w=0&k=20&c=3PEobOthDnogYweVRbKoRqf7-p1aB6UQvKXSyYdDmVY=');

-- INSERT INTO Country (countryName, description, additionInfo, demoImage)
-- VALUES('Canada', 'Canada is a country in North America, famous for its stunning natural landscapes, friendly people, and winter sports.', 'Enjoy outdoor activities, maple syrup, and the beauty of the northern lights.', 'https://media.timeout.com/images/105239979/750/422/image.jpg');

-- INSERT INTO Country (countryName, description, additionInfo, demoImage)
-- VALUES('China', 'China is a country in East Asia, known for its ancient history, diverse landscapes, and modern development.', 'Explore the Great Wall, traditional Chinese medicine, and delicious cuisine.', 'https://images2.alphacoders.com/707/707504.jpg');

-- INSERT INTO Country (countryName, description, additionInfo, demoImage)
-- VALUES('Mexico', 'Mexico is a country in North America, known for its rich culture, ancient civilizations, and beautiful beaches.', 'Discover the vibrant traditions, mariachi music, and delicious street food.', 'https://static.toiimg.com/photo/msid-44970723,width-96,height-65.cms');

-- insert into destination(name, country_id, description, additionInfo, demoImage) values ("Paris", 6, "Paris, the capital of France, is often referred to as the City of Love or the City of Light. It stands as a symbol of art, culture, and romance, drawing millions of visitors from around the globe each year.", "Best experience, Delicious food", "https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg");

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Louvre Museum', 6, 'The Louvre Museum is the world\'s largest art museum and a historic monument in Paris. It is a central landmark, housing thousands of works of art, including the Mona Lisa.', 'Art masterpiece collection, Historical significance', 'https://cdn.britannica.com/01/150801-050-3072D42F/Louvre-Museum-pyramid-Paris-Pei-IM.jpg');

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Versailles Palace', 6, 'The Palace of Versailles is a symbol of absolute monarchy and the epitome of opulence. Explore the grandeur of the palace, stunning gardens, and Hall of Mirrors.', 'Royal history, Ornate gardens', 'https://en.chateauversailles.fr/sites/default/files/c3_1.jpg');

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Montmartre', 6, 'Montmartre is a bohemian neighborhood known for its artistic history. Visit the iconic Basilica of the Sacred Heart, wander through charming streets, and enjoy panoramic views of Paris.', 'Artistic atmosphere, Cafés, Street performers', 'https://blushrougette.com/wp-content/uploads/2021/07/sacre-coeur-basilica-paris.jpg');

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Sainte-Chapelle', 6, 'Sainte-Chapelle is a Gothic masterpiece known for its stunning stained glass windows. Admire the intricate details and vibrant colors that tell biblical stories.', 'Architectural beauty, Stained glass art', 'https://loc-hall.fr/wp-content/uploads/2021/11/La-sainte-Chapelle-vue-exterieure-1.jpg.webp');

-- -- United States Destinations
-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Statue of Liberty', 1, 'The Statue of Liberty is a symbol of freedom and democracy, located on Liberty Island in New York Harbor. Explore the statue and enjoy panoramic views of the city.', 'Historical landmark, Immigration symbol', 'https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/VKFZOBUTVNFNVBUKSS77AKAKTI.JPEG');

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Grand Canyon National Park', 1, 'Grand Canyon National Park is a natural wonder with breathtaking landscapes and deep canyons. Hike the trails, enjoy scenic viewpoints, and experience the unique beauty.', 'Spectacular views, Hiking trails', 'https://npca.s3.amazonaws.com/images/8706/591ff182-b7f9-4da1-9c16-c29e0ace3dc4-banner.jpg?1445970338');

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Disneyland Resort', 1, 'Disneyland Resort in California is a magical destination with enchanting rides, entertaining shows, and beloved Disney characters. Experience the joy of fantasy and adventure.', 'Family-friendly, Magical atmosphere', 'https://wallpapers.com/images/hd/animated-disney-castle-has6vy47k75d0bzs.jpg');

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Yellowstone Falls', 1, 'Yellowstone Falls is a mesmerizing natural wonder within Yellowstone National Park. Witness the power and beauty of the falls amid the parks diverse ecosystem.', 'Scenic beauty, Wildlife spotting', 'https://c4.wallpaperflare.com/wallpaper/824/450/363/yellowstone-falls-wallpaper-preview.jpg');

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Miami Beach', 1, 'Miami Beach is a vibrant coastal destination known for its white sandy beaches, lively nightlife, and Art Deco architecture. Relax under the sun and enjoy the energetic atmosphere.', 'Beach paradise, Art Deco district', 'https://images8.alphacoders.com/880/thumb-1920-880550.jpg');


-- -- Japan Destinations
-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Tokyo Disneyland', 2, 'Tokyo Disneyland offers a magical experience with unique attractions, parades, and the enchanting Cinderella Castle. Immerse yourself in the fantasy world of Disney.', 'Japanese Disney magic, Character meet-ups', 'https://media2.tokyodisneyresort.jp/home/common/og_image.jpg');

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Mount Fuji', 2, 'Mount Fuji is Japans highest peak and an iconic symbol of the country. Visit the mountain for stunning views, hiking trails, and cultural significance.', 'Cultural landmark, Hiking adventure', 'https://c4.wallpaperflare.com/wallpaper/611/69/87/japan-mountains-mount-fuji-asian-architecture-wallpaper-preview.jpg');

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Kyoto Temples', 2, 'Kyoto is home to numerous historic temples, each with its own unique architecture and serene atmosphere. Explore the cultural heritage and tranquility of Kyoto.', 'Historical temples, Zen gardens', 'https://w0.peakpx.com/wallpaper/898/965/HD-wallpaper-kyoto-japan-temple-city-buildings-houses.jpg');

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Osaka Castle', 2, 'Osaka Castle is a majestic fortress with a rich history. Discover the castles architecture, visit the museum, and enjoy panoramic views of Osaka.', 'Historical landmark, Museum visit', 'https://images7.alphacoders.com/976/976737.jpg');

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Hiroshima Peace Memorial', 2, 'The Hiroshima Peace Memorial, also known as the Atomic Bomb Dome, is a UNESCO World Heritage Site symbolizing the hope for peace. Learn about history and resilience.', 'Historical significance, Peaceful reflection', 'https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/08/A-Bomb-Dome-Hiroshima--1024x683.jpg');


-- -- Australia Destinations
-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Great Barrier Reef', 3, 'The Great Barrier Reef is a natural wonder with vibrant coral formations and diverse marine life. Snorkel or dive to explore the underwater beauty of this UNESCO World Heritage Site.', 'Marine biodiversity, Snorkeling paradise', 'https://wallpaperaccess.com/full/1151171.jpg');

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Sydney Opera House', 3, 'The Sydney Opera House is an iconic architectural masterpiece and a symbol of Sydney. Attend a performance or take a guided tour to appreciate its design and cultural significance.', 'Architectural marvel, Cultural performances', 'https://images4.alphacoders.com/743/743533.jpg');

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Uluru-Kata Tjuta National Park', 3, 'Uluru, also known as Ayers Rock, is a sacred monolith in the heart of Australia. Explore the national park to witness the stunning landscapes and learn about indigenous culture.', 'Aboriginal heritage, Red desert landscapes', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/59/0d/13/caption.jpg?w=600&h=400&s=1');

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Great Ocean Road', 3, 'The Great Ocean Road is a scenic coastal drive offering breathtaking views of cliffs, beaches, and the Twelve Apostles rock formations. Experience the beauty of Australias coastline.', 'Coastal drive, Natural wonders', 'https://pixelz.cc/wp-content/uploads/2016/11/great-ocean-road-victoria-australia-4k-wallpaper.jpg');

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Bondi Beach', 3, 'Bondi Beach is a popular destination for surfers and beachgoers, known for its golden sands and vibrant atmosphere. Relax on the beach, take a surf lesson, and enjoy beachside cafes.', 'Surfing paradise, Beach vibes', 'https://c0.wallpaperflare.com/preview/252/37/114/australia-bondi-beach-bondi-icebergs-pool-pool.jpg');


-- -- Brazil Destinations
-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Christ the Redeemer', 4, 'Christ the Redeemer is an iconic statue atop Corcovado Mountain, overlooking Rio de Janeiro. Visit this marvel for panoramic views of the city and a sense of spiritual awe.', 'Spiritual landmark, City views', 'https://images7.alphacoders.com/359/359867.jpg');

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Copacabana Beach', 4, 'Copacabana Beach is a world-famous stretch of golden sands in Rio de Janeiro. Relax on the beach, enjoy beach sports, and experience the lively atmosphere.', 'Beach paradise, Vibrant energy', 'https://c4.wallpaperflare.com/wallpaper/231/797/294/beach-brazil-copacabana-night-wallpaper-preview.jpg');

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Iguazu Falls', 4, 'Iguazu Falls is a breathtaking natural wonder on the border of Brazil and Argentina. Witness the powerful cascades amidst lush rainforest and diverse wildlife.', 'Natures spectacle, Waterfall adventure', 'https://w0.peakpx.com/wallpaper/447/579/HD-wallpaper-iguazu-falls-waterfall-nature-iguazu-other.jpg');

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Amazon Rainforest', 4, 'The Amazon Rainforest in Brazil is the worlds largest tropical rainforest, known for its incredible biodiversity. Explore the lush vegetation and unique wildlife on a guided tour.', 'Eco-tourism, Wildlife exploration', 'https://www.andbeyond.com/wp-content/uploads/sites/5/Amazon-Rain-Forest.jpg');

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Carnival in Rio', 4, 'Experience the vibrant Carnival in Rio de Janeiro, a world-famous celebration of music, dance, and colorful parades. Join the festivities and immerse yourself in Brazilian culture.', 'Cultural extravaganza, Samba rhythms', 'https://southjets.com/wp-content/uploads/2019/02/Carnaval-en-Rio-de-Janeiro-la-fiesta-de-carnaval-mas-grande-del-mundo.jpg');


-- -- South Africa Destinations
-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Table Mountain', 5, 'Table Mountain is a prominent landmark overlooking Cape Town. Take a cable car or hike to the summit for panoramic views of the city, ocean, and surrounding landscapes.', 'Scenic beauty, Hiking adventure', 'https://i.pinimg.com/originals/e4/07/75/e4077595145db3a264436a8cbc7e75e8.jpg');

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Kruger National Park', 5, 'Kruger National Park is one of Africas premier safari destinations, known for its diverse wildlife, including the Big Five. Embark on a safari adventure amidst the natural beauty.', 'Wildlife safari, Conservation area', 'https://wallpapercave.com/wp/wp2538125.jpg');

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Robben Island', 5, 'Robben Island, near Cape Town, is a UNESCO World Heritage Site with historical significance. Visit the former prison where Nelson Mandela was held and learn about South Africas apartheid history.', 'Historical landmark, Apartheid history', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/a4/f2/14/robben-islandhas-been.jpg?w=1200&h=-1&s=1');

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Blyde River Canyon', 5, 'Blyde River Canyon is a stunning natural canyon with lush greenery, red cliffs, and panoramic views. Explore the scenic beauty and unique geological formations.', 'Canyon exploration, Natures beauty', 'https://i.pinimg.com/736x/8e/3f/17/8e3f173a01a91fea92f7f64296e8a9f7.jpg');

-- INSERT INTO Destination (name, country_id, description, additionInfo, demoImage)
-- VALUES
-- ('Victoria & Alfred Waterfront', 5, 'The Victoria & Alfred Waterfront in Cape Town is a vibrant harbor area with shops, restaurants, and cultural attractions. Enjoy waterfront views and explore the lively atmosphere.', 'Shopping, Dining, Cultural experiences', 'https://www.capetourism.com/wp-content/uploads/2023/01/cape-town-va-waterfront.jpg');

-- INSERT INTO tour (title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting)
-- VALUES ('Paris & Louvre Exploration', 'Explore the beauty of Paris and visit the iconic Louvre Museum. Immerse yourself in art, culture, and delicious French cuisine.', 7, 45.0, 'USD', '2023-11-01', '2023-11-07', 'Art and culture experience, French cuisine', 'https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg', 12000);
-- INSERT INTO tour_dest(tour_id, dest_id) values (1, 1);
-- INSERT INTO tour_dest(tour_id, dest_id) values (1, 2);

-- -- Tour 2: Tokyo Disneyland & Mount Fuji
-- INSERT INTO tour (title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting)
-- VALUES ('Magical Japan Adventure', 'Experience the magic of Tokyo Disneyland and explore the iconic Mount Fuji. A journey through fantasy and natural wonders.', 6, 50.8, 'USD', '2023-11-10', '2023-11-15', 'Disney magic, Natural beauty', 'https://c4.wallpaperflare.com/wallpaper/611/69/87/japan-mountains-mount-fuji-asian-architecture-wallpaper-preview.jpg', 18000);
-- INSERT INTO tour_dest(tour_id, dest_id) values (2, 11);
-- INSERT INTO tour_dest(tour_id, dest_id) values (2, 12);

-- Tour 3: Great Barrier Reef & Sydney Opera House & Uluru-Kata Tjuta National Park
-- INSERT INTO tour (title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting)
-- VALUES ('Australian Wonders Expedition', 'Discover the wonders of Australia, snorkeling in the Great Barrier Reef, exploring the iconic Sydney Opera House, and visiting Uluru-Kata Tjuta National Park.', 10, 90.5, 'USD', '2023-11-20', '2023-11-30', 'Underwater adventure, Architectural marvel, Red desert landscapes', 'https://images4.alphacoders.com/743/743533.jpg', 32000);
-- INSERT INTO tour_dest(tour_id, dest_id) values (3, 16);
-- INSERT INTO tour_dest(tour_id, dest_id) values (3, 17);
-- INSERT INTO tour_dest(tour_id, dest_id) values (3, 18);


-- Tour 4: Christ the Redeemer & Copacabana Beach & Iguazu Falls
-- INSERT INTO tour (title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting)
-- VALUES ('Brazilian Marvels Tour', 'Explore the marvels of Brazil, from Christ the Redeemer in Rio de Janeiro to the famous Copacabana Beach and the breathtaking Iguazu Falls.', 8, 70.2, 'USD', '2023-12-01', '2023-12-08', 'Spiritual awe, Beach paradise, Nature\'s spectacle', 'https://c4.wallpaperflare.com/wallpaper/231/797/294/beach-brazil-copacabana-night-wallpaper-preview.jpg', 25000);
-- INSERT INTO tour_dest(tour_id, dest_id) values (4, 21);
-- INSERT INTO tour_dest(tour_id, dest_id) values (4, 22);
-- INSERT INTO tour_dest(tour_id, dest_id) values (4, 23);

-- Tour 5: Table Mountain & Kruger National Park & Robben Island
-- INSERT INTO tour (title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting)
-- VALUES ('South African Cultural Safari', 'Embark on a South African adventure, with a safari in Kruger National Park, a visit to the stunning Table Mountain, and a trip to the historic Robben Island.', 10, 85.5, 'USD', '2023-12-10', '2023-12-20', 'Wildlife safari, Scenic landscapes, Apartheid history', 'https://i.pinimg.com/originals/e4/07/75/e4077595145db3a264436a8cbc7e75e8.jpg', 32000);
-- INSERT INTO tour_dest(tour_id, dest_id) values (5, 26);
-- INSERT INTO tour_dest(tour_id, dest_id) values (5, 27);
-- INSERT INTO tour_dest(tour_id, dest_id) values (5, 28);

-- Tour 6: Statue of Liberty & Grand Canyon & Yellowstone Falls
-- INSERT INTO tour (title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting)
-- VALUES ('American Wonders Expedition', 'Explore iconic American landmarks, from the Statue of Liberty to the majestic Grand Canyon and the spectacular Yellowstone Falls.', 9, 75.0, 'USD', '2024-01-05', '2024-01-14', 'Historical landmarks, Natural wonders', 'https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/VKFZOBUTVNFNVBUKSS77AKAKTI.JPEG', 28000);
-- INSERT INTO tour_dest(tour_id, dest_id) values (6, 6);
-- INSERT INTO tour_dest(tour_id, dest_id) values (6, 7);
-- INSERT INTO tour_dest(tour_id, dest_id) values (6, 8);

-- Tour 7: Kyoto Temples & Osaka Castle & Mount Fuji
-- INSERT INTO tour (title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting)
-- VALUES ('Historical Japan Triangle', 'Immerse yourself in the historical richness of Japan, exploring Kyoto Temples, the majestic Osaka Castle, and the iconic Mount Fuji.', 8, 70.9, 'USD', '2024-01-15', '2024-01-22', 'Cultural heritage, Architectural marvels, Natural beauty', 'https://w0.peakpx.com/wallpaper/898/965/HD-wallpaper-kyoto-japan-temple-city-buildings-houses.jpg', 38000);
-- INSERT INTO tour_dest(tour_id, dest_id) values (7, 13);
-- INSERT INTO tour_dest(tour_id, dest_id) values (7, 14);
-- INSERT INTO tour_dest(tour_id, dest_id) values (7, 12);

-- Tour 8: Great Ocean Road & Bondi Beach & Sydney Opera House
-- INSERT INTO tour (title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting)
-- VALUES ('Australian Coastal Trio', 'Embark on a coastal adventure in Australia, driving along the Great Ocean Road, relaxing on the iconic Bondi Beach, and exploring the architectural marvel of the Sydney Opera House.', 9, 80.2, 'USD', '2024-02-01', '2024-02-10', 'Coastal drive, Beach vibes, Architectural marvel', 'https://pixelz.cc/wp-content/uploads/2016/11/great-ocean-road-victoria-australia-4k-wallpaper.jpg', 42000);
-- INSERT INTO tour_dest(tour_id, dest_id) values (8, 17);
-- INSERT INTO tour_dest(tour_id, dest_id) values (8, 20);
-- INSERT INTO tour_dest(tour_id, dest_id) values (8, 19);

-- Tour 9: Iguazu Falls & Amazon Rainforest & Pantanal Wetlands
-- INSERT INTO tour (title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting)
-- VALUES ('Brazilian Nature Trilogy', 'Witness the natural wonders of Brazil, with a visit to the awe-inspiring Iguazu Falls, a journey into the breathtaking Amazon Rainforest, and an exploration of the unique Pantanal Wetlands.', 12, 110.0, 'USD', '2024-02-15', '2024-02-27', 'Nature\'s spectacle, Wildlife exploration, Wetland adventure', 'https://southjets.com/wp-content/uploads/2019/02/Carnaval-en-Rio-de-Janeiro-la-fiesta-de-carnaval-mas-grande-del-mundo.jpg', 50000);
-- INSERT INTO tour_dest(tour_id, dest_id) values (9, 23);
-- INSERT INTO tour_dest(tour_id, dest_id) values (9, 24);
-- INSERT INTO tour_dest(tour_id, dest_id) values (9, 25);

-- Tour 10: Statue of Liberty & Sydney Opera House & Great Ocean Road & Uluru-Kata Tjuta National Park
-- INSERT INTO tour (title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting)
-- VALUES ('World Wonders Adventure', 'Embark on a journey to iconic landmarks, from the Statue of Liberty to the Sydney Opera House, the scenic beauty of the Great Ocean Road, and the red desert landscapes of Uluru-Kata Tjuta National Park.', 15, 140.0, 'USD', '2024-03-01', '2024-03-15', 'Global landmarks, Scenic drive, Red desert landscapes', 'https://images4.alphacoders.com/743/743533.jpg', 75000);
-- INSERT INTO tour_dest(tour_id, dest_id) values (10, 17);
-- INSERT INTO tour_dest(tour_id, dest_id) values (10, 18);
-- INSERT INTO tour_dest(tour_id, dest_id) values (10, 19);
-- INSERT INTO tour_dest(tour_id, dest_id) values (10, 6);

-- INSERT INTO tour (title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting)
-- VALUES
-- ('Japan Delights', 'Experience the magic of Tokyo Disneyland and immerse yourself in the historical richness of Kyoto Temples.', 6, 55.0, 'USD', '2024-03-20', '2024-03-25', 'Disney magic, Cultural heritage', 'https://w0.peakpx.com/wallpaper/898/965/HD-wallpaper-kyoto-japan-temple-city-buildings-houses.jpg', 15000);

-- INSERT INTO tour (title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting)
-- VALUES
-- ('Australian Coastal Bliss', 'Relax on the iconic Bondi Beach, snorkel in the Great Barrier Reef, and explore the architectural marvel of the Sydney Opera House.', 8, 75.0, 'USD', '2024-03-28', '2024-04-04', 'Beach vibes, Underwater adventure, Architectural marvel', 'https://c0.wallpaperflare.com/preview/252/37/114/australia-bondi-beach-bondi-icebergs-pool-pool.jpg', 22000);

-- INSERT INTO tour (title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting)
-- VALUES
-- ('American Natural Wonders', 'Explore iconic American landmarks, from the Statue of Liberty to the spectacular Yellowstone Falls.', 7, 65.0, 'USD', '2024-04-10', '2024-04-16', 'Historical landmarks, Natural wonders', 'https://c4.wallpaperflare.com/wallpaper/824/450/363/yellowstone-falls-wallpaper-preview.jpg', 18000);

-- INSERT INTO tour (title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting)
-- VALUES
-- ('Brazilian Wilderness Adventure', 'Embark on a journey through the heart of Brazil, exploring the Amazon Rainforest, witnessing the awe-inspiring Iguazu Falls, and experiencing the unique Pantanal Wetlands.', 12, 110.0, 'USD', '2024-04-20', '2024-05-01', 'Wildlife exploration, Nature\'s spectacle, Wetland adventure', 'https://w0.peakpx.com/wallpaper/447/579/HD-wallpaper-iguazu-falls-waterfall-nature-iguazu-other.jpg', 28000);

-- INSERT INTO tour (title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting)
-- VALUES
-- ('French Elegance', 'Experience the beauty of Paris, visit the iconic Eiffel Tower, and explore the enchanting Mont Saint-Michel.', 8, 80.0, 'USD', '2024-05-05', '2024-05-12', 'City of Love, Architectural marvel, Historical charm', 'https://en.chateauversailles.fr/sites/default/files/c3_1.jpg', 32000);

-- INSERT INTO tour (title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting)
-- VALUES
-- ('Australian Coastal Retreat', 'Explore the architectural marvel of the Sydney Opera House and embark on a scenic drive along the Great Ocean Road.', 6, 60.0, 'USD', '2024-05-15', '2024-05-20', 'Architectural marvel, Scenic drive', 'https://images4.alphacoders.com/743/743533.jpg', 15000);

-- INSERT INTO tour (title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting)
-- VALUES
-- ('Japan Magical Trio', 'Experience the magic of Tokyo Disneyland, explore the majestic Osaka Castle, and enjoy the scenic beauty of Mount Fuji.', 8, 70.0, 'USD', '2024-05-25', '2024-06-01', 'Disney magic, Architectural marvels, Natural beauty', 'https://wallpapers.com/images/hd/animated-disney-castle-has6vy47k75d0bzs.jpg', 25000);

-- INSERT INTO tour (title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting)
-- VALUES
-- ('Rio Carnival Extravaganza', 'Marvel at the beauty of Rio de Janeiro, from Christ the Redeemer and Copacabana Beach to the vibrant Carnival in Rio.', 10, 95.0, 'USD', '2024-06-05', '2024-06-15', 'Spiritual awe, Beach paradise, Cultural extravaganza', 'https://c4.wallpaperflare.com/wallpaper/231/797/294/beach-brazil-copacabana-night-wallpaper-preview.jpg', 42000);

-- INSERT INTO tour (title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting)
-- VALUES
-- ('South African Discovery', 'Embark on a South African adventure, with a visit to Table Mountain, a safari in Kruger National Park, a trip to Robben Island, and an exploration of the stunning Blyde River Canyon.', 12, 110.0, 'USD', '2024-06-20', '2024-07-01', 'Scenic landscapes, Wildlife safari, Historical landmark', 'https://i.pinimg.com/736x/8e/3f/17/8e3f173a01a91fea92f7f64296e8a9f7.jpg', 50000);

-- INSERT INTO tour (title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting)
-- VALUES
-- ('Brazilian Nature & Culture', 'Witness the natural wonders of Brazil, from the awe-inspiring Iguazu Falls and the breathtaking Amazon Rainforest to the unique Pantanal Wetlands and the vibrant Carnival in Rio.', 15, 140.0, 'USD', '2024-07-05', '2024-07-20', 'Nature\'s spectacle, Wildlife exploration, Cultural extravaganza', 'https://www.andbeyond.com/wp-content/uploads/sites/5/Amazon-Rain-Forest.jpg', 75000);

-- INSERT INTO tour_dest (tour_id, dest_id) VALUES (11, 8), (11, 13);

-- INSERT INTO tour_dest (tour_id, dest_id) VALUES (12, 20), (12, 16), (12, 17);

-- INSERT INTO tour_dest (tour_id, dest_id) VALUES (13, 6), (13, 9);

-- INSERT INTO tour_dest (tour_id, dest_id) VALUES (14, 24), (14, 23), (14, 25);

-- INSERT INTO tour_dest (tour_id, dest_id) VALUES (15, 1), (15, 3), (15, 11);

-- INSERT INTO tour_dest (tour_id, dest_id) VALUES (16, 17), (16, 19);

-- INSERT INTO tour_dest (tour_id, dest_id) VALUES (17, 8), (17, 14), (17, 12);

-- INSERT INTO tour_dest (tour_id, dest_id) VALUES (18, 21), (18, 22), (18, 27);

-- INSERT INTO tour_dest (tour_id, dest_id) VALUES (19, 26), (19, 27), (19, 28), (19, 29);

-- INSERT INTO tour_dest (tour_id, dest_id) VALUES (20, 23), (20, 24), (20, 25), (20, 27);

-- SELECT `tour`.`id`, `tour`.`title`, `tour`.`description`, `tour`.`demoImage` FROM `tour` AS `tour` 
-- INNER JOIN `tour_dest` AS `tour_dests` ON `tour`.`id` = `tour_dests`.`tour_id` 
-- INNER JOIN `destination` AS `tour_dests->destination` ON `tour_dests`.`dest_id` = `tour_dests->destination`.`id` AND `tour_dests->destination`.`country_id` = 1;

-- select * from tour_dest where dest_id > 5 and dest_id < 11;

-- select * from tour where id in (6, 10, 13, 17, 11)
-- INSERT INTO tour (title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting)
-- VALUES
-- ('Parisian Elegance', 'Stroll along the iconic Champs-Élysées and explore the renowned Musée d\'Orsay, experiencing the epitome of Parisian elegance.', 6, 55.0, 'USD', '2024-07-25', '2024-07-30', 'City of Lights, Art and culture', 'https://cdn.britannica.com/01/150801-050-3072D42F/Louvre-Museum-pyramid-Paris-Pei-IM.jpg', 16000);

-- INSERT INTO tour_dest (tour_id, dest_id) VALUES (21, 2), (21, 1);

-- INSERT INTO tour (title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting)
-- VALUES
-- ('Gothic Marvels of Paris', 'Admire the stunning architecture of Sainte-Chapelle and Notre-Dame Cathedral, two masterpieces of Gothic art in the heart of Paris.', 5, 50.0, 'USD', '2024-08-01', '2024-08-05', 'Architectural gems, Historical landmarks', 'https://blushrougette.com/wp-content/uploads/2021/07/sacre-coeur-basilica-paris.jpg', 12000);

-- INSERT INTO tour_dest (tour_id, dest_id) VALUES (22, 5), (22, 4);

-- INSERT INTO tour (title, description, duration, price, priceCurrency, startDate, endDate, additionInfo, demoImage, voting)
-- VALUES
-- ('Romantic Paris Nights', 'Embark on a romantic Seine River cruise and enjoy a mesmerizing night tour of the Eiffel Tower, experiencing the enchanting beauty of Paris at night.', 4, 40.0, 'USD', '2024-08-10', '2024-08-13', 'City lights, Romantic atmosphere', 'https://example.com/romantic_nights_tour.jpg', 8000);

-- INSERT INTO tour_dest (tour_id, dest_id) VALUES (23, 3), (23, 2), (23, 11);

-- UPDATE Country
-- SET description = 'The United States of America, often referred to as the USA, is a vast and dynamic nation encompassing 50 states, each with its own distinct character. From the towering skyscrapers of Manhattan to the sun-drenched beaches of California, the USA is a land of contrasts and opportunities. Immerse yourself in the cultural diversity of cities like Los Angeles, experience the historical significance of Washington, D.C., and explore the natural wonders of Yellowstone National Park. Whether you are drawn to the glamour of Hollywood, the tech innovation of Silicon Valley, or the jazz-filled streets of New Orleans, the USA has something to offer every traveler.',
--     additionInfo = 'Best tourism, good vibe, friendly locals, delicious food, interesting adventures, smart transportation, clean hotel, diverse landscapes, cultural melting pot, economic powerhouse, Hollywood, Silicon Valley, jazz, Yellowstone National Park'
-- WHERE id = 1;

-- UPDATE Country
-- SET description = 'Japan, an archipelago in East Asia, is a captivating blend of ancient traditions and cutting-edge modernity. From the historic shrines of Kyoto to the neon-lit streets of Tokyo, Japan invites you on a journey through time. Indulge in the artistry of traditional tea ceremonies, witness the breathtaking beauty of Mount Fuji, and navigate the bustling markets of Osaka. With a deep appreciation for nature and a commitment to technological advancement, Japan offers a unique and harmonious travel experience.',
--     additionInfo = 'Best tourism, good vibe, friendly locals, delicious food, interesting adventures, smart transportation, clean hotel, rich history, technological innovation, traditional arts, tea ceremonies, Mount Fuji, Osaka markets'
-- WHERE id = 2;

-- UPDATE Country
-- SET description = 'Australia, the land Down Under, is a continent of diverse landscapes and vibrant culture. From the otherworldly beauty of the Outback to the pristine beaches of the Gold Coast, Australia is a playground for nature lovers and adventure seekers alike. Dive into the Great Barrier Reefs mesmerizing underwater world, explore the ancient Indigenous heritage, and savor the multicultural flavors of Melbournes culinary scene. Australias laid-back lifestyle, friendly locals, and commitment to environmental conservation make it a destination that leaves a lasting impact.',
--     additionInfo = 'Best tourism, good vibe, friendly locals, delicious food, interesting adventures, smart transportation, clean hotel, unique wildlife, beautiful landscapes, vibrant cities, Great Barrier Reef, Indigenous heritage, Melbourne cuisine'
-- WHERE id = 3;

-- UPDATE Country
-- SET description = 'Brazil, the largest country in South America, is a kaleidoscope of colors, rhythms, and natural wonders. From the pulsating energy of Rio de Janeiros Carnival to the tranquility of the Amazon rainforest, Brazil offers a sensory journey like no other. Engage in the lively samba dance, taste the diverse flavors of Brazilian cuisine, and witness the awe-inspiring Iguazu Falls. With a melting pot of cultures and a passion for celebration, Brazil invites you to experience its warmth, vitality, and breathtaking landscapes.',
--     additionInfo = 'Best tourism, good vibe, friendly locals, delicious food, interesting adventures, smart transportation, clean hotel, diverse culture, Amazon rainforest, carnival celebrations, samba, Iguazu Falls, vibrant landscapes'
-- WHERE id = 4;

-- UPDATE Country
-- SET description = 'South Africa, a rainbow nation at the southern tip of Africa, is a treasure trove of natural beauty and cultural heritage. From the majestic Table Mountain overlooking Cape Town to the wild savannas of Kruger National Park, South Africa boasts a diverse tapestry of landscapes. Embark on thrilling wildlife safaris, delve into the history of apartheid in Johannesburg, and relax on the golden beaches of Durban. The warmth and friendliness of the locals add an extra layer of charm to the rich, multicultural experience awaiting you in South Africa.',
--     additionInfo = 'Best tourism, good vibe, friendly locals, delicious food, interesting adventures, smart transportation, clean hotel, diverse landscapes, wildlife safaris, cultural heritage, friendly locals, Table Mountain, apartheid history, Durban beaches'
-- WHERE id = 5;

-- UPDATE Country
-- SET description = 'France, the epitome of sophistication and romance, is a country that invites you to savor the finer things in life. From the enchanting boulevards of Paris to the rolling vineyards of Bordeaux, France is a celebration of art, culture, and culinary excellence. Indulge in the exquisite flavors of French cuisine, admire the masterpieces at the Louvre, and stroll through charming villages in Provence. With a legacy of artistic brilliance, architectural marvels, and a culinary heritage that tantalizes the taste buds, France is a destination that promises an unforgettable journey.',
--     additionInfo = 'Best tourism, good vibe, friendly locals, delicious food, interesting adventures, smart transportation, clean hotel, romantic ambiance, exquisite cuisine, art, Louvre, Provence, Bordeaux vineyards'
-- WHERE id = 6;

-- UPDATE Country
-- SET additionInfo = 'Diverse landscapes, vibrant cities, iconic landmarks, cultural festivals, outdoor adventures, diverse cuisine, historical significance, world-class entertainment, technological innovation, entrepreneurial spirit, national parks'
-- WHERE id = 1;

-- UPDATE Country
-- SET additionInfo = 'Zen gardens, traditional arts, futuristic technology, efficient public transportation, cherry blossom festivals, anime culture, onsens, capsule hotels, polite etiquette, Shinto shrines, karaoke culture'
-- WHERE id = 2;

-- UPDATE Country
-- SET additionInfo = 'Aboriginal culture, surfing paradise, unique wildlife encounters, multicultural communities, Indigenous art, outdoor barbecue culture, sports enthusiasm, Great Ocean Road, eco-friendly initiatives, adventurous activities, wine regions'
-- WHERE id = 3;

-- UPDATE Country
-- SET additionInfo = 'Carnival spirit, Amazon river cruises, caipirinha cocktails, football passion, diverse music genres, colorful street art, tropical rainforest adventures, diverse ecosystems, traditional churrasco, vibrant street markets, Capoeira'
-- WHERE id = 4;

-- UPDATE Country
-- SET additionInfo = 'Township experiences, Big Five safaris, Nelson Mandelas legacy, diverse languages, Cape Winelands, apartheid history tours, Garden Route exploration, rugby culture, Biltong snacks, stunning coastal drives, Zulu traditions'
-- WHERE id = 5;

-- UPDATE Country
-- SET additionInfo = 'Fashion capital, culinary excellence, vineyard tours, French Riviera glamour, literary history, artistic inspiration, canal cruises, high-speed trains, charming cafes, historic chateaux, sophisticated shopping'
-- WHERE id = 6;

-- UPDATE Destination
-- SET
--     description = 'Paris, the capital of France, is an enchanting city that beckons with its timeless beauty and cultural richness. Beyond its iconic landmarks, Paris is a tapestry of art, history, and culinary delights. Stroll along the Seine River, immerse yourself in world-renowned museums, and savor the exquisite flavors of French cuisine in charming bistros. From the historic cobblestone streets of Le Marais to the grandeur of the Notre-Dame Cathedral, Paris is a city that captures the hearts of all who visit.',
--     additionInfo = 'Best experience, Delicious food, Art museums, River Seine cruises, Champs-Élysées shopping, Literary history, Fashion districts, Romantic ambiance'
-- WHERE id = 1;

-- UPDATE Destination
-- SET
--     description = 'The Louvre Museum, situated on the right bank of the Seine River in Paris, is a masterpiece in itself. As you step into the grand courtyard of the Louvre, you are transported into a world of artistic wonders spanning centuries. Housing over 35,000 works of art, including the enigmatic Mona Lisa, the Louvre invites you on a journey through human creativity. From the intricacies of ancient civilizations to the brushstrokes of the Renaissance, each gallery holds a story waiting to be discovered.',
--     additionInfo = 'Art masterpiece collection, Historical significance, Guided tours, Interactive exhibits, Architectural marvels, Sculpture garden, Art workshops'
-- WHERE id = 2;

-- UPDATE Destination
-- SET
--     description = 'The Palace of Versailles, a testament to opulence and royal grandeur, stands as an emblem of France\'s golden age. This architectural marvel, nestled in the picturesque suburbs of Paris, invites you to step back in time. Explore the grandeur of the palace, stunning gardens, and Hall of Mirrors. Step back in time to an era of royal extravagance and discover the stories behind this architectural masterpiece.',
--     additionInfo = 'Royal history, Ornate gardens, Musical fountain shows, Carriage museum, Private apartments tour, Nighttime events, Marie Antoinette\'s estate'
-- WHERE id = 3;

-- UPDATE Destination
-- SET
--     description = 'Montmartre, the bohemian heart of Paris, is a neighborhood that resonates with artistic energy and romantic allure. As you ascend the cobblestone streets to the summit, you\'ll be greeted by the iconic Basilica of the Sacred Heart, offering panoramic views of the city below. Wander through narrow alleys adorned with vibrant street art, pause at bustling cafés where Picasso once sought inspiration, and feel the heartbeat of Parisian creativity. Montmartre is not merely a place; it\'s an artistic symphony that continues to captivate.',
--     additionInfo = 'Artistic atmosphere, Cafés, Street performers, Art studios, Bohemian markets, Moulin Rouge cabaret, Local galleries, Hidden gems'
-- WHERE id = 4;

-- UPDATE Destination
-- SET
--     description = 'Sainte-Chapelle, a jewel of Gothic architecture nestled within the heart of Paris, is a testament to the divine beauty of stained glass. Commissioned by King Louis IX, this celestial sanctuary invites you into a realm of kaleidoscopic light and intricate craftsmanship. As sunlight dances through the vibrant panes, biblical stories come to life in a breathtaking display. Sainte-Chapelle is more than a religious edifice; it\'s a luminous testament to the intersection of faith and art, where the divine meets the mortal gaze.',
--     additionInfo = 'Architectural beauty, Stained glass art, Guided tours, Classical music concerts, Spiritual retreat, Historical significance, Illuminated evenings'
-- WHERE id = 5;

-- UPDATE Destination
-- SET
--     description = 'The Statue of Liberty, standing tall on Liberty Island in New York Harbor, is a beacon of freedom and democracy. Gifted by France to the United States, Lady Liberty has become an enduring symbol of hope and resilience. As you approach her, marvel at the intricate details of her crown and torch. Embark on a journey to the crown for unparalleled views of the city skyline. The Statue of Liberty is not merely a monument; she is a guardian, watching over the dreams and aspirations of all who gaze upon her.',
--     additionInfo = 'Historical landmark, Immigration symbol, Liberty Island ferry, Crown access tour, Ellis Island Museum, Statue of Liberty Museum, Nighttime illumination, Educational programs'
-- WHERE id = 6;

-- UPDATE Destination
-- SET
--     description = 'Grand Canyon National Park, a geological masterpiece carved by the mighty Colorado River, is a testament to the Earth\'s enduring beauty. As you stand on the rim, the vastness of the canyon unfolds before you, revealing a kaleidoscope of colors and rock formations that defy imagination. Whether you embark on a challenging hike down into the canyon or simply savor the views from the rim, the Grand Canyon is a journey through time, where each layer of rock tells a story millions of years in the making.',
--     additionInfo = 'Spectacular views, Hiking trails, Colorado River rafting, Havasu Falls trek, Star-gazing programs, Grand Canyon Village, Wildlife photography, South Rim viewpoints'
-- WHERE id = 7;

-- UPDATE Destination
-- SET
--     description = 'Disneyland Resort in California, the magical kingdom where dreams come to life, is a celebration of joy and fantasy. As you step through the iconic gates, you\'re transported into a world of enchanting rides, captivating shows, and beloved Disney characters. From the whimsical spires of Sleeping Beauty Castle to the futuristic allure of Tomorrowland, Disneyland is a realm where imagination knows no bounds. It\'s not just an amusement park; it\'s a sanctuary of wonder and delight for the young and young at heart.',
--     additionInfo = 'Family-friendly, Magical atmosphere, Character meet-and-greets, Parades, Nighttime spectaculars, Dining with Disney characters, Exclusive experiences, Thrilling rides'
-- WHERE id = 8;

-- UPDATE Destination
-- SET
--     description = 'Yellowstone Falls, a mesmerizing cascade within the heart of Yellowstone National Park, is nature\'s symphony of power and beauty. Whether you witness the thunderous roar of the Lower Falls or the delicate veil of the Upper Falls, each moment is a testament to the park\'s diverse and awe-inspiring ecosystem. Hike along the scenic trails, marvel at the geothermal wonders, and embrace the serenity of the wilderness. Yellowstone Falls is not just a waterfall; it\'s a poetic expression of nature\'s grandeur.',
--     additionInfo = 'Scenic beauty, Wildlife spotting, Hiking trails, Geothermal features, Yellowstone River, Artist Point, Canyon Village, Photography opportunities'
-- WHERE id = 9;

-- UPDATE Destination
-- SET
--     description = 'Miami Beach, a vibrant coastal paradise on the shores of Florida, is a sensory delight of sun, sea, and style. As you sink your toes into the white sandy beaches, the vibrant energy of Miami comes alive. From the iconic pastel-hued Art Deco architecture to the lively nightlife of South Beach, Miami Beach is a fusion of relaxation and excitement. Indulge in the cultural mosaic of Cuban influences, savor exquisite cuisine, and let the rhythmic beats of the city guide your every step.',
--     additionInfo = 'Beach paradise, Art Deco district, Water sports, Ocean Drive nightlife, Cuban cuisine, Wynwood Walls art district, Boat tours, Fashion boutiques'
-- WHERE id = 10;

-- UPDATE Destination
-- SET
--     description = 'Tokyo Disneyland, nestled in the bustling metropolis of Tokyo, is a spellbinding fusion of Japanese hospitality and Disney magic. As you explore the park, encounter unique attractions, parades, and the enchanting Cinderella Castle. Immerse yourself in the vibrant atmosphere of Japanese Disney culture, where tradition and fantasy harmoniously coexist. Tokyo Disneyland is not just an amusement park; it\'s a cultural crossroads where the East meets the enchantment of the West.',
--     additionInfo = 'Japanese Disney magic, Character meet-ups, Traditional snacks, Tokyo Disneyland Hotel, Nighttime spectaculars, Seasonal events, Disney merchandise, Parade viewing spots'
-- WHERE id = 11;

-- UPDATE Destination
-- SET
--     description = 'Mount Fuji, Japan\'s iconic and sacred peak, stands as a silent sentinel against the horizon. As you venture closer, the symmetrical perfection of Mount Fuji unfolds, inviting you to explore its cultural significance and breathtaking landscapes. Whether you embark on a pilgrimage hike, witness the sunrise from the summit, or simply admire the mountain from afar, Mount Fuji is a spiritual journey and a testament to Japan\'s deep connection with nature.',
--     additionInfo = 'Cultural landmark, Hiking adventure, Fuji Five Lakes, Hot springs, Cherry blossom viewing, Cultural festivals, Fuji Subaru Line 5th Station, Mount Fuji museums'
-- WHERE id = 12;

-- UPDATE Destination
-- SET
--     description = 'Kyoto Temples, scattered throughout the ancient city of Kyoto, are living testaments to Japan\'s rich cultural heritage. As you meander through the historic lanes, each temple unveils a chapter of Japanese history, adorned with serene Zen gardens and sacred rituals. Immerse yourself in the tranquility of these spiritual sanctuaries, where the echoes of prayer and the fragrance of incense create an atmosphere of timeless beauty and contemplation.',
--     additionInfo = 'Historical temples, Zen gardens, Tea ceremonies, Gion district, Traditional crafts, Maiko and Geisha culture, Arashiyama Bamboo Grove, Kimono rental'
-- WHERE id = 13;

-- UPDATE Destination
-- SET
--     description = 'Osaka Castle, a formidable fortress rising in the heart of Osaka, is a testament to Japan\'s feudal past and architectural prowess. Traverse through time as you explore the castle\'s towering walls, visit the museum, and ascend to the observation deck for panoramic views of Osaka. Immerse yourself in the historical narrative of samurai legends and vibrant cultural traditions that make Osaka Castle an enduring symbol of Japan\'s resilience and grandeur.',
--     additionInfo = 'Historical landmark, Museum visit, Cherry blossom season, Nishinomaru Garden, Osaka Castle Park, Samurai and ninja experiences, Osaka Museum of History, Castle illumination'
-- WHERE id = 14;

-- UPDATE Destination
-- SET
--     description = 'Hiroshima Peace Memorial, also known as the Atomic Bomb Dome, stands as a poignant tribute to the resilience of the human spirit in the face of tragedy. As you stand before this UNESCO World Heritage Site, absorb the historical significance and the symbolic call for a world free from nuclear conflict. Explore the adjacent Peace Memorial Park, where each monument tells a story of remembrance and hope for a peaceful future.',
--     additionInfo = 'Historical significance, Peaceful reflection, Hiroshima Peace Memorial Museum, Hiroshima Castle, Shukkeien Garden, Okonomiyaki dining, Miyajima Island day trip, A-Bomb Dome illumination'
-- WHERE id = 15;

-- UPDATE Destination
-- SET
--     description = 'The Great Barrier Reef, a mesmerizing underwater realm off the coast of Australia, is a living kaleidoscope of vibrant coral formations and diverse marine life. Immerse yourself in the crystal-clear waters to witness the intricate dance of marine biodiversity. Snorkel or dive into this UNESCO World Heritage Site for an unforgettable encounter with the wonders beneath the waves.',
--     additionInfo = 'Marine biodiversity, Snorkeling paradise, Coral conservation efforts, Guided diving tours, Underwater photography, Coral bleaching awareness, Indigenous marine protection initiatives'
-- WHERE id = 16;

-- UPDATE Destination
-- SET
--     description = 'The Sydney Opera House, an architectural masterpiece nestled along the harbor, is not just a cultural icon; its a symphony of design and cultural significance. Explore the sails that grace the skyline and attend a performance within its hallowed halls. Take a guided tour to unravel the stories behind this marvel, celebrating its role in shaping the artistic narrative of Sydney and the world.',
--     additionInfo = 'Architectural marvel, Cultural performances, Behind-the-scenes tours, Opera and ballet experiences, Indigenous art exhibitions, Waterfront dining, Sunset performances, Sydney Harbour Bridge views'
-- WHERE id = 17;

-- UPDATE Destination
-- SET
--     description = 'Uluru, also known as Ayers Rock, stands as a sacred monolith in the heart of Australia, surrounded by the awe-inspiring landscapes of Uluru-Kata Tjuta National Park. As you explore this red desert expanse, discover not only the geological marvel of Uluru but also the rich tapestry of Aboriginal heritage woven into the land. Engage in guided tours to gain insights into ancient stories and the spiritual significance of this UNESCO-listed site.',
--     additionInfo = 'Aboriginal heritage, Red desert landscapes, Indigenous storytelling, Guided cultural walks, Stargazing experiences, Indigenous art workshops, Cameldrive adventures, Tjukurpa teachings'
-- WHERE id = 18;

-- UPDATE Destination
-- SET
--     description = 'The Great Ocean Road, a scenic coastal masterpiece in Australia, unfolds like a visual poem along the Southern Ocean. Embark on a journey where every twist and turn reveals breathtaking views of towering cliffs, golden beaches, and the iconic Twelve Apostles. Traverse this coastal drive to witness the raw beauty of Australia\'s coastline, capturing the essence of nature\'s grandeur.',
--     additionInfo = 'Coastal drive, Natural wonders, Twelve Apostles viewpoints, Shipwreck Coast history, Surfing hotspots, Rainforest walks, Local seafood experiences, Sunset vistas'
-- WHERE id = 19;

-- UPDATE Destination
-- SET
--     description = 'Bondi Beach, a haven for surfers and sun-seekers, epitomizes the laid-back coastal vibe of Australia. The golden sands stretch as far as the eye can see, inviting you to relax, take a surf lesson, and soak up the vibrant atmosphere. Dive into the beachside cafes, where the scent of saltwater mingles with the aromas of world-class cuisine, creating an irresistible blend of surf culture and beach vibes.',
--     additionInfo = 'Surfing paradise, Beach vibes, Coastal walks, Surfing competitions, Beach yoga sessions, Beachside dining, Local art markets, Bondi to Coogee coastal walk'
-- WHERE id = 20;

-- UPDATE Destination
-- SET
--     description = 'Christ the Redeemer, the iconic statue atop Corcovado Mountain in Rio de Janeiro, transcends its role as a spiritual landmark; it is a beacon of serenity and panoramic beauty. As you ascend to this marvel, the sprawling city unfolds beneath, offering unparalleled views. This monumental masterpiece invites you not only to witness the cityscape but to feel the spiritual embrace that echoes through the hills.',
--     additionInfo = 'Spiritual landmark, City views, Sunset visits, Helicopter tours, Cultural significance, Christ the Redeemer history, Nighttime illumination, Photography excursions'
-- WHERE id = 21;

-- UPDATE Destination
-- SET
--     description = 'Copacabana Beach, a world-renowned stretch of golden sands in Rio de Janeiro, is more than a beach; its a canvas of vibrant energy and endless possibilities. Feel the pulse of the lively atmosphere as you relax on the iconic shores, where beach sports and sun-drenched days seamlessly blend. Copacabana is not just a beach; its a dynamic celebration of sun, sea, and the spirited essence of Brazilian culture.',
--     additionInfo = 'Beach paradise, Vibrant energy, Beach volleyball, Surfing lessons, Beachside markets, Samba beach parties, Fresh coconut vendors, Nighttime beach events'
-- WHERE id = 22;

-- UPDATE Destination
-- SET
--     description = 'Iguazu Falls, a breathtaking natural wonder straddling the border of Brazil and Argentina, is a symphony of cascading water amidst lush rainforest. Venture into this natures spectacle to witness the sheer power and beauty of the falls. Engage in waterfall adventures, exploring walkways that offer immersive views and glimpses of diverse wildlife in this UNESCO-listed paradise.',
--     additionInfo = 'Natures spectacle, Waterfall adventure, Boat excursions, Wildlife encounters, Moonlight walks, Birdwatching tours, Jungle safaris, Indigenous folklore'
-- WHERE id = 23;

-- UPDATE Destination
-- SET
--     description = 'The Amazon Rainforest in Brazil, the worlds largest tropical rainforest, is a canvas of greenery pulsating with life. Embark on an eco-tourism journey to explore this cradle of biodiversity, where unique wildlife and lush vegetation coexist. Engage in guided tours that unveil the secrets of the rainforest, from the mighty Amazon River to the canopy above, fostering an appreciation for the delicate balance of this extraordinary ecosystem.',
--     additionInfo = 'Eco-tourism, Wildlife exploration, Canopy walks, River cruises, Indigenous community visits, Medicinal plant discoveries, Nighttime jungle safaris, Sustainability initiatives'
-- WHERE id = 24;

-- UPDATE Destination
-- SET
--     description = 'Experience the vibrant Carnival in Rio de Janeiro, a cultural extravaganza that transcends the boundaries of music, dance, and colorful parades. Immerse yourself in the rhythmic beats of samba, vibrant costumes, and the infectious energy that fills the streets. This world-famous celebration is not just an event; its a kaleidoscope of Brazilian culture that invites you to join the festivities and become part of the spectacle.',
--     additionInfo = 'Cultural extravaganza, Samba rhythms, Carnival history, Street parties, Samba school parades, Costume workshops, Carnival cuisine, Carnival balls'
-- WHERE id = 25;

-- UPDATE Destination
-- SET
--     description = 'Table Mountain, a majestic landmark overlooking Cape Town, is more than a geographical wonder; its a canvas of scenic beauty and adventure. Whether you ascend via a cable car or embark on a hiking adventure, the summit offers panoramic views of the city, ocean, and surrounding landscapes. Table Mountain is a sanctuary where nature and urban allure converge, inviting you to explore its trails and embrace the allure of the Cape Peninsula.',
--     additionInfo = 'Scenic beauty, Hiking adventure, Cable car experiences, Full moon hikes, Birdwatching, Abseiling adventures, Sunset picnics, Table Mountain National Park'
-- WHERE id = 26;

-- UPDATE Destination
-- SET
--     description = 'Kruger National Park, one of Africas premier safari destinations, beckons with the allure of wildlife encounters and untamed landscapes. Embark on a wildlife safari amidst the vast expanse of the park, where the Big Five roam freely. Immerse yourself in the magic of the bushveld, from sunrise game drives to starlit nights, creating memories that resonate with the primal rhythm of the African wilderness.',
--     additionInfo = 'Wildlife safari, Conservation area, Guided game drives, Bushwalk safaris, Stargazing experiences, Birding safaris, Luxury safari lodges, Rhino conservation initiatives'
-- WHERE id = 27;

-- UPDATE Destination
-- SET
--     description = 'Robben Island, a UNESCO World Heritage Site near Cape Town, is not just a historical landmark; its a living testament to South Africa\'s journey from oppression to resilience. Venture to this island to explore the former prison where Nelson Mandela was held captive and gain insights into the complexities of South Africas apartheid history. Robben Island is a pilgrimage of remembrance, a place where history whispers in the winds off the Atlantic.',
--     additionInfo = 'Historical landmark, Apartheid history, Guided prison tours, Mandela legacy, Ferry excursions, Cape Town city views, Lighthouse exploration, Anti-apartheid struggle narratives'
-- WHERE id = 28;

-- UPDATE Destination
-- SET
--     description = 'Blyde River Canyon, a breathtaking natural wonder in South Africa, beckons with its lush greenery, towering red cliffs, and panoramic views. Traverse the rim of the canyon to witness natures beauty unfolding in every direction. Engage in canyon exploration, from hiking trails that lead to hidden viewpoints to boat excursions offering a unique perspective of the canyons geological formations.',
--     additionInfo = 'Canyon exploration, Natures beauty, God\'s Window viewpoints, Three Rondavels, Boat trips, Panorama Route drives, Bourke\'s Luck Potholes, Kadishi Tufa waterfall'
-- WHERE id = 29;

-- UPDATE Destination
-- SET
--     description = 'The Victoria & Alfred Waterfront in Cape Town is a vibrant harbor area that transcends the traditional definition of a waterfront. Explore the mix of historical charm and contemporary energy as you wander through shops, dine at waterfront restaurants, and immerse yourself in cultural attractions. This lively waterfront is not just a shopping and dining destination; it\'s a cultural and entertainment hub that invites you to experience Cape Town\'s dynamic spirit.',
--     additionInfo = 'Shopping, Dining, Cultural experiences, Waterside promenades, Ferris wheel rides, Maritime history tours, Two Oceans Aquarium, Artisanal craft markets'
-- WHERE id = 30;

-- UPDATE tour
-- SET description = 'Embark on an extraordinary journey to explore the mesmerizing beauty of Paris. Visit the iconic Louvre Museum, immerse yourself in the rich art and culture of the city, and indulge in the delightful flavors of authentic French cuisine. Discover the hidden gems of the City of Lights as you stroll along the charming streets and experience the romantic ambiance that envelops this enchanting destination. Uncover the history and elegance of Paris as you visit iconic landmarks, including the Eiffel Tower and Mont Saint-Michel, and create memories that will last a lifetime.',
-- additionInfo = 'Art and culture, French cuisine, Paris landmarks, Louvre Museum, City exploration'
-- WHERE id = 1;

-- UPDATE tour
-- SET description = 'Embark on a magical adventure in Japan, where dreams come to life. Experience the enchanting world of Tokyo Disneyland, marvel at the iconic Mount Fuji, and be mesmerized by the natural wonders that await you. Immerse yourself in the rich cultural heritage of Kyoto Temples and Osaka Castle, and witness the breathtaking beauty of Mount Fuji as it stands as a testament to Japan\'s natural magnificence. This journey is a perfect blend of fantasy, culture, and natural beauty that will leave you with unforgettable memories.',
-- additionInfo = 'Disney magic, Natural beauty, Japanese culture, Fantasy adventure, Mount Fuji exploration'
-- WHERE id = 2;

-- UPDATE tour
-- SET description = 'Embark on an extraordinary journey to discover the wonders of Australia. Immerse yourself in the underwater beauty of the Great Barrier Reef, marvel at the architectural splendor of the Sydney Opera House, and explore the red desert landscapes of Uluru-Kata Tjuta National Park. This adventure is a perfect blend of natural beauty, architectural marvels, and the unique landscapes that define the Australian continent. From vibrant coral reefs to iconic landmarks, this tour offers a once-in-a-lifetime experience.',
-- additionInfo = 'Underwater adventure, Architectural marvel, Red desert landscapes, Australian wonders, Sydney Opera House, Great Barrier Reef'
-- WHERE id = 3;

-- UPDATE tour
-- SET description = 'Experience the marvels of Brazil in an unforgettable journey. From the iconic Christ the Redeemer in Rio de Janeiro to the famous Copacabana Beach and the breathtaking Iguazu Falls, this tour is a blend of spiritual awe, beach paradise, and nature\'s spectacle. Immerse yourself in the vibrant culture of Brazil, explore the pulsating energy of Rio de Janeiro, and witness the power and beauty of one of the world\'s most spectacular waterfalls. This adventure will take you through the heart of Brazil, showcasing its diverse landscapes and cultural richness.',
-- additionInfo = 'Spiritual awe, Beach paradise, Nature\'s spectacle, Brazilian marvels, Rio de Janeiro, Copacabana Beach, Iguazu Falls'
-- WHERE id = 4;

-- UPDATE tour
-- SET description = 'Embark on a captivating journey through the diverse landscapes of South Africa. Experience the thrill of a wildlife safari in Kruger National Park, marvel at the stunning beauty of Table Mountain, and delve into the rich history of Apartheid with a visit to Robben Island. This cultural safari is a perfect blend of wildlife adventure, scenic landscapes, and historical exploration. From the majestic wildlife to the captivating stories of South Africa\'s past, this tour offers a comprehensive and unforgettable experience.',
-- additionInfo = 'Wildlife safari, Scenic landscapes, Apartheid history, South African culture, Kruger National Park, Table Mountain, Robben Island'
-- WHERE id = 5;

-- UPDATE tour
-- SET description = 'Embark on a journey to explore the iconic landmarks of the United States. From the historic Statue of Liberty to the natural wonders of the Grand Canyon and Yellowstone Falls, this expedition is a celebration of American history and natural beauty. Immerse yourself in the stories of the past at historical landmarks, be awestruck by the grandeur of the Grand Canyon, and witness the spectacular Yellowstone Falls. This adventure is a tribute to the diversity and beauty of the United States, from coast to coast.',
-- additionInfo = 'Historical landmarks, Natural wonders, American history, Statue of Liberty, Grand Canyon, Yellowstone Falls'
-- WHERE id = 6;

-- UPDATE tour
-- SET description = 'Immerse yourself in the historical richness of Japan with a tour that explores the cultural heritage of Kyoto Temples, the majestic beauty of Osaka Castle, and the iconic presence of Mount Fuji. This triangle of historical wonders invites you to step back in time as you wander through centuries-old temples, marvel at the architectural brilliance of Osaka Castle, and witness the breathtaking beauty of Mount Fuji. This journey is a perfect blend of cultural exploration, architectural marvels, and the natural splendor that defines Japan.',
-- additionInfo = 'Cultural heritage, Architectural marvels, Natural beauty, Japanese history, Kyoto Temples, Osaka Castle, Mount Fuji'
-- WHERE id = 7;

-- UPDATE tour
-- SET description = 'Embark on a coastal adventure in Australia with a trio of experiences that showcase the beauty of the coastline. Drive along the stunning Great Ocean Road, relax on the iconic Bondi Beach, and explore the architectural marvel of the Sydney Opera House. This coastal trio is a perfect blend of scenic drives, beach vibes, and architectural wonders. From the rugged cliffs of the Great Ocean Road to the golden sands of Bondi Beach, this tour captures the essence of Australia\'s coastal charm.',
-- additionInfo = 'Coastal drive, Beach vibes, Architectural marvel, Australian coast, Great Ocean Road, Bondi Beach, Sydney Opera House'
-- WHERE id = 8;

-- UPDATE tour
-- SET description = 'Explore the natural wonders and cultural marvels of Brazil with this immersive tour. From the awe-inspiring Iguazu Falls and the breathtaking Amazon Rainforest to the unique Pantanal Wetlands and the vibrant Carnival in Rio, this trilogy of experiences offers a comprehensive journey through the diverse landscapes and rich traditions of Brazil. Immerse yourself in the spectacle of nature, encounter unique wildlife, and participate in the energy of one of the world\'s most famous carnivals.',
-- additionInfo = 'Nature\'s spectacle, Wildlife exploration, Cultural extravaganza, Brazil, Iguazu Falls, Amazon Rainforest, Pantanal Wetlands, Rio Carnival'
-- WHERE id = 9;

-- UPDATE tour
-- SET description = 'Embark on a global adventure to witness the wonders of the world. From the iconic Statue of Liberty to the Sydney Opera House, the scenic beauty of the Great Ocean Road, and the red desert landscapes of Uluru-Kata Tjuta National Park, this expedition is a journey to some of the planet\'s most renowned landmarks. Immerse yourself in the cultural richness, marvel at architectural marvels, and traverse diverse landscapes that define the beauty of our world.',
-- additionInfo = 'Global landmarks, Scenic drive, Red desert landscapes, World wonders, Statue of Liberty, Sydney Opera House, Great Ocean Road, Uluru-Kata Tjuta National Park'
-- WHERE id = 10;

-- UPDATE tour
-- SET description = 'Experience the magic of Japan with a delightful journey that combines the enchantment of Tokyo Disneyland and the historical richness of Kyoto Temples. Immerse yourself in the whimsical world of Disney magic, explore centuries-old temples, and enjoy the scenic beauty of Mount Fuji. This tour offers a perfect blend of fantasy, cultural heritage, and natural beauty, making it an unforgettable adventure in the Land of the Rising Sun.',
-- additionInfo = 'Disney magic, Cultural heritage, Natural beauty, Japan, Tokyo Disneyland, Kyoto Temples, Mount Fuji'
-- WHERE id = 11;

-- UPDATE tour
-- SET description = 'Discover the coastal bliss of Australia with this relaxing tour. From the iconic Bondi Beach to snorkeling in the Great Barrier Reef and exploring the architectural marvel of the Sydney Opera House, this coastal retreat offers a perfect blend of beach vibes, underwater adventure, and architectural wonders. Relax on sandy shores, dive into the vibrant underwater world, and marvel at the iconic structures that define the beauty of Australia\'s coastline.',
-- additionInfo = 'Beach vibes, Underwater adventure, Architectural marvel, Australian coast, Bondi Beach, Great Barrier Reef, Sydney Opera House'
-- WHERE id = 12;

-- UPDATE tour
-- SET description = 'Indulge in the elegance of Paris with this sophisticated tour. Stroll along the iconic Champs-Élysées, explore the renowned Musée d\'Orsay, and experience the epitome of Parisian elegance. Immerse yourself in the City of Lights, surrounded by art, culture, and historical charm. This tour is a perfect blend of romantic ambiance and architectural marvels, offering a unique perspective on the beauty of Paris.',
-- additionInfo = 'City of Lights, Art and culture, Paris, Champs-Élysées, Musée d\'Orsay, Romantic atmosphere, Architectural marvels'
-- WHERE id = 21;

-- UPDATE tour
-- SET description = 'Admire the Gothic marvels of Paris with this captivating tour. Explore the stunning architecture of Sainte-Chapelle and Notre-Dame Cathedral, two masterpieces of Gothic art in the heart of Paris. Discover the historical significance and architectural gems that define the beauty of these landmarks. This tour is a journey through time, offering a glimpse into the rich history and artistry of Gothic Paris.',
-- additionInfo = 'Architectural gems, Historical landmarks, Paris, Gothic art, Sainte-Chapelle, Notre-Dame Cathedral'
-- WHERE id = 22;

-- UPDATE tour
-- SET description = 'Embark on a romantic journey through the enchanting nights of Paris. Indulge in a romantic Seine River cruise and enjoy a mesmerizing night tour of the Eiffel Tower. Experience the city lights and the romantic atmosphere that make Paris truly magical at night. This tour is a perfect blend of romance, elegance, and the captivating beauty of Paris after sunset.',
-- additionInfo = 'City lights, Romantic atmosphere, Paris, Seine River cruise, Eiffel Tower, Night tour'
-- WHERE id = 23;

-- UPDATE tour
-- SET description = 'Explore the wonders of Rio de Janeiro with this extravagant tour. Marvel at the beauty of Christ the Redeemer, relax on the famous Copacabana Beach, and immerse yourself in the vibrant Carnival in Rio. Experience spiritual awe, beach paradise, and cultural extravaganza all in one tour. This journey offers a comprehensive exploration of the diverse marvels that make Rio de Janeiro a unique and captivating destination.',
-- additionInfo = 'Spiritual awe, Beach paradise, Cultural extravaganza, Rio de Janeiro, Christ the Redeemer, Copacabana Beach, Rio Carnival'
-- WHERE id = 18;

-- UPDATE tour
-- SET description = 'Embark on a discovery of South Africa\'s rich landscapes and history with this immersive tour. Visit Table Mountain, go on a safari in Kruger National Park, explore the historic Robben Island, and marvel at the stunning Blyde River Canyon. This tour offers a perfect blend of scenic landscapes, wildlife safari, and historical landmarks, providing a comprehensive experience of South Africa\'s natural and cultural wonders.',
-- additionInfo = 'Scenic landscapes, Wildlife safari, Historical landmarks, South Africa, Table Mountain, Kruger National Park, Robben Island, Blyde River Canyon'
-- WHERE id = 19;

-- UPDATE tour
-- SET description = 'Embark on a journey through the heart of Brazil with this wilderness adventure. Explore the Amazon Rainforest, witness the awe-inspiring Iguazu Falls, and experience the unique Pantanal Wetlands. Immerse yourself in wildlife exploration, nature\'s spectacle, and the diverse ecosystems that define the beauty of Brazil. This tour offers a comprehensive adventure through the natural wonders of one of the world\'s most biodiverse countries.',
-- additionInfo = 'Wildlife exploration, Nature\'s spectacle, Wetland adventure, Brazil, Amazon Rainforest, Iguazu Falls, Pantanal Wetlands'
-- WHERE id = 14;

-- UPDATE tour
-- SET description = 'Witness the natural wonders of Brazil with this trilogy tour. Visit the awe-inspiring Iguazu Falls, journey into the breathtaking Amazon Rainforest, and explore the unique Pantanal Wetlands. Immerse yourself in nature\'s spectacle, wildlife exploration, and wetland adventure. This tour offers a comprehensive experience of Brazil\'s diverse ecosystems and the stunning beauty of its natural landscapes.',
-- additionInfo = 'Nature\'s spectacle, Wildlife exploration, Wetland adventure, Brazil, Iguazu Falls, Amazon Rainforest, Pantanal Wetlands'
-- WHERE id = 20;

-- UPDATE tour
-- SET description = 'Embark on a global adventure with this world wonders tour. Journey to iconic landmarks, from the Statue of Liberty to the Sydney Opera House, the Great Ocean Road, and Uluru-Kata Tjuta National Park. Immerse yourself in global landmarks, scenic drives, and the unique red desert landscapes of Australia. This tour offers a comprehensive exploration of some of the world\'s most famous and breathtaking attractions.',
-- additionInfo = 'Global landmarks, Scenic drives, Red desert landscapes, World wonders, Statue of Liberty, Sydney Opera House, Great Ocean Road, Uluru-Kata Tjuta National Park'
-- WHERE id = 13;

-- UPDATE tour
-- SET description = 'Experience the magic of Japan with this delightful tour. Immerse yourself in the enchantment of Tokyo Disneyland and explore the historical richness of Kyoto Temples. This tour offers a perfect blend of Disney magic and cultural heritage, providing a unique and memorable experience in the land of the rising sun.',
-- additionInfo = 'Disney magic, Cultural heritage, Japan, Tokyo Disneyland, Kyoto Temples'
-- WHERE id = 17;

-- UPDATE tour
-- SET description = 'Explore the architectural marvel of the Sydney Opera House and embark on a scenic drive along the Great Ocean Road with this coastal retreat tour. Immerse yourself in the beauty of architectural wonders and scenic drives, experiencing the best of Australia\'s coastal landscapes. This tour offers a perfect blend of cultural exploration and natural beauty.',
-- additionInfo = 'Architectural marvel, Scenic drives, Australia, Sydney Opera House, Great Ocean Road'
-- WHERE id = 16;

-- UPDATE tour
-- SET description = 'Embark on an unforgettable journey with our French Elegance tour and immerse yourself in the timeless beauty of Paris. Explore the iconic Champs-Élysées, where fashion meets grandeur. Ascend the world-renowned Eiffel Tower for panoramic views of the city, and discover the enchanting Mont Saint-Michel, a testament to historical charm. This experience is a celebration of the City of Love, an encounter with architectural marvels, and a walk through the pages of history.',
--     additionInfo = 'City of Love, Architectural marvel, Historical charm, Paris, Champs-Élysées, Eiffel Tower, Mont Saint-Michel'
-- WHERE id = 15;
