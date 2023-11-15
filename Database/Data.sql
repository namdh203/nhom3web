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