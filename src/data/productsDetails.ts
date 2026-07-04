export interface SubProduct {
  id: number;
  name: string;
  descriptions: string[];
  align: 'left' | 'right';
}

export interface CategoryDetail {
  categoryId: string; // e.g. "1", "2", or slug
  title: string;
  items: SubProduct[];
  disclaimer: string;
}

export const categoryDetails: CategoryDetail[] = [
  {
    categoryId: '1',
    title: 'Millets & Ancient Grains',
    disclaimer: 'Disclaimer: Product images and specifications represent our premium export grade; natural variations in color and grain size may occur across harvest batches. Sourcing and regional volume metrics are subject to seasonal crop yields and market availability.',
    items: [
      {
        id: 1,
        name: 'Finger Millet (Ragi)',
        descriptions: [
          'Sourcing Locations: Tumakuru, Mandya, Chitradurga, and Hassan districts in Karnataka, alongside Krishnagiri and Dharmapuri in Tamil Nadu.',
          'Production Volume: Sourced from regions accounting for over 1.2 million metric tonnes annually, utilizing Karnataka\'s position as India\'s leading producer (~60% national share).',
          'Quality Standard: Grade-A bold grains, deep reddish-brown color, completely sand/grit-free, featuring a naturally high calcium profile (minimum 340 mg per 100g) and robust kernel density.',
        ],
        align: 'left',
      },
      {
        id: 2,
        name: 'Pearl Millet',
        descriptions: [
          'Sourcing Locations: Villupuram, Thoothukudi, Perambalur, and Madurai districts in Tamil Nadu, and Vijayapura and Bagalkot in Karnataka.',
          'Production Volume: Cultivated across dedicated semi-arid zones yielding high-density micro-crops, with regional clusters contributing over 3,500 tonnes per target district.',
          'Quality Standard: Uniform grayish-green whole grains, thoroughly machine-cleaned, featuring less than 1% broken seeds and premium moisture control (under 12%) ensuring an extended shelf-life.',
        ],
        align: 'right',
      },
      {
        id: 3,
        name: 'Sorghum Millet',
        descriptions: [
          'Sourcing Locations: Vijayapura, Dharwad, and Belagavi in Northern Karnataka, Adilabad and Mahabubnagar in Telangana, and Coimbatore in Tamil Nadu.',
          'Production Volume: Procured from deep black-soil tracts that lead Southern India\'s dual-season (Kharif and Rabi) production cycles.',
          'Quality Standard: Pearly white, bold grains with high flintiness (kernel hardness), zero grain-mold contamination, and highly optimized for clean gluten-free milling.',
        ],
        align: 'left',
      },
      {
        id: 4,
        name: 'Barnyard Millet',
        descriptions: [
          'Sourcing Locations: Madurai, Theni, and Dindigul districts (Eastern Ghats foothills) in Tamil Nadu, and tribal agricultural clusters in Andhra Pradesh.',
          'Production Volume: Tracked through specialized regional farmer-producer networks yielding high-purity micro-batches under strict rainfed parameters.',
          'Quality Standard: Uniform light-yellow, compact seeds, offering high hulling recovery rates (greater than 70%), low glycemic load, and zero pesticide residues.',
        ],
        align: 'right',
      },
      {
        id: 5,
        name: 'Kodo Millet',
        descriptions: [
          'Sourcing Locations: Ramanathapuram, Sivagangai, and Pudukkottai in Tamil Nadu, and the dryland agricultural belts of Telangana.',
          'Production Volume: Integrated directly with traditional organic dryland farming clusters operating under dedicated state millet-export initiatives.',
          'Quality Standard: De-hulled with deep brown bran layers fully intact, rich in stable dietary fiber, uniform grain sizing, and strictly tested for absolute dryness to prevent post-harvest spoilage.',
        ],
        align: 'left',
      },
      {
        id: 6,
        name: 'Little Millet',
        descriptions: [
          'Sourcing Locations: Dharmapuri, Vellore, and Tiruvannamalai (Jawadhu Hills) in Northern Tamil Nadu, and semi-arid zones of Southern Karnataka.',
          'Production Volume: Sourced directly from dedicated minor-millet mountain belts and rainfed zones specializing in short-cycle eco-farming.',
          'Quality Standard: High-purity polished small white/cream grains, minimum 99% purity matrix after processing, free from infestation, and possessing premium culinary fluffiness.',
        ],
        align: 'right',
      },
    ],
  },
  {
    categoryId: '2',
    title: 'Rice Varieties',
    disclaimer: 'Disclaimer: Grain length and aging metrics reflect standard specifications at the time of milling and sorting. Actual cooking results and elongation may vary based on water quality, regional storage conditions, and preparation methods.',
    items: [
      {
        id: 1,
        name: 'Sona Masoori Rice (Premium Medium Grain)',
        descriptions: [
          'Sourcing Locations: Raichur, Ballari, Koppal, and Gangavathi districts in Karnataka, alongside Guntur, Krishna, and Nellore districts in Andhra Pradesh.',
          'Production Volume: Procured from the prime Krishna-Tungabhadra basin clusters, supporting regional crop outputs exceeding 2.5 million metric tonnes annually for global distribution.',
          'Quality Standard: Aged for a minimum of 12 months to guarantee a lightweight, non-sticky texture; features highly uniform, silky sortex-cleaned medium grains with low moisture content (under 13%) and flawless cooking elongation.',
        ],
        align: 'left',
      },
      {
        id: 2,
        name: 'Ponni Rice (Non-Basmati Staple - Raw / Parboiled)',
        descriptions: [
          'Sourcing Locations: Thanjavur (The Rice Bowl of Tamil Nadu), Tiruvarur, Nagapattinam, and Salem districts in Tamil Nadu.',
          'Production Volume: Extracted from the highly fertile Cauvery Delta region, which accounts for a dominant share of South India\'s bulk non-basmati exports to South-East Asia and the GCC.',
          'Quality Standard: High-purity milling with a grain size above 5mm, pristine white or golden hue depending on processing, easily digestible with low starch-stickiness, and entirely free from musty odors or discolored grains.',
        ],
        align: 'right',
      },
      {
        id: 3,
        name: 'Seeraga Samba Rice (Aromatic Short Grain / Biryani Rice)',
        descriptions: [
          'Sourcing Locations: Madurai, Dindigul, and Tiruchirappalli districts in Tamil Nadu.',
          'Production Volume: Sourced from specialized heirloom grain networks operating under rigorous quality control to fulfill high-premium niche exports to the UK, USA, and UAE.',
          'Quality Standard: Extremely small, ovular grains resembling cumin seeds (seeragam), globally prized for its unique aroma and ability to absorb heavy culinary flavors without breaking, with less than 0.5% broken grains per batch.',
        ],
        align: 'left',
      },
      {
        id: 4,
        name: 'Palakkadan Matta Rice (Rose Matta / Bold Red Rice)',
        descriptions: [
          'Sourcing Locations: Palakkad district in Kerala, as well as the coastal Dakshina Kannada and Udupi districts in Karnataka.',
          'Production Volume: Sourced directly from registered farmer collectives utilizing the unique, lime-rich black cotton soils (Poonthalpadam) protected by a Geographical Indication (GI) status.',
          'Quality Standard: Authentic bold grains retaining the rich red outer pericarp layer, available in high-nutrient single or double-boiled variations, displaying exceptional water absorption capacity and zero chemical additives.',
        ],
        align: 'right',
      },
      {
        id: 5,
        name: 'IR64 / PR11 Rice (Long Grain - Raw / Parboiled)',
        descriptions: [
          'Sourcing Locations: East Godavari and West Godavari districts in Andhra Pradesh, and Nalgonda and Nizamabad districts in Telangana.',
          'Production Volume: Leveraged from mega-yield institutional farming belts that drive major container-shipments for bulk economic supply to African and Middle Eastern ports.',
          'Quality Standard: 6mm+ average grain length, high sortex purity rating (99.5% separation accuracy), less than 5% broken grain allowance, and optimized for high-volume commercial catering durability.',
        ],
        align: 'left',
      },
    ],
  },
  {
    categoryId: '3',
    title: 'Other Cereals & Grains',
    disclaimer: 'Disclaimer: Sourcing locations and total regional production metrics are based on seasonal harvesting patterns and market cycles. Moisture parameters and grain profiles are strictly maintained to meet commercial and export specifications.',
    items: [
      {
        id: 1,
        name: 'Yellow Maize (Corn / Institutional Grade)',
        descriptions: [
          'Sourcing Locations: Davanagere (The Maize Hub of the South), Haveri, and Belagavi districts in Karnataka, Karimnagar and Khammam in Telangana, and Perambalur in Tamil Nadu.',
          'Production Volume: Procured from the highest-yielding maize belts in South India, where regional annual production consistently clears 4.5 million metric tonnes.',
          'Quality Standard: High-energy flint corn kernels, strictly limited moisture content (maximum 14%), low aflatoxin levels (under 20 ppb to meet stringent export protocols), and clean-sorted for poultry feed and starch extraction.',
        ],
        align: 'left',
      },
      {
        id: 2,
        name: 'Samba Wheat (Emmer Wheat)',
        descriptions: [
          'Sourcing Locations: Dharwad, Belagavi, and Vijayapura districts in Karnataka, alongside the dryland agricultural tracts of Northern Tamil Nadu.',
          'Production Volume: Sourced from traditional dryland farming zones that preserve this ancient, weather-resilient wheat variety, contributing to specialized grain pools of roughly 50,000 tonnes annually.',
          'Quality Standard: Hard, long, reddish grains with low gluten strength but exceptionally rich dietary fiber; completely unpolished, Sortex-cleaned, and zero chemical fumigant traces, optimized for health-conscious premium retail packaging.',
        ],
        align: 'right',
      },
    ],
  },
  {
    categoryId: '4',
    title: 'Pulses & Lentils',
    disclaimer: 'Disclaimer: While all items undergo rigorous mechanical sorting and laser cleaning, slight variations in natural seed color and shape may occur across different harvest lots. Cooking times may vary depending on storage duration and localized water hardness.',
    items: [
      {
        id: 1,
        name: 'Black Chickpeas (Bengal Gram / Kala Chana)',
        descriptions: [
          'Sourcing Locations: Kalaburagi (The Pulse Bowl of Karnataka) and Vijayapura in Karnataka, and Kurnool and Anantapur in Andhra Pradesh.',
          'Production Volume: Procured from the heavy black cotton soil belts of the Deccan Plateau, tapping into a massive production base yielding over 800,000 metric tonnes during the Rabi (winter) harvest.',
          'Quality Standard: Uniform dark brown color, uniform medium-to-bold grain size, moisture under 11% to eliminate storage pests, high splitting/hulling recovery yields, and completely free from weevil damage.',
        ],
        align: 'left',
      },
      {
        id: 2,
        name: 'Horse Gram',
        descriptions: [
          'Sourcing Locations: Dharmapuri and Krishnagiri districts in Tamil Nadu, and Chamarajanagar and Mandya in Karnataka.',
          'Production Volume: Sourced from rainfed, dryland agricultural Belts that specialize in this highly climate-resilient crop, yielding over 40,000 tonnes annually.',
          'Quality Standard: Small, hard, distinctively flat oval seeds with a deep reddish-brown or iron-grey color; moisture content strictly under 10% for superior storage life, and completely free from field stones.',
        ],
        align: 'right',
      },
      {
        id: 3,
        name: 'Green Gram (Moong Dal - Whole / Split)',
        descriptions: [
          'Sourcing Locations: Gadag, Dharwad, and Haveri in Karnataka, and Tuticorin and Nagapattinam in Tamil Nadu.',
          'Production Volume: Procured from major Kharif (monsoon) harvest clusters, drawing from regional pools that produce upwards of 150,000 metric tonnes of export-ready stock.',
          'Quality Standard: Bright, uniform lustrous green skins (for whole), deep yellow hue (for split), minimum 99% Sortex-purity matrix, zero artificial polish/oil treatments, and excellent cooking soft-yield.',
        ],
        align: 'left',
      },
      {
        id: 4,
        name: 'Black Urad Dal (Whole Black Gram)',
        descriptions: [
          'Sourcing Locations: Thanjavur and Tiruvarur (Cauvery Delta) in Tamil Nadu, and Guntur and Krishna districts in Andhra Pradesh.',
          'Production Volume: Extracted from the highly fertile rice-fallow fields post-rice harvest, utilizing a mega-yield cluster contributing over 300,000 tonnes annually.',
          'Quality Standard: Bold, uniform jet-black seeds, rich in natural mucilage (essential for idli/dosa batter fermentation), thoroughly machine-cleaned to ensure zero dirt or broken pods.',
        ],
        align: 'right',
      },
      {
        id: 5,
        name: 'White Urad Dal (Split & De-hulled)',
        descriptions: [
          'Sourcing Locations: Processing and milling clusters in Salem and Madurai (Tamil Nadu), and Nellore (Andhra Pradesh).',
          'Production Volume: Processed through advanced state-of-the-art milling facilities that handle bulk cleaning and mechanized de-hulling for international container shipments.',
          'Quality Standard: Pristine milky-white appearance, unpolished to preserve natural proteins, zero chalky or immature grains, and less than 1% broken allowance in the Gota (whole skinless) variant.',
        ],
        align: 'left',
      },
      {
        id: 6,
        name: 'Toor Dal / Arhar (Pigeon Pea - Premium Laser Cleaned)',
        descriptions: [
          'Sourcing Locations: Kalaburagi (The Tur Dal Capital of India), Bidar, and Yadgir districts in Karnataka, alongside Tandur in Telangana, and Prakasam and Nandyal in Andhra Pradesh.',
          'Production Volume: Procured directly from the premier peninsular pulse belt, where Karnataka alone drives a dominant national production share exceeding 800,000 metric tonnes annually.',
          'Quality Standard: Grade-A bold grains, deep golden yellow color with standard oil-treated or unpolished laser-sortex options; features exceptionally high protein content (~22%), uniform cooking times, and a distinct sweet aroma.',
        ],
        align: 'right',
      },
      {
        id: 7,
        name: 'Fried Gram (Roasted Chana Dal)',
        descriptions: [
          'Sourcing Locations: Processing and roasting hubs in Salem and Coimbatore (Tamil Nadu), and Kurnool processing clusters (Andhra Pradesh).',
          'Production Volume: Sourced via specialized high-capacity commercial roasting units handling container-sized lots specifically balanced to supply snack and paste manufacturers globally.',
          'Quality Standard: Crispy, completely dry, pale cream-yellow whole or split roasted kernels; strictly monitored to be zero-charred, free from chalky texture, and packing an ultra-low moisture rating (under 5%) for long-haul maritime shipping safety.',
        ],
        align: 'left',
      },
      {
        id: 8,
        name: 'Masoor Dal (Split Red Lentils - Southern Variant)',
        descriptions: [
          'Sourcing Locations: Irrigated river basin fringes of Raichur (Karnataka) and Adilabad (Telangana).',
          'Production Volume: Tracked via dedicated micro-climate contract farms delivering a consistent regional supply of approximately 15,000 tonnes annually.',
          'Quality Standard: Vibrant orange/red split seeds with a smooth surface finish, strict sortex profiling ensuring zero hull fragments or dark spots, and exceptionally fast heat-hydration rates during processing.',
        ],
        align: 'right',
      },
    ],
  },
  {
    categoryId: '5',
    title: 'Oil Seeds',
    disclaimer: 'Disclaimer: Oil concentration ranges and FFA profiles represent laboratory test standards at the time of processing. Final quality metrics are subject to natural variations depending on crop seasonal cycles and specific regional sourcing nodes.',
    items: [
      {
        id: 1,
        name: 'Groundnut / Peanut (Bold & Java Export Grades)',
        descriptions: [
          'Sourcing Locations: Anantapur and Chittoor districts in Andhra Pradesh; Tiruvannamalai, Villupuram, and Vellore districts in Tamil Nadu; and Chitradurga and Tumakuru in Karnataka.',
          'Production Volume: Procured from the heart of Southern India\'s dominant rainfed and irrigated peanut belts; our sourcing regions tap into an aggregate provincial yield exceeding 1.2 million metric tonnes annually.',
          'Quality Standard: Available in highly calibrated counts; features a strict moisture limit below 7-8%, an oil concentration of 48-50%, and dual-laboratory certification guaranteeing absolute zero Aflatoxin contamination.',
        ],
        align: 'left',
      },
      {
        id: 2,
        name: 'Sesame Seeds (Til / Gingelly - White & Black Grades)',
        descriptions: [
          'Sourcing Locations: Erode, Villupuram, Karur, and Thanjavur districts in Tamil Nadu; Vijayapura, Bagalkot, and Belagavi in Northern Karnataka; and the coastal Godavari districts in Andhra Pradesh.',
          'Production Volume: Integrated with major river-basin and semi-arid harvest clusters contributing to a high-purity regional supply framework of over 250,000 tonnes.',
          'Quality Standard: Offered in 99.5% to 99.9% Sortex-clean varieties; perfectly uniform seeds free from stone or structural impurities, boasting an oil yield matrix above 50% with an exceptionally low free fatty acid (FFA) profile under 1-2%.',
        ],
        align: 'right',
      },
      {
        id: 3,
        name: 'Castor Seeds',
        descriptions: [
          'Sourcing Locations: Namakkal (the leading castor seed tract), Krishnagiri, Dharmapuri, and Salem districts in Tamil Nadu, alongside Kurnool and Anantapur in Andhra Pradesh, and Gadag in Karnataka.',
          'Production Volume: Procured from traditional South Indian semi-arid rainfed clusters and specialized inter-cropping belts that yield an annual provincial pool of roughly 45,000 metric tonnes.',
          'Quality Standard: High-purity, uniform bold hybrid seeds completely free from moisture damage; meticulously tested to guarantee a massive base oil yield capacity of 48% to 52%, a low moisture ceiling (under 7%), and zero infestation.',
        ],
        align: 'left',
      },
      {
        id: 4,
        name: 'Raw Neem Seeds',
        descriptions: [
          'Sourcing Locations: Extensive, sustainable rural collection networks across the natural vegetation zones of Tamil Nadu and dry deciduous belts of Southern Karnataka.',
          'Production Volume: Integrated directly with organized village farmer networks collecting fully matured fallen fruits during the peak summer harvest (May to July).',
          'Quality Standard: 100% natural, hand-picked mature whole seeds that are carefully shade-dried; strictly monitored to yield a high Azadirachtin concentration profile (300 to 1200+ ppm), guaranteed free from chemical solvent exposure.',
        ],
        align: 'right',
      },
    ],
  },
  {
    categoryId: '6',
    title: 'Nuts & Cocoa Beans',
    disclaimer: 'Disclaimer: Count sizes, grades, and moisture margins are aligned with international trade specifications at the point of packaging. Natural variations in kernel coloration and flavor profiles can occur due to seasonal climatic changes.',
    items: [
      {
        id: 1,
        name: 'Cashew Nuts (Premium Kaju / Export W180 to W320 Grades)',
        descriptions: [
          'Sourcing Locations: Ariyalur, Cuddalore, and Pudukkottai districts in Tamil Nadu; Srikakulam, Vizianagaram, and East Godavari in Andhra Pradesh; and Udupi and Dakshina Kannada in Karnataka.',
          'Production Volume: Procured directly from the country\'s elite coastal peninsular plantation zones; tapping into robust state-level outputs.',
          'Quality Standard: Premium, internationally recognized whole white kernels; processed through certified peeling and mechanical roasting lines to ensure a crisp texture, uniform ivory color, and sub-5% moisture levels.',
        ],
        align: 'left',
      },
      {
        id: 2,
        name: 'Premium Cacao Beans (Cocoa Beans / Confectionery Grade)',
        descriptions: [
          'Sourcing Locations: Eluru and West Godavari districts in Andhra Pradesh, and specialized plantation inter-cropping belts in Karnataka and Tamil Nadu.',
          'Production Volume: Integrated directly with the fast-growing South Indian cocoa network, drawing from a high-quality regional production pool clearing 32,000+ metric tonnes annually.',
          'Quality Standard: 100% natural, well-fermented, and sun-dried whole cocoa beans sourced from clean agroforestry estates; strictly sorted to guarantee an optimized bean count and low moisture content (6-7%).',
        ],
        align: 'right',
      },
    ],
  },
  {
    categoryId: '7',
    title: 'Natural Sweeteners',
    disclaimer: 'Disclaimer: Being 100% natural and unrefined products, our jaggery variants may exhibit subtle variations in color, texture, and sweetness profile across batches. Product storage longevity is highly dependent on humidity and temperature control post-delivery.',
    items: [
      {
        id: 1,
        name: 'Traditional Cane Jaggery (Gur / Round Blocks & Cubes)',
        descriptions: [
          'Sourcing Locations: Erode, Salem, and Coimbatore districts in Tamil Nadu, alongside Mandya and Belagavi in Karnataka, and Chittoor in Andhra Pradesh.',
          'Production Volume: Sourced directly from South India’s most robust sugarcane farming tracts, leveraging an all-India raw production base that feeds a booming export industry.',
          'Quality Standard: Available in chemical-free golden-brown round blocks, uniform cubes, and premium granular powder; strictly monitored for an ash content under 0.5% and zero synthetic bleaching agents.',
        ],
        align: 'left',
      },
      {
        id: 2,
        name: 'Premium Organic Jaggery Powder (Free-Flowing Retail Grade)',
        descriptions: [
          'Sourcing Locations: Sourced from certified organic sugarcane farms in Tirunelveli and Erode districts in Tamil Nadu, and specialized organic farming cooperative clusters in Mandya (Karnataka).',
          'Production Volume: Integrated directly with decentralized, small-scale rural micro-enterprises and women-led cooperative societies.',
          'Quality Standard: 100% natural, unrefined free-flowing jaggery powder processed under stringent hygienic conditions; features an ultra-low moisture rating (sub-3%) to guarantee an extended 12-month shelf life.',
        ],
        align: 'right',
      },
    ],
  },
  {
    categoryId: '8',
    title: 'Spices & Aromatics',
    disclaimer: 'Disclaimer: Curcumin percentages, ASTA values, and volatile oil concentrations are based on peak-harvest laboratory test metrics and may vary slightly between lots. Ultimate product performance is subject to proper storage away from direct sunlight and moisture.',
    items: [
      {
        id: 1,
        name: 'Premium Turmeric',
        descriptions: [
          'Sourcing Locations: Erode, Salem, Dharmapuri, and Coimbatore districts in Tamil Nadu; Nizamabad in Telangana; and the Duggirala cluster in Andhra Pradesh.',
          'Production Volume: Procured from the primary commercial turmeric corridors of India, leveraging Tamil Nadu’s dominant crop yields exceeding 111,000 metric tonnes annually.',
          'Quality Standard: Available in unpolished, double-polished, and Sortex-cleaned whole fingers or premium ground powder; monitored for a high Curcumin concentration profile (ranging from 3.5% to over 5%).',
        ],
        align: 'left',
      },
      {
        id: 2,
        name: 'Dry Red Chili',
        descriptions: [
          'Sourcing Locations: Palnadu, Kurnool, Bapatla, and Guntur districts in Andhra Pradesh; Khammam and Warangal districts in Telangana; and Ramanathapuram in Tamil Nadu.',
          'Production Volume: Procured directly from the epicenter of global red chili production, integrating with high-yield farming frameworks.',
          'Quality Standard: High-grade, sun-dried whole red chilies with thick, uniform skins; packing an ASTA color value matrix of 60–90, a SHU pungency rating up to 350,000, and strictly limited moisture content under 11%.',
        ],
        align: 'right',
      },
      {
        id: 3,
        name: 'Malabar & Tamil Nadu Black Pepper',
        descriptions: [
          'Sourcing Locations: Wayanad, Idukki, and Kannur districts in Kerala; Kodagu, Chikmagalur, and Hassan districts in Karnataka; and high-altitude hill tracts in Tamil Nadu.',
          'Production Volume: Sourced directly from the high-altitude, humid hill tracts of the Western Ghats and Eastern Ghats.',
          'Quality Standard: Features heavy, deep black-brown whole berries characterized by a high bulk density matrix, a strong Piperine concentration (~4-5%), sub-11% moisture levels, and machine-sifted.',
        ],
        align: 'left',
      },
      {
        id: 4,
        name: 'Green Cardamom (Small Cardamom / Alleppey Green Extra Bold)',
        descriptions: [
          'Sourcing Locations: The Cardamom Hills of Idukki in Kerala, and Bodinayakanur in Theni district, Tamil Nadu.',
          'Production Volume: Procured from the misty mountain zones of the southern peninsula and channeled through the premier trade and mechanized sortex-processing hub in Bodinayakanur.',
          'Quality Standard: Internationally recognized premium Alleppey Green Extra Bold (AGEB) pods featuring calibrated sizing from 7mm to 8mm+; strictly shade-dried to retain an intense deep green natural hue.',
        ],
        align: 'right',
      },
      {
        id: 5,
        name: 'Premium Sourced Tamarind (Valan Puli / Deseeded & Block Grade)',
        descriptions: [
          'Sourcing Locations: Dharmapuri, Krishnagiri, Dindigul, and Madurai districts in Tamil Nadu.',
          'Production Volume: Tapped from the core of South India’s tamarind economy; Tamil Nadu delivers an average annual yield of 44,650 metric tonnes.',
          'Quality Standard: High-flesh, well-matured deep brown pods available in machine-deseeded compressed blocks or fiber-cleansed premium lines; strictly monitored for sub-12% moisture.',
        ],
        align: 'left',
      },
      {
        id: 6,
        name: 'Cumin Seeds (Jeera - Premium Sorted Matrix)',
        descriptions: [
          'Sourcing Locations: Micro-climate cultivation blocks in Periyakulam (Theni district) and prime spice-milling hubs in Erode and Madurai, Tamil Nadu.',
          'Production Volume: Sourced through hyper-targeted micro-yield contract crops alongside Tamil Nadu\'s largest B2B wholesale processing pipelines.',
          'Quality Standard: 99.5% to 99.9% Sortex-pure whole seeds completely free from stalk fragments, weeds, or dust; characterized by a sharp, warm aromatic profile with an intense essential oil yield.',
        ],
        align: 'right',
      },
    ],
  },
  {
    categoryId: '9',
    title: 'Coconut & Coir Commodities',
    disclaimer: 'Disclaimer: Sourcing data and tri-state production metrics represent regional industry averages and seasonal availability frameworks. Coir EC levels and oil viscosity metrics are verified at processing lines and can shift slightly depending on environmental conditions during transit.',
    items: [
      {
        id: 1,
        name: 'Extra Virgin Coconut Oil (VCO - Cold-Pressed & Centrifuged)',
        descriptions: [
          'Sourcing Locations: Pollachi and Coimbatore districts in Tamil Nadu; Kozhikode and Malappuram districts in Kerala; and Tumakuru and Hassan in Karnataka.',
          'Production Volume: Procured from the absolute core of India’s tri-state premium coconut belt.',
          'Quality Standard: 100% pure, water-white liquid oil extracted from fresh, mature coconut kernels without heating or chemical refining; strictly monitored for a moisture level under 0.1% and high Lauric Acid density.',
        ],
        align: 'left',
      },
      {
        id: 2,
        name: 'Premium Desiccated Coconut Powder',
        descriptions: [
          'Sourcing Locations: Erode, Kangeyam, and Tiruppur processing clusters in Tamil Nadu, and Tumakuru and Bangalore Rural in Karnataka.',
          'Production Volume: Sourced via high-capacity, mechanized Sortex factories utilizing state-of-the-art steam dehydration systems.',
          'Quality Standard: Crisp, snowy-white parings free from yellow specks, rind fragments, or off-odors; strictly pasteurized to guarantee zero Salmonella/E.coli, and packed at sub-3% moisture.',
        ],
        align: 'right',
      },
      {
        id: 3,
        name: 'Coconut Husk Coir & Coir Pith (Grow-Media Blocks)',
        descriptions: [
          'Sourcing Locations: Dindigul, Pollachi, and Kanyakumari in Tamil Nadu; Alappuzha in Kerala; and undivided Dakshina Kannada in Karnataka.',
          'Production Volume: Integrated with major coastal and inland industrial fiber mills backing a global export footprint.',
          'Quality Standard: Available in highly compressed 5kg grow-media blocks or retail briquettes; strictly processed to ensure a low electrical conductivity (Low EC < 0.5 mS/cm) via thorough fresh-water washing cycles.',
        ],
        align: 'left',
      },
      {
        id: 4,
        name: 'Hand-Carved Tableware & Serving Bowls',
        descriptions: [
          'Sourcing Locations: Palakkad, Thrissur, and Kozhikode districts in Kerala, alongside processing clusters in Kangayam and Trichy, Tamil Nadu.',
          'Production Volume: Procured through a highly organized network of traditional rural artisan guilds and dedicated women-led manufacturing units.',
          'Quality Standard: 100% organic, crack-free natural round and oval bowls completely free from synthetic chemical lacquers, varnishes, or toxic glues.',
        ],
        align: 'right',
      },
      {
        id: 5,
        name: 'Premium Lifestyle Decor & Intricate Pierced Lighting',
        descriptions: [
          'Sourcing Locations: Traditional craft villages in Thiruvananthapuram, Cherai, and Alappuzha in Kerala, alongside boutique design units in Tamil Nadu.',
          'Production Volume: Hand-selected micro-batches managed by master craftsmen from the generational Vishwakarma artisan communities.',
          'Quality Standard: Intricately cut, engraved, or geometric-pierced decorative shells designed for mood lamps, corporate gifting variants, and hanging lights.',
        ],
        align: 'left',
      },
      {
        id: 6,
        name: 'Specialized Lifestyle Accents',
        descriptions: [
          'Sourcing Locations: Coastal plantation craft blocks in Pollachi and Tuticorin (Tamil Nadu), and rural cooperative clusters in Wayanad and Kottayam (Kerala).',
          'Production Volume: Integrated directly with zero-waste copra processing zones that repurpose raw discarded materials into functional bio-diverse accents.',
          'Quality Standard: High-durability functional products including V-cut half-shell bird feeders, zero-softening soap savers, and moisture-stable aquarium hideouts.',
        ],
        align: 'right',
      },
    ],
  },
  {
    categoryId: '10',
    title: 'Sustainable Fuel Briquetting',
    disclaimer: 'Disclaimer: Fixed carbon indices, calorific values, and runtime hours are determined under optimized laboratory testing conditions. Actual ignition times and burning performance may vary based on localized airflow, equipment specifications, and ambient humidity.',
    items: [
      {
        id: 1,
        name: 'Premium Hexagonal Charcoal Briquettes',
        descriptions: [
          'Sourcing Locations: Highly mechanized carbonization and extrusion plants in Kangeyam, Coimbatore, and Tuticorin in Tamil Nadu, and prominent processing clusters around Mangaluru and Tumakuru in Karnataka.',
          'Production Volume: Procured from high-capacity southern extrusion hubs that process thousands of metric tonnes of fully carbonized, crushed coconut shells annually.',
          'Quality Standard: High-density hollow hexagonal logs uniformly cut into export-ready lengths; engineered with an exceptional Fixed Carbon index of 75% to 84%, an ultra-low ash margin (<3–5%), and an average burning runtime of 4 to 6 hours.',
        ],
        align: 'left',
      },
      {
        id: 2,
        name: 'Clean-Burn Pillow Charcoal Briquettes',
        descriptions: [
          'Sourcing Locations: Highly mechanized carbonization and extrusion plants in Kangeyam, Coimbatore, and Tuticorin in Tamil Nadu, and prominent processing clusters around Mangaluru and Tumakuru in Karnataka.',
          'Production Volume: Integrated with automated hydraulic pressing lines that compact pure coconut shell charcoal powder into high-volume pillow molds.',
          'Quality Standard: Uniformly molded pillow shapes manufactured strictly using 100% natural, food-safe vegetable starch binders with zero chemical additives; optimized with a moisture ceiling below 5% for a rapid 10-to-15 minute quick-light ignition.',
        ],
        align: 'right',
      },
    ],
  },
  {
    categoryId: '11',
    title: 'Moringa & Superfood Products',
    disclaimer: 'Disclaimer: Nutritive profiles, mesh sizes, and oil characteristics are reflective of standardized export batches, though natural botanical variances can occur. This product is not intended to diagnose, treat, cure, or prevent any health condition; please consult a professional for specialized application.',
    items: [
      {
        id: 1,
        name: 'Raw Cultivated Drumsticks (Fresh Pods / PKM-1 & Mulanur Varieties)',
        descriptions: [
          'Sourcing Locations: Dindigul, Theni, Karur, Tiruppur, and Thoothukudi districts in Tamil Nadu.',
          'Production Volume: Procured directly from the absolute heartland of global moringa cultivation; our sourcing network operates across Tamil Nadu’s premiere belts.',
          'Quality Standard: Grade-A uniform, tender yet structurally robust green pods boasting a straight length profile of 45cm to 65cm; entirely free from pest scars, internal yellow aging, or physical bruising.',
        ],
        align: 'left',
      },
      {
        id: 2,
        name: 'Premium Organic Moringa Leaf Powder (Finished Superfood Grade)',
        descriptions: [
          'Sourcing Locations: High-efficiency contract farming networks and processing cooperatives in Theni, Dindigul, and Madurai districts, Tamil Nadu.',
          'Production Volume: Integrated with state-of-the-art solar-dehydration and shadow-drying processing complexes, tapping into a highly responsive export corridor.',
          'Quality Standard: 100% pure, vibrant emerald-green powder milled to an ultra-fine mesh size; processed completely inside closed, temperature-controlled facilities without direct UV sunlight exposure to protect native nutritional value.',
        ],
        align: 'right',
      },
      {
        id: 3,
        name: 'Raw Moringa Seeds (Botanical Sourcing & Multi-Purpose Kernels)',
        descriptions: [
          'Sourcing Locations: Sourced from fully matured seed-orchards in Karur, Tiruppur, and Erode districts in Tamil Nadu, and parts of neighboring semi-arid districts in Southern Karnataka.',
          'Production Volume: Collected systematically during the peak summer ripening cycles from long-standing perennial and annual cultivars.',
          'Quality Standard: Well-matured, heavy whole seeds featuring prominent, undamaged wings and plump, oil-rich internal white kernels; thoroughly machine-sifted to ensure less than 1% broken shells.',
        ],
        align: 'left',
      },
      {
        id: 4,
        name: 'Pure Cold-Pressed Moringa Seed Oil',
        descriptions: [
          'Sourcing Locations: Specialized mechanical crushing and cold-extraction facilities located in Coimbatore, Salem, and Karur processing zones, Tamil Nadu.',
          'Production Volume: Handled via custom-engineered oil extraction mills processing multi-tonne bulk consignments primarily bound for premium international skincare.',
          'Quality Standard: 100% pure, unrefined, pale yellow clear liquid oil extracted mechanically without the use of chemical heat solvents or hexanes; features a high concentration of Oleic Acid (~70-75%).',
        ],
        align: 'right',
      },
    ],
  },
  {
    categoryId: '12',
    title: 'Eco-Friendly & Compostable Tableware',
    disclaimer: 'Disclaimer: As these products are molded from 100% natural, raw agricultural byproducts, minor variations in texture, color, and natural fiber patterns are normal. Heat resistance and fluid-retention capacities are optimized for temporary commercial catering and food delivery usages.',
    items: [
      {
        id: 1,
        name: 'Premium Areca Palm Leaf Tableware (Compostable Dinnerware)',
        descriptions: [
          'Sourcing Locations: Shivamogga, Dakshina Kannada, and Tumakuru districts in Karnataka, alongside manufacturing clusters in Coimbatore, Vellore, and Madurai, Tamil Nadu.',
          'Product Details: Pressed from 100% naturally fallen palm sheaths. Perfect for eco-resorts, events, and high-end catering.',
          'Dinner & Snack Plates: Round Plates, Square Plates, Rectangular Trays in various sizes.',
          'Compartment / Partition Meals Trays: 3-Compartment and 4-Compartment options.',
          'Bowls & Small Serveware: Deep Round Bowls, Square Dessert Bowls, Pyramid & Oval Accent Bowls.',
          'Cutlery Accompaniments: Pressed, rigid 110mm leaf spoons.',
        ],
        align: 'left',
      },
      {
        id: 2,
        name: 'Biodegradable Sugarcane Bagasse Molded Tableware',
        descriptions: [
          'Sourcing Locations: High-capacity agro-pulp molding complexes in Erode, Salem, and Cuddalore districts in Tamil Nadu, and Mandya and Belagavi processing corridors in Karnataka.',
          'Product Details: Molded from natural sugarcane pulp fiber. Ultra-sturdy, microwave-safe, oil-resistant.',
          'Commercial Food Delivery Containers & Clamshells: Hinged Clamshell Lunch Boxes and High-Volume Delivery Bowls.',
          'Catering & Buffet Meal Trays: 4, 5, and 8-Compartment standard industrial lunch trays.',
          'Everyday Dining Plates & Bowls: Standard Plates, Soup & Salad Bowls in multiple sizes.',
          'Eco-Drinkware & Cafe Essentials: Bagasse Hot/Cold Cups and Molded Fiber Cup Holders.',
        ],
        align: 'right',
      },
    ],
  },
];
