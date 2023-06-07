const companies = [
  {
    name: 'Amazon',
    domain: 'amazon.com',
  },
  {
    name: 'Apple',
    domain: 'apple.com',
  },
  {
    name: 'Microsoft',
    domain: 'microsoft.com',
  },
  {
    name: 'Google',
    domain: 'google.com',
  },
  {
    name: 'Facebook',
    domain: 'facebook.com',
  },
  {
    name: 'Alphabet',
    domain: 'abc.xyz',
  },
  {
    name: 'Tesla',
    domain: 'tesla.com',
  },
  {
    name: 'Netflix',
    domain: 'netflix.com',
  },
  {
    name: 'Intel',
    domain: 'intel.com',
  },
  {
    name: 'IBM',
    domain: 'ibm.com',
  },
  {
    name: 'Adobe',
    domain: 'adobe.com',
  },
  {
    name: 'Cisco',
    domain: 'cisco.com',
  },
  {
    name: 'Oracle',
    domain: 'oracle.com',
  },
  {
    name: 'HP',
    domain: 'hp.com',
  },
  {
    name: 'Salesforce',
    domain: 'salesforce.com',
  },
  {
    name: 'Samsung',
    domain: 'samsung.com',
  },
  {
    name: 'Sony',
    domain: 'sony.com',
  },
  {
    name: 'Uber',
    domain: 'uber.com',
  },
  {
    name: 'Airbnb',
    domain: 'airbnb.com',
  },
  {
    name: 'Twitter',
    domain: 'twitter.com',
  },
  {
    name: 'Snap',
    domain: 'snap.com',
  },
  {
    name: 'Zoom',
    domain: 'zoom.us',
  },
  {
    name: 'Pinterest',
    domain: 'pinterest.com',
  },
  {
    name: 'LinkedIn',
    domain: 'linkedin.com',
  },
  {
    name: 'Spotify',
    domain: 'spotify.com',
  },
  {
    name: 'eBay',
    domain: 'ebay.com',
  },
  {
    name: 'Walmart',
    domain: 'walmart.com',
  },
  {
    name: 'Target',
    domain: 'target.com',
  },
  {
    name: 'Nike',
    domain: 'nike.com',
  },
  {
    name: 'Coca-Cola',
    domain: 'coca-colacompany.com',
  },
  {
    name: 'PepsiCo',
    domain: 'pepsico.com',
  },
  {
    name: "McDonald's",
    domain: 'mcdonalds.com',
  },
  {
    name: 'Burger King',
    domain: 'bk.com',
  },
  {
    name: 'Starbucks',
    domain: 'starbucks.com',
  },
  {
    name: 'Dell',
    domain: 'dell.com',
  },
  {
    name: '3M',
    domain: '3m.com',
  },
  {
    name: 'Fifth Third Bancorp',
    domain: '53.com',
  },
  {
    name: 'American Airlines Group',
    domain: 'aa.com',
  },
  {
    name: 'Abbott',
    domain: 'abbott.com',
  },
  {
    name: 'AbbVie',
    domain: 'abbvie.com',
  },
  {
    name: 'Academy Sports and Outdoors',
    domain: 'academy.com',
  },
  {
    name: 'Activision Blizzard',
    domain: 'activisionblizzard.com',
  },
  {
    name: 'Archer Daniels Midland',
    domain: 'adm.com',
  },
  {
    name: 'ADP',
    domain: 'adp.com',
  },
  {
    name: 'Advance Auto Parts',
    domain: 'advanceautoparts.com',
  },
  {
    name: 'AECOM',
    domain: 'aecom.com',
  },
  {
    name: 'American Electric Power',
    domain: 'aep.com',
  },
  {
    name: 'AES',
    domain: 'aes.com',
  },
  {
    name: 'American Financial Group',
    domain: 'afginc.com',
  },
  {
    name: 'Aflac',
    domain: 'aflac.com',
  },
  {
    name: 'AGCO',
    domain: 'agcocorp.com',
  },
  {
    name: 'AIG',
    domain: 'aig.com',
  },
  {
    name: 'Air Products',
    domain: 'airproducts.com',
  },
  {
    name: 'Arthur J. Gallagher',
    domain: 'ajg.com',
  },
  {
    name: 'Albertsons',
    domain: 'albertsons.com',
  },
  {
    name: 'Alcoa',
    domain: 'alcoa.com',
  },
  {
    name: 'Alleghany',
    domain: 'alleghany.com',
  },
  {
    name: 'Allstate',
    domain: 'allstate.com',
  },
  {
    name: 'Ally',
    domain: 'ally.com',
  },
  {
    name: 'Altice',
    domain: 'alticeusa.com',
  },
  {
    name: 'Altria',
    domain: 'altria.com',
  },
  {
    name: 'A-Mark Precious Metals',
    domain: 'amark.com',
  },
  {
    name: 'AMD',
    domain: 'amd.com',
  },
  {
    name: 'Ameren',
    domain: 'ameren.com',
  },
  {
    name: 'American Express',
    domain: 'americanexpress.com',
  },
  {
    name: 'American Family Insurance',
    domain: 'americanfamilyinsurance.com',
  },
  {
    name: 'American Tower',
    domain: 'americantower.com',
  },
  {
    name: 'Ameriprise',
    domain: 'ameriprise.com',
  },
  {
    name: 'AmerisourceBergen',
    domain: 'amerisourcebergen.com',
  },
  {
    name: 'Amgen',
    domain: 'amgen.com',
  },
  {
    name: 'Amphenol',
    domain: 'amphenol.com',
  },
  {
    name: 'Analog Devices',
    domain: 'analog.com',
  },
  {
    name: 'Andersons',
    domain: 'andersonsinc.com',
  },
  {
    name: 'Anthem',
    domain: 'anthem.com',
  },
  {
    name: 'Anywhere Real Estate',
    domain: 'anywhere.re',
  },
  {
    name: 'APA',
    domain: 'apacorp.com',
  },
  {
    name: 'Apollo',
    domain: 'apollo.com',
  },
  {
    name: 'Applied Materials',
    domain: 'appliedmaterials.com',
  },
  {
    name: 'Aramark',
    domain: 'aramark.com',
  },
  {
    name: 'Arconic',
    domain: 'arconic.com',
  },
  {
    name: 'ARKO',
    domain: 'arkocorp.com',
  },
  {
    name: 'Arrow',
    domain: 'arrow.com',
  },
  {
    name: 'Asbury Automotive Group',
    domain: 'asburyautomotivegroup.com',
  },
  {
    name: 'Assurant',
    domain: 'assurant.com',
  },
  {
    name: 'AT&T',
    domain: 'att.com',
  },
  {
    name: 'Auto-Owners',
    domain: 'auto-owners.com',
  },
  {
    name: 'Autoliv',
    domain: 'autoliv.com',
  },
  {
    name: 'AutoNation',
    domain: 'autonation.com',
  },
  {
    name: 'AutoZone',
    domain: 'autozone.com',
  },
  {
    name: 'Avantor',
    domain: 'avantorsciences.com',
  },
  {
    name: 'Avery Dennison',
    domain: 'averydennison.com',
  },
  {
    name: 'Avis Budget Group',
    domain: 'avisbudgetgroup.com',
  },
  {
    name: 'Avnet',
    domain: 'avnet.com',
  },
  {
    name: 'Baker Hughes',
    domain: 'bakerhughes.com',
  },
  {
    name: 'Ball',
    domain: 'ball.com',
  },
  {
    name: 'Bank of America',
    domain: 'bankofamerica.com',
  },
  {
    name: 'Bath & Body Works',
    domain: 'bathandbodyworks.com',
  },
  {
    name: 'Baxter',
    domain: 'baxter.com',
  },
  {
    name: 'Boise Cascade',
    domain: 'bc.com',
  },
  {
    name: 'Becton Dickinson',
    domain: 'bd.com',
  },
  {
    name: 'Beacon',
    domain: 'becn.com',
  },
  {
    name: 'Bed Bath & Beyond',
    domain: 'bedbathandbeyond.com',
  },
  {
    name: 'W.R. Berkley',
    domain: 'berkley.com',
  },
  {
    name: 'Berkshire Hathaway',
    domain: 'berkshirehathaway.com',
  },
  {
    name: 'Berry',
    domain: 'berryglobal.com',
  },
  {
    name: 'Best Buy',
    domain: 'bestbuy.com',
  },
  {
    name: 'Biogen',
    domain: 'biogen.com',
  },
  {
    name: "BJ's Wholesale Club",
    domain: 'bjs.com',
  },
  {
    name: 'BlackRock',
    domain: 'blackrock.com',
  },
  {
    name: 'Blackstone',
    domain: 'blackstone.com',
  },
  {
    name: 'Block',
    domain: 'block.xyz',
  },
  {
    name: 'Bristol-Myers Squibb',
    domain: 'bms.com',
  },
  {
    name: 'BNY Mellon',
    domain: 'bnymellon.com',
  },
  {
    name: 'Boeing',
    domain: 'boeing.com',
  },
  {
    name: 'Booking Holdings',
    domain: 'bookingholdings.com',
  },
  {
    name: 'Booz Allen Hamilton',
    domain: 'boozallenhamilton.com',
  },
  {
    name: 'BorgWarner',
    domain: 'borgwarner.com',
  },
  {
    name: 'Boston Scientific',
    domain: 'bostonscientific.com',
  },
  {
    name: 'Brighthouse Financial',
    domain: 'brighthousefinancial.com',
  },
  {
    name: 'Broadcom',
    domain: 'broadcom.com',
  },
  {
    name: 'Builders FirstSource',
    domain: 'buildersfirstsource.com',
  },
  {
    name: 'Burlington',
    domain: 'burlington.com',
  },
  {
    name: 'Caesars',
    domain: 'caesars.com',
  },
  {
    name: 'Campbell',
    domain: 'campbells.com',
  },
  {
    name: 'Camping World',
    domain: 'campingworld.com',
  },
  {
    name: 'Capital One',
    domain: 'capitalone.com',
  },
  {
    name: 'Cardinal Health',
    domain: 'cardinalhealth.com',
  },
  {
    name: 'Carlyle',
    domain: 'carlyle.com',
  },
  {
    name: 'CarMax',
    domain: 'carmax.com',
  },
  {
    name: 'Carrier',
    domain: 'carrier.com',
  },
  {
    name: 'Carvana',
    domain: 'carvana.com',
  },
  {
    name: "Casey's",
    domain: 'caseys.com',
  },
  {
    name: 'Caterpillar',
    domain: 'caterpillar.com',
  },
  {
    name: 'CBRE',
    domain: 'cbre.com',
  },
  {
    name: 'CDW',
    domain: 'cdw.com',
  },
  {
    name: 'Celanese',
    domain: 'celanese.com',
  },
  {
    name: 'Centene',
    domain: 'centene.com',
  },
  {
    name: 'CenterPoint Energy',
    domain: 'centerpointenergy.com',
  },
  {
    name: 'CF',
    domain: 'cfindustries.com',
  },
  {
    name: 'Charles Schwab',
    domain: 'charlesschwab.com',
  },
  {
    name: 'Charter',
    domain: 'charter.com',
  },
  {
    name: 'Cheniere',
    domain: 'cheniere.com',
  },
  {
    name: 'Chevron',
    domain: 'chevron.com',
  },
  {
    name: 'Chewy',
    domain: 'chewy.com',
  },
  {
    name: 'Chipotle Mexican Grill',
    domain: 'chipotle.com',
  },
  {
    name: 'C.H. Robinson',
    domain: 'chrobinson.com',
  },
  {
    name: 'Community Health Systems',
    domain: 'chs.net',
  },
  {
    name: 'CHS',
    domain: 'chsinc.com',
  },
  {
    name: 'Cigna',
    domain: 'cigna.com',
  },
  {
    name: 'Cincinnati Financial',
    domain: 'cinfin.com',
  },
  {
    name: 'Cintas',
    domain: 'cintas.com',
  },
  {
    name: 'Citigroup',
    domain: 'citi.com',
  },
  {
    name: 'Citizens',
    domain: 'citizensbank.com',
  },
  {
    name: 'Cleveland-Cliffs',
    domain: 'clevelandcliffs.com',
  },
  {
    name: 'Clorox',
    domain: 'clorox.com',
  },
  {
    name: 'CMC / Commercial Metals',
    domain: 'cmc.com',
  },
  {
    name: 'CMS Energy',
    domain: 'cmsenergy.com',
  },
  {
    name: 'Coca-Cola',
    domain: 'coca-cola.com',
  },
  {
    name: 'Cognizant',
    domain: 'cognizant.com',
  },
  {
    name: 'Coinbase',
    domain: 'coinbase.com',
  },
  {
    name: 'Colgate-Palmolive',
    domain: 'colgatepalmolive.com',
  },
  {
    name: 'Comcast',
    domain: 'comcast.com',
  },
  {
    name: 'CommScope',
    domain: 'commscope.com',
  },
  {
    name: 'Compass',
    domain: 'compass.com',
  },
  {
    name: 'Conagra Brands',
    domain: 'conagrabrands.com',
  },
  {
    name: 'Con Edison',
    domain: 'conedison.com',
  },
  {
    name: 'ConocoPhillips',
    domain: 'conocophillips.com',
  },
  {
    name: 'Constellation Brands',
    domain: 'constellationbrands.com',
  },
  {
    name: 'Corning',
    domain: 'corning.com',
  },
  {
    name: 'Corteva',
    domain: 'corteva.com',
  },
  {
    name: 'Costco',
    domain: 'costco.com',
  },
  {
    name: 'Crown',
    domain: 'crowncork.com',
  },
  {
    name: 'CSX',
    domain: 'csx.com',
  },
  {
    name: 'Cummins',
    domain: 'cummins.com',
  },
  {
    name: 'CVS Health',
    domain: 'cvshealth.com',
  },
  {
    name: 'Dana',
    domain: 'dana.com',
  },
  {
    name: 'Danaher',
    domain: 'danaher.com',
  },
  {
    name: 'Darden',
    domain: 'darden.com',
  },
  {
    name: 'DaVita',
    domain: 'davita.com',
  },
  {
    name: 'DCP Midstream',
    domain: 'dcpmidstream.com',
  },
  {
    name: 'Deere',
    domain: 'deere.com',
  },
  {
    name: 'Delek US',
    domain: 'delekus.com',
  },
  {
    name: 'Delta',
    domain: 'delta.com',
  },
  {
    name: 'Devon',
    domain: 'devonenergy.com',
  },
  {
    name: 'Diamondback Energy',
    domain: 'diamondbackenergy.com',
  },
  {
    name: "Dick's Sporting Goods",
    domain: 'dickssportinggoods.com',
  },
  {
    name: "Dillard's",
    domain: 'dillards.com',
  },
  {
    name: 'Discover',
    domain: 'discover.com',
  },
  {
    name: 'DISH Network',
    domain: 'dish.com',
  },
  {
    name: 'Dollar General',
    domain: 'dollargeneral.com',
  },
  {
    name: 'Dollar Tree',
    domain: 'dollartree.com',
  },
  {
    name: 'Dominion Energy',
    domain: 'dominionenergy.com',
  },
  {
    name: 'Dover',
    domain: 'dovercorporation.com',
  },
  {
    name: 'Dow',
    domain: 'dow.com',
  },
  {
    name: 'D.R. Horton',
    domain: 'drhorton.com',
  },
  {
    name: 'DTE Energy',
    domain: 'dteenergy.com',
  },
  {
    name: 'Duke Energy',
    domain: 'duke-energy.com',
  },
  {
    name: 'DuPont',
    domain: 'dupont.com',
  },
  {
    name: 'DXC',
    domain: 'dxc.com',
  },
  {
    name: 'Eastman',
    domain: 'eastman.com',
  },
  {
    name: 'Ecolab',
    domain: 'ecolab.com',
  },
  {
    name: 'Edison International',
    domain: 'edison.com',
  },
  {
    name: 'Edward Jones',
    domain: 'edwardjones.com',
  },
  {
    name: 'EMCOR',
    domain: 'emcorgroup.com',
  },
  {
    name: 'Emerson',
    domain: 'emerson.com',
  },
  {
    name: 'Energy Transfer',
    domain: 'energytransfer.com',
  },
  {
    name: 'EnLink Midstream',
    domain: 'enlink.com',
  },
  {
    name: 'Entergy',
    domain: 'entergy.com',
  },
  {
    name: 'Enterprise Products Partners',
    domain: 'enterpriseproducts.com',
  },
  {
    name: 'EOG Resources',
    domain: 'eogresources.com',
  },
  {
    name: 'Equinix',
    domain: 'equinix.com',
  },
  {
    name: 'Equitable',
    domain: 'equitable.com',
  },
  {
    name: 'Erie Insurance',
    domain: 'erieinsurance.com',
  },
  {
    name: 'Estée Lauder',
    domain: 'esteelauder.com',
  },
  {
    name: 'Eversource',
    domain: 'eversource.com',
  },
  {
    name: 'Exelon',
    domain: 'exeloncorp.com',
  },
  {
    name: 'Expedia Group',
    domain: 'expediagroup.com',
  },
  {
    name: 'Expeditors',
    domain: 'expeditors.com',
  },
  {
    name: 'ExxonMobil',
    domain: 'exxonmobil.com',
  },
  {
    name: 'Fannie Mae',
    domain: 'fanniemae.com',
  },
  {
    name: 'Farmers',
    domain: 'farmers.com',
  },
  {
    name: 'Fortune Brands Home & Security',
    domain: 'fbhs.com',
  },
  {
    name: 'FCX / Freeport-McMoRan',
    domain: 'fcx.com',
  },
  {
    name: 'FedEx',
    domain: 'fedex.com',
  },
  {
    name: 'First American Financial',
    domain: 'firstam.com',
  },
  {
    name: 'FirstEnergy',
    domain: 'firstenergycorp.com',
  },
  {
    name: 'Fiserv',
    domain: 'fiserv.com',
  },
  {
    name: 'FIS',
    domain: 'fisglobal.com',
  },
  {
    name: 'Fluor',
    domain: 'fluor.com',
  },
  {
    name: 'FM Global',
    domain: 'fmglobal.com',
  },
  {
    name: 'Fidelity National Financial',
    domain: 'fnf.com',
  },
  {
    name: 'Foot Locker',
    domain: 'footlocker.com',
  },
  {
    name: 'Ford',
    domain: 'ford.com',
  },
  {
    name: 'Fox',
    domain: 'fox.com',
  },
  {
    name: 'Franklin Resources',
    domain: 'franklinresources.com',
  },
  {
    name: 'Freddie Mac',
    domain: 'freddiemac.com',
  },
  {
    name: 'Frontier',
    domain: 'frontier.com',
  },
  {
    name: 'Gap',
    domain: 'gap.com',
  },
  {
    name: 'General Dynamics',
    domain: 'gd.com',
  },
  {
    name: 'GE',
    domain: 'ge.com',
  },
  {
    name: 'General Mills',
    domain: 'generalmills.com',
  },
  {
    name: 'Genuine Parts',
    domain: 'genpt.com',
  },
  {
    name: 'Genworth',
    domain: 'genworth.com',
  },
  {
    name: 'Gilead',
    domain: 'gilead.com',
  },
  {
    name: 'Global Partners',
    domain: 'globalp.com',
  },
  {
    name: 'Global Payments',
    domain: 'globalpayments.com',
  },
  {
    name: 'Gm',
    domain: 'gm.com',
  },
  {
    name: 'Goldman Sachs',
    domain: 'goldmansachs.com',
  },
  {
    name: 'Goodyear',
    domain: 'goodyear.com',
  },
  {
    name: 'Grainger',
    domain: 'grainger.com',
  },
  {
    name: 'Graphic Packaging Holding',
    domain: 'graphicpkg.com',
  },
  {
    name: 'Graybar',
    domain: 'graybar.com',
  },
  {
    name: 'Group 1 Automotive',
    domain: 'group1automotive.com',
  },
  {
    name: 'Guardian',
    domain: 'guardianlife.com',
  },
  {
    name: 'GXO Logistics',
    domain: 'gxo.com',
  },
  {
    name: 'Halliburton',
    domain: 'halliburton.com',
  },
  {
    name: 'Hanes',
    domain: 'hanes.com',
  },
  {
    name: 'Hasbro',
    domain: 'hasbro.com',
  },
  {
    name: 'HCA Healthcare',
    domain: 'hcahealthcare.com',
  },
  {
    name: 'Henry Schein',
    domain: 'henryschein.com',
  },
  {
    name: 'Hershey',
    domain: 'hershey.com',
  },
  {
    name: 'Hertz',
    domain: 'hertz.com',
  },
  {
    name: 'Hess',
    domain: 'hess.com',
  },
  {
    name: 'HF Sinclair',
    domain: 'hfsinclair.com',
  },
  {
    name: 'Huntington Ingalls Industries',
    domain: 'hii.com',
  },
  {
    name: 'Home Depot',
    domain: 'homedepot.com',
  },
  {
    name: 'Honeywell',
    domain: 'honeywell.com',
  },
  {
    name: 'Hormel Foods',
    domain: 'hormelfoods.com',
  },
  {
    name: 'Hewlett Packard Enterprise',
    domain: 'hpe.com',
  },
  {
    name: 'Humana',
    domain: 'humana.com',
  },
  {
    name: 'Huntsman',
    domain: 'huntsman.com',
  },
  {
    name: 'ICE / Intercontinental Exchange',
    domain: 'ice.com',
  },
  {
    name: 'Icahn Enterprises',
    domain: 'ielp.com',
  },
  {
    name: 'International Flavors & Fragrances',
    domain: 'iff.com',
  },
  {
    name: 'Ingredion',
    domain: 'ingredion.com',
  },
  {
    name: 'Insight',
    domain: 'insight.com',
  },
  {
    name: 'International Paper',
    domain: 'internationalpaper.com',
  },
  {
    name: 'Interpublic Group',
    domain: 'interpublic.com',
  },
  {
    name: 'Intuit',
    domain: 'intuit.com',
  },
  {
    name: 'IQVIA',
    domain: 'iqvia.com',
  },
  {
    name: 'Illinois Tool Works',
    domain: 'itw.com',
  },
  {
    name: 'Jabil',
    domain: 'jabil.com',
  },
  {
    name: 'Jackson Financial',
    domain: 'jackson.com',
  },
  {
    name: 'Jacobs',
    domain: 'jacobs.com',
  },
  {
    name: 'J.B. Hunt',
    domain: 'jbhunt.com',
  },
  {
    name: 'Jefferies',
    domain: 'jefferies.com',
  },
  {
    name: 'Jones Lang LaSalle',
    domain: 'jll.com',
  },
  {
    name: 'J.M. Smucker',
    domain: 'jmsmucker.com',
  },
  {
    name: 'Johnson & Johnson',
    domain: 'jnj.com',
  },
  {
    name: 'JPMorgan Chase',
    domain: 'jpmorganchase.com',
  },
  {
    name: 'KBR',
    domain: 'kbr.com',
  },
  {
    name: "Kellogg's",
    domain: 'kelloggs.com',
  },
  {
    name: 'Keurig Dr Pepper',
    domain: 'keurigdrpepper.com',
  },
  {
    name: 'KeyBank',
    domain: 'key.com',
  },
  {
    name: 'Kiewit',
    domain: 'kiewit.com',
  },
  {
    name: 'Kimberly-Clark',
    domain: 'kimberly-clark.com',
  },
  {
    name: 'Kinder Morgan',
    domain: 'kindermorgan.com',
  },
  {
    name: 'KKR',
    domain: 'kkr.com',
  },
  {
    name: 'KLA',
    domain: 'kla.com',
  },
  {
    name: "Kohl's",
    domain: 'kohls.com',
  },
  {
    name: 'Kraft Heinz',
    domain: 'kraftheinz.com',
  },
  {
    name: 'Kroger',
    domain: 'kroger.com',
  },
  {
    name: 'L3Harris',
    domain: 'l3harris.com',
  },
  {
    name: 'Labcorp',
    domain: 'labcorp.com',
  },
  {
    name: 'Lam Research',
    domain: 'lamresearch.com',
  },
  {
    name: "Land O'Lakes Inc.",
    domain: 'landolakesinc.com',
  },
  {
    name: 'Landstar',
    domain: 'landstar.com',
  },
  {
    name: 'Lear',
    domain: 'lear.com',
  },
  {
    name: 'Leidos',
    domain: 'leidos.com',
  },
  {
    name: 'Lennar',
    domain: 'lennar.com',
  },
  {
    name: 'Liberty',
    domain: 'libertymedia.com',
  },
  {
    name: 'Liberty Mutual',
    domain: 'libertymutual.com',
  },
  {
    name: 'Lilly',
    domain: 'lilly.com',
  },
  {
    name: 'Lincoln Financial',
    domain: 'lincolnfinancial.com',
  },
  {
    name: 'Lithia Motors',
    domain: 'lithia.com',
  },
  {
    name: 'LKQ',
    domain: 'lkqcorp.com',
  },
  {
    name: 'Lockheed Martin',
    domain: 'lockheedmartin.com',
  },
  {
    name: 'Loews',
    domain: 'loews.com',
  },
  {
    name: 'Lowes',
    domain: 'lowes.com',
  },
  {
    name: 'LPL',
    domain: 'lpl.com',
  },
  {
    name: 'Lumen',
    domain: 'lumen.com',
  },
  {
    name: 'Macys',
    domain: 'macys.com',
  },
  {
    name: 'ManpowerGroup',
    domain: 'manpowergroup.com',
  },
  {
    name: 'Marathon Petroleum',
    domain: 'marathonpetroleum.com',
  },
  {
    name: 'Markel',
    domain: 'markel.com',
  },
  {
    name: 'Marriott',
    domain: 'marriott.com',
  },
  {
    name: 'Marsh McLennan',
    domain: 'marshmclennan.com',
  },
  {
    name: 'Masco',
    domain: 'masco.com',
  },
  {
    name: 'MassMutual',
    domain: 'massmutual.com',
  },
  {
    name: 'MasTec',
    domain: 'mastec.com',
  },
  {
    name: 'Mastercard',
    domain: 'mastercard.com',
  },
  {
    name: 'McKesson',
    domain: 'mckesson.com',
  },
  {
    name: 'Merck',
    domain: 'merck.com',
  },
  {
    name: 'Meta',
    domain: 'meta.com',
  },
  {
    name: 'MetLife',
    domain: 'metlife.com',
  },
  {
    name: 'MGM Resorts',
    domain: 'mgmresorts.com',
  },
  {
    name: 'Micron',
    domain: 'micron.com',
  },
  {
    name: 'Moderna',
    domain: 'modernatx.com',
  },
  {
    name: 'Mohawk Industries',
    domain: 'Mohawkindustries.com',
  },
  {
    name: 'Molina Healthcare',
    domain: 'molinahealthcare.com',
  },
  {
    name: 'Molson Coors',
    domain: 'molsoncoors.com',
  },
  {
    name: 'Mondelez International',
    domain: 'mondelezinternational.com',
  },
  {
    name: 'Morgan Stanley',
    domain: 'morganstanley.com',
  },
  {
    name: 'Mosaic',
    domain: 'mosaicco.com',
  },
  {
    name: 'Motorola Solutions',
    domain: 'motorolasolutions.com',
  },
  {
    name: 'Murphy USA',
    domain: 'murphyusa.com',
  },
  {
    name: 'Mutual of Omaha',
    domain: 'mutualofomaha.com',
  },
  {
    name: 'Nationwide',
    domain: 'nationwide.com',
  },
  {
    name: 'NCR',
    domain: 'ncr.com',
  },
  {
    name: 'Newell Brands',
    domain: 'newellbrands.com',
  },
  {
    name: 'Newmont',
    domain: 'newmont.com',
  },
  {
    name: 'News Corp',
    domain: 'newscorp.com',
  },
  {
    name: 'New York Life',
    domain: 'newyorklife.com',
  },
  {
    name: 'NextEra Energy',
    domain: 'nexteraenergy.com',
  },
  {
    name: 'Nordstrom',
    domain: 'nordstrom.com',
  },
  {
    name: 'Northern Trust',
    domain: 'northerntrust.com',
  },
  {
    name: 'Northrop Grumman',
    domain: 'northropgrumman.com',
  },
  {
    name: 'Northwestern Mutual',
    domain: 'northwesternmutual.com',
  },
  {
    name: 'NRG Energy',
    domain: 'nrg.com',
  },
  {
    name: 'Norfolk Southern',
    domain: 'nscorp.com',
  },
  {
    name: 'Nucor',
    domain: 'nucor.com',
  },
  {
    name: 'Nvidia',
    domain: 'nvidia.com',
  },
  {
    name: 'NVR',
    domain: 'nvrinc.com',
  },
  {
    name: 'Office Depot',
    domain: 'officedepot.com',
  },
  {
    name: 'Old Republic',
    domain: 'oldrepublic.com',
  },
  {
    name: 'Olin',
    domain: 'olin.com',
  },
  {
    name: 'Omnicom Group',
    domain: 'omnicomgroup.com',
  },
  {
    name: 'Oneok',
    domain: 'oneok.com',
  },
  {
    name: 'Onsemi',
    domain: 'onsemi.com',
  },
  {
    name: 'Opendoor',
    domain: 'opendoor.com',
  },
  {
    name: "O'Reilly Automotive",
    domain: 'oreillyauto.com',
  },
  {
    name: 'Oshkosh',
    domain: 'oshkosh.com',
  },
  {
    name: 'Otis',
    domain: 'otis.com',
  },
  {
    name: 'Ovintiv',
    domain: 'ovintiv.com',
  },
  {
    name: 'Owens & Minor',
    domain: 'owens-minor.com',
  },
  {
    name: 'Owens Corning',
    domain: 'owenscorning.com',
  },
  {
    name: 'OXY / Occidental Petroleum',
    domain: 'oxy.com',
  },
  {
    name: 'Paccar',
    domain: 'paccar.com',
  },
  {
    name: 'Pacific Life',
    domain: 'pacificlife.com',
  },
  {
    name: 'PCA / Packaging Corp. of America',
    domain: 'packagingcorp.com',
  },
  {
    name: 'Paramount Global',
    domain: 'paramount.com',
  },
  {
    name: 'Parker',
    domain: 'parker.com',
  },
  {
    name: 'Paypal',
    domain: 'paypal.com',
  },
  {
    name: 'PBF Energy',
    domain: 'pbfenergy.com',
  },
  {
    name: 'Penske Automotive',
    domain: 'penskeautomotive.com',
  },
  {
    name: 'Performance Food Group',
    domain: 'performancefoodgroup.com',
  },
  {
    name: 'Pfizer',
    domain: 'pfizer.com',
  },
  {
    name: 'Procter & Gamble',
    domain: 'pg.com',
  },
  {
    name: 'PG&E',
    domain: 'pge.com',
  },
  {
    name: 'Phillips 66',
    domain: 'phillips66.com',
  },
  {
    name: 'Plains',
    domain: 'plains.com',
  },
  {
    name: 'Philip Morris International',
    domain: 'pmi.com',
  },
  {
    name: 'PNC',
    domain: 'pnc.com',
  },
  {
    name: 'Polaris',
    domain: 'polaris.com',
  },
  {
    name: 'PPG Industries',
    domain: 'ppg.com',
  },
  {
    name: 'PPL',
    domain: 'pplweb.com',
  },
  {
    name: 'Principal',
    domain: 'principal.com',
  },
  {
    name: 'Progressive',
    domain: 'progressive.com',
  },
  {
    name: 'Prudential',
    domain: 'prudential.com',
  },
  {
    name: 'Public Service Enterprise Group',
    domain: 'pseg.com',
  },
  {
    name: 'Publix',
    domain: 'publix.com',
  },
  {
    name: 'Pulte',
    domain: 'pulte.com',
  },
  {
    name: 'PVH',
    domain: 'pvh.com',
  },
  {
    name: 'PXD / Pioneer Natural Resources',
    domain: 'pxd.com',
  },
  {
    name: 'Qualcomm',
    domain: 'qualcomm.com',
  },
  {
    name: 'Quanta Services',
    domain: 'quantaservices.com',
  },
  {
    name: 'Quest Diagnostics',
    domain: 'questdiagnostics.com',
  },
  {
    name: 'Qurate Retail',
    domain: 'qurateretail.com',
  },
  {
    name: 'Raymond James',
    domain: 'raymondjames.com',
  },
  {
    name: 'Regeneron',
    domain: 'regeneron.com',
  },
  {
    name: 'Regions',
    domain: 'regions.com',
  },
  {
    name: 'Republic Services',
    domain: 'republicservices.com',
  },
  {
    name: 'Reinsurance Group of America',
    domain: 'rgare.com',
  },
  {
    name: 'Rite Aid',
    domain: 'riteaid.com',
  },
  {
    name: 'Robert Half',
    domain: 'roberthalf.com',
  },
  {
    name: 'Rocket Companies',
    domain: 'rocketcompanies.com',
  },
  {
    name: 'Rockwell Automation',
    domain: 'rockwellautomation.com',
  },
  {
    name: 'Roper Technologies',
    domain: 'Ropertechnologies.com',
  },
  {
    name: 'Ross Dress for Less',
    domain: 'rossfressforless.com',
  },
  {
    name: 'Reliance Steel & Aluminum Co',
    domain: 'rsac.com',
  },
  {
    name: 'Raytheon Technologies',
    domain: 'rtx.com',
  },
  {
    name: 'Ryder',
    domain: 'ryder.com',
  },
  {
    name: 'SAIC',
    domain: 'saic.com',
  },
  {
    name: 'Sanmina',
    domain: 'sanmina.com',
  },
  {
    name: 'Seaboard',
    domain: 'seaboardcorp.com',
  },
  {
    name: 'Securian',
    domain: 'securian.com',
  },
  {
    name: 'Sempra',
    domain: 'sempra.com',
  },
  {
    name: 'Sherwin-Williams',
    domain: 'sherwin-williams.com',
  },
  {
    name: 'Sonic Automotive',
    domain: 'sonicautomotive.com',
  },
  {
    name: 'Southern Company',
    domain: 'southerncompany.com',
  },
  {
    name: 'Southwest',
    domain: 'southwest.com',
  },
  {
    name: 'SpartanNash',
    domain: 'spartannash.com',
  },
  {
    name: 'S&P Global',
    domain: 'spglobal.com',
  },
  {
    name: 'Stanley Black & Decker',
    domain: 'stanleyblackanddecker.com',
  },
  {
    name: 'State Farm Insurance',
    domain: 'statefarm.com',
  },
  {
    name: 'State Street',
    domain: 'statestreet.com',
  },
  {
    name: 'Steel Dynamics',
    domain: 'steeldynamics.com',
  },
  {
    name: 'StoneX',
    domain: 'stonex.com',
  },
  {
    name: 'Stryker',
    domain: 'stryker.com',
  },
  {
    name: 'SWN / Southwestern Energy',
    domain: 'swn.com',
  },
  {
    name: 'Synchrony',
    domain: 'synchrony.com',
  },
  {
    name: 'Sysco',
    domain: 'sysco.com',
  },
  {
    name: 'TravelCenters of America',
    domain: 'ta-petro.com',
  },
  {
    name: 'Targa',
    domain: 'targaresources.com',
  },
  {
    name: 'Taylor Morrison',
    domain: 'taylormorrison.com',
  },
  {
    name: 'TD Synnex',
    domain: 'tdsynnex.com',
  },
  {
    name: 'Tenet Healthcare',
    domain: 'tenethealth.com',
  },
  {
    name: 'Tenneco',
    domain: 'tenneco.com',
  },
  {
    name: 'Textron',
    domain: 'textron.com',
  },
  {
    name: 'The Hartford',
    domain: 'thehartford.com',
  },
  {
    name: 'Thermo Fisher',
    domain: 'thermofisher.com',
  },
  {
    name: 'Thor',
    domain: 'thorindustries.com',
  },
  {
    name: 'Thrivent',
    domain: 'thrivent.com',
  },
  {
    name: 'Texas Instruments',
    domain: 'ti.com',
  },
  {
    name: 'TIAA',
    domain: 'tiaa.com',
  },
  {
    name: 'TJX',
    domain: 'tjx.com',
  },
  {
    name: 'Toll Brothers',
    domain: 'tollbrothers.com',
  },
  {
    name: 'Tractor Supply',
    domain: 'tractorsupply.com',
  },
  {
    name: 'Travelers',
    domain: 'travelers.com',
  },
  {
    name: 'T. Rowe Price',
    domain: 'troweprice.com',
  },
  {
    name: 'Truist',
    domain: 'truist.com',
  },
  {
    name: 'Tyson Foods',
    domain: 'tyson.com',
  },
  {
    name: 'UFP Industries',
    domain: 'ufpi.com',
  },
  {
    name: 'UGI',
    domain: 'ugi.com',
  },
  {
    name: 'Universal Health Services',
    domain: 'uhs.com',
  },
  {
    name: 'Ulta Beauty',
    domain: 'ultra.com',
  },
  {
    name: 'UNFI',
    domain: 'unfi.com',
  },
  {
    name: 'United',
    domain: 'united.com',
  },
  {
    name: 'UnitedHealth Group',
    domain: 'unitedhealthgroup.com',
  },
  {
    name: 'United Rentals',
    domain: 'unitedrentals.com',
  },
  {
    name: 'Univar Solutions',
    domain: 'univarsolutions.com',
  },
  {
    name: 'Unum',
    domain: 'unum.com',
  },
  {
    name: 'Union Pacific',
    domain: 'up.com',
  },
  {
    name: 'UPS',
    domain: 'ups.com',
  },
  {
    name: 'USAA',
    domain: 'usaa.com',
  },
  {
    name: 'U.S. Bank',
    domain: 'usbank.com',
  },
  {
    name: 'US Foods',
    domain: 'usfoods.com',
  },
  {
    name: 'United States Steel',
    domain: 'uss.com',
  },
  {
    name: 'Valero',
    domain: 'valero.com',
  },
  {
    name: 'Veritiv',
    domain: 'veritiv.com',
  },
  {
    name: 'Verizon',
    domain: 'verizon.com',
  },
  {
    name: 'VFC',
    domain: 'vfc.com',
  },
  {
    name: 'Viatris',
    domain: 'viatris.com',
  },
  {
    name: "Victoria's Secret",
    domain: 'victoriassecret.com',
  },
  {
    name: 'Visa',
    domain: 'visa.com',
  },
  {
    name: 'Vistra',
    domain: 'vistra.com',
  },
  {
    name: 'Vertex',
    domain: 'vrtx.com',
  },
  {
    name: 'Wabtec',
    domain: 'wabtec.com',
  },
  {
    name: 'Walgreens Boots Alliance',
    domain: 'walgreensbootsalliance.com',
  },
  {
    name: 'Walt Disney',
    domain: 'waltdisney.com',
  },
  {
    name: 'Wayfair',
    domain: 'wayfair.com',
  },
  {
    name: 'Warner Bros. Discovery',
    domain: 'wbd.com',
  },
  {
    name: 'WEC Energy Group',
    domain: 'wecenergygroup.com',
  },
  {
    name: 'Wells Fargo',
    domain: 'wellsfargo.com',
  },
  {
    name: 'WESCO',
    domain: 'wesco.com',
  },
  {
    name: 'Western Digital',
    domain: 'westerndigital.com',
  },
  {
    name: 'Western & Southern Financial Group',
    domain: 'westernsouthern.com',
  },
  {
    name: 'Westlake',
    domain: 'westlake.com',
  },
  {
    name: 'WestRock',
    domain: 'westrock.com',
  },
  {
    name: 'Weyerhaeuser',
    domain: 'weyerhaeuser.com',
  },
  {
    name: 'World Fuel Services',
    domain: 'wfscorp.com',
  },
  {
    name: 'Whirlpool',
    domain: 'whirlpool.com',
  },
  {
    name: 'Williams-Sonoma',
    domain: 'williams-sonomainc.com',
  },
  {
    name: 'Williams',
    domain: 'williams.com',
  },
  {
    name: 'Waste Management',
    domain: 'wm.com',
  },
  {
    name: 'Xcel Energy',
    domain: 'xcelenergy.com',
  },
  {
    name: 'Xerox',
    domain: 'xerox.com',
  },
  {
    name: 'XPO Logistics',
    domain: 'xpo.com',
  },
  {
    name: 'Yum Brands',
    domain: 'yum.com',
  },
  {
    name: 'Yum China',
    domain: 'yumchina.com',
  },
  {
    name: 'Zillow',
    domain: 'zillow.com',
  },
  {
    name: 'Zimmer Biomet',
    domain: 'zimmerbiomet.com',
  },
  {
    name: 'Zoetis',
    domain: 'zoetis.com',
  },
  {
    name: 'YouTube',
    domain: 'youtube.com',
  },
  {
    name: 'Instagram',
    domain: 'instagram.com',
  },
  {
    name: 'GitHub',
    domain: 'github.com',
  },
  {
    name: 'Vimeo',
    domain: 'vimeo.com',
  },
  {
    name: 'WordPress',
    domain: 'wordpress.com',
  },
  {
    name: 'Blogger',
    domain: 'blogger.com',
  },
  {
    name: 'WhatsApp',
    domain: 'whatsapp.com',
  },
  {
    name: 'Macromedia',
    domain: 'macromedia.com',
  },
  {
    name: 'Yahoo',
    domain: 'yahoo.com',
  },
  {
    name: 'Tumblr',
    domain: 'tumblr.com',
  },
  {
    name: 'Reddit',
    domain: 'reddit.com',
  },
  {
    name: 'Flickr',
    domain: 'flickr.com',
  },
  {
    name: 'Gravatar',
    domain: 'gravatar.com',
  },
  {
    name: 'AWS',
    domain: 'amazonaws.com',
  },
  {
    name: 'New York Times',
    domain: 'nytimes.com',
  },
  {
    name: 'Cloudflare',
    domain: 'cloudflare.com',
  },
  {
    name: 'SoundCloud',
    domain: 'soundcloud.com',
  },
  {
    name: 'Medium',
    domain: 'medium.com',
  },
  {
    name: 'Forbes',
    domain: 'forbes.com',
  },
  {
    name: 'Baidu',
    domain: 'baidu.com',
  },
  {
    name: 'TikTok',
    domain: 'tiktok.com',
  },
  {
    name: 'The Guardian',
    domain: 'theguardian.com',
  },
  {
    name: 'Reveal',
    domain: 'reveal.com',
  },
  {
    name: 'CNN',
    domain: 'cnn.com',
  },
  {
    name: 'Dropbox',
    domain: 'dropbox.com',
  },
  {
    name: 'ScienceDirect',
    domain: 'sciencedirect.com',
  },
  {
    name: 'Weebly',
    domain: 'weebly.com',
  },
  {
    name: 'Live',
    domain: 'live.com',
  },
  {
    name: 'BBC',
    domain: 'bbc.com',
  },
  {
    name: 'TinyURL',
    domain: 'tinyurl.com',
  },
  {
    name: 'Opera',
    domain: 'opera.com',
  },
  {
    name: 'Reuters',
    domain: 'reuters.com',
  },
  {
    name: 'Washington Post',
    domain: 'washingtonpost.com',
  },
  {
    name: 'IMDb',
    domain: 'imdb.com',
  },
  {
    name: 'Bloomberg',
    domain: 'bloomberg.com',
  },
  {
    name: 'Bing',
    domain: 'bing.com',
  },
  {
    name: 'Weibo',
    domain: 'weibo.com',
  },
  {
    name: 'Wall Street Journal',
    domain: 'wsj.com',
  },
  {
    name: 'Wiley',
    domain: 'wiley.com',
  },
  {
    name: 'Nature',
    domain: 'nature.com',
  },
  {
    name: 'Business Insider',
    domain: 'businessinsider.com',
  },
  {
    name: 'MSN',
    domain: 'msn.com',
  },
  {
    name: 'Springer',
    domain: 'springer.com',
  },
  {
    name: 'Outlook',
    domain: 'outlook.com',
  },
  {
    name: 'Shopify',
    domain: 'shopify.com',
  },
  {
    name: 'CNBC',
    domain: 'cnbc.com',
  },
  {
    name: 'Go',
    domain: 'go.com',
  },
  {
    name: 'Eventbrite',
    domain: 'eventbrite.com',
  },
  {
    name: 'Time',
    domain: 'time.com',
  },
  {
    name: 'USA Today',
    domain: 'usatoday.com',
  },
  {
    name: 'Wix',
    domain: 'wix.com',
  },
  {
    name: 'CNET',
    domain: 'cnet.com',
  },
  {
    name: 'TED',
    domain: 'ted.com',
  },
  {
    name: 'Statista',
    domain: 'statista.com',
  },
  {
    name: 'Wired',
    domain: 'wired.com',
  },
  {
    name: 'Unsplash',
    domain: 'unsplash.com',
  },
  {
    name: 'SurveyMonkey',
    domain: 'surveymonkey.com',
  },
  {
    name: 'WebMD',
    domain: 'webmd.com',
  },
  {
    name: 'MySQL',
    domain: 'mysql.com',
  },
  {
    name: 'Etsy',
    domain: 'etsy.com',
  },
  {
    name: 'Aol',
    domain: 'aol.com',
  },
  {
    name: 'TechCrunch',
    domain: 'techcrunch.com',
  },
  {
    name: 'CBS News',
    domain: 'cbsnews.com',
  },
  {
    name: 'Huffington Post',
    domain: 'huffingtonpost.com',
  },
  {
    name: 'Imgur',
    domain: 'imgur.com',
  },
  {
    name: 'LA Times',
    domain: 'latimes.com',
  },
  {
    name: 'Yelp',
    domain: 'yelp.com',
  },
  {
    name: 'The Verge',
    domain: 'theverge.com',
  },
  {
    name: 'Stack Overflow',
    domain: 'stackoverflow.com',
  },
  {
    name: 'Dailymotion',
    domain: 'dailymotion.com',
  },
  {
    name: 'Mailchimp',
    domain: 'mailchimp.com',
  },
  {
    name: 'The Atlantic',
    domain: 'theatlantic.com',
  },
  {
    name: 'Nationalgeographic',
    domain: 'nationalgeographic.com',
  },
  {
    name: 'Goodreads',
    domain: 'goodreads.com',
  },
  {
    name: 'Squarespace',
    domain: 'squarespace.com',
  },
  {
    name: 'Tripadvisor',
    domain: 'tripadvisor.com',
  },
  {
    name: 'HubSpot',
    domain: 'hubspot.com',
  },
  {
    name: 'Statcounter',
    domain: 'statcounter.com',
  },
  {
    name: 'Britannica',
    domain: 'britannica.com',
  },
  {
    name: 'NBC News',
    domain: 'nbcnews.com',
  },
  {
    name: 'Kickstarter',
    domain: 'kickstarter.com',
  },
  {
    name: 'Investopedia',
    domain: 'investopedia.com',
  },
  {
    name: 'Scribd',
    domain: 'scribd.com',
  },
  {
    name: 'Quora',
    domain: 'quora.com',
  },
  {
    name: 'Skype',
    domain: 'skype.com',
  },
  {
    name: 'Livejournal',
    domain: 'livejournal.com',
  },
  {
    name: 'Bandcamp',
    domain: 'bandcamp.com',
  },
  {
    name: 'Bitly',
    domain: 'bitly.com',
  },
  {
    name: 'Calendly',
    domain: 'calendly.com',
  },
  {
    name: 'Red Hat',
    domain: 'redhat.com',
  },
  {
    name: 'U.S. News & World Report',
    domain: 'usnews.com',
  },
  {
    name: 'Economist',
    domain: 'economist.com',
  },
  {
    name: 'Booking.com',
    domain: 'booking.com',
  },
  {
    name: 'FOX News',
    domain: 'foxnews.com',
  },
  {
    name: 'Akismet',
    domain: 'akismet.com',
  },
  {
    name: 'Fandom',
    domain: 'fandom.com',
  },
  {
    name: 'wikiHow',
    domain: 'wikihow.com',
  },
  {
    name: 'About',
    domain: 'about.com',
  },
  {
    name: 'Vice',
    domain: 'vice.com',
  },
  {
    name: 'Psychology Today',
    domain: 'psychologytoday.com',
  },
  {
    name: 'The Conversation',
    domain: 'theconversation.com',
  },
  {
    name: 'Science Daily',
    domain: 'sciencedaily.com',
  },
  {
    name: 'GoDaddy',
    domain: 'godaddy.com',
  },
  {
    name: 'Deloitte',
    domain: 'deloitte.com',
  },
  {
    name: 'Typepad',
    domain: 'typepad.com',
  },
  {
    name: 'Dribbble',
    domain: 'dribbble.com',
  },
  {
    name: 'Canva',
    domain: 'canva.com',
  },
  {
    name: 'McKinsey & Company',
    domain: 'mckinsey.com',
  },
  {
    name: 'DeviantArt',
    domain: 'deviantart.com',
  },
  {
    name: 'Indeed',
    domain: 'indeed.com',
  },
  {
    name: 'Mashable',
    domain: 'mashable.com',
  },
  {
    name: 'Fortune',
    domain: 'fortune.com',
  },
  {
    name: 'Zendesk',
    domain: 'zendesk.com',
  },
  {
    name: 'MarketWatch',
    domain: 'marketwatch.com',
  },
  {
    name: 'ZDNet',
    domain: 'zdnet.com',
  },
  {
    name: 'Giphy',
    domain: 'giphy.com',
  },
  {
    name: 'NY Post',
    domain: 'nypost.com',
  },
  {
    name: 'Fast Company',
    domain: 'fastcompany.com',
  },
  {
    name: 'Ubuntu',
    domain: 'ubuntu.com',
  },
  {
    name: 'Sun',
    domain: 'sun.com',
  },
  {
    name: "O'Reilly",
    domain: 'oreilly.com',
  },
  {
    name: 'The New Yorker',
    domain: 'newyorker.com',
  },
  {
    name: 'Discord',
    domain: 'discord.com',
  },
  {
    name: 'Auctollo',
    domain: 'auctollo.com',
  },
  {
    name: 'GoFundMe',
    domain: 'gofundme.com',
  },
  {
    name: 'Associated Press',
    domain: 'apnews.com',
  },
  {
    name: 'Steam',
    domain: 'steampowered.com',
  },
  {
    name: 'Trustpilot',
    domain: 'trustpilot.com',
  },
  {
    name: 'FeedBurner',
    domain: 'feedburner.com',
  },
  {
    name: 'Stripe',
    domain: 'stripe.com',
  },
  {
    name: 'Newsweek',
    domain: 'newsweek.com',
  },
  {
    name: 'GeoCities',
    domain: 'geocities.com',
  },
  {
    name: 'Vox',
    domain: 'vox.com',
  },
  {
    name: 'Disqus',
    domain: 'disqus.com',
  },
  {
    name: 'Alibaba',
    domain: 'alibaba.com',
  },
  {
    name: 'Merriam-Webster',
    domain: 'merriam-webster.com',
  },
  {
    name: 'Inc',
    domain: 'inc.com',
  },
  {
    name: 'Scientific American',
    domain: 'scientificamerican.com',
  },
  {
    name: 'Patreon',
    domain: 'patreon.com',
  },
  {
    name: 'Gizmodo',
    domain: 'gizmodo.com',
  },
  {
    name: 'Engadget',
    domain: 'engadget.com',
  },
  {
    name: 'Elsevier',
    domain: 'elsevier.com',
  },
  {
    name: 'Docker',
    domain: 'docker.com',
  },
  {
    name: 'Entrepreneur',
    domain: 'entrepreneur.com',
  },
  {
    name: 'Gitlab',
    domain: 'gitlab.com',
  },
  {
    name: 'Constant Contact',
    domain: 'constantcontact.com',
  },
  {
    name: 'Huawei',
    domain: 'huawei.com',
  },
  {
    name: 'Meetup',
    domain: 'meetup.com',
  },
  {
    name: 'The Lancet',
    domain: 'thelancet.com',
  },
  {
    name: 'Ars Technica',
    domain: 'arstechnica.com',
  },
  {
    name: 'Medical News Today',
    domain: 'medicalnewstoday.com',
  },
  {
    name: 'Photobucket, Inc',
    domain: 'photobucket.com',
  },
  {
    name: 'Uk',
    domain: 'uk.com',
  },
  {
    name: 'JAMA Network',
    domain: 'jamanetwork.com',
  },
  {
    name: 'Gartner',
    domain: 'gartner.com',
  },
  {
    name: 'Slate',
    domain: 'slate.com',
  },
  {
    name: 'SFGATE',
    domain: 'sfgate.com',
  },
  {
    name: 'Ikea',
    domain: 'ikea.com',
  },
  {
    name: 'Indiegogo, Inc',
    domain: 'indiegogo.com',
  },
  {
    name: 'Chicago Tribune',
    domain: 'chicagotribune.com',
  },
  {
    name: 'Substack',
    domain: 'substack.com',
  },
  {
    name: 'HowStuffWorks',
    domain: 'howstuffworks.com',
  },
  {
    name: 'AliExpress',
    domain: 'aliexpress.com',
  },
  {
    name: 'Trello',
    domain: 'trello.com',
  },
  {
    name: 'Hilton',
    domain: 'hilton.com',
  },
  {
    name: 'Box',
    domain: 'box.com',
  },
  {
    name: 'Stack Exchange',
    domain: 'stackexchange.com',
  },
  {
    name: 'Wikia',
    domain: 'wikia.com',
  },
  {
    name: 'Variety',
    domain: 'variety.com',
  },
  {
    name: 'Slack',
    domain: 'slack.com',
  },
  {
    name: 'Politico',
    domain: 'politico.com',
  },
  {
    name: 'Barnes & Noble',
    domain: 'barnesandnoble.com',
  },
  {
    name: 'Al Jazeera',
    domain: 'aljazeera.com',
  },
  {
    name: 'Rolling Stone',
    domain: 'rollingstone.com',
  },
  {
    name: 'PC Magazine',
    domain: 'pcmag.com',
  },
  {
    name: 'VentureBeat',
    domain: 'venturebeat.com',
  },
  {
    name: 'Social Science Research Network',
    domain: 'ssrn.com',
  },
  {
    name: 'ESPN',
    domain: 'espn.com',
  },
  {
    name: 'History Channel',
    domain: 'history.com',
  },
  {
    name: 'New Scientist',
    domain: 'newscientist.com',
  },
  {
    name: 'VMware',
    domain: 'vmware.com',
  },
  {
    name: 'Gallup',
    domain: 'gallup.com',
  },
  {
    name: 'MediaFire',
    domain: 'mediafire.com',
  },
  {
    name: 'Evernote',
    domain: 'evernote.com',
  },
  {
    name: 'PwC',
    domain: 'pwc.com',
  },
  {
    name: 'Time and Date',
    domain: 'timeanddate.com',
  },
  {
    name: 'South China Morning Post',
    domain: 'scmp.com',
  },
  {
    name: 'Proofpoint, Inc.',
    domain: 'proofpoint.com',
  },
  {
    name: 'The Hill',
    domain: 'thehill.com',
  },
  {
    name: 'The Hollywood Reporter',
    domain: 'hollywoodreporter.com',
  },
  {
    name: 'Dictionary.com',
    domain: 'dictionary.com',
  },
  {
    name: 'Smithsonian',
    domain: 'smithsonianmag.com',
  },
  {
    name: 'The Globe and Mail',
    domain: 'theglobeandmail.com',
  },
  {
    name: 'Atlassian',
    domain: 'atlassian.com',
  },
  {
    name: 'WooCommerce',
    domain: 'woocommerce.com',
  },
  {
    name: 'OpenAI',
    domain: 'openai.com',
  },
  {
    name: 'TechRadar',
    domain: 'techradar.com',
  },
  {
    name: 'New York Daily News',
    domain: 'nydailynews.com',
  },
  {
    name: 'Microsoft 365',
    domain: 'office.com',
  },
  {
    name: 'Today',
    domain: 'today.com',
  },
  {
    name: 'Siemens',
    domain: 'siemens.com',
  },
  {
    name: 'Udemy',
    domain: 'udemy.com',
  },
  {
    name: 'Chron',
    domain: 'chron.com',
  },
  {
    name: 'Ning',
    domain: 'ning.com',
  },
  {
    name: 'euronews',
    domain: 'euronews.com',
  },
  {
    name: 'Technology Review',
    domain: 'technologyreview.com',
  },
  {
    name: 'US',
    domain: 'us.com',
  },
  {
    name: 'The Weather Channel',
    domain: 'weather.com',
  },
  {
    name: 'Snapchat',
    domain: 'snapchat.com',
  },
  {
    name: 'Lifehacker',
    domain: 'lifehacker.com',
  },
  {
    name: 'Automattic',
    domain: 'automattic.com',
  },
  {
    name: 'Fool',
    domain: 'fool.com',
  },
  {
    name: 'Big Cartel, LLC',
    domain: 'bigcartel.com',
  },
  {
    name: 'Nikkei',
    domain: 'nikkei.com',
  },
  {
    name: 'Parallels',
    domain: 'parallels.com',
  },
  {
    name: 'Qualtrics',
    domain: 'qualtrics.com',
  },
  {
    name: 'New York Magazine',
    domain: 'nymag.com',
  },
  {
    name: 'Fiverr',
    domain: 'fiverr.com',
  },
  {
    name: 'IGN',
    domain: 'ign.com',
  },
  {
    name: 'Instructables',
    domain: 'instructables.com',
  },
  {
    name: 'Playstation',
    domain: 'playstation.com',
  },
  {
    name: 'Verisign',
    domain: 'verisign.com',
  },
  {
    name: 'Java',
    domain: 'java.com',
  },
  {
    name: 'The Daily Beast',
    domain: 'thedailybeast.com',
  },
  {
    name: 'The Balance',
    domain: 'thebalancemoney.com',
  },
  {
    name: 'Liberated Syndication',
    domain: 'libsyn.com',
  },
  {
    name: 'Digital Trends',
    domain: 'digitaltrends.com',
  },
  {
    name: 'Mozilla',
    domain: 'mozilla.com',
  },
  {
    name: 'Angelfire',
    domain: 'angelfire.com',
  },
  {
    name: 'jQuery',
    domain: 'jquery.com',
  },
  {
    name: 'Boston',
    domain: 'boston.com',
  },
  {
    name: 'People',
    domain: 'people.com',
  },
  {
    name: 'The Free Dictionary',
    domain: 'thefreedictionary.com',
  },
  {
    name: 'The Register',
    domain: 'theregister.com',
  },
  {
    name: 'Micro Focus',
    domain: 'microfocus.com',
  },
  {
    name: 'Insider Inc.',
    domain: 'insider.com',
  },
  {
    name: 'Foursquare Labs, Inc.',
    domain: 'foursquare.com',
  },
  {
    name: 'Accenture',
    domain: 'accenture.com',
  },
  {
    name: 'Cell',
    domain: 'cell.com',
  },
  {
    name: 'Nasdaq',
    domain: 'nasdaq.com',
  },
  {
    name: 'Urban Dictionary',
    domain: 'urbandictionary.com',
  },
  {
    name: 'SAP',
    domain: 'sap.com',
  },
  {
    name: 'Wufoo',
    domain: 'wufoo.com',
  },
  {
    name: 'MLB',
    domain: 'mlb.com',
  },
  {
    name: 'PRWeb',
    domain: 'prweb.com',
  },
  {
    name: 'Cygwin',
    domain: 'cygwin.com',
  },
  {
    name: 'Overblog',
    domain: 'over-blog.com',
  },
  {
    name: 'CCTV',
    domain: 'cctv.com',
  },
  {
    name: 'Hootsuite',
    domain: 'hootsuite.com',
  },
  {
    name: 'Salon',
    domain: 'salon.com',
  },
  {
    name: 'Steam community',
    domain: 'steamcommunity.com',
  },
  {
    name: 'Generatepress',
    domain: 'generatepress.com',
  },
  {
    name: 'Vogue',
    domain: 'vogue.com',
  },
  {
    name: 'Tencent',
    domain: 'tencent.com',
  },
  {
    name: 'Houzz',
    domain: 'houzz.com',
  },
  {
    name: 'NDTV',
    domain: 'ndtv.com',
  },
  {
    name: 'Lenovo',
    domain: 'lenovo.com',
  },
  {
    name: 'Globo',
    domain: 'globo.com',
  },
  {
    name: 'DuckDuckGo',
    domain: 'duckduckgo.com',
  },
  {
    name: 'Medscape',
    domain: 'medscape.com',
  },
  {
    name: 'Lonely Planet',
    domain: 'lonelyplanet.com',
  },
  {
    name: 'Git',
    domain: 'git-scm.com',
  },
  {
    name: 'Crunchbase',
    domain: 'crunchbase.com',
  },
  {
    name: 'Heroku',
    domain: 'heroku.com',
  },
  {
    name: 'Zoho Corporation',
    domain: 'zoho.com',
  },
  {
    name: 'Yola',
    domain: 'yolasite.com',
  },
  {
    name: 'NBA',
    domain: 'nba.com',
  },
  {
    name: 'GameSpot',
    domain: 'gamespot.com',
  },
  {
    name: 'Electronic Arts',
    domain: 'ea.com',
  },
  {
    name: 'MapQuest',
    domain: 'mapquest.com',
  },
  {
    name: 'iHeart',
    domain: 'iheart.com',
  },
  {
    name: 'VOA News',
    domain: 'voanews.com',
  },
  {
    name: 'Vanity Fair',
    domain: 'vanityfair.com',
  },
  {
    name: 'Jimdo',
    domain: 'jimdo.com',
  },
  {
    name: 'Toronto Star',
    domain: 'thestar.com',
  },
  {
    name: 'The Boston Globe',
    domain: 'bostonglobe.com',
  },
  {
    name: 'FIFA',
    domain: 'fifa.com',
  },
  {
    name: 'Autodesk',
    domain: 'autodesk.com',
  },
  {
    name: 'Glassdoor',
    domain: 'glassdoor.com',
  },
  {
    name: 'TNW',
    domain: 'thenextweb.com',
  },
  {
    name: 'Verywell Mind',
    domain: 'verywellmind.com',
  },
  {
    name: 'Hyatt',
    domain: 'hyatt.com',
  },
  {
    name: 'Pastebin',
    domain: 'pastebin.com',
  },
  {
    name: 'Accor',
    domain: 'accor.com',
  },
  {
    name: 'Adweek',
    domain: 'adweek.com',
  },
  {
    name: 'Livestream',
    domain: 'livestream.com',
  },
  {
    name: 'Nokia',
    domain: 'nokia.com',
  },
  {
    name: 'Discovery',
    domain: 'discovery.com',
  },
  {
    name: 'Symantec',
    domain: 'symantec.com',
  },
  {
    name: 'Esquire',
    domain: 'esquire.com',
  },
  {
    name: 'Asus',
    domain: 'asus.com',
  },
  {
    name: 'PCWorld',
    domain: 'pcworld.com',
  },
  {
    name: 'Billboard',
    domain: 'billboard.com',
  },
  {
    name: 'Xbox',
    domain: 'xbox.com',
  },
  {
    name: 'Binance',
    domain: 'binance.com',
  },
  {
    name: 'Computerworld',
    domain: 'computerworld.com',
  },
  {
    name: 'Cosmopolitan',
    domain: 'cosmopolitan.com',
  },
  {
    name: 'IHG Hotels & Resorts',
    domain: 'ihg.com',
  },
  {
    name: 'United States Postal Service',
    domain: 'usps.com',
  },
  {
    name: 'SecurityFocus',
    domain: 'securityfocus.com',
  },
  {
    name: 'Axios',
    domain: 'axios.com',
  },
  {
    name: 'AccuWeather',
    domain: 'accuweather.com',
  },
  {
    name: 'Lego',
    domain: 'lego.com',
  },
  {
    name: 'Food Network',
    domain: 'foodnetwork.com',
  },
  {
    name: 'The Irish Times',
    domain: 'irishtimes.com',
  },
  {
    name: 'The Seattle Times',
    domain: 'seattletimes.com',
  },
  {
    name: 'Douban',
    domain: 'douban.com',
  },
  {
    name: 'Seeking Alpha',
    domain: 'seekingalpha.com',
  },
  {
    name: 'The Mercury News',
    domain: 'mercurynews.com',
  },
  {
    name: 'Bloomberg',
    domain: 'businessweek.com',
  },
  {
    name: 'Weather Underground',
    domain: 'wunderground.com',
  },
  {
    name: 'Xiaomi Global',
    domain: 'mi.com',
  },
  {
    name: 'Patch',
    domain: 'patch.com',
  },
  {
    name: 'Good Housekeeping',
    domain: 'goodhousekeeping.com',
  },
  {
    name: 'Deadline',
    domain: 'deadline.com',
  },
  {
    name: 'OVHcloud',
    domain: 'ovhcloud.com',
  },
  {
    name: 'Kaspersky',
    domain: 'kaspersky.com',
  },
  {
    name: 'PrestaShop',
    domain: 'prestashop.com',
  },
  {
    name: 'Perl',
    domain: 'perl.com',
  },
  {
    name: 'Answers',
    domain: 'answers.com',
  },
  {
    name: 'SmugMug',
    domain: 'smugmug.com',
  },
  {
    name: 'Upwork',
    domain: 'upwork.com',
  },
  {
    name: 'The Jerusalem Post',
    domain: 'jpost.com',
  },
  {
    name: 'Semrush',
    domain: 'semrush.com',
  },
  {
    name: 'Hindustan Times',
    domain: 'hindustantimes.com',
  },
  {
    name: 'LiveAbout',
    domain: 'liveabout.com',
  },
  {
    name: 'Feedly',
    domain: 'feedly.com',
  },
  {
    name: 'DigitalO cean',
    domain: 'digitalocean.com',
  },
  {
    name: 'Snopes',
    domain: 'snopes.com',
  },
  {
    name: 'Disney',
    domain: 'disney.com',
  },
  {
    name: 'cPanel',
    domain: 'cpanel.com',
  },
  {
    name: 'Getty Images',
    domain: 'gettyimages.com',
  },
  {
    name: 'Thomson Reuters',
    domain: 'thomsonreuters.com',
  },
  {
    name: 'phpBB',
    domain: 'phpbb.com',
  },
  {
    name: 'FindLaw',
    domain: 'findlaw.com',
  },
  {
    name: 'The Indian Express',
    domain: 'indianexpress.com',
  },
  {
    name: 'Space',
    domain: 'space.com',
  },
  {
    name: 'Time Out',
    domain: 'timeout.com',
  },
  {
    name: 'Trend Micro',
    domain: 'trendmicro.com',
  },
  {
    name: 'Calameo',
    domain: 'calameo.com',
  },
  {
    name: 'Fox Business',
    domain: 'foxbusiness.com',
  },
  {
    name: 'Alexa',
    domain: 'alexa.com',
  },
  {
    name: 'Yumpu',
    domain: 'yumpu.com',
  },
  {
    name: 'Tableau',
    domain: 'tableau.com',
  },
  {
    name: 'MSNBC',
    domain: 'msnbc.com',
  },
  {
    name: 'Panasonic',
    domain: 'panasonic.com',
  },
  {
    name: 'Bustle',
    domain: 'bustle.com',
  },
  {
    name: 'Nokia Bell Labs',
    domain: 'bell-labs.com',
  },
  {
    name: 'Rotten Tomatoes',
    domain: 'rottentomatoes.com',
  },
  {
    name: 'HubPages',
    domain: 'hubpages.com',
  },
  {
    name: 'Miami Herald',
    domain: 'miamiherald.com',
  },
  {
    name: 'Olympics',
    domain: 'olympics.com',
  },
  {
    name: 'NameBright',
    domain: 'namebright.com',
  },
  {
    name: 'Deezer',
    domain: 'deezer.com',
  },
  {
    name: 'How-to Geek',
    domain: 'howtogeek.com',
  },
  {
    name: 'The Washington Times',
    domain: 'washingtontimes.com',
  },
  {
    name: 'Y Combinator',
    domain: 'ycombinator.com',
  },
  {
    name: 'Iubenda',
    domain: 'iubenda.com',
  },
  {
    name: 'Elle',
    domain: 'elle.com',
  },
  {
    name: 'Thawte',
    domain: 'thawte.com',
  },
  {
    name: 'Tech Republic',
    domain: 'techrepublic.com',
  },
  {
    name: 'KPMG',
    domain: 'kpmg.com',
  },
  {
    name: 'WeTransfer',
    domain: 'wetransfer.com',
  },
  {
    name: 'Gumroad',
    domain: 'gumroad.com',
  },
  {
    name: 'CoinDesk',
    domain: 'coindesk.com',
  },
  {
    name: 'Stitcher',
    domain: 'stitcher.com',
  },
  {
    name: 'Toutiao',
    domain: 'toutiao.com',
  },
  {
    name: 'Reference',
    domain: 'reference.com',
  },
  {
    name: 'International Business Times',
    domain: 'ibtimes.com',
  },
  {
    name: 'Imageshack',
    domain: 'imageshack.com',
  },
  {
    name: 'Red Bull',
    domain: 'redbull.com',
  },
  {
    name: 'Nielsen',
    domain: 'nielsen.com',
  },
  {
    name: 'LG',
    domain: 'lg.com',
  },
  {
    name: 'Lifewire',
    domain: 'lifewire.com',
  },
  {
    name: 'Philips',
    domain: 'philips.com',
  },
  {
    name: 'Foreign Policy',
    domain: 'foreignpolicy.com',
  },
  {
    name: 'Square',
    domain: 'squareup.com',
  },
  {
    name: 'WampServer',
    domain: 'wampserver.com',
  },
  {
    name: 'Popular Science',
    domain: 'popsci.com',
  },
  {
    name: 'The Hindu',
    domain: 'thehindu.com',
  },
  {
    name: 'Hindawi',
    domain: 'hindawi.com',
  },
  {
    name: 'Popular Mechanics',
    domain: 'popularmechanics.com',
  },
  {
    name: 'Bible Gateway',
    domain: 'biblegateway.com',
  },
  {
    name: 'Diigo',
    domain: 'diigo.com',
  },
  {
    name: 'xkcd',
    domain: 'xkcd.com',
  },
  {
    name: 'Flipboard',
    domain: 'flipboard.com',
  },
  {
    name: 'Search Engine Land',
    domain: 'searchengineland.com',
  },
  {
    name: 'Justia',
    domain: 'justia.com',
  },
  {
    name: 'Dallas Morning News',
    domain: 'dallasnews.com',
  },
  {
    name: 'Bankrate',
    domain: 'bankrate.com',
  },
  {
    name: 'The Christian Science Monitor',
    domain: 'csmonitor.com',
  },
  {
    name: 'Star Tribune',
    domain: 'startribune.com',
  },
  {
    name: 'Infogram',
    domain: 'infogram.com',
  },
  {
    name: 'BuzzFeed News',
    domain: 'buzzfeednews.com',
  },
  {
    name: 'Asahi',
    domain: 'asahi.com',
  },
  {
    name: 'Pop Sugar',
    domain: 'popsugar.com',
  },
  {
    name: 'TreeHugger',
    domain: 'treehugger.com',
  },
  {
    name: 'Denver Post',
    domain: 'denverpost.com',
  },
  {
    name: 'Genius',
    domain: 'genius.com',
  },
  {
    name: 'Sketchfab',
    domain: 'sketchfab.com',
  },
  {
    name: 'Spreaker',
    domain: 'spreaker.com',
  },
  {
    name: 'Atlas Obscura',
    domain: 'atlasobscura.com',
  },
  {
    name: 'EU',
    domain: 'eu.com',
  },
  {
    name: 'eHow',
    domain: 'ehow.com',
  },
  {
    name: 'Reverb Nation',
    domain: 'reverbnation.com',
  },
  {
    name: 'Discogs',
    domain: 'discogs.com',
  },
  {
    name: 'TMZ',
    domain: 'tmz.com',
  },
  {
    name: 'The Spruce',
    domain: 'thespruce.com',
  },
  {
    name: 'Sophos',
    domain: 'sophos.com',
  },
  {
    name: 'The Arizona Republic',
    domain: 'azcentral.com',
  },
  {
    name: 'Cvent',
    domain: 'cvent.com',
  },
  {
    name: 'Verywell',
    domain: 'verywellhealth.com',
  },
  {
    name: 'Homestead',
    domain: 'homestead.com',
  },
  {
    name: 'McAfee',
    domain: 'mcafee.com',
  },
  {
    name: 'MAC',
    domain: 'mac.com',
  },
  {
    name: 'Insider Intelligence',
    domain: 'insiderintelligence.com',
  },
  {
    name: 'Refinery29',
    domain: 'refinery29.com',
  },
  {
    name: 'EW',
    domain: 'ew.com',
  },
  {
    name: 'Odoo',
    domain: 'odoo.com',
  },
  {
    name: 'All Recipes',
    domain: 'allrecipes.com',
  },
  {
    name: 'Bluehost',
    domain: 'bluehost.com',
  },
  {
    name: 'The Times of Israel',
    domain: 'timesofisrael.com',
  },
  {
    name: 'Wikidot',
    domain: 'wikidot.com',
  },
  {
    name: 'UPI',
    domain: 'upi.com',
  },
  {
    name: 'MTP',
    domain: 'mtv.com',
  },
  {
    name: 'New Jersey',
    domain: 'nj.com',
  },
  {
    name: 'Routledge',
    domain: 'routledge.com',
  },
  {
    name: 'National Post',
    domain: 'nationalpost.com',
  },
  {
    name: 'Linksys',
    domain: 'linksys.com',
  },
  {
    name: 'Flipsnack',
    domain: 'flipsnack.com',
  },
  {
    name: 'Redbubble',
    domain: 'redbubble.com',
  },
  {
    name: 'RSA',
    domain: 'rsa.com',
  },
  {
    name: 'Buzzsprout',
    domain: 'buzzsprout.com',
  },
  {
    name: 'Warner Bros.',
    domain: 'warnerbros.com',
  },
  {
    name: 'Penguin Random House',
    domain: 'penguinrandomhouse.com',
  },
  {
    name: 'Norton',
    domain: 'norton.com',
  },
  {
    name: 'Think with Google Podcast',
    domain: 'thinkwithgoogle.com',
  },
  {
    name: 'MSDN',
    domain: 'msdn.com',
  },
  {
    name: 'Mac Rumors',
    domain: 'macrumors.com',
  },
  {
    name: 'SleepyCat',
    domain: 'sleepycat.com',
  },
  {
    name: 'Search Engine Journal',
    domain: 'searchenginejournal.com',
  },
  {
    name: 'Flaticon',
    domain: 'flaticon.com',
  },
  {
    name: 'NerdWallet',
    domain: 'nerdwallet.com',
  },
  {
    name: 'MakeUseOf',
    domain: 'makeuseof.com',
  },
  {
    name: 'Instructure',
    domain: 'instructure.com',
  },
  {
    name: 'Bored Panda',
    domain: 'boredpanda.com',
  },
  {
    name: 'Avast',
    domain: 'avast.com',
  },
  {
    name: 'NBC',
    domain: 'nbc.com',
  },
  {
    name: 'NFL',
    domain: 'nfl.com',
  },
  {
    name: 'The Balance',
    domain: 'thebalance.com',
  },
  {
    name: 'China News',
    domain: 'chinanews.com',
  },
  {
    name: 'Mental Floss',
    domain: 'mentalfloss.com',
  },
  {
    name: 'Inquirer',
    domain: 'inquirer.com',
  },
  {
    name: 'Hotjar',
    domain: 'hotjar.com',
  },
  {
    name: 'iQIYI',
    domain: 'iqiyi.com',
  },
  {
    name: 'Peatix',
    domain: 'peatix.com',
  },
  {
    name: 'Cointelegraph',
    domain: 'cointelegraph.com',
  },
  {
    name: 'Font Awesome',
    domain: 'fontawesome.com',
  },
  {
    name: 'Know Your Meme',
    domain: 'knowyourmeme.com',
  },
  {
    name: 'Eater',
    domain: 'eater.com',
  },
  {
    name: 'ITVX',
    domain: 'itv.com',
  },
  {
    name: 'BlackBerry',
    domain: 'blackberry.com',
  },
  {
    name: 'Everyday Health',
    domain: 'everydayhealth.com',
  },
  {
    name: 'Padlet',
    domain: 'padlet.com',
  },
  {
    name: 'Business Standard',
    domain: 'business-standard.com',
  },
  {
    name: 'Epic Games',
    domain: 'epicgames.com',
  },
  {
    name: 'The Straits Times',
    domain: 'straitstimes.com',
  },
  {
    name: 'Jiathis',
    domain: 'jiathis.com',
  },
  {
    name: 'Chicago Sun-Times',
    domain: 'suntimes.com',
  },
  {
    name: 'Shutterfly',
    domain: 'shutterfly.com',
  },
  {
    name: 'JustGiving',
    domain: 'justgiving.com',
  },
  {
    name: 'CoinMarketCap',
    domain: 'coinmarketcap.com',
  },
  {
    name: 'Hulu',
    domain: 'hulu.com',
  },
  {
    name: 'JetBrains',
    domain: 'jetbrains.com',
  },
  {
    name: 'Observer',
    domain: 'observer.com',
  },
  {
    name: 'Chinaz',
    domain: 'chinaz.com',
  },
  {
    name: 'ProQuest',
    domain: 'proquest.com',
  },
  {
    name: 'Smashing Magazine',
    domain: 'smashingmagazine.com',
  },
  {
    name: 'Ahrefs',
    domain: 'ahrefs.com',
  },
  {
    name: 'Baltimore Sun',
    domain: 'baltimoresun.com',
  },
  {
    name: 'Logitech',
    domain: 'logitech.com',
  },
  {
    name: 'H&M',
    domain: 'hm.com',
  },
  {
    name: 'Softpedia',
    domain: 'softpedia.com',
  },
  {
    name: 'Polygon',
    domain: 'polygon.com',
  },
  {
    name: 'Channel 4',
    domain: 'channel4.com',
  },
  {
    name: 'SELF',
    domain: 'self.com',
  },
  {
    name: 'MedicineNet',
    domain: 'medicinenet.com',
  },
  {
    name: 'Thingiverse',
    domain: 'thingiverse.com',
  },
  {
    name: 'Investing',
    domain: 'investing.com',
  },
  {
    name: 'Mimecast',
    domain: 'mimecast.com',
  },
  {
    name: 'Travel + Leisure',
    domain: 'travelandleisure.com',
  },
  {
    name: 'Nintendo',
    domain: 'nintendo.com',
  },
  {
    name: 'Delicious',
    domain: 'delicious.com',
  },
  {
    name: 'Livechat',
    domain: 'livechat.com',
  },
  {
    name: 'TheStreet',
    domain: 'thestreet.com',
  },
  {
    name: 'Realtor',
    domain: 'realtor.com',
  },
  {
    name: 'Barrons',
    domain: 'barrons.com',
  },
  {
    name: 'Hexun',
    domain: 'hexun.com',
  },
  {
    name: "Men's Health",
    domain: 'menshealth.com',
  },
  {
    name: 'Psych Central',
    domain: 'psychcentral.com',
  },
  {
    name: 'Livestrong',
    domain: 'livestrong.com',
  },
  {
    name: 'Fujitsu',
    domain: 'fujitsu.com',
  },
  {
    name: 'HBO',
    domain: 'hbo.com',
  },
  {
    name: 'Ticketmaster',
    domain: 'ticketmaster.com',
  },
  {
    name: 'DHL',
    domain: 'dhl.com',
  },
  {
    name: 'Examiner',
    domain: 'examiner.com',
  },
  {
    name: 'Digital Journal',
    domain: 'digitaljournal.com',
  },
  {
    name: 'Mother Jones',
    domain: 'motherjones.com',
  },
  {
    name: 'Martha Stewart',
    domain: 'marthastewart.com',
  },
  {
    name: 'ArchDaily',
    domain: 'archdaily.com',
  },
  {
    name: 'The San Diego Union-Tribune',
    domain: 'sandiegouniontribune.com',
  },
  {
    name: 'The Intercept',
    domain: 'theintercept.com',
  },
  {
    name: 'GQ',
    domain: 'gq.com',
  },
  {
    name: 'The Atlanta Journal-Constitution',
    domain: 'ajc.com',
  },
  {
    name: 'Strava',
    domain: 'strava.com',
  },
  {
    name: 'Lulu',
    domain: 'lulu.com',
  },
  {
    name: 'DMCA.com',
    domain: 'dmca.com',
  },
  {
    name: 'Wattpad',
    domain: 'wattpad.com',
  },
  {
    name: 'Adage',
    domain: 'adage.com',
  },
  {
    name: 'Unity',
    domain: 'unity.com',
  },
  {
    name: 'Livemint',
    domain: 'livemint.com',
  },
  {
    name: 'Audible',
    domain: 'audible.com',
  },
  {
    name: 'Alipay',
    domain: 'alipay.com',
  },
  {
    name: 'Softonic',
    domain: 'softonic.com',
  },
  {
    name: 'Kotaku',
    domain: 'kotaku.com',
  },
  {
    name: 'Biography',
    domain: 'biography.com',
  },
  {
    name: 'Buffer',
    domain: 'buffer.com',
  },
  {
    name: 'UEFA',
    domain: 'uefa.com',
  },
  {
    name: 'Dreamstime',
    domain: 'dreamstime.com',
  },
  {
    name: 'Freewebs',
    domain: 'freewebs.com',
  },
  {
    name: 'XDA Developers',
    domain: 'xda-developers.com',
  },
  {
    name: 'NHL',
    domain: 'nhl.com',
  },
  {
    name: 'TuneIn',
    domain: 'tunein.com',
  },
  {
    name: 'Hotels',
    domain: 'hotels.com',
  },
  {
    name: 'Nifty',
    domain: 'nifty.com',
  },
  {
    name: 'Teachable',
    domain: 'teachable.com',
  },
  {
    name: "Tom's Hardware",
    domain: 'tomshardware.com',
  },
  {
    name: 'YourAdChoices.com',
    domain: 'youradchoices.com',
  },
  {
    name: 'Lycos',
    domain: 'lycos.com',
  },
  {
    name: 'Blogs',
    domain: 'blogs.com',
  },
  {
    name: "Harper's Bazaar",
    domain: 'harpersbazaar.com',
  },
  {
    name: 'Haaretz',
    domain: 'haaretz.com',
  },
  {
    name: 'Pittsburgh Post-Gazette',
    domain: 'post-gazette.com',
  },
  {
    name: 'Outlook',
    domain: 'outlookindia.com',
  },
  {
    name: 'The Epoch Times',
    domain: 'theepochtimes.com',
  },
  {
    name: 'Duolingo',
    domain: 'duolingo.com',
  },
  {
    name: 'Science Alert',
    domain: 'sciencealert.com',
  },
  {
    name: 'ArtStation',
    domain: 'artstation.com',
  },
  {
    name: 'Test',
    domain: 'test.com',
  },
  {
    name: "Women's Health",
    domain: 'womenshealthmag.com',
  },
  {
    name: 'Klarna',
    domain: 'klarna.com',
  },
  {
    name: 'Lastpass',
    domain: 'lastpass.com',
  },
  {
    name: 'Dreamhost',
    domain: 'dreamhost.com',
  },
  {
    name: 'Ubisoft',
    domain: 'ubisoft.com',
  },
  {
    name: 'Sputnik News',
    domain: 'sputniknews.com',
  },
  {
    name: 'CBS Sports',
    domain: 'cbssports.com',
  },
  {
    name: 'Blizzard',
    domain: 'blizzard.com',
  },
  {
    name: 'BCG',
    domain: 'bcg.com',
  },
  {
    name: 'Discover Magazine',
    domain: 'discovermagazine.com',
  },
  {
    name: 'Scotsman',
    domain: 'scotsman.com',
  },
  {
    name: 'Grammarly',
    domain: 'grammarly.com',
  },
  {
    name: 'Webnode',
    domain: 'webnode.com',
  },
  {
    name: 'Scholastic',
    domain: 'scholastic.com',
  },
  {
    name: 'Monster',
    domain: 'monster.com',
  },
  {
    name: 'Vulture',
    domain: 'vulture.com',
  },
  {
    name: 'Wistia',
    domain: 'wistia.com',
  },
  {
    name: 'Mary Ann Liebert',
    domain: 'liebertpub.com',
  },
  {
    name: 'Bleeping Computer',
    domain: 'bleepingcomputer.com',
  },
  {
    name: 'Breitbart',
    domain: 'breitbart.com',
  },
  {
    name: 'Technorati',
    domain: 'technorati.com',
  },
  {
    name: '9to5mac',
    domain: '9to5mac.com',
  },
  {
    name: 'Cleveland',
    domain: 'cleveland.com',
  },
  {
    name: 'SF Chronicle',
    domain: 'sfchronicle.com',
  },
  {
    name: 'Press Reader',
    domain: 'pressreader.com',
  },
  {
    name: 'The Nation',
    domain: 'thenation.com',
  },
  {
    name: 'Forrester',
    domain: 'forrester.com',
  },
  {
    name: 'Guinness World Records',
    domain: 'guinnessworldrecords.com',
  },
  {
    name: 'Codecademy',
    domain: 'codecademy.com',
  },
  {
    name: 'Waze',
    domain: 'waze.com',
  },
  {
    name: 'PC Gamer',
    domain: 'pcgamer.com',
  },
  {
    name: 'CIO',
    domain: 'cio.com',
  },
  {
    name: 'Bleacher Report',
    domain: 'bleacherreport.com',
  },
  {
    name: 'Zapier',
    domain: 'zapier.com',
  },
  {
    name: 'FiveThirtyEight',
    domain: 'fivethirtyeight.com',
  },
  {
    name: 'La Vanguardia',
    domain: 'lavanguardia.com',
  },
  {
    name: 'Dezeen',
    domain: 'dezeen.com',
  },
  {
    name: 'White Rabbit Press',
    domain: 'whiterabbitpress.com',
  },
  {
    name: 'SB Nation',
    domain: 'sbnation.com',
  },
  {
    name: 'ABC',
    domain: 'abc.com',
  },
  {
    name: 'The Knot',
    domain: 'theknot.com',
  },
  {
    name: 'EBSCO',
    domain: 'ebsco.com',
  },
  {
    name: 'Airtable',
    domain: 'airtable.com',
  },
  {
    name: 'Legacy',
    domain: 'legacy.com',
  },
  {
    name: 'CafePress',
    domain: 'cafepress.com',
  },
  {
    name: 'New Atlas',
    domain: 'newatlas.com',
  },
  {
    name: 'Washington Examiner',
    domain: 'washingtonexaminer.com',
  },
  {
    name: 'AVG',
    domain: 'avg.com',
  },
  {
    name: 'VRBO',
    domain: 'vrbo.com',
  },
  {
    name: 'National Review',
    domain: 'nationalreview.com',
  },
  {
    name: 'Informer',
    domain: 'informer.com',
  },
  {
    name: 'News24',
    domain: 'news24.com',
  },
  {
    name: 'Tampa Bay Times',
    domain: 'tampabay.com',
  },
  {
    name: 'Zazzle',
    domain: 'zazzle.com',
  },
  {
    name: 'Termsfeed',
    domain: 'termsfeed.com',
  },
  {
    name: 'NME',
    domain: 'nme.com',
  },
  {
    name: 'Expedia',
    domain: 'expedia.com',
  },
  {
    name: 'Wakelet',
    domain: 'wakelet.com',
  },
  {
    name: 'Glamour',
    domain: 'glamour.com',
  },
  {
    name: 'HGTV',
    domain: 'hgtv.com',
  },
  {
    name: 'Medical Xpress',
    domain: 'medicalxpress.com',
  },
  {
    name: 'UU Magazine',
    domain: 'usmagazine.com',
  },
  {
    name: 'IDC',
    domain: 'idc.com',
  },
  {
    name: 'Windows',
    domain: 'windows.com',
  },
  {
    name: 'Screenrant',
    domain: 'screenrant.com',
  },
  {
    name: 'Freshdesk',
    domain: 'freshdesk.com',
  },
  {
    name: 'The Sacramento Bee',
    domain: 'sacbee.com',
  },
  {
    name: 'Health',
    domain: 'health.com',
  },
  {
    name: 'Asana',
    domain: 'asana.com',
  },
  {
    name: 'AAA',
    domain: 'aaa.com',
  },
  {
    name: 'CBS',
    domain: 'cbs.com',
  },
  {
    name: 'Artnet',
    domain: 'artnet.com',
  },
  {
    name: 'Channel News Asia',
    domain: 'channelnewsasia.com',
  },
  {
    name: 'Real Simple',
    domain: 'realsimple.com',
  },
  {
    name: 'Macworld',
    domain: 'macworld.com',
  },
  {
    name: "Tom's Guide",
    domain: 'tomsguide.com',
  },
  {
    name: 'Military',
    domain: 'military.com',
  },
  {
    name: 'Web',
    domain: 'web.com',
  },
  {
    name: 'Windy',
    domain: 'windy.com',
  },
  {
    name: 'ABB',
    domain: 'abb.com',
  },
  {
    name: 'Wolfram',
    domain: 'wolfram.com',
  },
  {
    name: 'Messenger',
    domain: 'messenger.com',
  },
  {
    name: 'The National News',
    domain: 'thenationalnews.com',
  },
  {
    name: 'Brainy Quote',
    domain: 'brainyquote.com',
  },
  {
    name: 'Newegg',
    domain: 'newegg.com',
  },
  {
    name: 'Emerald',
    domain: 'emerald.com',
  },
  {
    name: 'Ask',
    domain: 'ask.com',
  },
  {
    name: 'asos',
    domain: 'asos.com',
  },
  {
    name: 'Newsday',
    domain: 'newsday.com',
  },
  {
    name: 'Apple Insider',
    domain: 'appleinsider.com',
  },
  {
    name: 'Wiki Spaces',
    domain: 'wikispaces.com',
  },
  {
    name: 'Infoworld',
    domain: 'infoworld.com',
  },
  {
    name: 'The New Republic',
    domain: 'newrepublic.com',
  },
  {
    name: 'Drugs',
    domain: 'drugs.com',
  },
  {
    name: 'Trading View',
    domain: 'tradingview.com',
  },
  {
    name: 'The Cut',
    domain: 'thecut.com',
  },
  {
    name: 'The Spruce Eats',
    domain: 'thespruceeats.com',
  },
  {
    name: 'Times Higher Education',
    domain: 'timeshighereducation.com',
  },
  {
    name: 'Bloglovin',
    domain: 'bloglovin.com',
  },
  {
    name: 'The Onion',
    domain: 'theonion.com',
  },
  {
    name: 'NBC Sports',
    domain: 'nbcsports.com',
  },
  {
    name: 'Degruyter',
    domain: 'degruyter.com',
  },
  {
    name: 'Product Hunt',
    domain: 'producthunt.com',
  },
  {
    name: 'Euractiv',
    domain: 'euractiv.com',
  },
  {
    name: 'Better Homes and Gardens',
    domain: 'bhg.com',
  },
  {
    name: 'BT Group',
    domain: 'bt.com',
  },
  {
    name: 'Marca',
    domain: 'marca.com',
  },
  {
    name: 'CookieYes',
    domain: 'cookieyes.com',
  },
  {
    name: 'Trading Economics',
    domain: 'tradingeconomics.com',
  },
  {
    name: 'Wordstream',
    domain: 'wordstream.com',
  },
  {
    name: 'Instapaper',
    domain: 'instapaper.com',
  },
  {
    name: 'Groupon',
    domain: 'groupon.com',
  },
  {
    name: 'Webflow',
    domain: 'webflow.com',
  },
  {
    name: 'Rakuten',
    domain: 'rakuten.com',
  },
  {
    name: 'Handelsblatt',
    domain: 'handelsblatt.com',
  },
  {
    name: 'Storify',
    domain: 'storify.com',
  },
  {
    name: 'T-Mobile',
    domain: 't-mobile.com',
  },
  {
    name: 'BigCommerce',
    domain: 'bigcommerce.com',
  },
  {
    name: 'AllTrails',
    domain: 'alltrails.com',
  },
  {
    name: 'Gulf News',
    domain: 'gulfnews.com',
  },
  {
    name: 'Study',
    domain: 'study.com',
  },
  {
    name: 'IndieWire',
    domain: 'indiewire.com',
  },
  {
    name: 'Bartleby',
    domain: 'bartleby.com',
  },
  {
    name: 'Complex',
    domain: 'complex.com',
  },
  {
    name: 'Bufferapp',
    domain: 'bufferapp.com',
  },
  {
    name: 'Thrillist',
    domain: 'thrillist.com',
  },
  {
    name: 'Blurb',
    domain: 'blurb.com',
  },
  {
    name: 'Games Radar',
    domain: 'gamesradar.com',
  },
  {
    name: 'Al',
    domain: 'al.com',
  },
  {
    name: 'Speakerdeck',
    domain: 'speakerdeck.com',
  },
  {
    name: 'Formstack',
    domain: 'formstack.com',
  },
  {
    name: 'Hostgator',
    domain: 'hostgator.com',
  },
  {
    name: 'Sky Sports',
    domain: 'skysports.com',
  },
  {
    name: 'Business News Daily',
    domain: 'businessnewsdaily.com',
  },
  {
    name: 'Ancestry',
    domain: 'ancestry.com',
  },
  {
    name: 'Chronicle',
    domain: 'chronicle.com',
  },
  {
    name: 'Curbed',
    domain: 'curbed.com',
  },
  {
    name: 'AllMusic',
    domain: 'allmusic.com',
  },
  {
    name: 'China',
    domain: 'china.com',
  },
  {
    name: 'Apartmenttherapy',
    domain: 'apartmenttherapy.com',
  },
  {
    name: 'Marvel',
    domain: 'marvel.com',
  },
  {
    name: 'Huanqiu',
    domain: 'huanqiu.com',
  },
  {
    name: 'Radisson',
    domain: 'radissonhotels.com',
  },
  {
    name: 'Orlando Sentinel',
    domain: 'orlandosentinel.com',
  },
  {
    name: 'Yoast',
    domain: 'yoast.com',
  },
  {
    name: 'Coub',
    domain: 'coub.com',
  },
  {
    name: 'REI',
    domain: 'rei.com',
  },
  {
    name: 'Citrix',
    domain: 'citrix.com',
  },
  {
    name: 'Strikingly',
    domain: 'strikingly.com',
  },
  {
    name: 'Malwarebytes',
    domain: 'malwarebytes.com',
  },
  {
    name: 'Gawker',
    domain: 'gawker.com',
  },
  {
    name: 'Adidas',
    domain: 'adidas.com',
  },
  {
    name: 'Wyndham Hotels',
    domain: 'wyndhamhotels.com',
  },
  {
    name: 'B&H Photo Video',
    domain: 'bhphotovideo.com',
  },
  {
    name: 'Visual Capitalist',
    domain: 'visualcapitalist.com',
  },
  {
    name: 'Financial Post',
    domain: 'financialpost.com',
  },
  {
    name: 'HackerNoon',
    domain: 'hackernoon.com',
  },
  {
    name: 'Xrea',
    domain: 'xrea.com',
  },
  {
    name: 'Experian',
    domain: 'experian.com',
  },
  {
    name: 'Doodle',
    domain: 'doodle.com',
  },
  {
    name: 'GameStop',
    domain: 'gamestop.com',
  },
  {
    name: 'Fitbit',
    domain: 'fitbit.com',
  },
  {
    name: 'Cntraveler',
    domain: 'cntraveler.com',
  },
  {
    name: 'Fox Sports',
    domain: 'foxsports.com',
  },
  {
    name: 'Cargo Collective',
    domain: 'cargocollective.com',
  },
  {
    name: 'BP',
    domain: 'bp.com',
  },
  {
    name: 'Cloudinary',
    domain: 'cloudinary.com',
  },
  {
    name: 'Architectural Digest',
    domain: 'architecturaldigest.com',
  },
  {
    name: 'Oprah',
    domain: 'oprah.com',
  },
  {
    name: 'Philly',
    domain: 'philly.com',
  },
  {
    name: 'Gale',
    domain: 'gale.com',
  },
  {
    name: 'Mindbodygreen',
    domain: 'mindbodygreen.com',
  },
  {
    name: 'Metacafe',
    domain: 'metacafe.com',
  },
  {
    name: 'Sproutsocial',
    domain: 'sproutsocial.com',
  },
  {
    name: 'InformationWeek',
    domain: 'informationweek.com',
  },
  {
    name: 'Brightcove',
    domain: 'brightcove.com',
  },
  {
    name: 'MathWorks',
    domain: 'mathworks.com',
  },
  {
    name: 'Real',
    domain: 'real.com',
  },
  {
    name: 'Zippyshare',
    domain: 'zippyshare.com',
  },
  {
    name: 'Autoblog',
    domain: 'autoblog.com',
  },
  {
    name: 'BlogTalkRadio',
    domain: 'blogtalkradio.com',
  },
  {
    name: 'Redfin',
    domain: 'redfin.com',
  },
  {
    name: 'Four Seasons Hotels and Resorts',
    domain: 'fourseasons.com',
  },
  {
    name: 'NOLA',
    domain: 'nola.com',
  },
  {
    name: 'Inverse',
    domain: 'inverse.com',
  },
  {
    name: 'Posterous',
    domain: 'posterous.com',
  },
  {
    name: 'Elite Daily',
    domain: 'elitedaily.com',
  },
  {
    name: 'Acer',
    domain: 'acer.com',
  },
  {
    name: 'The Wrap',
    domain: 'thewrap.com',
  },
  {
    name: 'Esri',
    domain: 'esri.com',
  },
  {
    name: 'SplashThat',
    domain: 'splashthat.com',
  },
  {
    name: 'Rumble',
    domain: 'rumble.com',
  },
  {
    name: 'Pingdom',
    domain: 'pingdom.com',
  },
  {
    name: 'Oculus',
    domain: 'oculus.com',
  },
  {
    name: 'Acast',
    domain: 'acast.com',
  },
  {
    name: 'Porsche',
    domain: 'porsche.com',
  },
  {
    name: 'GSM Arena',
    domain: 'gsmarena.com',
  },
  {
    name: 'Morningstar',
    domain: 'morningstar.com',
  },
  {
    name: 'Australian Financial Review',
    domain: 'afr.com',
  },
  {
    name: 'Network World',
    domain: 'networkworld.com',
  },
  {
    name: 'CD Baby',
    domain: 'cdbaby.com',
  },
  {
    name: 'Car and Driver',
    domain: 'caranddriver.com',
  },
  {
    name: 'Uber Eats',
    domain: 'ubereats.com',
  },
  {
    name: 'LA Weekly',
    domain: 'laweekly.com',
  },
  {
    name: 'Food and Wine',
    domain: 'foodandwine.com',
  },
  {
    name: 'Digital Photography Review',
    domain: 'dpreview.com',
  },
  {
    name: 'Toptal',
    domain: 'toptal.com',
  },
  {
    name: 'The Kitchn',
    domain: 'thekitchn.com',
  },
  {
    name: 'Ingenta Connect',
    domain: 'ingentaconnect.com',
  },
  {
    name: 'Pitchfork',
    domain: 'pitchfork.com',
  },
  {
    name: 'Big Think',
    domain: 'bigthink.com',
  },
  {
    name: 'Towards Data Science',
    domain: 'towardsdatascience.com',
  },
  {
    name: 'Parents',
    domain: 'parents.com',
  },
  {
    name: 'Dzone',
    domain: 'dzone.com',
  },
  {
    name: 'Metacritic',
    domain: 'metacritic.com',
  },
  {
    name: 'Ggpht',
    domain: 'ggpht.com',
  },
  {
    name: 'Kansas City',
    domain: 'kansascity.com',
  },
  {
    name: 'ESET',
    domain: 'eset.com',
  },
  {
    name: 'News Max',
    domain: 'newsmax.com',
  },
  {
    name: 'Reason',
    domain: 'reason.com',
  },
  {
    name: 'Country Living',
    domain: 'countryliving.com',
  },
  {
    name: 'Ultimate Guitar',
    domain: 'ultimate-guitar.com',
  },
  {
    name: 'Dun & Bradstreet',
    domain: 'dnb.com',
  },
  {
    name: 'Goal',
    domain: 'goal.com',
  },
  {
    name: 'Thinkific',
    domain: 'thinkific.com',
  },
  {
    name: 'Small Business Trends',
    domain: 'smallbiztrends.com',
  },
  {
    name: 'Rapidshare',
    domain: 'rapidshare.com',
  },
  {
    name: 'Walgreens',
    domain: 'walgreens.com',
  },
  {
    name: 'Tudou',
    domain: 'tudou.com',
  },
  {
    name: 'Financial Express',
    domain: 'financialexpress.com',
  },
  {
    name: 'Streamable',
    domain: 'streamable.com',
  },
  {
    name: 'Law',
    domain: 'law.com',
  },
  {
    name: 'Yellowpages',
    domain: 'yellowpages.com',
  },
  {
    name: 'Ryanair',
    domain: 'ryanair.com',
  },
  {
    name: 'Zara',
    domain: 'zara.com',
  },
  {
    name: 'Geekwire',
    domain: 'geekwire.com',
  },
  {
    name: 'Dailydot',
    domain: 'dailydot.com',
  },
  {
    name: 'Pearson',
    domain: 'pearson.com',
  },
  {
    name: 'Home Advisor',
    domain: 'homeadvisor.com',
  },
  {
    name: 'BFMTV',
    domain: 'bfmtv.com',
  },
  {
    name: 'Brides',
    domain: 'brides.com',
  },
  {
    name: 'Jdoqocy',
    domain: 'jdoqocy.com',
  },
  {
    name: 'One',
    domain: 'one.com',
  },
  {
    name: 'The Diplomat',
    domain: 'thediplomat.com',
  },
  {
    name: 'Contently',
    domain: 'contently.com',
  },
  {
    name: 'Parade',
    domain: 'parade.com',
  },
  {
    name: 'Theweek',
    domain: 'theweek.com',
  },
  {
    name: 'Tkqlhce',
    domain: 'tkqlhce.com',
  },
  {
    name: 'Intensedebate',
    domain: 'intensedebate.com',
  },
  {
    name: 'Foreignaffairs',
    domain: 'foreignaffairs.com',
  },
  {
    name: 'Android Authority',
    domain: 'androidauthority.com',
  },
  {
    name: 'OpenTable',
    domain: 'opentable.com',
  },
  {
    name: 'Thesaurus',
    domain: 'thesaurus.com',
  },
  {
    name: 'Yamaha',
    domain: 'yamaha.com',
  },
  {
    name: 'Politifact',
    domain: 'politifact.com',
  },
  {
    name: 'Boston Herald',
    domain: 'bostonherald.com',
  },
  {
    name: 'Zero Hedge',
    domain: 'zerohedge.com',
  },
  {
    name: 'iFixit',
    domain: 'ifixit.com',
  },
  {
    name: 'Outside',
    domain: 'outsideonline.com',
  },
  {
    name: 'Sitepoint',
    domain: 'sitepoint.com',
  },
  {
    name: 'Symfony',
    domain: 'symfony.com',
  },
  {
    name: 'Bravesites',
    domain: 'bravesites.com',
  },
  {
    name: 'Syfy',
    domain: 'syfy.com',
  },
  {
    name: 'Bitcoin',
    domain: 'bitcoin.com',
  },
  {
    name: 'Elementor',
    domain: 'elementor.com',
  },
  {
    name: 'Career Builder',
    domain: 'careerbuilder.com',
  },
  {
    name: 'Canon',
    domain: 'canon.com',
  },
  {
    name: 'Headspace',
    domain: 'headspace.com',
  },
  {
    name: 'Gitee',
    domain: 'gitee.com',
  },
  {
    name: 'G2',
    domain: 'g2.com',
  },
  {
    name: 'AFP',
    domain: 'afp.com',
  },
  {
    name: 'Bon Appetit',
    domain: 'bonappetit.com',
  },
  {
    name: 'Infobae',
    domain: 'infobae.com',
  },
  {
    name: 'British Airways',
    domain: 'britishairways.com',
  },
  {
    name: 'Skillshare',
    domain: 'skillshare.com',
  },
  {
    name: 'Jianshu',
    domain: 'jianshu.com',
  },
  {
    name: 'Bangkok Post',
    domain: 'bangkokpost.com',
  },
  {
    name: 'Jalopnik',
    domain: 'jalopnik.com',
  },
  {
    name: 'Note',
    domain: 'note.com',
  },
  {
    name: 'Epicurious',
    domain: 'epicurious.com',
  },
  {
    name: 'The Salt Lake Tribune',
    domain: 'sltrib.com',
  },
  {
    name: 'Buy Me a Coffee',
    domain: 'buymeacoffee.com',
  },
  {
    name: 'Akamai',
    domain: 'akamai.com',
  },
  {
    name: 'Scopus',
    domain: 'scopus.com',
  },
  {
    name: 'Flipping Book',
    domain: 'flippingbook.com',
  },
  {
    name: 'Me',
    domain: 'me.com',
  },
  {
    name: 'Amap',
    domain: 'amap.com',
  },
  {
    name: 'Dummies',
    domain: 'dummies.com',
  },
  {
    name: 'Simon & Schuster',
    domain: 'simonandschuster.com',
  },
  {
    name: 'Computer',
    domain: 'computer.com',
  },
  {
    name: 'Futurism',
    domain: 'futurism.com',
  },
  {
    name: 'India',
    domain: 'india.com',
  },
  {
    name: 'Giant Bomb',
    domain: 'giantbomb.com',
  },
  {
    name: 'ICQ',
    domain: 'icq.com',
  },
  {
    name: 'Haproxy',
    domain: 'haproxy.com',
  },
  {
    name: 'Christies',
    domain: 'christies.com',
  },
  {
    name: 'Azure',
    domain: 'azure.com',
  },
  {
    name: 'Houston Chronicle',
    domain: 'houstonchronicle.com',
  },
  {
    name: 'Collins Dictionary',
    domain: 'collinsdictionary.com',
  },
  {
    name: 'WNBC',
    domain: 'nbcnewyork.com',
  },
  {
    name: 'Abebooks',
    domain: 'abebooks.com',
  },
  {
    name: 'Slides',
    domain: 'slides.com',
  },
  {
    name: 'World Atlas',
    domain: 'worldatlas.com',
  },
  {
    name: 'Nolo',
    domain: 'nolo.com',
  },
  {
    name: 'World Population Review',
    domain: 'worldpopulationreview.com',
  },
  {
    name: 'Sephora',
    domain: 'sephora.com',
  },
  {
    name: 'Deseret',
    domain: 'deseret.com',
  },
  {
    name: 'Jigsy',
    domain: 'jigsy.com',
  },
  {
    name: 'Teen Vogue',
    domain: 'teenvogue.com',
  },
  {
    name: 'Mattel',
    domain: 'mattel.com',
  },
  {
    name: 'Skyrock',
    domain: 'skyrock.com',
  },
  {
    name: 'Siteground',
    domain: 'siteground.com',
  },
  {
    name: 'Mercola',
    domain: 'mercola.com',
  },
  {
    name: 'SAS',
    domain: 'sas.com',
  },
  {
    name: 'WWD',
    domain: 'wwd.com',
  },
  {
    name: 'Mens Journal',
    domain: 'mensjournal.com',
  },
  {
    name: 'ExtremeTech',
    domain: 'extremetech.com',
  },
  {
    name: 'The Daily Caller',
    domain: 'dailycaller.com',
  },
  {
    name: 'Namecheap',
    domain: 'namecheap.com',
  },
  {
    name: 'BGR',
    domain: 'bgr.com',
  },
  {
    name: 'Serious Eats',
    domain: 'seriouseats.com',
  },
  {
    name: 'Figma',
    domain: 'figma.com',
  },
  {
    name: 'Collider',
    domain: 'collider.com',
  },
  {
    name: 'Disney Plus',
    domain: 'disneyplus.com',
  },
  {
    name: 'Ericsson',
    domain: 'ericsson.com',
  },
  {
    name: 'CSS Tricks',
    domain: 'css-tricks.com',
  },
  {
    name: 'Creative Bloq',
    domain: 'creativebloq.com',
  },
  {
    name: 'Clarin',
    domain: 'clarin.com',
  },
  {
    name: 'Edmunds',
    domain: 'edmunds.com',
  },
  {
    name: 'Freelancer',
    domain: 'freelancer.com',
  },
  {
    name: 'Bloomberg Law',
    domain: 'bloomberglaw.com',
  },
  {
    name: 'Capterra',
    domain: 'capterra.com',
  },
  {
    name: 'Windows Central',
    domain: 'windowscentral.com',
  },
  {
    name: 'Shell',
    domain: 'shell.com',
  },
  {
    name: 'Yimg',
    domain: 'yimg.com',
  },
  {
    name: 'Active',
    domain: 'active.com',
  },
  {
    name: 'Smartsheet',
    domain: 'smartsheet.com',
  },
  {
    name: 'Harper Collins',
    domain: 'harpercollins.com',
  },
  {
    name: 'Nielsen Norman Group',
    domain: 'nngroup.com',
  },
  {
    name: 'Daily Kos',
    domain: 'dailykos.com',
  },
  {
    name: 'Mercedes-Benz',
    domain: 'mercedes-benz.com',
  },
  {
    name: 'South by Southwest',
    domain: 'sxsw.com',
  },
  {
    name: 'Mind Tools',
    domain: 'mindtools.com',
  },
  {
    name: 'Tennessean',
    domain: 'tennessean.com',
  },
  {
    name: 'Beaxy',
    domain: 'beaxy.com',
  },
  {
    name: 'Whole Foods Market',
    domain: 'wholefoodsmarket.com',
  },
  {
    name: 'Blog',
    domain: 'blog.com',
  },
  {
    name: 'Marie Claire',
    domain: 'marieclaire.com',
  },
  {
    name: 'Money Control',
    domain: 'moneycontrol.com',
  },
  {
    name: 'Mic',
    domain: 'mic.com',
  },
  {
    name: 'Capgemini',
    domain: 'capgemini.com',
  },
  {
    name: 'Canada',
    domain: 'canada.com',
  },
  {
    name: 'GigaOM',
    domain: 'gigaom.com',
  },
  {
    name: 'BabyCenter',
    domain: 'babycenter.com',
  },
  {
    name: 'Cafe24',
    domain: 'cafe24.com',
  },
  {
    name: 'The Drum',
    domain: 'thedrum.com',
  },
  {
    name: 'Sporting News',
    domain: 'sportingnews.com',
  },
  {
    name: 'Indy Star',
    domain: 'indystar.com',
  },
  {
    name: 'Oberlo',
    domain: 'oberlo.com',
  },
  {
    name: 'Hypebeast',
    domain: 'hypebeast.com',
  },
  {
    name: 'Lovetoknow',
    domain: 'lovetoknow.com',
  },
  {
    name: 'Vancouver Sun',
    domain: 'vancouversun.com',
  },
  {
    name: 'Pantone',
    domain: 'pantone.com',
  },
  {
    name: 'The Drive',
    domain: 'thedrive.com',
  },
  {
    name: 'Habr',
    domain: 'habr.com',
  },
  {
    name: 'Honda',
    domain: 'honda.com',
  },
  {
    name: 'Formula1',
    domain: 'formula1.com',
  },
  {
    name: 'Acuity Scheduling',
    domain: 'acuityscheduling.com',
  },
  {
    name: 'News Observer',
    domain: 'newsobserver.com',
  },
  {
    name: 'Brave',
    domain: 'brave.com',
  },
  {
    name: 'LMGTFY',
    domain: 'lmgtfy.com',
  },
  {
    name: 'Prevention',
    domain: 'prevention.com',
  },
  {
    name: 'Audacy',
    domain: 'audacy.com',
  },
  {
    name: 'Infoplease',
    domain: 'infoplease.com',
  },
  {
    name: 'Douyin',
    domain: 'douyin.com',
  },
  {
    name: 'Pandora',
    domain: 'pandora.com',
  },
  {
    name: 'CGTN',
    domain: 'cgtn.com',
  },
  {
    name: 'The Moscow Times',
    domain: 'themoscowtimes.com',
  },
  {
    name: 'GoPro',
    domain: 'gopro.com',
  },
  {
    name: 'Digital Spy',
    domain: 'digitalspy.com',
  },
  {
    name: 'easyJet',
    domain: 'easyjet.com',
  },
  {
    name: 'Similarweb',
    domain: 'similarweb.com',
  },
  {
    name: 'Lufthansa',
    domain: 'lufthansa.com',
  },
  {
    name: 'Penzu',
    domain: 'penzu.com',
  },
  {
    name: 'Spiceworks',
    domain: 'spiceworks.com',
  },
  {
    name: 'Tapatalk',
    domain: 'tapatalk.com',
  },
  {
    name: 'Runners World',
    domain: 'runnersworld.com',
  },
  {
    name: 'Dispatch',
    domain: 'dispatch.com',
  },
  {
    name: 'Oxford Dictionaries',
    domain: 'oxforddictionaries.com',
  },
  {
    name: 'Squidoo',
    domain: 'squidoo.com',
  },
  {
    name: 'Motorola',
    domain: 'motorola.com',
  },
  {
    name: 'Ranker',
    domain: 'ranker.com',
  },
  {
    name: 'Karger',
    domain: 'karger.com',
  },
  {
    name: 'Gab',
    domain: 'gab.com',
  },
  {
    name: 'Broadway World',
    domain: 'broadwayworld.com',
  },
  {
    name: 'Book Depository',
    domain: 'bookdepository.com',
  },
  {
    name: 'The A.V. Club',
    domain: 'avclub.com',
  },
  {
    name: 'Code Project',
    domain: 'codeproject.com',
  },
  {
    name: 'Toronto Sun',
    domain: 'torontosun.com',
  },
  {
    name: 'The New York Review of Books',
    domain: 'nybooks.com',
  },
  {
    name: 'Verywell Fit',
    domain: 'verywellfit.com',
  },
  {
    name: 'Delish',
    domain: 'delish.com',
  },
  {
    name: 'Letterboxd',
    domain: 'letterboxd.com',
  },
  {
    name: 'Taste of Home',
    domain: 'tasteofhome.com',
  },
  {
    name: 'Zomato',
    domain: 'zomato.com',
  },
  {
    name: 'Investors',
    domain: 'investors.com',
  },
  {
    name: 'Twilio',
    domain: 'twilio.com',
  },
  {
    name: 'AnandTech',
    domain: 'anandtech.com',
  },
  {
    name: 'Zimbra',
    domain: 'zimbra.com',
  },
  {
    name: 'Crunchy Roll',
    domain: 'crunchyroll.com',
  },
  {
    name: 'Alamy',
    domain: 'alamy.com',
  },
  {
    name: 'Arab News',
    domain: 'arabnews.com',
  },
  {
    name: 'Kaggle',
    domain: 'kaggle.com',
  },
  {
    name: 'Allure',
    domain: 'allure.com',
  },
  {
    name: 'Heavy',
    domain: 'heavy.com',
  },
  {
    name: 'Ritz Carlton',
    domain: 'ritzcarlton.com',
  },
  {
    name: 'Net Vibes',
    domain: 'netvibes.com',
  },
  {
    name: 'Rediff',
    domain: 'rediff.com',
  },
  {
    name: 'SiteOrigin',
    domain: 'siteorigin.com',
  },
  {
    name: 'Statesman',
    domain: 'statesman.com',
  },
  {
    name: 'Kakao',
    domain: 'kakao.com',
  },
  {
    name: 'DJI',
    domain: 'dji.com',
  },
  {
    name: 'Bain & Company',
    domain: 'bain.com',
  },
  {
    name: 'Patagonia',
    domain: 'patagonia.com',
  },
  {
    name: 'Volvo',
    domain: 'volvocars.com',
  },
  {
    name: 'UL',
    domain: 'ul.com',
  },
  {
    name: 'Checkpoint',
    domain: 'checkpoint.com',
  },
  {
    name: 'Masterclass',
    domain: 'masterclass.com',
  },
  {
    name: 'ZipRecruiter',
    domain: 'ziprecruiter.com',
  },
  {
    name: 'SketchUp',
    domain: 'sketchup.com',
  },
  {
    name: 'IFTTT',
    domain: 'ifttt.com',
  },
  {
    name: 'Jezebel',
    domain: 'jezebel.com',
  },
  {
    name: 'Zappos',
    domain: 'zappos.com',
  },
  {
    name: 'Adafruit',
    domain: 'adafruit.com',
  },
  {
    name: 'Entertainment Tonight',
    domain: 'etonline.com',
  },
  {
    name: 'Courant',
    domain: 'courant.com',
  },
  {
    name: 'JPMorgan Chase',
    domain: 'jpmorgan.com',
  },
  {
    name: 'Viki',
    domain: 'viki.com',
  },
  {
    name: 'Techopedia',
    domain: 'techopedia.com',
  },
  {
    name: 'Angi',
    domain: 'angi.com',
  },
  {
    name: 'Gucci',
    domain: 'gucci.com',
  },
  {
    name: 'Natural News',
    domain: 'naturalnews.com',
  },
  {
    name: 'Chase',
    domain: 'chase.com',
  },
  {
    name: 'Dan',
    domain: 'dan.com',
  },
  {
    name: 'Motor Trend',
    domain: 'motortrend.com',
  },
  {
    name: 'AWeber',
    domain: 'aweber.com',
  },
  {
    name: 'Folkd',
    domain: 'folkd.com',
  },
  {
    name: 'Informa',
    domain: 'informa.com',
  },
  {
    name: 'Open Culture',
    domain: 'openculture.com',
  },
  {
    name: 'Netcraft',
    domain: 'netcraft.com',
  },
  {
    name: 'The Sun',
    domain: 'the-sun.com',
  },
  {
    name: 'Seattle Pi',
    domain: 'seattlepi.com',
  },
  {
    name: 'Vecteezy',
    domain: 'vecteezy.com',
  },
  {
    name: 'Abc7',
    domain: 'abc7.com',
  },
  {
    name: 'OpenCart',
    domain: 'opencart.com',
  },
  {
    name: 'Sav',
    domain: 'sav.com',
  },
  {
    name: 'Techspot',
    domain: 'techspot.com',
  },
  {
    name: 'Mix',
    domain: 'mix.com',
  },
  {
    name: 'Toyota',
    domain: 'toyota.com',
  },
  {
    name: 'Kiplinger',
    domain: 'kiplinger.com',
  },
  {
    name: 'Agoda',
    domain: 'agoda.com',
  },
  {
    name: 'Cincinnati',
    domain: 'cincinnati.com',
  },
  {
    name: 'Fidelity',
    domain: 'fidelity.com',
  },
  {
    name: 'Get Response',
    domain: 'getresponse.com',
  },
  {
    name: 'Pastemagazine',
    domain: 'pastemagazine.com',
  },
  {
    name: 'BitChute',
    domain: 'bitchute.com',
  },
  {
    name: 'Blah',
    domain: 'roku.com',
  },
  {
    name: 'Bodybuilding',
    domain: 'bodybuilding.com',
  },
  {
    name: 'Wizards',
    domain: 'wizards.com',
  },
  {
    name: 'Airbus',
    domain: 'airbus.com',
  },
  {
    name: 'Overstock',
    domain: 'overstock.com',
  },
  {
    name: 'Here',
    domain: 'here.com',
  },
  {
    name: 'El Espanol',
    domain: 'elespanol.com',
  },
  {
    name: 'Bayer',
    domain: 'bayer.com',
  },
  {
    name: 'Superuser',
    domain: 'superuser.com',
  },
  {
    name: 'Udacity',
    domain: 'udacity.com',
  },
  {
    name: 'Hackaday',
    domain: 'hackaday.com',
  },
  {
    name: 'IFLScience',
    domain: 'iflscience.com',
  },
  {
    name: 'Bitdefender',
    domain: 'bitdefender.com',
  },
  {
    name: 'Tesco',
    domain: 'tesco.com',
  },
  {
    name: 'Panoramio',
    domain: 'panoramio.com',
  },
  {
    name: 'Zippia',
    domain: 'zippia.com',
  },
  {
    name: 'Findagrave',
    domain: 'findagrave.com',
  },
  {
    name: 'Fortinet',
    domain: 'fortinet.com',
  },
  {
    name: 'Kobo',
    domain: 'kobo.com',
  },
  {
    name: 'MarkMonitor',
    domain: 'markmonitor.com',
  },
  {
    name: 'Michelin',
    domain: 'michelin.com',
  },
  {
    name: 'Manta',
    domain: 'manta.com',
  },
  {
    name: 'Macmillan',
    domain: 'macmillan.com',
  },
  {
    name: 'Village Voice',
    domain: 'villagevoice.com',
  },
  {
    name: 'Simplecast',
    domain: 'simplecast.com',
  },
  {
    name: 'UpToDate',
    domain: 'uptodate.com',
  },
];

export default companies