const orgs = [
  {
    name: 'DigitalGenius',
    domain: 'digitalgenius.com',
  },
  {
    name: 'Workz',
    domain: 'workzchange.com',
  },
  {
    name: 'Anavate Partners',
    domain: 'anavatepartners.com',
  },
  {
    name: 'Birdeye',
    domain: 'birdeye.com',
  },
  {
    name: 'Bananatag',
    domain: 'bananatag.com',
  },
  {
    name: 'EOSE',
    domain: 'eosedata.com',
  },
  {
    name: 'Cymulate',
    domain: 'cymulate.com',
  },
  {
    name: 'Lionpoint Group',
    domain: 'lionpointgroup.com',
  },
  {
    name: 'ABBYY',
    domain: 'abbyy.com',
  },
  {
    name: 'Druva',
    domain: 'druva.com',
  },
  {
    name: 'SH1FT',
    domain: 'sh1ftdigital.com',
  },
  {
    name: 'Convert Digital',
    domain: 'convertdigital.com.au',
  },
  {
    name: 'Blended Edge',
    domain: 'blendededge.com',
  },
  {
    name: 'Social Snowball',
    domain: 'socialsnowball.io',
  },
  {
    name: 'SheerID',
    domain: 'sheerid.com',
  },
  {
    name: 'Above The Fray Design',
    domain: 'abovethefray.io',
  },
  {
    name: 'SMS Live',
    domain: 'sms.live',
  },
  {
    name: 'SleekFlow Technologies Inc',
    domain: 'sleekflow.io',
  },
  {
    name: 'project44',
    domain: 'project44.com',
  },
  {
    name: 'Inertia Systems',
    domain: 'inertiasystems.com',
  },
  {
    name: 'Lano',
    domain: 'lano.io',
  },
  {
    name: 'Cloud Peritus',
    domain: 'cloudperitus.com',
  },
  {
    name: 'Octily',
    domain: 'octily.com',
  },
  {
    name: 'Onepilot',
    domain: 'onepilot.co',
  },
  {
    name: 'Capabl',
    domain: 'capabl.co',
  },
  {
    name: '4NG',
    domain: '4ng.nl',
  },
  {
    name: 'Calendarific',
    domain: 'calendarific.com',
  },
  {
    name: 'CloudCheckr',
    domain: 'cloudcheckr.com',
  },
  {
    name: 'Harte Hanks',
    domain: 'hartehanks.com',
  },
  {
    name: 'Clarisights',
    domain: 'clarisights.com',
  },
  {
    name: 'DMI',
    domain: 'dminc.com',
  },
  {
    name: 'Revenue Analytics',
    domain: 'revenueanalytics.com',
  },
  {
    name: 'ChildCareCRM',
    domain: 'childcarecrm.com',
  },
  {
    name: 'DIA',
    domain: 'die-interaktiven.de',
  },
  {
    name: 'Etumos',
    domain: 'etumos.com',
  },
  {
    name: 'Elastic',
    domain: 'elastic.co',
  },
  {
    name: 'HireRight',
    domain: 'hireright.com',
  },
  {
    name: 'VSA Partners',
    domain: 'vsapartners.com',
  },
  {
    name: 'eMOD',
    domain: 'emodsafety.com',
  },
  {
    name: 'Uptima',
    domain: 'uptima.com',
  },
  {
    name: 'CarbonX',
    domain: 'carbonx.world',
  },
  {
    name: 'Trusted Family',
    domain: 'trustedfamily.com',
  },
  {
    name: 'Alpaca',
    domain: 'alpaca.markets',
  },
  {
    name: 'Bricsys - Hexagon',
    domain: 'bricsys.com',
  },
  {
    name: 'Melon',
    domain: 'melonusa.com',
  },
  {
    name: 'Sapper',
    domain: 'sapper.ai',
  },
  {
    name: 'Earnest Research',
    domain: 'earnestresearch.com',
  },
  {
    name: 'Accent Technologies',
    domain: 'accent-technologies.com',
  },
  {
    name: 'HomeTraq',
    domain: 'hometraq.com',
  },
  {
    name: 'UserZoom',
    domain: 'userzoom.com',
  },
  {
    name: 'North Star',
    domain: 'nthstar.co',
  },
  {
    name: 'Sullivan',
    domain: 'sullivannyc.com',
  },
  {
    name: 'Tsunami co.',
    domain: 'tsunamico.org',
  },
  {
    name: 'Pump',
    domain: 'pump.co',
  },
  {
    name: 'Ridge Innovative',
    domain: 'ridgeinnovative.com',
  },
  {
    name: 'Concierge',
    domain: 'conciergeteam.co',
  },
  {
    name: 'Content Engine',
    domain: 'contentenginellc.com',
  },
  {
    name: 'Marketing Guys',
    domain: 'marketingguys.com',
  },
  {
    name: 'HCL Software',
    domain: 'hcltechsw.com',
  },
  {
    name: 'Datagran',
    domain: 'datagran.io',
  },
  {
    name: 'IPwe',
    domain: 'ipwe.com',
  },
  {
    name: 'Text Request',
    domain: 'textrequest.com',
  },
  {
    name: 'Self Publishing School',
    domain: 'self-publishingschool.com',
  },
  {
    name: 'dormakaba',
    domain: 'dormakaba.com',
  },
  {
    name: 'Tonkean',
    domain: 'tonkean.com',
  },
  {
    name: 'PENCILZ',
    domain: 'pencilz.io',
  },
  {
    name: 'TRUX',
    domain: 'truxnow.com',
  },
  {
    name: 'mStoner',
    domain: 'mstoner.com',
  },
  {
    name: 'Descript',
    domain: 'descript.com',
  },
  {
    name: 'Bevy',
    domain: 'bevy.com',
  },
  {
    name: 'NA5',
    domain: 'na5.com.br',
  },
  {
    name: 'Buk - RRHH para Humanos',
    domain: 'buk.cl',
  },
  {
    name: 'GroovewCIO, LLC',
    domain: 'groovecio.com',
  },
  {
    name: 'Tata Consultancy Services',
    domain: 'tcs.com',
  },
  {
    name: 'Handbid',
    domain: 'handbid.com',
  },
  {
    name: 'Label Ventures',
    domain: 'label.ventures',
  },
  {
    name: 'Aprao',
    domain: 'aprao.com',
  },
  {
    name: 'Verified First',
    domain: 'verifiedfirst.com',
  },
  {
    name: 'pb+j',
    domain: 'addpbj.com',
  },
  {
    name: 'StepZen',
    domain: 'stepzen.com',
  },
  {
    name: 'Ample Cloud',
    domain: 'amplecloud.com',
  },
  {
    name: 'Amadeus',
    domain: 'amadeus.com',
  },
  {
    name: 'ThinkData Works',
    domain: 'thinkdataworks.com',
  },
  {
    name: 'Worth eCommerce',
    domain: 'worthecommerce.com',
  },
  {
    name: 'Wazo AI',
    domain: 'wazoai.com',
  },
  {
    name: 'Select Star',
    domain: 'selectstar.com',
  },
  {
    name: 'Fabric Inc',
    domain: 'fabric.inc',
  },
  {
    name: 'Voucherify',
    domain: 'voucherify.io',
  },
  {
    name: 'Sisu',
    domain: 'sisudata.com',
  },
  {
    name: 'Material Management Software',
    domain: 'matmgt.com',
  },
  {
    name: 'CaliberMind',
    domain: 'calibermind.com',
  },
  {
    name: 'Epsilon (France)',
    domain: 'epsilon-france.com',
  },
  {
    name: 'Firetoss',
    domain: 'firetoss.com',
  },
  {
    name: 'Wiraya',
    domain: 'wiraya.com',
  },
  {
    name: 'Glu Group Ltd',
    domain: 'glu-group.com',
  },
  {
    name: 'NuAge Experts',
    domain: 'nuageexperts.com',
  },
  {
    name: 'Courseplay',
    domain: 'courseplay.co',
  },
  {
    name: 'Vitally.io',
    domain: 'vitally.io',
  },
  {
    name: 'Chatlayer.ai',
    domain: 'chatlayer.ai',
  },
  {
    name: 'Veremark',
    domain: 'veremark.com',
  },
  {
    name: 'Marketcircle',
    domain: 'marketcircle.com',
  },
  {
    name: 'ARES PRISM',
    domain: 'aresprism.com',
  },
  {
    name: 'Vmsfuture',
    domain: 'vmsfuture.com',
  },
  {
    name: 'EX.CO',
    domain: 'ex.co',
  },
  {
    name: 'Abto Software',
    domain: 'abtosoftware.com',
  },
  {
    name: 'Replyco',
    domain: 'replyco.com',
  },
  {
    name: 'Syte',
    domain: 'syte.ai',
  },
  {
    name: 'Coresignal',
    domain: 'coresignal.com',
  },
  {
    name: 'CMiC Construction Software',
    domain: 'cmicglobal.com',
  },
  {
    name: 'Infillion',
    domain: 'infillion.com',
  },
  {
    name: 'Tradebyte Software',
    domain: 'tradebyte.com',
  },
  {
    name: 'Adcore',
    domain: 'adcore.com',
  },
  {
    name: 'Vestorly',
    domain: 'vestorly.com',
  },
  {
    name: 'GBE Technology, LLC',
    domain: 'gbetrust.com',
  },
  {
    name: 'Spryker',
    domain: 'spryker.com',
  },
  {
    name: 'Respira Internet',
    domain: 'respirainternet.com',
  },
  {
    name: 'Brij',
    domain: 'brij.it',
  },
  {
    name: 'Mediacurrent',
    domain: 'mediacurrent.com',
  },
  {
    name: 'Boolean Data Systems Inc',
    domain: 'booleandata.com',
  },
  {
    name: 'Amerisales.com',
    domain: 'amerisales.com',
  },
  {
    name: 'Shift CRM',
    domain: 'shiftcrm.com',
  },
  {
    name: 'Outmatch',
    domain: 'outmatch.com',
  },
  {
    name: 'Disrupt The Chain',
    domain: 'disruptthechain.com',
  },
  {
    name: 'Airmee',
    domain: 'airmee.com',
  },
  {
    name: 'FFW',
    domain: 'ffwagency.com',
  },
  {
    name: 'ppi Media',
    domain: 'ppimedia.de',
  },
  {
    name: 'Atheon Analytics Ltd',
    domain: 'atheonanalytics.com',
  },
  {
    name: 'Scalestack Group',
    domain: 'scalestack.io',
  },
  {
    name: 'Alinga',
    domain: 'alinga.com.au',
  },
  {
    name: 'Liquibase',
    domain: 'liquibase.com',
  },
  {
    name: 'Beining & Bogen',
    domain: 'beiningbogen.no',
  },
  {
    name: 'Seed Embassy',
    domain: 'seedembassy.com',
  },
  {
    name: 'Onramp Funds',
    domain: 'onrampfunds.com',
  },
  {
    name: 'TOWA GmbH',
    domain: 'towa.at',
  },
  {
    name: 'Daitum',
    domain: 'daitum.com',
  },
  {
    name: 'Fly Elephant',
    domain: 'flyelephant.com.tw',
  },
  {
    name: 'Barona Sweden',
    domain: 'barona.se',
  },
  {
    name: 'Multidots',
    domain: 'multidots.com',
  },
  {
    name: 'TalkitAI',
    domain: 'talkit.ai',
  },
  {
    name: 'Televergence Solutions Inc.',
    domain: 'televergence.com',
  },
  {
    name: 'Visier',
    domain: 'visier.com',
  },
  {
    name: 'Coupa Software',
    domain: 'coupa.com',
  },
  {
    name: 'Omniconvert',
    domain: 'omniconvert.com',
  },
  {
    name: 'Easyship',
    domain: 'easyship.com',
  },
  {
    name: 'Wistia',
    domain: 'wistia.com',
  },
  {
    name: 'Poeta Digital',
    domain: 'poetadigital.com',
  },
  {
    name: 'Global-e',
    domain: 'global-e.com',
  },
  {
    name: 'Segmentify',
    domain: 'segmentify.com',
  },
  {
    name: 'Clouds Dubai',
    domain: 'cloudsdubai.ae',
  },
  {
    name: 'Weirdly Ltd',
    domain: 'getweirdly.com',
  },
  {
    name: 'CareAcademy',
    domain: 'careacademy.com',
  },
  {
    name: 'DYODE',
    domain: 'dyode.com',
  },
  {
    name: 'Kognitiv',
    domain: 'kognitivinc.com',
  },
  {
    name: 'Inveon',
    domain: 'inveon.com',
  },
  {
    name: 'Stream Creative',
    domain: 'streamcreative.com',
  },
  {
    name: 'Kia Ora Digital',
    domain: 'kiaoradigital.co.nz',
  },
  {
    name: 'Turbonomic',
    domain: 'turbonomic.com',
  },
  {
    name: 'Starcount',
    domain: 'starcount.com',
  },
  {
    name: 'Everbridge',
    domain: 'everbridge.com',
  },
  {
    name: 'GuruScan',
    domain: 'guruscan.nl',
  },
  {
    name: 'Forge.AI',
    domain: 'forge.ai',
  },
  {
    name: 'Fusebill',
    domain: 'fusebill.com',
  },
  {
    name: 'Hexa3D',
    domain: 'hexa3d.io',
  },
  {
    name: 'OneScreen.AI',
    domain: 'onescreen.ai',
  },
  {
    name: '64labs',
    domain: '64labs.com',
  },
  {
    name: 'Versium',
    domain: 'versium.com',
  },
  {
    name: 'Silverline',
    domain: 'silverlinecrm.com',
  },
  {
    name: 'MK Partners',
    domain: 'mkpartners.com',
  },
  {
    name: 'TaxJar',
    domain: 'taxjar.com',
  },
  {
    name: 'Micro Works Technology Solutions',
    domain: 'itlmicroworks.com',
  },
  {
    name: 'Agency of International Cooperation for Development',
    domain: 'acidaid.org',
  },
  {
    name: 'Nile',
    domain: 'agencenile.com',
  },
  {
    name: 'Push Analytics',
    domain: 'pushanalytics.com',
  },
  {
    name: 'CoreNet Global',
    domain: 'corenetglobal.org',
  },
  {
    name: 'Fathom Applications',
    domain: 'fathomhq.com',
  },
  {
    name: 'TVP NYC',
    domain: 'tvp.nyc',
  },
  {
    name: 'flexEngage',
    domain: 'flexengage.com',
  },
  {
    name: 'AssessFirst',
    domain: 'assessfirst.com',
  },
  {
    name: 'PartnerPortal.io Inc. - Development',
    domain: 'partnerportal.dev',
  },
  {
    name: 'Avex',
    domain: 'avexdesigns.com',
  },
  {
    name: 'Bucketlist',
    domain: 'bucketlistrewards.com',
  },
  {
    name: 'PageFly',
    domain: 'pagefly.io',
  },
  {
    name: 'Planet',
    domain: 'planetpayment.com',
  },
  {
    name: 'Fobi',
    domain: 'fobi.ai',
  },
  {
    name: 'Chatmeter',
    domain: 'chatmeter.com',
  },
  {
    name: 'Grafana Labs',
    domain: 'grafana.com',
  },
  {
    name: 'Lab701 Online Marketing',
    domain: 'lab701.nl',
  },
  {
    name: 'Khaos Control',
    domain: 'khaoscontrol.com',
  },
  {
    name: 'Ryzeo',
    domain: 'ryzeo.com',
  },
  {
    name: 'Channel Force',
    domain: 'channel-force.com',
  },
  {
    name: 'Richpanel',
    domain: 'richpanel.com',
  },
  {
    name: 'Parrot Software',
    domain: 'parrotsoftware.io',
  },
  {
    name: 'Outfit',
    domain: 'outfit.io',
  },
  {
    name: 'Tamoco',
    domain: 'tamoco.com',
  },
  {
    name: 'Motiv Solutions',
    domain: 'motivsolutions.com',
  },
  {
    name: 'Now Book It',
    domain: 'nowbookit.com',
  },
  {
    name: 'StructShare',
    domain: 'structshare.com',
  },
  {
    name: 'Konai Partners',
    domain: 'konaipartners.co.kr',
  },
  {
    name: 'Octopia',
    domain: 'octopia.com',
  },
  {
    name: 'Qwinix',
    domain: 'qwinix.io',
  },
  {
    name: 'Loris',
    domain: 'loris.ai',
  },
  {
    name: 'Crowdvocate',
    domain: 'crowdvocate.com',
  },
  {
    name: 'Brooklyn Data Co.',
    domain: 'brooklyndata.co',
  },
  {
    name: 'Qontigo',
    domain: 'qontigo.com',
  },
  {
    name: 'Revenova',
    domain: 'revenova.com',
  },
  {
    name: 'EVERYWHERE Communications',
    domain: 'everywherecomms.com',
  },
  {
    name: 'Virtly',
    domain: 'virtly.com',
  },
  {
    name: 'Punchh',
    domain: 'punchh.com',
  },
  {
    name: 'Allego',
    domain: 'allego.com',
  },
  {
    name: 'AKQA',
    domain: 'akqa.com',
  },
  {
    name: 'Computer Products',
    domain: 'cpc-i.com',
  },
  {
    name: 'ATLAS Technology Group',
    domain: 'atlasdsr.com',
  },
  {
    name: 'Luxuria Logistics',
    domain: 'luxurialogistics.com',
  },
  {
    name: 'Digital Fans',
    domain: 'digitalfans.se',
  },
  {
    name: 'T4S Partners',
    domain: 't4spartners.com',
  },
  {
    name: 'UCAD Bangladesh',
    domain: 'ucad.ac',
  },
  {
    name: 'Samurai Data Analytics',
    domain: 'samuraidata.com',
  },
  {
    name: 'Quogent',
    domain: 'quogent.com',
  },
  {
    name: 'The Oakland Group',
    domain: 'theoaklandgroup.co.uk',
  },
  {
    name: 'Miuros',
    domain: 'miuros.com',
  },
  {
    name: 'Wiser',
    domain: 'wearewiser.com',
  },
  {
    name: 'Peakon',
    domain: 'peakon.com',
  },
  {
    name: 'DemandMatrix',
    domain: 'demandmatrix.com',
  },
  {
    name: 'Compliance Systems',
    domain: 'compliancesystems.com',
  },
  {
    name: 'Acenda',
    domain: 'acenda.com',
  },
  {
    name: 'Shipedge',
    domain: 'shipedge.com',
  },
  {
    name: 'ContraForce',
    domain: 'contraforce.com',
  },
  {
    name: 'Rev1 Energy',
    domain: 'rev1energy.co',
  },
  {
    name: 'Fyzz',
    domain: 'fyzz.io',
  },
  {
    name: 'Securonix',
    domain: 'securonix.com',
  },
  {
    name: 'Field Control Analytics',
    domain: 'fieldcontrolanalytics.com',
  },
  {
    name: 'Flo10',
    domain: 'flo10.com',
  },
  {
    name: 'Orderful',
    domain: 'orderful.com',
  },
  {
    name: 'S-Docs',
    domain: 'sdocs.com',
  },
  {
    name: 'Tectonic',
    domain: 'gettectonic.com',
  },
  {
    name: 'Usage AI',
    domain: 'usage.ai',
  },
  {
    name: 'Toolio',
    domain: 'toolio.com',
  },
  {
    name: 'matterlab',
    domain: 'matterlab.co',
  },
  {
    name: 'QT-DATA VN COMPANY LIMITED',
    domain: 'qntdata.com',
  },
  {
    name: 'Feefo',
    domain: 'feefo.com',
  },
  {
    name: 'ExecVision',
    domain: 'execvision.io',
  },
  {
    name: 'Vervaunt',
    domain: 'vervaunt.com',
  },
  {
    name: 'OutPlay',
    domain: 'outplayhq.com',
  },
  {
    name: 'Tech4People',
    domain: 'tech4people.es',
  },
  {
    name: '3PL Systems, Inc.',
    domain: '3plsystems.com',
  },
  {
    name: 'Plobal Apps',
    domain: 'plobalapps.com',
  },
  {
    name: 'MageAnts',
    domain: 'mageants.com',
  },
  {
    name: 'Tryzens',
    domain: 'tryzens.com',
  },
  {
    name: 'Unbound B2B',
    domain: 'unboundb2b.com',
  },
  {
    name: 'Baker Richards',
    domain: 'baker-richards.com',
  },
  {
    name: 'noissue.',
    domain: 'noissue.co',
  },
  {
    name: 'Cysiv',
    domain: 'cysiv.com',
  },
  {
    name: 'PixelMEDIA',
    domain: 'pixelmedia.com',
  },
  {
    name: 'Lagon Business Development Agency',
    domain: 'bizdevagency.com',
  },
  {
    name: 'Conductiv',
    domain: 'conductiv.co',
  },
  {
    name: 'Contrast Security',
    domain: 'contrastsecurity.com',
  },
  {
    name: 'Vatglobal',
    domain: 'vatglobal.com',
  },
  {
    name: 'Cohley',
    domain: 'cohley.com',
  },
  {
    name: 'Bolt Data',
    domain: 'bolt-data.com',
  },
  {
    name: 'Position²',
    domain: 'position2.com',
  },
  {
    name: 'Avvinue',
    domain: 'avvinue.com',
  },
  {
    name: 'WVB',
    domain: 'wvb.com',
  },
  {
    name: 'Apptopia',
    domain: 'apptopia.com',
  },
  {
    name: 'Kubit',
    domain: 'kubit.ai',
  },
  {
    name: 'IntraSystems, Inc.',
    domain: 'intrasystems.com',
  },
  {
    name: 'C-Learning',
    domain: 'c-learning.net',
  },
  {
    name: 'Plasmic',
    domain: 'plasmic.app',
  },
  {
    name: 'Digital Wave Technology',
    domain: 'digitalwavetechnology.com',
  },
  {
    name: 'aisle',
    domain: 'gotoaisle.com',
  },
  {
    name: 'Chorus.ai',
    domain: 'chorus.ai',
  },
  {
    name: 'Delivery Solutions',
    domain: 'deliverysolutions.co',
  },
  {
    name: 'Mavenoid',
    domain: 'mavenoid.com',
  },
  {
    name: 'Sprinklr',
    domain: 'sprinklr.com',
  },
  {
    name: 'kea',
    domain: 'kea.ai',
  },
  {
    name: 'Xactly',
    domain: 'xactlycorp.com',
  },
  {
    name: 'MakeItsimple',
    domain: 'makeitsimple.com.br',
  },
  {
    name: 'OpenAsset',
    domain: 'openasset.com',
  },
  {
    name: 'ChoiceWORX',
    domain: 'choiceworx.com',
  },
  {
    name: 'Omnisend',
    domain: 'omnisend.com',
  },
  {
    name: 'Managecore',
    domain: 'managecore.com',
  },
  {
    name: "Hudson's Bay",
    domain: 'hbc.com',
  },
  {
    name: 'Essence of Email',
    domain: 'essenceofemail.com',
  },
  {
    name: 'Mutiny',
    domain: 'mutinyhq.com',
  },
  {
    name: 'Refinitiv',
    domain: 'refinitiv.com',
  },
  {
    name: 'Ezepo',
    domain: 'ezepo.com',
  },
  {
    name: 'Conekta',
    domain: 'conekta.com',
  },
  {
    name: 'BlueSnap',
    domain: 'bluesnap.com',
  },
  {
    name: 'Start.io',
    domain: 'start.io',
  },
  {
    name: 'KMS Lighthouse',
    domain: 'kmslh.com',
  },
  {
    name: 'Lemonlight',
    domain: 'lemonlight.com',
  },
  {
    name: 'SaaSquatch',
    domain: 'saasquatch.com',
  },
  {
    name: 'Unearth',
    domain: 'unearthlabs.com',
  },
  {
    name: 'Standav',
    domain: 'standav.com',
  },
  {
    name: 'Tars',
    domain: 'hellotars.com',
  },
  {
    name: 'Full Potential Solutions',
    domain: 'fpsinc.com',
  },
  {
    name: 'forProject Technology',
    domain: 'forproject.com',
  },
  {
    name: 'ShipStation Ltd',
    domain: 'shipstation.co.uk',
  },
  {
    name: 'Bakerfield Solutions',
    domain: 'bakerfieldsolutions.com',
  },
  {
    name: 'TealBook',
    domain: 'tealbook.com',
  },
  {
    name: 'True Fit',
    domain: 'truefit.com',
  },
  {
    name: 'NetApp',
    domain: 'netapp.com',
  },
  {
    name: 'RoZetta Technology',
    domain: 'rozettatechnology.com',
  },
  {
    name: 'StaffCircle',
    domain: 'staffcircle.com',
  },
  {
    name: 'Goodway Group',
    domain: 'goodwaygroup.com',
  },
  {
    name: '3Pillar Global',
    domain: '3pillarglobal.com',
  },
  {
    name: 'keylight',
    domain: 'keylight.com',
  },
  {
    name: 'Kaleris',
    domain: 'kaleris.com',
  },
  {
    name: 'Kira Systems',
    domain: 'kirasystems.com',
  },
  {
    name: 'Max Technologies',
    domain: 'maxtechnologies.ca',
  },
  {
    name: 'Silicon Valley Bank',
    domain: 'svb.com',
  },
  {
    name: 'awanoo',
    domain: 'awanoo.com',
  },
  {
    name: 'Label Insight',
    domain: 'labelinsight.com',
  },
  {
    name: 'performance.io®',
    domain: 'performance-io.com',
  },
  {
    name: 'Enquero',
    domain: 'enquero.com',
  },
  {
    name: 'Struto',
    domain: 'struto.co.uk',
  },
  {
    name: 'Salted Stone',
    domain: 'saltedstone.com',
  },
  {
    name: 'KAPED, Inc.',
    domain: 'kaped.com',
  },
  {
    name: 'DigitlHaus',
    domain: 'digitlhaus.com',
  },
  {
    name: 'NVIDIA',
    domain: 'nvidia.com',
  },
  {
    name: 'MediaValet',
    domain: 'mediavalet.com',
  },
  {
    name: 'Alloy',
    domain: 'alloy.ai',
  },
  {
    name: 'Nintex',
    domain: 'nintex.com',
  },
  {
    name: 'Connor Group',
    domain: 'connorgp.com',
  },
  {
    name: 'Recruitee',
    domain: 'recruitee.com',
  },
  {
    name: 'Planhat',
    domain: 'planhat.com',
  },
  {
    name: 'Smartling',
    domain: 'smartling.com',
  },
  {
    name: 'Mojo Media Labs',
    domain: 'mojomedialabs.com',
  },
  {
    name: 'People Club',
    domain: 'peopleclub.co.uk',
  },
  {
    name: 'Authority Software',
    domain: 'authoritysoftware.com',
  },
  {
    name: 'ExtractAlpha',
    domain: 'extractalpha.com',
  },
  {
    name: 'Alexandria Technology',
    domain: 'alexability.com',
  },
  {
    name: 'Stackbeam',
    domain: 'stackbeam.com',
  },
  {
    name: 'Rotate°',
    domain: 'studiorotate.com',
  },
  {
    name: 'Antavo',
    domain: 'antavo.com',
  },
  {
    name: 'Influ2',
    domain: 'influ2.com',
  },
  {
    name: '715 Edge',
    domain: '715edge.com',
  },
  {
    name: 'LeadMD',
    domain: 'leadmd.com',
  },
  {
    name: 'Shipwire',
    domain: 'shipwire.com',
  },
  {
    name: 'Barbarian',
    domain: 'wearebarbarian.com',
  },
  {
    name: 'Cogito Corporation',
    domain: 'cogitocorp.com',
  },
  {
    name: 'Transflo',
    domain: 'transflo.com',
  },
  {
    name: 'Speakap',
    domain: 'speakap.com',
  },
  {
    name: 'co-op',
    domain: 'coopcommerce.com',
  },
  {
    name: 'IFS',
    domain: 'ifs.com',
  },
  {
    name: 'Automaton',
    domain: 'automatoninc.com',
  },
  {
    name: 'Littledata',
    domain: 'littledata.io',
  },
  {
    name: 'Packhelp',
    domain: 'packhelp.com',
  },
  {
    name: 'Atomix',
    domain: 'atomixlogistics.com',
  },
  {
    name: 'Appian',
    domain: 'appian.com',
  },
  {
    name: 'Rodeo CPG',
    domain: 'rodeocpg.com',
  },
  {
    name: 'TXTIFY™',
    domain: 'txtify.io',
  },
  {
    name: 'Builtfirst',
    domain: 'builtfirst.com',
  },
  {
    name: 'Peritus.ai',
    domain: 'peritus.ai',
  },
  {
    name: 'Guanxi',
    domain: 'guanxi.it',
  },
  {
    name: 'LeapPoint',
    domain: 'leappoint.com',
  },
  {
    name: 'Faber',
    domain: 'faberconnect.com',
  },
  {
    name: 'Siteimprove',
    domain: 'siteimprove.com',
  },
  {
    name: 'Staffing Referrals',
    domain: 'staffingreferrals.com',
  },
  {
    name: 'Danube Valley Digital Marketing',
    domain: 'danube-valley-digital-marketing.at',
  },
  {
    name: 'Hiforte Technologies',
    domain: 'hiforte.com',
  },
  {
    name: 'AdRoll',
    domain: 'adroll.com',
  },
  {
    name: 'Intercom',
    domain: 'intercom.com',
  },
  {
    name: 'Backstage',
    domain: 'wearebackstage.com',
  },
  {
    name: 'SEKO Logistics',
    domain: 'sekologistics.com',
  },
  {
    name: 'V Group Inc.',
    domain: 'contexttocall.com',
  },
  {
    name: 'ChannelApe',
    domain: 'channelape.com',
  },
  {
    name: 'Opal',
    domain: 'workwithopal.com',
  },
  {
    name: 'Conversmart',
    domain: 'conversmart.com',
  },
  {
    name: 'UpRoar Partners',
    domain: 'uproarpartners.com',
  },
  {
    name: 'Go2',
    domain: 'go2.io',
  },
  {
    name: 'Deliverr',
    domain: 'deliverr.com',
  },
  {
    name: 'Rooted Software',
    domain: 'rooted.software',
  },
  {
    name: 'QuotaPath',
    domain: 'quotapath.com',
  },
  {
    name: 'Queen of Raw',
    domain: 'queenofraw.com',
  },
  {
    name: 'Welcome (A NewsCred Brand)',
    domain: 'welcomesoftware.com',
  },
  {
    name: 'Mustang MarTech LLC',
    domain: 'mustangmartech.com',
  },
  {
    name: 'Delegate',
    domain: 'delegate.team',
  },
  {
    name: 'Prepr',
    domain: 'prepr.io',
  },
  {
    name: 'Lantern',
    domain: 'withlantern.com',
  },
  {
    name: 'e2y',
    domain: 'e2ycommerce.com',
  },
  {
    name: 'Isomr Group',
    domain: 'isomr.digital',
  },
  {
    name: 'STACK Construction Technologies',
    domain: 'stackct.com',
  },
  {
    name: 'Lifesight',
    domain: 'lifesight.io',
  },
  {
    name: 'We Low Code',
    domain: 'welowcode.com',
  },
  {
    name: 'Retool',
    domain: 'retool.com',
  },
  {
    name: 'Underwaterpistol',
    domain: 'underwaterpistol.com',
  },
  {
    name: 'eHotelier',
    domain: 'ehotelier.com',
  },
  {
    name: 'Ventagium Data Consulting',
    domain: 'ventagium.com',
  },
  {
    name: 'Pulse Software',
    domain: 'pulsesoftware.com',
  },
  {
    name: 'Sovrn Holdings',
    domain: 'sovrn.com',
  },
  {
    name: 'Traitify',
    domain: 'traitify.com',
  },
  {
    name: 'Traceable',
    domain: 'traceable.ai',
  },
  {
    name: 'Anjuna',
    domain: 'anjuna.io',
  },
  {
    name: 'MURAL',
    domain: 'mural.co',
  },
  {
    name: 'Jumio',
    domain: 'jumio.com',
  },
  {
    name: 'Data Plus, Inc',
    domain: 'dphs.com',
  },
  {
    name: 'Jungle Scout',
    domain: 'junglescout.com',
  },
  {
    name: 'Red Hot Penny',
    domain: 'redhotpenny.com',
  },
  {
    name: 'Alamy',
    domain: 'alamy.com',
  },
  {
    name: 'Truthset',
    domain: 'truthset.io',
  },
  {
    name: 'ekincare',
    domain: 'ekincare.com',
  },
  {
    name: 'Gong',
    domain: 'gong.io',
  },
  {
    name: 'ForeFront',
    domain: 'forefrontcorp.com',
  },
  {
    name: 'Vested Marketing',
    domain: 'vested.marketing',
  },
  {
    name: 'vdSHOP',
    domain: 'vdshop.es',
  },
  {
    name: 'OtherLevels',
    domain: 'otherlevels.com',
  },
  {
    name: 'what3words',
    domain: 'what3words.com',
  },
  {
    name: 'Patchworks',
    domain: 'patchworks.co.uk',
  },
  {
    name: 'RX',
    domain: 'rxglobal.com',
  },
  {
    name: 'Quantum Enterprises LLC',
    domain: 'quantumterminal.com',
  },
  {
    name: 'Madras Global',
    domain: 'madrasglobal.com',
  },
  {
    name: 'izba',
    domain: 'izba.co',
  },
  {
    name: 'Born & Bred',
    domain: 'bornandbredbrand.com',
  },
  {
    name: 'New Breed',
    domain: 'newbreedmarketing.com',
  },
  {
    name: 'Bringg',
    domain: 'bringg.com',
  },
  {
    name: 'Pegasystems',
    domain: 'pega.com',
  },
  {
    name: 'Groove Commerce',
    domain: 'groovecommerce.com',
  },
  {
    name: 'Small Group Network',
    domain: 'smallgroupnetwork.com',
  },
  {
    name: 'Immortal Game',
    domain: 'immortal.game',
  },
  {
    name: 'TripAdvisor',
    domain: 'tripadvisor.com',
  },
  {
    name: 'Catenda',
    domain: 'catenda.no',
  },
  {
    name: 'Upstatement',
    domain: 'upstatement.com',
  },
  {
    name: 'Fortuitas',
    domain: 'fortuitas.com',
  },
  {
    name: 'Modus Create',
    domain: 'moduscreate.com',
  },
  {
    name: 'ConsultingCloud.io',
    domain: 'consultingcloud.io',
  },
  {
    name: 'Benepass',
    domain: 'getbenepass.com',
  },
  {
    name: 'CloudKnox Security',
    domain: 'cloudknox.io',
  },
  {
    name: 'Diabsolut',
    domain: 'diabsolut.com',
  },
  {
    name: 'Shift4',
    domain: 'shift4.com',
  },
  {
    name: 'Expand In Asia',
    domain: 'expandin.asia',
  },
  {
    name: 'Introhive',
    domain: 'introhive.com',
  },
  {
    name: 'Buchanan Group',
    domain: 'buchanangroup.com',
  },
  {
    name: 'Fluent Commerce',
    domain: 'fluentcommerce.com',
  },
  {
    name: 'Malomo',
    domain: 'gomalomo.com',
  },
  {
    name: 'Kadro Solutions Inc',
    domain: 'kadro.com',
  },
  {
    name: 'RIMES Technologies',
    domain: 'rimes.com',
  },
  {
    name: 'Ekos',
    domain: 'goekos.com',
  },
  {
    name: 'FlexPay',
    domain: 'flexpay.io',
  },
  {
    name: 'Humanperf Software',
    domain: 'humanperf.com',
  },
  {
    name: 'Purchasely',
    domain: 'purchasely.com',
  },
  {
    name: 'HelpJuice',
    domain: 'helpjuice.com',
  },
  {
    name: 'Zenreach',
    domain: 'zenreach.com',
  },
  {
    name: 'Ordoro',
    domain: 'ordoro.com',
  },
  {
    name: 'Phrasee®',
    domain: 'phrasee.co',
  },
  {
    name: 'Hexaware Technologies',
    domain: 'hexaware.com',
  },
  {
    name: 'Via',
    domain: 'viacustomers.com',
  },
  {
    name: 'Half Helix',
    domain: 'halfhelix.com',
  },
  {
    name: 'Alabs AI',
    domain: 'alabs-ai.com',
  },
  {
    name: 'Corra',
    domain: 'corra.com',
  },
  {
    name: 'Digital 22',
    domain: 'digital22.com',
  },
  {
    name: 'Cdr Group International',
    domain: 'cdrgroupinternational.xyz',
  },
  {
    name: 'Beamery',
    domain: 'beamery.com',
  },
  {
    name: 'WorkMotion',
    domain: 'workmotion.com',
  },
  {
    name: 'OneSignal',
    domain: 'onesignal.com',
  },
  {
    name: 'Retina AI',
    domain: 'retina.ai',
  },
  {
    name: 'Halls of Knowledge',
    domain: 'hokagency.com',
  },
  {
    name: 'Opendatasoft',
    domain: 'opendatasoft.com',
  },
  {
    name: 'QRY',
    domain: 'weareqry.com',
  },
  {
    name: 'Brightloom',
    domain: 'brightloom.com',
  },
  {
    name: 'Geebo',
    domain: 'geebo.com',
  },
  {
    name: 'Lessonly-Sandbox',
    domain: 'lessonly-sandbox.com',
  },
  {
    name: 'ITILITE',
    domain: 'itilite.com',
  },
  {
    name: 'SiteVibes',
    domain: 'sitevibes.com',
  },
  {
    name: 'Hushly',
    domain: 'hushly.com',
  },
  {
    name: 'BRF Consulting',
    domain: 'brfconsulting.com',
  },
  {
    name: 'Rockport VAL',
    domain: 'rockportval.com',
  },
  {
    name: 'ASCD',
    domain: 'ascd.org',
  },
  {
    name: 'webmefy',
    domain: 'webmefy.com',
  },
  {
    name: 'Aptitude Software',
    domain: 'aptitudesoftware.com',
  },
  {
    name: 'Verdn',
    domain: 'verdn.com',
  },
  {
    name: 'WDG',
    domain: 'webdevelopmentgroup.com',
  },
  {
    name: 'Sales Gravy Inc',
    domain: 'salesgravy.com',
  },
  {
    name: 'Flomatika',
    domain: 'flomatika.com',
  },
  {
    name: 'Postlight',
    domain: 'postlight.com',
  },
  {
    name: 'Flowium',
    domain: 'flowium.com',
  },
  {
    name: 'FieldEdge',
    domain: 'fieldedge.com',
  },
  {
    name: 'Digitas Pixelpark',
    domain: 'digitaspixelpark.com',
  },
  {
    name: 'Encased.io',
    domain: 'encased.io',
  },
  {
    name: 'LoyLap',
    domain: 'loylap.com',
  },
  {
    name: 'ModelFront',
    domain: 'modelfront.com',
  },
  {
    name: 'theNextSales',
    domain: 'thenextsales.nl',
  },
  {
    name: 'C3C Software',
    domain: 'c3csoftware.com.br',
  },
  {
    name: 'Mobile Solutions',
    domain: 'mobilesolutions.net',
  },
  {
    name: 'MobiChord',
    domain: 'mobichord.com',
  },
  {
    name: 'Blueshift',
    domain: 'blueshift.com',
  },
  {
    name: 'Art Unlimited',
    domain: 'artunlimitedusa.com',
  },
  {
    name: 'Blind Zebra',
    domain: 'blind-zebra.com',
  },
  {
    name: 'TimeDigital CRM',
    domain: 'timedigitalcrm.com',
  },
  {
    name: 'Allocadia',
    domain: 'allocadia.com',
  },
  {
    name: 'Schuppar Consulting',
    domain: 'schuppar-consulting.com',
  },
  {
    name: 'Freight Club',
    domain: 'freightclub.com',
  },
  {
    name: 'Gtmhub',
    domain: 'gtmhub.com',
  },
  {
    name: 'Searchspring',
    domain: 'searchspring.com',
  },
  {
    name: 'Scalapay',
    domain: 'scalapay.com',
  },
  {
    name: 'Lilt Inc',
    domain: 'lilt.com',
  },
  {
    name: 'EverTrue',
    domain: 'evertrue.com',
  },
  {
    name: 'Arbor Education',
    domain: 'arbor-education.com',
  },
  {
    name: 'Mailvio',
    domain: 'mailvio.com',
  },
  {
    name: 'Dexpay',
    domain: 'dexpay.com',
  },
  {
    name: 'Community Funded',
    domain: 'communityfunded.com',
  },
  {
    name: 'Katana PIM',
    domain: 'katanapim.com',
  },
  {
    name: 'CannaTech Solutions',
    domain: 'cannatech.solutions',
  },
  {
    name: 'Signpost',
    domain: 'signpost.com',
  },
  {
    name: 'Incepta Solutions',
    domain: 'inceptasolutions.com',
  },
  {
    name: 'ShipMonk',
    domain: 'shipmonk.com',
  },
  {
    name: 'PeopleFluent',
    domain: 'peoplefluent.com',
  },
  {
    name: 'Uplift',
    domain: 'uplift.com',
  },
  {
    name: 'Redeye',
    domain: 'redeye.com',
  },
  {
    name: 'Joint Venture Marketing',
    domain: 'jointventuremarketing.com',
  },
  {
    name: 'Zerebral IT Solutions Pvt',
    domain: 'zerebral.co.in',
  },
  {
    name: 'Woolman',
    domain: 'woolman.co',
  },
  {
    name: 'Evermood',
    domain: 'evermood.com',
  },
  {
    name: 'Cognota',
    domain: 'cognota.com',
  },
  {
    name: '123Loadboard',
    domain: '123loadboard.com',
  },
  {
    name: 'Tacit Knowledge',
    domain: 'tacitknowledge.com',
  },
  {
    name: 'ShopPop',
    domain: 'shoppop.com',
  },
  {
    name: 'Pavilion',
    domain: 'joinpavilion.com',
  },
  {
    name: 'Verafin',
    domain: 'verafin.com',
  },
  {
    name: 'Data Clymer',
    domain: 'dataclymer.com',
  },
  {
    name: 'Cobalt Communications',
    domain: 'cobaltcommunications.com',
  },
  {
    name: 'Voyage SMS',
    domain: 'voyagesms.com',
  },
  {
    name: 'HGS Digital',
    domain: 'hgsdigital.com',
  },
  {
    name: 'EarthCam',
    domain: 'earthcam.com',
  },
  {
    name: 'Keen Decision Systems',
    domain: 'keends.com',
  },
  {
    name: 'mogean',
    domain: 'mogean.com',
  },
  {
    name: 'Finity Consulting',
    domain: 'finity.com.au',
  },
  {
    name: 'REGIE',
    domain: 'regie.io',
  },
  {
    name: 'Amperity',
    domain: 'amperity.com',
  },
  {
    name: '300cbt',
    domain: '300cbt.com',
  },
  {
    name: 'CYRISMA',
    domain: 'cyrisma.com',
  },
  {
    name: 'Lambda',
    domain: 'lambdalabs.com',
  },
  {
    name: 'UMU Inc',
    domain: 'umu.com',
  },
  {
    name: 'Nacelle',
    domain: 'nacelle.com',
  },
  {
    name: 'Fuel Digital',
    domain: 'fuel.digital',
  },
  {
    name: '5P Consulting',
    domain: '5pconsulting.biz',
  },
  {
    name: 'TopStonks',
    domain: 'topstonks.com',
  },
  {
    name: 'deCheem',
    domain: 'decheem.io',
  },
  {
    name: 'Profitero',
    domain: 'profitero.com',
  },
  {
    name: 'ORBITVU',
    domain: 'orbitvu.com',
  },
  {
    name: 'ArcSite',
    domain: 'arcsite.com',
  },
  {
    name: 'Flinks',
    domain: 'flinks.com',
  },
  {
    name: 'Leanplum',
    domain: 'leanplum.com',
  },
  {
    name: 'PlayerLync',
    domain: 'playerlync.com',
  },
  {
    name: 'TrustRadius',
    domain: 'trustradius.com',
  },
  {
    name: 'Bright Vessel',
    domain: 'brightvessel.com',
  },
  {
    name: 'Ordr',
    domain: 'ordr.net',
  },
  {
    name: 'Chronos Agency',
    domain: 'chronos.agency',
  },
  {
    name: 'Perkuto',
    domain: 'perkuto.com',
  },
  {
    name: 'TVPage',
    domain: 'tvpage.com',
  },
  {
    name: 'monday.com',
    domain: 'monday.com',
  },
  {
    name: 'Remarkety',
    domain: 'remarkety.com',
  },
  {
    name: 'Andovar Pte Ltd',
    domain: 'andovar.com',
  },
  {
    name: '7Park Data',
    domain: '7parkdata.com',
  },
  {
    name: 'Privacera',
    domain: 'privacera.com',
  },
  {
    name: 'Pendragon Labs',
    domain: 'affiliatebrands.co',
  },
  {
    name: 'Valuer.ai',
    domain: 'valuer.ai',
  },
  {
    name: 'WFS Australia',
    domain: 'wfsaustralia.com',
  },
  {
    name: 'PhoneRaise',
    domain: 'phoneraise.com',
  },
  {
    name: 'PingPilot',
    domain: 'pingpilot.com',
  },
  {
    name: 'New Engen',
    domain: 'newengen.com',
  },
  {
    name: 'RoyaltyBusayo',
    domain: 'royaltybusayo.com',
  },
  {
    name: 'OpenChannel',
    domain: 'openchannel.io',
  },
  {
    name: 'ROI·DNA',
    domain: 'roidna.com',
  },
  {
    name: 'Practice Ignition',
    domain: 'practiceignition.com',
  },
  {
    name: 'Automattic',
    domain: 'automattic.com',
  },
  {
    name: 'Lakeward Management AG',
    domain: 'lakeward.ch',
  },
  {
    name: 'Tatari',
    domain: 'tatari.tv',
  },
  {
    name: 'Villyge',
    domain: 'villyge.com',
  },
  {
    name: 'Fosdick Fulfillment',
    domain: 'fosdickfulfillment.com',
  },
  {
    name: 'Spently',
    domain: 'spently.com',
  },
  {
    name: 'Aicel Technologies Inc.',
    domain: 'aiceltech.com',
  },
  {
    name: 'Monadd',
    domain: 'monadd.io',
  },
  {
    name: 'Happ Prime',
    domain: 'happyprime.co',
  },
  {
    name: 'Finario',
    domain: 'finario.com',
  },
  {
    name: 'Settle Inc.',
    domain: 'settle.com',
  },
  {
    name: 'Social Nature',
    domain: 'socialnature.com',
  },
  {
    name: 'Olive',
    domain: 'olive.app',
  },
  {
    name: 'Stylitics',
    domain: 'stylitics.com',
  },
  {
    name: 'blubolt',
    domain: 'blubolt.com',
  },
  {
    name: 'Elantis Solutions',
    domain: 'elantis.com',
  },
  {
    name: 'Ordermentum Pty Ltd',
    domain: 'ordermentum.com',
  },
  {
    name: 'Throtle Inc.',
    domain: 'throtle.io',
  },
  {
    name: '3Q GmbH',
    domain: '3q.video',
  },
  {
    name: 'No Standing',
    domain: 'nostanding.com.au',
  },
  {
    name: 'Interactic',
    domain: 'interactic.io',
  },
  {
    name: 'Beyond Identity',
    domain: 'beyondidentity.com',
  },
  {
    name: 'Shift',
    domain: 'shift.io',
  },
  {
    name: 'Sideshow Group Ltd',
    domain: 'sideshowgroup.com',
  },
  {
    name: 'SeaMonster Studios',
    domain: 'seamonsterstudios.com',
  },
  {
    name: 'Skillable',
    domain: 'skillable.com',
  },
  {
    name: 'Cerby',
    domain: 'cerby.com',
  },
  {
    name: 'Screenloop',
    domain: 'screenloop.com',
  },
  {
    name: 'NodeWeaver',
    domain: 'nodeweaver.eu',
  },
  {
    name: 'CitiusTech',
    domain: 'citiustech.com',
  },
  {
    name: 'Factor 8',
    domain: 'factor8.com',
  },
  {
    name: 'home24',
    domain: 'home24.fr',
  },
  {
    name: 'Ebsta',
    domain: 'ebsta.com',
  },
  {
    name: 'Andgo Systems',
    domain: 'andgosystems.com',
  },
  {
    name: 'Best Writing',
    domain: 'bestwriting.com',
  },
  {
    name: 'MuleSoft',
    domain: 'mulesoft.com',
  },
  {
    name: 'Behavioral Signals',
    domain: 'behavioralsignals.com',
  },
  {
    name: 'Lumanu',
    domain: 'lumanu.com',
  },
  {
    name: 'Kronologic',
    domain: 'kronologic.ai',
  },
  {
    name: 'Intro CRM',
    domain: 'introcrm.com',
  },
  {
    name: 'Nansen',
    domain: 'nansen.com',
  },
  {
    name: 'timetoreply',
    domain: 'timetoreply.com',
  },
  {
    name: 'Angry Creative UK',
    domain: 'angrycreative.com',
  },
  {
    name: 'Dito',
    domain: 'ditoweb.com',
  },
  {
    name: 'Dataflix',
    domain: 'dataflix.com',
  },
  {
    name: 'Yieldify',
    domain: 'yieldify.com',
  },
  {
    name: 'Jellyfish',
    domain: 'jellyfish.com',
  },
  {
    name: 'Confluent',
    domain: 'confluent.io',
  },
  {
    name: 'A2U',
    domain: 'a2u.net',
  },
  {
    name: 'PKWARE',
    domain: 'pkware.com',
  },
  {
    name: 'Wifimester ApS',
    domain: 'wifimester.dk',
  },
  {
    name: 'Front-Commerce',
    domain: 'front-commerce.com',
  },
  {
    name: 'Full Fat Commerce',
    domain: 'fullfatcommerce.com',
  },
  {
    name: 'Zirous',
    domain: 'zirous.com',
  },
  {
    name: 'Ringpin',
    domain: 'ringpin.com',
  },
  {
    name: 'BACG',
    domain: 'bac.group',
  },
  {
    name: 'ClearVoice',
    domain: 'clearvoice.com',
  },
  {
    name: 'Achievers',
    domain: 'achievers.com',
  },
  {
    name: 'Reflective',
    domain: 'reflective.co',
  },
  {
    name: 'MakeBeCool',
    domain: 'makebecool.com',
  },
  {
    name: 'Grassroots Unwired',
    domain: 'grassrootsunwired.com',
  },
  {
    name: 'AMPECO',
    domain: 'ampeco.com',
  },
  {
    name: 'Recoupex',
    domain: 'recoupex.com',
  },
  {
    name: 'ICIS',
    domain: 'icis.com',
  },
  {
    name: 'SlyceData',
    domain: 'slycedata.com',
  },
  {
    name: 'Vector AIS',
    domain: 'vectorais.com',
  },
  {
    name: 'Resource Software International',
    domain: 'telecost.com',
  },
  {
    name: 'Expert System',
    domain: 'expert.ai',
  },
  {
    name: 'Obie',
    domain: 'obie.ai',
  },
  {
    name: 'Reddsand',
    domain: 'reddsand.com',
  },
  {
    name: 'Cella',
    domain: 'cellainc.com',
  },
  {
    name: 'Loop & Tie',
    domain: 'loopandtie.com',
  },
  {
    name: 'apiway',
    domain: 'apiway.ai',
  },
  {
    name: '2050 Communications',
    domain: '2050communications.com',
  },
  {
    name: 'TEC360 CLOUD',
    domain: 'tec360cloud.com',
  },
  {
    name: 'Poka',
    domain: 'poka.io',
  },
  {
    name: 'GoCardless',
    domain: 'gocardless.com',
  },
  {
    name: 'We360.ai',
    domain: 'we360.ai',
  },
  {
    name: 'CleverTap',
    domain: 'clevertap.com',
  },
  {
    name: 'SuiteFiles',
    domain: 'suitefiles.com',
  },
  {
    name: 'Marketcheck.com',
    domain: 'marketcheck.com',
  },
  {
    name: 'HBR Consulting',
    domain: 'hbrconsulting.com',
  },
  {
    name: 'Digitek Solutions',
    domain: 'digiteksolutions.com',
  },
  {
    name: 'ClickPost',
    domain: 'clickpost.ai',
  },
  {
    name: 'Exorigo-Upos',
    domain: 'exorigo-upos.pl',
  },
  {
    name: 'Sarus',
    domain: 'sarus.tech',
  },
  {
    name: 'Axim Fringe Solutions Group',
    domain: 'aximfsg.com',
  },
  {
    name: 'Link Mobility group as',
    domain: 'linkmobility.com',
  },
  {
    name: 'Skafos.ai',
    domain: 'skafos.ai',
  },
  {
    name: 'VHT',
    domain: 'vhtcx.com',
  },
  {
    name: 'Peak Support',
    domain: 'peaksupport.io',
  },
  {
    name: 'Digital Surgeons',
    domain: 'digitalsurgeons.com',
  },
  {
    name: 'Brillio, LLC',
    domain: 'brillio.com',
  },
  {
    name: 'Unific',
    domain: 'unific.com',
  },
  {
    name: 'CXMania',
    domain: 'cxmania.com',
  },
  {
    name: 'Helm Operations',
    domain: 'helmoperations.com',
  },
  {
    name: 'Mr Yum',
    domain: 'mryum.com',
  },
  {
    name: 'Phonexa Holdings, LLC',
    domain: 'phonexa.com',
  },
  {
    name: 'Exela Technologies, Inc.',
    domain: 'exelatech.com',
  },
  {
    name: 'Doofinder',
    domain: 'doofinder.com',
  },
  {
    name: 'Yardline Capital',
    domain: 'yardline.com',
  },
  {
    name: 'Furthermore',
    domain: 'furthermore.co.uk',
  },
  {
    name: 'Loop1',
    domain: 'loop1.com',
  },
  {
    name: 'Jameson Strategies',
    domain: 'jamesonstrategies.com',
  },
  {
    name: 'Searchanise',
    domain: 'start.searchanise.com',
  },
  {
    name: 'Futureform',
    domain: 'futureform.uk',
  },
  {
    name: 'Basim Digital Lab./The 501c3 Agency',
    domain: '501c3agency.com',
  },
  {
    name: 'byrd',
    domain: 'getbyrd.com',
  },
  {
    name: 'plazz',
    domain: 'plazz.ag',
  },
  {
    name: 'Yuansfer',
    domain: 'yuansfer.com',
  },
  {
    name: 'Keros Digital',
    domain: 'keros-digital.com',
  },
  {
    name: 'Webinterpret',
    domain: 'webinterpret.com',
  },
  {
    name: 'Swaven',
    domain: 'swaven.com',
  },
  {
    name: 'KNOWLEDGE POWER PARTNERS',
    domain: 'kpp.lat',
  },
  {
    name: 'BKONECT',
    domain: 'bkonect.com',
  },
  {
    name: 'Sievo',
    domain: 'sievo.com',
  },
  {
    name: 'LeadBaller',
    domain: 'leadballer.com',
  },
  {
    name: 'DocPoint Solutions',
    domain: 'docpointsolutions.com',
  },
  {
    name: 'aleno AG',
    domain: 'aleno.me',
  },
  {
    name: 'Fueled',
    domain: 'fueled.com',
  },
  {
    name: 'Ippon Technologies USA',
    domain: 'ipponusa.com',
  },
  {
    name: 'Three Bridges M&C',
    domain: 'threebridges.it',
  },
  {
    name: 'Cogsy',
    domain: 'cogsy.com',
  },
  {
    name: 'Cyndx',
    domain: 'cyndx.com',
  },
  {
    name: 'Weave',
    domain: 'getweave.com',
  },
  {
    name: 'SaaSMQL',
    domain: 'saasmql.com',
  },
  {
    name: 'Datum',
    domain: 'datumcp.com',
  },
  {
    name: 'Lumi Holdings',
    domain: 'lumiglobal.com',
  },
  {
    name: 'Fidelis Cybersecurity',
    domain: 'fidelissecurity.com',
  },
  {
    name: 'FINDOLOGIC',
    domain: 'findologic.com',
  },
  {
    name: 'Perx Technologies',
    domain: 'perxtech.com',
  },
  {
    name: 'Revenue River',
    domain: 'revenueriver.co',
  },
  {
    name: 'ServiceTrade',
    domain: 'servicetrade.com',
  },
  {
    name: 'Innologic A/S',
    domain: 'innologic.dk',
  },
  {
    name: 'ShipSaving',
    domain: 'shipsaving.com',
  },
  {
    name: 'Jamil Florusse',
    domain: 'jamilflorusse.nl',
  },
  {
    name: 'Workpuls',
    domain: 'workpuls.com',
  },
  {
    name: 'Vericast',
    domain: 'vericast.com',
  },
  {
    name: 'Datonics',
    domain: 'datonics.com',
  },
  {
    name: 'K2M Soluções',
    domain: 'k2m.com.br',
  },
  {
    name: 'Quiet Logistics',
    domain: 'quietlogistics.com',
  },
  {
    name: 'Eway',
    domain: 'eway.io',
  },
  {
    name: 'Kindly',
    domain: 'kindly.ai',
  },
  {
    name: 'Momentive',
    domain: 'momentive.ai',
  },
  {
    name: 'Subscript',
    domain: 'subscript.com',
  },
  {
    name: 'WebEngage',
    domain: 'webengage.com',
  },
  {
    name: 'Forter',
    domain: 'forter.com',
  },
  {
    name: 'AIA Contract Docs',
    domain: 'aiacontracts.com',
  },
  {
    name: 'Lula Smarter Property Maintenance Inc.',
    domain: 'lula.life',
  },
  {
    name: 'Totem',
    domain: 'totem.team',
  },
  {
    name: 'KOgent Systems, LLC',
    domain: 'kogentservices.com',
  },
  {
    name: 'EvaluAgent',
    domain: 'evaluagent.com',
  },
  {
    name: 'Gordon Tech',
    domain: 'gordontech.io',
  },
  {
    name: 'Zudy',
    domain: 'zudy.asia',
  },
  {
    name: 'MOD Tech Labs',
    domain: 'modtechlabs.com',
  },
  {
    name: 'radianHub',
    domain: 'radianhub.com',
  },
  {
    name: 'Cubic Health',
    domain: 'cubic.ca',
  },
  {
    name: 'Salsify',
    domain: 'salsify.com',
  },
  {
    name: 'Marketer on a Mission',
    domain: 'marketeronamission.work',
  },
  {
    name: 'April Six',
    domain: 'aprilsix.com',
  },
  {
    name: 'Infinite Resource Solutions',
    domain: 'infiniters.com',
  },
  {
    name: 'AirFleet',
    domain: 'airfleet.co',
  },
  {
    name: 'D2L',
    domain: 'd2l.com',
  },
  {
    name: 'Winmo',
    domain: 'winmo.com',
  },
  {
    name: 'Forecastable',
    domain: 'forecastable.com',
  },
  {
    name: 'xentral ERP Software',
    domain: 'xentral.com',
  },
  {
    name: 'Vaayu',
    domain: 'vaayu.tech',
  },
  {
    name: 'Liquidware',
    domain: 'liquidware.com',
  },
  {
    name: 'Translations.com',
    domain: 'translations.com',
  },
  {
    name: 'Overground Cloud Services',
    domain: 'overgroundcloud.com',
  },
  {
    name: 'QuinStreet',
    domain: 'quinstreet.com',
  },
  {
    name: 'Addict Mobile',
    domain: 'addict-mobile.com',
  },
  {
    name: 'Common Paper',
    domain: 'commonpaper.com',
  },
  {
    name: 'CV Partner - For Bids and Proposals',
    domain: 'cvpartner.com',
  },
  {
    name: 'INRIX',
    domain: 'inrix.com',
  },
  {
    name: 'Codal',
    domain: 'codal.com',
  },
  {
    name: 'Wellbeing Foundation Africa',
    domain: 'wbfafrica.org',
  },
  {
    name: 'Flychain',
    domain: 'flychain.us',
  },
  {
    name: 'XOi Technologies',
    domain: 'xoi.io',
  },
  {
    name: 'Brave the Skies',
    domain: 'bravetheskies.com',
  },
  {
    name: 'ChannelSight',
    domain: 'channelsight.com',
  },
  {
    name: 'Crowd Favorite',
    domain: 'crowdfavorite.com',
  },
  {
    name: 'Knack',
    domain: 'knack.com',
  },
  {
    name: 'CloudZone',
    domain: 'cloudzone.io',
  },
  {
    name: 'Points North',
    domain: 'points-north.com',
  },
  {
    name: 'Pro iDoctor',
    domain: 'proidoctor.com',
  },
  {
    name: 'Trew Knowledge',
    domain: 'trewknowledge.com',
  },
  {
    name: 'Agility CMS',
    domain: 'agilitycms.com',
  },
  {
    name: 'Cloudwords',
    domain: 'cloudwords.com',
  },
  {
    name: 'ION',
    domain: 'ionhq.co.uk',
  },
  {
    name: 'FlowHuman',
    domain: 'flowhuman.co.uk',
  },
  {
    name: 'inBeat Agency',
    domain: 'inbeat.agency',
  },
  {
    name: 'Scope Technologies',
    domain: 'myscopetech.com',
  },
  {
    name: 'Schrute Farms',
    domain: 'schrutefarms.demo',
  },
  {
    name: 'Secret Sales',
    domain: 'secretsales.com',
  },
  {
    name: 'SilverTech',
    domain: 'silvertech.com',
  },
  {
    name: 'ListenFirst',
    domain: 'listenfirstmedia.com',
  },
  {
    name: 'Consumer Fusion',
    domain: 'consumerfusion.com',
  },
  {
    name: 'etrainu',
    domain: 'etrainu.com',
  },
  {
    name: 'ISM e-Company',
    domain: 'ism.nl',
  },
  {
    name: 'Demand IQ',
    domain: 'demand-iq.com',
  },
  {
    name: 'Leap',
    domain: 'leaptodigital.com',
  },
  {
    name: 'BEYABLE',
    domain: 'beyable.com',
  },
  {
    name: '101 Solutions',
    domain: '101sbc.com',
  },
  {
    name: 'Pixlee TurnTo',
    domain: 'pixlee.com',
  },
  {
    name: 'Parvenu',
    domain: 'parvenu.io',
  },
  {
    name: 'Prodsight',
    domain: 'prodsight.com',
  },
  {
    name: 'JDR Group',
    domain: 'jdrgroup.co.uk',
  },
  {
    name: 'Chartis.io',
    domain: 'chartis.io',
  },
  {
    name: 'FulcrumDigital',
    domain: 'fulcrumdigital.com',
  },
  {
    name: 'Chainalysis',
    domain: 'chainalysis.com',
  },
  {
    name: 'Rep',
    domain: 'hellorep.ai',
  },
  {
    name: 'Ecommerce Tech',
    domain: 'ecommercetech.io',
  },
  {
    name: 'Octoly',
    domain: 'octoly.com',
  },
  {
    name: 'PlaceIQ',
    domain: 'placeiq.com',
  },
  {
    name: 'EVS',
    domain: 'evssw.com',
  },
  {
    name: 'Take Blip',
    domain: 'take.net',
  },
  {
    name: 'JEMS',
    domain: 'jems-group.com',
  },
  {
    name: 'Juni Technology AB',
    domain: 'juni.co',
  },
  {
    name: 'IntelePeer',
    domain: 'intelepeer.com',
  },
  {
    name: 'sticky.io',
    domain: 'sticky.io',
  },
  {
    name: 'Paro',
    domain: 'paro.io',
  },
  {
    name: 'Airmeet',
    domain: 'airmeet.com',
  },
  {
    name: 'AgattiTech',
    domain: 'agatti.tech',
  },
  {
    name: 'Swirl Technologies',
    domain: 'tryswirl.com',
  },
  {
    name: 'Cprime',
    domain: 'cprime.com',
  },
  {
    name: 'MoEngage',
    domain: 'moengage.com',
  },
  {
    name: 'PinPoint Research',
    domain: 'pinpointresearch.com',
  },
  {
    name: 'Huboo Fulfilment',
    domain: 'huboo.co.uk',
  },
  {
    name: 'Cassandra',
    domain: 'cassandra.app',
  },
  {
    name: 'Brevi',
    domain: 'brevi.ai',
  },
  {
    name: 'WorkPro',
    domain: 'workpro.com.au',
  },
  {
    name: 'Asperato',
    domain: 'asperato.com',
  },
  {
    name: 'Jonas Construction Software',
    domain: 'jonasconstruction.com',
  },
  {
    name: 'Apax Partners',
    domain: 'apax.com',
  },
  {
    name: 'Marin Software',
    domain: 'marinsoftware.com',
  },
  {
    name: 'DataKitchen, Inc.',
    domain: 'datakitchen.io',
  },
  {
    name: 'Coast',
    domain: 'coastpay.com',
  },
  {
    name: 'Facet',
    domain: 'facetdata.com',
  },
  {
    name: 'Niji',
    domain: 'niji.fr',
  },
  {
    name: 'Pluto7 Consulting Inc',
    domain: 'pluto7.com',
  },
  {
    name: 'ClickBank',
    domain: 'clickbank.com',
  },
  {
    name: 'Usercentrics',
    domain: 'usercentrics.com',
  },
  {
    name: 'Netchex',
    domain: 'netchexonline.com',
  },
  {
    name: 'Blueprint Advisory',
    domain: 'blueprintadvisory.com',
  },
  {
    name: 'Balance Claims',
    domain: 'balanceclaims.com',
  },
  {
    name: 'Alva Labs',
    domain: 'alvalabs.io',
  },
  {
    name: 'WillowTree',
    domain: 'willowtreeapps.com',
  },
  {
    name: 'Adapt API',
    domain: 'adaptinsurance.com',
  },
  {
    name: 'Creatio',
    domain: 'creatio.com',
  },
  {
    name: 'Vital Software',
    domain: 'vitaler.com',
  },
  {
    name: 'ChangeCX',
    domain: 'changecx.com',
  },
  {
    name: 'ServiceTitan Sandbox',
    domain: 'servicetitan-sandbox.com',
  },
  {
    name: 'BLOOMKEYS',
    domain: 'bloomkeys.com',
  },
  {
    name: 'Jampp',
    domain: 'jampp.com',
  },
  {
    name: 'Acterus',
    domain: 'acterus.com',
  },
  {
    name: 'PowerPay',
    domain: 'getpowerpay.com',
  },
  {
    name: 'CI&T',
    domain: 'ciandt.com',
  },
  {
    name: 'Idelic',
    domain: 'idelic.com',
  },
  {
    name: 'SurveySparrow',
    domain: 'surveysparrow.com',
  },
  {
    name: 'Housecall Pro',
    domain: 'housecallpro.com',
  },
  {
    name: 'SumoQuote',
    domain: 'sumoquote.com',
  },
  {
    name: 'Ivy.ai',
    domain: 'ivy.ai',
  },
  {
    name: 'White Rock Technologies',
    domain: 'whiteroctech.com',
  },
  {
    name: 'Codat',
    domain: 'codat.io',
  },
  {
    name: 'L1NDA',
    domain: 'l1nda.com',
  },
  {
    name: 'Vidu',
    domain: 'vidu.io',
  },
  {
    name: 'virtuall',
    domain: 'virtuall.company',
  },
  {
    name: 'Normal',
    domain: 'normalfinance.io',
  },
  {
    name: 'FRESHCODE',
    domain: 'freshcodeit.com',
  },
  {
    name: 'North Tech Inc',
    domain: 'northtechnologies.com',
  },
  {
    name: 'cti digital',
    domain: 'ctidigital.com',
  },
  {
    name: 'Elevator',
    domain: 'elevator.amsterdam',
  },
  {
    name: 'Compliance Wave',
    domain: 'compliancewavelibrary.com',
  },
  {
    name: 'techshare',
    domain: 'techshare.com.mx',
  },
  {
    name: 'Staffing Future: Staffing Websites & Technology',
    domain: 'staffingfuture.com',
  },
  {
    name: 'LandTech',
    domain: 'land.tech',
  },
  {
    name: 'eBridge Connections',
    domain: 'ebridgeconnections.com',
  },
  {
    name: 'Brightmark Inc.',
    domain: 'brightmark.ca',
  },
  {
    name: 'Shopgram.io',
    domain: 'shopgram.io',
  },
  {
    name: 'The Business Labs Inc',
    domain: 'thebusinesslabs.com',
  },
  {
    name: 'Quantum Workplace',
    domain: 'quantumworkplace.com',
  },
  {
    name: 'Trex Pi, SIA',
    domain: 'trexpi.eu',
  },
  {
    name: 'Drip',
    domain: 'drip.com',
  },
  {
    name: 'Prehook',
    domain: 'prehook.com',
  },
  {
    name: 'Cloud Connex',
    domain: 'cloudconnex.co',
  },
  {
    name: 'Mogli',
    domain: 'mogli.com',
  },
  {
    name: 'pomocado.com',
    domain: 'pomocado.com',
  },
  {
    name: 'levAR',
    domain: 'levar.io',
  },
  {
    name: 'Wecre8websites',
    domain: 'wecre8websites.com',
  },
  {
    name: 'Trulioo',
    domain: 'trulioo.com',
  },
  {
    name: 'Accountfully',
    domain: 'accountfully.com',
  },
  {
    name: 'Kythera',
    domain: 'kytheralabs.com',
  },
  {
    name: 'HooYu',
    domain: 'hooyu.com',
  },
  {
    name: 'Harvest Revenue Group, LLC',
    domain: 'hrg-audit.com',
  },
  {
    name: 'Vertical IQ',
    domain: 'verticaliq.com',
  },
  {
    name: 'Zowie',
    domain: 'getzowie.com',
  },
  {
    name: 'Tufin',
    domain: 'tufin.com',
  },
  {
    name: 'INSLY',
    domain: 'insly.com',
  },
  {
    name: 'Rystad Energy',
    domain: 'rystadenergy.com',
  },
  {
    name: 'Shoobx',
    domain: 'shoobx.com',
  },
  {
    name: 'Peach',
    domain: 'peachvideo.com',
  },
  {
    name: 'Dreamday',
    domain: 'dreamday.la',
  },
  {
    name: 'AJS Digital Group',
    domain: 'ajsdigitalgroup.com',
  },
  {
    name: 'Paiger',
    domain: 'paiger.co',
  },
  {
    name: 'Huemor',
    domain: 'huemor.rocks',
  },
  {
    name: 'Remarkable Commerce',
    domain: 'remarkable.net',
  },
  {
    name: 'Expedite Commerce',
    domain: 'expeditecommerce.com',
  },
  {
    name: 'Get Connexions',
    domain: 'getconnexions.com',
  },
  {
    name: 'Forum One',
    domain: 'forumone.com',
  },
  {
    name: 'TOWA Software',
    domain: 'towasoftware.com',
  },
  {
    name: 'ikaros',
    domain: 'ikaros.io',
  },
  {
    name: 'Litify',
    domain: 'litify.com',
  },
  {
    name: 'Saas Advisor - Marketing Technologists',
    domain: 'saas-advisor.com',
  },
  {
    name: 'EveryAction',
    domain: 'everyaction.com',
  },
  {
    name: 'TOOTRiS Child Care On-Demand',
    domain: 'tootris.com',
  },
  {
    name: 'MH Digital Group',
    domain: 'mhdigitalgroup.com',
  },
  {
    name: 'Hypergolic',
    domain: 'hypergolic.co.uk',
  },
  {
    name: 'Rewind',
    domain: 'rewind.com',
  },
  {
    name: 'BugHerd',
    domain: 'bugherd.com',
  },
  {
    name: 'Descartes Labs',
    domain: 'descarteslabs.com',
  },
  {
    name: 'Cloud for Good',
    domain: 'cloud4good.com',
  },
  {
    name: 'Donorbox',
    domain: 'donorbox.org',
  },
  {
    name: 'Melt Digital',
    domain: 'meltdigital.com',
  },
  {
    name: 'RightBound',
    domain: 'rightbound.com',
  },
  {
    name: 'Megainsight',
    domain: 'itmegainsight.com',
  },
  {
    name: 'Valocity Digital',
    domain: 'valocitydigital.com',
  },
  {
    name: 'Third Octet',
    domain: 'thirdoctet.com',
  },
  {
    name: 'Prenfit',
    domain: 'prenfit.com',
  },
  {
    name: 'InfoSum',
    domain: 'infosum.com',
  },
  {
    name: 'Atomic Maps',
    domain: 'atomicmaps.io',
  },
  {
    name: 'The Guestbook',
    domain: 'theguestbook.com',
  },
  {
    name: 'Adway AB',
    domain: 'adway.ai',
  },
  {
    name: 'Precisely',
    domain: 'precisely.com',
  },
  {
    name: 'NoiseAware',
    domain: 'noiseaware.com',
  },
  {
    name: 'flmcat',
    domain: 'flmcat.com',
  },
  {
    name: 'Movable Ink',
    domain: 'movableink.com',
  },
  {
    name: 'Endear',
    domain: 'endearhq.com',
  },
  {
    name: 'Classy Llama',
    domain: 'classyllama.com',
  },
  {
    name: 'Kyriba',
    domain: 'kyriba.com',
  },
  {
    name: 'West Monroe',
    domain: 'westmonroe.com',
  },
  {
    name: 'Deel',
    domain: 'letsdeel.com',
  },
  {
    name: 'Near',
    domain: 'near.co',
  },
  {
    name: 'PayPal',
    domain: 'paypal.com',
  },
  {
    name: 'Capitalize Data Analytics',
    domain: 'capitalizeconsulting.com',
  },
  {
    name: 'Beround',
    domain: 'beround.nl',
  },
  {
    name: 'hengam.io',
    domain: 'hengam.io',
  },
  {
    name: 'Visualsoft',
    domain: 'visualsoft.co.uk',
  },
  {
    name: 'archie.io',
    domain: 'archie.io',
  },
  {
    name: 'Talent Pop',
    domain: 'talentpop.co',
  },
  {
    name: 'Lake One ®',
    domain: 'lakeonedigital.com',
  },
  {
    name: 'BeyondTrust',
    domain: 'beyondtrust.com',
  },
  {
    name: 'Poq',
    domain: 'poqcommerce.com',
  },
  {
    name: 'ButterCMS',
    domain: 'buttercms.com',
  },
  {
    name: 'Wizzy.ai',
    domain: 'wizzy.ai',
  },
  {
    name: 'Orum',
    domain: 'orum.io',
  },
  {
    name: 'STADIUM',
    domain: 'bystadium.com',
  },
  {
    name: 'Socialsuite',
    domain: 'socialsuitehq.com',
  },
  {
    name: 'Podchaser',
    domain: 'podchaser.com',
  },
  {
    name: 'Bounteous',
    domain: 'bounteous.com',
  },
  {
    name: 'Redwood Twins',
    domain: 'redwoodtwins.com',
  },
  {
    name: 'Hope Leigh Marketing Group',
    domain: 'hopeleighmarketing.com',
  },
  {
    name: 'Fygi Technologies',
    domain: 'fygi.io',
  },
  {
    name: 'PRECISIONxtract',
    domain: 'precisionxtract.com',
  },
  {
    name: 'The Net Effect',
    domain: 'theneteffect.ca',
  },
  {
    name: 'Gibraltar Solutions',
    domain: 'gibraltarsolutions.com',
  },
  {
    name: 'InCheck',
    domain: 'inchecksolutions.com',
  },
  {
    name: 'Keepeek',
    domain: 'keepeek.com',
  },
  {
    name: 'Gameball',
    domain: 'gameball.co',
  },
  {
    name: 'NARD',
    domain: 'nard.no',
  },
  {
    name: 'StackAdapt',
    domain: 'stackadapt.com',
  },
  {
    name: 'ViralSweep',
    domain: 'viralsweep.com',
  },
  {
    name: 'SiteSource',
    domain: 'site-source.com',
  },
  {
    name: 'Veryable',
    domain: 'veryableops.com',
  },
  {
    name: 'Ottit',
    domain: 'ottit.com',
  },
  {
    name: 'Aloncorp',
    domain: 'alonbartur.com',
  },
  {
    name: 'Dave Yoho Associates',
    domain: 'daveyoho.com',
  },
  {
    name: 'UserEvidence,',
    domain: 'userevidence.com',
  },
  {
    name: 'ZeroFOX',
    domain: 'zerofox.com',
  },
  {
    name: 'gloww Video',
    domain: 'gloww.com',
  },
  {
    name: 'Nuvei',
    domain: 'nuvei.com',
  },
  {
    name: 'feibisi',
    domain: 'feibisi.com',
  },
  {
    name: 'Ternary Inc.',
    domain: 'ternary.app',
  },
  {
    name: 'Certn',
    domain: 'certn.co',
  },
  {
    name: 'Model Match, Inc',
    domain: 'modelmatch.com',
  },
  {
    name: 'Economic Change',
    domain: 'economicchange.co.uk',
  },
  {
    name: 'Touchplan',
    domain: 'touchplan.io',
  },
  {
    name: 'Hylant',
    domain: 'hylant.com',
  },
  {
    name: 'My Credit Guy',
    domain: 'mycreditguy.com',
  },
  {
    name: 'Measured',
    domain: 'measured.com',
  },
  {
    name: 'Unleashed Technologies',
    domain: 'unleashed-technologies.com',
  },
  {
    name: 'Claremont',
    domain: 'claremont.co.uk',
  },
  {
    name: 'Zebra Associates',
    domain: 'zebra.associates',
  },
  {
    name: 'DevFacto Technologies',
    domain: 'devfacto.com',
  },
  {
    name: 'boodleAI',
    domain: 'boodle.ai',
  },
  {
    name: 'ERM Office',
    domain: 'ermoffice.com',
  },
  {
    name: 'self',
    domain: 'abv.bg',
  },
  {
    name: 'StratusGreen',
    domain: 'stratusgreen.com',
  },
  {
    name: 'inBeat',
    domain: 'inbeat.co',
  },
  {
    name: 'Vardot',
    domain: 'vardot.com',
  },
  {
    name: 'AMZ Prep',
    domain: 'amzprep.com',
  },
  {
    name: 'Sears Home Services',
    domain: 'searshomeservices.com',
  },
  {
    name: 'Arbour Group',
    domain: 'arbourgroup.com',
  },
  {
    name: 'Easygenerator',
    domain: 'easygenerator.com',
  },
  {
    name: 'UJET',
    domain: 'ujet.cx',
  },
  {
    name: 'Tydo',
    domain: 'tydo.com',
  },
  {
    name: 'Meridian IT',
    domain: 'themeridian.com',
  },
  {
    name: 'Mode',
    domain: 'mode.com',
  },
  {
    name: 'Dialog Group',
    domain: 'dialoggroup.eu',
  },
  {
    name: 'HABITANT',
    domain: 'habitant.es',
  },
  {
    name: 'Humanity Incorporated',
    domain: 'humanityinc.asia',
  },
  {
    name: 'Opensense',
    domain: 'opensense.com',
  },
  {
    name: 'Chargeback',
    domain: 'chargeback.com',
  },
  {
    name: 'Repurpose House',
    domain: 'repurposehouse.com',
  },
  {
    name: 'HiredScore',
    domain: 'hiredscore.com',
  },
  {
    name: 'Hustler Marketing',
    domain: 'hustlermarketing.com',
  },
  {
    name: 'Credential Check Corporation',
    domain: 'credentialcheck.com',
  },
  {
    name: 'SkillSurvey, Inc',
    domain: 'skillsurvey.com',
  },
  {
    name: 'J Raja & Company',
    domain: 'jraja.co.uk',
  },
  {
    name: 'Channel Key',
    domain: 'channelkey.com',
  },
  {
    name: 'Evoque Data Center Solutions',
    domain: 'evoquedcs.com',
  },
  {
    name: 'Redline Minds, LLC.',
    domain: 'redlineminds.com',
  },
  {
    name: 'Couchbase',
    domain: 'couchbase.com',
  },
  {
    name: 'Scout Talent Group',
    domain: 'scouttalenthq.com',
  },
  {
    name: 'Starshipit',
    domain: 'starshipit.com',
  },
  {
    name: 'Joget',
    domain: 'joget.com',
  },
  {
    name: 'Osano',
    domain: 'osano.com',
  },
  {
    name: 'VTS',
    domain: 'vts.com',
  },
  {
    name: 'Zipline',
    domain: 'getzipline.com',
  },
  {
    name: 'Adjust',
    domain: 'adjust.com',
  },
  {
    name: 'Factored Quality',
    domain: 'factoredquality.com',
  },
  {
    name: 'Avrogan AB',
    domain: 'avrogan.com',
  },
  {
    name: 'Base',
    domain: 'base.ai',
  },
  {
    name: 'Kyvio',
    domain: 'kyvio.com',
  },
  {
    name: 'AccuLynx',
    domain: 'acculynx.com',
  },
  {
    name: 'Policygenius',
    domain: 'policygenius.com',
  },
  {
    name: 'CharpStrat',
    domain: 'charpstrat.com',
  },
  {
    name: 'Standard Care, Inc.',
    domain: 'getstandard.care',
  },
  {
    name: 'Tadpull',
    domain: 'tadpull.com',
  },
  {
    name: 'Anglo-Suisse Capital',
    domain: 'anglo-suisse.com',
  },
  {
    name: 'Glew.io',
    domain: 'glew.io',
  },
  {
    name: 'Alma',
    domain: 'getalma.eu',
  },
  {
    name: 'Built',
    domain: 'getbuilt.com',
  },
  {
    name: 'VisualizeROI',
    domain: 'visualizeroi.com',
  },
  {
    name: 'Permalight',
    domain: 'permalightnyc.com',
  },
  {
    name: 'heybooster',
    domain: 'heybooster.ai',
  },
  {
    name: 'EPIC Loan Systems',
    domain: 'epicloansystems.com',
  },
  {
    name: 'CloudTalk',
    domain: 'cloudtalk.io',
  },
  {
    name: 'Proventic ApS',
    domain: 'proventic.dk',
  },
  {
    name: 'Calabrio',
    domain: 'calabrio.com',
  },
  {
    name: 'SJ Innovation LLC',
    domain: 'sjinnovation.com',
  },
  {
    name: 'Activity Stream',
    domain: 'activitystream.com',
  },
  {
    name: 'Ascent Consulting',
    domain: 'ascentconsults.com',
  },
  {
    name: 'Specialists Marketing Services, Inc.',
    domain: 'sms-inc.com',
  },
  {
    name: 'System Integration Solutions',
    domain: 'sysintsol.com',
  },
  {
    name: 'riskHive',
    domain: 'riskhive.com',
  },
  {
    name: 'Eaton Square',
    domain: 'eatonsq.com',
  },
  {
    name: 'Appeal Wizards',
    domain: 'appealwizards.com',
  },
  {
    name: 'SearchUnify',
    domain: 'searchunify.com',
  },
  {
    name: 'Root',
    domain: 'root.co.za',
  },
  {
    name: 'Futurestay',
    domain: 'futurestay.com',
  },
  {
    name: 'Dataminr',
    domain: 'dataminr.com',
  },
  {
    name: 'Digital Reach Agency',
    domain: 'digitalreachagency.com',
  },
  {
    name: 'Spot',
    domain: 'spot.xyz',
  },
  {
    name: 'Mosaic',
    domain: 'mosaicapp.com',
  },
  {
    name: 'Bitly',
    domain: 'bitly.com',
  },
  {
    name: 'The Armoury',
    domain: 'thearmoury.agency',
  },
  {
    name: 'Novacoast',
    domain: 'novacoast.com',
  },
  {
    name: 'Stacktics',
    domain: 'stacktics.com',
  },
  {
    name: 'The Sustainability Group',
    domain: 'sustainabilitygroup.co.uk',
  },
  {
    name: 'Matterport',
    domain: 'matterport.com',
  },
  {
    name: 'Ayla Networks',
    domain: 'aylanetworks.com',
  },
  {
    name: 'RampedUp Contact Data Solutions',
    domain: 'rampedup.io',
  },
  {
    name: 'w2 solution',
    domain: 'w2solution.com',
  },
  {
    name: 'Protegrity',
    domain: 'protegrity.com',
  },
  {
    name: 'G-Core Labs',
    domain: 'gcorelabs.com',
  },
  {
    name: 'BinaryWave',
    domain: 'binarywave.com',
  },
  {
    name: 'Prelude Solutions',
    domain: 'preludesolutions.com',
  },
  {
    name: 'The Insiders',
    domain: 'theinsidersnet.com',
  },
  {
    name: 'Berkeley Payments',
    domain: 'berkeleypayment.com',
  },
  {
    name: 'nOps',
    domain: 'nops.io',
  },
  {
    name: 'Jivox',
    domain: 'jivox.com',
  },
  {
    name: 'Icon Cloud Consulting',
    domain: 'iconcloudconsulting.com',
  },
  {
    name: 'K6 Agency',
    domain: 'k6agency.com',
  },
  {
    name: 'Meetgeek',
    domain: 'meetgeek.ai',
  },
  {
    name: 'Global HR Research',
    domain: 'ghrr.com',
  },
  {
    name: 'Synup',
    domain: 'synup.com',
  },
  {
    name: 'Convoso',
    domain: 'convoso.com',
  },
  {
    name: 'Sync.com',
    domain: 'sync.com',
  },
  {
    name: 'QueryStax',
    domain: 'querystax.com',
  },
  {
    name: 'Third and Grove',
    domain: 'thirdandgrove.com',
  },
  {
    name: 'InnoVelocity',
    domain: 'innovelocity.com',
  },
  {
    name: 'LINKTHINKS SAPI DE CV',
    domain: 'linkthinks.com',
  },
  {
    name: 'WebFM',
    domain: 'webfm.net',
  },
  {
    name: 'Uprise Digital',
    domain: 'uprise.co.nz',
  },
  {
    name: 'AddSearch',
    domain: 'addsearch.com',
  },
  {
    name: 'Noibu',
    domain: 'noibu.com',
  },
  {
    name: 'Hitech Engineering Services',
    domain: 'hitechengineeringservices.com',
  },
  {
    name: 'Trucker Path',
    domain: 'truckerpath.com',
  },
  {
    name: 'Appficiency',
    domain: 'appficiency.com',
  },
  {
    name: 'LiveHire',
    domain: 'livehire.com',
  },
  {
    name: 'NuPay for business',
    domain: 'blog.nupaybusiness.com.br',
  },
  {
    name: 'T-Mobile',
    domain: 't-mobile.com',
  },
  {
    name: 'Optibus',
    domain: 'optibus.com',
  },
  {
    name: 'VideoFresh',
    domain: 'videofresh.co',
  },
  {
    name: 'IdealSpot',
    domain: 'idealspot.com',
  },
  {
    name: 'Elephant Room',
    domain: 'elephantroom.com.au',
  },
  {
    name: 'Onix',
    domain: 'onixnet.com',
  },
  {
    name: 'Sinergyz',
    domain: 'sinergyz.com',
  },
  {
    name: 'Managed Language',
    domain: 'managed-language.com',
  },
  {
    name: 'Justt',
    domain: 'justt.ai',
  },
  {
    name: 'Obo Inc.',
    domain: 'obo.pm',
  },
  {
    name: 'Docmation',
    domain: 'docmation.com',
  },
  {
    name: 'Bleckmann',
    domain: 'bleckmann.com',
  },
  {
    name: 'E-Motive Online',
    domain: 'e-motiveonline.com',
  },
  {
    name: 'COTA Healthcare',
    domain: 'cotahealthcare.com',
  },
  {
    name: 'Splitit',
    domain: 'splitit.com',
  },
  {
    name: 'Reason Automation',
    domain: 'reasonautomation.com',
  },
  {
    name: 'Hire Horatio',
    domain: 'hirehoratio.com',
  },
  {
    name: 'Programmatic Mechanics',
    domain: 'progmechs.com',
  },
  {
    name: 'Pando Corp',
    domain: 'pando.ai',
  },
  {
    name: 'Construction Industry Resources',
    domain: 'ciranalytics.com',
  },
  {
    name: 'Bynder',
    domain: 'bynder.com',
  },
  {
    name: 'Stella Connect',
    domain: 'stellaconnect.io',
  },
  {
    name: 'AscendTMS',
    domain: 'thefreetms.com',
  },
  {
    name: 'Yooz',
    domain: 'getyooz.com',
  },
  {
    name: 'NeuraFlash',
    domain: 'neuraflash.com',
  },
  {
    name: 'Purechannels',
    domain: 'purechannels.com',
  },
  {
    name: 'JMW Digital',
    domain: 'jmw-digital.co.uk',
  },
  {
    name: 'Pioneer Management Consulting',
    domain: 'pioneermanagementconsulting.com',
  },
  {
    name: 'Westmount Solutions',
    domain: 'westmount.solutions',
  },
  {
    name: 'SkilledPeople',
    domain: 'skilledpeople.se',
  },
  {
    name: 'UPP Global Technology JSC',
    domain: 'upp-technology.com',
  },
  {
    name: 'supermelon inc',
    domain: 'supermelon.com',
  },
  {
    name: 'Payfit',
    domain: 'payfit.com',
  },
  {
    name: 'Spirion',
    domain: 'spirion.com',
  },
  {
    name: 'Bazaarvoice',
    domain: 'bazaarvoice.com',
  },
  {
    name: 'NetLine',
    domain: 'netline.com',
  },
  {
    name: 'Genesis Systems Corporation',
    domain: 'buygenesis.com',
  },
  {
    name: 'MotionPoint',
    domain: 'motionpoint.com',
  },
  {
    name: 'Qonnectd Ltd',
    domain: 'qonnectd.com',
  },
  {
    name: 'Barrel',
    domain: 'barrelny.com',
  },
  {
    name: 'SaaSPartners',
    domain: 'saaspartnergtm.com',
  },
  {
    name: 'eSSENTIAL Accessibility',
    domain: 'essentialaccessibility.com',
  },
  {
    name: 'Red Pill Analytics',
    domain: 'redpillanalytics.com',
  },
  {
    name: 'Ownr',
    domain: 'ownr.co',
  },
  {
    name: 'Spryng BV',
    domain: 'spryng.nl',
  },
  {
    name: 'Maze',
    domain: 'mymaze.com',
  },
  {
    name: 'Boostpoint',
    domain: 'boostpoint.com',
  },
  {
    name: 'Btwn',
    domain: 'btwnapp.us',
  },
  {
    name: 'Brierley+Partners',
    domain: 'brierley.com',
  },
  {
    name: 'COVIDIX Healthcare',
    domain: 'covidixhealthcare.com',
  },
  {
    name: 'FreightPOP',
    domain: 'freightpop.com',
  },
  {
    name: 'Certainly (FKA BotXO.ai)',
    domain: 'certainly.io',
  },
  {
    name: 'Saara Inc',
    domain: 'saara.io',
  },
  {
    name: 'Rev.Com',
    domain: 'rev.com',
  },
  {
    name: 'Silverbean',
    domain: 'silverbean.com',
  },
  {
    name: 'Smile.io',
    domain: 'smile.io',
  },
  {
    name: 'EcoCart Sciences, Inc.',
    domain: 'ecocart.io',
  },
  {
    name: 'Flxpoint',
    domain: 'flxpoint.com',
  },
  {
    name: 'Selworthy',
    domain: 'selworthy.com',
  },
  {
    name: 'Silvrr',
    domain: 'silvrr.com',
  },
  {
    name: 'CKSource',
    domain: 'ckeditor.com',
  },
  {
    name: 'Altudo',
    domain: 'altudo.co',
  },
  {
    name: 'BuildBuddy',
    domain: 'buildbuddy.io',
  },
  {
    name: 'Idomoo',
    domain: 'idomoo.com',
  },
  {
    name: 'UBDS IT Consulting Ltd',
    domain: 'ubds.com',
  },
  {
    name: 'Tim Becker Consulting',
    domain: 'timbeckerconsulting.com',
  },
  {
    name: 'Stackscale',
    domain: 'stackscale.com',
  },
  {
    name: 'Tasktop',
    domain: 'tasktop.com',
  },
  {
    name: 'Redbox Digital',
    domain: 'redboxdigital.com',
  },
  {
    name: 'Västkustbolaget AB',
    domain: 'vkb.se',
  },
  {
    name: 'GearsCRM',
    domain: 'gearscrm.com',
  },
  {
    name: '5S Technologies',
    domain: '5stechnologies.com',
  },
  {
    name: 'Xref',
    domain: 'xref.com',
  },
  {
    name: 'Rittman Analytics',
    domain: 'rittmananalytics.com',
  },
  {
    name: 'Design Direct UK',
    domain: 'designdirect.io',
  },
  {
    name: 'boostroas',
    domain: 'boostroas.com',
  },
  {
    name: 'SearchKings',
    domain: 'searchkings.com',
  },
  {
    name: 'Kanerika Inc',
    domain: 'kanerika.com',
  },
  {
    name: 'VG Project Group Pty Ltd',
    domain: 'vgprojectgroup.com.au',
  },
  {
    name: 'Logical Position',
    domain: 'logicalposition.com',
  },
  {
    name: '180 Consulting',
    domain: '180-consulting.com',
  },
  {
    name: 'Onna',
    domain: 'onna.com',
  },
  {
    name: 'Viaduct Generation',
    domain: 'viaductgen.com',
  },
  {
    name: 'QL2 Software',
    domain: 'ql2.com',
  },
  {
    name: 'Ergatta',
    domain: 'ergatta.com',
  },
  {
    name: 'CX Effect',
    domain: 'cxeffect.com',
  },
  {
    name: 'Switchboard',
    domain: 'switchboard.cc',
  },
  {
    name: 'Abel Solutions LLC',
    domain: 'abelsolutions.com',
  },
  {
    name: 'Collibra',
    domain: 'collibra.com',
  },
  {
    name: 'Famer',
    domain: 'famer.us',
  },
  {
    name: 'Multiplica',
    domain: 'multiplica.com',
  },
  {
    name: 'Webinfinity',
    domain: 'webinfinity.com',
  },
  {
    name: 'Equalture',
    domain: 'equalture.com',
  },
  {
    name: 'SharpSpring',
    domain: 'sharpspring.com',
  },
  {
    name: 'Angel garbriel sanchez',
    domain: 'angelgabrielsanchez.com',
  },
  {
    name: 'Color Vivo Internet',
    domain: 'colorvivo.com',
  },
  {
    name: 'Sourcr',
    domain: 'sourcr.com',
  },
  {
    name: 'Fospha Marketing',
    domain: 'fospha.com',
  },
  {
    name: 'Atomic Smash',
    domain: 'atomicsmash.co.uk',
  },
  {
    name: 'Hurix Digital',
    domain: 'hurix.com',
  },
  {
    name: 'Kihbba',
    domain: 'kihbba.com',
  },
  {
    name: 'LeadTime',
    domain: 'getleadtime.com',
  },
  {
    name: 'Nexa',
    domain: 'nexa.com',
  },
  {
    name: 'Taggbox',
    domain: 'taggbox.com',
  },
  {
    name: 'fjorge',
    domain: 'fjorgedigital.com',
  },
  {
    name: 'CometChat',
    domain: 'cometchat.com',
  },
  {
    name: 'Soccer Girl Goals',
    domain: 'soccergirlgoals.com',
  },
  {
    name: 'ITWS EOOD',
    domain: 'itws.eu',
  },
  {
    name: 'Neudesic',
    domain: 'neudesic.com',
  },
  {
    name: 'Lead Forensics',
    domain: 'leadforensics.com',
  },
  {
    name: 'Strapi',
    domain: 'strapi.io',
  },
  {
    name: 'Funnel',
    domain: 'funnelleasing.com',
  },
  {
    name: 'ContentQuo',
    domain: 'contentquo.com',
  },
  {
    name: 'Halon',
    domain: 'halon.io',
  },
  {
    name: 'Applaud',
    domain: 'applaudhr.com',
  },
  {
    name: 'CybXSecurity',
    domain: 'cybxsecurity.com',
  },
  {
    name: 'Brazen Group',
    domain: 'brazengroup.com',
  },
  {
    name: 'Indigo Cultural Consulting Limited',
    domain: 'indigo-ltd.com',
  },
  {
    name: 'Vidyard',
    domain: 'vidyard.com',
  },
  {
    name: 'ESCR Creative Studios',
    domain: 'escrcreativestudios.co.uk',
  },
  {
    name: 'preHIRED',
    domain: 'prehired.io',
  },
  {
    name: 'FunnelAmplified',
    domain: 'funnelamplified.com',
  },
  {
    name: 'Sense Talent Labs, Inc',
    domain: 'sensehq.com',
  },
  {
    name: 'CartHook',
    domain: 'carthook.com',
  },
  {
    name: 'ThoughtSpot',
    domain: 'thoughtspot.com',
  },
  {
    name: 'Cumul.io',
    domain: 'cumul.io',
  },
  {
    name: 'PLINX',
    domain: 'plinx.io',
  },
  {
    name: 'Tickets for Good',
    domain: 'ticketsforgood.co.uk',
  },
  {
    name: 'Inkit',
    domain: 'inkit.com',
  },
  {
    name: 'Caroo',
    domain: 'caroo.com',
  },
  {
    name: 'Segmint',
    domain: 'segmint.com',
  },
  {
    name: 'Eboost Consulting',
    domain: 'eboostconsulting.com',
  },
  {
    name: 'FARO Technologies',
    domain: 'faro.com',
  },
  {
    name: 'SullivanLuallin Group',
    domain: 'sullivanluallingroup.com',
  },
  {
    name: 'homeyou',
    domain: 'homeyou.com',
  },
  {
    name: 'Vidyo',
    domain: 'vidyo.com',
  },
  {
    name: 'Alumio',
    domain: 'alumio.com',
  },
  {
    name: 'C2FO',
    domain: 'c2fo.com',
  },
  {
    name: 'Fomo',
    domain: 'fomo.com',
  },
  {
    name: 'Emakina',
    domain: 'emakina.com',
  },
  {
    name: 'Source Callé',
    domain: 'sourcecalle.com',
  },
  {
    name: 'Capsule',
    domain: 'capsulecrm.com',
  },
  {
    name: 'Semetrix Group',
    domain: 'semetrix.digital',
  },
  {
    name: 'Motimate',
    domain: 'motimateapp.com',
  },
  {
    name: 'Earnd',
    domain: 'earnd.com',
  },
  {
    name: 'Snap Recordings',
    domain: 'snaprecordings.com',
  },
  {
    name: 'Unbabel',
    domain: 'unbabel.com',
  },
  {
    name: 'House of Kaizen',
    domain: 'houseofkaizen.com',
  },
  {
    name: 'Schedule Engine',
    domain: 'scheduleengine.com',
  },
  {
    name: 'Helpshift',
    domain: 'helpshift.com',
  },
  {
    name: 'Eventige Media Group',
    domain: 'eventige.com',
  },
  {
    name: 'Exavalu',
    domain: 'exavalu.com',
  },
  {
    name: 'Appinium',
    domain: 'appinium.com',
  },
  {
    name: 'Brand3',
    domain: 'brand3.net',
  },
  {
    name: 'StoreAutomator',
    domain: 'storeautomator.com',
  },
  {
    name: 'Dixon Schwabl',
    domain: 'dixonschwabl.com',
  },
  {
    name: 'Caspio',
    domain: 'caspio.com',
  },
  {
    name: 'HOVER',
    domain: 'hover.to',
  },
  {
    name: 'FollowAnalytics',
    domain: 'followanalytics.com',
  },
  {
    name: 'Smartly.io',
    domain: 'smartly.io',
  },
  {
    name: 'TreviPay',
    domain: 'trevipay.com',
  },
  {
    name: 'AMX',
    domain: 'agilemanagement.eu',
  },
  {
    name: 'Linxup',
    domain: 'linxup.com',
  },
  {
    name: 'Britive',
    domain: 'britive.com',
  },
  {
    name: 'BlueBox Systems',
    domain: 'bluebox-systems.com',
  },
  {
    name: 'Empyrean',
    domain: 'goempyrean.com',
  },
  {
    name: 'Vokal',
    domain: 'vokal.io',
  },
  {
    name: 'OneRail',
    domain: 'onerail.io',
  },
  {
    name: 'Boosting Potentials / Partner of Smartpoint',
    domain: 'boosting-potentials.eu',
  },
  {
    name: 'E2X',
    domain: 'e2x.com',
  },
  {
    name: 'xponentix',
    domain: 'xponentix.tech',
  },
  {
    name: 'Qwilr',
    domain: 'qwilr.com',
  },
  {
    name: 'Alchemy Worx',
    domain: 'alchemyworx.com',
  },
  {
    name: 'Retain.me',
    domain: 'retain.me',
  },
  {
    name: 'AGC of California',
    domain: 'agc-ca.org',
  },
  {
    name: 'Evolta',
    domain: 'evolta.com',
  },
  {
    name: 'ProcurePro',
    domain: 'procurepro.co',
  },
  {
    name: 'Leadcamp',
    domain: 'leadcamp.io',
  },
  {
    name: 'Foundation Software',
    domain: 'foundationsoft.com',
  },
  {
    name: 'Datometry',
    domain: 'datometry.com',
  },
  {
    name: 'Coldsmoke Creative',
    domain: 'coldsmoke.co',
  },
  {
    name: 'S3 Partners',
    domain: 's3partners.com',
  },
  {
    name: 'Corporate Visions',
    domain: 'corporatevisions.com',
  },
  {
    name: 'Scratchpad',
    domain: 'scratchpad.com',
  },
  {
    name: 'Peoplebox',
    domain: 'peoplebox.ai',
  },
  {
    name: 'mediarithmics',
    domain: 'mediarithmics.com',
  },
  {
    name: 'Brandwatch',
    domain: 'brandwatch.com',
  },
  {
    name: 'BAC Enterprises, LLC',
    domain: 'bencornett.com',
  },
  {
    name: 'Ecosystem Latin America',
    domain: 'ecosystem-latinamerica.com',
  },
  {
    name: 'Concrete',
    domain: 'concreteplatform.com',
  },
  {
    name: 'Ramco Systems',
    domain: 'ramco.com',
  },
  {
    name: 'Coiled',
    domain: 'coiled.io',
  },
  {
    name: 'DISQO',
    domain: 'disqo.com',
  },
  {
    name: 'Igenvity',
    domain: 'ingevity.com',
  },
  {
    name: 'Tropos.io',
    domain: 'tropos.io',
  },
  {
    name: 'IoT Marketing',
    domain: 'iotmktg.com',
  },
  {
    name: 'Stellar',
    domain: 'stellarreviews.com',
  },
  {
    name: 'Neo4j',
    domain: 'neo4j.com',
  },
  {
    name: 'TraceX Tech',
    domain: 'tracextech.com',
  },
  {
    name: '10up',
    domain: '10up.com',
  },
  {
    name: 'Swanky',
    domain: 'swankyagency.com',
  },
  {
    name: 'Unreal Digital Group',
    domain: 'unrealdigitalgroup.com',
  },
  {
    name: 'RevUp Sales',
    domain: 'revup90.com',
  },
  {
    name: 'Tako Agency',
    domain: 'takoagency.com',
  },
  {
    name: 'Evidnt.Co',
    domain: 'evidnt.co',
  },
  {
    name: 'Velocity HCM Consulting Group, LLC',
    domain: 'velocityhcm.com',
  },
  {
    name: 'Crozdesk Ltd',
    domain: 'crozdesk.com',
  },
  {
    name: 'TicketCo',
    domain: 'start.ticketco.events',
  },
  {
    name: 'Taxamo',
    domain: 'taxamo.com',
  },
  {
    name: 'Stuzo',
    domain: 'stuzo.com',
  },
  {
    name: 'Heyday AI',
    domain: 'heyday.ai',
  },
  {
    name: 'Prisync',
    domain: 'prisync.com',
  },
  {
    name: 'Verizon',
    domain: 'verizon.com',
  },
  {
    name: 'Optimal Strategix Group',
    domain: 'osganalytics.com',
  },
  {
    name: 'Varsgen',
    domain: 'varsgen.com',
  },
  {
    name: 'Nograles Fortifications',
    domain: 'nogiefortifications.com',
  },
  {
    name: 'CLEARGOALS',
    domain: 'cleargoals.com',
  },
  {
    name: 'Vouris',
    domain: 'vouris.com',
  },
  {
    name: 'Ematic Solutions',
    domain: 'ematicsolutions.com',
  },
  {
    name: 'Maropost',
    domain: 'maropost.com',
  },
  {
    name: 'DSers Official',
    domain: 'dsers.com',
  },
  {
    name: 'Guidance',
    domain: 'guidance.com',
  },
  {
    name: 'Swell',
    domain: 'swell.is',
  },
  {
    name: 'Tramazing',
    domain: 'tramazing.com',
  },
  {
    name: 'Autorek',
    domain: 'autorek.com',
  },
  {
    name: 'Ride or Dial',
    domain: 'rideordial.com',
  },
  {
    name: 'goVirtualOffice',
    domain: 'govirtualoffice.com',
  },
  {
    name: 'NiftyImages',
    domain: 'niftyimages.com',
  },
  {
    name: 'GetEmails',
    domain: 'getemails.com',
  },
  {
    name: 'DeeperThanBlue',
    domain: 'deeperthanblue.co.uk',
  },
  {
    name: 'Eupnea',
    domain: 'eupnea.co.uk',
  },
  {
    name: 'Johns Hopkins Center for Communication Program',
    domain: 'ccp.jhu.edu',
  },
  {
    name: 'Accenture',
    domain: 'accenture.com',
  },
  {
    name: 'Alaiko',
    domain: 'alaiko.com',
  },
  {
    name: 'Mollie',
    domain: 'mollie.com',
  },
  {
    name: 'Patreon',
    domain: 'patreon.com',
  },
  {
    name: 'Ferroque Systems',
    domain: 'ferroquesystems.com',
  },
  {
    name: 'Goldcast',
    domain: 'goldcast.io',
  },
  {
    name: 'PebblePost',
    domain: 'pebblepost.com',
  },
  {
    name: 'Zephr',
    domain: 'zephr.com',
  },
  {
    name: 'Pear Commerce',
    domain: 'pearcommerce.com',
  },
  {
    name: 'Gopuff.com',
    domain: 'gopuff.com',
  },
  {
    name: 'Nograles Siege Towers',
    domain: 'nogiesiegetowers.com',
  },
  {
    name: 'Guru',
    domain: 'getguru.com',
  },
  {
    name: 'The Web Guys',
    domain: 'thewebguys.co.nz',
  },
  {
    name: 'One Click Contractor',
    domain: 'oneclickcontractor.com',
  },
  {
    name: 'areto consulting gmbh',
    domain: 'areto.de',
  },
  {
    name: 'ProjecTools',
    domain: 'projectools.com',
  },
  {
    name: 'Pivot Technology Services',
    domain: 'pivotts.com',
  },
  {
    name: 'StratoDem Analytics',
    domain: 'stratodem.com',
  },
  {
    name: 'Okendo',
    domain: 'okendo.io',
  },
  {
    name: 'Albacross',
    domain: 'albacross.com',
  },
  {
    name: 'Ventorq',
    domain: 'ventorq.com',
  },
  {
    name: 'Liferay',
    domain: 'liferay.com',
  },
  {
    name: 'Overflow',
    domain: 'overflow.co',
  },
  {
    name: 'Pushwoosh',
    domain: 'pushwoosh.com',
  },
  {
    name: 'Veezoo',
    domain: 'veezoo.com',
  },
  {
    name: 'nClouds',
    domain: 'nclouds.com',
  },
  {
    name: 'Saleslift Studio',
    domain: 'salesliftstudio.com',
  },
  {
    name: 'DataBank IMX',
    domain: 'databankimx.com',
  },
  {
    name: 'easyCapital',
    domain: 'easycapital.financial',
  },
  {
    name: 'Colorcinch',
    domain: 'cartoonize.net',
  },
  {
    name: 'Talentry',
    domain: 'talentry.com',
  },
  {
    name: 'Adapty',
    domain: 'adapty.io',
  },
  {
    name: 'Shero Commerce',
    domain: 'sherocommerce.com',
  },
  {
    name: 'MOI',
    domain: 'moi-global.com',
  },
  {
    name: 'Wizeline',
    domain: 'wizeline.com',
  },
  {
    name: 'innov8law',
    domain: 'innov8law.com',
  },
  {
    name: 'Poltio',
    domain: 'poltio.com',
  },
  {
    name: 'Majestyk Apps',
    domain: 'majestykapps.com',
  },
  {
    name: 'Carahsoft',
    domain: 'carahsoft.com',
  },
  {
    name: 'Code Computerlove',
    domain: 'codecomputerlove.com',
  },
  {
    name: 'TechSee',
    domain: 'techsee.me',
  },
  {
    name: 'MERU Consulting',
    domain: 'wearemeru.com',
  },
  {
    name: 'Esquire Advertising',
    domain: 'esquireadvertising.com',
  },
  {
    name: 'IBM',
    domain: 'ibm.com',
  },
  {
    name: 'Cemantica',
    domain: 'cemantica.com',
  },
  {
    name: 'Octopus-ITSM.com',
    domain: 'itsm.com',
  },
  {
    name: 'Adfinis AG',
    domain: 'adfinis.com',
  },
  {
    name: 'Breama Inc.',
    domain: 'breama.com',
  },
  {
    name: 'CMc Marketing Inc',
    domain: 'cmcmarketingchicago.com',
  },
  {
    name: 'nppsatek',
    domain: 'nppsatek.ru',
  },
  {
    name: 'T Skorman Productions',
    domain: 'tskorman.com',
  },
  {
    name: 'Rich Insight',
    domain: 'richinsight.co.uk',
  },
  {
    name: 'Teads',
    domain: 'teads.com',
  },
  {
    name: 'Divante',
    domain: 'divante.com',
  },
  {
    name: 'The New Company',
    domain: 'thenewcompany.no',
  },
  {
    name: 'NoFraud',
    domain: 'nofraud.com',
  },
  {
    name: 'Pariveda Solutions',
    domain: 'parivedasolutions.com',
  },
  {
    name: 'Tigerhall',
    domain: 'tigerhall.com',
  },
  {
    name: 'AdVon Commerce',
    domain: 'advoncommerce.com',
  },
  {
    name: 'FMSLY',
    domain: 'fmsly.agency',
  },
  {
    name: 'Pressboard',
    domain: 'pressboardmedia.com',
  },
  {
    name: 'PAAY',
    domain: 'paay.co',
  },
  {
    name: 'Printfection',
    domain: 'printfection.com',
  },
  {
    name: 'The Bot Lab',
    domain: 'thebotlab.com',
  },
  {
    name: 'Holded',
    domain: 'holded.com',
  },
  {
    name: 'Salesmsg',
    domain: 'salesmessage.com',
  },
  {
    name: 'PK Global',
    domain: 'pkglobal.com',
  },
  {
    name: 'Cobalt',
    domain: 'cobalt.io',
  },
  {
    name: 'OneBlink',
    domain: 'oneblink.io',
  },
  {
    name: 'Care.com',
    domain: 'care.com',
  },
  {
    name: 'Leadbook',
    domain: 'leadbook.com',
  },
  {
    name: 'Phonic',
    domain: 'phonic.ai',
  },
  {
    name: 'AppSmart',
    domain: 'appsmart.com',
  },
  {
    name: 'Syndigo',
    domain: 'syndigo.com',
  },
  {
    name: 'Bear Group',
    domain: 'beargroup.com',
  },
  {
    name: 'Rareview',
    domain: 'rareview.com',
  },
  {
    name: 'CircleCI',
    domain: 'circleci.com',
  },
  {
    name: 'Inpsyde',
    domain: 'inpsyde.com',
  },
  {
    name: 'AYKO',
    domain: 'ayko.com',
  },
  {
    name: 'ADASTRA',
    domain: 'adastra.digital',
  },
  {
    name: 'Netrivals',
    domain: 'netrivals.com',
  },
  {
    name: 'Avanci',
    domain: 'avanci.fr',
  },
  {
    name: 'ultimate.ai',
    domain: 'ultimate.ai',
  },
  {
    name: 'ALLSPARK INTERACTIVE INC',
    domain: 'allsparkinteractive.com',
  },
  {
    name: 'Persado',
    domain: 'persado.com',
  },
  {
    name: 'A-LIGN',
    domain: 'a-lign.com',
  },
  {
    name: 'SHOULE',
    domain: 'shoule.ca',
  },
  {
    name: 'Talkoot',
    domain: 'talkoot.com',
  },
  {
    name: 'Arishi',
    domain: 'arishi.agency',
  },
  {
    name: 'Cloudera',
    domain: 'cloudera.com',
  },
  {
    name: 'BigID',
    domain: 'bigid.com',
  },
  {
    name: 'Exemplifi',
    domain: 'exemplifi.io',
  },
  {
    name: 'Optizmo Technologies',
    domain: 'optizmo.com',
  },
  {
    name: 'Contractbook',
    domain: 'contractbook.com',
  },
  {
    name: 'Acceleration Partners',
    domain: 'accelerationpartners.com',
  },
  {
    name: 'Vertical Made Inc',
    domain: 'verticalmade.com',
  },
  {
    name: 'GlobalWebIndex',
    domain: 'globalwebindex.com',
  },
  {
    name: 'Easy Pay Direct',
    domain: 'easypaydirect.com',
  },
  {
    name: 'MineralTree',
    domain: 'mineraltree.com',
  },
  {
    name: 'Payoneer',
    domain: 'payoneer.com',
  },
  {
    name: 'AdYogi',
    domain: 'adyogi.com',
  },
  {
    name: 'Laboredge',
    domain: 'laboredge.com',
  },
  {
    name: 'Aptivada',
    domain: 'aptivada.com',
  },
  {
    name: 'MVP Launch Partners',
    domain: 'mvplaunchpartners.com',
  },
  {
    name: 'WarmUp',
    domain: 'sendwarmup.com',
  },
  {
    name: 'Fitness Revolution',
    domain: 'frnation.com',
  },
  {
    name: 'Locale',
    domain: 'locale.to',
  },
  {
    name: 'DEKSIA',
    domain: 'deksia.com',
  },
  {
    name: 'MassPay Incorporated',
    domain: 'masspay.io',
  },
  {
    name: 'Walnut',
    domain: 'gowalnut.com',
  },
  {
    name: 'Cast',
    domain: 'cast.app',
  },
  {
    name: 'Passthrough',
    domain: 'passthrough.com',
  },
  {
    name: 'Depict.ai',
    domain: 'depict.ai',
  },
  {
    name: 'Elevar',
    domain: 'getelevar.com',
  },
  {
    name: 'Awin',
    domain: 'awin.com',
  },
  {
    name: 'Arc XP',
    domain: 'arcxp.com',
  },
  {
    name: 'Pickaxe Foundry',
    domain: 'pickaxe.ai',
  },
  {
    name: 'Owens Online Ventures',
    domain: 'owensonlineventures.info',
  },
  {
    name: 'Arke',
    domain: 'arke.com',
  },
  {
    name: 'chrisad',
    domain: 'chrisad.com',
  },
  {
    name: 'R2integrated',
    domain: 'r2integrated.com',
  },
  {
    name: 'Webscale Networks',
    domain: 'webscale.com',
  },
  {
    name: 'Conserv',
    domain: 'conserv.io',
  },
  {
    name: 'ClearPivot',
    domain: 'clearpivot.com',
  },
  {
    name: 'Turnberry Solutions',
    domain: 'turnberrysolutions.com',
  },
  {
    name: 'eSkillz',
    domain: 'eskillz.com',
  },
  {
    name: 'FullContact',
    domain: 'fullcontact.com',
  },
  {
    name: 'NextRoll',
    domain: 'nextroll.com',
  },
  {
    name: 'Anixter',
    domain: 'anixter.com',
  },
  {
    name: 'Ideas2IT Technologies',
    domain: 'ideas2it.com',
  },
  {
    name: 'Alan',
    domain: 'alan.app',
  },
  {
    name: 'Cloudleaf',
    domain: 'cloudleaf.com',
  },
  {
    name: 'DataHawk',
    domain: 'datahawk.co',
  },
  {
    name: 'WedgeHR',
    domain: 'wedgehr.com',
  },
  {
    name: 'ShippingChimp',
    domain: 'shippingchimp.com',
  },
  {
    name: 'Observa',
    domain: 'observanow.com',
  },
  {
    name: 'Parsely',
    domain: 'parse.ly',
  },
  {
    name: 'JBKnowledge',
    domain: 'jbknowledge.com',
  },
  {
    name: 'Audigent',
    domain: 'audigent.com',
  },
  {
    name: 'SolomonEdwards',
    domain: 'solomonedwards.com',
  },
  {
    name: 'Coalfire',
    domain: 'coalfire.com',
  },
  {
    name: 'DocASAP',
    domain: 'docasap.com',
  },
  {
    name: 'nZero',
    domain: 'nzero.com',
  },
  {
    name: '97th Floor',
    domain: '97thfloor.com',
  },
  {
    name: 'Device42',
    domain: 'device42.com',
  },
  {
    name: 'Altvia',
    domain: 'altvia.com',
  },
  {
    name: 'Azuga',
    domain: 'azuga.com',
  },
  {
    name: 'Qualtrics',
    domain: 'qualtrics.com',
  },
  {
    name: 'Arka',
    domain: 'arka.com',
  },
  {
    name: 'Sunrise Labs',
    domain: 'sunriselabs.com',
  },
  {
    name: 'ShareLocalMedia',
    domain: 'sharelocalmedia.com',
  },
  {
    name: 'Ampd',
    domain: 'ampd.io',
  },
  {
    name: 'WireBuzz',
    domain: 'wirebuzz.com',
  },
  {
    name: 'BlackBerry',
    domain: 'blackberry.com',
  },
  {
    name: 'eConsulting',
    domain: 'econsulting.co',
  },
  {
    name: 'Wand',
    domain: 'wand.ai',
  },
  {
    name: 'Splendid Unlimited',
    domain: 'splendidunlimited.com',
  },
  {
    name: '@channelmarketplace',
    domain: 'channelmarketplace.com',
  },
  {
    name: 'Boston Consulting Group',
    domain: 'bcg.com',
  },
  {
    name: 'Splash',
    domain: 'splashthat.com',
  },
  {
    name: 'Color More Lines',
    domain: 'colormorelines.com',
  },
  {
    name: 'Auden Digital',
    domain: 'audendigital.com',
  },
  {
    name: 'Hibob',
    domain: 'hibob.com',
  },
  {
    name: 'Calashock',
    domain: 'calashock.com',
  },
  {
    name: 'Abnormal Security',
    domain: 'abnormalsecurity.com',
  },
  {
    name: 'RingLead',
    domain: 'ringlead.com',
  },
  {
    name: 'Integrate.io',
    domain: 'integrate.io',
  },
  {
    name: 'ExpertSender',
    domain: 'expertsender.com',
  },
  {
    name: 'Vercel',
    domain: 'vercel.com',
  },
  {
    name: 'Clear Capital',
    domain: 'clearcapital.com',
  },
  {
    name: '3|SHARE',
    domain: '3sharecorp.com',
  },
  {
    name: 'Debutify',
    domain: 'debutify.com',
  },
  {
    name: 'eSparkBiz Technologies Private Limited',
    domain: 'esparkinfo.com',
  },
  {
    name: 'Worthy',
    domain: 'worthy.ai',
  },
  {
    name: 'UsableNet',
    domain: 'usablenet.com',
  },
  {
    name: 'Passerelle',
    domain: 'passerelledata.com',
  },
  {
    name: 'ProximaCRO',
    domain: 'proximacro.com',
  },
  {
    name: 'O2 Web',
    domain: 'o2web.ca',
  },
  {
    name: 'Global Relay Communications',
    domain: 'globalrelay.com',
  },
  {
    name: 'Brightflow',
    domain: 'brightflow.ai',
  },
  {
    name: 'AEC Group',
    domain: 'aecgroup.com',
  },
  {
    name: 'Panther',
    domain: 'panther.co',
  },
  {
    name: 'Avicado Construction Technology Services',
    domain: 'avicado.com',
  },
  {
    name: 'Smart Panda Labs',
    domain: 'smartpandalabs.com',
  },
  {
    name: 'Pixelz',
    domain: 'pixelz.com',
  },
  {
    name: 'Shutterstock',
    domain: 'shutterstock.com',
  },
  {
    name: 'Roomex',
    domain: 'roomex.com',
  },
  {
    name: 'Scoutside',
    domain: 'scoutside.com',
  },
  {
    name: 'Intel',
    domain: 'intel.com',
  },
  {
    name: 'BritePool',
    domain: 'britepool.com',
  },
  {
    name: 'onova',
    domain: 'onova.io',
  },
  {
    name: 'remofirst',
    domain: 'remofirst.com',
  },
  {
    name: 'Glean',
    domain: 'glean.com',
  },
  {
    name: 'Rhabit Analytics',
    domain: 'rhabitanalytics.com',
  },
  {
    name: 'CloudRevenuePartners',
    domain: 'cloudrevenuepartners.com',
  },
  {
    name: 'Udacity',
    domain: 'udacity.com',
  },
  {
    name: 'Vouch Insurance',
    domain: 'vouch.us',
  },
  {
    name: 'Vistar Media',
    domain: 'vistarmedia.com',
  },
  {
    name: 'EX Squared',
    domain: 'exsquared.com',
  },
  {
    name: 'Zyda',
    domain: 'zyda.com',
  },
  {
    name: 'GoNative.io',
    domain: 'gonative.io',
  },
  {
    name: 'Jamersan',
    domain: 'jamersan.com',
  },
  {
    name: 'Kibo Global',
    domain: 'kibo.global',
  },
  {
    name: 'Omniscient',
    domain: 'omnisrv.com',
  },
  {
    name: 'PEDCO',
    domain: 'pedco.eu',
  },
  {
    name: 'NuORDER Retail Partners',
    domain: 'nuorder-retailpartners.com',
  },
  {
    name: 'VIENNA Advantage',
    domain: 'viennaadvantage.com',
  },
  {
    name: 'Vizit',
    domain: 'vizit.com',
  },
  {
    name: 'People Stretch Solutions',
    domain: 'peoplestretch.com',
  },
  {
    name: 'Epylog',
    domain: 'epylog.com',
  },
  {
    name: 'Enliven Data Solutions',
    domain: 'enlivendata.com',
  },
  {
    name: 'Teampay',
    domain: 'teampay.co',
  },
  {
    name: 'Sales Assembly',
    domain: 'salesassembly.com',
  },
  {
    name: 'Productsup',
    domain: 'productsup.com',
  },
  {
    name: 'Spectrm',
    domain: 'spectrm.io',
  },
  {
    name: 'Briq Bookings',
    domain: 'briqbookings.com',
  },
  {
    name: 'Acryl Data',
    domain: 'acryl.io',
  },
  {
    name: 'Transcend',
    domain: 'transcend.io',
  },
  {
    name: 'SEMplicity Inc.',
    domain: 'semplicityinc.com',
  },
  {
    name: 'Lumen5',
    domain: 'lumen5.com',
  },
  {
    name: 'Gladeo',
    domain: 'gladeo.org',
  },
  {
    name: 'Whitebox',
    domain: 'whitebox.com',
  },
  {
    name: 'AiTrillion',
    domain: 'aitrillion.com',
  },
  {
    name: 'Naviga',
    domain: 'navigaglobal.com',
  },
  {
    name: 'Novel Capital',
    domain: 'novelcapital.com',
  },
  {
    name: 'Brandfolder',
    domain: 'brandfolder.com',
  },
  {
    name: 'Tremendous',
    domain: 'tremendous.com',
  },
  {
    name: 'CoachEm',
    domain: 'coachem.io',
  },
  {
    name: 'CXsphere',
    domain: 'cxsphere.com',
  },
  {
    name: 'Wiglaf Pricing',
    domain: 'wiglafpricing.com',
  },
  {
    name: 'Decisive Data',
    domain: 'decisivedata.com',
  },
  {
    name: 'Happeo',
    domain: 'happeo.com',
  },
  {
    name: 'eDesk',
    domain: 'edesk.com',
  },
  {
    name: 'Lessonly',
    domain: 'lessonly.com',
  },
  {
    name: 'Helixa',
    domain: 'helixa.ai',
  },
  {
    name: 'Split',
    domain: 'split.io',
  },
  {
    name: 'HUMAN Security Inc.',
    domain: 'humansecurity.com',
  },
  {
    name: 'Mapp Digital',
    domain: 'mapp.com',
  },
  {
    name: 'JogoTech',
    domain: 'jogotech.com',
  },
  {
    name: 'Onalytica',
    domain: 'onalytica.com',
  },
  {
    name: 'iTalent Digital',
    domain: 'italentdigital.com',
  },
  {
    name: 'PaymentCloud',
    domain: 'paymentcloudinc.com',
  },
  {
    name: 'Qode Space',
    domain: 'qodespace.com',
  },
  {
    name: 'InboundLabs',
    domain: 'inboundlabs.co',
  },
  {
    name: 'Tulip',
    domain: 'tulip.com',
  },
  {
    name: 'IPORT',
    domain: 'iportproducts.com',
  },
  {
    name: 'Algolytics',
    domain: 'algolytics.com',
  },
  {
    name: 'eCom Maniacs',
    domain: 'ecommaniacs.com',
  },
  {
    name: 'Intelication',
    domain: 'intelication.com',
  },
  {
    name: 'MilkCrate',
    domain: 'milkcrate.tech',
  },
  {
    name: 'Zonos',
    domain: 'zonos.com',
  },
  {
    name: 'SeekOut',
    domain: 'seekout.io',
  },
  {
    name: 'synaigy GmbH',
    domain: 'synaigy.com',
  },
  {
    name: 'Eventcombo',
    domain: 'eventcombo.com',
  },
  {
    name: 'Snowfly Performance Inc.',
    domain: 'snowfly.com',
  },
  {
    name: 'Shine Team',
    domain: 'shine.team',
  },
  {
    name: 'Noodle.ai',
    domain: 'noodle.ai',
  },
  {
    name: 'BlackLake Security',
    domain: 'blacklakesecurity.com',
  },
  {
    name: 'VShift',
    domain: 'vshift.com',
  },
  {
    name: 'Smart Force',
    domain: 'smart-force.com',
  },
  {
    name: 'Ento',
    domain: 'ento.com',
  },
  {
    name: 'Terminal',
    domain: 'terminal.io',
  },
  {
    name: 'Mundo Livre Digital',
    domain: 'mundolivre.digital',
  },
  {
    name: 'OxWorks',
    domain: 'oxw.io',
  },
  {
    name: 'Ten Dollar Data',
    domain: 'tendollardata.com',
  },
  {
    name: 'Fulfyld',
    domain: 'fulfyld.com',
  },
  {
    name: 'Cockroach Labs',
    domain: 'cockroachlabs.com',
  },
  {
    name: 'NewGenApps',
    domain: 'newgenapps.com',
  },
  {
    name: 'Searchanise',
    domain: 'searchanise.io',
  },
  {
    name: '3DVR Solutions',
    domain: '3dvrs.com',
  },
  {
    name: 'Boyo Hlophe',
    domain: 'boyohlophe.co.za',
  },
  {
    name: 'Gritly',
    domain: 'gritly.us',
  },
  {
    name: 'Vouchr Ltd',
    domain: 'vouchrtech.com',
  },
  {
    name: 'Billo.app',
    domain: 'billo.app',
  },
  {
    name: 'Tines',
    domain: 'tines.com',
  },
  {
    name: 'GradientCyber',
    domain: 'gradientcyber.com',
  },
  {
    name: 'Hatch',
    domain: 'usehatchapp.com',
  },
  {
    name: 'Stor.ai',
    domain: 'stor.ai',
  },
  {
    name: 'IMPACT',
    domain: 'impactbnd.com',
  },
  {
    name: 'Innovid',
    domain: 'innovid.com',
  },
  {
    name: 'DigiCert',
    domain: 'digicert.com',
  },
  {
    name: 'Mannai Corporation QPSC',
    domain: 'mannai.com',
  },
  {
    name: 'EveryoneSocial',
    domain: 'everyonesocial.com',
  },
  {
    name: 'Suridata.ai',
    domain: 'suridata.ai',
  },
  {
    name: 'Loom',
    domain: 'loom.com',
  },
  {
    name: 'Entisys360',
    domain: 'entisys360.com',
  },
  {
    name: 'Constant Contact',
    domain: 'constantcontact.com',
  },
  {
    name: 'Cardin Partners',
    domain: 'cardinpartners.com',
  },
  {
    name: 'Scaleflex',
    domain: 'scaleflex.com',
  },
  {
    name: 'Solvemate',
    domain: 'solvemate.com',
  },
  {
    name: 'Cnetric Enterprise Solutions Pvt. Ltd.',
    domain: 'cnetric.com',
  },
  {
    name: 'TAUC (The Association of Union Constructors)',
    domain: 'tauc.org',
  },
  {
    name: 'Digital Eagles',
    domain: 'digitaleagles.com.au',
  },
  {
    name: 'QBIX Analytics',
    domain: 'qbixanalytics.com',
  },
  {
    name: 'Phase2',
    domain: 'phase2technology.com',
  },
  {
    name: 'Inspectorio',
    domain: 'inspectorio.com',
  },
  {
    name: 'Optima Partners',
    domain: 'optimapartners.co.uk',
  },
  {
    name: 'Fluincy, inc.',
    domain: 'getfluincy.com',
  },
  {
    name: 'Breezy HR',
    domain: 'breezy.hr',
  },
  {
    name: 'Karlsgate',
    domain: 'karlsgate.com',
  },
  {
    name: 'ShipX',
    domain: 'shipx.com',
  },
  {
    name: 'Mendel.ai',
    domain: 'mendel.ai',
  },
  {
    name: 'RangeForce',
    domain: 'rangeforce.com',
  },
  {
    name: 'Crosschq',
    domain: 'crosschq.com',
  },
  {
    name: 'Amodal',
    domain: 'amodal.co.uk',
  },
  {
    name: 'TechSparq',
    domain: 'techsparq.com',
  },
  {
    name: 'RBA',
    domain: 'rbaconsulting.com',
  },
  {
    name: 'e-PlanSoft',
    domain: 'eplansoft.com',
  },
  {
    name: 'TRUCE Software',
    domain: 'trucesoftware.com',
  },
  {
    name: 'Knowland',
    domain: 'knowland.com',
  },
  {
    name: 'Extend',
    domain: 'extend.com',
  },
  {
    name: 'RPA Tools',
    domain: 'rpatools.io',
  },
  {
    name: 'Origin 63',
    domain: 'origin63.com',
  },
  {
    name: 'CapabilitySource',
    domain: 'capabilitysource.com',
  },
  {
    name: 'Astral Web Taiwan',
    domain: 'astralwebinc.com',
  },
  {
    name: 'K1X',
    domain: 'k1x.io',
  },
  {
    name: 'Digital Media Team',
    domain: 'digitalmediateam.co.uk',
  },
  {
    name: 'Essence-RH',
    domain: 'essence-rh.com.br',
  },
  {
    name: 'The Purpose Collective',
    domain: 'the-purpose-collective.com',
  },
  {
    name: 'Yaadit',
    domain: 'yaadit.com',
  },
  {
    name: 'Dr.Mobile',
    domain: 'drmobile.com.br',
  },
  {
    name: 'HulkApps',
    domain: 'hulkapps.com',
  },
  {
    name: 'Society',
    domain: 'thisissociety.com',
  },
  {
    name: 'Revenue Grid',
    domain: 'revenuegrid.com',
  },
  {
    name: 'Kera',
    domain: 'getkera.com',
  },
  {
    name: 'Darkroom',
    domain: 'darkroomagency.com',
  },
  {
    name: 'Moduurn',
    domain: 'moduurn.com',
  },
  {
    name: 'SilverCreek Insights',
    domain: 'silvercreek.io',
  },
  {
    name: 'Global Pricing Innovations',
    domain: 'globalpricing.com',
  },
  {
    name: 'Spot',
    domain: 'spot.io',
  },
  {
    name: 'mJobTime',
    domain: 'mjobtime.com',
  },
  {
    name: 'AgilityHealth',
    domain: 'agilityhealthradar.com',
  },
  {
    name: 'Gatsby',
    domain: 'gatsby.ai',
  },
  {
    name: 'Ally.io',
    domain: 'ally.io',
  },
  {
    name: 'Pickle',
    domain: 'pickleai.com',
  },
  {
    name: 'Mirakl',
    domain: 'mirakl.com',
  },
  {
    name: 'HostedBizz',
    domain: 'hostedbizz.com',
  },
  {
    name: 'Guider',
    domain: 'guider-ai.com',
  },
  {
    name: 'YAV Digital',
    domain: 'yavdigital.com.br',
  },
  {
    name: 'Blast Analytics',
    domain: 'blastanalytics.com',
  },
  {
    name: 'Recorded Future',
    domain: 'recordedfuture.com',
  },
  {
    name: 'Kennected',
    domain: 'kennected.org',
  },
  {
    name: 'Duro',
    domain: 'durolabs.co',
  },
  {
    name: 'Trello Demo',
    domain: 'partner8.crossbeam.com',
  },
  {
    name: 'Zee Jay Digital',
    domain: 'zeejaydigital.com',
  },
  {
    name: 'Mediatel',
    domain: 'mediatel.co.uk',
  },
  {
    name: 'RDB Solutions',
    domain: 'rdb-solutions.com',
  },
  {
    name: 'LogicSpot',
    domain: 'logicspot.com',
  },
  {
    name: 'EITACIES',
    domain: 'eitacies.com',
  },
  {
    name: 'Morphio',
    domain: 'morphio.ai',
  },
  {
    name: 'Mintec Ltd',
    domain: 'mintecglobal.com',
  },
  {
    name: 'Judo',
    domain: 'judo.app',
  },
  {
    name: 'CXperts Inc',
    domain: 'cxperts.io',
  },
  {
    name: 'Onemedia Consulting',
    domain: 'onemedia-consulting.com',
  },
  {
    name: 'Birlasoft',
    domain: 'birlasoft.com',
  },
  {
    name: 'DialogTech',
    domain: 'dialogtech.com',
  },
  {
    name: 'Galley',
    domain: 'galleysolutions.com',
  },
  {
    name: 'MarketMan',
    domain: 'marketman.com',
  },
  {
    name: 'AMZ Pro Designer',
    domain: 'amzprodesigner.com',
  },
  {
    name: 'Promoboxx',
    domain: 'promoboxx.com',
  },
  {
    name: 'Double Yolk',
    domain: 'doubleyolk.com',
  },
  {
    name: 'Upsolver',
    domain: 'upsolver.com',
  },
  {
    name: 'Shippit',
    domain: 'shippit.com',
  },
  {
    name: 'Intellipse',
    domain: 'intellipse.com',
  },
  {
    name: 'AskNicely',
    domain: 'asknicely.com',
  },
  {
    name: 'mtc.',
    domain: 'mtc.co.uk',
  },
  {
    name: 'Houseware',
    domain: 'houseware.io',
  },
  {
    name: 'SquadLocker',
    domain: 'squadlocker.com',
  },
  {
    name: 'FacilityBot',
    domain: 'facilitybot.co',
  },
  {
    name: 'Great Dental Websites',
    domain: 'greatdentalwebsites.com',
  },
  {
    name: 'Radiance Labs',
    domain: 'radiancelabs.com',
  },
  {
    name: 'Unlocking Growth',
    domain: 'unlockinggrowth.co',
  },
  {
    name: 'decrypt',
    domain: 'decryptint.com',
  },
  {
    name: 'Empirical Path',
    domain: 'empiricalpath.com',
  },
  {
    name: 'Equilibrium Gateway',
    domain: 'equilibriumgateway.com',
  },
  {
    name: 'Open LMS',
    domain: 'openlms.net',
  },
  {
    name: 'Undertone',
    domain: 'undertone.com',
  },
  {
    name: 'Whip Around',
    domain: 'whiparound.com',
  },
  {
    name: 'Habu',
    domain: 'habu.com',
  },
  {
    name: 'VDX.tv',
    domain: 'vdx.tv',
  },
  {
    name: 'Optilyz',
    domain: 'optilyz.com',
  },
  {
    name: 'Mindglobal',
    domain: 'mindglobal.com',
  },
  {
    name: 'KONICA MINOLTA',
    domain: 'konicaminolta.com',
  },
  {
    name: 'GoPomelo',
    domain: 'gopomelo.com',
  },
  {
    name: 'Blue Consult GmbH',
    domain: 'blue-consult.de',
  },
  {
    name: 'e4 Services',
    domain: 'e4-services.com',
  },
  {
    name: 'DataStax, Inc.',
    domain: 'datastax.com',
  },
  {
    name: 'Brand Knew',
    domain: 'brand-knew.com',
  },
  {
    name: 'zerobounce',
    domain: 'zerobounce.net',
  },
  {
    name: 'Team Activators',
    domain: 'teamactivators.com',
  },
  {
    name: 'Okta Demo',
    domain: 'partner9.crossbeam.com',
  },
  {
    name: 'SoftBank Robotics America',
    domain: 'softbankrobotics.com',
  },
  {
    name: 'ELSA ENERGY',
    domain: 'elsa-energy.com',
  },
  {
    name: 'Disruptive Technologies',
    domain: 'disruptive-technologies.com',
  },
  {
    name: 'AdQuick',
    domain: 'adquick.com',
  },
  {
    name: 'Risdall Marketing Group',
    domain: 'risdall.com',
  },
  {
    name: 'Analyst1',
    domain: 'analyst1.com',
  },
  {
    name: 'Booking Protect',
    domain: 'bookingprotect.com',
  },
  {
    name: 'Complete CSM',
    domain: 'completecsm.ai',
  },
  {
    name: 'Big Data Pricing',
    domain: 'bigdatapricing.com',
  },
  {
    name: 'SalesScreen',
    domain: 'salesscreen.com',
  },
  {
    name: 'Cangrade',
    domain: 'cangrade.com',
  },
  {
    name: 'DemandJump',
    domain: 'demandjump.com',
  },
  {
    name: 'ATCS',
    domain: 'atcs.com',
  },
  {
    name: 'Pacvue',
    domain: 'pacvue.com',
  },
  {
    name: 'Jham',
    domain: 'jham.co',
  },
  {
    name: 'TalentVine',
    domain: 'talentvine.com.au',
  },
  {
    name: 'iamota',
    domain: 'iamota.com',
  },
  {
    name: 'Builthink Consultants Inc.',
    domain: 'builthinkconsultants.com',
  },
  {
    name: 'Appnovation',
    domain: 'appnovation.com',
  },
  {
    name: 'Stericycle Communication Solutions',
    domain: 'stericyclecommunications.com',
  },
  {
    name: 'Cameron Bartlett',
    domain: 'cambartlett.com',
  },
  {
    name: 'iinsure4u.com',
    domain: 'iinsure4u.com',
  },
  {
    name: 'EYStudios',
    domain: 'eystudios.com',
  },
  {
    name: 'Findify',
    domain: 'findify.io',
  },
  {
    name: 'OneCause',
    domain: 'onecause.com',
  },
  {
    name: 'IT Strategists',
    domain: 'itstrategists.com',
  },
  {
    name: 'Amitech Solutions',
    domain: 'amitechsolutions.com',
  },
  {
    name: 'Surfly',
    domain: 'surfly.com',
  },
  {
    name: 'Plytix.com',
    domain: 'plytix.com',
  },
  {
    name: 'Forsite',
    domain: 'getforsite.com',
  },
  {
    name: 'Premier Computing',
    domain: 'premiercomputing.com',
  },
  {
    name: 'NeenOpal_Inc',
    domain: 'neenopal.com',
  },
  {
    name: 'Expert Marketing Advisors',
    domain: 'expertmarketingadvisors.com',
  },
  {
    name: 'ChronicCareIQ',
    domain: 'chroniccareiq.com',
  },
  {
    name: 'Dialpad',
    domain: 'dialpad.com',
  },
  {
    name: 'Venizum Marketing Technology',
    domain: 'venizum.com',
  },
  {
    name: 'Cloze',
    domain: 'cloze.com',
  },
  {
    name: 'Velocity Global',
    domain: 'velocityglobal.com',
  },
  {
    name: 'Vasion',
    domain: 'printerlogic.com',
  },
  {
    name: 'SalesHood',
    domain: 'saleshood.com',
  },
  {
    name: 'Reelevant',
    domain: 'reelevant.com',
  },
  {
    name: 'LAB Group',
    domain: 'lab.co.uk',
  },
  {
    name: 'SnapCall',
    domain: 'snapcall.io',
  },
  {
    name: 'FACT-Finder',
    domain: 'fact-finder.com',
  },
  {
    name: 'Linkfluence',
    domain: 'linkfluence.com',
  },
  {
    name: 'Storyboard Media',
    domain: 'storyboardmedia.co',
  },
  {
    name: 'Rebel Energy',
    domain: 'rebelenergy.com',
  },
  {
    name: 'Autobound',
    domain: 'autobound.ai',
  },
  {
    name: 'Bamboo',
    domain: 'growwithbamboo.com',
  },
  {
    name: 'Clockwork',
    domain: 'clockwork.com',
  },
  {
    name: 'Zuuvi',
    domain: 'zuuvi.com',
  },
  {
    name: 'Ice Mortgage Technology',
    domain: 'icemt.com',
  },
  {
    name: 'BrandOps',
    domain: 'brandops.io',
  },
  {
    name: 'twogether',
    domain: 'wearetwogether.com',
  },
  {
    name: 'Freightos',
    domain: 'freightos.com',
  },
  {
    name: 'Chinafy',
    domain: 'chinafy.com',
  },
  {
    name: 'Floral Innovations BV',
    domain: 'floralinnovations.nl',
  },
  {
    name: 'AsterionDB',
    domain: 'asteriondb.com',
  },
  {
    name: 'VivoSense',
    domain: 'vivosense.com',
  },
  {
    name: 'Workheld',
    domain: 'workheld.com',
  },
  {
    name: 'Tahzoo LLC',
    domain: 'tahzoo.com',
  },
  {
    name: 'CyberHub Group',
    domain: 'cyberhub.ai',
  },
  {
    name: 'Shopney',
    domain: 'shopney.co',
  },
  {
    name: 'Toptal',
    domain: 'toptal.com',
  },
  {
    name: 'Test Double',
    domain: 'testdouble.com',
  },
  {
    name: 'Tone',
    domain: 'tonemessaging.com',
  },
  {
    name: 'Fugo',
    domain: 'fugo.ai',
  },
  {
    name: 'Peerfect Fundraising Solutions',
    domain: 'peerfectsolutions.com',
  },
  {
    name: 'Linnworks',
    domain: 'linnworks.com',
  },
  {
    name: 'Creative Marketing Concepts',
    domain: 'creativemc.com',
  },
  {
    name: 'Markethink International Limited',
    domain: 'markethink.co.uk',
  },
  {
    name: 'Kore.ai',
    domain: 'kore.ai',
  },
  {
    name: 'Shipware',
    domain: 'shipware.com',
  },
  {
    name: 'DEG',
    domain: 'degdigital.com',
  },
  {
    name: 'Omnipack',
    domain: 'omnipack.com',
  },
  {
    name: 'The Dotcom',
    domain: 'the.com',
  },
  {
    name: 'Photon Commerce',
    domain: 'photoncommerce.com',
  },
  {
    name: 'E2E Summit',
    domain: 'e2esummit.biz',
  },
  {
    name: 'Iteratively',
    domain: 'iterative.ly',
  },
  {
    name: 'SYNERISE S A',
    domain: 'synerise.com',
  },
  {
    name: 'FireApps',
    domain: 'fireapps.io',
  },
  {
    name: 'Kindbody',
    domain: 'kindbody.com',
  },
  {
    name: 'CbCloud',
    domain: 'cbcloud.com.br',
  },
  {
    name: 'iMenu360',
    domain: 'imenu360.com',
  },
  {
    name: 'AMPLR',
    domain: 'amplr.be',
  },
  {
    name: 'Versed AI',
    domain: 'versed.ai',
  },
  {
    name: 'Hook Digital',
    domain: 'hookdig.com',
  },
  {
    name: 'Dazeworks',
    domain: 'dazeworks.com',
  },
  {
    name: 'WSO2',
    domain: 'wso2.com',
  },
  {
    name: 'Ascend Business Growth',
    domain: 'ascendbusinessgrowth.com',
  },
  {
    name: 'Balance',
    domain: 'getbalance.com',
  },
  {
    name: 'Verisk',
    domain: 'verisk.com',
  },
  {
    name: 'Deposco',
    domain: 'deposco.com',
  },
  {
    name: 'Ship.com',
    domain: 'ship.com',
  },
  {
    name: 'Receptional',
    domain: 'receptional.com',
  },
  {
    name: 'Canva',
    domain: 'canva.com',
  },
  {
    name: 'pointOne',
    domain: 'pointone.co.uk',
  },
  {
    name: 'The Tantalus Group',
    domain: 'thetantalusgroup.com',
  },
  {
    name: 'GoFor Delivers',
    domain: 'gofordelivers.com',
  },
  {
    name: 'Restaurant Data',
    domain: 'restaurantdata.com',
  },
  {
    name: 'GUMA Business Solutions',
    domain: 'gumabs.com',
  },
  {
    name: 'Exponent Partners',
    domain: 'exponentpartners.com',
  },
  {
    name: 'Kantox',
    domain: 'kantox.com',
  },
  {
    name: 'Fluxion Biosciences',
    domain: 'fluxionbio.com',
  },
  {
    name: 'ICONIC BIM',
    domain: 'iconicbim.com',
  },
  {
    name: 'Powtoon',
    domain: 'powtoon.com',
  },
  {
    name: 'Prana Life Sciences',
    domain: 'prana4life.com',
  },
  {
    name: 'Reflektion',
    domain: 'reflektion.com',
  },
  {
    name: 'CFMA',
    domain: 'cfma.org',
  },
  {
    name: 'OpenSolar',
    domain: 'opensolar.com',
  },
  {
    name: 'Brain & Heart Communication AG',
    domain: 'b-h.ch',
  },
  {
    name: 'WANdisco',
    domain: 'wandisco.com',
  },
  {
    name: 'Transline',
    domain: 'transline.de',
  },
  {
    name: 'AdsForChange',
    domain: 'adsforchange.co',
  },
  {
    name: 'PopSQL',
    domain: 'popsql.com',
  },
  {
    name: 'The Mars Agency',
    domain: 'themarsagency.com',
  },
  {
    name: 'Burwood Group',
    domain: 'burwood.com',
  },
  {
    name: 'Bondchain Growth',
    domain: 'growth.bondchaingroup.com',
  },
  {
    name: 'Roofing Marketing Pros',
    domain: 'roofingmarketingpros.com',
  },
  {
    name: 'Monobunt',
    domain: 'support-crm.com',
  },
  {
    name: 'TIDWIT',
    domain: 'tidwit.com',
  },
  {
    name: 'Tascal Marketing Inc.',
    domain: 'deliberateselling.com',
  },
  {
    name: 'Viddy',
    domain: 'viddy.video',
  },
  {
    name: 'Evo Systems (UK) Ltd',
    domain: 'evosystems.com',
  },
  {
    name: 'Ciptex Ltd',
    domain: 'ciptex.com',
  },
  {
    name: 'Behind the Skills',
    domain: 'behindtheskills.studio',
  },
  {
    name: 'Omnidian',
    domain: 'omnidian.com',
  },
  {
    name: 'Reblaze',
    domain: 'reblaze.com',
  },
  {
    name: 'PacketFabric',
    domain: 'packetfabric.com',
  },
  {
    name: 'Qualys',
    domain: 'qualys.com',
  },
  {
    name: 'Kickfurther',
    domain: 'kickfurther.com',
  },
  {
    name: 'BellyMelly',
    domain: 'bellymelly.com',
  },
  {
    name: 'Celigo',
    domain: 'celigo.com',
  },
  {
    name: 'Omnipresent',
    domain: 'omnipresent.com',
  },
  {
    name: 'earlyone',
    domain: 'earlyone.com',
  },
  {
    name: 'Omnipresent',
    domain: 'omnipresent.group',
  },
  {
    name: 'collabtogrow',
    domain: 'collabtogrow.com',
  },
  {
    name: 'CareCom',
    domain: 'carecom.com',
  },
  {
    name: 'ConTechxs solutions Private limited',
    domain: 'contechxs.com',
  },
  {
    name: 'Simplesat',
    domain: 'simplesat.io',
  },
  {
    name: 'Cathexis Partners',
    domain: 'cathexispartners.com',
  },
  {
    name: 'Infinity',
    domain: 'infinity.co',
  },
  {
    name: 'Reform Digital',
    domain: 'reformdigital.com.au',
  },
  {
    name: 'Conceited',
    domain: 'conceitedmarketing.com',
  },
  {
    name: '5th Method',
    domain: '5thmethod.com',
  },
  {
    name: 'Rakam',
    domain: 'rakam.io',
  },
  {
    name: 'OneUp',
    domain: 'oneup.com',
  },
  {
    name: 'Red Box',
    domain: 'redboxvoice.com',
  },
  {
    name: 'Lattice',
    domain: 'lattice.com',
  },
  {
    name: 'QuoteMachine',
    domain: 'quotemachine.com',
  },
  {
    name: 'KTSL Limited',
    domain: 'ktsl.com',
  },
  {
    name: 'SKUvantage',
    domain: 'skuvantage.com.au',
  },
  {
    name: 'Clever Touch Marketing',
    domain: 'clever-touch.com',
  },
  {
    name: 'Baker Communications, Inc.',
    domain: 'bakercommunications.com',
  },
  {
    name: 'Productive Dentist Academy',
    domain: 'productivedentist.com',
  },
  {
    name: 'Arcus',
    domain: 'arcusfi.com',
  },
  {
    name: 'Nextup',
    domain: 'nextup.ai',
  },
  {
    name: 'UpContent',
    domain: 'upcontent.com',
  },
  {
    name: 'Facility Grid LLC',
    domain: 'facilitygrid.com',
  },
  {
    name: 'Print Moose',
    domain: 'printmoose.com',
  },
  {
    name: 'eHouse Studio',
    domain: 'ehousestudio.com',
  },
  {
    name: 'Unbxd Inc',
    domain: 'unbxd.com',
  },
  {
    name: 'InTouch Technology',
    domain: 'intouchtechnology.com',
  },
  {
    name: 'Grows',
    domain: 'grows.pro',
  },
  {
    name: 'Wisp',
    domain: 'wisp.so',
  },
  {
    name: 'Smartendr',
    domain: 'smartendr.com',
  },
  {
    name: 'R2U Augmented Reality',
    domain: 'r2u.io',
  },
  {
    name: 'Paperless Technology Solutions',
    domain: 'paperlessts.com',
  },
  {
    name: 'Actionfigure',
    domain: 'actionfigure.ai',
  },
  {
    name: 'Aviso',
    domain: 'aviso.com',
  },
  {
    name: 'wolf',
    domain: 'wolf.xyz',
  },
  {
    name: 'knak.',
    domain: 'knak.com',
  },
  {
    name: 'Globant',
    domain: 'globant.com',
  },
  {
    name: 'Style Arcade',
    domain: 'stylearcade.com',
  },
  {
    name: 'Foreignerds',
    domain: 'foreignerds.com',
  },
  {
    name: 'Litmus Automation',
    domain: 'litmus.io',
  },
  {
    name: 'FreelanceRepublik',
    domain: 'freelancerepublik.com',
  },
  {
    name: 'Cypress.io',
    domain: 'cypress.io',
  },
  {
    name: 'Monkedia',
    domain: 'monkedia.com',
  },
  {
    name: 'Procore Technologies',
    domain: 'procore.com',
  },
  {
    name: 'Leavened',
    domain: 'leavened.com',
  },
  {
    name: 'Honestly',
    domain: 'honestly.co',
  },
  {
    name: 'SRDS',
    domain: 'srds.com',
  },
  {
    name: 'Octopus BI',
    domain: 'octopusbi.com',
  },
  {
    name: 'Hive.HR',
    domain: 'hive.hr',
  },
  {
    name: 'Gr4vy',
    domain: 'gr4vy.com',
  },
  {
    name: 'KeepTruckin',
    domain: 'keeptruckin.com',
  },
  {
    name: 'SwiftWIN',
    domain: 'swiftwininc.com',
  },
  {
    name: 'Omnae',
    domain: 'omnae.com',
  },
  {
    name: 'GEMPAGES',
    domain: 'gempages.net',
  },
  {
    name: 'Jumpstart Security',
    domain: 'jumpstart.security',
  },
  {
    name: 'SMT',
    domain: 'smt.gt',
  },
  {
    name: 'CallSource',
    domain: 'callsource.com',
  },
  {
    name: '1440',
    domain: '1440.io',
  },
  {
    name: 'Wonderment',
    domain: 'wonderment.com',
  },
  {
    name: 'Porch',
    domain: 'porch.com',
  },
  {
    name: 'SupplyCompass',
    domain: 'supplycompass.com',
  },
  {
    name: 'Cx Moments',
    domain: 'cxmoments.com',
  },
  {
    name: 'Northteq',
    domain: 'northteq.com',
  },
  {
    name: 'Clym',
    domain: 'clym.io',
  },
  {
    name: 'MC-Advisory',
    domain: 'mc-advisory.nl',
  },
  {
    name: 'NIIT',
    domain: 'niit.com',
  },
  {
    name: 'Listing Mirror, LLC',
    domain: 'listingmirror.com',
  },
  {
    name: 'PAXAFE',
    domain: 'paxafe.com',
  },
  {
    name: 'Syncube',
    domain: 'syncu.be',
  },
  {
    name: 'iConvert',
    domain: 'iconvert.io',
  },
  {
    name: 'LanguageWire',
    domain: 'languagewire.com',
  },
  {
    name: 'Zerrow',
    domain: 'zerrow.com',
  },
  {
    name: 'Extracker',
    domain: 'extracker.com',
  },
  {
    name: 'Melodie',
    domain: 'melod.ie',
  },
  {
    name: 'Mode s.a.',
    domain: 'mode360.eu',
  },
  {
    name: 'Arway.biz',
    domain: 'arway.biz',
  },
  {
    name: 'Sheetlabs',
    domain: 'sheetlabs.com',
  },
  {
    name: 'Kharalis',
    domain: 'kharalis.com',
  },
  {
    name: 'Humantelligence',
    domain: 'humantelligence.com',
  },
  {
    name: 'Wrapify',
    domain: 'wrapify.com',
  },
  {
    name: 'XenTegra',
    domain: 'xentegra.com',
  },
  {
    name: 'Experience Alive',
    domain: 'experiencealive.com',
  },
  {
    name: 'Sensormatic',
    domain: 'sensormatic.com',
  },
  {
    name: 'Vengreso',
    domain: 'vengreso.com',
  },
  {
    name: 'Listrak',
    domain: 'listrak.com',
  },
  {
    name: 'Velstar',
    domain: 'velstar.co.uk',
  },
  {
    name: 'NINEFEB Technical Documentation GmbH',
    domain: 'ninefeb.com',
  },
  {
    name: 'Veracity Trust Network',
    domain: 'veracitytrustnetwork.com',
  },
  {
    name: 'Attraqt',
    domain: 'attraqt.com',
  },
  {
    name: 'Mechsoft Technologies',
    domain: 'mechsoftme.com',
  },
  {
    name: 'Affinio',
    domain: 'affinio.com',
  },
  {
    name: 'Inventures',
    domain: 'inventures.com.tr',
  },
  {
    name: '8base',
    domain: '8base.com',
  },
  {
    name: 'PARIS M1',
    domain: 'mieux.ai',
  },
  {
    name: 'Altis DXP',
    domain: 'altis-dxp.com',
  },
  {
    name: 'MAYO Human Capital',
    domain: 'mayohr.com',
  },
  {
    name: 'Widewail',
    domain: 'widewail.com',
  },
  {
    name: 'Vasion-partners',
    domain: 'vasionpartners.com',
  },
  {
    name: 'Strive Gaming',
    domain: 'strivegaming.com',
  },
  {
    name: 'Bluemark',
    domain: 'bluemark.com',
  },
  {
    name: 'Moonship',
    domain: 'moonship.com',
  },
  {
    name: 'WebDevStudios',
    domain: 'webdevstudios.com',
  },
  {
    name: 'SecurityTrax',
    domain: 'securitytrax.com',
  },
  {
    name: 'Centric Consulting',
    domain: 'centricconsulting.com',
  },
  {
    name: 'Space 48',
    domain: 'space48.com',
  },
  {
    name: 'SparkPlug',
    domain: 'sparkplug.app',
  },
  {
    name: 'AblyPro',
    domain: 'ablypro.com',
  },
  {
    name: 'Vibes',
    domain: 'vibes.com',
  },
  {
    name: 'Flowbox',
    domain: 'getflowbox.com',
  },
  {
    name: 'Spiff',
    domain: 'spiff.com',
  },
  {
    name: 'Copyfactory',
    domain: 'copyfactory.io',
  },
  {
    name: 'Qlearsite',
    domain: 'qlearsite.com',
  },
  {
    name: 'ManufacturingPower',
    domain: 'manufacturingpower.com',
  },
  {
    name: 'Flywheel Digital',
    domain: 'flywheel.digital',
  },
  {
    name: 'Gelato',
    domain: 'gelato.com',
  },
  {
    name: 'Lakeside Software',
    domain: 'lakesidesoftware.com',
  },
  {
    name: 'ISQe',
    domain: 'isqe.com',
  },
  {
    name: 'Builder.io',
    domain: 'builder.io',
  },
  {
    name: 'One Rockwell',
    domain: 'onerockwell.com',
  },
  {
    name: 'LoyaltyLion',
    domain: 'loyaltylion.com',
  },
  {
    name: 'Vesta eCommerce',
    domain: 'vesta.us',
  },
  {
    name: 'Etailerhub',
    domain: 'hypersku.com',
  },
  {
    name: 'Blue Tortoise Limited',
    domain: 'blue-tortoise.com',
  },
  {
    name: 'COL CONSULTING LIMITED',
    domain: 'colconsulting.com.hk',
  },
  {
    name: 'Ethos Integration Solutions',
    domain: 'ethos-integration.co.uk',
  },
  {
    name: 'OpenSymmetry',
    domain: 'opensymmetry.com',
  },
  {
    name: 'Rivery',
    domain: 'rivery.io',
  },
  {
    name: '3Cloud',
    domain: '3cloudsolutions.com',
  },
  {
    name: 'CodeClinic',
    domain: 'code-clinic.com',
  },
  {
    name: 'ActiveCampaign',
    domain: 'activecampaign.com',
  },
  {
    name: 'ARPEDIO Solutions',
    domain: 'arpedio.com',
  },
  {
    name: 'Greyshore Associates LLC',
    domain: 'greyshore.com',
  },
  {
    name: 'Klickly',
    domain: 'klickly.com',
  },
  {
    name: 'InnovativEvents',
    domain: 'innovativevents.com',
  },
  {
    name: 'Icon Media',
    domain: 'iconmedia.agency',
  },
  {
    name: 'The Fool',
    domain: 'thefool.it',
  },
  {
    name: 'Salesfloor',
    domain: 'salesfloor.net',
  },
  {
    name: 'Acrolinx',
    domain: 'acrolinx.com',
  },
  {
    name: 'Virtru',
    domain: 'virtru.com',
  },
  {
    name: 'MightyCall',
    domain: 'mightycall.com',
  },
  {
    name: 'AfterShip',
    domain: 'aftership.com',
  },
  {
    name: 'Box UK',
    domain: 'boxuk.com',
  },
  {
    name: 'Optimum7',
    domain: 'optimum7.com',
  },
  {
    name: 'Simplr',
    domain: 'simplr.ai',
  },
  {
    name: 'ActiveProspect',
    domain: 'activeprospect.com',
  },
  {
    name: 'Furtim',
    domain: 'furtim.io',
  },
  {
    name: 'TempWorks Staffing Software',
    domain: 'tempworks.com',
  },
  {
    name: 'OneStepCheckout',
    domain: 'onestepcheckout.com',
  },
  {
    name: '3DLOOK',
    domain: '3dlook.me',
  },
  {
    name: 'Imagen',
    domain: 'imagen.io',
  },
  {
    name: 'Abelian',
    domain: 'abelian.us',
  },
  {
    name: 'Cyral',
    domain: 'cyral.com',
  },
  {
    name: 'Masonhub',
    domain: 'masonhub.co',
  },
  {
    name: 'Onstate',
    domain: 'onstate.co.uk',
  },
  {
    name: 'One World Direct',
    domain: 'owd.com',
  },
  {
    name: 'BrainSell',
    domain: 'brainsell.com',
  },
  {
    name: 'Acceler8 Labs',
    domain: 'acceler8labs.com',
  },
  {
    name: 'Loopio',
    domain: 'loopio.com',
  },
  {
    name: 'Imption',
    domain: 'imption.io',
  },
  {
    name: 'Postal.io',
    domain: 'postal.io',
  },
  {
    name: 'Sterling',
    domain: 'sterlingcheck.com',
  },
  {
    name: 'Alloy',
    domain: 'alloy.com',
  },
  {
    name: 'Innventure',
    domain: 'innventure.com',
  },
  {
    name: 'GetAccept',
    domain: 'getaccept.com',
  },
  {
    name: 'innovation',
    domain: 'innovationlighting.net',
  },
  {
    name: 'Allseated',
    domain: 'allseated.com',
  },
  {
    name: 'Interos',
    domain: 'interos.ai',
  },
  {
    name: 'Checkout-Subaccount',
    domain: 'checkoutsubaccount.com',
  },
  {
    name: 'Bonjoro',
    domain: 'bonjoro.com',
  },
  {
    name: 'Growth Ex Machina',
    domain: 'growth.li',
  },
  {
    name: 'Lusha',
    domain: 'lusha.com',
  },
  {
    name: 'Per Angusta',
    domain: 'per-angusta.com',
  },
  {
    name: 'GlossGenius',
    domain: 'glossgenius.com',
  },
  {
    name: 'Exalate',
    domain: 'exalate.com',
  },
  {
    name: 'Independent Electrical Contractors (IEC)',
    domain: 'ieci.org',
  },
  {
    name: 'ScopeStack',
    domain: 'scopestack.io',
  },
  {
    name: 'SMAKK Studios',
    domain: 'smakkstudios.com',
  },
  {
    name: 'Chargeback Gurus',
    domain: 'chargebackgurus.com',
  },
  {
    name: 'Future Mind',
    domain: 'futuremind.com',
  },
  {
    name: 'Aleysian',
    domain: 'aleysian.com',
  },
  {
    name: 'Bridge',
    domain: 'bridgepayments.com',
  },
  {
    name: 'chemmedia AG',
    domain: 'chemmedia.de',
  },
  {
    name: 'StreamForce Solutions',
    domain: 'streamforcesolutions.com',
  },
  {
    name: 'Clarity Stack',
    domain: 'claritystack.com',
  },
  {
    name: '5874 Commerce',
    domain: '5874commerce.com',
  },
  {
    name: 'George Kapernaros',
    domain: 'georgekapernaros.com',
  },
  {
    name: 'CoolBitX',
    domain: 'coolbitx.com',
  },
  {
    name: 'Aliznet',
    domain: 'aliznet.fr',
  },
  {
    name: 'Reach-X',
    domain: 'reach-x.com',
  },
  {
    name: 'CM.com',
    domain: 'cm.com',
  },
  {
    name: 'Wonderflow',
    domain: 'wonderflow.ai',
  },
  {
    name: 'Eigen X',
    domain: 'eigenx.com',
  },
  {
    name: 'VideoPeel',
    domain: 'videopeel.com',
  },
  {
    name: 'Ventura Associates International LLC',
    domain: 'sweepspros.com',
  },
  {
    name: 'SmartBear Software',
    domain: 'smartbear.com',
  },
  {
    name: 'EmployeeReferrals.com',
    domain: 'employeereferrals.com',
  },
  {
    name: 'ConnectSports',
    domain: 'connectsports.co',
  },
  {
    name: 'FindMine',
    domain: 'findmine.com',
  },
  {
    name: 'ibex',
    domain: 'ibex.co',
  },
  {
    name: 'XPN, Inc.',
    domain: 'xpn.ai',
  },
  {
    name: 'IgnitePOST',
    domain: 'ignitepost.com',
  },
  {
    name: 'drivetrain',
    domain: 'drivetrain.ai',
  },
  {
    name: 'Nasuni',
    domain: 'nasuni.com',
  },
  {
    name: 'In Social Incorporated',
    domain: 'insocial.ca',
  },
  {
    name: 'Crawford Technologies',
    domain: 'crawfordtech.com',
  },
  {
    name: '2 Brains Marketing',
    domain: '2brainsms.com',
  },
  {
    name: '247 Commerce',
    domain: '247commerce.co.uk',
  },
  {
    name: 'Deduce',
    domain: 'deduce.com',
  },
  {
    name: 'Vertex',
    domain: 'vertexinc.com',
  },
  {
    name: 'Sensitek',
    domain: 'sensitek.com',
  },
  {
    name: 'SalesLabs',
    domain: 'saleslabs.io',
  },
  {
    name: 'Budai Media',
    domain: 'thebudaimedia.com',
  },
  {
    name: 'Underground Ecom',
    domain: 'undergroundecom.com',
  },
  {
    name: 'GoMage',
    domain: 'gomage.com',
  },
  {
    name: 'Consolidated Risk Solutions',
    domain: 'c-r-solutions.com',
  },
  {
    name: 'Cartesian Communications Technologies',
    domain: 'cartesiancomtech.com',
  },
  {
    name: 'Spiceworks Ziff Davis',
    domain: 'swzd.com',
  },
  {
    name: 'Federated Wireless',
    domain: 'federatedwireless.com',
  },
  {
    name: 'Agent3',
    domain: 'agent3.com',
  },
  {
    name: 'Chattermill',
    domain: 'chattermill.com',
  },
  {
    name: 'Globiox',
    domain: 'globiox.com',
  },
  {
    name: 'Solar Blaze',
    domain: 'solarblaze.com',
  },
  {
    name: 'Charli AI',
    domain: 'charli.ai',
  },
  {
    name: 'Join',
    domain: 'join.build',
  },
  {
    name: 'Recapped',
    domain: 'recapped.io',
  },
  {
    name: 'VantagePoint Performance',
    domain: 'vantagepointperformance.com',
  },
  {
    name: 'heyconnect GmbH',
    domain: 'heyconnect.de',
  },
  {
    name: 'DXC Technology',
    domain: 'dxc.com',
  },
  {
    name: 'Mason',
    domain: 'getmason.io',
  },
  {
    name: 'Cloudworks',
    domain: 'cloudworks.ae',
  },
  {
    name: 'Lucidworks',
    domain: 'lucidworks.com',
  },
  {
    name: 'Maestro',
    domain: 'maestro.io',
  },
  {
    name: 'Skai',
    domain: 'skai.io',
  },
  {
    name: 'Fueled, LLC',
    domain: 'fueled.io',
  },
  {
    name: 'PerformYard',
    domain: 'performyard.com',
  },
  {
    name: 'Kibo',
    domain: 'kibocommerce.com',
  },
  {
    name: 'Beacons Point',
    domain: 'beaconspoint.com',
  },
  {
    name: 'Hunter & Bard',
    domain: 'hunterandbard.com',
  },
  {
    name: 'Styla',
    domain: 'styla.com',
  },
  {
    name: 'Standard Industries',
    domain: 'standardindustries.com',
  },
  {
    name: 'TrulyWill',
    domain: 'ww.trulywill.com',
  },
  {
    name: 'Nomination.fr',
    domain: 'nomination.fr',
  },
  {
    name: 'Impressive Digital',
    domain: 'impressivedigital.com',
  },
  {
    name: 'XONA Systems',
    domain: 'xonasystems.com',
  },
  {
    name: 'Morpheus Technology Group',
    domain: 'morpheustechgroup.com',
  },
  {
    name: 'Generate Impact',
    domain: 'generateimpact.com',
  },
  {
    name: 'Sanity.io',
    domain: 'sanity.io',
  },
  {
    name: 'SAMA Labs',
    domain: 'sama-labs.com',
  },
  {
    name: 'Bassline',
    domain: 'bassline.com',
  },
  {
    name: 'Luni',
    domain: 'coach-for-teams.luni.app',
  },
  {
    name: 'Shareablee',
    domain: 'shareablee.com',
  },
  {
    name: 'Everee',
    domain: 'everee.com',
  },
  {
    name: 'Teikametrics',
    domain: 'teikametrics.com',
  },
  {
    name: 'Wayland-Smith Consulting',
    domain: 'jenniferws.com',
  },
  {
    name: 'Vesuvio Ventures',
    domain: 'vesuvioventures.com',
  },
  {
    name: 'explorvent',
    domain: 'explorvent.com',
  },
  {
    name: 'TimeCamp',
    domain: 'timecamp.com',
  },
  {
    name: 'Kushagramati Analytics !!!',
    domain: 'kmati.in',
  },
  {
    name: 'Thryv',
    domain: 'thryv.com',
  },
  {
    name: 'Trakref Inc',
    domain: 'trakref.com',
  },
  {
    name: 'Winnie',
    domain: 'winnie.com',
  },
  {
    name: 'LeadsRx',
    domain: 'leadsrx.com',
  },
  {
    name: 'Document Crunch',
    domain: 'documentcrunch.com',
  },
  {
    name: 'Virid, Inc.',
    domain: 'virid.com',
  },
  {
    name: 'Heartland',
    domain: 'heartlandretail.us',
  },
  {
    name: 'Gigg',
    domain: 'gigg.com',
  },
  {
    name: 'Ockam',
    domain: 'ockam.io',
  },
  {
    name: 'painter1',
    domain: 'painter1.com',
  },
  {
    name: 'Nagarro',
    domain: 'nagarro.com',
  },
  {
    name: 'Avolve Software',
    domain: 'avolvesoftware.com',
  },
  {
    name: 'Whispir',
    domain: 'whispir.com',
  },
  {
    name: 'Hireology',
    domain: 'hireology.com',
  },
  {
    name: 'Modifly',
    domain: 'wemodifly.com',
  },
  {
    name: 'Levitate Media',
    domain: 'levitatemedia.com',
  },
  {
    name: 'EagleView',
    domain: 'eagleview.com',
  },
  {
    name: 'Fresh Relevance',
    domain: 'freshrelevance.com',
  },
  {
    name: 'eSkill',
    domain: 'eskill.com',
  },
  {
    name: '1Breadcrumb',
    domain: '1breadcrumb.com',
  },
  {
    name: 'Stardog Union',
    domain: 'stardog.com',
  },
  {
    name: 'Uncapped',
    domain: 'weareuncapped.com',
  },
  {
    name: 'MyCustomerLens',
    domain: 'mycustomerlens.com',
  },
  {
    name: 'Brizk',
    domain: 'brizk.co',
  },
  {
    name: 'JDXpert',
    domain: 'jdxpert.com',
  },
  {
    name: 'Thought Industries, Inc',
    domain: 'thoughtindustries.com',
  },
  {
    name: 'Zingg Labs, Inc',
    domain: 'zingg.ai',
  },
  {
    name: 'Bridge Communications LLC',
    domain: 'bridgeoc.com',
  },
  {
    name: 'OneWest Event Design',
    domain: 'onewestevents.com',
  },
  {
    name: 'Databowl',
    domain: 'databowl.com',
  },
  {
    name: 'Applied Data Corporation',
    domain: 'applieddatacorp.com',
  },
  {
    name: 'SDC Partners',
    domain: 'sdcpartners.ca',
  },
  {
    name: 'BUSY RevOps',
    domain: 'busyless.space',
  },
  {
    name: 'Niswey',
    domain: 'niswey.com',
  },
  {
    name: 'Moonraft Innovation Labs',
    domain: 'moonraft.com',
  },
  {
    name: 'CodeCrew',
    domain: 'codecrew.us',
  },
  {
    name: 'Adstra',
    domain: 'adstradata.com',
  },
  {
    name: 'Swym',
    domain: 'swym.it',
  },
  {
    name: 'The International Business Hub',
    domain: 'theibh.com',
  },
  {
    name: 'SHAZAMME',
    domain: 'shazamme.com',
  },
  {
    name: 'Amplifi.io',
    domain: 'amplifi.io',
  },
  {
    name: 'Responsival',
    domain: 'responsival.com',
  },
  {
    name: 'Optimum Consultancy Services',
    domain: 'optimumcs.com',
  },
  {
    name: 'Infrrd Inc',
    domain: 'infrrd.ai',
  },
  {
    name: 'Eshipper',
    domain: 'eshipper.com',
  },
  {
    name: 'Luminos Labs',
    domain: 'luminoslabs.com',
  },
  {
    name: 'PSBD LTD',
    domain: 'psbd.co.uk',
  },
  {
    name: 'Creator Graph',
    domain: 'creatorgraph.pory.app',
  },
  {
    name: 'ShotFlow',
    domain: 'shotflow.com',
  },
  {
    name: 'Fuze, Inc',
    domain: 'fuze.com',
  },
  {
    name: 'Tive',
    domain: 'tive.com',
  },
  {
    name: 'MasterSolve',
    domain: 'mastersolve.com',
  },
  {
    name: 'Indiegogo',
    domain: 'indiegogo.com',
  },
  {
    name: 'Honorlock',
    domain: 'honorlock.com',
  },
  {
    name: 'Jumbo',
    domain: 'jumbo.live',
  },
  {
    name: 'Wuzzon',
    domain: 'wuzzon.com',
  },
  {
    name: 'Tresl, Inc.',
    domain: 'tresl.co',
  },
  {
    name: 'Booz Allen Hamilton',
    domain: 'boozallen.com',
  },
  {
    name: 'Conversation Design Institute',
    domain: 'conversationdesigninstitute.com',
  },
  {
    name: 'Trunkrs',
    domain: 'trunkrs.nl',
  },
  {
    name: 'Wrike',
    domain: 'wrike.com',
  },
  {
    name: 'Fast',
    domain: 'fast.co',
  },
  {
    name: 'Appranix',
    domain: 'appranix.com',
  },
  {
    name: 'Mediafly',
    domain: 'mediafly.com',
  },
  {
    name: 'SalesGenomics',
    domain: 'salesgenomics.co.uk',
  },
  {
    name: 'SaaSworks',
    domain: 'saasworks.com',
  },
  {
    name: 'Soleil AB',
    domain: 'soleil.se',
  },
  {
    name: 'Axialys',
    domain: 'axialys.com',
  },
  {
    name: 'IQbusiness',
    domain: 'iqbusiness.net',
  },
  {
    name: 'Orca',
    domain: 'orcaforce.co',
  },
  {
    name: 'Gorilla Group',
    domain: 'gorillagroup.com',
  },
  {
    name: '101 Managed',
    domain: '101managed.com',
  },
  {
    name: 'Enterium',
    domain: 'enterium.pl',
  },
  {
    name: 'SmartFiber',
    domain: 'smartfiber.it',
  },
  {
    name: 'FastTrack Recruitment Software',
    domain: 'fasttrack.com.au',
  },
  {
    name: 'Emarsys',
    domain: 'emarsys.com',
  },
  {
    name: 'NS1',
    domain: 'ns1.com',
  },
  {
    name: 'RANDEM GROUP',
    domain: 'randemgroup.com',
  },
  {
    name: 'Flow Commerce Inc.',
    domain: 'flow.io',
  },
  {
    name: 'Red Sift',
    domain: 'redsift.com',
  },
  {
    name: 'EZ Texting',
    domain: 'eztexting.com',
  },
  {
    name: 'LeagueApps',
    domain: 'leagueapps.com',
  },
  {
    name: 'AllocateRite',
    domain: 'allocaterite.com',
  },
  {
    name: 'Audiense',
    domain: 'audiense.com',
  },
  {
    name: 'EVOLVANT TECHNOLOGIES',
    domain: 'evolvant.tech',
  },
  {
    name: '#samsales Consulting',
    domain: 'samsalesconsulting.com',
  },
  {
    name: 'Jelled',
    domain: 'jelled.io',
  },
  {
    name: 'White Horse DIstribution, LLC',
    domain: 'whitehorsedistribution.com',
  },
  {
    name: 'Phenom People',
    domain: 'phenom.com',
  },
  {
    name: 'Databig Ai',
    domain: 'databig.ai',
  },
  {
    name: 'Rivet Work',
    domain: 'rivet.work',
  },
  {
    name: 'Marlimar Mobile Strategies',
    domain: 'marlimar.com',
  },
  {
    name: 'LiveChat',
    domain: 'livechat.com',
  },
  {
    name: 'APX Stream, Inc.',
    domain: 'apxstream.com',
  },
  {
    name: 'Swrve',
    domain: 'swrve.com',
  },
  {
    name: 'Redpoint Ventures',
    domain: 'redpoint.com',
  },
  {
    name: 'TechnologyAdvice',
    domain: 'technologyadvice.com',
  },
  {
    name: 'RudderStack',
    domain: 'rudderstack.com',
  },
  {
    name: 'Dragonflip',
    domain: 'dragonflip.com',
  },
  {
    name: '30Acres',
    domain: '30acres.com.au',
  },
  {
    name: 'Erica Consulting Services Pvt Ltd',
    domain: 'consultingerica.com',
  },
  {
    name: 'Clientela Inc',
    domain: 'clientela.com',
  },
  {
    name: 'Sysdig',
    domain: 'sysdig.com',
  },
  {
    name: 'Datamaran',
    domain: 'datamaran.com',
  },
  {
    name: 'Myriad360',
    domain: 'myriad360.com',
  },
  {
    name: 'aiCommerce',
    domain: 'aicommerce.com',
  },
  {
    name: 'Dr. Weedy',
    domain: 'dr-weedy.com',
  },
  {
    name: 'Kensium Solutions',
    domain: 'kensiumsolutions.com',
  },
  {
    name: 'Kenna Security',
    domain: 'kennasecurity.com',
  },
  {
    name: 'Cerqular',
    domain: 'cerqular.com',
  },
  {
    name: 'Igility Solutions',
    domain: 'igilitysolutions.com',
  },
  {
    name: 'Mailgun',
    domain: 'mailgun.com',
  },
  {
    name: 'DataGroomr',
    domain: 'datagroomr.com',
  },
  {
    name: 'Prowess Software Services',
    domain: 'prowesssoft.com',
  },
  {
    name: 'Grow10x',
    domain: 'grow10x.com.au',
  },
  {
    name: 'Cirrius Solutions',
    domain: 'cirriussolutions.com',
  },
  {
    name: 'Conductor',
    domain: 'conductor.com',
  },
  {
    name: 'Kicksaw',
    domain: 'kicksaw.com',
  },
  {
    name: 'Recruit Wizard',
    domain: 'recruitwizard.com',
  },
  {
    name: 'XenKaraïb Consulting',
    domain: 'xenkaraib.com',
  },
  {
    name: 'GeistM',
    domain: 'geistm.com',
  },
  {
    name: 'Acalvio Technologies',
    domain: 'acalvio.com',
  },
  {
    name: 'ALL Distribution',
    domain: 'alldistribution.ca',
  },
  {
    name: 'Argoid',
    domain: 'argoid.ai',
  },
  {
    name: 'City as a School',
    domain: 'cityasaschool.com',
  },
  {
    name: 'Bryj.ai',
    domain: 'bryj.ai',
  },
  {
    name: 'OpsRamp',
    domain: 'opsramp.com',
  },
  {
    name: 'Data Axle',
    domain: 'data-axle.com',
  },
  {
    name: 'Sales Programme',
    domain: 'salesprogramme.com',
  },
  {
    name: 'TailWind EMEA',
    domain: 'tailwindemea.net',
  },
  {
    name: 'Blockgraph',
    domain: 'blockgraph.co',
  },
  {
    name: 'comwrap',
    domain: 'comwrap.com',
  },
  {
    name: 'Contagious Digital',
    domain: 'contagious.digital',
  },
  {
    name: 'deepwatch',
    domain: 'deepwatch.com',
  },
  {
    name: 'TBS Internet',
    domain: 'tbs-certificates.co.uk',
  },
  {
    name: 'EduMe',
    domain: 'edume.com',
  },
  {
    name: 'NiceJob',
    domain: 'get.nicejob.co',
  },
  {
    name: 'Custom Donations',
    domain: 'customdonations.com',
  },
  {
    name: 'Impact Tech, Inc.',
    domain: 'impact.com',
  },
  {
    name: 'Entire Software',
    domain: 'entirehr.com.au',
  },
  {
    name: 'ProjectBox',
    domain: 'projectbox.com.au',
  },
  {
    name: 'Cisco',
    domain: 'cisco.com',
  },
  {
    name: 'Mobile2CRM',
    domain: 'mobile2crm.com',
  },
  {
    name: 'Answering Service Care',
    domain: 'answeringservicecare.net',
  },
  {
    name: 'Genie Goals',
    domain: 'geniegoals.co.uk',
  },
  {
    name: 'Provoke Solutions LLC',
    domain: 'provokesolutions.com',
  },
  {
    name: 'Fuel Cycle',
    domain: 'fuelcycle.com',
  },
  {
    name: 'Snap Analytics',
    domain: 'snapanalytics.co.uk',
  },
  {
    name: 'Moov Financial',
    domain: 'moov.io',
  },
  {
    name: 'Hoodoo Digital',
    domain: 'hoodoo.digital',
  },
  {
    name: 'SpringML, Inc.',
    domain: 'springml.com',
  },
  {
    name: 'Relationship Unlimited',
    domain: 'relationshipunlimited.com',
  },
  {
    name: 'Shopware',
    domain: 'shopware.com',
  },
  {
    name: 'Tamr',
    domain: 'tamr.com',
  },
  {
    name: 'Mail Manager',
    domain: 'mailmanager.com',
  },
  {
    name: 'hellotax',
    domain: 'hellotax.com',
  },
  {
    name: 'Resilinc',
    domain: 'resilinc.com',
  },
  {
    name: 'Form Factory',
    domain: 'theformfactory.co',
  },
  {
    name: 'Amperage Capital',
    domain: 'amperagecapital.com',
  },
  {
    name: 'Groundwork',
    domain: 'hellogroundwork.com',
  },
  {
    name: 'Fwd People',
    domain: 'fwdpeople.com',
  },
  {
    name: 'Teamtailor',
    domain: 'teamtailor.com',
  },
  {
    name: 'TapClicks',
    domain: 'tapclicks.com',
  },
  {
    name: 'TA Digital',
    domain: 'tadigital.com',
  },
  {
    name: 'ForgeRock',
    domain: 'forgerock.com',
  },
  {
    name: 'Leverage Assessments',
    domain: 'leverageassessments.com',
  },
  {
    name: 'HVR',
    domain: 'hvr-software.com',
  },
  {
    name: 'Bespin Labs',
    domain: 'bespinlabs.com',
  },
  {
    name: 'HotWax Commerce',
    domain: 'hotwax.co',
  },
  {
    name: 'MindsDB',
    domain: 'mindsdb.com',
  },
  {
    name: 'infoSecur',
    domain: 'info-secur.com',
  },
  {
    name: 'WordPress VIP',
    domain: 'wpvip.com',
  },
  {
    name: 'Kauneonga',
    domain: 'kauneonga.com',
  },
  {
    name: 'ONEFIRE, Inc.',
    domain: 'onefire.com',
  },
  {
    name: 'LogiGear',
    domain: 'logigear.com',
  },
  {
    name: 'Cupix, Inc.',
    domain: 'cupix.com',
  },
  {
    name: 'DroneBase',
    domain: 'dronebase.com',
  },
  {
    name: 'VG Systems',
    domain: 'vgsystems.com',
  },
  {
    name: 'Watts-Mueller',
    domain: 'watts-specialties.com',
  },
  {
    name: '3Play Media',
    domain: '3playmedia.com',
  },
  {
    name: 'Subscribe Pro',
    domain: 'subscribepro.com',
  },
  {
    name: 'Vegan Web Design',
    domain: 'veganwebdesign.com',
  },
  {
    name: 'ACCT',
    domain: 'acct.global',
  },
  {
    name: 'Americaneagle.com',
    domain: 'americaneagle.com',
  },
  {
    name: 'Apollo',
    domain: 'apollo.io',
  },
  {
    name: 'FIN-PAY',
    domain: 'finpay.co',
  },
  {
    name: 'TiER1 rapidLD',
    domain: 'rapidld.com',
  },
  {
    name: 'Facteus Inc',
    domain: 'facteus.com',
  },
  {
    name: 'Pay.com',
    domain: 'pay.com',
  },
  {
    name: 'Clements Worldwide',
    domain: 'clements.com',
  },
  {
    name: 'SHOPX',
    domain: 'shopx.co',
  },
  {
    name: 'Raydiant',
    domain: 'raydiant.com',
  },
  {
    name: 'Closer',
    domain: 'closer.app',
  },
  {
    name: 'Five Lakes Dental Practice Solutions',
    domain: 'fivelakespro.com',
  },
  {
    name: 'PaySimple',
    domain: 'paysimple.com',
  },
  {
    name: 'HingePoint',
    domain: 'hingepoint.com',
  },
  {
    name: 'Commsor',
    domain: 'commsor.com',
  },
  {
    name: 'Clarifai',
    domain: 'clarifai.com',
  },
  {
    name: 'Oropala, LLC',
    domain: 'oropala.com',
  },
  {
    name: 'Common Thread Collective',
    domain: 'commonthreadco.com',
  },
  {
    name: 'Turtl',
    domain: 'turtl.co',
  },
  {
    name: 'Eknotec Services',
    domain: 'eknotec.co',
  },
  {
    name: 'Sales BQ',
    domain: 'salesbq.com',
  },
  {
    name: 'ACD Operations',
    domain: 'aiacontracts.org',
  },
  {
    name: 'NorthOne',
    domain: 'northone.com',
  },
  {
    name: 'Arcade',
    domain: 'arcade.co',
  },
  {
    name: 'Story and Search',
    domain: 'storyandsearch.com',
  },
  {
    name: 'Cordial',
    domain: 'cordial.com',
  },
  {
    name: 'Place',
    domain: 'placetechnology.com',
  },
  {
    name: 'Coveo',
    domain: 'coveo.com',
  },
  {
    name: 'Symphosize, LLC',
    domain: 'symphosize.com',
  },
  {
    name: 'Userflow',
    domain: 'userflow.com',
  },
  {
    name: 'Kindful',
    domain: 'kindful.com',
  },
  {
    name: 'NovelVox',
    domain: 'novelvox.com',
  },
  {
    name: 'LateShipment.com',
    domain: 'lateshipment.com',
  },
  {
    name: 'League',
    domain: 'league.com',
  },
  {
    name: 'eBacon',
    domain: 'ebacon.com',
  },
  {
    name: 'Red Sky Alliance',
    domain: 'redskyalliance.org',
  },
  {
    name: 'Boost Commerce',
    domain: 'boostcommerce.net',
  },
  {
    name: 'divelement',
    domain: 'divelement.io',
  },
  {
    name: 'Workiva',
    domain: 'workiva.com',
  },
  {
    name: 'Seattle Study Club',
    domain: 'seattlestudyclub.com',
  },
  {
    name: 'BankRPA',
    domain: 'bankrpa.com',
  },
  {
    name: 'Octane AI',
    domain: 'octaneai.com',
  },
  {
    name: 'EquipmentShare.com, Inc.',
    domain: 'equipmentshare.com',
  },
  {
    name: 'Alation',
    domain: 'alation.com',
  },
  {
    name: 'GetJenny',
    domain: 'getjenny.com',
  },
  {
    name: 'Bolster',
    domain: 'bolster.com',
  },
  {
    name: 'Insurity',
    domain: 'insurity.com',
  },
  {
    name: 'Appical',
    domain: 'appical.net',
  },
  {
    name: 'Lytho',
    domain: 'lytho.com',
  },
  {
    name: 'Privitar',
    domain: 'privitar.com',
  },
  {
    name: 'SignEasy',
    domain: 'signeasy.com',
  },
  {
    name: 'KickUp',
    domain: 'kickup.co',
  },
  {
    name: 'Dynamic Tech Services, Inc.',
    domain: 'dynamictechservices.com',
  },
  {
    name: 'APS Payments a REPAY Company',
    domain: 'apspayments.com',
  },
  {
    name: 'Bright Interactive',
    domain: 'builtbybright.com',
  },
  {
    name: 'First Resonance',
    domain: 'firstresonance.io',
  },
  {
    name: 'Forms On Fire',
    domain: 'formsonfire.com',
  },
  {
    name: 'TeachFX',
    domain: 'teachfx.com',
  },
  {
    name: 'Radius Networks',
    domain: 'radiusnetworks.com',
  },
  {
    name: 'Madtrix',
    domain: 'madtrix.io',
  },
  {
    name: 'Kaltura',
    domain: 'kaltura.com',
  },
  {
    name: 'Zeus Logics, Inc',
    domain: 'zeuslogics.com',
  },
  {
    name: 'Terazo',
    domain: 'terazo.com',
  },
  {
    name: 'ImagineX Consulting',
    domain: 'imaginexconsulting.com',
  },
  {
    name: 'Foleon',
    domain: 'foleon.com',
  },
  {
    name: 'Iron Mountain',
    domain: 'ironmountain.com',
  },
  {
    name: 'AerieHub',
    domain: 'aeriehub.com',
  },
  {
    name: 'Outward Media',
    domain: 'outwardmedia.com',
  },
  {
    name: 'Rippling',
    domain: 'rippling.com',
  },
  {
    name: 'Contractor Appointments',
    domain: 'contractorappointments.com',
  },
  {
    name: 'MASAO',
    domain: 'masao.eu',
  },
  {
    name: 'ORISERVE',
    domain: 'oriserve.com',
  },
  {
    name: 'Kodaris',
    domain: 'kodaris.com',
  },
  {
    name: 'DNA LTB',
    domain: 'dna-ltb.com',
  },
  {
    name: 'SOFTRAX',
    domain: 'softrax.com',
  },
  {
    name: 'SplitMetrics',
    domain: 'splitmetrics.com',
  },
  {
    name: 'Compare Ethics',
    domain: 'compareethics.com',
  },
  {
    name: 'Xsell',
    domain: 'xsell-team.com',
  },
  {
    name: 'Milk Stork',
    domain: 'milkstork.com',
  },
  {
    name: 'Equilar, Inc.',
    domain: 'equilar.com',
  },
  {
    name: 'iPipeline',
    domain: 'ipipeline.com',
  },
  {
    name: 'ZEHNER',
    domain: 'zehnergroup.com',
  },
  {
    name: 'Shoelace',
    domain: 'shoelace.com',
  },
  {
    name: 'OVERTURE+',
    domain: 'overture.plus',
  },
  {
    name: 'SDG Group',
    domain: 'sdggroup.com',
  },
  {
    name: 'nice2chat',
    domain: 'nice2chat.com',
  },
  {
    name: 'Paraatech Inc',
    domain: 'paraatech.com',
  },
  {
    name: 'DoubleVerify',
    domain: 'doubleverify.com',
  },
  {
    name: 'Bridgeline Digital',
    domain: 'bridgeline.com',
  },
  {
    name: 's3bglobal',
    domain: 's3bglobal.com',
  },
  {
    name: 'Unconquered',
    domain: 'weareunconquered.co',
  },
  {
    name: 'SelfMade',
    domain: 'selfmade.co',
  },
  {
    name: 'The Answer Company',
    domain: 'theanswerco.com',
  },
  {
    name: 'DocuSign',
    domain: 'docusign.com',
  },
  {
    name: 'ONELIVE',
    domain: 'onelive.com',
  },
  {
    name: 'Figment',
    domain: 'figment.io',
  },
  {
    name: 'ProsperoHub Limited',
    domain: 'prosperohub.com',
  },
  {
    name: 'Trollbäck+',
    domain: 'trollback.com',
  },
  {
    name: '55PBX',
    domain: '55pbx.com',
  },
  {
    name: 'GroupBy',
    domain: 'groupbyinc.com',
  },
  {
    name: 'Fulfil.IO',
    domain: 'fulfil.io',
  },
  {
    name: 'intelliHR',
    domain: 'intellihr.co',
  },
  {
    name: 'Fifty Technologies',
    domain: 'fifty.io',
  },
  {
    name: 'Netwoven',
    domain: 'netwoven.com',
  },
  {
    name: 'Kruso A/S',
    domain: 'kruso.dk',
  },
  {
    name: 'Foursquare',
    domain: 'foursquare.com',
  },
  {
    name: 'Faculty',
    domain: 'faculty.ai',
  },
  {
    name: 'XGen AI',
    domain: 'xgen.ai',
  },
  {
    name: 'Cloudbakers',
    domain: 'cloudbakers.com',
  },
  {
    name: 'Digibee',
    domain: 'digibee.com',
  },
  {
    name: 'Centrical',
    domain: 'centrical.com',
  },
  {
    name: 'Challenge Marketing Group Ltd.',
    domain: 'challengemarketing.co.uk',
  },
  {
    name: 'InterCheck',
    domain: 'intercheck.com.au',
  },
  {
    name: 'Influence Agents',
    domain: 'influenceagents.com',
  },
  {
    name: 'Upscribe',
    domain: 'upscribe.io',
  },
  {
    name: 'American Box',
    domain: 'amboxkc.com',
  },
  {
    name: 'CWS Software',
    domain: 'cws-software.com',
  },
  {
    name: 'Oovvuu',
    domain: 'oovvuu.com',
  },
  {
    name: 'Intent',
    domain: 'intent.com',
  },
  {
    name: 'Athennian',
    domain: 'athennian.com',
  },
  {
    name: 'OSF Digital',
    domain: 'osf.digital',
  },
  {
    name: 'Cuebiq',
    domain: 'cuebiq.com',
  },
  {
    name: 'Synchrony',
    domain: 'mysynchrony.com',
  },
  {
    name: 'CRMNEXT',
    domain: 'crmnext.com',
  },
  {
    name: 'Sila',
    domain: 'silamoney.com',
  },
  {
    name: 'Gatsby',
    domain: 'gatsbyjs.com',
  },
  {
    name: 'Jones',
    domain: 'getjones.com',
  },
  {
    name: 'ADP',
    domain: 'adp.com',
  },
  {
    name: 'UpLead',
    domain: 'uplead.com',
  },
  {
    name: 'Conversion Crimes',
    domain: 'conversioncrimes.com',
  },
  {
    name: 'WoodWing Software',
    domain: 'woodwing.com',
  },
  {
    name: 'Amenitiz',
    domain: 'amenitiz.com',
  },
  {
    name: 'People Data Labs',
    domain: 'peopledatalabs.com',
  },
  {
    name: 'Jiminny',
    domain: 'jiminny.com',
  },
  {
    name: 'Kovai.co',
    domain: 'kovai.co',
  },
  {
    name: 'Go2',
    domain: 'go2impact.com',
  },
  {
    name: 'TeamGenius',
    domain: 'teamgenius.com',
  },
  {
    name: 'DataVisor',
    domain: 'datavisor.com',
  },
  {
    name: 'Elliptic',
    domain: 'elliptic.co',
  },
  {
    name: 'Zuora',
    domain: 'zuora.com',
  },
  {
    name: 'JDP',
    domain: 'jdp.com',
  },
  {
    name: 'Event Box',
    domain: 'myeventbox.com',
  },
  {
    name: 'Accelirate',
    domain: 'accelirate.com',
  },
  {
    name: 'SAU/CAL',
    domain: 'saucal.com',
  },
  {
    name: 'Fortella',
    domain: 'fortella.ai',
  },
  {
    name: 'Brightspot',
    domain: 'brightspot.com',
  },
  {
    name: 'Influitive',
    domain: 'influitive.com',
  },
  {
    name: 'Open ECX',
    domain: 'openecx.co.uk',
  },
  {
    name: 'TrustLogix, Inc',
    domain: 'trustlogix.io',
  },
  {
    name: 'Visiture',
    domain: 'visiture.com',
  },
  {
    name: 'Hazelcast',
    domain: 'hazelcast.com',
  },
  {
    name: 'Tappa',
    domain: 'tappa.com',
  },
  {
    name: 'Sentrien Systems',
    domain: 'sentrien.com',
  },
  {
    name: 'Qualified Digital',
    domain: 'qualifiedigital.com',
  },
  {
    name: 'Intelligems',
    domain: 'intelligems.io',
  },
  {
    name: 'To&From',
    domain: 'app.toandfrom.com',
  },
  {
    name: 'Go1',
    domain: 'go1.com',
  },
  {
    name: 'Midtown West Media',
    domain: 'midtownwestmedia.com',
  },
  {
    name: 'Shootsta',
    domain: 'shootsta.com',
  },
  {
    name: 'Mercury',
    domain: 'mercury.com',
  },
  {
    name: "Player's Health",
    domain: 'playershealth.com',
  },
  {
    name: 'Krish TechnoLabs - A Full Service Digital Commerce Agency',
    domain: 'krishtechnolabs.com',
  },
  {
    name: 'Actuado',
    domain: 'actuado.com',
  },
  {
    name: 'Tinuiti',
    domain: 'tinuiti.com',
  },
  {
    name: 'CloudTask',
    domain: 'cloudtask.com',
  },
  {
    name: 'WeatherAlpha',
    domain: 'weatheralpha.com',
  },
  {
    name: 'MT Newswires',
    domain: 'mtnewswires.com',
  },
  {
    name: 'EMAM Inc.',
    domain: 'emamsolutions.com',
  },
  {
    name: 'Jobvite',
    domain: 'jobvite.com',
  },
  {
    name: 'Blue dot',
    domain: 'bluedotcorp.com',
  },
  {
    name: 'Datadog',
    domain: 'datadoghq.com',
  },
  {
    name: 'Blue Acorn iCi',
    domain: 'blueacornici.com',
  },
  {
    name: 'Intentsify',
    domain: 'intentsify.io',
  },
  {
    name: 'Regal Voice',
    domain: 'regal.io',
  },
  {
    name: 'Redbox Mobile',
    domain: 'redboxmobile.com',
  },
  {
    name: 'REISOS Consulting, Inc.',
    domain: 'reisosconsulting.com',
  },
  {
    name: 'Shipday',
    domain: 'shipday.com',
  },
  {
    name: 'intakeQ',
    domain: 'intakeq.com',
  },
  {
    name: 'Zymplify Limited',
    domain: 'zymplify.com',
  },
  {
    name: 'Elva Design Group',
    domain: 'helloelva.com',
  },
  {
    name: 'PureClarity',
    domain: 'pureclarity.com',
  },
  {
    name: 'PunchAlert',
    domain: 'punchalert.com',
  },
  {
    name: 'Cremalab, LLC DBA "Crema"',
    domain: 'crema.us',
  },
  {
    name: 'Headset',
    domain: 'headset.io',
  },
  {
    name: 'Captiv8',
    domain: 'captiv8.io',
  },
  {
    name: 'JH - Magento eCommerce Agency',
    domain: 'wearejh.com',
  },
  {
    name: 'Linkproject',
    domain: 'linkproject.global',
  },
  {
    name: 'Xtremepush',
    domain: 'xtremepush.com',
  },
  {
    name: 'Soleadify',
    domain: 'soleadify.com',
  },
  {
    name: 'CITYDATA.ai',
    domain: 'citydata.ai',
  },
  {
    name: 'Cradle Limited',
    domain: 'cradle.io',
  },
  {
    name: 'Brooklyn Bridge Ventures',
    domain: 'brooklynbridge.vc',
  },
  {
    name: 'Momentum Worldwide',
    domain: 'momentumww.com',
  },
  {
    name: 'OvalEdge',
    domain: 'ovaledge.com',
  },
  {
    name: 'Killi Inc.',
    domain: 'killi.io',
  },
  {
    name: 'Area 1 Security',
    domain: 'area1security.com',
  },
  {
    name: 'Scalero',
    domain: 'scalero.io',
  },
  {
    name: 'DigiWise Digital Solutions',
    domain: 'digiwisesolutions.com',
  },
  {
    name: 'SupplyStack',
    domain: 'supplystack.com',
  },
  {
    name: 'Staffbase',
    domain: 'staffbase.com',
  },
  {
    name: 'OpenSponsorship',
    domain: 'opensponsorship.com',
  },
  {
    name: 'Integrum Technologies',
    domain: 'integrumsolutions.in',
  },
  {
    name: 'Cloudigrate LLC',
    domain: 'cloudigrate.com',
  },
  {
    name: 'Payability',
    domain: 'payability.com',
  },
  {
    name: 'Vimeo',
    domain: 'vimeo.com',
  },
  {
    name: 'Naehas',
    domain: 'naehas.com',
  },
  {
    name: 'Softchoice',
    domain: 'softchoice.com',
  },
  {
    name: 'Scorebuddy',
    domain: 'scorebuddyqa.com',
  },
  {
    name: 'ThankView',
    domain: 'thankview.com',
  },
  {
    name: 'Workrise',
    domain: 'workrise.com',
  },
  {
    name: 'Practifi',
    domain: 'practifi.com',
  },
  {
    name: 'Novel',
    domain: 'benovel.com',
  },
  {
    name: 'Asquared WordPress Agency',
    domain: 'asquared.agency',
  },
  {
    name: 'Spectrum Labs',
    domain: 'spectrumlabsai.com',
  },
  {
    name: 'Striktly',
    domain: 'striktlysoftware.com',
  },
  {
    name: 'Clarasys',
    domain: 'clarasys.com',
  },
  {
    name: 'Modern Tribe',
    domain: 'tri.be',
  },
  {
    name: 'Monster Agency®',
    domain: 'monsteragency.com',
  },
  {
    name: 'GrowFlow',
    domain: 'growflow.com',
  },
  {
    name: 'Agyle Time',
    domain: 'agyletime.com',
  },
  {
    name: 'Sortly',
    domain: 'sortly.com',
  },
  {
    name: 'DITA Strategies',
    domain: 'ditastrategies.com',
  },
  {
    name: 'Recart',
    domain: 'recart.com',
  },
  {
    name: 'ketteQ',
    domain: 'ketteq.com',
  },
  {
    name: 'Cubic Interactive',
    domain: 'cubic-interactive.com',
  },
  {
    name: 'Buyerlink',
    domain: 'buyerlink.com',
  },
  {
    name: 'Creating Impact Training',
    domain: 'creatingimpact.in',
  },
  {
    name: 'Netlink',
    domain: 'netlink.com',
  },
  {
    name: 'Novarc Technologies',
    domain: 'novarctech.com',
  },
  {
    name: 'DefDevice',
    domain: 'defdevice.com',
  },
  {
    name: 'Atlan',
    domain: 'atlan.com',
  },
  {
    name: 'iOPEX technologies',
    domain: 'iopex.com',
  },
  {
    name: 'Neste Live!  A Live Nation Company',
    domain: 'nestelive.com',
  },
  {
    name: 'Revinate Inc.',
    domain: 'revinate.com',
  },
  {
    name: 'Jobma',
    domain: 'jobma.com',
  },
  {
    name: 'AeroPay',
    domain: 'aeropay.com',
  },
  {
    name: 'Mailmodo',
    domain: 'mailmodo.com',
  },
  {
    name: 'Link Market Services',
    domain: 'linkmarketservices.com',
  },
  {
    name: 'Invesdom',
    domain: 'invesdom.com',
  },
  {
    name: 'Fuel50',
    domain: 'fuel50.com',
  },
  {
    name: 'Dubb',
    domain: 'dubb.com',
  },
  {
    name: 'Ipanema Comunicación',
    domain: 'ipanemacomunicacion.com',
  },
  {
    name: 'Merj',
    domain: 'merj.com',
  },
  {
    name: 'Reveel',
    domain: 'reveelgroup.com',
  },
  {
    name: 'Pazcare',
    domain: 'pazcare.com',
  },
  {
    name: 'ConsultMyApp',
    domain: 'consultmyapp.com',
  },
  {
    name: 'Gr8insight',
    domain: 'gr8insight.com',
  },
  {
    name: 'BusinessOptix',
    domain: 'businessoptix.com',
  },
  {
    name: 'Socialgist',
    domain: 'socialgist.com',
  },
  {
    name: 'SigniFlow',
    domain: 'signiflow.com',
  },
  {
    name: 'Cityblock Health',
    domain: 'cityblock.com',
  },
  {
    name: 'Restaurant365',
    domain: 'restaurant365.com',
  },
  {
    name: 'FullStory',
    domain: 'fullstory.com',
  },
  {
    name: 'UviaUs',
    domain: 'uviaus.com',
  },
  {
    name: 'Mindracer Consulting',
    domain: 'mindracerconsulting.com',
  },
  {
    name: 'NRM Communications',
    domain: 'nrmcommunications.com',
  },
  {
    name: 'DueDil',
    domain: 'duedil.com',
  },
  {
    name: 'The Code Company',
    domain: 'thecode.co',
  },
  {
    name: 'Bloom Agency',
    domain: 'bloomagency.io',
  },
  {
    name: 'Life Media UK',
    domain: 'lifemediauk.com',
  },
  {
    name: 'Stellar Development Foundation',
    domain: 'stellar.org',
  },
  {
    name: 'NuORDER',
    domain: 'nuorder.com',
  },
  {
    name: 'Corelight',
    domain: 'corelight.com',
  },
  {
    name: 'NoteVault',
    domain: 'notevault.com',
  },
  {
    name: 'Skylark',
    domain: 'skylarkplatform.com',
  },
  {
    name: 'Pattern',
    domain: 'pattern.com',
  },
  {
    name: 'Sparkfly',
    domain: 'sparkfly.com',
  },
  {
    name: 'Success Programme',
    domain: 'successprogramme.com',
  },
  {
    name: '8x8',
    domain: '8x8.com',
  },
  {
    name: 'Heuvel Marketing',
    domain: 'heuvelmarketing.com',
  },
  {
    name: 'Goldsby Construction',
    domain: 'goldsbyconstruction.com',
  },
  {
    name: 'Amerilist',
    domain: 'amerilist.com',
  },
  {
    name: 'Udemy',
    domain: 'udemy.com',
  },
  {
    name: 'DIGITALL',
    domain: 'digitall.com',
  },
  {
    name: 'Blayzer Commerce',
    domain: 'blayzercommerce.com',
  },
  {
    name: 'Talkable',
    domain: 'talkable.com',
  },
  {
    name: 'SoundCommerce',
    domain: 'soundcommerce.com',
  },
  {
    name: 'Irish Titan',
    domain: 'irishtitan.com',
  },
  {
    name: 'Airwallex',
    domain: 'airwallex.com',
  },
  {
    name: 'Symbl.ai',
    domain: 'symbl.ai',
  },
  {
    name: 'ArmorPoint',
    domain: 'armorpoint.com',
  },
  {
    name: 'Nicereply',
    domain: 'nicereply.com',
  },
  {
    name: 'Fleetyr',
    domain: 'fleetyr.com',
  },
  {
    name: 'Campus',
    domain: 'campus.app',
  },
  {
    name: 'Formstack',
    domain: 'formstack.com',
  },
  {
    name: 'Loop Integration',
    domain: 'loopintegration.com',
  },
  {
    name: 'Sphinx Medical Technologies, Inc.',
    domain: 'callmydoc.com',
  },
  {
    name: 'Blue Array SEO',
    domain: 'bluearray.co.uk',
  },
  {
    name: 'IC Robotics',
    domain: 'icrobotics.com',
  },
  {
    name: 'Verato, Inc.',
    domain: 'verato.com',
  },
  {
    name: 'Kerr Consulting',
    domain: 'kerrconsulting.com',
  },
  {
    name: 'ObservePoint',
    domain: 'observepoint.com',
  },
  {
    name: 'SendinBlue',
    domain: 'sendinblue.com',
  },
  {
    name: 'Obility',
    domain: 'obilityb2b.com',
  },
  {
    name: 'Presidio',
    domain: 'presidio.com',
  },
  {
    name: 'When I Work',
    domain: 'wheniwork.com',
  },
  {
    name: 'Retailbound',
    domain: 'retailbound.com',
  },
  {
    name: 'Mixpanel',
    domain: 'mixpanel.com',
  },
  {
    name: 'ChatbotSummit',
    domain: 'chatbotsummit.com',
  },
  {
    name: 'OneMob',
    domain: 'onemob.com',
  },
  {
    name: 'Fidel API',
    domain: 'fidelapi.com',
  },
  {
    name: 'Pequity',
    domain: 'getpequity.com',
  },
  {
    name: 'Venn by Two Sigma',
    domain: 'venn.twosigma.com',
  },
  {
    name: 'Zensar Technologies',
    domain: 'zensar.com',
  },
  {
    name: 'Platinum Payments',
    domain: 'platinumpayments.com',
  },
  {
    name: 'TrueLook, Inc',
    domain: 'truelook.com',
  },
  {
    name: 'ShipperHQ',
    domain: 'shipperhq.com',
  },
  {
    name: 'BrightScope',
    domain: 'brightscope.com',
  },
  {
    name: 'Vojigo AB',
    domain: 'vojigo.se',
  },
  {
    name: 'Umbraco',
    domain: 'umbraco.com',
  },
  {
    name: 'Tidio',
    domain: 'tidio.com',
  },
  {
    name: 'Tenzo',
    domain: 'gotenzo.com',
  },
  {
    name: 'Officevibe',
    domain: 'officevibe.com',
  },
  {
    name: 'Nosto',
    domain: 'nosto.com',
  },
  {
    name: '2Emotion',
    domain: '2emotion.com',
  },
  {
    name: 'The Channel Method',
    domain: 'thechannelmethod.com',
  },
  {
    name: 'Ricochet B2B',
    domain: 'ricochetb2b.com',
  },
  {
    name: 'Onosys',
    domain: 'onosys.com',
  },
  {
    name: 'Relokia',
    domain: 'relokia.com',
  },
  {
    name: 'Touchstorm',
    domain: 'touchstorm.com',
  },
  {
    name: 'SpiderGroup',
    domain: 'spidergroup.co.uk',
  },
  {
    name: 'Profitable Media',
    domain: 'profitablemedia.com',
  },
  {
    name: 'Materialize',
    domain: 'materialize.com',
  },
  {
    name: 'Capacity',
    domain: 'capacity.com',
  },
  {
    name: 'QeWebby',
    domain: 'qewebby.com',
  },
  {
    name: 'Adjacency',
    domain: 'adjacency.org',
  },
  {
    name: 'Markezing',
    domain: 'markezing.com',
  },
  {
    name: 'DigitalOcean',
    domain: 'digitalocean.com',
  },
  {
    name: 'Desygner',
    domain: 'desygner.com',
  },
  {
    name: 'Dataiku',
    domain: 'dataiku.com',
  },
  {
    name: 'Looker',
    domain: 'looker.com',
  },
  {
    name: 'Valtech',
    domain: 'valtech.com',
  },
  {
    name: 'Kyoo',
    domain: 'kyoo.tech',
  },
  {
    name: 'Blanka',
    domain: 'blankabrand.com',
  },
  {
    name: 'Mailshake',
    domain: 'mailshake.com',
  },
  {
    name: 'By Association Only',
    domain: 'byassociationonly.com',
  },
  {
    name: 'Merchant Stronghold',
    domain: 'merchantstronghold.com',
  },
  {
    name: 'Merlin/Leonard',
    domain: 'merlinleonard.com',
  },
  {
    name: 'MightyHive',
    domain: 'mightyhive.com',
  },
  {
    name: 'SmartSites',
    domain: 'smartsites.com',
  },
  {
    name: 'McLeod Software',
    domain: 'mcleodsoftware.com',
  },
  {
    name: 'Asperii',
    domain: 'asperii.com',
  },
  {
    name: 'Fractal Analytics',
    domain: 'fractal.ai',
  },
  {
    name: 'FUPRO Support Center',
    domain: 'fupro.be',
  },
  {
    name: 'Synatic',
    domain: 'synatic.com',
  },
  {
    name: 'Comestri',
    domain: 'comestri.com',
  },
  {
    name: 'CobbleStone Software',
    domain: 'cobblestonesoftware.com',
  },
  {
    name: 'Quantum Metric',
    domain: 'quantummetric.com',
  },
  {
    name: 'Mobivity',
    domain: 'mobivity.com',
  },
  {
    name: 'Contentstack',
    domain: 'contentstack.com',
  },
  {
    name: 'KBK Communications',
    domain: 'kbkcommunications.com',
  },
  {
    name: 'Peyya',
    domain: 'peyya.co',
  },
  {
    name: 'HappyOrNot',
    domain: 'happy-or-not.com',
  },
  {
    name: 'Morphosis',
    domain: 'morphos.is',
  },
  {
    name: 'Ascential',
    domain: 'ascential.com',
  },
  {
    name: 'Bauhaus Consultancy',
    domain: 'bauhausconsultancy.com',
  },
  {
    name: 'Wipster',
    domain: 'wipster.io',
  },
  {
    name: 'SBN Consultants Inc',
    domain: 'sbnconsultants.com',
  },
  {
    name: 'Accelerist',
    domain: 'accelerist.com',
  },
  {
    name: 'Mercury Data Science',
    domain: 'mercuryds.com',
  },
  {
    name: 'Personify XP',
    domain: 'personifyxp.com',
  },
  {
    name: '6sense',
    domain: '6sense.com',
  },
  {
    name: 'Nobl9',
    domain: 'nobl9.com',
  },
  {
    name: 'iRestore',
    domain: 'irestoreapp.com',
  },
  {
    name: 'dotCMS',
    domain: 'dotcms.com',
  },
  {
    name: 'Lanshore LLC',
    domain: 'lanshore.com',
  },
  {
    name: 'Colmar Capital',
    domain: 'colmarcapital.com',
  },
  {
    name: 'ON24',
    domain: 'on24.com',
  },
  {
    name: 'ITECH IT',
    domain: 'itechit.com.br',
  },
  {
    name: 'Aligent',
    domain: 'aligent.com.au',
  },
  {
    name: 'O3 World',
    domain: 'o3world.com',
  },
  {
    name: 'Cyberres',
    domain: 'cyberres.com',
  },
  {
    name: 'Traverse Data, Inc',
    domain: 'traversedata.com',
  },
  {
    name: 'springbig',
    domain: 'springbig.com',
  },
  {
    name: 'TruRating',
    domain: 'trurating.com',
  },
  {
    name: 'Beck Technology',
    domain: 'beck-technology.com',
  },
  {
    name: 'Kratikal',
    domain: 'kratikal.com',
  },
  {
    name: 'Sisense',
    domain: 'sisense.com',
  },
  {
    name: 'Accedo',
    domain: 'accedo.tv',
  },
  {
    name: 'loplat',
    domain: 'loplat.com',
  },
  {
    name: 'Intento',
    domain: 'inten.to',
  },
  {
    name: 'Reign',
    domain: 'reign.cl',
  },
  {
    name: 'Smooth Commerce',
    domain: 'smooth.tech',
  },
  {
    name: 'Occupop',
    domain: 'occupop.com',
  },
  {
    name: 'Hired',
    domain: 'hired.com',
  },
  {
    name: 'MarketShare Growth Experts',
    domain: 'growmarketshare.com',
  },
  {
    name: 'Snowplow Analytics',
    domain: 'snowplow.io',
  },
  {
    name: 'IntSights',
    domain: 'intsights.com',
  },
  {
    name: 'White Ops',
    domain: 'whiteops.com',
  },
  {
    name: 'Cysurance',
    domain: 'cysurance.com',
  },
  {
    name: 'Enactor',
    domain: 'enactor.co',
  },
  {
    name: 'Joynd',
    domain: 'joynd.io',
  },
  {
    name: 'Blue Prism Software, Inc.',
    domain: 'blueprism.com',
  },
  {
    name: 'Focused Energy',
    domain: 'focusedenergy.work',
  },
  {
    name: 'Foundr',
    domain: 'foundr.com',
  },
  {
    name: 'Xpressdocs',
    domain: 'xpressdocs.com',
  },
  {
    name: 'Republix',
    domain: 'republix.com',
  },
  {
    name: 'Whaly',
    domain: 'whaly.io',
  },
  {
    name: 'Thunderbite',
    domain: 'thunderbite.com',
  },
  {
    name: 'Baqend',
    domain: 'speedkit.com',
  },
  {
    name: 'Infinityexi',
    domain: 'infinityexi.com',
  },
  {
    name: 'Agentz',
    domain: 'agentz.ai',
  },
  {
    name: 'SmartAcre',
    domain: 'getsmartacre.com',
  },
  {
    name: 'Tattle',
    domain: 'gettattle.com',
  },
  {
    name: 'Skilljar',
    domain: 'skilljar.com',
  },
  {
    name: 'akaCRM Inc.',
    domain: 'akacrm.com',
  },
  {
    name: 'The Build Creative',
    domain: 'thebuildcreative.com',
  },
  {
    name: 'Survicate',
    domain: 'survicate.com',
  },
  {
    name: 'Votacall',
    domain: 'votacall.com',
  },
  {
    name: 'Primer',
    domain: 'sayprimer.com',
  },
  {
    name: 'Maestra Consultoria',
    domain: 'maestra.com.br',
  },
  {
    name: 'Genesys',
    domain: 'genesys.com',
  },
  {
    name: 'Stellar Tickets',
    domain: 'stellartickets.com',
  },
  {
    name: 'LogicLoop',
    domain: 'getlogicloop.com',
  },
  {
    name: 'Glass Elephant',
    domain: 'glasselephant.com',
  },
  {
    name: 'NCSolutions',
    domain: 'ncsolutions.com',
  },
  {
    name: 'SpringDB',
    domain: 'springdb.io',
  },
  {
    name: 'Insight Enterprises',
    domain: 'insight.com',
  },
  {
    name: 'Paras Education Services',
    domain: 'isloan.org',
  },
  {
    name: 'Finaloop',
    domain: 'finaloop.com',
  },
  {
    name: 'LetsBuild',
    domain: 'letsbuild.com',
  },
  {
    name: 'OxBlue',
    domain: 'oxblue.com',
  },
  {
    name: 'Bassett Furniture Industries',
    domain: 'bassettfurniture.com',
  },
  {
    name: 'Bluewater',
    domain: 'bluewaterlearning.com',
  },
  {
    name: 'Eclipse Group Solutions',
    domain: 'eclipsegroup.co.uk',
  },
  {
    name: 'Twilio',
    domain: 'twilio.com',
  },
  {
    name: 'SaleSpider Media',
    domain: 'salespidermedia.com',
  },
  {
    name: 'Decathlon',
    domain: 'decathlon.com',
  },
  {
    name: 'Taboola',
    domain: 'taboola.com',
  },
  {
    name: 'Anjdeb Consulting',
    domain: 'anjdeb.com',
  },
  {
    name: 'Jasper PIM',
    domain: 'jasperpim.com',
  },
  {
    name: 'Onfleet',
    domain: 'onfleet.com',
  },
  {
    name: 'Invoice2go',
    domain: '2go.com',
  },
  {
    name: 'Octopai Ltd.',
    domain: 'octopai.com',
  },
  {
    name: 'Bookkeeper360',
    domain: 'bookkeeper360.com',
  },
  {
    name: 'Shogun',
    domain: 'getshogun.com',
  },
  {
    name: 'In The Cloud Technologies, LLC',
    domain: 'inthecloudtech.net',
  },
  {
    name: 'SKUx',
    domain: 'skux.io',
  },
  {
    name: 'Sales for Life',
    domain: 'salesforlife.com',
  },
  {
    name: 'Litmus',
    domain: 'litmus.com',
  },
  {
    name: 'Openxcellinc',
    domain: 'openxcellinc.com',
  },
  {
    name: 'Notabene',
    domain: 'notabene.id',
  },
  {
    name: 'Wonolo',
    domain: 'wonolo.com',
  },
  {
    name: 'Grayscale',
    domain: 'grayscaleapp.com',
  },
  {
    name: 'MRI Software',
    domain: 'mrisoftware.com',
  },
  {
    name: 'LoudCrowd',
    domain: 'loudcrowd.com',
  },
  {
    name: 'TryNow',
    domain: 'trynow.io',
  },
  {
    name: '4Convergence',
    domain: '4converge.com',
  },
  {
    name: 'Petrinovich Pugh & Company',
    domain: 'ppandco.com',
  },
  {
    name: 'Bayard Advertising',
    domain: 'bayardad.com',
  },
  {
    name: 'Loop Club',
    domain: 'loop.club',
  },
  {
    name: 'Wheebox',
    domain: 'wheebox.com',
  },
  {
    name: 'electrIQ marketing',
    domain: 'electriqmarketing.com',
  },
  {
    name: 'LaPlante Management',
    domain: 'laplantemanagement.com',
  },
  {
    name: 'Allstacks',
    domain: 'allstacks.com',
  },
  {
    name: 'Bennie',
    domain: 'bennie.com',
  },
  {
    name: 'Exegy',
    domain: 'exegy.com',
  },
  {
    name: 'Awesome Website Guys',
    domain: 'awesomewebsiteguys.com',
  },
  {
    name: 'Order Media',
    domain: 'ordermedia.com',
  },
  {
    name: 'EXLRT',
    domain: 'exlrt.com',
  },
  {
    name: 'Strigo',
    domain: 'strigo.io',
  },
  {
    name: 'Kidsoft',
    domain: 'kidsoft.com.au',
  },
  {
    name: 'GrowthLoop',
    domain: 'growthloop.com',
  },
  {
    name: 'Orgnostic',
    domain: 'orgnostic.com',
  },
  {
    name: 'Kasatria Technologies Vietnam',
    domain: 'kasatria.vn',
  },
  {
    name: 'Speedeon Data',
    domain: 'speedeondata.com',
  },
  {
    name: 'dirico',
    domain: 'dirico.io',
  },
  {
    name: 'Camber Creative',
    domain: 'cmbr.co',
  },
  {
    name: 'Pimcore',
    domain: 'pimcore.com',
  },
  {
    name: 'Caylent',
    domain: 'caylent.com',
  },
  {
    name: 'GRIN',
    domain: 'grin.co',
  },
  {
    name: 'No Bounds Digital',
    domain: 'noboundsdigital.com',
  },
  {
    name: 'Adaptive Pulse',
    domain: 'adaptivepulse.com',
  },
  {
    name: 'CallRail',
    domain: 'callrail.com',
  },
  {
    name: 'Shipup',
    domain: 'shipup.co',
  },
  {
    name: 'Ingage',
    domain: 'ingage.io',
  },
  {
    name: 'PowerReviews',
    domain: 'powerreviews.com',
  },
  {
    name: 'WorkRamp',
    domain: 'workramp.com',
  },
  {
    name: 'ZoomInfo',
    domain: 'zoominfo.com',
  },
  {
    name: 'Enboarder',
    domain: 'enboarder.com',
  },
  {
    name: 'CredShare',
    domain: 'credshare.com',
  },
  {
    name: 'Data Talks',
    domain: 'datatalks.se',
  },
  {
    name: 'Elementary Digital',
    domain: 'elementarydigital.co.uk',
  },
  {
    name: 'Privy',
    domain: 'privy.com',
  },
  {
    name: 'Pickit',
    domain: 'pickit.com',
  },
  {
    name: 'FlawsBug-Tech',
    domain: 'flawsbug-tech.com',
  },
  {
    name: 'Parsable',
    domain: 'parsable.com',
  },
  {
    name: 'MomentFeed',
    domain: 'momentfeed.com',
  },
  {
    name: 'Planview',
    domain: 'planview.com',
  },
  {
    name: 'Knoq',
    domain: 'knoq.com',
  },
  {
    name: 'Touch Ahead Software',
    domain: 'touchahead.com',
  },
  {
    name: 'MessageGears',
    domain: 'messagegears.com',
  },
  {
    name: 'i-Centrum AB',
    domain: 'i-centrum.se',
  },
  {
    name: '\uD83D\uDE9A Adgile Media \uD83D\uDE9A',
    domain: 'adgile.co',
  },
  {
    name: 'VAWLTED',
    domain: 'vawlted.com',
  },
  {
    name: 'The Outbound Sales Guy',
    domain: 'theoutboundsalesguy.com',
  },
  {
    name: 'Sinch',
    domain: 'sinch.com',
  },
  {
    name: 'Global Scaling Academy',
    domain: 'globalscalingacademy.com',
  },
  {
    name: 'LTVplus',
    domain: 'ltvplus.com',
  },
  {
    name: 'Funnel',
    domain: 'funnel.io',
  },
  {
    name: 'Namogoo',
    domain: 'namogoo.com',
  },
  {
    name: 'Fiat Growth',
    domain: 'fiatgrowth.com',
  },
  {
    name: 'aqfer',
    domain: 'aqfer.com',
  },
  {
    name: 'Electric Enjin',
    domain: 'electricenjin.com',
  },
  {
    name: 'Moni Media',
    domain: 'monigroup.com',
  },
  {
    name: 'Checkout.com',
    domain: 'checkout.com',
  },
  {
    name: 'GoodKarma',
    domain: 'goodkarma.agency',
  },
  {
    name: 'CNVYR Agency LA',
    domain: 'cnvyr.agency',
  },
  {
    name: 'Recarta IT',
    domain: 'recarta.co.uk',
  },
  {
    name: 'Aptitive',
    domain: 'aptitive.com',
  },
  {
    name: 'Raven360',
    domain: 'raven360.com',
  },
  {
    name: 'SourceScrub',
    domain: 'sourcescrub.com',
  },
  {
    name: 'Bluestone PIM',
    domain: 'bluestonepim.com',
  },
  {
    name: 'SumTotal Systems',
    domain: 'sumtotalsystems.com',
  },
  {
    name: 'KIOSK Information Systems',
    domain: 'kiosk.com',
  },
  {
    name: 'RSG Media',
    domain: 'rsgmedia.com',
  },
  {
    name: 'W.B. Jones Heating & Air',
    domain: 'wbjonesheatingair.demo',
  },
  {
    name: 'STAND 8',
    domain: 'stand8.io',
  },
  {
    name: 'diconium',
    domain: 'diconium.com',
  },
  {
    name: 'Lone Fir Creative',
    domain: 'lonefircreative.com',
  },
  {
    name: 'Gremlin',
    domain: 'gremlin.com',
  },
  {
    name: 'Woods & Grammercy',
    domain: 'woodsgrammercy.demo',
  },
  {
    name: 'The Ark (cm) Limited',
    domain: 'ark-data.co.uk',
  },
  {
    name: 'Community Boost',
    domain: 'communityboost.org',
  },
  {
    name: 'Roswell Studios',
    domain: 'roswellstudios.com',
  },
  {
    name: 'Pepped',
    domain: 'peppedup.co.uk',
  },
  {
    name: 'Oxylabs',
    domain: 'oxylabs.io',
  },
  {
    name: 'Sticky Digital',
    domain: 'stickydigital.io',
  },
  {
    name: 'Six20 Partners',
    domain: 'six20partners.com',
  },
  {
    name: 'Astute Payroll',
    domain: 'astutepayroll.com',
  },
  {
    name: 'Threekit',
    domain: 'threekit.com',
  },
  {
    name: 'Whalen.io',
    domain: 'whalen.io',
  },
  {
    name: 'Adlucent',
    domain: 'adlucent.com',
  },
  {
    name: 'Ostmodern',
    domain: 'ostmodern.co.uk',
  },
  {
    name: 'SeedX',
    domain: 'seedx.us',
  },
  {
    name: 'Crux',
    domain: 'cruxinformatics.com',
  },
  {
    name: 'Peel',
    domain: 'peelinsights.com',
  },
  {
    name: 'Carousel Digital Signage',
    domain: 'carouselsignage.com',
  },
  {
    name: 'Kleer LLC',
    domain: 'kleer.com',
  },
  {
    name: 'ShipHero',
    domain: 'shiphero.com',
  },
  {
    name: 'Forma',
    domain: 'formatech.com',
  },
  {
    name: 'Top Information',
    domain: 'topi.io',
  },
  {
    name: 'Strawberry',
    domain: 'strawberry.co.uk',
  },
  {
    name: 'Demodesk',
    domain: 'demodesk.com',
  },
  {
    name: 'meshIQ',
    domain: 'meshiq.com',
  },
  {
    name: 'Rocket Shippers',
    domain: 'rocketshippers.com',
  },
  {
    name: 'Tribe47',
    domain: 'tribe47.com',
  },
  {
    name: 'Shareable Solutions, Inc.',
    domain: 'shareablesinc.com',
  },
  {
    name: 'Salesroom',
    domain: 'salesroom.com',
  },
  {
    name: 'FSMarTech',
    domain: 'fsmartech.co.uk',
  },
  {
    name: 'Highbridge',
    domain: 'highbridgeconsultants.com',
  },
  {
    name: 'Commerce.AI',
    domain: 'commerce.ai',
  },
  {
    name: 'Armorblox',
    domain: 'armorblox.com',
  },
  {
    name: 'Goji Systems',
    domain: 'gojisystems.com',
  },
  {
    name: 'Cyabra',
    domain: 'cyabra.com',
  },
  {
    name: 'DailyKarma',
    domain: 'dailykarma.com',
  },
  {
    name: 'Acxiom',
    domain: 'acxiom.com',
  },
  {
    name: 'Talkdesk',
    domain: 'talkdesk.com',
  },
  {
    name: 'MediaCenter Rotterdam',
    domain: 'mediacenterrotterdam.nl',
  },
  {
    name: 'Dixa',
    domain: 'dixa.com',
  },
  {
    name: 'Profound Strategy',
    domain: 'profoundstrategy.com',
  },
  {
    name: 'Quantiphi',
    domain: 'quantiphi.com',
  },
  {
    name: 'Pravda Media Group',
    domain: 'pravdam.com',
  },
  {
    name: 'Empire Selling',
    domain: 'empireselling.com',
  },
  {
    name: 'CallMiner',
    domain: 'callminer.com',
  },
  {
    name: 'Kapstone Medical',
    domain: 'kapstonemedical.com',
  },
  {
    name: 'Xrosswork',
    domain: 'xrosswork.com',
  },
  {
    name: 'Alyce',
    domain: 'alyce.com',
  },
  {
    name: 'Digimarc',
    domain: 'digimarc.com',
  },
  {
    name: 'Balto',
    domain: 'balto.ai',
  },
  {
    name: 'Jamf',
    domain: 'jamf.com',
  },
  {
    name: 'Tapcart',
    domain: 'tapcart.com',
  },
  {
    name: 'Leonard Labs',
    domain: 'bobbyleonard.me',
  },
  {
    name: 'datashake',
    domain: 'datashake.fr',
  },
  {
    name: 'idibu',
    domain: 'idibu.com',
  },
  {
    name: 'Sis ID',
    domain: 'sis-id.com',
  },
  {
    name: 'SUSE LLC',
    domain: 'suse.com',
  },
  {
    name: 'Embea',
    domain: 'embea.com',
  },
  {
    name: 'LT Core Consultancy',
    domain: 'ltcoreconsultancy.com',
  },
  {
    name: 'Feelter',
    domain: 'feelter.com',
  },
  {
    name: 'Quarry',
    domain: 'quarry.com',
  },
  {
    name: 'Bungie Foundation',
    domain: 'bungiefoundation.org',
  },
  {
    name: 'TESLA Inc.',
    domain: 'teslaforecast.com',
  },
  {
    name: 'TOKENCENT',
    domain: 'tokencent.com',
  },
  {
    name: 'EasyMovie',
    domain: 'easy.movie',
  },
  {
    name: 'Turnr',
    domain: 'turnr.se',
  },
  {
    name: 'Memberium',
    domain: 'memberium.com',
  },
  {
    name: 'DataWeave',
    domain: 'dataweave.com',
  },
  {
    name: 'SharpLaunch',
    domain: 'sharplaunch.com',
  },
  {
    name: 'DigiCube',
    domain: 'thedigicube.com',
  },
  {
    name: 'KWALL',
    domain: 'kwallcompany.com',
  },
  {
    name: 'eSUB Construction Software',
    domain: 'esub.com',
  },
  {
    name: 'Smplicity',
    domain: 'smplicity.co',
  },
  {
    name: 'Edinburgh Whisky Academy',
    domain: 'edinburghwhiskyacademy.com',
  },
  {
    name: 'GEODIS eLogistics',
    domain: 'elogistics.geodis.com',
  },
  {
    name: 'Veritone',
    domain: 'veritone.com',
  },
  {
    name: 'Modulus Data',
    domain: 'modulusdata.com',
  },
  {
    name: 'Spaulding Ridge',
    domain: 'spauldingridge.com',
  },
  {
    name: 'Verifone',
    domain: 'verifone.com',
  },
  {
    name: 'Power Logix, LLC',
    domain: 'power-logix.com',
  },
  {
    name: 'Action Button',
    domain: 'actionbutton.org',
  },
  {
    name: 'Cheetah Digital',
    domain: 'cheetahdigital.com',
  },
  {
    name: 'PortaOne',
    domain: 'portaone.com',
  },
  {
    name: 'wetter.com',
    domain: 'wetter.com',
  },
  {
    name: 'Galen Data',
    domain: 'galendata.com',
  },
  {
    name: 'Nexsales',
    domain: 'nexsales.com',
  },
  {
    name: 'ServiceRocket',
    domain: 'servicerocket.com',
  },
  {
    name: 'Win Spectrum',
    domain: 'winspectrum.com',
  },
  {
    name: 'Vertify',
    domain: 'vertify.com',
  },
  {
    name: 'Adstream',
    domain: 'adstream.com',
  },
  {
    name: 'Nexar',
    domain: 'getnexar.com',
  },
  {
    name: 'Spec-Intel',
    domain: 'spec-intel.com',
  },
  {
    name: 'Bucket Studio',
    domain: 'bucket.studio',
  },
  {
    name: 'Upland CXM',
    domain: 'uplandsoftware.com',
  },
  {
    name: 'Rank Crankers',
    domain: 'rankcrankers.com',
  },
  {
    name: 'FitzMartin',
    domain: 'fitzmartin.com',
  },
  {
    name: 'DGCproject',
    domain: 'dgcproject.com',
  },
  {
    name: 'ExtraHop',
    domain: 'extrahop.com',
  },
  {
    name: 'Ethyca',
    domain: 'ethyca.com',
  },
  {
    name: 'Dojo Technologies',
    domain: 'dojo.co',
  },
  {
    name: 'signalQ Solutions',
    domain: 'signalq.ca',
  },
  {
    name: 'Manufacton',
    domain: 'manufacton.com',
  },
  {
    name: 'MaestroQA',
    domain: 'maestroqa.com',
  },
  {
    name: 'Olio Commerce',
    domain: 'oliocommerce.io',
  },
  {
    name: 'Viewpoint',
    domain: 'viewpoint.com',
  },
  {
    name: 'Contilio',
    domain: 'contilio.com',
  },
  {
    name: 'GetBusy',
    domain: 'getbusy.com',
  },
  {
    name: 'Webbula - The Data Solutions Experts',
    domain: 'webbula.com',
  },
  {
    name: 'BizPayO',
    domain: 'bizpayo.com',
  },
  {
    name: 'Elevated Elements',
    domain: 'elevatedelements.ca',
  },
  {
    name: 'Outra',
    domain: 'outra.co.uk',
  },
  {
    name: 'Global Wireless Solutions',
    domain: 'gwsolutions.com',
  },
  {
    name: 'Wearisma',
    domain: 'wearisma.com',
  },
  {
    name: 'DriveTime',
    domain: 'drivetime.com',
  },
  {
    name: 'Accubits',
    domain: 'accubits.com',
  },
  {
    name: 'Inbox Communications',
    domain: 'inboxcommunications.com',
  },
  {
    name: 'Napse.Global',
    domain: 'napse.global',
  },
  {
    name: 'Capital Pricing Consultants',
    domain: 'capitalpricingconsultants.com',
  },
  {
    name: 'Amplitude',
    domain: 'amplitude.com',
  },
  {
    name: 'AdKings Agency',
    domain: 'adkings.agency',
  },
  {
    name: 'Become.co',
    domain: 'become.co',
  },
  {
    name: 'Curotec',
    domain: 'curotec.com',
  },
  {
    name: 'Penny Black',
    domain: 'pennyblack.io',
  },
  {
    name: 'Odicci',
    domain: 'odicci.com',
  },
  {
    name: 'Edgemesh',
    domain: 'edgemesh.com',
  },
  {
    name: 'TIMIFY',
    domain: 'timify.com',
  },
  {
    name: 'Hoopla Software, Inc.',
    domain: 'hoopla.net',
  },
  {
    name: 'Quick Hit Solutions',
    domain: 'quickhitsolutions.com',
  },
  {
    name: 'Cisive',
    domain: 'cisiveglobal.com',
  },
  {
    name: 'Synx',
    domain: 'synx.com.au',
  },
  {
    name: 'Mensajeros Urbanos',
    domain: 'mensajerosurbanos.com',
  },
  {
    name: 'Sayre Darling, LLC',
    domain: 'sayre-darling.com',
  },
  {
    name: 'Boardable',
    domain: 'boardable.com',
  },
  {
    name: 'InterWorks',
    domain: 'interworks.com',
  },
  {
    name: 'Temy',
    domain: 'temy.co',
  },
  {
    name: 'WPExperts',
    domain: 'wpexperts.io',
  },
  {
    name: 'Toast',
    domain: 'toasttab.com',
  },
  {
    name: 'Dynamic Yield',
    domain: 'dynamicyield.com',
  },
  {
    name: 'Ecom Growers',
    domain: 'ecomgrowers.com',
  },
  {
    name: 'VTEX',
    domain: 'vtex.com',
  },
  {
    name: 'Nudge',
    domain: 'nudgesecurity.com',
  },
  {
    name: 'Visionaries Club',
    domain: 'visionaries.vc',
  },
  {
    name: 'Atrium',
    domain: 'atrium.ai',
  },
  {
    name: 'eShop Genius',
    domain: 'eshopgenius.com',
  },
  {
    name: 'Rook Quality Systems',
    domain: 'rookqs.com',
  },
  {
    name: 'Canix',
    domain: 'canix.com',
  },
  {
    name: 'Discovery Data',
    domain: 'discoveryco.com',
  },
  {
    name: 'FourKites',
    domain: 'fourkites.com',
  },
  {
    name: 'HypeAuditor',
    domain: 'hypeauditor.com',
  },
  {
    name: 'Zing',
    domain: 'zing.dev',
  },
  {
    name: 'NAVOMI, Inc.',
    domain: 'navomi.com',
  },
  {
    name: 'Morey Creative Studios',
    domain: 'moreycreative.com',
  },
  {
    name: 'Statflo',
    domain: 'statflo.com',
  },
  {
    name: 'Atera',
    domain: 'atera.com',
  },
  {
    name: 'Choozle',
    domain: 'choozle.com',
  },
  {
    name: 'Cognitus Consulting',
    domain: 'cognitusconsulting.com',
  },
  {
    name: 'Vonage',
    domain: 'vonage.com',
  },
  {
    name: 'Fundraise Up',
    domain: 'fundraiseup.com',
  },
  {
    name: 'Kentico Xperience',
    domain: 'xperience.io',
  },
  {
    name: 'SentinelOne',
    domain: 'sentinelone.com',
  },
  {
    name: 'JCA',
    domain: 'jcainc.com',
  },
  {
    name: 'ReturnLogic',
    domain: 'returnlogic.com',
  },
  {
    name: 'The Snow Agency',
    domain: 'thesnowagency.com',
  },
  {
    name: 'Affinity',
    domain: 'affinity.co',
  },
  {
    name: 'FACTS Management',
    domain: 'factsmgt.com',
  },
  {
    name: 'Digital Pi',
    domain: 'digitalpi.com',
  },
  {
    name: 'Portaltech Reply Süd (Germany)',
    domain: 'reply.de',
  },
  {
    name: 'Labelbox',
    domain: 'labelbox.com',
  },
  {
    name: 'Algoseek',
    domain: 'algoseek.com',
  },
  {
    name: 'Frontify',
    domain: 'frontify.com',
  },
  {
    name: 'NinjaCat',
    domain: 'ninjacat.io',
  },
  {
    name: 'OpenSesame',
    domain: 'opensesame.com',
  },
  {
    name: 'Qlik',
    domain: 'qlik.com',
  },
  {
    name: 'LearnUpon',
    domain: 'learnupon.com',
  },
  {
    name: 'CyberGrants',
    domain: 'cybergrants.com',
  },
  {
    name: 'Convey',
    domain: 'getconvey.com',
  },
  {
    name: 'BeCommerce',
    domain: 'becommerce.be',
  },
  {
    name: 'Oyster®',
    domain: 'oysterhr.com',
  },
  {
    name: 'Grovia',
    domain: 'grovia.io',
  },
  {
    name: 'TrustedSite',
    domain: 'trustedsite.com',
  },
  {
    name: 'Market Logic Software',
    domain: 'marketlogicsoftware.com',
  },
  {
    name: 'FitechGelb',
    domain: 'fitechgelb.com',
  },
  {
    name: 'UPPER Network GmbH',
    domain: 'marmind.com',
  },
  {
    name: 'Bonfire Ventures',
    domain: 'bonfirevc.com',
  },
  {
    name: 'Miappi',
    domain: 'miappi.com',
  },
  {
    name: 'Lokulus',
    domain: 'lokulus.com',
  },
  {
    name: 'ChargeAfter',
    domain: 'chargeafter.com',
  },
  {
    name: 'Reward',
    domain: 'rewardagency.co.uk',
  },
  {
    name: 'Intempt',
    domain: 'intempt.com',
  },
  {
    name: 'UpKeep',
    domain: 'upkeep.com',
  },
  {
    name: 'productboard',
    domain: 'productboard.com',
  },
  {
    name: 'DaXtra Technologies',
    domain: 'daxtra.com',
  },
  {
    name: 'Sendoso',
    domain: 'sendoso.com',
  },
  {
    name: 'Infosys',
    domain: 'infosys.com',
  },
  {
    name: 'Codility',
    domain: 'codility.com',
  },
  {
    name: 'Lucid Travel',
    domain: 'lucidtravel.us',
  },
  {
    name: 'CoreMedia',
    domain: 'coremedia.com',
  },
  {
    name: 'Soles4Souls',
    domain: 'soles4souls.org',
  },
  {
    name: 'Tiled',
    domain: 'tiled.co',
  },
  {
    name: 'FINALLY Agency',
    domain: 'finally.agency',
  },
  {
    name: 'Frontier Software',
    domain: 'frontiersoftware.com',
  },
  {
    name: 'OneClickAdvisor',
    domain: 'oneclickadvisor.com',
  },
  {
    name: 'Goodbeast',
    domain: 'goodbeast.com',
  },
  {
    name: 'Quleiss Technologies',
    domain: 'quleiss.com',
  },
  {
    name: 'Valtira',
    domain: 'valtira.com',
  },
  {
    name: 'Kaptea',
    domain: 'kaptea.io',
  },
  {
    name: 'Firefly Partners',
    domain: 'fireflypartners.com',
  },
  {
    name: 'Typeform',
    domain: 'typeform.com',
  },
  {
    name: 'Vero',
    domain: 'getvero.com',
  },
  {
    name: 'BetterBot',
    domain: 'betterbot.com',
  },
  {
    name: 'Daasity',
    domain: 'daasity.com',
  },
  {
    name: 'Bluedot',
    domain: 'bluedot.io',
  },
  {
    name: 'RIFF',
    domain: 'riffdigitalengagement.com',
  },
  {
    name: 'Thriving Talent',
    domain: 'thrivingtalent.solutions',
  },
  {
    name: 'FanKave',
    domain: 'fankave.com',
  },
  {
    name: 'The Working Party',
    domain: 'theworkingparty.com.au',
  },
  {
    name: 'The Taproom',
    domain: 'thetaproom.com',
  },
  {
    name: 'Yes Energy',
    domain: 'yesenergy.com',
  },
  {
    name: 'SoftServe',
    domain: 'softserveinc.com',
  },
  {
    name: 'Sastrify',
    domain: 'sastrify.com',
  },
  {
    name: 'Unit21 Inc',
    domain: 'unit21.ai',
  },
  {
    name: 'sunday',
    domain: 'sundayapp.com',
  },
  {
    name: 'Kameleoon',
    domain: 'kameleoon.com',
  },
  {
    name: 'rtCamp',
    domain: 'rtcamp.com',
  },
  {
    name: 'Northerly Creative',
    domain: 'northerlycreative.com',
  },
  {
    name: 'Corrigo',
    domain: 'corrigo.com',
  },
  {
    name: 'Flawless Inbound',
    domain: 'flawlessinbound.ca',
  },
  {
    name: 'Dunder Mifflin Partners',
    domain: 'dundermifflin-partners.com',
  },
  {
    name: 'Greenlight Guru',
    domain: 'greenlight.guru',
  },
  {
    name: 'ConnectX Global',
    domain: 'connectxglobal.com',
  },
  {
    name: 'Fireblocks',
    domain: 'fireblocks.com',
  },
  {
    name: 'SAPTopia Consulting',
    domain: 'sap-topia.com',
  },
  {
    name: 'Sportsdigita',
    domain: 'sportsdigita.com',
  },
  {
    name: 'ReadyTech',
    domain: 'readytech.com.au',
  },
  {
    name: 'Recode AI Solutions',
    domain: 'recodeai.com',
  },
  {
    name: 'Galil Software',
    domain: 'galilsoftware.com',
  },
  {
    name: 'Silk Software',
    domain: 'silksoftware.com',
  },
  {
    name: 'ASL Marketing',
    domain: 'aslmarketing.com',
  },
  {
    name: 'Frédéric Lucas',
    domain: 'primaressource.com',
  },
  {
    name: 'Trym',
    domain: 'trym.io',
  },
  {
    name: 'The Workforce Pro',
    domain: 'theworkforcepro.com',
  },
  {
    name: 'Unanet',
    domain: 'unanet.com',
  },
  {
    name: '3LA',
    domain: '3la.com',
  },
  {
    name: 'VidCruiter',
    domain: 'vidcruiter.com',
  },
  {
    name: 'Streem',
    domain: 'streem.com',
  },
  {
    name: 'Elokenz',
    domain: 'elokenz.com',
  },
  {
    name: 'theFinanceStack',
    domain: 'thefinancestack.com',
  },
  {
    name: 'Propeller Industries',
    domain: 'propellerindustries.com',
  },
  {
    name: 'Katapult',
    domain: 'katapult.com',
  },
  {
    name: 'Tactic',
    domain: 'tactic.fyi',
  },
  {
    name: 'Cloudica',
    domain: 'cloudica.pl',
  },
  {
    name: 'Roboboogie',
    domain: 'teamroboboogie.com',
  },
  {
    name: 'Brightcove',
    domain: 'brightcove.com',
  },
  {
    name: 'Webrunner Media Group',
    domain: 'webrunnermedia.com',
  },
  {
    name: 'ICEE Social',
    domain: 'iceesocial.com',
  },
  {
    name: 'Denevy',
    domain: 'denevy.eu',
  },
  {
    name: 'Supermetrics',
    domain: 'supermetrics.com',
  },
  {
    name: 'BondCliQ',
    domain: 'bondcliq.com',
  },
  {
    name: 'TechTarget',
    domain: 'techtarget.com',
  },
  {
    name: "Who's Good",
    domain: 'whosgood.org',
  },
  {
    name: 'Bidtellect',
    domain: 'bidtellect.com',
  },
  {
    name: 'VaporLTD',
    domain: 'vaporltd.net',
  },
  {
    name: 'VMware',
    domain: 'vmware.com',
  },
  {
    name: 'ReturnBear',
    domain: 'returnbear.com',
  },
  {
    name: 'AuditBoard',
    domain: 'auditboard.com',
  },
  {
    name: 'Candybox CRM Solutions, Inc',
    domain: 'candyboxcrm.com',
  },
  {
    name: 'makepositive',
    domain: 'makepositive.com',
  },
  {
    name: 'Optiseller',
    domain: 'optiseller.com.au',
  },
  {
    name: 'Chartable',
    domain: 'chartable.com',
  },
  {
    name: 'TrueData',
    domain: 'truedata.co',
  },
  {
    name: 'Bryq',
    domain: 'bryq.com',
  },
  {
    name: 'Mulberry',
    domain: 'getmulberry.com',
  },
  {
    name: 'Plus',
    domain: 'pluscompany.com',
  },
  {
    name: 'BigCommerce',
    domain: 'bigcommerce.com',
  },
  {
    name: 'Parkfield',
    domain: 'parkfieldcommerce.com',
  },
  {
    name: 'PostCo',
    domain: 'postco.co',
  },
  {
    name: 'LOFT',
    domain: 'poweredbyloft.com',
  },
  {
    name: 'Bezos.ai',
    domain: 'bezos.ai',
  },
  {
    name: 'CRMT Digital',
    domain: 'crmtdigital.com',
  },
  {
    name: 'Digizuite',
    domain: 'digizuite.com',
  },
  {
    name: 'SmartFrame Technologies',
    domain: 'smartframe.io',
  },
  {
    name: 'Accutrend',
    domain: 'accutrend.com',
  },
  {
    name: 'Digital Mavens',
    domain: 'digitalmavens.com.au',
  },
  {
    name: 'Insightr Ltd',
    domain: 'insightr.com',
  },
  {
    name: 'AdAdapted',
    domain: 'adadapted.com',
  },
  {
    name: 'Rangle.io',
    domain: 'rangle.io',
  },
  {
    name: 'Templafy',
    domain: 'templafy.com',
  },
  {
    name: 'EasyTranslate',
    domain: 'easytranslate.com',
  },
  {
    name: 'Venga',
    domain: 'vengaglobal.com',
  },
  {
    name: 'Skubana',
    domain: 'skubana.com',
  },
  {
    name: 'TapResearch',
    domain: 'tapresearch.com',
  },
  {
    name: 'Copysmith',
    domain: 'copysmith.ai',
  },
  {
    name: 'WakeCap',
    domain: 'wakecap.com',
  },
  {
    name: 'ActivTrak',
    domain: 'activtrak.com',
  },
  {
    name: 'Digital Spirit PT',
    domain: 'digitalspirit.pt',
  },
  {
    name: 'CreativeX',
    domain: 'creativex.com',
  },
  {
    name: 'Moki, LLC',
    domain: 'moki.com',
  },
  {
    name: 'Moovweb',
    domain: 'moovweb.com',
  },
  {
    name: 'Again Faster Equipment',
    domain: 'againfaster.com',
  },
  {
    name: '180byTwo',
    domain: '180bytwo.com',
  },
  {
    name: 'Rabbet',
    domain: 'rabbet.com',
  },
  {
    name: 'ICAN Software Corporation',
    domain: 'icansoftware.com',
  },
  {
    name: 'Avvir',
    domain: 'avvir.io',
  },
  {
    name: 'Zensors',
    domain: 'zensors.com',
  },
  {
    name: 'FireMon',
    domain: 'firemon.com',
  },
  {
    name: 'Vatic Health',
    domain: 'vatic.health',
  },
  {
    name: 'PFL',
    domain: 'pfl.com',
  },
  {
    name: 'Ephesoft',
    domain: 'ephesoft.com',
  },
  {
    name: 'Happy Returns',
    domain: 'happyreturns.com',
  },
  {
    name: 'Zembula',
    domain: 'zembula.com',
  },
  {
    name: 'Exclusive Concepts',
    domain: 'exclusiveconcepts.com',
  },
  {
    name: 'Disruptive Advertising',
    domain: 'disruptiveadvertising.com',
  },
  {
    name: 'Kafoodle Limited',
    domain: 'kafoodle.com',
  },
  {
    name: 'Saxo',
    domain: 'home.saxo',
  },
  {
    name: 'Zinnov',
    domain: 'zinnov.com',
  },
  {
    name: 'YOUKNOW',
    domain: 'youknow.co.za',
  },
  {
    name: 'Levelset',
    domain: 'levelset.com',
  },
  {
    name: 'Blinkfire Analytics',
    domain: 'blinkfire.com',
  },
  {
    name: 'Optiv',
    domain: 'optiv.com',
  },
  {
    name: 'Gladly',
    domain: 'gladly.com',
  },
  {
    name: 'eyos',
    domain: 'eyos.one',
  },
  {
    name: 'Nctsupport',
    domain: 'nctsupport.com',
  },
  {
    name: 'Art of Procurement',
    domain: 'artofprocurement.com',
  },
  {
    name: 'XWP',
    domain: 'xwp.co',
  },
  {
    name: 'Pearmill',
    domain: 'pearmill.com',
  },
  {
    name: 'Comp Three',
    domain: 'compthree.com',
  },
  {
    name: 'Mews',
    domain: 'mews.com',
  },
  {
    name: 'Immerss',
    domain: 'immerss.live',
  },
  {
    name: 'CustomMade Data',
    domain: 'custommadedata.com',
  },
  {
    name: 'Intuizi',
    domain: 'intuizi.com',
  },
  {
    name: 'Wagento Commerce',
    domain: 'wagento.com',
  },
  {
    name: 'EmberTribe',
    domain: 'embertribe.com',
  },
  {
    name: 'Chatdesk',
    domain: 'chatdesk.com',
  },
  {
    name: 'We Make Websites',
    domain: 'wemakewebsites.com',
  },
  {
    name: 'LatentView Analytics',
    domain: 'latentview.com',
  },
  {
    name: 'Cocoon',
    domain: 'meetcocoon.com',
  },
  {
    name: 'Viscacha Data',
    domain: 'viscachadata.com',
  },
  {
    name: 'Blueburra',
    domain: 'blueburra.com.au',
  },
  {
    name: 'Tech Data',
    domain: 'techdata.com',
  },
  {
    name: 'Clutch',
    domain: 'clutch.com',
  },
  {
    name: 'BlueRush',
    domain: 'bluerush.com',
  },
  {
    name: 'CloudZero',
    domain: 'cloudzero.com',
  },
  {
    name: 'Ascender',
    domain: 'ascenderhcm.com',
  },
  {
    name: 'Design Pickle',
    domain: 'designpickle.com',
  },
  {
    name: 'Global Wired Advisors',
    domain: 'globalwiredadvisors.com',
  },
  {
    name: 'Klarna',
    domain: 'klarna.com',
  },
  {
    name: 'GBG Loqate',
    domain: 'loqate.com',
  },
  {
    name: 'Braze',
    domain: 'braze.com',
  },
  {
    name: 'Dashbot',
    domain: 'dashbot.io',
  },
  {
    name: 'Pipeline Design and Engineering',
    domain: 'testfixturedesign.com',
  },
  {
    name: 'Airbase',
    domain: 'airbase.com',
  },
  {
    name: 'ShareThis',
    domain: 'sharethis.com',
  },
  {
    name: 'airSlate',
    domain: 'airslate.com',
  },
  {
    name: 'joopr',
    domain: 'joopr.in',
  },
  {
    name: 'JazzHR',
    domain: 'jazzhr.com',
  },
  {
    name: 'Whole Design Studios Ltd',
    domain: 'wholedesignstudios.com',
  },
  {
    name: '121eCommerce',
    domain: '121ecommerce.com',
  },
  {
    name: 'Back Market',
    domain: 'backmarket.com',
  },
  {
    name: 'Bizagi',
    domain: 'bizagi.com',
  },
  {
    name: 'Synerity AB',
    domain: 'synerity.se',
  },
  {
    name: 'Voice of the Voiceless Society',
    domain: 'voiceofthevoicelesssociety.com',
  },
  {
    name: 'Lunar Solar Group',
    domain: 'lunarsolargroup.com',
  },
  {
    name: 'Kontak',
    domain: 'getkontak.com',
  },
  {
    name: 'Salto Labs',
    domain: 'salto.io',
  },
  {
    name: 'Redapt, Inc.',
    domain: 'redapt.com',
  },
  {
    name: 'Revwork, Inc.',
    domain: 'revwork.ai',
  },
  {
    name: 'Trifork',
    domain: 'trifork.com',
  },
  {
    name: 'Fivestars',
    domain: 'fivestars.com',
  },
  {
    name: 'Correlated',
    domain: 'getcorrelated.com',
  },
  {
    name: 'GivePanel',
    domain: 'givepanel.com',
  },
  {
    name: 'CircleLoop',
    domain: 'circleloop.com',
  },
  {
    name: 'LinearB',
    domain: 'linearb.io',
  },
  {
    name: 'LatitudeBOX',
    domain: 'latitudebox.com',
  },
  {
    name: 'SuiteCentric',
    domain: 'suitecentric.com',
  },
  {
    name: 'Acceler8 Group',
    domain: 'goaccelerate.org',
  },
  {
    name: 'Revieve',
    domain: 'revieve.com',
  },
  {
    name: 'Crowdbotics',
    domain: 'crowdbotics.com',
  },
  {
    name: 'Ascendis Consulting',
    domain: 'ascendis.ca',
  },
  {
    name: 'Observe.AI',
    domain: 'observe.ai',
  },
  {
    name: 'People Productions',
    domain: 'peopleproductions.com',
  },
  {
    name: 'Boomi',
    domain: 'boomi.com',
  },
  {
    name: 'Windsor',
    domain: 'windsor.io',
  },
  {
    name: 'Klay Media',
    domain: 'klaymedia.com',
  },
  {
    name: 'One Six Solutions',
    domain: 'onesixsolutions.com',
  },
  {
    name: 'Strategies Group',
    domain: 'strategiesgroup.com',
  },
  {
    name: 'Sew Much Commerce',
    domain: 'sewmuchcommerce.com',
  },
  {
    name: 'Dataro',
    domain: 'dataro.io',
  },
  {
    name: 'VertoFX',
    domain: 'vertofx.com',
  },
  {
    name: 'Conquer',
    domain: 'conquer.io',
  },
  {
    name: 'SproutLoud Media Networks, LLC',
    domain: 'sproutloud.com',
  },
  {
    name: 'Twintag',
    domain: 'twintag.com',
  },
  {
    name: 'Digiu Digital',
    domain: 'digiudigital.com',
  },
  {
    name: 'Beam Impact',
    domain: 'beamimpact.com',
  },
  {
    name: 'Spoonfed',
    domain: 'getspoonfed.com',
  },
  {
    name: 'Localyser',
    domain: 'localyser.com',
  },
  {
    name: 'Source Medium',
    domain: 'sourcemedium.com',
  },
  {
    name: 'Younium AB',
    domain: 'younium.com',
  },
  {
    name: 'Global E-commerce Experts',
    domain: 'globale-commerceexperts.com',
  },
  {
    name: 'C2 Cyber',
    domain: 'c2cyber.com',
  },
  {
    name: 'Kemisoft Group Ltd',
    domain: 'kemisoft.com',
  },
  {
    name: 'MyParenthood',
    domain: 'myparenthood.gr',
  },
  {
    name: 'Sandhill Digital',
    domain: 'sandhilldigital.io',
  },
  {
    name: 'Connects',
    domain: 'seenconnects.com',
  },
  {
    name: 'Enalito Automation',
    domain: 'enalito.com',
  },
  {
    name: 'Jellyfish',
    domain: 'jellyfish.co',
  },
  {
    name: 'Marketplacer',
    domain: 'marketplacer.com',
  },
  {
    name: 'Panintelligence',
    domain: 'panintelligence.com',
  },
  {
    name: 'Shepherd',
    domain: 'withshepherd.com',
  },
  {
    name: 'nok',
    domain: 'noktryouts.com',
  },
  {
    name: 'Aliro',
    domain: 'onaliro.com',
  },
  {
    name: 'Celtra',
    domain: 'celtra.com',
  },
  {
    name: 'bChannels',
    domain: 'bchannels.com',
  },
  {
    name: 'Envision',
    domain: 'envisioninc.com',
  },
  {
    name: 'Shaping Horizons',
    domain: 'shapinghorizons.org',
  },
  {
    name: 'Trellis Corporation',
    domain: 'gotrellis.com',
  },
  {
    name: 'Firepush',
    domain: 'getfirepush.com',
  },
  {
    name: 'unitQ',
    domain: 'unitq.com',
  },
  {
    name: '42Gears Mobility Systems',
    domain: '42gears.com',
  },
  {
    name: 'MajorKey Technologies',
    domain: 'majorkeytech.com',
  },
  {
    name: 'Mesh Payments',
    domain: 'meshpayments.com',
  },
  {
    name: 'Samsung Electronics',
    domain: 'samsung.com',
  },
  {
    name: 'Capgemini LyonsCG',
    domain: 'lyonscg.com',
  },
  {
    name: 'Textmunication',
    domain: 'textmunication.com',
  },
  {
    name: 'Tilson',
    domain: 'tilsontech.com',
  },
  {
    name: 'HighCoordination GmbH',
    domain: 'hico-group.com',
  },
  {
    name: 'Morae',
    domain: 'moraeglobal.com',
  },
  {
    name: 'Boost Strategy Partners',
    domain: 'booststrategypartners.com',
  },
  {
    name: 'Cyber Advisory Partners',
    domain: 'cyberadvisorypartners.net',
  },
  {
    name: 'Deity BV',
    domain: 'deity.io',
  },
  {
    name: 'Noticed',
    domain: 'noticed.com',
  },
  {
    name: 'GM2',
    domain: 'gm2dev.com',
  },
  {
    name: 'Software',
    domain: 'softwareag.com',
  },
  {
    name: 'Tidal Commerce',
    domain: 'tidalcommerce.ca',
  },
  {
    name: 'Turing.com',
    domain: 'turing.com',
  },
  {
    name: 'Huron Consulting Group',
    domain: 'huronconsultinggroup.com',
  },
  {
    name: 'MPP Global',
    domain: 'mppglobal.com',
  },
  {
    name: 'SMS-Magic',
    domain: 'sms-magic.com',
  },
  {
    name: 'Bylt',
    domain: 'bylt.eu',
  },
  {
    name: 'Capstone IT',
    domain: 'capstonec.com',
  },
  {
    name: 'OLIVER Agency',
    domain: 'oliver.agency',
  },
  {
    name: 'Axcelinno',
    domain: 'axcelinno.io',
  },
  {
    name: 'Faru Services GmbH',
    domain: 'faru.services',
  },
  {
    name: 'Agile Education Marketing',
    domain: 'agile-ed.com',
  },
  {
    name: 'Lucky Orange',
    domain: 'luckyorange.com',
  },
  {
    name: 'Cavallo',
    domain: 'cavallo.com',
  },
  {
    name: 'Vistatec',
    domain: 'vistatec.com',
  },
  {
    name: 'Bonsai',
    domain: 'shopbonsai.ca',
  },
  {
    name: 'Waeg',
    domain: 'waeg.com',
  },
  {
    name: 'Intelligent Reach',
    domain: 'intelligentreach.com',
  },
  {
    name: 'Layer0',
    domain: 'layer0.co',
  },
  {
    name: 'Vic.ai',
    domain: 'vic.ai',
  },
  {
    name: 'Typsy',
    domain: 'typsy.com',
  },
  {
    name: 'Crown Mark Inc',
    domain: 'crownmark.com',
  },
  {
    name: 'Wunderman Thompson Technology',
    domain: 'wttech.blog',
  },
  {
    name: 'kolb digital GmbH',
    domain: 'kolb-digital.de',
  },
  {
    name: 'WestonAnalytics',
    domain: 'westonanalytics.com',
  },
  {
    name: 'Fusion Risk Management',
    domain: 'fusionrm.com',
  },
  {
    name: 'Patient Prism LLC',
    domain: 'patientprism.com',
  },
  {
    name: 'GlenFlow',
    domain: 'glenflow.com',
  },
  {
    name: 'Tagup',
    domain: 'tagup.io',
  },
  {
    name: 'Go Instore',
    domain: 'goinstore.com',
  },
  {
    name: 'Turnk',
    domain: 'turnk.co',
  },
  {
    name: 'Email Allstars',
    domain: 'emailallstars.com',
  },
  {
    name: 'Apparel21',
    domain: 'apparel21.com',
  },
  {
    name: 'ParTech',
    domain: 'partech.com',
  },
  {
    name: 'Sekoia',
    domain: 'sekoia.ca',
  },
  {
    name: 'Accelebrate, Inc.',
    domain: 'accelebrate.com',
  },
  {
    name: 'LeaseHawk',
    domain: 'leasehawk.com',
  },
  {
    name: 'BI Concepts GmbH',
    domain: 'bi-concepts.ch',
  },
  {
    name: 'Compass',
    domain: 'compass.uol',
  },
  {
    name: 'TRIFFT Loyalty Cloud',
    domain: 'trifft.io',
  },
  {
    name: 'Stream',
    domain: 'getstream.io',
  },
  {
    name: 'Swaypay',
    domain: 'swaypayit.com',
  },
  {
    name: 'IMN',
    domain: 'imnnow.com',
  },
  {
    name: 'SmartAction',
    domain: 'smartaction.ai',
  },
  {
    name: 'Skykit',
    domain: 'skykit.com',
  },
  {
    name: 'SplitPass',
    domain: 'splitpass.com',
  },
  {
    name: 'MIotiq',
    domain: 'miotiq.com',
  },
  {
    name: 'Peoplevine',
    domain: 'peoplevine.com',
  },
  {
    name: 'Grenadine Event Software',
    domain: 'events.grenadine.co',
  },
  {
    name: 'Octopus Deploy',
    domain: 'octopus.com',
  },
  {
    name: 'Plauti B.V.',
    domain: 'plauti.com',
  },
  {
    name: 'SCUBE Marketing',
    domain: 'scubemarketing.com',
  },
  {
    name: 'Magentrix',
    domain: 'magentrix.com',
  },
  {
    name: 'Schindler Parent GmbH',
    domain: 'schindlerparent.de',
  },
  {
    name: 'Agile Lab',
    domain: 'agilelab.it',
  },
  {
    name: 'Yieldmo',
    domain: 'yieldmo.com',
  },
  {
    name: 'OHO Interactive',
    domain: 'oho.com',
  },
  {
    name: 'Senta',
    domain: 'senta.co',
  },
  {
    name: 'KlientBoost',
    domain: 'klientboost.com',
  },
  {
    name: 'Dotsquares',
    domain: 'dotsquares.com',
  },
  {
    name: 'Agreement Express',
    domain: 'agreementexpress.com',
  },
  {
    name: 'Carabiner Group',
    domain: 'carabinergroup.com',
  },
  {
    name: 'Aiwifi',
    domain: 'aiwifi.io',
  },
  {
    name: 'TCOG',
    domain: 'tcog.nl',
  },
  {
    name: 'Tundra',
    domain: 'tundra.com',
  },
  {
    name: 'Delbridge Solutions',
    domain: 'delbridge.solutions',
  },
  {
    name: 'ClearPathGPS, Inc.',
    domain: 'clearpathgps.com',
  },
  {
    name: 'Gratuity Solutions',
    domain: 'gratuitysolutions.com',
  },
  {
    name: 'Zinrelo',
    domain: 'zinrelo.com',
  },
  {
    name: 'Merchant Candy',
    domain: 'merchantcandy.com',
  },
  {
    name: 'Zip',
    domain: 'zip.co',
  },
  {
    name: 'Wyre',
    domain: 'sendwyre.com',
  },
  {
    name: 'ViZZ Technologies',
    domain: 'vizztechnologies.com',
  },
  {
    name: 'Proton',
    domain: 'proton.nyc',
  },
  {
    name: 'Ohi',
    domain: 'shipohi.com',
  },
  {
    name: 'Etragr Partners/FreshIdeas',
    domain: 'freshideastoday.com',
  },
  {
    name: 'Charle Agency',
    domain: 'charle.co.uk',
  },
  {
    name: 'Evomunio',
    domain: 'evomunio.com',
  },
  {
    name: 'Tango',
    domain: 'tango.us',
  },
  {
    name: 'Cantatus Systems Group',
    domain: 'cantatus.com',
  },
  {
    name: 'GlobalVision',
    domain: 'globalvision.co',
  },
  {
    name: 'Lootly',
    domain: 'lootly.io',
  },
  {
    name: 'Avvio',
    domain: 'avvio.com',
  },
  {
    name: 'Lentune',
    domain: 'lentune.co.nz',
  },
  {
    name: 'Mylo',
    domain: 'choosemylo.com',
  },
  {
    name: 'Panoptic Analytics',
    domain: 'panopticanalytics.com',
  },
  {
    name: 'Original',
    domain: 'mandelbrotcap.com',
  },
  {
    name: 'Blue Tangerine',
    domain: 'bluetangerine.com',
  },
  {
    name: 'Sedai',
    domain: 'sedai.io',
  },
  {
    name: 'Syatt',
    domain: 'syatt.io',
  },
  {
    name: 'Valk Solutions',
    domain: 'valksolutions.nl',
  },
  {
    name: 'RapidRatings',
    domain: 'rapidratings.com',
  },
  {
    name: 'Ovation',
    domain: 'ovationup.com',
  },
  {
    name: 'Ownet',
    domain: 'ownet.co.uk',
  },
  {
    name: 'Is Inspired',
    domain: 'isinspired.com',
  },
  {
    name: 'eComEngine',
    domain: 'ecomengine.com',
  },
  {
    name: 'Certified Contractors Network',
    domain: 'contractors.net',
  },
  {
    name: 'Krumware',
    domain: 'krum.io',
  },
  {
    name: 'Oaky',
    domain: 'oaky.com',
  },
  {
    name: 'WithSecure',
    domain: 'withsecure.com',
  },
  {
    name: 'Green Badger',
    domain: 'getgreenbadger.com',
  },
  {
    name: 'Intertek',
    domain: 'intertek.com',
  },
  {
    name: 'Orius Digital',
    domain: 'oriusdigital.com',
  },
  {
    name: 'Dash Hudson',
    domain: 'dashhudson.com',
  },
  {
    name: 'Lovelytics',
    domain: 'lovelytics.com',
  },
  {
    name: 'Sales Boomerang',
    domain: 'salesboomerang.com',
  },
  {
    name: 'Process Creative',
    domain: 'processcreative.com.au',
  },
  {
    name: 'Microsec.ai',
    domain: 'microsec.ai',
  },
  {
    name: 'Pipl',
    domain: 'pipl.com',
  },
  {
    name: 'SiteSuite Website Design',
    domain: 'sitesuite.com.au',
  },
  {
    name: 'Eazifunds',
    domain: 'eazifunds.com',
  },
  {
    name: 'Quantra Technology Solutions',
    domain: 'quantratech.com',
  },
  {
    name: 'Hybrid Athlete Foundation',
    domain: 'hybridaf.com',
  },
  {
    name: 'Blackbaud Pacific',
    domain: 'blackbaud.com.au',
  },
  {
    name: 'TCN Broadcasting',
    domain: 'tcn.com',
  },
  {
    name: 'quantilope',
    domain: 'quantilope.com',
  },
  {
    name: 'Rezilion',
    domain: 'rezilion.com',
  },
  {
    name: 'Treet',
    domain: 'treet.co',
  },
  {
    name: 'The Lead Gen Co.',
    domain: 'theleadgenco.com',
  },
  {
    name: 'Fluna',
    domain: 'fluna.io',
  },
  {
    name: 'Peoplelogic',
    domain: 'peoplelogic.ai',
  },
  {
    name: 'Interai',
    domain: 'inter.ai',
  },
  {
    name: 'Uptycs',
    domain: 'uptycs.com',
  },
  {
    name: 'Skeepers',
    domain: 'skeepers.io',
  },
  {
    name: 'Crimson Agility',
    domain: 'crimsonagility.com',
  },
  {
    name: 'Resolve',
    domain: 'resolvepay.com',
  },
  {
    name: 'Tropic',
    domain: 'tropicapp.io',
  },
  {
    name: 'ValueSelling Associates',
    domain: 'valueselling.com',
  },
  {
    name: 'Nanigans',
    domain: 'nanigans.com',
  },
  {
    name: 'Quantum Lifecycle Marketing',
    domain: 'quantumlifecyclemarketing.com',
  },
  {
    name: 'VFPnext',
    domain: 'vfp.us',
  },
  {
    name: 'Mott MacDonald',
    domain: 'mottmac.com',
  },
  {
    name: 'Kevel',
    domain: 'kevel.co',
  },
  {
    name: 'Livescale',
    domain: 'livescale.tv',
  },
  {
    name: 'Portt',
    domain: 'portt.com',
  },
  {
    name: 'Realync',
    domain: 'realync.com',
  },
  {
    name: 'Wireless Social',
    domain: 'wireless-social.com',
  },
  {
    name: 'Frasco Profiles',
    domain: 'frascoprofiles.com',
  },
  {
    name: 'GoVi',
    domain: 'govi.io',
  },
  {
    name: 'ALTR Solutions, Inc',
    domain: 'altr.com',
  },
  {
    name: 'INFLOR',
    domain: 'inflor.com.br',
  },
  {
    name: 'GroMo Agency',
    domain: 'gromoagency.com',
  },
  {
    name: 'SafeBase',
    domain: 'safebase.io',
  },
  {
    name: 'Parascript, LLC',
    domain: 'parascript.com',
  },
  {
    name: 'Gupshup',
    domain: 'gupshup.io',
  },
  {
    name: 'CloudScale',
    domain: 'cloudscalecorp.com',
  },
  {
    name: 'TopMonks',
    domain: 'topmonks.com',
  },
  {
    name: '5R Data',
    domain: '5rdata.com',
  },
  {
    name: 'Cart.com',
    domain: 'cart.com',
  },
  {
    name: 'Experis_US',
    domain: 'experis.com',
  },
  {
    name: 'Witivio',
    domain: 'witivio.com',
  },
  {
    name: 'Shippo',
    domain: 'goshippo.com',
  },
  {
    name: 'Avatria',
    domain: 'avatria.com',
  },
  {
    name: 'SkillNet Solutions, Inc.',
    domain: 'skillnetinc.com',
  },
  {
    name: 'Gapstow',
    domain: 'gapstow.co',
  },
  {
    name: 'Box',
    domain: 'box.com',
  },
  {
    name: 'BoxBoat Technologies',
    domain: 'boxboat.com',
  },
  {
    name: 'Zia Consulting',
    domain: 'ziaconsulting.com',
  },
  {
    name: 'SubRosa',
    domain: 'subrosacyber.com',
  },
  {
    name: 'Cyvatar',
    domain: 'cyvatar.ai',
  },
  {
    name: 'Ctac',
    domain: 'ctac.nl',
  },
  {
    name: 'Bejamas',
    domain: 'bejamas.io',
  },
  {
    name: 'Content Cucumber',
    domain: 'contentcucumber.com',
  },
  {
    name: 'Copado',
    domain: 'copado.com',
  },
  {
    name: 'Kubix Media',
    domain: 'kubixmedia.co.uk',
  },
  {
    name: 'McCombs-Wall Inc.',
    domain: 'mwi.solutions',
  },
  {
    name: 'Future Ticketing',
    domain: 'futureticketing.com',
  },
  {
    name: 'hedgehog lab',
    domain: 'hedgehoglab.com',
  },
  {
    name: 'Brick Bridge Consulting',
    domain: 'brickbridgeconsulting.com',
  },
  {
    name: 'Adsquare',
    domain: 'adsquare.com',
  },
  {
    name: 'WebinarGeek',
    domain: 'webinargeek.com',
  },
  {
    name: 'BluePagesPro',
    domain: 'bluepagespro.com',
  },
  {
    name: 'Saras Analytics LLC',
    domain: 'sarasanalytics.com',
  },
  {
    name: 'Seervision',
    domain: 'seervision.com',
  },
  {
    name: 'Squadmakers',
    domain: 'squadmakers.com',
  },
  {
    name: 'Advanced Commerce',
    domain: 'advancedcommerce.io',
  },
  {
    name: 'GiftNow',
    domain: 'giftnow.com',
  },
  {
    name: 'PTX Partners',
    domain: 'ptxpartners.com',
  },
  {
    name: 'Lobster Data Gmbh',
    domain: 'lobster-world.com',
  },
  {
    name: 'Optoro',
    domain: 'optoro.com',
  },
  {
    name: 'Treez',
    domain: 'treez.io',
  },
  {
    name: 'Infopulse',
    domain: 'infopulse.com',
  },
  {
    name: 'havasCX',
    domain: 'havascx.com',
  },
  {
    name: 'Chamberlain Holdings LLC',
    domain: 'chamberlainxai.com',
  },
  {
    name: 'prepend GmbH',
    domain: 'prepend.de',
  },
  {
    name: 'CyFlare',
    domain: 'cyflare.com',
  },
  {
    name: 'blue-zone AG',
    domain: 'blue-zone.de',
  },
  {
    name: 'Slintel',
    domain: 'slintel.com',
  },
  {
    name: 'Supero',
    domain: 'yoursupero.com',
  },
  {
    name: 'everphone',
    domain: 'everphone.com',
  },
  {
    name: 'Imparta',
    domain: 'imparta.com',
  },
  {
    name: 'CustomerX.i',
    domain: 'customerxi.com',
  },
  {
    name: 'H2O.ai',
    domain: 'h2o.ai',
  },
  {
    name: 'Sendlane',
    domain: 'sendlane.com',
  },
  {
    name: 'Star Cooperation',
    domain: 'star-cooperation.com',
  },
  {
    name: 'tilr',
    domain: 'tilr.com',
  },
  {
    name: 'Find Any Film',
    domain: 'findanyfilm.com',
  },
  {
    name: 'Hard Media Group',
    domain: 'hardmediagroup.com',
  },
  {
    name: 'ActiveOps',
    domain: 'activeops.com',
  },
  {
    name: 'Resume Sieve',
    domain: 'resumesieve.com',
  },
  {
    name: 'Datto',
    domain: 'datto.com',
  },
  {
    name: 'Vector Payments',
    domain: 'vectorpayments.com',
  },
  {
    name: 'Consolidated Supply Co.',
    domain: 'consolidatedsupply.com',
  },
  {
    name: 'LookinLA',
    domain: 'lookinla.com',
  },
  {
    name: 'Ketch',
    domain: 'ketch.com',
  },
  {
    name: 'Zoom Video Communications',
    domain: 'zoom.us',
  },
  {
    name: 'ViewSpark',
    domain: 'viewspark.org',
  },
  {
    name: 'Followup CRM',
    domain: 'followupcrm.com',
  },
  {
    name: 'PushPress,',
    domain: 'pushpress.com',
  },
  {
    name: 'Social Standards',
    domain: 'socialstandards.com',
  },
  {
    name: 'Matter Design',
    domain: 'matterdesign.com.au',
  },
  {
    name: 'Findem, Inc.',
    domain: 'findem.ai',
  },
  {
    name: 'SmartrMail',
    domain: 'smartrmail.com',
  },
  {
    name: 'Montala Limited',
    domain: 'montala.com',
  },
  {
    name: 'Alpega Group',
    domain: 'alpegagroup.com',
  },
  {
    name: 'ISID',
    domain: 'isid.co.jp',
  },
  {
    name: 'Pyxis',
    domain: 'pyxis.cx',
  },
  {
    name: 'BrandStencil',
    domain: 'brandstencil.com',
  },
  {
    name: 'Cardan Technobility',
    domain: 'technobility.nl',
  },
  {
    name: 'Flashtract',
    domain: 'flashtract.com',
  },
  {
    name: 'Trinity',
    domain: 'trinity.one',
  },
  {
    name: 'Bold Commerce',
    domain: 'boldcommerce.com',
  },
  {
    name: 'O2 Beverages',
    domain: 'drinko2.com',
  },
  {
    name: 'Wpromote',
    domain: 'wpromote.com',
  },
  {
    name: 'Benchmark',
    domain: 'benchmarkcorp.com',
  },
  {
    name: 'Carmen & Grace Communications',
    domain: 'carmenandgrace.com',
  },
  {
    name: 'Konverse',
    domain: 'konverse.com',
  },
  {
    name: 'PrivIQ',
    domain: 'priviq.com',
  },
  {
    name: 'Horsa Plan',
    domain: 'horsa.it',
  },
  {
    name: 'Call Center Guys',
    domain: 'callcenterguys.com',
  },
  {
    name: 'Virtuous',
    domain: 'virtuous.org',
  },
  {
    name: 'High Performance Providers',
    domain: 'highperformanceproviders.com',
  },
  {
    name: 'Neptune Software',
    domain: 'neptune-software.com',
  },
  {
    name: 'AppBind',
    domain: 'appbind.com',
  },
  {
    name: 'Propelle',
    domain: 'propelle.com.au',
  },
  {
    name: 'Zycada',
    domain: 'zycada.com',
  },
  {
    name: 'Partnering Experts',
    domain: 'partneringexperts.com',
  },
  {
    name: 'Take - PARTNERS',
    domain: 'take.net-partners.com',
  },
  {
    name: 'Navattic',
    domain: 'navattic.com',
  },
  {
    name: '12 FutureTech',
    domain: '12futuretech.com',
  },
  {
    name: '12Build Sales B.V.',
    domain: '12build.com',
  },
  {
    name: 'Calqulate',
    domain: 'calqulate.io',
  },
  {
    name: 'Mrdzyn Studio',
    domain: 'mrdzyn.com',
  },
  {
    name: 'GETIDA',
    domain: 'getida.com',
  },
  {
    name: 'Transerve Technologies Private Limited',
    domain: 'transerve.com',
  },
  {
    name: 'Teamstand',
    domain: 'teamstand.com',
  },
  {
    name: 'Method Automation Services Inc',
    domain: 'method-automation.com',
  },
  {
    name: 'Tensure Consulting',
    domain: 'tensure.io',
  },
  {
    name: 'SecureNation',
    domain: 'securenation.net',
  },
  {
    name: 'TowerData',
    domain: 'towerdata.com',
  },
  {
    name: 'Method Savvy',
    domain: 'methodsavvy.com',
  },
  {
    name: 'Rearc',
    domain: 'rearc.io',
  },
  {
    name: 'Cin7',
    domain: 'cin7.com',
  },
  {
    name: 'Artificial Solutions',
    domain: 'artificial-solutions.com',
  },
  {
    name: 'Nimble Gravity',
    domain: 'nimblegravity.com',
  },
  {
    name: 'Givz',
    domain: 'givz.com',
  },
  {
    name: 'RDA',
    domain: 'rdacorp.com',
  },
  {
    name: 'Variance',
    domain: 'variance.com',
  },
  {
    name: 'MindArc',
    domain: 'mindarc.com.au',
  },
  {
    name: 'BetterCommerce',
    domain: 'bettercommerce.io',
  },
  {
    name: 'Shipamax',
    domain: 'shipamax.com',
  },
  {
    name: 'GiftAMeal',
    domain: 'giftameal.com',
  },
  {
    name: 'MeasureMatch',
    domain: 'measurematch.com',
  },
  {
    name: 'Bambee',
    domain: 'bambee.com',
  },
  {
    name: 'Le Ventures, LLC',
    domain: 'leventures.com',
  },
  {
    name: 'Maropost Commerce Cloud',
    domain: 'netohq.com',
  },
  {
    name: 'Convoy Order Protection LLC',
    domain: 'convoyop.com',
  },
  {
    name: 'Eden Workplace',
    domain: 'edenworkplace.com',
  },
  {
    name: 'Cancer Support Community',
    domain: 'cancersupportcommunity.org',
  },
  {
    name: 'Aircover',
    domain: 'aircover.ai',
  },
  {
    name: 'Webdorks',
    domain: 'webdorks.com',
  },
  {
    name: 'Triblio',
    domain: 'triblio.com',
  },
  {
    name: 'Sonatype',
    domain: 'sonatype.com',
  },
  {
    name: 'Hockey Stick Advisory',
    domain: 'hockeystickadvisory.com',
  },
  {
    name: 'DoiT International',
    domain: 'doit-intl.com',
  },
  {
    name: 'Search Strategy Marketing',
    domain: 'searchstrategymarketing.com',
  },
  {
    name: 'wonderstore',
    domain: 'wonderstore.ai',
  },
  {
    name: 'Displayforce',
    domain: 'displayforce.ai',
  },
  {
    name: 'GO Creative',
    domain: 'gocreative.rrd.com',
  },
  {
    name: 'Rapyd',
    domain: 'rapyd.net',
  },
  {
    name: 'Refract - an Allego',
    domain: 'refract.ai',
  },
  {
    name: 'EmailListVerify',
    domain: 'emaillistverify.com',
  },
  {
    name: 'Netlinkz',
    domain: 'netlinkz.com',
  },
  {
    name: 'Datapeople',
    domain: 'datapeople.io',
  },
  {
    name: 'Honeypotz',
    domain: 'honeypotz.net',
  },
  {
    name: 'BarkleyREI',
    domain: 'barkleyrei.com',
  },
  {
    name: 'LineTen',
    domain: 'lineten.com',
  },
  {
    name: 'Vendasta',
    domain: 'vendasta.com',
  },
  {
    name: 'RateMarketplace',
    domain: 'ratemarketplace.com',
  },
  {
    name: 'Secure My Booking',
    domain: 'securemybooking.com',
  },
  {
    name: 'WeWork',
    domain: 'wework.com',
  },
  {
    name: 'CHILI publish',
    domain: 'chili-publish.com',
  },
  {
    name: 'Startup Slang',
    domain: 'startupslang.com',
  },
  {
    name: 'Kodision',
    domain: 'kodision.nl',
  },
  {
    name: 'InBetween Deutschland GmbH',
    domain: 'inbetween.com',
  },
  {
    name: 'EZ Loader TMS',
    domain: 'ezloadertms.com',
  },
  {
    name: 'GRC ANALYTIC LLC',
    domain: 'grcanalytic.com',
  },
  {
    name: 'Obviyo',
    domain: 'obviyo.com',
  },
  {
    name: 'ExpertVoice',
    domain: 'expertvoice.com',
  },
  {
    name: 'Firstup',
    domain: 'firstup.io',
  },
  {
    name: 'Cyera',
    domain: 'cyera.io',
  },
  {
    name: 'BudSense',
    domain: 'mybudsense.com',
  },
  {
    name: 'Tinybird',
    domain: 'tinybird.co',
  },
  {
    name: 'Lightico',
    domain: 'lightico.com',
  },
  {
    name: 'Tech-Gofer',
    domain: 'tech-gofer.com',
  },
  {
    name: 'Marmeto',
    domain: 'marmeto.com',
  },
  {
    name: 'Lately Inc.',
    domain: 'lately.ai',
  },
  {
    name: 'cleverbridge',
    domain: 'cleverbridge.com',
  },
  {
    name: 'Copy.ai',
    domain: 'copy.ai',
  },
  {
    name: 'MedScout',
    domain: 'medscout.io',
  },
  {
    name: 'LATRO',
    domain: 'latro.com',
  },
  {
    name: 'Impact Analytics',
    domain: 'impactanalytics.co',
  },
  {
    name: 'Perkville',
    domain: 'perkville.com',
  },
  {
    name: 'S+V Technologies Inc.',
    domain: 'simplicityandvelocity.com',
  },
  {
    name: 'Nimesa',
    domain: 'nimesa.io',
  },
  {
    name: 'Safetica',
    domain: 'safetica.com',
  },
  {
    name: 'LakeTree',
    domain: 'laketree.com',
  },
  {
    name: 'KeeperAI',
    domain: 'keeperai.com',
  },
  {
    name: 'DemandBlue',
    domain: 'demandblue.com',
  },
  {
    name: 'Colorhythm',
    domain: 'colorhythm.com',
  },
  {
    name: 'GIA Consulting',
    domain: 'giaconsulting.com.au',
  },
  {
    name: 'SureDone',
    domain: 'suredone.com',
  },
  {
    name: 'Iron Horse',
    domain: 'ironhorse.io',
  },
  {
    name: 'SwaranSoft',
    domain: 'swaransoft.com',
  },
  {
    name: 'Gobot',
    domain: 'getgobot.com',
  },
  {
    name: 'Omnitas Consulting',
    domain: 'omnitas.se',
  },
  {
    name: 'Kreis 1 Consulting',
    domain: 'kreis1.com',
  },
  {
    name: 'Aira',
    domain: 'aira.net',
  },
  {
    name: 'MindStream Analytics',
    domain: 'mindstreamanalytics.com',
  },
  {
    name: 'Seismic',
    domain: 'seismic.com',
  },
  {
    name: 'Incorta',
    domain: 'incorta.com',
  },
  {
    name: 'Cabiri Ltd',
    domain: 'cabiri.io',
  },
  {
    name: 'Sufio',
    domain: 'sufio.com',
  },
  {
    name: 'Clockwise',
    domain: 'getclockwise.com',
  },
  {
    name: 'Forethought',
    domain: 'forethought.ai',
  },
  {
    name: 'ROI-Efeso',
    domain: 'roi.de',
  },
  {
    name: 'Engrain',
    domain: 'engrain.com',
  },
  {
    name: 'EzPay America Inc',
    domain: 'ezpayamerica.com',
  },
  {
    name: 'Jens.Marketing',
    domain: 'jens.marketing',
  },
  {
    name: 'MNTN',
    domain: 'mountain.com',
  },
  {
    name: 'Emburse',
    domain: 'emburse.com',
  },
  {
    name: '4flow',
    domain: '4flow.com',
  },
  {
    name: 'Reprise',
    domain: 'getreprise.com',
  },
  {
    name: 'PSC Group, A Netrix Company',
    domain: 'psclistens.com',
  },
  {
    name: 'Mobiquity',
    domain: 'mobiquity.com',
  },
  {
    name: 'Badal Inc',
    domain: 'badal.io',
  },
  {
    name: 'behamics',
    domain: 'behamics.com',
  },
  {
    name: '71 Pounds, Inc',
    domain: '71lbs.com',
  },
  {
    name: 'Apartment Life',
    domain: 'apartmentlife.org',
  },
  {
    name: 'Exclusivity Global Technologies',
    domain: 'exclusivityglobal.tech',
  },
  {
    name: 'MakeWebBetter',
    domain: 'makewebbetter.com',
  },
  {
    name: 'Xplor',
    domain: 'xplortechnologies.com',
  },
  {
    name: 'ModusLink',
    domain: 'moduslink.com',
  },
  {
    name: 'cofenster GmbH',
    domain: 'cofenster.com',
  },
  {
    name: 'Site Impact',
    domain: 'siteimpact.com',
  },
  {
    name: 'Praxis Metrics',
    domain: 'praxismetrics.com',
  },
  {
    name: 'ProNovos Construction Intelligence',
    domain: 'pronovos.com',
  },
  {
    name: 'Beyond Retail',
    domain: 'beyondretail.se',
  },
  {
    name: 'Glopal',
    domain: 'glopal.com',
  },
  {
    name: 'meQuilibrium',
    domain: 'mequilibrium.com',
  },
  {
    name: 'Checkout Champ',
    domain: 'checkoutchamp.com',
  },
  {
    name: 'Zindi',
    domain: 'zindi.africa',
  },
  {
    name: 'JRNI',
    domain: 'jrni.com',
  },
  {
    name: 'adQuadrant',
    domain: 'adquadrant.com',
  },
  {
    name: 'RPA Nuggets',
    domain: 'rpanuggets.com',
  },
  {
    name: 'Vetty',
    domain: 'vetty.co',
  },
  {
    name: 'Modhus Operandi',
    domain: 'modhusoperandi.com',
  },
  {
    name: 'Admin Within',
    domain: 'adminwithin.com',
  },
  {
    name: 'Nozzle AI',
    domain: 'nozzle.ai',
  },
  {
    name: 'Embrace',
    domain: 'embrace.io',
  },
  {
    name: 'Buyhive Technologies',
    domain: 'buyhive.com',
  },
  {
    name: 'Hucu.AI',
    domain: 'hucu.ai',
  },
  {
    name: 'LeapAhead Technologies',
    domain: 'leapahead.io',
  },
  {
    name: 'Accessible360',
    domain: 'accessible360.com',
  },
  {
    name: 'WLCR',
    domain: 'wlcr.io',
  },
  {
    name: 'TrustSpot',
    domain: 'trustspot.io',
  },
  {
    name: 'Nucleus Security',
    domain: 'nucleussec.com',
  },
  {
    name: 'Campfire',
    domain: 'campfire.so',
  },
  {
    name: 'NEOGOV',
    domain: 'neogov.com',
  },
  {
    name: 'Trujay',
    domain: 'trujay.com',
  },
  {
    name: 'VRTY',
    domain: 'vrty.io',
  },
  {
    name: 'Nife Labs Pte Ltd',
    domain: 'nife.io',
  },
  {
    name: 'Pure IP',
    domain: 'pure-ip.com',
  },
  {
    name: 'FIRMUS',
    domain: 'firmus.ai',
  },
  {
    name: 'SENSORPRO',
    domain: 'sensorpro.net',
  },
  {
    name: 'Apromore Pty Ltd',
    domain: 'apromore.com',
  },
  {
    name: 'Lucidity',
    domain: 'lucidity.io',
  },
  {
    name: 'Zoomd',
    domain: 'zoomd.com',
  },
  {
    name: 'Narrative',
    domain: 'narrative.io',
  },
  {
    name: 'Sitecore',
    domain: 'sitecore.com',
  },
  {
    name: 'Angi',
    domain: 'angi.com',
  },
  {
    name: 'Marble',
    domain: 'marblepay.com',
  },
  {
    name: 'Perform[cb]',
    domain: 'performcb.com',
  },
  {
    name: 'DeepHow',
    domain: 'deephow.com',
  },
  {
    name: 'shipcloud',
    domain: 'shipcloud.io',
  },
  {
    name: 'Measured Results Marketing',
    domain: 'measuredresultsmarketing.com',
  },
  {
    name: 'Vismo Ltd',
    domain: 'vismo.com',
  },
  {
    name: 'Govalo',
    domain: 'govalo.com',
  },
  {
    name: 'Doddle',
    domain: 'doddle.com',
  },
  {
    name: 'Pronto Technology, Inc.',
    domain: 'gopronto.io',
  },
  {
    name: 'Userlytics Corporation',
    domain: 'userlytics.com',
  },
  {
    name: 'Fusion92',
    domain: 'fusion92.com',
  },
  {
    name: 'Founderpath',
    domain: 'founderpath.com',
  },
  {
    name: 'AVASOFT Inc',
    domain: 'avasoft.com',
  },
  {
    name: 'Asimily',
    domain: 'asimily.com',
  },
  {
    name: 'Getro',
    domain: 'getro.com',
  },
  {
    name: 'Entrepreneurs HQ',
    domain: 'entrepreneurshq.com',
  },
  {
    name: 'ZINAD IT',
    domain: 'zinad.net',
  },
  {
    name: 'RevOpsLab',
    domain: 'revops-lab.com',
  },
  {
    name: 'Datarails',
    domain: 'datarails.com',
  },
  {
    name: 'Kampai s. r. o.',
    domain: 'kampai.sk',
  },
  {
    name: 'Phosphorus',
    domain: 'phosphorus.io',
  },
  {
    name: 'Paradox',
    domain: 'paradox.ai',
  },
  {
    name: 'Open Border',
    domain: 'openborder.com',
  },
  {
    name: 'SugarCRM',
    domain: 'sugarcrm.com',
  },
  {
    name: 'Shibumi',
    domain: 'shibumi.com',
  },
  {
    name: 'Superfiliate',
    domain: 'superfiliate.com',
  },
  {
    name: 'Neo.Tax',
    domain: 'neo.tax',
  },
  {
    name: 'Megaphone',
    domain: 'megaphone.com.au',
  },
  {
    name: 'Zeenea',
    domain: 'zeenea.com',
  },
  {
    name: 'SevenRooms',
    domain: 'sevenrooms.com',
  },
  {
    name: 'JustCall',
    domain: 'justcall.io',
  },
  {
    name: 'Touch-Line Data Systems Ltd',
    domain: 'touch-line.com',
  },
  {
    name: 'Gemography',
    domain: 'gemography.com',
  },
  {
    name: 'TraceLink',
    domain: 'tracelink.com',
  },
  {
    name: 'Firefly Health',
    domain: 'firefly.health',
  },
  {
    name: 'Paystand',
    domain: 'paystand.com',
  },
  {
    name: 'OneShield Software',
    domain: 'oneshield.com',
  },
  {
    name: 'GLOBO',
    domain: 'helloglobo.com',
  },
  {
    name: 'OneSeven Technology',
    domain: 'oneseventech.com',
  },
  {
    name: 'Flume Health',
    domain: 'flumehealth.com',
  },
  {
    name: 'Front Systems',
    domain: 'frontsystems.com',
  },
  {
    name: 'BuzzBoard',
    domain: 'buzzboard.com',
  },
  {
    name: 'Tutorsbox',
    domain: 'tutorsbox.com',
  },
  {
    name: 'Hackerly',
    domain: 'hackerly.org',
  },
  {
    name: 'Paytia',
    domain: 'paytia.com',
  },
  {
    name: 'HqO',
    domain: 'hqo.com',
  },
  {
    name: 'Shiloh Technologies',
    domain: 'shilohnext.com',
  },
  {
    name: 'OFX',
    domain: 'ofx.com',
  },
  {
    name: 'GETTRX',
    domain: 'gettrx.com',
  },
  {
    name: 'Dakai',
    domain: 'dakai.io',
  },
  {
    name: 'Tenbound',
    domain: 'tenbound.com',
  },
  {
    name: 'HiData Digital Solutions Ltd.',
    domain: 'hidata.digital',
  },
  {
    name: 'Adelante',
    domain: 'getadelante.com',
  },
  {
    name: 'Leadinfo',
    domain: 'leadinfo.com',
  },
  {
    name: 'EPG Service',
    domain: 'epgservice.ru',
  },
  {
    name: 'Glide',
    domain: 'glideapps.com',
  },
  {
    name: 'Rustic Roots Creative',
    domain: 'rusticrootscreative.com',
  },
  {
    name: 'TechGuilds',
    domain: 'techguilds.com',
  },
  {
    name: 'Acre Access',
    domain: 'acre-access.com',
  },
  {
    name: 'Chargebacks911',
    domain: 'chargebacks911.com',
  },
  {
    name: 'Tromzo, Inc',
    domain: 'tromzo.com',
  },
  {
    name: 'Pivofy',
    domain: 'pivofy.com',
  },
  {
    name: 'Gorilla With A Pen',
    domain: 'gorillawithapen.com',
  },
  {
    name: 'CX Experts',
    domain: 'cxexperts.co.za',
  },
  {
    name: 'Searce',
    domain: 'searce.com',
  },
  {
    name: '829 Studios',
    domain: '829studios.com',
  },
  {
    name: 'Chexout',
    domain: 'chexout.com',
  },
  {
    name: 'KAEN',
    domain: 'kaen-inc.com',
  },
  {
    name: 'GitGuardian',
    domain: 'gitguardian.com',
  },
  {
    name: 'The Integer Group',
    domain: 'integer.com',
  },
  {
    name: 'Red Canary',
    domain: 'redcanary.com',
  },
  {
    name: 'OutSystems',
    domain: 'outsystems.com',
  },
  {
    name: 'EBANX',
    domain: 'ebanx.com',
  },
  {
    name: 'AE Studio',
    domain: 'ae.studio',
  },
  {
    name: 'Karbon, Inc',
    domain: 'karbonhq.com',
  },
  {
    name: 'Truora',
    domain: 'truora.com',
  },
  {
    name: 'Cents',
    domain: 'trycents.com',
  },
  {
    name: 'MResult',
    domain: 'mresult.com',
  },
  {
    name: 'StructuredWeb',
    domain: 'structuredweb.com',
  },
  {
    name: 'MacMillan Search Engine Optimization',
    domain: 'macmillansearch.com',
  },
  {
    name: 'Sparrow',
    domain: 'trysparrow.com',
  },
  {
    name: 'Fortnight Digital',
    domain: 'fortnight.digital',
  },
  {
    name: 'Gravity Data',
    domain: 'gravitydata.co',
  },
  {
    name: 'Neo Networks',
    domain: 'neonetworks.com.au',
  },
  {
    name: 'Trellis Commerce',
    domain: 'trellis.co',
  },
  {
    name: 'transcosmos',
    domain: 'trans-cosmos.co.jp',
  },
  {
    name: 'Fulfill.com',
    domain: 'fulfill.com',
  },
  {
    name: 'TeleMessage',
    domain: 'telemessage.com',
  },
  {
    name: 'Radikal',
    domain: 'radikal.io',
  },
  {
    name: 'Knock',
    domain: 'knockcrm.com',
  },
  {
    name: 'Dispatch',
    domain: 'dispatch.me',
  },
  {
    name: 'LanguageLine Solutions',
    domain: 'languageline.com',
  },
  {
    name: 'The Surge Connection',
    domain: 'thesurgeconnection.com',
  },
  {
    name: 'Okera',
    domain: 'okera.com',
  },
  {
    name: 'FMG Suite',
    domain: 'fmgsuite.com',
  },
  {
    name: 'Prezentra',
    domain: 'prezentra.com',
  },
  {
    name: 'Amdocs',
    domain: 'amdocs.com',
  },
  {
    name: 'eSTUDY South Africa',
    domain: 'estudysa.co.za',
  },
  {
    name: 'Sortlist',
    domain: 'sortlist.com',
  },
  {
    name: 'Saasy Sales',
    domain: 'saasysalesleadership.com',
  },
  {
    name: 'Kalla',
    domain: 'join-kalla.com',
  },
  {
    name: 'Taugan Tecnologia & Consultoria Ltda.',
    domain: 'taugan.com',
  },
  {
    name: 'OfficePartners360',
    domain: 'op360.com',
  },
  {
    name: 'YML',
    domain: 'yml.co',
  },
  {
    name: 'Joon Solutions',
    domain: 'joonsolutions.com',
  },
  {
    name: 'Transparent Partners',
    domain: 'transparent.partners',
  },
  {
    name: 'Propellor.ai',
    domain: 'propellor.ai',
  },
  {
    name: 'Qnovate',
    domain: 'qnovate.com',
  },
  {
    name: 'LexisNexis Reed Tech',
    domain: 'reedtech.com',
  },
  {
    name: 'Hone',
    domain: 'honehq.com',
  },
  {
    name: 'Ai Build',
    domain: 'ai-build.com',
  },
  {
    name: 'SalesReadinessGroup',
    domain: 'salesreadinessgroup.com',
  },
  {
    name: 'iceaddis',
    domain: 'iceaddis.com',
  },
  {
    name: 'Emtrain',
    domain: 'emtrain.com',
  },
  {
    name: 'Offsight Inc.',
    domain: 'offsight.com',
  },
  {
    name: 'Storyteq',
    domain: 'storyteq.com',
  },
  {
    name: 'Quantum Business Solutions',
    domain: 'thequantumleap.business',
  },
  {
    name: 'Talespin ✈\uFE0F',
    domain: 'talespin.com',
  },
  {
    name: 'Gigamon',
    domain: 'gigamon.com',
  },
  {
    name: 'Maker',
    domain: 'maker.co',
  },
  {
    name: 'HighRoad Solutions',
    domain: 'highroadsolutions.com',
  },
  {
    name: 'OneUp Sales',
    domain: 'oneupsales.co.uk',
  },
  {
    name: 'TimelinesAI',
    domain: 'timelines.ai',
  },
  {
    name: 'Celonis',
    domain: 'celonis.com',
  },
  {
    name: 'Qu',
    domain: 'qubeyond.com',
  },
  {
    name: 'Your Hiring Coaches',
    domain: 'yourhiringcoaches.com',
  },
  {
    name: 'ROI Revolution',
    domain: 'roirevolution.com',
  },
  {
    name: 'Weavind Online',
    domain: 'weavindonline.com',
  },
  {
    name: 'Stage Marketing',
    domain: 'stagemarketing.com',
  },
  {
    name: 'BeSmartee',
    domain: 'besmartee.com',
  },
  {
    name: 'Nautical Commerce',
    domain: 'nauticalcommerce.com',
  },
  {
    name: 'Redpoint Global',
    domain: 'redpointglobal.com',
  },
  {
    name: 'Relogix',
    domain: 'relogix.com',
  },
  {
    name: 'CDI',
    domain: 'cdillc.com',
  },
  {
    name: 'Chaching',
    domain: 'chaching.co',
  },
  {
    name: 'Pandectes',
    domain: 'pandectes.io',
  },
  {
    name: 'Hyland',
    domain: 'hyland.com',
  },
  {
    name: 'Akero',
    domain: 'akerolabs.com',
  },
  {
    name: 'Everyday Web',
    domain: 'everydayweb.co',
  },
  {
    name: 'Scorpion',
    domain: 'scorpion.co',
  },
  {
    name: 'DLC.link',
    domain: 'dlc.link',
  },
  {
    name: 'Devoteam G Cloud',
    domain: 'gcloud.devoteam.com',
  },
  {
    name: 'Rossi Labs, LLC',
    domain: 'rossilabs.com',
  },
  {
    name: 'Relinns Technologies',
    domain: 'relinns.com',
  },
  {
    name: 'OptiSigns Inc.',
    domain: 'optisigns.com',
  },
  {
    name: 'A2X',
    domain: 'a2xaccounting.com',
  },
  {
    name: 'AXOVISION',
    domain: 'axovision.com',
  },
  {
    name: 'rdymap',
    domain: 'rdymap.com',
  },
  {
    name: 'AdScale',
    domain: 'adscale.com',
  },
  {
    name: 'Hubilo',
    domain: 'hubilo.com',
  },
  {
    name: 'MI-GSO',
    domain: 'migso-pcubed.com',
  },
  {
    name: 'Just Global',
    domain: 'justglobal.com',
  },
  {
    name: 'Atmospheric G2',
    domain: 'atmosphericg2.com',
  },
  {
    name: 'JDA Worldwide',
    domain: 'jdaworldwide.com',
  },
  {
    name: 'Novatize',
    domain: 'novatize.com',
  },
  {
    name: 'Ecodrive',
    domain: 'ecodrive.community',
  },
  {
    name: 'Walker Sands',
    domain: 'walkersands.com',
  },
  {
    name: 'Nordigen',
    domain: 'nordigen.com',
  },
  {
    name: 'Nostra',
    domain: 'nostra.ai',
  },
  {
    name: 'Tipser',
    domain: 'tipser.co',
  },
  {
    name: 'Shinetech Software',
    domain: 'shinetechchina.com.cn',
  },
  {
    name: '100ms',
    domain: '100ms.live',
  },
  {
    name: 'Material',
    domain: 'materialplus.io',
  },
  {
    name: 'allUpp',
    domain: 'allupp.at',
  },
  {
    name: 'Code of the North',
    domain: 'codeofthenorth.com',
  },
  {
    name: 'Portless',
    domain: 'portless.com',
  },
  {
    name: 'Drappier International Pty Limited',
    domain: 'drappier.com.au',
  },
  {
    name: 'Dashlane',
    domain: 'dashlane.com',
  },
  {
    name: 'dup_NiceJob_keepVerified',
    domain: 'nicejob.com',
  },
  {
    name: 'Future Holidays',
    domain: 'futureholidays.co',
  },
  {
    name: 'Redwood Logistics',
    domain: 'redwoodlogistics.com',
  },
  {
    name: 'HubSpot',
    domain: 'hubspot.com',
  },
  {
    name: 'Statsig',
    domain: 'statsig.com',
  },
  {
    name: 'Harver',
    domain: 'harver.com',
  },
  {
    name: 'Workday',
    domain: 'workday.com',
  },
  {
    name: 'Observian',
    domain: 'observian.com',
  },
  {
    name: 'Mercans - HRM and Payroll',
    domain: 'mercans.com',
  },
  {
    name: 'The Ember Company',
    domain: 'embercompany.co',
  },
  {
    name: 'Anagraph',
    domain: 'anagraph.io',
  },
  {
    name: 'Focus Group',
    domain: 'focusgroup.co.uk',
  },
  {
    name: 'Three Five Two',
    domain: 'threefivetwo.com',
  },
  {
    name: 'Coyotiz',
    domain: 'coyotiz.com',
  },
  {
    name: '360 Media',
    domain: '360media.com',
  },
  {
    name: 'FutureWork.AI',
    domain: 'futurework.ai',
  },
  {
    name: 'OnePlan Solutions LLC',
    domain: 'oneplan.ai',
  },
  {
    name: 'Apester',
    domain: 'apester.com',
  },
  {
    name: 'ECI Software Solutions',
    domain: 'ecisolutions.com',
  },
  {
    name: 'ReSci',
    domain: 'retentionscience.com',
  },
  {
    name: 'ConnectFor',
    domain: 'meetconnectfor.com',
  },
  {
    name: 'Gig Werks',
    domain: 'gig-werks.com',
  },
  {
    name: 'Rent Dynamics',
    domain: 'rentdynamics.com',
  },
  {
    name: 'Ratescalc.com',
    domain: 'ratescalc.com',
  },
  {
    name: 'Primer',
    domain: 'primer.io',
  },
  {
    name: 'LION Digital',
    domain: 'liondigital.com.au',
  },
  {
    name: 'Sourcepoint',
    domain: 'sourcepoint.com',
  },
  {
    name: 'Button',
    domain: 'usebutton.com',
  },
  {
    name: 'Lexer',
    domain: 'lexer.io',
  },
  {
    name: 'Hexnode',
    domain: 'hexnode.com',
  },
  {
    name: 'ICT Sviluppo',
    domain: 'ictsviluppo.it',
  },
  {
    name: 'MeetFox',
    domain: 'meetfox.com',
  },
  {
    name: 'CertainlyCX',
    domain: 'certainlycx.com',
  },
  {
    name: 'Mitsogo',
    domain: 'mitsogo.com',
  },
  {
    name: 'Poloriz',
    domain: 'poloriz.com',
  },
  {
    name: 'KREALINKS MANAGEMENT',
    domain: 'krealinks.com',
  },
  {
    name: 'flexis AG',
    domain: 'flexis.com',
  },
  {
    name: 'Apply Agency',
    domain: 'apply.agency',
  },
  {
    name: 'Leasecake',
    domain: 'leasecake.com',
  },
  {
    name: 'Malware Patrol',
    domain: 'malwarepatrol.net',
  },
  {
    name: 'Evergent',
    domain: 'evergent.com',
  },
  {
    name: 'CB/I Digital',
    domain: 'cbidigital.com',
  },
  {
    name: 'MobileFirst Applications',
    domain: 'mobilefirst.in',
  },
  {
    name: 'The Galett Group',
    domain: 'galettgroup.com',
  },
  {
    name: 'Kount',
    domain: 'kount.com',
  },
  {
    name: 'Knowmax',
    domain: 'knowmax.ai',
  },
  {
    name: 'Brandsom',
    domain: 'brandsom.nl',
  },
  {
    name: 'Returnista',
    domain: 'returnista.nl',
  },
  {
    name: 'SpeedSize',
    domain: 'speedsize.com',
  },
  {
    name: 'Hovingh & Partners',
    domain: 'hovingh.eu',
  },
  {
    name: 'EveryMundo',
    domain: 'everymundo.com',
  },
  {
    name: 'Zappix',
    domain: 'zappix.com',
  },
  {
    name: 'Enable, Inc.',
    domain: 'enable.us',
  },
  {
    name: 'WeatherOptics',
    domain: 'weatheroptics.co',
  },
  {
    name: 'The Trade Desk',
    domain: 'thetradedesk.com',
  },
  {
    name: 'Creator.co',
    domain: 'creator.co',
  },
  {
    name: 'Apteco',
    domain: 'apteco.com',
  },
  {
    name: 'Где лучше',
    domain: 'gde-luchshe.ru',
  },
  {
    name: 'SiteKick',
    domain: 'sitekick.com',
  },
  {
    name: 'Continual',
    domain: 'continual.ai',
  },
  {
    name: 'Freshworks',
    domain: 'freshworks.com',
  },
  {
    name: 'Outliant',
    domain: 'outliant.com',
  },
  {
    name: 'WebMechanix',
    domain: 'webmechanix.com',
  },
  {
    name: 'Loopy Technologies Inc.',
    domain: 'loopy.co',
  },
  {
    name: 'Techolution',
    domain: 'techolution.com',
  },
  {
    name: 'experience.com',
    domain: 'experience.com',
  },
  {
    name: 'Popup',
    domain: 'popup.store',
  },
  {
    name: 'SavedBy Package Protection',
    domain: 'savedby.io',
  },
  {
    name: 'Portable',
    domain: 'portable.io',
  },
  {
    name: 'Sales Engine',
    domain: 'salesengine.co.uk',
  },
  {
    name: 'Rentle',
    domain: 'rentle.io',
  },
  {
    name: 'EnPowered',
    domain: 'getenpowered.com',
  },
  {
    name: 'The Swarm',
    domain: 'theswarm.com',
  },
  {
    name: 'Peer Sales Agency',
    domain: 'peersalesagency.com',
  },
  {
    name: 'Baobab Lab',
    domain: 'baobab-lab.com',
  },
  {
    name: 'DataStream Insurance',
    domain: 'datastreaminsurance.com',
  },
  {
    name: 'Global Commerce',
    domain: 'globalcommerce.uy',
  },
  {
    name: 'Fauna',
    domain: 'fauna.com',
  },
  {
    name: 'Ramp97',
    domain: 'ramp97.com',
  },
  {
    name: 'DEPLABS Inc. (DBA "Mira Commerce")',
    domain: 'miracommerce.com',
  },
  {
    name: 'Appier',
    domain: 'appier.com',
  },
  {
    name: 'Delightful Automations',
    domain: 'delightfulautomations.com',
  },
  {
    name: 'Koalafi',
    domain: 'koalafi.com',
  },
  {
    name: 'InsightBPO',
    domain: 'insightbpo.com',
  },
  {
    name: 'peekd',
    domain: 'peekd.ai',
  },
  {
    name: 'TriNet',
    domain: 'trinet.com',
  },
  {
    name: 'McFadyen Digital',
    domain: 'mcfadyen.com',
  },
  {
    name: 'Humu',
    domain: 'humu.com',
  },
  {
    name: 'Data Speaks',
    domain: 'dataspeaks.io',
  },
  {
    name: 'Lumispec',
    domain: 'lumispec.eu',
  },
  {
    name: 'LaunchBoom',
    domain: 'launchboom.com',
  },
  {
    name: 'GoSite',
    domain: 'gosite.com',
  },
  {
    name: 'Redwood Software',
    domain: 'redwood.com',
  },
  {
    name: 'brandung',
    domain: 'agentur-brandung.de',
  },
  {
    name: 'Qollabi',
    domain: 'qollabi.com',
  },
  {
    name: 'Trengo',
    domain: 'trengo.com',
  },
  {
    name: 'EdApp',
    domain: 'edapp.com',
  },
  {
    name: 'Contata Solutions',
    domain: 'contata.com',
  },
  {
    name: 'Greenfly',
    domain: 'greenfly.com',
  },
  {
    name: 'Ecommerce Thinking',
    domain: 'ecommercethinking.com',
  },
  {
    name: 'Vanilla Reply',
    domain: 'vanilla.reply.com',
  },
  {
    name: 'The Advanced Business Metrics Agency',
    domain: 'abmagency.com',
  },
  {
    name: 'SwiftOtter, Inc.',
    domain: 'swiftotter.com',
  },
  {
    name: 'Aplyca',
    domain: 'aplyca.com',
  },
  {
    name: 'Tribe Dynamics',
    domain: 'tribedynamics.com',
  },
  {
    name: 'Hotspex',
    domain: 'hotspexmedia.com',
  },
  {
    name: 'Zoek: Expand Your Reach',
    domain: 'gozoek.com',
  },
  {
    name: 'Luminary',
    domain: 'luminary.com',
  },
  {
    name: 'Appvia',
    domain: 'appvia.io',
  },
  {
    name: 'Maven',
    domain: 'mavenclinic.com',
  },
  {
    name: 'REmPowered',
    domain: 'rempowered.com',
  },
  {
    name: 'Impower.ai',
    domain: 'impower.ai',
  },
  {
    name: 'Learn to Scale',
    domain: 'learntoscale.us',
  },
  {
    name: 'Ibbaka Performance Inc.',
    domain: 'ibbaka.com',
  },
  {
    name: 'Simplistic',
    domain: 'simplistic.com',
  },
  {
    name: 'Coherent Path',
    domain: 'coherentpath.com',
  },
  {
    name: 'Trendemon',
    domain: 'trendemon.com',
  },
  {
    name: 'NavigatorCRE',
    domain: 'navigatorcre.com',
  },
  {
    name: 'Pronto',
    domain: 'pronto.io',
  },
  {
    name: 'NORBr',
    domain: 'norbr.com',
  },
  {
    name: 'GreaseBoss',
    domain: 'greaseboss.com.au',
  },
  {
    name: 'kevin.',
    domain: 'kevin.eu',
  },
  {
    name: 'ChannelReply',
    domain: 'channelreply.com',
  },
  {
    name: 'Steve B',
    domain: 'pvqdconsulting.com',
  },
  {
    name: 'SHI International',
    domain: 'shi.com',
  },
  {
    name: 'Payapps',
    domain: 'payapps.com',
  },
  {
    name: 'NaviLogic, Inc',
    domain: 'navilogic.com',
  },
  {
    name: 'Amplience',
    domain: 'amplience.com',
  },
  {
    name: 'STORD',
    domain: 'stord.com',
  },
  {
    name: 'Texel',
    domain: 'texelmoda.com',
  },
  {
    name: 'Convictional',
    domain: 'convictional.com',
  },
  {
    name: 'Gappify',
    domain: 'gappify.com',
  },
  {
    name: 'Zingtree',
    domain: 'zingtree.com',
  },
  {
    name: 'UXCam',
    domain: 'uxcam.com',
  },
  {
    name: 'Increasingly',
    domain: 'increasingly.com',
  },
  {
    name: 'Telefónica',
    domain: 'telefonica.com',
  },
  {
    name: 'Klarity Law',
    domain: 'tryklarity.com',
  },
  {
    name: 'Censys',
    domain: 'censys.io',
  },
  {
    name: 'Orgvue',
    domain: 'orgvue.com',
  },
  {
    name: 'Calcurates',
    domain: 'calcurates.com',
  },
  {
    name: 'Solo',
    domain: 'gosolo.io',
  },
  {
    name: 'Tombras',
    domain: 'tombras.com',
  },
  {
    name: 'Tall Bob',
    domain: 'tallbob.com',
  },
  {
    name: 'ClientTether',
    domain: 'clienttether.com',
  },
  {
    name: 'Covideo',
    domain: 'covideo.com',
  },
  {
    name: 'Spendgo',
    domain: 'spendgo.com',
  },
  {
    name: 'Upright Analytics',
    domain: 'uprightanalytics.com',
  },
  {
    name: 'Morty',
    domain: 'morty.com',
  },
  {
    name: 'Roam',
    domain: 'roam.ai',
  },
  {
    name: 'Huble Digital',
    domain: 'hubledigital.com',
  },
  {
    name: 'Webware.io',
    domain: 'webware.io',
  },
  {
    name: 'crucialpoint',
    domain: 'crucialpointagency.com',
  },
  {
    name: 'optty',
    domain: 'optty.com',
  },
  {
    name: 'Envoy',
    domain: 'goenvoy.co',
  },
  {
    name: 'Matrak',
    domain: 'matrak.com',
  },
  {
    name: 'Pipe17',
    domain: 'pipe17.com',
  },
  {
    name: 'Compugen Systems',
    domain: 'compugen.us',
  },
  {
    name: 'Optimotive',
    domain: 'optimotive.co',
  },
  {
    name: 'Prismfly',
    domain: 'prismfly.com',
  },
  {
    name: 'RMG',
    domain: 'rmgmedia.com',
  },
  {
    name: 'Unique',
    domain: 'unique.ch',
  },
  {
    name: 'Hatchit',
    domain: 'hatchit.co.nz',
  },
  {
    name: 'Zuko Analytics',
    domain: 'zuko.io',
  },
  {
    name: 'Boxout',
    domain: 'boxouthealth.com',
  },
  {
    name: 'iorad',
    domain: 'iorad.com',
  },
  {
    name: 'Aten Design Group',
    domain: 'atendesigngroup.com',
  },
  {
    name: 'MarrinaDecisions',
    domain: 'marrinadecisions.com',
  },
  {
    name: 'Techforce.ai',
    domain: 'techforce.ai',
  },
  {
    name: 'Pandera Systems',
    domain: 'panderasystems.com',
  },
  {
    name: 'FoundIt!',
    domain: 'foundit.com',
  },
  {
    name: 'Ignify Technologies',
    domain: 'lendwithspark.com',
  },
  {
    name: 'Hypersonix',
    domain: 'hypersonix.ai',
  },
  {
    name: 'Acuite',
    domain: 'acuite.io',
  },
  {
    name: 'Velvetech',
    domain: 'velvetech.com',
  },
  {
    name: 'Ampfactor',
    domain: 'ampfactor.com',
  },
  {
    name: 'Yepic AI',
    domain: 'yepic.ai',
  },
  {
    name: 'Sundial.ai',
    domain: 'sundial.ai',
  },
  {
    name: 'Group 8a',
    domain: 'group8a.com',
  },
  {
    name: 'BIMBAU',
    domain: 'bimbau.co',
  },
  {
    name: 'TrusTrace',
    domain: 'trustrace.com',
  },
  {
    name: 'minubo',
    domain: 'minubo.com',
  },
  {
    name: 'Experience Advertising',
    domain: 'experienceadvertising.com',
  },
  {
    name: 'Formation',
    domain: 'formation.ai',
  },
  {
    name: 'Cynthia',
    domain: 'cynthia.ion8.top',
  },
  {
    name: 'Tilt',
    domain: 'hellotilt.com',
  },
  {
    name: 'Dressipi',
    domain: 'dressipi.com',
  },
  {
    name: 'Attain',
    domain: 'attaindata.io',
  },
  {
    name: 'Slab',
    domain: 'slab.com',
  },
  {
    name: 'Fellow.app',
    domain: 'fellow.app',
  },
  {
    name: 'QuoteToMe',
    domain: 'quotetome.com',
  },
  {
    name: 'PureRED',
    domain: 'purered.net',
  },
  {
    name: 'HowNow',
    domain: 'gethownow.com',
  },
  {
    name: 'Rise.ai',
    domain: 'rise.ai',
  },
  {
    name: 'StratApps',
    domain: 'stratapps.net',
  },
  {
    name: 'Axeptio',
    domain: 'axeptio.eu',
  },
  {
    name: 'First Call Resolution llc',
    domain: 'gofcr.com',
  },
  {
    name: 'CGI',
    domain: 'cgi.com',
  },
  {
    name: 'GGV Capital',
    domain: 'ggvc.com',
  },
  {
    name: 'Nordicmind',
    domain: 'nordicmind.com',
  },
  {
    name: 'Talon One',
    domain: 'talon.one',
  },
  {
    name: 'Polaris Growth',
    domain: 'polarisgrowth.com',
  },
  {
    name: '20North',
    domain: '20northmarketing.com',
  },
  {
    name: 'eGain',
    domain: 'egain.com',
  },
  {
    name: 'Lead Prosper',
    domain: 'leadprosper.io',
  },
  {
    name: 'Kubrick Group',
    domain: 'kubrickgroup.com',
  },
  {
    name: 'Teamviewer',
    domain: 'teamviewer.com',
  },
  {
    name: 'The Greenhouse',
    domain: 'growwithgreenhouse.com',
  },
  {
    name: 'PriceSpider',
    domain: 'pricespider.com',
  },
  {
    name: 'GP Bullhound',
    domain: 'gpbullhound.com',
  },
  {
    name: 'Particular Audience',
    domain: 'particularaudience.com',
  },
  {
    name: 'ChartHop',
    domain: 'charthop.com',
  },
  {
    name: 'TCPinpoint',
    domain: 'tcpinpoint.com',
  },
  {
    name: 'Brycks Consulting',
    domain: 'brycksconsulting.com',
  },
  {
    name: 'NobelBiz',
    domain: 'nobelbiz.com',
  },
  {
    name: 'build.works',
    domain: 'build.works',
  },
  {
    name: 'trbo',
    domain: 'trbo.com',
  },
  {
    name: 'Daon',
    domain: 'daon.com',
  },
  {
    name: 'Tessian',
    domain: 'tessian.com',
  },
  {
    name: 'Flatfile',
    domain: 'flatfile.com',
  },
  {
    name: 'Papirfly',
    domain: 'papirfly.com',
  },
  {
    name: 'Monetate',
    domain: 'monetate.com',
  },
  {
    name: 'Lang.ai',
    domain: 'lang.ai',
  },
  {
    name: 'Orasi Software',
    domain: 'orasi.com',
  },
  {
    name: 'Metrikus',
    domain: 'metrikus.io',
  },
  {
    name: 'Glyphic AI',
    domain: 'glyphic.ai',
  },
  {
    name: 'Herdify',
    domain: 'herdify.ai',
  },
  {
    name: 'Avaana Pty Ltd',
    domain: 'avaana.com.au',
  },
  {
    name: 'The Right Way',
    domain: 'trw.nyc',
  },
  {
    name: 'ADARA',
    domain: 'adara.com',
  },
  {
    name: 'RWS Group',
    domain: 'sdl.com',
  },
  {
    name: 'Juice',
    domain: 'thinkjuice.com',
  },
  {
    name: 'LyveCom',
    domain: 'lyvecom.com',
  },
  {
    name: 'Roseta.io',
    domain: 'roseta.io',
  },
  {
    name: 'Unify CRM',
    domain: 'unifycrm.com',
  },
  {
    name: 'HyperComply',
    domain: 'hypercomply.com',
  },
  {
    name: 'Catalyst for Social Good Ltd',
    domain: 'csgcatalyst.com',
  },
  {
    name: 'TVP SOLAR SA',
    domain: 'tvpsolar.com',
  },
  {
    name: "Trevayne O'Brien",
    domain: 'trevayneobrien.com',
  },
  {
    name: 'KindKatch',
    domain: 'kindkatch.com',
  },
  {
    name: 'NextChapter eCommerce',
    domain: 'nextchapter-ecommerce.com',
  },
  {
    name: 'SALESmanago',
    domain: 'salesmanago.com',
  },
  {
    name: 'BlueRock Digital',
    domain: 'bluerockdigital.com.au',
  },
  {
    name: 'All Star Training, Inc.',
    domain: 'allstarce.com',
  },
  {
    name: 'Orbiit',
    domain: 'orbiit.ai',
  },
  {
    name: 'saasleads.io',
    domain: 'saasleads.io',
  },
  {
    name: 'Taptivate',
    domain: 'taptivate.co',
  },
  {
    name: 'Honeycomb.io',
    domain: 'honeycomb.io',
  },
  {
    name: 'A-Game Digital',
    domain: 'a-game.digital',
  },
  {
    name: 'Time.ly',
    domain: 'time.ly',
  },
  {
    name: 'Operatix',
    domain: 'operatix.net',
  },
  {
    name: 'Common Knowledge',
    domain: 'commonknowledge.coop',
  },
  {
    name: 'AIRPA',
    domain: 'airpa.ai',
  },
  {
    name: 'ESW',
    domain: 'esw.com',
  },
  {
    name: 'WebMD',
    domain: 'webmd.com',
  },
  {
    name: 'Trustpilot',
    domain: 'trustpilot.com',
  },
  {
    name: 'Psyncopate',
    domain: 'psyncopate.com',
  },
  {
    name: 'Contentsquare',
    domain: 'contentsquare.com',
  },
  {
    name: 'RedFast',
    domain: 'redfast.com',
  },
  {
    name: 'MaxOptra (sales test)',
    domain: 'maxoptra.com',
  },
  {
    name: 'Kandji',
    domain: 'kandji.io',
  },
  {
    name: 'PowerBuy',
    domain: 'powerbuy.app',
  },
  {
    name: 'Bridge',
    domain: 'thebridgecorp.com',
  },
  {
    name: 'Amazon Pay',
    domain: 'amazpaytoken.com',
  },
  {
    name: 'SeedCMS',
    domain: 'seedcms.com',
  },
  {
    name: 'Splashlight Studios',
    domain: 'splashlight-studios.com',
  },
  {
    name: 'Feathr',
    domain: 'feathr.co',
  },
  {
    name: 'Rush To Channel',
    domain: 'rushtochannel.com',
  },
  {
    name: 'Didomi',
    domain: 'didomi.io',
  },
  {
    name: 'Virsae Limited',
    domain: 'virsae.com',
  },
  {
    name: 'PartnerScore',
    domain: 'partnerscore.io',
  },
  {
    name: 'XPLN',
    domain: 'xpln.com',
  },
  {
    name: 'PubConcierge',
    domain: 'pubconcierge.com',
  },
  {
    name: 'Panopto',
    domain: 'panopto.com',
  },
  {
    name: 'Depositphotos',
    domain: 'depositphotos.com',
  },
  {
    name: 'Agillic',
    domain: 'agillic.com',
  },
  {
    name: 'Modento',
    domain: 'modento.io',
  },
  {
    name: 'Corso',
    domain: 'corso.com',
  },
  {
    name: 'Startdeliver',
    domain: 'startdeliver.com',
  },
  {
    name: 'Argus Media',
    domain: 'argusmedia.com',
  },
  {
    name: 'ProInsight',
    domain: 'proinsight.co',
  },
  {
    name: 'Optily',
    domain: 'optily.com',
  },
  {
    name: 'PacWest Endurance, LLC',
    domain: 'pacwestendurance.com',
  },
  {
    name: 'Reply',
    domain: 'reply.io',
  },
  {
    name: 'Zscaler',
    domain: 'zscaler.com',
  },
  {
    name: 'AAXIS',
    domain: 'aaxisdigital.com',
  },
  {
    name: 'StackCommerce',
    domain: 'stackcommerce.com',
  },
  {
    name: 'EDGE Telecom',
    domain: 'edgetelecom.ca',
  },
  {
    name: 'Inveterate',
    domain: 'inveterate.com',
  },
  {
    name: 'Chartwell Compliance',
    domain: 'chartwellcompliance.com',
  },
  {
    name: 'Fortress Information Security',
    domain: 'fortressinfosec.com',
  },
  {
    name: 'IWD Agency',
    domain: 'iwdagency.com',
  },
  {
    name: '3Gtms',
    domain: '3gtms.com',
  },
  {
    name: 'Lucidity Software',
    domain: 'luciditysoftware.com.au',
  },
  {
    name: 'Console Connect',
    domain: 'consoleconnect.com',
  },
  {
    name: 'Foodics',
    domain: 'foodics.com',
  },
  {
    name: 'Edge',
    domain: 'onedge.co',
  },
  {
    name: 'Silverback Strategies',
    domain: 'silverbackstrategies.com',
  },
  {
    name: 'Vodafone',
    domain: 'vodafone.com',
  },
  {
    name: 'Go To Market Partners',
    domain: 'gtmpartners.com',
  },
  {
    name: 'CLARITY',
    domain: 'clarity.cx',
  },
  {
    name: 'Leverage Lab',
    domain: 'leveragelab.com',
  },
  {
    name: 'OptiMonk',
    domain: 'optimonk.com',
  },
  {
    name: 'Belacom - Marketing relationnel',
    domain: 'belacom.fr',
  },
  {
    name: 'Maveryx S.r.l.',
    domain: 'maveryx.com',
  },
  {
    name: 'Wezen',
    domain: 'wezen.com',
  },
  {
    name: 'WeSupply Labs',
    domain: 'wesupplylabs.com',
  },
  {
    name: 'JUST DIGITAL',
    domain: 'justdigital.com.br',
  },
  {
    name: 'Primitive',
    domain: 'leadwithprimitive.com',
  },
  {
    name: 'Empire Flippers',
    domain: 'empireflippers.com',
  },
  {
    name: 'Heroes',
    domain: 'makeheroes.co',
  },
  {
    name: 'Touchpoint Group',
    domain: 'touchpointgroup.com',
  },
  {
    name: 'SWORD Health',
    domain: 'swordhealth.com',
  },
  {
    name: 'FreshLime',
    domain: 'freshlime.com',
  },
  {
    name: 'Pave',
    domain: 'pave.dev',
  },
  {
    name: 'Optiply',
    domain: 'optiply.nl',
  },
  {
    name: 'EWR Digital',
    domain: 'ewrdigital.com',
  },
  {
    name: 'Infinia ML',
    domain: 'infiniaml.com',
  },
  {
    name: 'CyCognito',
    domain: 'cycognito.com',
  },
  {
    name: 'Maven Wave',
    domain: 'mavenwave.com',
  },
  {
    name: 'Endrock Growth & Analytics',
    domain: 'endrock.software',
  },
  {
    name: 'Directive',
    domain: 'directiveconsulting.com',
  },
  {
    name: 'Knit Agency',
    domain: 'knitagency.com',
  },
  {
    name: 'Menlo Spark, Inc.',
    domain: 'menlospark.co',
  },
  {
    name: 'ConvertFlow',
    domain: 'convertflow.com',
  },
  {
    name: 'Swiss Tower GmbH',
    domain: 'swisstower.pro',
  },
  {
    name: 'Syrup Tech',
    domain: 'syrup.tech',
  },
  {
    name: 'momencio',
    domain: 'momencio.com',
  },
  {
    name: 'Varos',
    domain: 'varos.com',
  },
  {
    name: 'Dasera',
    domain: 'dasera.com',
  },
  {
    name: 'DQLabs Inc',
    domain: 'dqlabs.ai',
  },
  {
    name: 'SESTEK',
    domain: 'sestek.com',
  },
  {
    name: 'Peoplism',
    domain: 'peoplism.com',
  },
  {
    name: 'Tribesur',
    domain: 'tribesur.com',
  },
  {
    name: 'ExperienceThis',
    domain: 'experiencethis.co',
  },
  {
    name: 'ROAS Media',
    domain: 'roasmedia.com',
  },
  {
    name: 'Packlane',
    domain: 'packlane.com',
  },
  {
    name: 'GraphCDN',
    domain: 'graphcdn.io',
  },
  {
    name: 'cmBuilder',
    domain: 'cmbuilder.io',
  },
  {
    name: 'Roxen',
    domain: 'roxen.com',
  },
  {
    name: 'bot•hello',
    domain: 'bothello.io',
  },
  {
    name: 'Eduq Tecnologia',
    domain: 'eduqtecnologia.com.br',
  },
  {
    name: 'WAND',
    domain: 'thewand.jp',
  },
  {
    name: 'ZAGO AB',
    domain: 'zago.se',
  },
  {
    name: 'Time Miner',
    domain: 'timeminerapp.com',
  },
  {
    name: 'dup_Netchex',
    domain: 'netchex.com',
  },
  {
    name: 'Cornell University',
    domain: 'cornell.edu',
  },
  {
    name: 'Tada',
    domain: 'trytada.com',
  },
  {
    name: 'Bulletin',
    domain: 'bulletin.co',
  },
  {
    name: 'Plivo',
    domain: 'plivo.com',
  },
  {
    name: 'LYSI Consulting',
    domain: 'lysi.co',
  },
  {
    name: 'Digital Sapien Interactive',
    domain: 'digitalsapien.com',
  },
  {
    name: 'MidMarket Place',
    domain: 'midmarketplace.com',
  },
  {
    name: 'Digital SuperCat',
    domain: 'digitalsupercat.com',
  },
  {
    name: 'Thought Machine',
    domain: 'thoughtmachine.net',
  },
  {
    name: 'Storetasker',
    domain: 'storetasker.com',
  },
  {
    name: 'Nextmv',
    domain: 'nextmv.io',
  },
  {
    name: 'Klaus',
    domain: 'klausapp.com',
  },
  {
    name: 'Remote',
    domain: 'remote.com',
  },
  {
    name: 'Cybereason',
    domain: 'cybereason.com',
  },
  {
    name: 'Kiflo PRM',
    domain: 'kiflo.com',
  },
  {
    name: '#paid',
    domain: 'hashtagpaid.com',
  },
  {
    name: 'Guesty',
    domain: 'guesty.com',
  },
  {
    name: 'Well Planned Web',
    domain: 'wellplannedweb.com',
  },
  {
    name: 'Larsen & Toubro Infotech',
    domain: 'lntinfotech.com',
  },
  {
    name: 'RevGenius',
    domain: 'revgenius.com',
  },
  {
    name: 'Language Inspired',
    domain: 'languageinspired.com',
  },
  {
    name: 'JUMP Data Driven Video',
    domain: 'jumpdatadriven.com',
  },
  {
    name: 'ShapeDo',
    domain: 'shapedo.com',
  },
  {
    name: 'Connect4',
    domain: 'connect4.app',
  },
  {
    name: 'Creditsafe',
    domain: 'creditsafe.com',
  },
  {
    name: 'Wur',
    domain: 'wurinc.jp',
  },
  {
    name: 'Symbiotech',
    domain: 'symbiotech.com',
  },
  {
    name: 'Toovio',
    domain: 'toovio.com',
  },
  {
    name: 'Interapt',
    domain: 'interapt.com',
  },
  {
    name: 'GREAT Cloud Services',
    domain: 'greatcloudservices.com',
  },
  {
    name: 'TBM Consulting Group',
    domain: 'tbmcg.com',
  },
  {
    name: 'Dploy Solutions',
    domain: 'dploysolutions.com',
  },
  {
    name: 'Elevature',
    domain: 'elevature.com.au',
  },
  {
    name: 'Diamanti',
    domain: 'diamanti.com',
  },
  {
    name: 'LEADSCALE',
    domain: 'leadscale.com',
  },
  {
    name: 'Blue Wheel',
    domain: 'bluewheelmedia.com',
  },
  {
    name: 'SMC National',
    domain: 'smcnational.com',
  },
  {
    name: 'Round Barn Labs',
    domain: 'roundbarnlabs.com',
  },
  {
    name: 'Pro-Fi 20/20 CPAs',
    domain: 'profi2020.com',
  },
  {
    name: 'Devo Technology, Inc',
    domain: 'devo.com',
  },
  {
    name: 'Zuar',
    domain: 'zuar.com',
  },
  {
    name: 'ninety two',
    domain: 'weareninetytwo.com',
  },
  {
    name: 'Harmonya',
    domain: 'harmonya.com',
  },
  {
    name: 'SuperLemon',
    domain: 'superlemon.xyz',
  },
  {
    name: 'Rx Savings Solutions',
    domain: 'rxss.com',
  },
  {
    name: 'Zumper',
    domain: 'zumper.com',
  },
  {
    name: 'Search Discovery',
    domain: 'searchdiscovery.com',
  },
  {
    name: 'CLIPr',
    domain: 'clipr.ai',
  },
  {
    name: 'KeywordSearch',
    domain: 'keywordsearch.com',
  },
  {
    name: 'Deck Commerce',
    domain: 'deckcommerce.com',
  },
  {
    name: 'Nogin',
    domain: 'nogin.com',
  },
  {
    name: 'PingPong Global Payments',
    domain: 'usa.pingpongx.com',
  },
  {
    name: 'Juno Ecommerce',
    domain: 'junoecommerce.com',
  },
  {
    name: 'Spark Shipping',
    domain: 'sparkshipping.com',
  },
  {
    name: 'XAnge',
    domain: 'xange.vc',
  },
  {
    name: 'Weights & Biases',
    domain: 'wandb.ai',
  },
  {
    name: 'Kubermatic',
    domain: 'kubermatic.com',
  },
  {
    name: 'Castor',
    domain: 'castordoc.com',
  },
  {
    name: 'Totango',
    domain: 'totango.com',
  },
  {
    name: 'Bridgetdata Inc.',
    domain: 'bridgetdata.com',
  },
  {
    name: 'HHAeXchange',
    domain: 'hhaexchange.com',
  },
  {
    name: 'Kontakt.io',
    domain: 'kontakt.io',
  },
  {
    name: 'EVOLUTIVE GROUP',
    domain: 'evolutive-group.com',
  },
  {
    name: 'Lingo Live',
    domain: 'lingolive.com',
  },
  {
    name: 'Authoritas',
    domain: 'authoritas.com',
  },
  {
    name: 'Pulse Solution',
    domain: 'pulsesolution.com.br',
  },
  {
    name: 'SaM Solutions GmbH & Co. KG',
    domain: 'sam-solutions.com',
  },
  {
    name: 'SellerActive',
    domain: 'selleractive.com',
  },
  {
    name: 'ApexChat',
    domain: 'apexchat.com',
  },
  {
    name: 'Media Defined, Inc.',
    domain: 'netexam.com',
  },
  {
    name: 'GritHR Solutions',
    domain: 'grithrsolutions.com',
  },
  {
    name: 'Colours of Data',
    domain: 'cod.bi',
  },
  {
    name: 'Bridgit',
    domain: 'gobridgit.com',
  },
  {
    name: 'Electric',
    domain: 'electric.ai',
  },
  {
    name: 'Semansys',
    domain: 'semansys.com',
  },
  {
    name: 'CallHippo',
    domain: 'callhippo.com',
  },
  {
    name: 'Cyber-net defenders',
    domain: 'cybernetdefenders.co.za',
  },
  {
    name: 'Prefect',
    domain: 'prefect.io',
  },
  {
    name: 'Diagnal',
    domain: 'diagnal.com',
  },
  {
    name: 'Synthesia',
    domain: 'synthesia.io',
  },
  {
    name: 'Ignite Selling',
    domain: 'igniteselling.com',
  },
  {
    name: 'The Lead',
    domain: 'the-lead.co',
  },
  {
    name: 'ShowShoppa',
    domain: 'showshoppa.com',
  },
  {
    name: 'Helium Development',
    domain: 'heliumdev.com',
  },
  {
    name: 'GB Group PLC',
    domain: 'gbgplc.com',
  },
  {
    name: 'Trace',
    domain: 'tracehq.com',
  },
  {
    name: 'StudioHawk',
    domain: 'studiohawk.co.uk',
  },
  {
    name: 'Reward the World™',
    domain: 'rewardtheworld.net',
  },
  {
    name: 'Alpha Omega Agency',
    domain: 'alphaomega.agency',
  },
  {
    name: 'Qualified',
    domain: 'qualified.io',
  },
  {
    name: 'Fortunedataservices',
    domain: 'fortunedataservices.com',
  },
  {
    name: 'Fraser Direct',
    domain: 'fraserdirect.ca',
  },
  {
    name: 'Sympany',
    domain: 'sympany.nl',
  },
  {
    name: 'Fortimize',
    domain: 'fortimize.com',
  },
  {
    name: 'Hwy Haul',
    domain: 'hwyhaul.com',
  },
  {
    name: 'Banzai International, Inc.',
    domain: 'banzai.io',
  },
  {
    name: 'Darwill',
    domain: 'darwill.com',
  },
  {
    name: 'Class technologies inc',
    domain: 'class.com',
  },
  {
    name: 'ReturnGO',
    domain: 'returngo.ai',
  },
  {
    name: 'Imagination Media',
    domain: 'imaginationmedia.com',
  },
  {
    name: 'ExpoFP',
    domain: 'expofp.com',
  },
  {
    name: 'VWO',
    domain: 'vwo.com',
  },
  {
    name: 'Modernize',
    domain: 'modernize.com',
  },
  {
    name: 'J2S',
    domain: 'j2s.net',
  },
  {
    name: 'WisePops',
    domain: 'wisepops.com',
  },
  {
    name: 'D. Miller Associates',
    domain: 'dmillerassociates.com',
  },
  {
    name: 'Five9',
    domain: 'five9.com',
  },
  {
    name: 'Clarify',
    domain: 'clarifyb2b.com',
  },
  {
    name: 'Dup_ZimWorX',
    domain: 'globalbpsolutions.com',
  },
  {
    name: 'Leyton',
    domain: 'leyton.com',
  },
  {
    name: 'Probely',
    domain: 'probely.com',
  },
  {
    name: 'Qubole',
    domain: 'qubole.com',
  },
  {
    name: 'MageCloud',
    domain: 'magecloud.agency',
  },
  {
    name: 'Grid Dynamics',
    domain: 'griddynamics.com',
  },
  {
    name: 'T1D Exchange',
    domain: 't1dexchange.org',
  },
  {
    name: 'The Sparkery',
    domain: 'thesparkery.com',
  },
  {
    name: 'Flowcode',
    domain: 'flowcode.com',
  },
  {
    name: 'Verisave',
    domain: 'verisave.com',
  },
  {
    name: 'GagiTeck',
    domain: 'gagiteck.io',
  },
  {
    name: 'GFT Group',
    domain: 'gft.com',
  },
  {
    name: 'inSided',
    domain: 'insided.com',
  },
  {
    name: '#gifted',
    domain: 'hashgifted.com',
  },
  {
    name: 'Abacus Insights',
    domain: 'abacusinsights.com',
  },
  {
    name: 'PIVOT',
    domain: 'pivotmade.com',
  },
  {
    name: 'Seeds',
    domain: 'weareseeders.com',
  },
  {
    name: 'SuccessKit',
    domain: 'successkit.io',
  },
  {
    name: 'Ultrarev',
    domain: 'ultrarev.io',
  },
  {
    name: 'Drew',
    domain: 'wearedrew.co',
  },
  {
    name: 'Smart Communications',
    domain: 'smartcommunications.com',
  },
  {
    name: 'Advance Solutions',
    domain: 'advancesolutions.com',
  },
  {
    name: 'Blue Frog',
    domain: 'bluefrogdm.com',
  },
  {
    name: 'Simplogical Consulting LLC',
    domain: 'simplogical.com',
  },
  {
    name: 'Product Customizer',
    domain: 'productcustomizer.com',
  },
  {
    name: 'Trackify App',
    domain: 'trackifyapp.com',
  },
  {
    name: 'InterPayments',
    domain: 'interpayments.com',
  },
  {
    name: 'Piggy',
    domain: 'piggy.eu',
  },
  {
    name: 'DYOPATH',
    domain: 'dyopath.com',
  },
  {
    name: 'Nitert',
    domain: 'nitert.nl',
  },
  {
    name: 'CyberGRX',
    domain: 'cybergrx.com',
  },
  {
    name: 'Taggstar',
    domain: 'taggstar.com',
  },
  {
    name: 'Strike Graph',
    domain: 'strikegraph.com',
  },
  {
    name: 'Centro',
    domain: 'centro.rocks',
  },
  {
    name: 'CloudHesive',
    domain: 'cloudhesive.com',
  },
  {
    name: 'Maison MRKT',
    domain: 'maisonmrkt.com',
  },
  {
    name: 'First Choice Background Screening',
    domain: 'firstchoicebackground.com',
  },
  {
    name: 'Recharge',
    domain: 'rechargepayments.com',
  },
  {
    name: 'Devart',
    domain: 'devart.com',
  },
  {
    name: 'BurnRate.io',
    domain: 'burnrate.oio',
  },
  {
    name: 'Jamezz B.V.',
    domain: 'jamezz.com',
  },
  {
    name: 'eAccountable',
    domain: 'eaccountable.com',
  },
  {
    name: 'Constru',
    domain: 'constru.ai',
  },
  {
    name: 'MullinTestCo',
    domain: 'mullintestco.com',
  },
  {
    name: 'Zuum Transportation',
    domain: 'zuumapp.com',
  },
  {
    name: 'DigiCommerce',
    domain: 'digicommercegroup.com',
  },
  {
    name: 'Pexip',
    domain: 'pexip.com',
  },
  {
    name: 'CentralSquare Technologies',
    domain: 'centralsquare.com',
  },
  {
    name: 'Fortress XYZ',
    domain: 'fortress.xyz',
  },
  {
    name: 'Carbyne',
    domain: 'carbyne911.com',
  },
  {
    name: 'sequel',
    domain: 'sequel.io',
  },
  {
    name: 'ref7',
    domain: 'ref7.net',
  },
  {
    name: 'censhare',
    domain: 'censhare.com',
  },
  {
    name: 'Future Marketing',
    domain: 'futuremarketing-network.de',
  },
  {
    name: 'VogaCloset',
    domain: 'vogacloset.com',
  },
  {
    name: 'Fastloop',
    domain: 'fastloop.ai',
  },
  {
    name: 'Walmart Canada',
    domain: 'walmart.ca',
  },
  {
    name: 'TapClassifieds',
    domain: 'tapclassifieds.com',
  },
  {
    name: 'Parker',
    domain: 'getparker.com',
  },
  {
    name: 'Alchemy',
    domain: 'trustalchemy.com',
  },
  {
    name: 'Clearvision',
    domain: 'clearvision-cm.com',
  },
  {
    name: 'Blue Onion Labs',
    domain: 'blueonionlabs.com',
  },
  {
    name: 'Tweakwise',
    domain: 'tweakwise.com',
  },
  {
    name: 'Alternative Finance Inc',
    domain: 'alternative.co',
  },
  {
    name: 'Mindful Luxury',
    domain: 'mindful-luxury.com',
  },
  {
    name: 'integrando soluções de saúde',
    domain: 'integrandosolucoesdesaude.com.br',
  },
  {
    name: 'Textline',
    domain: 'textline.com',
  },
  {
    name: '12Return',
    domain: '12return.com',
  },
  {
    name: 'Cycleon BV',
    domain: 'cycleon.com',
  },
  {
    name: 'FSF Consulting Group',
    domain: 'fsfconsultinggroup.com',
  },
  {
    name: 'Native Ai',
    domain: 'gonative.ai',
  },
  {
    name: 'TVM Venture Limited',
    domain: 'tvmng.com',
  },
  {
    name: 'D+E Consulting Solutions, Inc.',
    domain: 'dandeconsulting.com',
  },
  {
    name: 'Greaser Consulting',
    domain: 'greaserconsulting.com',
  },
  {
    name: 'The Lumery',
    domain: 'thelumery.com',
  },
  {
    name: 'Sweden Unlimited',
    domain: 'swedenunlimited.com',
  },
  {
    name: 'Humanitas Technologies',
    domain: 'humanitas.ai',
  },
  {
    name: 'DreamItReel',
    domain: 'dreamitreel.com',
  },
  {
    name: 'Jitsuin',
    domain: 'jitsuin.com',
  },
  {
    name: 'Engati',
    domain: 'engati.com',
  },
  {
    name: 'Boomset',
    domain: 'boomset.com',
  },
  {
    name: 'Home Care Pulse',
    domain: 'homecarepulse.com',
  },
  {
    name: 'Black Crow AI, Inc.',
    domain: 'blackcrow.ai',
  },
  {
    name: 'HighBrookCREATE',
    domain: 'highbrookcreate.com',
  },
  {
    name: 'Silverbullet Data Services',
    domain: 'wearesilverbullet.com',
  },
  {
    name: 'OnlyGrowth',
    domain: 'onlygrowth.com',
  },
  {
    name: 'Easton Town Center',
    domain: 'eastontowncenter.com',
  },
  {
    name: 'Formlabs',
    domain: 'formlabs.com',
  },
  {
    name: 'dash.fi',
    domain: 'dash.fi',
  },
  {
    name: 'Tredence Inc',
    domain: 'tredence.com',
  },
  {
    name: 'Advantage Solutions',
    domain: 'advantagesolutions.net',
  },
  {
    name: 'Accurate Background',
    domain: 'accurate.com',
  },
  {
    name: 'OpenStore',
    domain: 'open.store',
  },
  {
    name: 'Virtual Badge',
    domain: 'virtualbadge.com',
  },
  {
    name: 'PlexTrac',
    domain: 'plextrac.com',
  },
  {
    name: 'ID.me',
    domain: 'id.me',
  },
  {
    name: 'AFTIA Solutions',
    domain: 'aftia.com',
  },
  {
    name: 'Go Nimbly',
    domain: 'gonimbly.com',
  },
  {
    name: 'Vintage Cash Cow',
    domain: 'vintagecashcow.co.uk',
  },
  {
    name: 'kipi.bi',
    domain: 'kipi.bi',
  },
  {
    name: 'Rahi',
    domain: 'rahi.io',
  },
  {
    name: 'TrafficGuard',
    domain: 'trafficguard.ai',
  },
  {
    name: 'Lynton',
    domain: 'lyntonweb.com',
  },
  {
    name: 'Fresh Gravity',
    domain: 'freshgravity.com',
  },
  {
    name: 'Bluebird Day',
    domain: 'bluebirdday.nl',
  },
  {
    name: 'Cogo',
    domain: 'cogo.co',
  },
  {
    name: 'Floship',
    domain: 'floship.com',
  },
  {
    name: 'Truckl',
    domain: 'truckl.io',
  },
  {
    name: 'OnBuy',
    domain: 'onbuy.com',
  },
  {
    name: 'First Pier',
    domain: 'firstpier.com',
  },
  {
    name: 'Lunchbox',
    domain: 'lunchbox.io',
  },
  {
    name: 'Magaya Corporation',
    domain: 'magaya.com',
  },
  {
    name: 'Cake Agency',
    domain: 'cake.agency',
  },
  {
    name: 'SPINS',
    domain: 'spins.com',
  },
  {
    name: 'Ben Zettler Digital Media',
    domain: 'benzettler.com',
  },
  {
    name: 'GumGum',
    domain: 'gumgum.com',
  },
  {
    name: 'SmartBug Media',
    domain: 'smartbugmedia.com',
  },
  {
    name: 'Mavenwit',
    domain: 'mavenwit.com',
  },
  {
    name: 'NetDynamic Consulting',
    domain: 'netdynamicconsulting.com',
  },
  {
    name: 'Kleiner Perkins',
    domain: 'kleinerperkins.com',
  },
  {
    name: 'Blue Yonder',
    domain: 'blueyonder.com',
  },
  {
    name: 'Nurture Boss',
    domain: 'nurtureboss.io',
  },
  {
    name: 'Cloudflare',
    domain: 'cloudflare.com',
  },
  {
    name: 'Elite Beauty Society',
    domain: 'elitebeautysociety.com',
  },
  {
    name: 'Robling',
    domain: 'robling.io',
  },
  {
    name: 'Avionte Staffing Software',
    domain: 'avionte.com',
  },
  {
    name: 'involve.ai',
    domain: 'involve.ai',
  },
  {
    name: 'Viscosity',
    domain: 'viscosityna.com',
  },
  {
    name: 'ChangeUp',
    domain: 'changeupforcharity.com',
  },
  {
    name: 'Stilo',
    domain: 'stilo.com',
  },
  {
    name: 'Alpha Software',
    domain: 'alphasoftware.com',
  },
  {
    name: 'Effectual',
    domain: 'effectual.com',
  },
  {
    name: 'soona',
    domain: 'soona.co',
  },
  {
    name: 'Qumulo',
    domain: 'qumulo.com',
  },
  {
    name: 'Finlert Technologies',
    domain: 'finlert.com',
  },
  {
    name: 'Web Geo Services',
    domain: 'webgeoservices.com',
  },
  {
    name: 'JMango360',
    domain: 'jmango360.com',
  },
  {
    name: 'Salus Technologies Inc',
    domain: 'salussafety.io',
  },
  {
    name: 'CCP Software GmbH',
    domain: 'ccpsoft.de',
  },
  {
    name: 'Unilog',
    domain: 'unilogcorp.com',
  },
  {
    name: 'Logsta GmbH',
    domain: 'logsta.com',
  },
  {
    name: '360 Sync',
    domain: '360-sync.com',
  },
  {
    name: 'GoldenComm',
    domain: 'goldencomm.com',
  },
  {
    name: 'Ecommerce EDU',
    domain: 'ecommerceedu.com',
  },
  {
    name: '36creative',
    domain: '36creative.com',
  },
  {
    name: 'PredictSpring',
    domain: 'predictspring.com',
  },
  {
    name: 'Armanino',
    domain: 'armaninollp.com',
  },
  {
    name: 'Telek Sistemas',
    domain: 'telek.com.br',
  },
  {
    name: 'Canvass',
    domain: 'canvass.com',
  },
  {
    name: 'NexusMedia',
    domain: 'nexusmedia-ua.com',
  },
  {
    name: 'BoldIQ',
    domain: 'boldiq.com',
  },
  {
    name: 'SPARK6',
    domain: 'spark6.com',
  },
  {
    name: 'EasyOrder',
    domain: 'easyorderapp.com',
  },
  {
    name: 'Pushub',
    domain: 'pushub.net',
  },
  {
    name: 'Shift Paradigm',
    domain: 'shiftparadigm.com',
  },
  {
    name: 'Ohalo',
    domain: 'ohalo.co',
  },
  {
    name: 'Sweet Analytics',
    domain: 'sweetanalytics.com',
  },
  {
    name: 'Yotpo',
    domain: 'yotpo.com',
  },
  {
    name: 'iAM Learning',
    domain: 'iamlearningcontent.com',
  },
  {
    name: 'Hex',
    domain: 'hex.tech',
  },
  {
    name: 'Linx',
    domain: 'linx.com.br',
  },
  {
    name: 'Altus Alliance',
    domain: 'altusalliance.com',
  },
  {
    name: 'My Outreach',
    domain: 'myoutreach.co.uk',
  },
  {
    name: 'Lopos',
    domain: 'lopos.be',
  },
  {
    name: 'BuiltWorlds',
    domain: 'builtworlds.com',
  },
  {
    name: 'Intelligent Automation',
    domain: 'iapl.lk',
  },
  {
    name: 'OneSpace',
    domain: 'onespace.com',
  },
  {
    name: 'Elly Analytics',
    domain: 'ellyanalytics.com',
  },
  {
    name: 'Leverify',
    domain: 'getleverify.com',
  },
  {
    name: 'align.me',
    domain: 'align.me',
  },
  {
    name: 'Enhancify Financing',
    domain: 'enhancify.com',
  },
  {
    name: 'Hubtek',
    domain: 'gohubtek.com',
  },
  {
    name: 'Replicant',
    domain: 'replicant.ai',
  },
  {
    name: 'Deloitte Digital',
    domain: 'deloitte.com.au',
  },
  {
    name: 'Limepay',
    domain: 'limepay.com.au',
  },
  {
    name: 'eHub',
    domain: 'ehub.com',
  },
  {
    name: 'Selldone',
    domain: 'selldone.com',
  },
  {
    name: 'Deep Data Research',
    domain: 'deepdataresearch.com',
  },
  {
    name: 'RedRock Infotech',
    domain: 'redrockinfotech.com',
  },
  {
    name: 'Balance Internet',
    domain: 'balanceinternet.com.au',
  },
  {
    name: 'Premium Plus',
    domain: 'premiumplus.io',
  },
  {
    name: 'Awtomatic',
    domain: 'awtomatic.app',
  },
  {
    name: 'Mastek',
    domain: 'mastek.com',
  },
  {
    name: 'Scale Consulting, LLC',
    domain: 'scale.consulting',
  },
  {
    name: 'ETQ',
    domain: 'etq.com',
  },
  {
    name: 'Omneo',
    domain: 'omneo.io',
  },
  {
    name: 'TrackTik',
    domain: 'tracktik.com',
  },
  {
    name: 'MOS - MindOnSite',
    domain: 'mindonsite.com',
  },
  {
    name: 'Arctic Leaf',
    domain: 'arcticleaf.io',
  },
  {
    name: 'Semcasting,, Inc',
    domain: 'semcasting.com',
  },
  {
    name: 'Skupos',
    domain: 'skupos.com',
  },
  {
    name: 'TTEC',
    domain: 'ttec.com',
  },
  {
    name: 'Conversion Maker',
    domain: 'conversionmaker.com',
  },
  {
    name: 'Code42',
    domain: 'code42.com',
  },
  {
    name: 'RapidSpike',
    domain: 'rapidspike.com',
  },
  {
    name: 'Apollo GraphQL',
    domain: 'apollographql.com',
  },
  {
    name: 'Wasabi Technologies',
    domain: 'wasabi.com',
  },
  {
    name: 'ITZ Consultants',
    domain: 'itzconsultants.com',
  },
  {
    name: 'easiware',
    domain: 'easiware.com',
  },
  {
    name: 'Magid',
    domain: 'magid.com',
  },
  {
    name: 'ZimWorX',
    domain: 'zimworx.com',
  },
  {
    name: 'Altrata',
    domain: 'altrata.com',
  },
  {
    name: 'Bits In Glass',
    domain: 'bitsinglass.com',
  },
  {
    name: 'Mosaic.tech',
    domain: 'mosaic.tech',
  },
  {
    name: 'Healthy Happy Box',
    domain: 'healthyhappybox.com',
  },
  {
    name: 'True North',
    domain: 'truenorth.co',
  },
  {
    name: 'Mediawide UK Ltd',
    domain: 'mediawide.com',
  },
  {
    name: 'CKC Technologies',
    domain: 'ckctechnologies.com',
  },
  {
    name: 'VRP Consulting',
    domain: 'vrpconsulting.com',
  },
  {
    name: 'Serif',
    domain: 'affinity.serif.com',
  },
  {
    name: 'Grocerist',
    domain: 'getgrocerist.com',
  },
  {
    name: 'showd.me',
    domain: 'showd.me',
  },
  {
    name: 'Bellwethr',
    domain: 'bellwethr.com',
  },
  {
    name: 'Kanopi Studios',
    domain: 'kanopi.com',
  },
  {
    name: 'Enerflo',
    domain: 'enerflo.com',
  },
  {
    name: 'HackerRank',
    domain: 'hackerrank.com',
  },
  {
    name: 'Peak',
    domain: 'peak.ai',
  },
  {
    name: 'SBR Consulting',
    domain: 'sbrconsulting.com',
  },
  {
    name: 'Candu',
    domain: 'candu.ai',
  },
  {
    name: 'Andzen',
    domain: 'andzen.co',
  },
  {
    name: 'Sherpaan BV',
    domain: 'sherpaan.nl',
  },
  {
    name: 'mirro.io',
    domain: 'mirro.io',
  },
  {
    name: 'Trusted Shops GmbH',
    domain: 'trustedshops.com',
  },
  {
    name: 'Ellisphere',
    domain: 'ellisphere.com',
  },
  {
    name: 'Pipedrive',
    domain: 'pipedrive.com',
  },
  {
    name: 'eVouch',
    domain: 'evouchapp.com',
  },
  {
    name: 'Hazy',
    domain: 'hazy.com',
  },
  {
    name: 'HappyFox inc',
    domain: 'happyfox.com',
  },
  {
    name: 'ContractorCoachPRO',
    domain: 'contractorcoachpro.com',
  },
  {
    name: 'Fusionary',
    domain: 'fusionary.com',
  },
  {
    name: 'ISB AG',
    domain: 'isb-ag.de',
  },
  {
    name: 'Unily',
    domain: 'unily.com',
  },
  {
    name: 'Boomerangme',
    domain: 'boomerangme.biz',
  },
  {
    name: 'Leadfamly',
    domain: 'leadfamly.com',
  },
  {
    name: 'Webjump',
    domain: 'webjump.com.br',
  },
  {
    name: 'Fuel Me',
    domain: 'fuel.me',
  },
  {
    name: 'Salesvue',
    domain: 'salesvue.com',
  },
  {
    name: 'Quickfire Digital',
    domain: 'quickfiredigital.com',
  },
  {
    name: 'Spike Technology Europe',
    domain: 'spike.nl',
  },
  {
    name: 'Dept Agency',
    domain: 'deptagency.com',
  },
  {
    name: 'Youwe',
    domain: 'youweagency.com',
  },
  {
    name: 'EKON GmbH',
    domain: 'my-gekko.com',
  },
  {
    name: 'Arnic Business Solutions',
    domain: 'arnicbizsolutions.com',
  },
  {
    name: 'Shopgate GmbH',
    domain: 'shopgate.com',
  },
  {
    name: 'Asendia',
    domain: 'asendia.com',
  },
  {
    name: 'Zoocha',
    domain: 'zoocha.com',
  },
  {
    name: 'Baja Fulfillment',
    domain: 'bajafulfillment.com',
  },
  {
    name: 'Springbox',
    domain: 'springbox.com',
  },
  {
    name: 'Wunderman Thompson',
    domain: 'wundermanthompson.com',
  },
  {
    name: 'Softlimit',
    domain: 'softlimit.com',
  },
  {
    name: 'ZGIVE',
    domain: 'zgive.com',
  },
  {
    name: 'Validity',
    domain: 'validity.com',
  },
  {
    name: 'Maven Med',
    domain: 'mavenmed.com',
  },
  {
    name: 'Intershop Communications',
    domain: 'intershop.com',
  },
  {
    name: 'Falkon AI',
    domain: 'falkon.ai',
  },
  {
    name: 'Sound Partner Marketing',
    domain: 'soundpartnermarketing.com',
  },
  {
    name: 'Enfactum - Integrated Marketing Services',
    domain: 'enfactum.com',
  },
  {
    name: 'Bright Data',
    domain: 'brightdata.com',
  },
  {
    name: 'Gradual',
    domain: 'gradual.com',
  },
  {
    name: 'NearSt',
    domain: 'near.st',
  },
  {
    name: 'Tasman Analytics',
    domain: 'tasman.ai',
  },
  {
    name: 'hanseflow Hamburg',
    domain: 'hanseflow.de',
  },
  {
    name: 'SEDNA',
    domain: 'sedna.com',
  },
  {
    name: 'Nice Commerce',
    domain: 'nicecommerce.com',
  },
  {
    name: 'Bennett Tech Solutions',
    domain: 'bennetttechsolutions.net',
  },
  {
    name: 'SLINGSHOT',
    domain: 'slingshotahead.com',
  },
  {
    name: 'broadpeak',
    domain: 'broadpeak.tv',
  },
  {
    name: 'Lumoa',
    domain: 'lumoa.me',
  },
  {
    name: 'RoomPriceGenie',
    domain: 'roompricegenie.com',
  },
  {
    name: 'efelle creative',
    domain: 'seattlewebdesign.com',
  },
  {
    name: 'Trevor Park Consulting',
    domain: 'trevorpark.com',
  },
  {
    name: 'Tobania',
    domain: 'tobania.be',
  },
  {
    name: 'Total Brain',
    domain: 'totalbrain.com',
  },
  {
    name: 'Smartcat',
    domain: 'smartcat.com',
  },
  {
    name: 'ShopPad',
    domain: 'theshoppad.com',
  },
  {
    name: 'Fresh Consulting',
    domain: 'freshconsulting.com',
  },
  {
    name: 'DADO, Inc.',
    domain: 'projectdado.com',
  },
  {
    name: 'noCRM.io',
    domain: 'youdontneedacrm.com',
  },
  {
    name: 'Tenovos',
    domain: 'tenovos.com',
  },
  {
    name: 'Peek',
    domain: 'peek.com',
  },
  {
    name: 'Haptik',
    domain: 'haptik.ai',
  },
  {
    name: 'Project Map It',
    domain: 'projectmapit.com',
  },
  {
    name: 'Looklet',
    domain: 'looklet.com',
  },
  {
    name: 'Wedia SA',
    domain: 'wedia-group.com',
  },
  {
    name: 'CrowdBlossom.',
    domain: 'crowdblossom.software',
  },
  {
    name: 'Firstbase',
    domain: 'firstbasehq.com',
  },
  {
    name: 'Kinex Media Inc',
    domain: 'kinexmedia.com',
  },
  {
    name: 'Cobra Legal Solutions',
    domain: 'cobralegalsolutions.com',
  },
  {
    name: 'AdLibertas',
    domain: 'adlibertas.com',
  },
  {
    name: 'Flip',
    domain: 'flipcx.com',
  },
  {
    name: 'Getmoredonations',
    domain: 'getmoredonations.com',
  },
  {
    name: 'Kynship',
    domain: 'kynship.co',
  },
  {
    name: 'ChilliApple Limited',
    domain: 'chilliapple.co.uk',
  },
  {
    name: 'WSC Sports',
    domain: 'wsc-sports.com',
  },
  {
    name: 'Practical Software Solutions',
    domain: 'practicalsoftwaresolutions.com',
  },
  {
    name: 'AllFetch',
    domain: 'allfetch.com',
  },
  {
    name: 'Aiven',
    domain: 'aiven.io',
  },
  {
    name: 'Actindo AG',
    domain: 'actindo.com',
  },
  {
    name: 'Jetformatics Healthcare Solutions, LLC',
    domain: 'jetformatics.com',
  },
  {
    name: 'Shift Negócios Imobiliários',
    domain: 'imobiliariashift.com.br',
  },
  {
    name: 'Realmedia Latin America',
    domain: 'realmedianetwork.com',
  },
  {
    name: 'BBSA Marketing',
    domain: 'bbsa-marketing.com',
  },
  {
    name: 'Shulex',
    domain: 'shulex.com',
  },
  {
    name: 'Bigblue',
    domain: 'bigblue.co',
  },
  {
    name: 'Topcontent',
    domain: 'topcontent.com',
  },
  {
    name: 'YAARDE.',
    domain: 'yaarde.software',
  },
  {
    name: 'B2B Ninja',
    domain: 'b2bninja.com',
  },
  {
    name: 'DRYiCE',
    domain: 'dryice.ai',
  },
  {
    name: 'Featured Customers',
    domain: 'featuredcustomers.com',
  },
  {
    name: 'Appsolutely',
    domain: 'appsolutely.nl',
  },
  {
    name: 'MOLOCO',
    domain: 'moloco.com',
  },
  {
    name: 'Awesome Dynamic',
    domain: 'awesomedynamic.com',
  },
  {
    name: 'Automox',
    domain: 'automox.com',
  },
  {
    name: 'OMG Commerce, LLC',
    domain: 'omgcommerce.com',
  },
  {
    name: 'Litium',
    domain: 'litium.com',
  },
  {
    name: 'Matter Made',
    domain: 'mattermade.co',
  },
  {
    name: 'STREAMS Solutions',
    domain: 'streamssolutions.com',
  },
  {
    name: 'Provectus Algae',
    domain: 'provectusalgae.com',
  },
  {
    name: 'TRM Labs',
    domain: 'trmlabs.com',
  },
  {
    name: 'ZerviZ',
    domain: 'zervizgroup.com',
  },
  {
    name: 'Lightmatter',
    domain: 'lightmatter.com',
  },
  {
    name: 'AVAIL',
    domain: 'getavail.com',
  },
  {
    name: 'Erin Living',
    domain: 'erinliving.com',
  },
  {
    name: 'Pagely',
    domain: 'pagely.com',
  },
  {
    name: 'Agilyx Group',
    domain: 'agilyxgroup.com',
  },
  {
    name: 'Ghosts Group',
    domain: 'ghosts.group',
  },
  {
    name: 'ACTUM Digital',
    domain: 'actumdigital.com',
  },
  {
    name: 'Orcawise',
    domain: 'orcawise.com',
  },
  {
    name: 'ALVAO',
    domain: 'alvao.com',
  },
  {
    name: 'SecuPi',
    domain: 'secupi.com',
  },
  {
    name: 'Forem',
    domain: 'forem.dev',
  },
  {
    name: 'Skeep',
    domain: 'skeep.io',
  },
  {
    name: 'GrailPay',
    domain: 'grailpay.com',
  },
  {
    name: 'AMZ Advisers',
    domain: 'amzadvisers.com',
  },
  {
    name: 'TaskHuman',
    domain: 'taskhuman.com',
  },
  {
    name: 'Secureframe',
    domain: 'secureframe.com',
  },
  {
    name: 'DOZR',
    domain: 'dozr.com',
  },
  {
    name: 'Calixa',
    domain: 'calixa.io',
  },
  {
    name: 'Vizion Interactive',
    domain: 'vizion.com',
  },
  {
    name: 'Hutah Systems',
    domain: 'hutahsystems.com',
  },
  {
    name: 'Partners Wire',
    domain: 'linktr.ee',
  },
  {
    name: 'Incremental Media',
    domain: 'incrementalmedia.com',
  },
  {
    name: 'Monumental',
    domain: 'monumental.is',
  },
  {
    name: 'Red Hat',
    domain: 'redhat.com',
  },
  {
    name: 'feal',
    domain: 'feal.app',
  },
  {
    name: 'Book4Time',
    domain: 'book4time.com',
  },
  {
    name: 'Savills',
    domain: 'savills.us',
  },
  {
    name: 'Phiture',
    domain: 'phiture.com',
  },
  {
    name: 'Trackier',
    domain: 'trackier.com',
  },
  {
    name: 'Click Boarding',
    domain: 'clickboarding.com',
  },
  {
    name: 'Winmore',
    domain: 'winmore.app',
  },
  {
    name: 'Veyor',
    domain: 'veyordigital.com',
  },
  {
    name: 'SocialBee.io',
    domain: 'socialbee.io',
  },
  {
    name: 'Rhombus Systems',
    domain: 'rhombussystems.com',
  },
  {
    name: 'Reconomx',
    domain: 'reconomx.com',
  },
  {
    name: 'Mtech Group',
    domain: 'mtech-inc.net',
  },
  {
    name: 'Pronto Marketing',
    domain: 'prontomarketing.com',
  },
  {
    name: 'Craftsman Plus',
    domain: 'craftsmanplus.com',
  },
  {
    name: 'fourTENS',
    domain: 'fourtens.com',
  },
  {
    name: '&BAM',
    domain: 'andbam.co',
  },
  {
    name: 'Anteriad',
    domain: 'anteriad.com',
  },
  {
    name: 'Fore! Group',
    domain: 'foregrp.com',
  },
  {
    name: 'MovigoO',
    domain: 'movigoo.com',
  },
  {
    name: 'Sellry',
    domain: 'sellry.com',
  },
  {
    name: 'Solid',
    domain: 'solidfi.com',
  },
  {
    name: 'Jansy Packaging',
    domain: 'jansypkg.com',
  },
  {
    name: 'PowerDMS',
    domain: 'powerdms.com',
  },
  {
    name: 'NeonPixel',
    domain: 'neonpixel.co',
  },
  {
    name: 'Buku Ship',
    domain: 'bukuship.com',
  },
  {
    name: 'LinkedIn',
    domain: 'linkedin.com',
  },
  {
    name: 'Prive',
    domain: 'tryprive.com',
  },
  {
    name: 'Timbergrove',
    domain: 'timbergrove.com',
  },
  {
    name: 'MarginEdge',
    domain: 'marginedge.com',
  },
  {
    name: 'LT Partners',
    domain: 'lt.partners',
  },
  {
    name: 'CrowdPower',
    domain: 'crowdpower.io',
  },
  {
    name: 'Aidentified',
    domain: 'aidentified.com',
  },
  {
    name: 'Archetype',
    domain: 'archetypeconsulting.com',
  },
  {
    name: 'Webstacks',
    domain: 'webstacks.com',
  },
  {
    name: 'Talk Hiring',
    domain: 'talkhiring.com',
  },
  {
    name: 'Greenscreens.ai',
    domain: 'greenscreens.ai',
  },
  {
    name: 'Everyspace',
    domain: 'everyspacehq.com',
  },
  {
    name: 'SaleCycle',
    domain: 'salecycle.com',
  },
  {
    name: 'HomeBinder',
    domain: 'homebinder.com',
  },
  {
    name: 'SK Inc. C&C',
    domain: 'skcc.com',
  },
  {
    name: 'SmartBarrel',
    domain: 'smartbarrel.io',
  },
  {
    name: 'Stateset',
    domain: 'stateset.io',
  },
  {
    name: 'ClearCode Solutions',
    domain: 'clearcode.nl',
  },
  {
    name: 'Tomorrow',
    domain: 'tomorrowagency.com',
  },
  {
    name: 'TripleDart',
    domain: 'tripledart.com',
  },
  {
    name: 'Wiser Software Solutions Inc.',
    domain: 'wisertechsolutions.ca',
  },
  {
    name: 'Try and Review',
    domain: 'tryandreview.com',
  },
  {
    name: 'FlexBooker',
    domain: 'flexbooker.com',
  },
  {
    name: 'Hevo',
    domain: 'hevodata.com',
  },
  {
    name: 'SQLDBM Tool',
    domain: 'sqldbm.com',
  },
  {
    name: 'Seels',
    domain: 'seels.nl',
  },
  {
    name: 'OV Loop',
    domain: 'ovloop.com',
  },
  {
    name: 'tomato pay',
    domain: 'tomatopay.co.uk',
  },
  {
    name: 'Andromo',
    domain: 'andromo.com',
  },
  {
    name: '280 Group',
    domain: '280group.com',
  },
  {
    name: 'Vibrant Performance',
    domain: 'vibrantperformance.co',
  },
  {
    name: 'Videon',
    domain: 'videonlabs.com',
  },
  {
    name: 'Dialics',
    domain: 'dialics.com',
  },
  {
    name: 'WhisperClaims',
    domain: 'whisperclaims.co.uk',
  },
  {
    name: 'Batch',
    domain: 'getbatch.com',
  },
  {
    name: 'Owl Labs',
    domain: 'owllabs.com',
  },
  {
    name: 'Scandit',
    domain: 'scandit.com',
  },
  {
    name: 'Vindicia',
    domain: 'vindicia.com',
  },
  {
    name: 'Hathway',
    domain: 'wearehathway.com',
  },
  {
    name: 'Papaya Global',
    domain: 'papayaglobal.com',
  },
  {
    name: 'LiftForward',
    domain: 'liftforward.com',
  },
  {
    name: 'Yellow Dog Software',
    domain: 'yellowdogsoftware.com',
  },
  {
    name: 'Flawed Diamond',
    domain: 'flaweddiamond.co.za',
  },
  {
    name: 'certifyMe.online',
    domain: 'certifyme.online',
  },
  {
    name: 'Telnyx',
    domain: 'telnyx.com',
  },
  {
    name: 'Magothy Payments',
    domain: 'magothy.biz',
  },
  {
    name: 'AltF4Group',
    domain: 'altf4group.co.za',
  },
  {
    name: 'Freedm',
    domain: 'freedm.exchange',
  },
  {
    name: 'TermSheet',
    domain: 'termsheet.com',
  },
  {
    name: 'Fortytwo Labs',
    domain: 'fortytwolabs.com',
  },
  {
    name: 'Full Service Funnels',
    domain: 'fullservicefunnels.com',
  },
  {
    name: 'Purple Arcade',
    domain: 'purplearcade.com',
  },
  {
    name: 'GreyOrange',
    domain: 'greyorange.com',
  },
  {
    name: 'Abzooba Inc',
    domain: 'abzooba.com',
  },
  {
    name: '10XCREW',
    domain: '10xcrew.com',
  },
  {
    name: 'Approvely',
    domain: 'approvely.com',
  },
  {
    name: 'Mighty Digital',
    domain: 'mighty.digital',
  },
  {
    name: '365Talents',
    domain: '365talents.com',
  },
  {
    name: 'Focus Software Sdn Bhd',
    domain: 'focussoftnet.com',
  },
  {
    name: 'Punch!',
    domain: 'punchabm.com',
  },
  {
    name: 'Ecommerce Accelerator',
    domain: 'ecommerceaccelerator.nl',
  },
  {
    name: 'Froomle',
    domain: 'froomle.ai',
  },
  {
    name: 'MKT4 Hosting',
    domain: 'mkt4hosting.com.br',
  },
  {
    name: 'Ad-Lib.io',
    domain: 'ad-lib.io',
  },
  {
    name: 'Shop Innovator',
    domain: 'shopinnovator.com',
  },
  {
    name: 'WellDatabase',
    domain: 'welldatabase.com',
  },
  {
    name: 'Pollen Returns',
    domain: 'pollenreturns.com',
  },
  {
    name: 'hireEZ',
    domain: 'hireez.com',
  },
  {
    name: 'Mysamaris',
    domain: 'mysamaris.com',
  },
  {
    name: 'Hello Ebbot',
    domain: 'ebbot.ai',
  },
  {
    name: 'nps.today',
    domain: 'nps.today',
  },
  {
    name: 'Webhelp',
    domain: 'webhelp.com',
  },
  {
    name: 'PerformLine',
    domain: 'performline.com',
  },
  {
    name: 'Marpipe',
    domain: 'marpipe.com',
  },
  {
    name: 'FORCAM',
    domain: 'forcam.com',
  },
  {
    name: 'Rainfactory',
    domain: 'rainfactory.com',
  },
  {
    name: 'DeepBrain AI',
    domain: 'deepbrainai.io',
  },
  {
    name: 'BoostUp.ai',
    domain: 'boostup.ai',
  },
  {
    name: 'Quinyx',
    domain: 'quinyx.com',
  },
  {
    name: 'Retail Rocket',
    domain: 'retailrocket.net',
  },
  {
    name: 'Taos',
    domain: 'taos.com',
  },
  {
    name: 'Craftable',
    domain: 'craftable.com',
  },
  {
    name: 'Barefoot Coders',
    domain: 'barefootcoders.com',
  },
  {
    name: 'SetSight',
    domain: 'setsight.com',
  },
  {
    name: 'World In Sign, LLC',
    domain: 'worldinsign.com',
  },
  {
    name: 'Fourbrazil Tecnologies',
    domain: 'fourbrazil.com',
  },
  {
    name: 'Bespin Global, US',
    domain: 'us.bespinglobal.com',
  },
  {
    name: 'Frame.io',
    domain: 'frame.io',
  },
  {
    name: 'Simpu',
    domain: 'simpu.co',
  },
  {
    name: 'Salesken',
    domain: 'salesken.ai',
  },
  {
    name: 'RevPartners',
    domain: 'revpartners.io',
  },
  {
    name: 'Nectar',
    domain: 'nectarpd.com',
  },
  {
    name: 'Higher Logic',
    domain: 'higherlogic.com',
  },
  {
    name: 'Thyleads',
    domain: 'thyleads.com',
  },
  {
    name: 'Crystal',
    domain: 'crystalknows.com',
  },
  {
    name: 'SafeQual',
    domain: 'safequal.net',
  },
  {
    name: 'IGEL',
    domain: 'igel.com',
  },
  {
    name: 'Voyantis',
    domain: 'voyantis.ai',
  },
  {
    name: 'Yanko Design',
    domain: 'yankodesign.com',
  },
  {
    name: 'Hyperzon',
    domain: 'hyperzon.io',
  },
  {
    name: 'Qualifio',
    domain: 'qualifio.com',
  },
  {
    name: 'Railsbank',
    domain: 'railsbank.com',
  },
  {
    name: 'Mediaocean',
    domain: 'mediaocean.com',
  },
  {
    name: 'HipTen',
    domain: 'hipten.com',
  },
  {
    name: 'MobUpps International Ltd',
    domain: 'mobupps.com',
  },
  {
    name: 'Surglogs, Inc.',
    domain: 'surglogs.com',
  },
  {
    name: 'acquire',
    domain: 'acquire.app',
  },
  {
    name: 'Double Jump Media',
    domain: 'doublejump.media',
  },
  {
    name: 'Best',
    domain: 'bestcompany.com',
  },
  {
    name: 'Swimlane',
    domain: 'swimlane.com',
  },
  {
    name: 'Vid',
    domain: 'vidcorp.com',
  },
  {
    name: 'The Conversation Studio',
    domain: 'theconversationstudio.com',
  },
  {
    name: 'RoboTurk',
    domain: 'roboturk.co',
  },
  {
    name: 'BreachRx',
    domain: 'breachrx.com',
  },
  {
    name: 'ChannelEngine',
    domain: 'channelengine.com',
  },
  {
    name: 'Cloudlab',
    domain: 'cloudlab.com',
  },
  {
    name: 'MX Technologies, Inc.',
    domain: 'mx.com',
  },
  {
    name: 'AnyRoad',
    domain: 'anyroad.com',
  },
  {
    name: 'Work Hero',
    domain: 'useworkhero.com',
  },
  {
    name: 'Jivaso Technologies',
    domain: 'jivaso.com',
  },
  {
    name: 'Everflow Technologies Inc',
    domain: 'everflow.io',
  },
  {
    name: 'Mconsent',
    domain: 'mconsent.net',
  },
  {
    name: 'Quest Software',
    domain: 'quest.com',
  },
  {
    name: 'Tourial',
    domain: 'tourial.com',
  },
  {
    name: 'CapEc',
    domain: 'capec.io',
  },
  {
    name: 'Klick-Tipp Limited',
    domain: 'klicktipp.com',
  },
  {
    name: 'Rodeo',
    domain: 'hey.rodeo',
  },
  {
    name: 'FinLocker',
    domain: 'finlocker.com',
  },
  {
    name: 'WAIR',
    domain: 'getwair.com',
  },
  {
    name: 'Bluvium',
    domain: 'bluvium.com',
  },
  {
    name: 'delaware',
    domain: 'delaware.pro',
  },
  {
    name: 'Analance',
    domain: 'analance.com',
  },
  {
    name: 'Vertigo Tecnologia',
    domain: 'vertigo.com.br',
  },
  {
    name: 'relatico',
    domain: 'relatico.com',
  },
  {
    name: 'SEC Reporting Analytics LLC',
    domain: 'secreportinganalytics.com',
  },
  {
    name: 'Brasoftware',
    domain: 'brasoftware.com.br',
  },
  {
    name: 'Optiseller',
    domain: 'optiseller.com',
  },
  {
    name: 'Modell Aachen GmbH',
    domain: 'modell-aachen.de',
  },
  {
    name: 'Kickbooster',
    domain: 'kickbooster.me',
  },
  {
    name: 'Scalefast',
    domain: 'scalefast.com',
  },
  {
    name: 'SKU Agency',
    domain: 'skuagency.com',
  },
  {
    name: 'EKM',
    domain: 'ekm.com',
  },
  {
    name: 'Humankind',
    domain: 'gethumankind.com',
  },
  {
    name: 'AMAZONLABS',
    domain: 'amazonlabs.com.br',
  },
  {
    name: 'Aeris Communications',
    domain: 'aeris.com',
  },
  {
    name: 'Virtual Tele Customer Service',
    domain: 'virtualtelecs.com',
  },
  {
    name: 'Fendous Sustainable Solutions',
    domain: 'fendous.com',
  },
  {
    name: 'ICE',
    domain: 'icecann.com',
  },
  {
    name: 'Volt',
    domain: 'volt.io',
  },
  {
    name: 'Jibble',
    domain: 'jibble.io',
  },
  {
    name: '6Connex',
    domain: '6connex.com',
  },
  {
    name: 'SoCast Digital',
    domain: 'socastdigital.com',
  },
  {
    name: 'bitsCrunch',
    domain: 'bitscrunch.com',
  },
  {
    name: 'Laying Foundational Growth',
    domain: 'layingfoundationalgrowth.com',
  },
  {
    name: 'Luz',
    domain: 'luzdata.com',
  },
  {
    name: 'Maeztra',
    domain: 'maeztra.com',
  },
  {
    name: 'SwagUp',
    domain: 'swagup.com',
  },
  {
    name: 'Infoplus',
    domain: 'infopluscommerce.com',
  },
  {
    name: 'Max Borges Agency',
    domain: 'maxborgesagency.com',
  },
  {
    name: 'GroupA',
    domain: 'groupainc.com',
  },
  {
    name: 'Preset',
    domain: 'preset.io',
  },
  {
    name: 'FX Digital',
    domain: 'fxdigital.uk',
  },
  {
    name: 'PAXLY GmbH',
    domain: 'paxly.eu',
  },
  {
    name: 'Cognizant',
    domain: 'cognizant.com',
  },
  {
    name: 'Gondola',
    domain: 'gondola.travel',
  },
  {
    name: 'NexJ Systems Inc.',
    domain: 'nexj.com',
  },
  {
    name: 'HazardCo',
    domain: 'hazardco.com',
  },
  {
    name: 'Kaliop',
    domain: 'kaliop.com',
  },
  {
    name: 'Navix',
    domain: 'navix.io',
  },
  {
    name: 'Widen, an Acquia Company',
    domain: 'widen.com',
  },
  {
    name: 'Ace Digital Marketing Inc',
    domain: 'aceb2bdigitalmarketing.com',
  },
  {
    name: 'Semantix',
    domain: 'en.semantix.ai',
  },
  {
    name: 'Prescient',
    domain: 'prescient-ai.io',
  },
  {
    name: 'Integrisys',
    domain: 'integrisys.com.mx',
  },
  {
    name: 'BeyondImpact',
    domain: 'beyond-impact.com',
  },
  {
    name: 'JEBCommerce',
    domain: 'jebcommerce.com',
  },
  {
    name: 'Crave Interactive',
    domain: 'craveinteractive.com',
  },
  {
    name: 'Newtopia',
    domain: 'newtopia.com',
  },
  {
    name: 'One Door',
    domain: 'onedoor.com',
  },
  {
    name: 'Teradata',
    domain: 'teradata.com',
  },
  {
    name: 'Content Beta',
    domain: 'contentbeta.com',
  },
  {
    name: 'LeapFrogBI LLC',
    domain: 'leapfrogbi.com',
  },
  {
    name: 'Gozio',
    domain: 'goziohealth.com',
  },
  {
    name: 'Tellescom',
    domain: 'tellescom.com.br',
  },
  {
    name: 'Evolve Service Software',
    domain: 'evolveone.com',
  },
  {
    name: 'Mentat Analytics',
    domain: 'mentatanalytics.co',
  },
  {
    name: 'Yantra, Inc.',
    domain: 'yantrainc.com',
  },
  {
    name: 'Moot',
    domain: 'moot.group',
  },
  {
    name: 'LifeSaver Mobile',
    domain: 'lifesaver-app.com',
  },
  {
    name: 'Gotransverse',
    domain: 'gotransverse.com',
  },
  {
    name: 'MAV',
    domain: 'hiremav.com',
  },
  {
    name: 'Vymo',
    domain: 'getvymo.com',
  },
  {
    name: 'Need a Barista',
    domain: 'needabarista.com.au',
  },
  {
    name: 'Kilter',
    domain: 'kilterrewards.com',
  },
  {
    name: 'Import2',
    domain: 'import2.com',
  },
  {
    name: 'Stackbit',
    domain: 'stackbit.com',
  },
  {
    name: 'Series Eight',
    domain: 'serieseight.com',
  },
  {
    name: 'Hacking Demand',
    domain: 'hackingdemand.com',
  },
  {
    name: 'AIO Logic',
    domain: 'aiologic.io',
  },
  {
    name: 'Connect360',
    domain: 'connect360multimedia.com',
  },
  {
    name: 'FCO Inc',
    domain: 'fco.com',
  },
  {
    name: 'Wyng',
    domain: 'wyng.com',
  },
  {
    name: 'GoodTime.io',
    domain: 'goodtime.io',
  },
  {
    name: 'GroundCloud',
    domain: 'groundcloud.com',
  },
  {
    name: 'Distil.ai',
    domain: 'distil.ai',
  },
  {
    name: 'Gloat',
    domain: 'gloat.com',
  },
  {
    name: 'ReaLift, LLC',
    domain: 'getrealift.com',
  },
  {
    name: 'OneGTM',
    domain: 'onegtm.com',
  },
  {
    name: 'Bikky',
    domain: 'bikky.com',
  },
  {
    name: 'Thinkific',
    domain: 'thinkific.com',
  },
  {
    name: 'Urban Folk',
    domain: 'urbanfolk.ca',
  },
  {
    name: 'PrettyDamnQuick',
    domain: 'prettydamnquick.io',
  },
  {
    name: 'Big Friends Consulting Practice, LLC',
    domain: 'bigfcp.com',
  },
  {
    name: 'Quaxar',
    domain: 'quaxar.com',
  },
  {
    name: 'Swipeclock',
    domain: 'swipeclock.com',
  },
  {
    name: 'Ardoq',
    domain: 'ardoq.com',
  },
  {
    name: 'SanityDesk',
    domain: 'sanitydesk.com',
  },
  {
    name: 'Gorilla Corporation',
    domain: 'gorillaict.com',
  },
  {
    name: 'AutomationEdge',
    domain: 'automationedge.com',
  },
  {
    name: 'Genie Ventures',
    domain: 'genieventures.co.uk',
  },
  {
    name: 'Anaek, Inc.',
    domain: 'harmonizehq.com',
  },
  {
    name: 'Caroline McQueen',
    domain: 'carolinemcqueen.com',
  },
  {
    name: 'HireClix',
    domain: 'hireclix.com',
  },
  {
    name: 'Undefined Studio',
    domain: 'thisisundefined.com',
  },
  {
    name: 'Fade Technology Solutions, Inc.',
    domain: 'fade.technology',
  },
  {
    name: 'Marsello',
    domain: 'marsello.com',
  },
  {
    name: 'Edge Global Solutions',
    domain: 'edgeglobalsolutions.com',
  },
  {
    name: 'Sweeft Digital',
    domain: 'sweeftdigital.com',
  },
  {
    name: 'PVTL Digital Limited',
    domain: 'pivotal.digital',
  },
  {
    name: 'Cloud First I T',
    domain: 'cloudfirstit.com',
  },
  {
    name: 'AccessAltitude',
    domain: 'accessaltitude.com',
  },
  {
    name: 'Thanx',
    domain: 'thanx.com',
  },
  {
    name: 'unitb consulting GmbH',
    domain: 'unitb.de',
  },
  {
    name: 'KEB LLC',
    domain: 'keb-llc.com',
  },
  {
    name: 'XTM International',
    domain: 'xtm.cloud',
  },
  {
    name: 'Pocketed Grant Platform',
    domain: 'hellopocketed.io',
  },
  {
    name: 'IPQualityScore',
    domain: 'ipqualityscore.com',
  },
  {
    name: 'humm',
    domain: 'shophumm.com',
  },
  {
    name: 'ActionIQ',
    domain: 'actioniq.com',
  },
  {
    name: 'Mux',
    domain: 'mux.com',
  },
  {
    name: 'Sandler Training',
    domain: 'sandler.com',
  },
  {
    name: 'Lytics',
    domain: 'lytics.com',
  },
  {
    name: 'Successful Channels',
    domain: 'successfulchannels.com',
  },
  {
    name: 'ESW - Partners',
    domain: 'esw-partners.com',
  },
  {
    name: 'Acquia, Inc.',
    domain: 'acquia.com',
  },
  {
    name: 'Flowspace',
    domain: 'flow.space',
  },
  {
    name: 'Shotstack',
    domain: 'shotstack.io',
  },
  {
    name: 'IMPACT Commerce',
    domain: 'impactcommerce.com',
  },
  {
    name: 'PowerDetails, LLC',
    domain: 'powerdetails.com',
  },
  {
    name: 'Datatrics',
    domain: 'datatrics.com',
  },
  {
    name: "Jill's Office",
    domain: 'jillsoffice.com',
  },
  {
    name: 'PrimeSoft',
    domain: 'primesoft-group.com',
  },
  {
    name: 'Whiplash',
    domain: 'whiplash.com',
  },
  {
    name: 'Cloudset Limited',
    domain: 'cloudset.net',
  },
  {
    name: 'Geoforce',
    domain: 'geoforce.com',
  },
  {
    name: 'Skio',
    domain: 'skio.com',
  },
  {
    name: 'Hootsuite',
    domain: 'hootsuite.com',
  },
  {
    name: 'Dijy',
    domain: 'dijy.com',
  },
  {
    name: 'AMZ Consultancy',
    domain: 'amzconsultancy.nl',
  },
  {
    name: 'CustomFit',
    domain: 'customfit.ai',
  },
  {
    name: 'Top Growth Marketing',
    domain: 'topgrowthmarketing.com',
  },
  {
    name: 'INTELITY, inc.',
    domain: 'intelity.com',
  },
  {
    name: 'Nova Benefits',
    domain: 'novabenefits.com',
  },
  {
    name: 'Agnoplay',
    domain: 'agnoplay.com',
  },
  {
    name: 'New Velocity',
    domain: 'mynewvelocity.com',
  },
  {
    name: 'BankVault Cybersecurity',
    domain: 'bankvault.com',
  },
  {
    name: 'Proliant',
    domain: 'proliant.com',
  },
  {
    name: 'BX Studio',
    domain: 'bx.studio',
  },
  {
    name: 'LINQ',
    domain: 'linqservices.com',
  },
  {
    name: 'COLAB',
    domain: 'teamcolab.com',
  },
  {
    name: 'DigitalJAS',
    domain: 'digitaljas.com',
  },
  {
    name: 'Angle',
    domain: 'angleplatform.com',
  },
  {
    name: 'Dreamdata',
    domain: 'dreamdata.io',
  },
  {
    name: 'CoderPad',
    domain: 'coderpad.io',
  },
  {
    name: 'RevenueCat',
    domain: 'revenuecat.com',
  },
  {
    name: 'DataGrail',
    domain: 'datagrail.io',
  },
  {
    name: 'Parade',
    domain: 'parade.ai',
  },
  {
    name: 'MariaDB',
    domain: 'mariadb.com',
  },
  {
    name: 'SeeD EM',
    domain: 'seedem.co',
  },
  {
    name: 'BusinessOnline',
    domain: 'businessol.com',
  },
  {
    name: 'Uberflip',
    domain: 'uberflip.com',
  },
  {
    name: 'House of Cart',
    domain: 'houseofcart.com.au',
  },
  {
    name: 'inRiver',
    domain: 'inriver.com',
  },
  {
    name: 'ABOUT YOU AG & Co. KG',
    domain: 'aboutyou.de',
  },
  {
    name: 'SafeGraph',
    domain: 'safegraph.com',
  },
  {
    name: 'Tradeswell',
    domain: 'tradeswell.com',
  },
  {
    name: 'Gbtec Software AG',
    domain: 'gbtec.com',
  },
  {
    name: 'Promogen s.r.o.',
    domain: 'promogen.cz',
  },
  {
    name: 'Carro',
    domain: 'getcarro.com',
  },
  {
    name: 'Leadon',
    domain: 'leadon-digital.com',
  },
  {
    name: 'Upstack',
    domain: 'upstack.co',
  },
  {
    name: 'e-Spirit',
    domain: 'e-spirit.com',
  },
  {
    name: 'Patch',
    domain: 'patch.io',
  },
  {
    name: 'Thankful',
    domain: 'thankful.ai',
  },
  {
    name: 'Check Point Software',
    domain: 'checkpoint.com',
  },
  {
    name: 'DataOps',
    domain: 'dataops.live',
  },
  {
    name: 'Go Global Ecommerce',
    domain: 'goglobalecommerce.com',
  },
  {
    name: 'OMBEA AB',
    domain: 'ombea.com',
  },
  {
    name: 'TekRevol',
    domain: 'tekrevol.com',
  },
  {
    name: 'ECOM DEPARTMENT',
    domain: 'ecomdepartment.com',
  },
  {
    name: 'Tom&Co',
    domain: 'tomandco.co.uk',
  },
  {
    name: 'CellPoint Digital',
    domain: 'cellpointdigital.com',
  },
  {
    name: 'Softr',
    domain: 'softr.io',
  },
  {
    name: 'Vebolia',
    domain: 'verbolia.com',
  },
  {
    name: 'Brevitas',
    domain: 'brevitas.com',
  },
  {
    name: 'My Emissions Ltd',
    domain: 'myemissions.green',
  },
  {
    name: 'Warmly,',
    domain: 'warmly.ai',
  },
  {
    name: 'SafeGuard Cyber',
    domain: 'safeguardcyber.com',
  },
  {
    name: 'CMap Software',
    domain: 'cmap.io',
  },
  {
    name: 'Precog',
    domain: 'precog.com',
  },
  {
    name: 'Terra Dotta',
    domain: 'terradotta.com',
  },
  {
    name: 'Textel CX Inc',
    domain: 'textel.net',
  },
  {
    name: 'Crownpeak - Partners',
    domain: 'crownpeak-partners.com',
  },
  {
    name: 'Penguin E-Commerce',
    domain: 'penguinecommerce.com',
  },
  {
    name: 'AppDynamics',
    domain: 'appdynamics.com',
  },
  {
    name: 'Passionfruit Creative',
    domain: 'heypassionfruit.com',
  },
  {
    name: 'Ecommerce Signal',
    domain: 'ecommercesignal.com',
  },
  {
    name: 'Slope Software',
    domain: 'slopesoftware.com',
  },
  {
    name: 'Backbase',
    domain: 'backbase.com',
  },
  {
    name: 'HiOperator',
    domain: 'hioperator.com',
  },
  {
    name: 'Modern',
    domain: 'modernb2b.co',
  },
  {
    name: 'Whatfix',
    domain: 'whatfix.com',
  },
  {
    name: 'Cognism',
    domain: 'cognism.com',
  },
  {
    name: 'Lemongrass Consulting Limited',
    domain: 'lemongrasscloud.com',
  },
  {
    name: 'Twelve',
    domain: 'twelve.eu',
  },
  {
    name: 'Data Collaborative',
    domain: 'datacollaborative.com',
  },
  {
    name: 'ReBOUND Returns',
    domain: 'reboundreturns.com',
  },
  {
    name: 'Respondology',
    domain: 'respondology.com',
  },
  {
    name: 'Hyperext',
    domain: 'hyperext.com',
  },
  {
    name: 'LendKey',
    domain: 'lendkey.com',
  },
  {
    name: 'eComchain Inc.',
    domain: 'ecomchain.com',
  },
  {
    name: 'Huggg',
    domain: 'huggg.me',
  },
  {
    name: 'SOCi',
    domain: 'meetsoci.com',
  },
  {
    name: 'Interverbum Technology',
    domain: 'interverbumtech.com',
  },
  {
    name: 'Pulley',
    domain: 'pulley.com',
  },
  {
    name: 'Vestico',
    domain: 'vestico.co',
  },
  {
    name: 'Ataccama',
    domain: 'ataccama.com',
  },
  {
    name: 'Infostrux',
    domain: 'infostrux.com',
  },
  {
    name: 'Verse.io',
    domain: 'verse.io',
  },
  {
    name: 'Ampry',
    domain: 'ampry.com',
  },
  {
    name: 'CareJourney',
    domain: 'carejourney.com',
  },
  {
    name: 'DYS Translations',
    domain: 'dystranslations.com',
  },
  {
    name: 'upFlow.me',
    domain: 'upflow.me',
  },
  {
    name: "Lloyd's List Intelligence",
    domain: 'lloydslistintelligence.com',
  },
  {
    name: 'AspinBots',
    domain: 'aspinbots.com.br',
  },
  {
    name: 'AMS',
    domain: 'weareams.com',
  },
  {
    name: 'Capsule',
    domain: 'capsule.video',
  },
  {
    name: 'Harness',
    domain: 'harness.io',
  },
  {
    name: 'Credera',
    domain: 'credera.com',
  },
  {
    name: 'MGTI Ltda',
    domain: 'mgti.cl',
  },
  {
    name: 'AnswerForce',
    domain: 'answerforce.com',
  },
  {
    name: 'Performance Solutions International',
    domain: 'goto-psi.com',
  },
  {
    name: 'Contentful',
    domain: 'contentful.com',
  },
  {
    name: 'Krypt',
    domain: 'kryptinc.com',
  },
  {
    name: 'InformaIT AB',
    domain: 'informait.com',
  },
  {
    name: 'Extreme Networks',
    domain: 'extremenetworks.com',
  },
  {
    name: 'Wise Systems',
    domain: 'wisesystems.com',
  },
  {
    name: 'DevOps1',
    domain: 'devops1.com.au',
  },
  {
    name: 'Storyly',
    domain: 'storyly.io',
  },
  {
    name: 'dotSource GmbH',
    domain: 'dotsource.com',
  },
  {
    name: 'Venue Live Technologies Inc',
    domain: 'venue.live',
  },
  {
    name: 'VertoDigital',
    domain: 'vertodigital.com',
  },
  {
    name: 'GroupRaise',
    domain: 'groupraise.com',
  },
  {
    name: 'Achilleus',
    domain: 'achilleus.io',
  },
  {
    name: 'Perceptly',
    domain: 'perceptly.io',
  },
  {
    name: 'AiHello',
    domain: 'aihello.com',
  },
  {
    name: 'Lotto Social',
    domain: 'lottosocial.com',
  },
  {
    name: 'Clear Channel Outdoor',
    domain: 'clearchanneloutdoor.com',
  },
  {
    name: 'PassFort',
    domain: 'passfort.com',
  },
  {
    name: 'UFirst Group',
    domain: 'ufirstgroup.ch',
  },
  {
    name: 'Carson',
    domain: 'heycarson.com',
  },
  {
    name: 'AXIINOV Solutions',
    domain: 'axinnov-dz.com',
  },
  {
    name: '100Rails Limited',
    domain: '100rails.com',
  },
  {
    name: 'Gramrphone',
    domain: 'gramrphone.com',
  },
  {
    name: 'Redzone Production Systems',
    domain: 'rzsoftware.com',
  },
  {
    name: 'Nakoa Digital',
    domain: 'nakoa.digital',
  },
  {
    name: 'Mandiant',
    domain: 'mandiant.com',
  },
  {
    name: 'Prosimo.io',
    domain: 'prosimo.io',
  },
  {
    name: 'Sneeze It',
    domain: 'sneeze.it',
  },
  {
    name: 'Issuu',
    domain: 'issuu.com',
  },
  {
    name: 'National Institute of Building Sciences',
    domain: 'nibs.org',
  },
  {
    name: 'Weezmo',
    domain: 'weezmo.com',
  },
  {
    name: 'WILL Interactive',
    domain: 'willinteractive.com',
  },
  {
    name: 'Enrich Trading Group',
    domain: 'enrichtradinggroup.com',
  },
  {
    name: 'Clearco',
    domain: 'clear.co',
  },
  {
    name: 'Aprimo',
    domain: 'aprimo.com',
  },
  {
    name: 'Brauz',
    domain: 'brauz.com',
  },
  {
    name: 'Fortanix',
    domain: 'fortanix.com',
  },
  {
    name: 'Sprig (formerly UserLeap)',
    domain: 'sprig.com',
  },
  {
    name: 'Semarchy',
    domain: 'semarchy.com',
  },
  {
    name: 'Panorays',
    domain: 'panorays.com',
  },
  {
    name: 'ShootWith.Me',
    domain: 'shootwith.me',
  },
  {
    name: 'Merchant Financial Group',
    domain: 'merchantfinancial.com',
  },
  {
    name: 'Sezzle',
    domain: 'sezzle.com',
  },
  {
    name: 'BuildPass',
    domain: 'buildpass.com.au',
  },
  {
    name: 'Blac & Bloo',
    domain: 'blacbloo.com',
  },
  {
    name: 'Fullstakk Marketing',
    domain: 'fullstakk.no',
  },
  {
    name: 'Launch Potato',
    domain: 'launchpotato.com',
  },
  {
    name: 'FPZN',
    domain: 'fpzn.bio',
  },
  {
    name: 'TXGB',
    domain: 'txgb.co.uk',
  },
  {
    name: 'Joonto',
    domain: 'joonto.com',
  },
  {
    name: '9TH BIT Consulting',
    domain: '9thbit.co.za',
  },
  {
    name: 'TW Squared, L.L.C.',
    domain: 'tw-squared.com',
  },
  {
    name: 'User Interviews',
    domain: 'userinterviews.com',
  },
  {
    name: 'Zego',
    domain: 'gozego.com',
  },
  {
    name: 'Geval 6 Inc Chicago',
    domain: 'geval6.com',
  },
  {
    name: 'Rent Responsibly',
    domain: 'rentresponsibly.org',
  },
  {
    name: 'input LLC',
    domain: 'inputllc.com',
  },
  {
    name: 'Voicify',
    domain: 'voicify.com',
  },
  {
    name: 'Pento',
    domain: 'pento.io',
  },
  {
    name: 'CMS Max',
    domain: 'cmsmax.com',
  },
  {
    name: 'Global Data Resources AS',
    domain: 'globaldataresources.io',
  },
  {
    name: 'Humanitru',
    domain: 'humanitru.com',
  },
  {
    name: 'Momentum Consulting',
    domain: 'momentumcc.com',
  },
  {
    name: 'Vizlib',
    domain: 'vizlib.com',
  },
  {
    name: 'Esko Graphics',
    domain: 'esko.com',
  },
  {
    name: 'Retail Data Partners',
    domain: 'retaildatapartners.com',
  },
  {
    name: 'Interprefy',
    domain: 'interprefy.com',
  },
  {
    name: 'Kunai',
    domain: 'kunaico.com',
  },
  {
    name: 'TextLocate',
    domain: 'textlocate.com',
  },
  {
    name: 'Mindsay',
    domain: 'mindsay.com',
  },
  {
    name: 'Modak Analytics',
    domain: 'modak.com',
  },
  {
    name: 'ALFA Holding Group',
    domain: 'alfaholding.com',
  },
  {
    name: 'Agência InHaus',
    domain: 'agenciainhaus.com.br',
  },
  {
    name: 'SellersFunding',
    domain: 'sellersfunding.com',
  },
  {
    name: 'Teaminvest',
    domain: 'teaminvest.com.au',
  },
  {
    name: 'ModuleQ',
    domain: 'moduleq.com',
  },
  {
    name: 'Hype10 Agency',
    domain: 'hype10agency.com',
  },
  {
    name: 'Sprinque',
    domain: 'sprinque.com',
  },
  {
    name: 'RECESS',
    domain: 'recess.is',
  },
  {
    name: 'Now Vertical Group Inc.',
    domain: 'nowvertical.com',
  },
  {
    name: 'WorkWhile',
    domain: 'workwhilejobs.com',
  },
  {
    name: 'Tai Software',
    domain: 'tai-software.com',
  },
  {
    name: 'Riverside.fm',
    domain: 'riverside.fm',
  },
  {
    name: 'Writer',
    domain: 'writer.com',
  },
  {
    name: 'IntelliShift',
    domain: 'intellishift.com',
  },
  {
    name: 'Vouch',
    domain: 'vouchfor.com',
  },
  {
    name: 'm19',
    domain: 'm19.com',
  },
  {
    name: 'Social Lite Communications Inc.',
    domain: 'sociallite.ca',
  },
  {
    name: 'Payveris',
    domain: 'payveris.com',
  },
  {
    name: 'Upkip',
    domain: 'upkip.cloud',
  },
  {
    name: 'TikaMobile',
    domain: 'tikamobile.com',
  },
  {
    name: 'Zoorix',
    domain: 'zoorix.com',
  },
  {
    name: 'Cadillac Fairview',
    domain: 'cadillacfairview.com',
  },
  {
    name: 'Umanis',
    domain: 'umanis.com',
  },
  {
    name: 'interviewIA',
    domain: 'interviewia.com',
  },
  {
    name: 'SeQuel Response',
    domain: 'sequeldm.com',
  },
  {
    name: 'Aument',
    domain: 'aument.io',
  },
  {
    name: 'Sensei Labs',
    domain: 'senseilabs.com',
  },
  {
    name: 'Exchange Collective',
    domain: 'exchangecollective.com',
  },
  {
    name: 'Klick',
    domain: 'klick.com',
  },
  {
    name: 'Citrix',
    domain: 'citrix.com',
  },
  {
    name: 'Crossbeam Network',
    domain: 'crossbeam.com',
  },
  {
    name: 'Collaborative Solutions',
    domain: 'collaborativesolutions.com',
  },
  {
    name: 'Cherre',
    domain: 'cherre.com',
  },
  {
    name: 'Mako Design + Invent',
    domain: 'makodesign.com',
  },
  {
    name: 'Olla',
    domain: 'olla.co',
  },
  {
    name: 'Actian',
    domain: 'actian.com',
  },
  {
    name: 'Gurobi Optimization',
    domain: 'gurobi.com',
  },
  {
    name: 'AccuBuild',
    domain: 'accu-build.com',
  },
  {
    name: 'CHEP Network',
    domain: 'chepnetwork.com',
  },
  {
    name: 'Reset Financial Operations',
    domain: 'resetfinops.com',
  },
  {
    name: 'Nelnet',
    domain: 'nelnetinc.com',
  },
  {
    name: 'Customer.io',
    domain: 'customer.io',
  },
  {
    name: 'rapidMATION',
    domain: 'rapidmation.com',
  },
  {
    name: 'Koantek',
    domain: 'koantek.com',
  },
  {
    name: 'Mobilize.AI',
    domain: 'mobilize.ai',
  },
  {
    name: 'TSM Engineering Squared and IS',
    domain: 'tsmeis.com',
  },
  {
    name: 'Soroco',
    domain: 'soroco.com',
  },
  {
    name: 'ComXo',
    domain: 'comxo.com',
  },
  {
    name: 'FLOWSPARKS',
    domain: 'flowsparks.com',
  },
  {
    name: 'Catch Digital',
    domain: 'catchdigital.com',
  },
  {
    name: 'SparkSys',
    domain: 'sparksys.co',
  },
  {
    name: 'MNM Teknoloji',
    domain: 'mnm.com.tr',
  },
  {
    name: 'Noted Analytics',
    domain: 'notedanalytics.com',
  },
  {
    name: 'BRQ Digital Solutions',
    domain: 'brq.com',
  },
  {
    name: 'Global Strategic Solutions, LLC',
    domain: 'globalstrategicsolutions.com',
  },
  {
    name: 'EasyStepin',
    domain: 'easystepin.com',
  },
  {
    name: 'HighRadius',
    domain: 'highradius.com',
  },
  {
    name: 'Chenoa Information Services',
    domain: 'chenoainc.com',
  },
  {
    name: 'Spirits360',
    domain: 'spirits360solutions.com',
  },
  {
    name: 'HiFlyer Digital',
    domain: 'hiflyerdigital.com',
  },
  {
    name: 'Condeco',
    domain: 'condecosoftware.com',
  },
  {
    name: 'Skrap',
    domain: 'skrap.co.uk',
  },
  {
    name: 'Growth Gurus',
    domain: 'growthgurus.io',
  },
  {
    name: 'THINK TRIBE TECHNOLOGIES LLC',
    domain: 'think-tribe.com',
  },
  {
    name: 'OpnMkt',
    domain: 'opnmkt.io',
  },
  {
    name: 'Loyal Guru',
    domain: 'loyal.guru',
  },
  {
    name: 'Sonar',
    domain: 'sonarsoftware.com',
  },
  {
    name: 'ExpandTheRoom',
    domain: 'expandtheroom.com',
  },
  {
    name: 'Pulse Health',
    domain: 'pulsehealth.tech',
  },
  {
    name: 'Uniqodo',
    domain: 'uniqodo.com',
  },
  {
    name: 'Valimail',
    domain: 'valimail.com',
  },
  {
    name: 'Versapay',
    domain: 'versapay.com',
  },
  {
    name: 'Richardson Sales Performance',
    domain: 'richardson.com',
  },
  {
    name: 'Nostradamus',
    domain: 'nostradamus.nu',
  },
  {
    name: 'Envestnet Yodlee',
    domain: 'yodlee.com',
  },
  {
    name: 'WhyteSpyder',
    domain: 'whytespyder.com',
  },
  {
    name: 'ARTAVO',
    domain: 'artavo.de',
  },
  {
    name: 'Bizzabo',
    domain: 'bizzabo.com',
  },
  {
    name: 'Wursta',
    domain: 'wursta.com',
  },
  {
    name: 'Instant Connect',
    domain: 'instantconnect.tech',
  },
  {
    name: 'CLEARED4',
    domain: 'cleared4.org',
  },
  {
    name: 'Vouchery.io',
    domain: 'vouchery.io',
  },
  {
    name: 'Rentgrata',
    domain: 'rentgrata.com',
  },
  {
    name: 'Positive Equation',
    domain: 'positiveequation.com',
  },
  {
    name: 'My Subscription Addiction',
    domain: 'mysubscriptionaddiction.com',
  },
  {
    name: 'CloudCannon',
    domain: 'cloudcannon.com',
  },
  {
    name: 'Wingman',
    domain: 'trywingman.com',
  },
  {
    name: 'ZIWO',
    domain: 'ziwo.io',
  },
  {
    name: 'Swapcard',
    domain: 'swapcard.com',
  },
  {
    name: 'Sequor Industrial Software',
    domain: 'sequor.com.br',
  },
  {
    name: 'Sitejabber',
    domain: 'sitejabber.com',
  },
  {
    name: 'CUORI.dk',
    domain: 'cuori.dk',
  },
  {
    name: 'GoDataFeed',
    domain: 'godatafeed.com',
  },
  {
    name: 'PAQATO',
    domain: 'paqato.com',
  },
  {
    name: 'Cxatalyze',
    domain: 'cxatalyze.com',
  },
  {
    name: 'Oxalys',
    domain: 'oxalys.com',
  },
  {
    name: 'Prosper Digital',
    domain: 'prosperdigital.com.au',
  },
  {
    name: 'Polytomic',
    domain: 'polytomic.com',
  },
  {
    name: 'Splunk',
    domain: 'splunk.com',
  },
  {
    name: 'Curamando',
    domain: 'curamando.com',
  },
  {
    name: 'Habidatum',
    domain: 'habidatum.com',
  },
  {
    name: 'CongruentX',
    domain: 'congruentx.com',
  },
  {
    name: 'Tractus',
    domain: 'tractuslearning.com',
  },
  {
    name: 'Promevo',
    domain: 'promevo.com',
  },
  {
    name: 'Wype',
    domain: 'wype.io',
  },
  {
    name: 'Bloomreach',
    domain: 'bloomreach.com',
  },
  {
    name: 'Qonversion',
    domain: 'qonversion.io',
  },
  {
    name: 'Red Cup IT',
    domain: 'redcupit.com',
  },
  {
    name: 'Woolpert',
    domain: 'woolpert.com',
  },
  {
    name: 'DLUX TECH',
    domain: 'dluxtech.com',
  },
  {
    name: 'Medium Rare Interactive',
    domain: 'mediumrareinc.com',
  },
  {
    name: 'SYLEG',
    domain: 'syleg.fr',
  },
  {
    name: 'Xandr',
    domain: 'xandr.com',
  },
  {
    name: 'Rythmex',
    domain: 'rythmex.com',
  },
  {
    name: 'Capacitum',
    domain: 'capacitum.com',
  },
  {
    name: 'Theodo UK',
    domain: 'theodo.co.uk',
  },
  {
    name: 'Cyberuptive',
    domain: 'cyberuptive.com',
  },
  {
    name: 'Armadillo CRM',
    domain: 'armadillocrm.com',
  },
  {
    name: 'Noughts & Ones',
    domain: 'noughtsandones.com',
  },
  {
    name: 'Ambaum',
    domain: 'ambaum.com',
  },
  {
    name: 'Omneky',
    domain: 'omneky.com',
  },
  {
    name: 'Zoronto - Customer Retention Experts',
    domain: 'zoronto.com',
  },
  {
    name: 'Buildxact',
    domain: 'buildxact.com',
  },
  {
    name: 'Shiptheory',
    domain: 'shiptheory.com',
  },
  {
    name: 'AccessFuel',
    domain: 'accessfuel.com',
  },
  {
    name: 'boost.ai',
    domain: 'boost.ai',
  },
  {
    name: 'Tiger Pistol',
    domain: 'tigerpistol.com',
  },
  {
    name: 'iSteer Inc.',
    domain: 'isteer.com',
  },
  {
    name: 'Consumer Cloud Technology Services',
    domain: 'cctspl.com',
  },
  {
    name: 'Alrighty Labs',
    domain: 'alrightylabs.com',
  },
  {
    name: 'Planday',
    domain: 'planday.com',
  },
  {
    name: 'Frosmo',
    domain: 'frosmo.com',
  },
  {
    name: 'Insense',
    domain: 'insense.pro',
  },
  {
    name: 'Reinhold Cohn IP',
    domain: 'rcip.co.il',
  },
  {
    name: 'Lift AI',
    domain: 'lift-ai.com',
  },
  {
    name: 'Apteo',
    domain: 'apteo.co',
  },
  {
    name: 'Bigeye',
    domain: 'bigeye.com',
  },
  {
    name: 'steg.ai',
    domain: 'steg.ai',
  },
  {
    name: 'Spin Brands',
    domain: 'spinbrands.com',
  },
  {
    name: 'Criteria',
    domain: 'criteriacorp.com',
  },
  {
    name: 'Flying Cat Marketing',
    domain: 'flyingcatmarketing.com',
  },
  {
    name: 'Henson Group',
    domain: 'hensongroup.com',
  },
  {
    name: 'Lucid',
    domain: 'lucid.nz',
  },
  {
    name: 'Trango Tech',
    domain: 'trangotech.com',
  },
  {
    name: 'Gaussian',
    domain: 'gaussianco.com',
  },
  {
    name: 'Sapium',
    domain: 'sapium.io',
  },
  {
    name: 'FEND',
    domain: 'fend.io',
  },
  {
    name: 'Aspire Marketing Group',
    domain: 'aspiremarketing.group',
  },
  {
    name: 'Cynet',
    domain: 'cynet.com',
  },
  {
    name: 'Sounding Board',
    domain: 'soundingboardinc.com',
  },
  {
    name: 'Agexa',
    domain: 'agexa.com',
  },
  {
    name: 'Marketplaceme',
    domain: 'marketplaceme.com',
  },
  {
    name: 'keynius',
    domain: 'keynius.eu',
  },
  {
    name: "Altern'activeSystems",
    domain: 'alternactive-systems.fr',
  },
  {
    name: 'Nifty',
    domain: 'niftypm.com',
  },
  {
    name: 'Appspensary',
    domain: 'appspensary.com',
  },
  {
    name: 'ZineOne',
    domain: 'zineone.com',
  },
  {
    name: 'Momento',
    domain: 'gomomento.com',
  },
  {
    name: 'Accordus',
    domain: 'accordus.com',
  },
  {
    name: 'IMAJION',
    domain: 'imajion.com',
  },
  {
    name: 'Forma.ai',
    domain: 'forma.ai',
  },
  {
    name: 'Localazy',
    domain: 'localazy.com',
  },
  {
    name: 'Gigster',
    domain: 'gigster.com',
  },
  {
    name: 'Anaconda',
    domain: 'anaconda.com',
  },
  {
    name: 'Blend IT',
    domain: 'blendit.com',
  },
  {
    name: 'Interrupt Media',
    domain: 'interruptmedia.com',
  },
  {
    name: 'Assistcargo Risk Management',
    domain: 'assistcargo.com',
  },
  {
    name: 'Partnerize',
    domain: 'partnerize.com',
  },
  {
    name: 'Neat',
    domain: 'neat.no',
  },
  {
    name: 'Merge',
    domain: 'merge.dev',
  },
  {
    name: 'Cooler Screens',
    domain: 'coolerscreens.com',
  },
  {
    name: 'Slope',
    domain: 'slope.agency',
  },
  {
    name: 'TurnKey Product Management',
    domain: 'turnkeyproductmanagement.com',
  },
  {
    name: 'Trifacta',
    domain: 'trifacta.com',
  },
  {
    name: 'Azena',
    domain: 'azena.com',
  },
  {
    name: 'Rhymetec',
    domain: 'rhymetec.com',
  },
  {
    name: 'Sharethrough',
    domain: 'sharethrough.com',
  },
  {
    name: 'DevBrews',
    domain: 'devbrews.com',
  },
  {
    name: 'iMedia',
    domain: 'imediainc.com',
  },
  {
    name: 'Pencil',
    domain: 'trypencil.com',
  },
  {
    name: 'RAIS',
    domain: 'rais.io',
  },
  {
    name: 'Sigma Computing',
    domain: 'sigmacomputing.com',
  },
  {
    name: 'Slalom',
    domain: 'slalom.com',
  },
  {
    name: 'Diff',
    domain: 'diffagency.com',
  },
  {
    name: 'Perfect Evolution',
    domain: 'perfectevolution.xyz',
  },
  {
    name: 'Trianz',
    domain: 'trianz.com',
  },
  {
    name: 'Census',
    domain: 'getcensus.com',
  },
  {
    name: 'Medallia',
    domain: 'medallia.com',
  },
  {
    name: 'Daxko',
    domain: 'daxko.com',
  },
  {
    name: 'Chargebee',
    domain: 'chargebee.com',
  },
  {
    name: 'Wynd Technologies',
    domain: 'hellowynd.com',
  },
  {
    name: 'PROLIFIQ',
    domain: 'prolifiq.com',
  },
  {
    name: 'Bigtincan',
    domain: 'bigtincan.com',
  },
  {
    name: 'Robin',
    domain: 'getrobin.co',
  },
  {
    name: 'Redcat Pty Ltd',
    domain: 'redcat.com.au',
  },
  {
    name: 'Patient Planning Services',
    domain: 'patientplanningservices.com',
  },
  {
    name: 'Kamsa',
    domain: 'kamsa.co',
  },
  {
    name: 'QuantumWork Advisory',
    domain: 'quantumwork.com',
  },
  {
    name: 'Ntara',
    domain: 'ntara.com',
  },
  {
    name: 'MedBridge',
    domain: 'medbridgeeducation.com',
  },
  {
    name: 'Omnico Group',
    domain: 'omnicogroup.com',
  },
  {
    name: 'Piano',
    domain: 'piano.io',
  },
  {
    name: 'Theta Lake',
    domain: 'thetalake.com',
  },
  {
    name: 'Imperva',
    domain: 'imperva.com',
  },
  {
    name: 'Confection',
    domain: 'confection.io',
  },
  {
    name: 'RetroTax',
    domain: 'retrotax-aci.com',
  },
  {
    name: 'QPilot.cloud',
    domain: 'qpilot.cloud',
  },
  {
    name: 'Strobes Security Inc',
    domain: 'strobes.co',
  },
  {
    name: 'Prisma Master',
    domain: 'prismamaster.mx',
  },
  {
    name: 'Whimsical',
    domain: 'whimsical.com',
  },
  {
    name: 'Megalytics, Inc.',
    domain: 'megalytics.net',
  },
  {
    name: 'Spogmey Logistics',
    domain: 'spogmey.com',
  },
  {
    name: 'Neurotech',
    domain: 'neurotech.com.br',
  },
  {
    name: 'Single Grain',
    domain: 'singlegrain.com',
  },
  {
    name: 'MuteSix',
    domain: 'mutesix.com',
  },
  {
    name: 'Renaissance Digital Marketing',
    domain: 'renaissancedm.com',
  },
  {
    name: 'Conversica',
    domain: 'conversica.com',
  },
  {
    name: 'Operandi',
    domain: 'operandipro.com',
  },
  {
    name: 'Emissary',
    domain: 'emissary.io',
  },
  {
    name: 'TINT',
    domain: 'tintup.com',
  },
  {
    name: 'Inflead - Lead the Influence',
    domain: 'inflead.com',
  },
  {
    name: 'AAD Consultants Inc.',
    domain: 'advancedtax.ca',
  },
  {
    name: 'QuikReturn',
    domain: 'quikreturn.com',
  },
  {
    name: 'Onemata',
    domain: 'onemata.com',
  },
  {
    name: 'Fiserv (Clover Connect)',
    domain: 'cloverconnect.com',
  },
  {
    name: 'Integrated computer solutions',
    domain: 'ics.com',
  },
  {
    name: 'SATRDÉ',
    domain: 'satrde.com',
  },
  {
    name: 'Enchant Agency',
    domain: 'enchantagency.com',
  },
  {
    name: 'Systems Evolution Inc.',
    domain: 'sei.com',
  },
  {
    name: 'Airkit',
    domain: 'airkit.com',
  },
  {
    name: 'anecdotes',
    domain: 'anecdotes.ai',
  },
  {
    name: 'Xalta Technologies',
    domain: 'xalta.tech',
  },
  {
    name: 'Blueprint Solutions LLC',
    domain: 'getblueprint.io',
  },
  {
    name: 'METSB',
    domain: 'metsb.com',
  },
  {
    name: 'LEIT DATA',
    domain: 'leit-data.com',
  },
  {
    name: 'Pixyle.ai',
    domain: 'pixyle.ai',
  },
  {
    name: 'XBRAIN',
    domain: 'xbrain.team',
  },
  {
    name: 'Spectrio',
    domain: 'spectrio.com',
  },
  {
    name: 'SharkDev',
    domain: 'sharkdev.com.br',
  },
  {
    name: 'Veho',
    domain: 'shipveho.com',
  },
  {
    name: 'So.Wa Consultancy',
    domain: 'sowaconsultancy.com',
  },
  {
    name: 'ClickFlow',
    domain: 'clickflow.com',
  },
  {
    name: 'QA Consulting, Inc',
    domain: 'qaconsultinginc.com',
  },
  {
    name: 'JAS Business Solutions, LLC',
    domain: 'jasbusiness.solutions',
  },
  {
    name: 'Placer.ai',
    domain: 'placer.ai',
  },
  {
    name: 'Variux',
    domain: 'variux.com',
  },
  {
    name: 'Amplifyer',
    domain: 'amplifyer.com',
  },
  {
    name: 'Zencore',
    domain: 'zencore.dev',
  },
  {
    name: 'Rendmo',
    domain: 'rendmo.com',
  },
  {
    name: 'CriticalRiver',
    domain: 'criticalriver.com',
  },
  {
    name: 'Massive Insights',
    domain: 'massiveinsights.com',
  },
  {
    name: 'FLO',
    domain: 'weareflo.com',
  },
  {
    name: 'Armis',
    domain: 'armis.com',
  },
  {
    name: 'Traction Complete',
    domain: 'tractioncomplete.com',
  },
  {
    name: 'I Love Lifecycle',
    domain: 'ilovelifecycle.com',
  },
  {
    name: 'Point Taken',
    domain: 'pointtaken.no',
  },
  {
    name: 'My Data Outlet',
    domain: 'mydataoutlet.com',
  },
  {
    name: 'JobAdder',
    domain: 'jobadder.com',
  },
  {
    name: 'Embold Health',
    domain: 'emboldhealth.com',
  },
  {
    name: 'VaultSpeed',
    domain: 'vaultspeed.com',
  },
  {
    name: 'Reputation',
    domain: 'reputation.com',
  },
  {
    name: 'Live Data Technologies',
    domain: 'livedatatechnologies.com',
  },
  {
    name: 'Pubrio',
    domain: 'pubrio.com',
  },
  {
    name: 'Firstlight Media',
    domain: 'firstlight.ai',
  },
  {
    name: 'GetTheReferral.com',
    domain: 'getthereferral.com',
  },
  {
    name: 'Criteo',
    domain: 'criteo.com',
  },
  {
    name: 'Chainlink Labs',
    domain: 'chainlinklabs.com',
  },
  {
    name: 'Focus Technology',
    domain: 'focustsi.com',
  },
  {
    name: 'Chelsea & Rachel Co',
    domain: 'chelseaandrachel.com',
  },
  {
    name: '1o8',
    domain: '1o8.agency',
  },
  {
    name: 'Calico',
    domain: 'calicoai.com',
  },
  {
    name: 'Shaw/Scott',
    domain: 'shawscott.com',
  },
  {
    name: 'Cornerstone OnDemand',
    domain: 'cornerstoneondemand.com',
  },
  {
    name: 'Wizard Digital Marketing',
    domain: 'wizarddigital.com',
  },
  {
    name: 'Taurus SA',
    domain: 'taurushq.com',
  },
  {
    name: 'PAASE Digital',
    domain: 'paase.co.uk',
  },
  {
    name: 'Mayple',
    domain: 'mayple.com',
  },
  {
    name: 'DigiDesk',
    domain: 'digi-desk.co.uk',
  },
  {
    name: '15Five',
    domain: '15five.com',
  },
  {
    name: 'Rollbar',
    domain: 'rollbar.com',
  },
  {
    name: 'Pimberly',
    domain: 'pimberly.com',
  },
  {
    name: 'Loop',
    domain: 'loopreturns.com',
  },
  {
    name: 'Global Payments',
    domain: 'globalpayments.com',
  },
  {
    name: 'Versett',
    domain: 'versett.com',
  },
  {
    name: 'Idera',
    domain: 'ideracorp.com',
  },
  {
    name: 'Human',
    domain: 'human.marketing',
  },
  {
    name: 'Lightspeed HQ',
    domain: 'lightspeedhq.com',
  },
  {
    name: 'Ricoh Philippines',
    domain: 'ricoh.com.ph',
  },
  {
    name: 'Clearoute',
    domain: 'clearoute.com',
  },
  {
    name: 'NewStore',
    domain: 'newstore.com',
  },
  {
    name: 'Pcnaid Inc',
    domain: 'pcnaid.com',
  },
  {
    name: 'Sunrize Digital',
    domain: 'sunrizedigital.com',
  },
  {
    name: 'Tevia Technologies',
    domain: 'tevia.tech',
  },
  {
    name: 'Crews by Core',
    domain: 'crews.bycore.com',
  },
  {
    name: 'Vertalo',
    domain: 'vertalo.com',
  },
  {
    name: 'XCD HR',
    domain: 'peoplexcd.com',
  },
  {
    name: 'Level5 Strategy',
    domain: 'level5strategy.com',
  },
  {
    name: 'Argos Multilingual',
    domain: 'argosmultilingual.com',
  },
  {
    name: 'Sagent',
    domain: 'sagent.com',
  },
  {
    name: 'TiER1 Performance, Inc.',
    domain: 'tier1performance.com',
  },
  {
    name: 'Reachdesk',
    domain: 'reachdesk.com',
  },
  {
    name: 'Techibrain Apps Pvt. Ltd.',
    domain: 'techibrain.com',
  },
  {
    name: 'GFS',
    domain: 'gfsdeliver.com',
  },
  {
    name: 'Tellius',
    domain: 'tellius.com',
  },
  {
    name: 'NP Digital',
    domain: 'npdigital.com',
  },
  {
    name: 'Kaon Interactive',
    domain: 'kaon.com',
  },
  {
    name: 'XPEDIANT DIGITAL',
    domain: 'xpediantdigital.com',
  },
  {
    name: 'MindTickle',
    domain: 'mindtickle.com',
  },
  {
    name: 'Founder Advisors',
    domain: 'founderadvisors.tech',
  },
  {
    name: 'DME',
    domain: 'dustinmellis.com',
  },
  {
    name: 'Hightouch',
    domain: 'hightouch.io',
  },
  {
    name: 'Gravitee.io',
    domain: 'gravitee.io',
  },
  {
    name: 'CarrierDirect',
    domain: 'carrierdirect.com',
  },
  {
    name: 'Experius',
    domain: 'experius.nl',
  },
  {
    name: 'Algolia',
    domain: 'algolia.com',
  },
  {
    name: 'Digioh',
    domain: 'digioh.com',
  },
  {
    name: 'Hawke Media',
    domain: 'hawkemedia.com',
  },
  {
    name: 'PushON',
    domain: 'pushon.co.uk',
  },
  {
    name: 'DailyPay',
    domain: 'dailypay.com',
  },
  {
    name: 'Decision Minds',
    domain: 'decisionminds.com',
  },
  {
    name: 'Snowflake',
    domain: 'snowflake.com',
  },
  {
    name: 'Playbook Media',
    domain: 'playbook.media',
  },
  {
    name: 'SentiSum',
    domain: 'sentisum.com',
  },
  {
    name: 'Brightpearl',
    domain: 'brightpearl.com',
  },
  {
    name: 'Zendesk',
    domain: 'zendesk.com',
  },
  {
    name: 'Tugboat Logic',
    domain: 'tugboatlogic.com',
  },
  {
    name: 'Signifyd',
    domain: 'signifyd.com',
  },
  {
    name: 'IDN',
    domain: 'id-norway.com',
  },
  {
    name: 'Rapido Solutions Group',
    domain: 'rapidosolutionsgroup.com',
  },
  {
    name: 'KUDO',
    domain: 'kudoway.com',
  },
  {
    name: 'Mindtree',
    domain: 'mindtree.com',
  },
  {
    name: 'FoodByUs',
    domain: 'foodbyus.com.au',
  },
  {
    name: 'SMB Consultants',
    domain: 'smbconsultants.com.au',
  },
  {
    name: 'Pilot',
    domain: 'pilot.co',
  },
  {
    name: 'Ekata',
    domain: 'ekata.com',
  },
  {
    name: 'GrowTal',
    domain: 'growtal.com',
  },
  {
    name: 'App Growth Network',
    domain: 'appgrowthnetwork.com',
  },
  {
    name: 'Level AI',
    domain: 'thelevel.ai',
  },
  {
    name: 'VFP Consulting',
    domain: 'vfp-consulting.com',
  },
  {
    name: 'Konnect Insights',
    domain: 'konnectinsights.com',
  },
  {
    name: 'Bolt',
    domain: 'bolt.com',
  },
  {
    name: 'Bright Pattern',
    domain: 'brightpattern.com',
  },
  {
    name: 'Kevel',
    domain: 'kevel.com',
  },
  {
    name: 'Pinch Payments',
    domain: 'getpinch.com.au',
  },
  {
    name: 'Inspira Digital',
    domain: 'inspiradigital.co.uk',
  },
  {
    name: 'SE Ranking',
    domain: 'seranking.com',
  },
  {
    name: 'Noggin',
    domain: 'noggin.io',
  },
  {
    name: 'advarics GmbH',
    domain: 'advarics.net',
  },
  {
    name: 'Astound Commerce',
    domain: 'astoundcommerce.com',
  },
  {
    name: 'Hunters',
    domain: 'hunters.ai',
  },
  {
    name: 'Stefanini',
    domain: 'stefanini.com',
  },
  {
    name: 'Chili Piper',
    domain: 'chilipiper.com',
  },
  {
    name: 'Filestage',
    domain: 'filestage.io',
  },
  {
    name: 'Bench Accounting',
    domain: 'bench.co',
  },
  {
    name: 'Builder Funnel',
    domain: 'builderfunnel.com',
  },
  {
    name: 'Thales Group',
    domain: 'thalesgroup.com',
  },
  {
    name: 'Lengow',
    domain: 'lengow.com',
  },
  {
    name: 'Vue Storefront',
    domain: 'vuestorefront.io',
  },
  {
    name: 'Ideasphere Labs',
    domain: 'ideaspherelabs.com',
  },
  {
    name: 'Macquarium',
    domain: 'macquarium.com',
  },
  {
    name: 'Integrate',
    domain: 'integrate.com',
  },
  {
    name: 'LCP360',
    domain: 'lcp360.com',
  },
  {
    name: 'Rebuy',
    domain: 'rebuyengine.com',
  },
  {
    name: "Stack'd Consulting",
    domain: 'stackdconsulting.com',
  },
  {
    name: 'Axisbits',
    domain: 'axisbits.ch',
  },
  {
    name: 'Quotecho',
    domain: 'quotecho.com',
  },
  {
    name: 'Neostella, LLC',
    domain: 'neostella.com',
  },
  {
    name: 'DeRosa Mangold Consulting',
    domain: 'derosamangold.com',
  },
  {
    name: 'Deepcrawl',
    domain: 'deepcrawl.com',
  },
  {
    name: 'Thunk',
    domain: 'thunk.co',
  },
  {
    name: 'Videowise',
    domain: 'videowise.com',
  },
  {
    name: 'GEM',
    domain: 'gembo.co',
  },
  {
    name: 'yellow.ai',
    domain: 'yellow.ai',
  },
  {
    name: 'MediaBeacon',
    domain: 'mediabeacon.com',
  },
  {
    name: 'Fenix Commerce Inc',
    domain: 'fenixcommerce.com',
  },
  {
    name: 'Wunderkind (formerly BounceX)',
    domain: 'wunderkind.co',
  },
  {
    name: 'Blue Green',
    domain: 'bluegreenbrands.com',
  },
  {
    name: 'Binary Anvil',
    domain: 'binaryanvil.com',
  },
  {
    name: 'Ballistic Agency',
    domain: 'ballisticagency.com',
  },
  {
    name: 'Pantastic',
    domain: 'pantastic.com',
  },
  {
    name: 'Digible',
    domain: 'digible.com',
  },
  {
    name: 'Inetasia',
    domain: 'inetasia.com',
  },
  {
    name: 'Windfall',
    domain: 'windfalldata.com',
  },
  {
    name: 'Paragon',
    domain: 'useparagon.com',
  },
  {
    name: 'kemana.com',
    domain: 'kemana.com',
  },
  {
    name: 'FintechOS',
    domain: 'fintechos.com',
  },
  {
    name: 'ConnectAndSell',
    domain: 'connectandsell.com',
  },
  {
    name: 'Orkestro',
    domain: 'orkestro.com',
  },
  {
    name: 'Lookout Inc',
    domain: 'lookout.com',
  },
  {
    name: 'Nextiva',
    domain: 'nextiva.com',
  },
  {
    name: 'Knoetic',
    domain: 'knoetic.com',
  },
  {
    name: 'Intelliwave Technologies',
    domain: 'intelliwavetechnologies.com',
  },
  {
    name: 'Nayya',
    domain: 'nayya.com',
  },
  {
    name: 'Anderson Collaborative',
    domain: 'andersoncollaborative.com',
  },
  {
    name: 'Uptech Studio',
    domain: 'uptechstudio.com',
  },
  {
    name: 'Essere Agile',
    domain: 'essereagile.com',
  },
  {
    name: 'ServiceMax',
    domain: 'servicemax.com',
  },
  {
    name: 'Brandbassador Ltd',
    domain: 'brandbassador.com',
  },
  {
    name: 'Matillion',
    domain: 'matillion.com',
  },
  {
    name: 'SubHub Apps Inc.',
    domain: 'subhubapps.com',
  },
  {
    name: 'Kentik',
    domain: 'kentik.com',
  },
  {
    name: 'Quartz',
    domain: 'qz.com',
  },
  {
    name: 'Nash Technologies',
    domain: 'usenash.com',
  },
  {
    name: 'Growthagent',
    domain: 'growthagent.eu',
  },
  {
    name: 'WorldView',
    domain: 'worldviewltd.com',
  },
  {
    name: 'CS2',
    domain: 'cs2marketing.com',
  },
  {
    name: 'twotwentyseven',
    domain: 'twotwentyseven.com',
  },
  {
    name: 'THAILS',
    domain: 'thails.com',
  },
  {
    name: 'The FASE Group',
    domain: 'thefasegroup.com',
  },
  {
    name: 'Disperse',
    domain: 'disperse.io',
  },
  {
    name: 'Rockwell',
    domain: 'rockinfo.com',
  },
  {
    name: 'SalesboxAI',
    domain: 'salesbox.ai',
  },
  {
    name: 'VelocityEHS',
    domain: 'ehs.com',
  },
  {
    name: 'Dynamic Channels',
    domain: 'dynamicchannels.expert',
  },
  {
    name: 'COMO Global S.A.',
    domain: 'comoglobal.com',
  },
  {
    name: 'Eastside Co',
    domain: 'eastsideco.com',
  },
  {
    name: 'Saleswhale',
    domain: 'saleswhale.com',
  },
  {
    name: 'Elumynt',
    domain: 'elumynt.com',
  },
  {
    name: 'Outreach',
    domain: 'outreach.io',
  },
  {
    name: 'Six & Flow',
    domain: 'sixandflow.com',
  },
  {
    name: 'FLATLAY',
    domain: 'flatlay.io',
  },
  {
    name: 'Hail Trace',
    domain: 'hailtrace.com',
  },
  {
    name: 'Compound Growth Marketing',
    domain: 'compoundgrowthmarketing.com',
  },
  {
    name: 'Sayge',
    domain: 'hellosayge.com',
  },
  {
    name: 'Emotive',
    domain: 'emotive.io',
  },
  {
    name: 'Klevu',
    domain: 'klevu.com',
  },
  {
    name: 'Holistics',
    domain: 'holistics.io',
  },
  {
    name: 'TezJS',
    domain: 'tezjs.io',
  },
  {
    name: 'JumpCloud',
    domain: 'jumpcloud.com',
  },
  {
    name: 'UserGems \uD83D\uDC8E',
    domain: 'usergems.com',
  },
  {
    name: 'Resemble Systems',
    domain: 'resemblesystems.com',
  },
  {
    name: 'Productiv',
    domain: 'productiv.com',
  },
  {
    name: 'Unbounce',
    domain: 'unbounce.com',
  },
  {
    name: 'Yonder',
    domain: 'yonder.app',
  },
  {
    name: 'SPACEGOATS',
    domain: 'spacegoats.io',
  },
  {
    name: 'Soon',
    domain: 'soon.works',
  },
  {
    name: 'Absorb Software',
    domain: 'absorblms.com',
  },
  {
    name: 'Nimble Ads',
    domain: 'nimbleads.com',
  },
  {
    name: 'Vertical Discovery Corp',
    domain: 'ligl.io',
  },
  {
    name: 'Biztory',
    domain: 'biztory.com',
  },
  {
    name: 'Absolute Web',
    domain: 'absoluteweb.com',
  },
  {
    name: 'Hour Timesheet',
    domain: 'hourtimesheet.com',
  },
  {
    name: 'Elysium Analytics',
    domain: 'elysiumanalytics.ai',
  },
  {
    name: 'BSS Solutions',
    domain: 'bss-solutions.nl',
  },
  {
    name: 'Sungage Financial',
    domain: 'sungage.com',
  },
  {
    name: 'Harper',
    domain: 'harperconcierge.com',
  },
  {
    name: 'Sonero',
    domain: 'sonero.ai',
  },
  {
    name: 'OpenMoves',
    domain: 'openmoves.com',
  },
  {
    name: 'Lucid Software',
    domain: 'lucid.co',
  },
  {
    name: 'Wicked Reports',
    domain: 'wickedreports.com',
  },
  {
    name: 'BMC Software',
    domain: 'bmc.com',
  },
  {
    name: 'RingCentral',
    domain: 'ringcentral.com',
  },
  {
    name: 'Spritle Software',
    domain: 'spritle.com',
  },
  {
    name: 'Khaleej Digital',
    domain: 'khaleejdigital.com',
  },
  {
    name: 'Homebot',
    domain: 'homebot.ai',
  },
  {
    name: 'Bizzi',
    domain: 'bizzi.vn',
  },
  {
    name: 'Kanuka Digital',
    domain: 'kanukadigital.com',
  },
  {
    name: 'Springworks',
    domain: 'springworks.in',
  },
  {
    name: 'Kallidus',
    domain: 'kallidus.com',
  },
  {
    name: 'FIVE CRM',
    domain: 'fivecrm.com',
  },
  {
    name: 'Checkmate',
    domain: 'checkmate.tech',
  },
  {
    name: 'Botmind',
    domain: 'botmind.io',
  },
  {
    name: 'GlobalDots',
    domain: 'globaldots.com',
  },
  {
    name: 'LiveFlow',
    domain: 'liveflow.io',
  },
  {
    name: 'Zenegy Aps',
    domain: 'zenegy.com',
  },
  {
    name: 'Linkurious',
    domain: 'linkurious.com',
  },
  {
    name: 'Select Technology Sales & Distribution',
    domain: 'selectonline.com',
  },
  {
    name: 'Keboola',
    domain: 'keboola.com',
  },
  {
    name: 'Actiondesk',
    domain: 'actiondesk.io',
  },
  {
    name: 'Postscript',
    domain: 'postscript.io',
  },
  {
    name: 'Promenade Group',
    domain: 'promenade.co',
  },
  {
    name: 'SkyPoint Cloud',
    domain: 'skypointcloud.com',
  },
  {
    name: 'EZOfficeInventory',
    domain: 'ezofficeinventory.com',
  },
  {
    name: 'Firebolt',
    domain: 'firebolt.io',
  },
  {
    name: 'Think Data Group',
    domain: 'thinkdatagroup.com',
  },
  {
    name: 'Milestone Systems',
    domain: 'milestonesys.com',
  },
  {
    name: 'Power Digital Marketing',
    domain: 'powerdigitalmarketing.com',
  },
  {
    name: 'CS Global Group',
    domain: 'csglobal-group.com',
  },
  {
    name: '8fig',
    domain: '8fig.co',
  },
  {
    name: 'Signal Corporation',
    domain: 'getsignal.info',
  },
  {
    name: 'Youreka',
    domain: 'youreka.io',
  },
  {
    name: 'Octy AI',
    domain: 'octy.ai',
  },
  {
    name: 'SlapFive',
    domain: 'slapfive.com',
  },
  {
    name: 'Shiftbase',
    domain: 'shiftbase.com',
  },
  {
    name: 'Converge Technology Solutions',
    domain: 'convergetp.com',
  },
  {
    name: 'Sendle',
    domain: 'sendle.com',
  },
  {
    name: 'Logic Information Systems',
    domain: 'logicinfo.com',
  },
  {
    name: 'atfinity',
    domain: 'atfinity.swiss',
  },
  {
    name: 'ROAR for Good',
    domain: 'roarforgood.com',
  },
  {
    name: 'Stravito',
    domain: 'stravito.com',
  },
  {
    name: 'Net Natives',
    domain: 'netnatives.com',
  },
  {
    name: 'Recurate',
    domain: 'recurate.com',
  },
  {
    name: 'SmartRPA',
    domain: 'rpacatalyst.com',
  },
  {
    name: 'Skipdwait',
    domain: 'skipdwait.com',
  },
  {
    name: 'CreatorIQ',
    domain: 'creatoriq.com',
  },
  {
    name: 'Ex Works, Inc.',
    domain: 'exworks.com',
  },
  {
    name: 'Intricity,',
    domain: 'intricity.com',
  },
  {
    name: 'Vanta Inc.',
    domain: 'vanta.com',
  },
  {
    name: 'Intertwine Interactive',
    domain: 'intertwineinteractive.com',
  },
  {
    name: 'JIBE eCommerce',
    domain: 'thejibe.com',
  },
  {
    name: 'jcommerce',
    domain: 'jcommerce.com.au',
  },
  {
    name: 'Fluid Commerce',
    domain: 'fluidcommerce.co.uk',
  },
  {
    name: 'BlackCurve',
    domain: 'blackcurve.com',
  },
  {
    name: 'AdSkills.com',
    domain: 'adskills.com',
  },
  {
    name: 'JOBPROGRESS',
    domain: 'jobprogress.com',
  },
  {
    name: 'Playroll',
    domain: 'playroll.com',
  },
  {
    name: 'ViSenze',
    domain: 'visenze.com',
  },
  {
    name: 'Fyllo',
    domain: 'hellofyllo.com',
  },
  {
    name: 'Forma',
    domain: 'joinforma.com',
  },
  {
    name: 'Hy.ly Inc',
    domain: 'hy.ly',
  },
  {
    name: 'LucidPoint',
    domain: 'lucidpoint.io',
  },
  {
    name: 'Zazmic',
    domain: 'zazmic.com',
  },
  {
    name: 'BISVI',
    domain: 'bisvi.com',
  },
  {
    name: 'Stax Connect',
    domain: 'fattmerchant.com',
  },
  {
    name: 'Challenger',
    domain: 'challengerinc.com',
  },
  {
    name: 'Somo Global',
    domain: 'somoglobal.com',
  },
  {
    name: 'EzNova Technologies, LLC',
    domain: 'ezclocker.com',
  },
  {
    name: 'Prophecy',
    domain: 'prophecy.io',
  },
  {
    name: 'Brink Commerce',
    domain: 'brinkcommerce.com',
  },
  {
    name: 'DAHLIA+Agency',
    domain: 'dahliaplus.com',
  },
  {
    name: 'Occtoo AB',
    domain: 'occtoo.com',
  },
  {
    name: 'Qarbon IT',
    domain: 'qarbon.it',
  },
  {
    name: 'BlueRock',
    domain: 'bluerock.com.au',
  },
  {
    name: 'Sharebite',
    domain: 'sharebite.com',
  },
  {
    name: 'Content Bloom',
    domain: 'contentbloom.com',
  },
  {
    name: 'Crescendo Collective',
    domain: 'crescendocollective.com',
  },
  {
    name: 'Harbor Marketing Agency',
    domain: 'harbormarketingagency.com',
  },
  {
    name: 'au2mator',
    domain: 'au2mator.com',
  },
  {
    name: 'TopUp Consultants',
    domain: 'topupconsultants.com',
  },
  {
    name: 'Leading Good',
    domain: 'leadinggood.com',
  },
  {
    name: 'FlavorCloud Inc.',
    domain: 'flavorcloud.com',
  },
  {
    name: 'Lakota Skye',
    domain: 'lakotaskye.com',
  },
  {
    name: 'SaltClick',
    domain: 'saltclick.com',
  },
  {
    name: 'Megaphone',
    domain: 'megaphonemarketing.com.au',
  },
  {
    name: 'Pitchly',
    domain: 'pitchly.com',
  },
  {
    name: 'ActiveComply',
    domain: 'activecomply.com',
  },
  {
    name: 'Selfbook',
    domain: 'selfbook.com',
  },
  {
    name: 'Karista',
    domain: 'karista.com.au',
  },
  {
    name: 'Pitchloop',
    domain: 'pitchloop.io',
  },
  {
    name: 'SnowcatCloud',
    domain: 'snowcatcloud.com',
  },
  {
    name: 'Prowide International S.A.',
    domain: 'prowidesoftware.com',
  },
  {
    name: 'KlearNow',
    domain: 'klearnow.com',
  },
  {
    name: 'thinkTribe',
    domain: 'thinktribe.com',
  },
  {
    name: 'Seller Candy',
    domain: 'sellercandy.com',
  },
  {
    name: 'YellowWebMonkey Web Design',
    domain: 'yellowwebmonkey.com',
  },
  {
    name: 'Leaf Envy',
    domain: 'leafenvy.co.uk',
  },
  {
    name: 'HubDo',
    domain: 'hubdo.com',
  },
  {
    name: 'Cyclr',
    domain: 'cyclr.com',
  },
  {
    name: 'SiteMana',
    domain: 'sitemana.com',
  },
  {
    name: 'Metaphor Data',
    domain: 'metaphor.io',
  },
  {
    name: 'Resonate Business Ignition',
    domain: 'resonate.com.au',
  },
  {
    name: 'Zenlayer',
    domain: 'zenlayer.com',
  },
  {
    name: 'Paragon DCX',
    domain: 'paragon-dcx.com',
  },
  {
    name: 'Delmar LLC',
    domain: 'ucgrowth.co',
  },
  {
    name: 'Reload Digital',
    domain: 'reloaddigital.co.uk',
  },
  {
    name: 'Linksoft Technologies',
    domain: 'linksft.com',
  },
  {
    name: 'Monte Carlo',
    domain: 'montecarlodata.com',
  },
  {
    name: 'Sideqik',
    domain: 'sideqik.com',
  },
  {
    name: 'Evans Hunt',
    domain: 'evanshunt.com',
  },
  {
    name: 'Twenty20 Systems LLC',
    domain: 'twenty20sys.com',
  },
  {
    name: 'Plena',
    domain: 'plena.io',
  },
  {
    name: 'Limebox',
    domain: 'limebox.com',
  },
  {
    name: 'Recapture.io',
    domain: 'recapture.io',
  },
  {
    name: 'Gravitate',
    domain: 'gravitatedesign.com',
  },
  {
    name: 'ATTN Agency',
    domain: 'attnagency.com',
  },
  {
    name: 'Emptor',
    domain: 'emptor.io',
  },
  {
    name: 'Skillwork Software and Consulting',
    domain: 'skillwork.co.uk',
  },
  {
    name: 'J Campbell Social Marketing, LLC',
    domain: 'jcsocialmarketing.com',
  },
  {
    name: 'Crossing Minds',
    domain: 'crossingminds.com',
  },
  {
    name: 'PARTNERNOMICS',
    domain: 'partnernomics.com',
  },
  {
    name: 'DIVIN Wine Fridges',
    domain: 'divinwinefridges.com.au',
  },
  {
    name: 'MediaAgility',
    domain: 'mediaagility.com',
  },
  {
    name: 'Payaca',
    domain: 'payaca.com',
  },
  {
    name: 'Drivly',
    domain: 'driv.ly',
  },
  {
    name: 'Lumi',
    domain: 'lumi.com',
  },
  {
    name: 'AfterSell',
    domain: 'aftersell.com',
  },
  {
    name: 'Partnered',
    domain: 'partnered.com',
  },
  {
    name: 'Suitebriar',
    domain: 'suitebriar.com',
  },
  {
    name: 'Smartshore Ability',
    domain: 'smartshore-ability.nl',
  },
  {
    name: 'Strike Tax Advisory',
    domain: 'striketax.com',
  },
  {
    name: 'SimplyVAT.com',
    domain: 'simplyvat.com',
  },
  {
    name: 'RocForever',
    domain: 'rocforever.com',
  },
  {
    name: 'Proactive Talent',
    domain: 'proactivetalent.com',
  },
  {
    name: 'Zeidman Development',
    domain: 'zeidman.info',
  },
  {
    name: 'Bestie Software',
    domain: 'bestieapp.co',
  },
  {
    name: 'Taggshop',
    domain: 'taggshop.io',
  },
  {
    name: 'SPA ARTE',
    domain: 'spaarte.com',
  },
  {
    name: 'Sorbet',
    domain: 'getsorbet.com',
  },
  {
    name: 'Thinkport',
    domain: 'thinkport.digital',
  },
  {
    name: 'Deodato.Co',
    domain: 'deodato.co',
  },
  {
    name: 'Proposify',
    domain: 'proposify.com',
  },
  {
    name: 'Continu',
    domain: 'continu.com',
  },
  {
    name: 'Magnetic Creative',
    domain: 'magneticcreative.com',
  },
  {
    name: 'Aptivio',
    domain: 'aptiv.io',
  },
  {
    name: 'Cover Genius',
    domain: 'covergenius.com',
  },
  {
    name: 'Klear Systems',
    domain: 'klearsystems.com',
  },
  {
    name: 'Yottaa',
    domain: 'yottaa.com',
  },
  {
    name: 'NextLink Labs',
    domain: 'nextlinklabs.com',
  },
  {
    name: 'Heyday Now',
    domain: 'heydaynow.com',
  },
  {
    name: 'Playvox',
    domain: 'playvox.com',
  },
  {
    name: 'LaunchDarkly',
    domain: 'launchdarkly.com',
  },
  {
    name: 'Data unBlocked',
    domain: 'dataunblocked.com',
  },
  {
    name: 'Larky',
    domain: 'larky.com',
  },
  {
    name: 'Replo',
    domain: 'replo.app',
  },
  {
    name: 'Magnolia International',
    domain: 'magnolia-cms.com',
  },
  {
    name: 'SingleStore',
    domain: 'singlestore.com',
  },
  {
    name: 'Envoy',
    domain: 'envoy.com',
  },
  {
    name: 'Tangentia',
    domain: 'tangentia.com',
  },
  {
    name: 'Keyboard Consultants Inc',
    domain: 'keyconsult.com',
  },
  {
    name: 'Marketplace Generation',
    domain: 'marketplace-generation.it',
  },
  {
    name: 'Team Engine',
    domain: 'teamengine.io',
  },
  {
    name: 'Terrific Minds',
    domain: 'terrificminds.com',
  },
  {
    name: 'Groupshop',
    domain: 'groupshop.com',
  },
  {
    name: 'Streamoid - AI for Fashion Retail',
    domain: 'streamoid.com',
  },
  {
    name: 'Monogoto',
    domain: 'monogoto.io',
  },
  {
    name: 'Contemporary Leadership Advisors',
    domain: 'contemporaryleadership.com',
  },
  {
    name: 'SuccessKPI',
    domain: 'successkpi.com',
  },
  {
    name: 'Digi12',
    domain: 'digitwelve.com',
  },
  {
    name: '360insights',
    domain: '360insights.com',
  },
  {
    name: 'MentorMate',
    domain: 'mentormate.com',
  },
  {
    name: 'Humanic AI',
    domain: 'humanic.ai',
  },
  {
    name: 'Eden Data',
    domain: 'edendata.com',
  },
  {
    name: 'Twingate',
    domain: 'twingate.com',
  },
  {
    name: 'Learnosity',
    domain: 'learnosity.com',
  },
  {
    name: 'smartrr',
    domain: 'smartrr.com',
  },
  {
    name: 'Sales Transformation Group',
    domain: 'salestransformationgroup.com',
  },
  {
    name: 'Middesk',
    domain: 'middesk.com',
  },
  {
    name: 'Perimeter 81',
    domain: 'perimeter81.com',
  },
  {
    name: 'OKKAMI',
    domain: 'okkami.com',
  },
  {
    name: 'DCL Logistics',
    domain: 'dclcorp.com',
  },
  {
    name: 'GetHomeSafe',
    domain: 'gethomesafe.com',
  },
  {
    name: 'Spasiba Aps',
    domain: 'spasiba.dk',
  },
  {
    name: 'NoA Ignite Norway',
    domain: 'noaignite.no',
  },
  {
    name: 'SkuVault',
    domain: 'skuvault.com',
  },
  {
    name: 'Lean Solutions Group',
    domain: 'leangroup.com',
  },
  {
    name: 'Easy Pay Solutions',
    domain: 'easypaysolutions.com',
  },
  {
    name: 'Alternative Partners',
    domain: 'alternative.partners',
  },
  {
    name: 'Wiro Agency',
    domain: 'wiro.agency',
  },
  {
    name: 'Pics.io',
    domain: 'toptechphoto.com',
  },
  {
    name: 'Splio',
    domain: 'splio.com',
  },
  {
    name: 'Precision Analytics Consulting',
    domain: 'precisionanalytics.global',
  },
  {
    name: 'Affirma',
    domain: 'affirma.com',
  },
  {
    name: 'nexuscognitive',
    domain: 'nexuscognitive.com',
  },
  {
    name: 'ACX Solutions International',
    domain: 'acxinternational.com',
  },
  {
    name: 'gFour Marketing',
    domain: 'gfourmarketing.com',
  },
  {
    name: 'Coro',
    domain: 'coro.net',
  },
  {
    name: 'Shamrock Solutions',
    domain: 'shamrocksolutionsllc.com',
  },
  {
    name: 'National Association of the Remodeling Industry',
    domain: 'nari.org',
  },
  {
    name: 'Sourgum Waste',
    domain: 'sourgum.com',
  },
  {
    name: 'Crayon',
    domain: 'crayon.com',
  },
  {
    name: 'NewMark Risk',
    domain: 'newmarkrisk.com',
  },
  {
    name: 'Identity Automation',
    domain: 'identityautomation.com',
  },
  {
    name: 'Sunbit',
    domain: 'sunbit.com',
  },
  {
    name: 'Unacast',
    domain: 'unacast.com',
  },
  {
    name: 'Prescient Assurance',
    domain: 'prescientassurance.com',
  },
  {
    name: 'BrightQuery',
    domain: 'brightquery.com',
  },
  {
    name: 'FORTË',
    domain: 'goforte.fit',
  },
  {
    name: 'SeaLogs',
    domain: 'sealogs.com',
  },
  {
    name: 'Highlight',
    domain: 'letshighlight.com',
  },
  {
    name: '300Brains',
    domain: '300brains.com',
  },
  {
    name: 'babelforce',
    domain: 'babelforce.com',
  },
  {
    name: 'juno: the life company',
    domain: 'withjuno.com',
  },
  {
    name: 'Repeat',
    domain: 'getrepeat.io',
  },
  {
    name: 'inVia Robotics',
    domain: 'inviarobotics.com',
  },
  {
    name: 'Oncue',
    domain: 'oncue.co',
  },
  {
    name: 'AtoB',
    domain: 'atob.com',
  },
  {
    name: 'Owens Online Ventures Inc',
    domain: 'owensonlineventures.com',
  },
  {
    name: 'Slate',
    domain: 'slateteams.com',
  },
  {
    name: 'Ultimo Software Solutions Inc',
    domain: 'ultimosoft.com',
  },
  {
    name: 'Deloitte',
    domain: 'deloitte.co.uk',
  },
  {
    name: 'IBCConnect',
    domain: 'ibcconnect.com',
  },
  {
    name: 'SecurityScorecard',
    domain: 'securityscorecard.com',
  },
  {
    name: 'Artium',
    domain: 'thisisartium.com',
  },
  {
    name: 'QBank AB',
    domain: 'qbankdam.com',
  },
  {
    name: 'ASC',
    domain: 'asctechnologies.com',
  },
  {
    name: 'Tiralíneas',
    domain: 'tiralineas.digital',
  },
  {
    name: 'Autonix Dynamic QR Codes',
    domain: 'autonix.io',
  },
  {
    name: 'CirQlive',
    domain: 'cirqlive.com',
  },
  {
    name: 'Dialogue',
    domain: 'nowdialogue.com',
  },
  {
    name: 'Cremanski & Company',
    domain: 'cremanski.com',
  },
  {
    name: 'BPIO.COnsulting',
    domain: 'bpioconsulting.de',
  },
  {
    name: 'Planet Crust',
    domain: 'planetcrust.com',
  },
  {
    name: 'GITS Indonesia',
    domain: 'gits.id',
  },
  {
    name: 'Mention Me',
    domain: 'mention-me.com',
  },
  {
    name: 'Surfboard',
    domain: 'teamsurfboard.com',
  },
  {
    name: 'Nvizion Solutions',
    domain: 'nvizionsolutions.com',
  },
  {
    name: 'Vpod Solutions',
    domain: 'vpodsolutions.com',
  },
  {
    name: 'Generation Digital',
    domain: 'gend.co',
  },
  {
    name: 'Lenovo',
    domain: 'lenovo.com',
  },
  {
    name: 'LaborChart',
    domain: 'laborchart.com',
  },
  {
    name: 'SalesWorks',
    domain: 'salesworks.io',
  },
  {
    name: 'Design Center Inc',
    domain: 'designcenterideas.com',
  },
  {
    name: 'Mashey',
    domain: 'mashey.com',
  },
  {
    name: 'Storage Solutions',
    domain: 'storage-solutions.com',
  },
  {
    name: 'Allara Global',
    domain: 'allaraglobal.com',
  },
  {
    name: 'Analytics8',
    domain: 'analytics8.com',
  },
  {
    name: 'Consensus',
    domain: 'goconsensus.com',
  },
  {
    name: 'Laybuy',
    domain: 'laybuy.com',
  },
  {
    name: 'Outfund',
    domain: 'out.fund',
  },
  {
    name: 'BrainStorm',
    domain: 'brainstorminc.com',
  },
  {
    name: 'BuildOps',
    domain: 'buildops.com',
  },
  {
    name: 'Rightpoint',
    domain: 'rightpoint.com',
  },
  {
    name: 'Volumental',
    domain: 'volumental.com',
  },
  {
    name: 'Vision Point Systems',
    domain: 'visionpointsystems.com',
  },
  {
    name: 'dotkonnekt',
    domain: 'dotkonnekt.com',
  },
  {
    name: 'Fandom',
    domain: 'fandom.com',
  },
  {
    name: 'Open Sky Group',
    domain: 'openskygroup.com',
  },
  {
    name: 'Rapptr Labs',
    domain: 'rapptrlabs.com',
  },
  {
    name: 'Homestead Studio',
    domain: 'homesteadstudio.co',
  },
  {
    name: 'parcelLab',
    domain: 'parcellab.com',
  },
  {
    name: 'Unstack Inc.',
    domain: 'unstack.com',
  },
  {
    name: 'SPMG EMEA LLP',
    domain: 'spmgglobal.com',
  },
  {
    name: 'ProductWind',
    domain: 'productwind.com',
  },
  {
    name: 'StarCompliance',
    domain: 'starcompliance.com',
  },
  {
    name: 'Heinz Marketing Inc',
    domain: 'heinzmarketing.com',
  },
  {
    name: 'Metaplane',
    domain: 'metaplane.dev',
  },
  {
    name: 'Refersion',
    domain: 'refersion.com',
  },
  {
    name: 'ProcurementExpress.com - PO App',
    domain: 'procurementexpress.com',
  },
  {
    name: 'Pure Finance Group',
    domain: 'purefinancegroup.com',
  },
  {
    name: 'BetterUp',
    domain: 'betterup.com',
  },
  {
    name: 'Crestwood Associates',
    domain: 'crestwood.com',
  },
  {
    name: 'DipJar',
    domain: 'dipjar.com',
  },
  {
    name: 'FieldPulse',
    domain: 'fieldpulse.com.au',
  },
  {
    name: 'Conferences i/o',
    domain: 'conferences.io',
  },
  {
    name: 'regie.ai',
    domain: 'regie.ai',
  },
  {
    name: 'Benchmark Email',
    domain: 'benchmarkemail.com',
  },
  {
    name: 'KL Software Technologies',
    domain: 'klstinc.com',
  },
  {
    name: 'No Spoilers',
    domain: 'nospoilers.ai',
  },
  {
    name: 'North Capital',
    domain: 'northcapital.com',
  },
  {
    name: 'Wonderlic',
    domain: 'wonderlic.com',
  },
  {
    name: 'Mvislbe Co',
    domain: 'mvisible.co',
  },
  {
    name: 'Mission',
    domain: 'mission.dev',
  },
  {
    name: 'Trend Micro',
    domain: 'trendmicro.com',
  },
  {
    name: 'ProVia',
    domain: 'provia.com',
  },
  {
    name: 'Tavano Team',
    domain: 'tavanoteam.com',
  },
  {
    name: 'HealthVerity',
    domain: 'healthverity.com',
  },
  {
    name: 'Made People AB',
    domain: 'madepeople.se',
  },
  {
    name: 'Secure Code Warrior',
    domain: 'securecodewarrior.com',
  },
  {
    name: 'Forix',
    domain: 'forixcommerce.com',
  },
  {
    name: 'Web Kraftz',
    domain: 'webkraftz.com',
  },
  {
    name: 'MAKDigitalDesign',
    domain: 'makdigitaldesign.com',
  },
  {
    name: 'Syncari',
    domain: 'syncari.com',
  },
  {
    name: 'Zywave',
    domain: 'zywave.com',
  },
  {
    name: 'Volt',
    domain: 'textvolt.com',
  },
  {
    name: 'Belco B.V.',
    domain: 'belco.nl',
  },
  {
    name: 'BillingPlatform',
    domain: 'billingplatform.com',
  },
  {
    name: 'Kertos GmbH',
    domain: 'kertos.io',
  },
  {
    name: 'LinkSquares',
    domain: 'linksquares.com',
  },
  {
    name: 'VirtualAd',
    domain: 'virtualad.co',
  },
  {
    name: 'Management Controls Inc',
    domain: 'managementcontrols.com',
  },
  {
    name: 'Five Star Commerce',
    domain: 'fivestarcommerce.com',
  },
  {
    name: 'Minds Studio',
    domain: 'mindstudio.co',
  },
  {
    name: 'Hello Iconic',
    domain: 'helloiconic.com',
  },
  {
    name: 'Cybersixgill',
    domain: 'cybersixgill.com',
  },
  {
    name: 'FlowFactory',
    domain: 'flowfactory.fr',
  },
  {
    name: 'Porobic Group',
    domain: 'porobicgroup.com',
  },
  {
    name: 'Trend Z',
    domain: 'trendzteam.com',
  },
  {
    name: 'Intern Scale',
    domain: 'internscale.com',
  },
  {
    name: 'Move Ventures',
    domain: 'move.partners',
  },
  {
    name: 'adam.ai',
    domain: 'adam.ai',
  },
  {
    name: 'NewPath Consulting',
    domain: 'newpathconsulting.com',
  },
  {
    name: 'Delta Payment Solutions',
    domain: 'mydeltaps.com',
  },
  {
    name: 'Interactive Hail Maps, LLC',
    domain: 'interactivehailmaps.com',
  },
  {
    name: 'UMT360',
    domain: 'umt360.com',
  },
  {
    name: 'Skaled',
    domain: 'skaled.com',
  },
  {
    name: 'Enrichigo',
    domain: 'enrichigo.com',
  },
  {
    name: 'verybigthings',
    domain: 'verybigthings.com',
  },
  {
    name: 'Honeycomb Commerce',
    domain: 'honeycombcommerce.com',
  },
  {
    name: 'Email Industries',
    domain: 'emailindustries.com',
  },
  {
    name: 'Torchlite',
    domain: 'torchlite.com',
  },
  {
    name: 'QuantumWork Advisory',
    domain: 'quantum.work',
  },
  {
    name: 'CodigoDelSur',
    domain: 'codigodelsur.com',
  },
  {
    name: 'TextUs',
    domain: 'textus.com',
  },
  {
    name: 'vyntelligence',
    domain: 'vyntelligence.com',
  },
  {
    name: 'Hygraph',
    domain: 'hygraph.com',
  },
  {
    name: 'OPSWAT',
    domain: 'opswat.com',
  },
  {
    name: 'Kontact Profit Group',
    domain: 'kontactprofitgroup.com',
  },
  {
    name: 'Netography',
    domain: 'netography.com',
  },
  {
    name: 'Qubed Agency',
    domain: 'qubed.agency',
  },
  {
    name: 'Swallis Medical',
    domain: 'swallismedical.com',
  },
  {
    name: 'Social Links',
    domain: 'sociallinks.io',
  },
  {
    name: 'Buy Box Experts',
    domain: 'buyboxexperts.com',
  },
  {
    name: 'TWi',
    domain: 'technicallywriteit.com',
  },
  {
    name: 'ARCAD Software',
    domain: 'arcadsoftware.com',
  },
  {
    name: 'Secret Source Marketing',
    domain: 'secretsourcemarketing.com',
  },
  {
    name: 'b2bpla.net',
    domain: 'b2bpla.net',
  },
  {
    name: 'Salesfire',
    domain: 'salesfire.com',
  },
  {
    name: 'DroneDeploy',
    domain: 'dronedeploy.com',
  },
  {
    name: 'IncentivePilot',
    domain: 'incentivepilot.com',
  },
  {
    name: 'Kin + Carta',
    domain: 'kinandcarta.com',
  },
  {
    name: 'Anvilogic',
    domain: 'anvilogic.com',
  },
  {
    name: 'Enventys Partners',
    domain: 'enventyspartners.com',
  },
  {
    name: 'Chord Commerce',
    domain: 'chord.co',
  },
  {
    name: 'ProPlanner',
    domain: 'ipsumapp.co',
  },
  {
    name: 'Curastory',
    domain: 'curastory.co',
  },
  {
    name: 'VAUBAN',
    domain: 'vauban.io',
  },
  {
    name: 'EY',
    domain: 'ey.com',
  },
  {
    name: 'Pej AB',
    domain: 'pej.se',
  },
  {
    name: 'Paylocity',
    domain: 'paylocity.com',
  },
  {
    name: 'IPONWEB',
    domain: 'iponweb.net',
  },
  {
    name: 'Ometria',
    domain: 'ometria.com',
  },
  {
    name: 'RepCard',
    domain: 'repcard.com',
  },
  {
    name: 'Call Criteria',
    domain: 'callcriteria.com',
  },
  {
    name: 'Shufti Pro',
    domain: 'shuftipro.com',
  },
  {
    name: 'SprintoHQ',
    domain: 'sprinto.com',
  },
  {
    name: 'Octopus Investments',
    domain: 'octopusinvestments.com',
  },
  {
    name: 'commercetools',
    domain: 'commercetools.com',
  },
  {
    name: 'Datafold',
    domain: 'datafold.com',
  },
  {
    name: 'DuploCloud',
    domain: 'duplocloud.com',
  },
  {
    name: 'StockSnips',
    domain: 'stocksnips.net',
  },
  {
    name: 'Perkbox',
    domain: 'perkbox.com',
  },
  {
    name: 'Simple Helix',
    domain: 'simplehelix.com',
  },
  {
    name: 'BlueSwitch',
    domain: 'blueswitch.com',
  },
  {
    name: 'Caravel Partners',
    domain: 'caravel-partners.com',
  },
  {
    name: 'data.world',
    domain: 'data.world',
  },
  {
    name: 'DronaHQ',
    domain: 'dronahq.com',
  },
  {
    name: 'Rocketgenius Inc',
    domain: 'rocketgenius.com',
  },
  {
    name: 'AllVoices',
    domain: 'allvoices.co',
  },
  {
    name: 'Within Health',
    domain: 'seewithin.co',
  },
  {
    name: 'Domino Data Lab',
    domain: 'dominodatalab.com',
  },
  {
    name: 'Momentum',
    domain: 'momentum.io',
  },
  {
    name: 'Billd',
    domain: 'billd.com',
  },
  {
    name: 'Movista',
    domain: 'movista.com',
  },
  {
    name: 'Turnkey Lender, Inc',
    domain: 'turnkey-lender.com',
  },
  {
    name: 'Full Sail Partners',
    domain: 'fullsailpartners.com',
  },
  {
    name: 'Airbyte',
    domain: 'airbyte.com',
  },
  {
    name: 'S A Partners LLP',
    domain: 'sapartners.com',
  },
  {
    name: 'kromeimagelabs',
    domain: 'kromeimagelabs.com',
  },
  {
    name: 'Clari',
    domain: 'clari.com',
  },
  {
    name: 'Sensat Surveying',
    domain: 'sensat.co',
  },
  {
    name: 'Indico Data',
    domain: 'indicodata.ai',
  },
  {
    name: 'Rain Retail',
    domain: 'rainpos.com',
  },
  {
    name: 'Airtime Rewards',
    domain: 'airtimerewards.co.uk',
  },
  {
    name: 'Blutag',
    domain: 'blu.ai',
  },
  {
    name: '1o',
    domain: '1o.io',
  },
  {
    name: 'PushOwl',
    domain: 'pushowl.com',
  },
  {
    name: 'Wenzel Spine',
    domain: 'wenzelspine.com',
  },
  {
    name: 'Kfish n Chips',
    domain: 'kfishnchips.com',
  },
  {
    name: 'Ad Victoriam Solutions',
    domain: 'advictoriamsolutions.com',
  },
  {
    name: 'Apotech Consulting',
    domain: 'apotechconsulting.com',
  },
  {
    name: 'Wowza Media Systems',
    domain: 'wowza.com',
  },
  {
    name: 'Homerun Presales',
    domain: 'homerunpresales.com',
  },
  {
    name: 'Betterworks',
    domain: 'betterworks.com',
  },
  {
    name: 'Oliver Rhodes',
    domain: 'aaltoprojects.xyz',
  },
  {
    name: 'Cleevio',
    domain: 'cleevio.com',
  },
  {
    name: 'Sylius eCommerce',
    domain: 'sylius.com',
  },
  {
    name: 'The Stable (Formerly bva_commerce)',
    domain: 'thestable.com',
  },
  {
    name: 'Forsys',
    domain: 'forsysinc.com',
  },
  {
    name: 'Social8 Brands',
    domain: 'socialeight.co.uk',
  },
  {
    name: 'Kojo (Formerly Agora Systems)',
    domain: 'usekojo.com',
  },
  {
    name: 'Simple Group',
    domain: 'simplegroup.sg',
  },
  {
    name: 'PINCHme',
    domain: 'pinchme.com',
  },
  {
    name: 'Acadaca',
    domain: 'acadaca.com',
  },
  {
    name: 'ABIDAT GmbH',
    domain: 'abidat.de',
  },
  {
    name: 'KPS AG',
    domain: 'kps.com',
  },
  {
    name: 'Connex Digital',
    domain: 'connex.digital',
  },
  {
    name: 'Recruiter.com',
    domain: 'recruiter.com',
  },
  {
    name: 'Bottomline Technologies',
    domain: 'bottomline.com',
  },
  {
    name: 'Arcion Labs',
    domain: 'arcion.io',
  },
  {
    name: 'Dandy',
    domain: 'meetdandy.com',
  },
  {
    name: 'Namely',
    domain: 'namely.com',
  },
  {
    name: 'Serrala',
    domain: 'serrala.com',
  },
  {
    name: 'Venn Technology',
    domain: 'venntechnology.com',
  },
  {
    name: 'Filevine',
    domain: 'filevine.com',
  },
  {
    name: 'Coast Digital',
    domain: 'growwithcoast.com',
  },
  {
    name: 'Volopay',
    domain: 'volopay.com',
  },
  {
    name: 'Novo',
    domain: 'novo.co',
  },
  {
    name: 'Mercaux',
    domain: 'mercaux.com',
  },
  {
    name: 'Polygon - MATIC \uD83D\uDC9C',
    domain: 'polygon.technology',
  },
  {
    name: 'Gembah',
    domain: 'gembah.com',
  },
  {
    name: 'BizAnalytica',
    domain: 'bizanalytica.com',
  },
  {
    name: 'Ecommerce Boost',
    domain: 'ecommerceboost.io',
  },
  {
    name: 'TheCirqle.com',
    domain: 'thecirqle.com',
  },
  {
    name: 'CLEARgo',
    domain: 'cleargo.com',
  },
  {
    name: 'Actable',
    domain: 'actabledata.com',
  },
  {
    name: 'Roiward.io',
    domain: 'roiward.io',
  },
  {
    name: 'Unity Group',
    domain: 'unitygroup.com',
  },
  {
    name: 'Wunderdog',
    domain: 'wunderdog.fi',
  },
  {
    name: 'Ravelin',
    domain: 'ravelin.com',
  },
  {
    name: 'PSP Lab',
    domain: 'psplab.com',
  },
  {
    name: 'Carlson Solutions',
    domain: 'carlsonsolutionsllc.com',
  },
  {
    name: 'Anomalo',
    domain: 'anomalo.com',
  },
  {
    name: 'Loadsmart',
    domain: 'loadsmart.com',
  },
  {
    name: 'Secoda',
    domain: 'secoda.co',
  },
  {
    name: 'Voxie',
    domain: 'voxie.com',
  },
  {
    name: 'Alegria.tech',
    domain: 'alegria.group',
  },
  {
    name: 'SIGMA SYSTEMS',
    domain: 'sigmasystems.net',
  },
  {
    name: 'THG',
    domain: 'thg.com',
  },
  {
    name: 'Zmags',
    domain: 'creatorbyzmags.com',
  },
  {
    name: 'OrbitMI',
    domain: 'orbitmi.com',
  },
  {
    name: 'Humanitix',
    domain: 'humanitix.com',
  },
  {
    name: 'inzpire.me',
    domain: 'inzpire.me',
  },
  {
    name: 'Adaptigent',
    domain: 'adaptigent.com',
  },
  {
    name: 'Mitratech',
    domain: 'mitratech.com',
  },
  {
    name: 'Relias',
    domain: 'relias.com',
  },
  {
    name: 'Tinyclues',
    domain: 'tinyclues.com',
  },
  {
    name: 'Operator',
    domain: 'operator.io',
  },
  {
    name: 'Getpork',
    domain: 'getpork.co',
  },
  {
    name: 'Charlie Oscar',
    domain: 'charlieoscar.com',
  },
  {
    name: 'Bitwarden',
    domain: 'bitwarden.com',
  },
  {
    name: 'Gnatta',
    domain: 'gnatta.com',
  },
  {
    name: 'Legal Tech Media Group',
    domain: 'legaltechmg.com',
  },
  {
    name: 'Brella',
    domain: 'brella.io',
  },
  {
    name: 'The Black Curriculum',
    domain: 'theblackcurriculum.com',
  },
  {
    name: 'BBS & Associates',
    domain: 'servantheart.com',
  },
  {
    name: 'appreciate',
    domain: 'appreciate.it',
  },
  {
    name: 'TokenEx',
    domain: 'tokenex.com',
  },
  {
    name: 'Courier',
    domain: 'courier.com',
  },
  {
    name: 'Wisely',
    domain: 'fundraisewisely.com',
  },
  {
    name: 'Frontier Marketing',
    domain: 'frontier.io',
  },
  {
    name: 'Satel Creative',
    domain: 'satelcreative.com',
  },
  {
    name: 'Newmetrix',
    domain: 'newmetrix.com',
  },
  {
    name: 'Deliverect',
    domain: 'deliverect.com',
  },
  {
    name: 'PostNL',
    domain: 'postnl.nl',
  },
  {
    name: 'Genetsis Group',
    domain: 'genetsisgroup.com',
  },
  {
    name: 'Byteleaders',
    domain: 'byteleaders.nl',
  },
  {
    name: 'Dataloy Systems AS',
    domain: 'dataloy-systems.com',
  },
  {
    name: 'AGORA',
    domain: 'agoraworld.co',
  },
  {
    name: 'BlueRyse',
    domain: 'blueryse.com',
  },
  {
    name: 'Parcelhub',
    domain: 'parcelhub.co.uk',
  },
  {
    name: 'Whistl',
    domain: 'whistl.co.uk',
  },
  {
    name: 'FlowPath',
    domain: 'getflowpath.com',
  },
  {
    name: 'Clyde',
    domain: 'joinclyde.com',
  },
  {
    name: 'Velou',
    domain: 'velou.com',
  },
  {
    name: 'Touchless',
    domain: 'touchless.inc',
  },
  {
    name: 'Adentro',
    domain: 'adentro.com',
  },
  {
    name: 'Reptil.mx',
    domain: 'reptil.mx',
  },
  {
    name: 'Exabeam',
    domain: 'exabeam.com',
  },
  {
    name: 'HammerTech',
    domain: 'hammertechglobal.com',
  },
  {
    name: 'Dfuzr Industries',
    domain: 'dfuzr.com',
  },
  {
    name: 'Motivosity',
    domain: 'motivosity.com',
  },
  {
    name: 'DELVE',
    domain: 'delvedeeper.com',
  },
  {
    name: 'Red Badger',
    domain: 'red-badger.com',
  },
  {
    name: 'UDG Rhein-Main GmbH',
    domain: 'udg.de',
  },
  {
    name: 'Venatrix Ltd',
    domain: 'venatrixuk.com',
  },
  {
    name: 'Monstarlab',
    domain: 'monstar-lab.com',
  },
  {
    name: 'Volly',
    domain: 'myvolly.com',
  },
  {
    name: 'Transak',
    domain: 'transak.com',
  },
  {
    name: 'Encycdata',
    domain: 'encycdata.com',
  },
  {
    name: 'Bionic',
    domain: 'bionic.ai',
  },
  {
    name: 'IWG plc',
    domain: 'iwgplc.com',
  },
  {
    name: 'KlickPiloten GmbH',
    domain: 'klickpiloten.de',
  },
  {
    name: 'Kairos',
    domain: 'kairoswater.io',
  },
  {
    name: 'SMARTe',
    domain: 'smarteinc.com',
  },
  {
    name: 'OrangeKloud',
    domain: 'orangekloud.com',
  },
  {
    name: 'Arengu',
    domain: 'arengu.com',
  },
  {
    name: 'Intelligent Outsource',
    domain: 'intelligentoutsource.com',
  },
  {
    name: 'Returnless',
    domain: 'returnless.com',
  },
  {
    name: 'Portfolio Wellness Solutions',
    domain: 'portfoliowellness.com',
  },
  {
    name: 'Metric Studio Inc.',
    domain: 'metric-studio.com',
  },
  {
    name: 'ProfitWeel',
    domain: 'profitwheel.com',
  },
  {
    name: 'The New Flat Rate',
    domain: 'thenewflatrate.com',
  },
  {
    name: 'Endpoint Protector by CoSoSys',
    domain: 'endpointprotector.com',
  },
  {
    name: 'Hot Pop Factory',
    domain: 'hotpopfactory.com',
  },
  {
    name: 'Ipsun Tech',
    domain: 'ipsuntech.com',
  },
  {
    name: 'Ungerboeck',
    domain: 'ungerboeck.com',
  },
  {
    name: 'EcomBalance',
    domain: 'ecombalance.com',
  },
  {
    name: 'CQL',
    domain: 'cqlcorp.com',
  },
  {
    name: 'Sureshot',
    domain: 'sureshot.io',
  },
  {
    name: 'PayTrace',
    domain: 'paytrace.net',
  },
  {
    name: 'Geels Norton',
    domain: 'geelsnorton.com',
  },
  {
    name: 'Mudbath & Co.',
    domain: 'mudbath.com.au',
  },
  {
    name: 'Elsner Technologies Pvt',
    domain: 'elsner.com',
  },
  {
    name: 'SyncEzy',
    domain: 'syncezy.com',
  },
  {
    name: 'Social Geeks Digital Agency',
    domain: 'socialgeeks.com.au',
  },
  {
    name: 'Widget Brain',
    domain: 'widgetbrain.com',
  },
  {
    name: 'Bankish',
    domain: 'bankish.eu',
  },
  {
    name: 'SalesIntel',
    domain: 'salesintel.io',
  },
  {
    name: 'WeMailYourBrand',
    domain: 'wemailyourbrand.com',
  },
  {
    name: 'MvH Media',
    domain: 'mvhmedia.nl',
  },
  {
    name: 'ANNUITAS',
    domain: 'annuitas.com',
  },
  {
    name: 'BIMLauncher',
    domain: 'bimlauncher.com',
  },
  {
    name: 'Datalook',
    domain: 'datalook.cz',
  },
  {
    name: 'SaaSteps',
    domain: 'saasteps.com',
  },
  {
    name: 'Crown Xpress Transport',
    domain: 'crownxt.com',
  },
  {
    name: 'Invoice Ninja',
    domain: 'invoiceninja.com',
  },
  {
    name: 'Tricycle Europe',
    domain: 'tricycle-europe.com',
  },
  {
    name: 'Zesty',
    domain: 'zesty.co',
  },
  {
    name: 'Quickbase',
    domain: 'quickbase.com',
  },
  {
    name: 'CleanCloud',
    domain: 'cleancloudapp.com',
  },
  {
    name: 'Captello',
    domain: 'captello.com',
  },
  {
    name: 'PERQ',
    domain: 'perq.com',
  },
  {
    name: 'GameSheet',
    domain: 'gamesheetinc.com',
  },
  {
    name: 'Coalesce Automation Inc.',
    domain: 'coalesce.io',
  },
  {
    name: 'Everyware®',
    domain: 'everyware.com',
  },
  {
    name: 'Royal Cyber',
    domain: 'royalcyber.com',
  },
  {
    name: 'Keyrus',
    domain: 'keyrus.us',
  },
  {
    name: 'Showday.io',
    domain: 'showday.io',
  },
  {
    name: 'SeekXR',
    domain: 'seekxr.com',
  },
  {
    name: 'Hummingbird Innovations LLC',
    domain: 'hummingbirdinnovations.com',
  },
  {
    name: 'Cernova',
    domain: 'cernova.com',
  },
  {
    name: 'Ignyte Group',
    domain: 'ignytegroup.com',
  },
  {
    name: 'Webtopia',
    domain: 'webtopia.co',
  },
  {
    name: 'ShippyPro',
    domain: 'shippypro.com',
  },
  {
    name: 'Continuus Technologies',
    domain: 'continuus-technologies.com',
  },
  {
    name: '7 Figure Automation',
    domain: '7figureautomation.com',
  },
  {
    name: 'Kluster',
    domain: 'kluster.com',
  },
  {
    name: 'Commerce Garage',
    domain: 'commercegarage.com',
  },
  {
    name: 'VIEWN',
    domain: 'viewn.com',
  },
  {
    name: 'Sydney Digital Marketing Agency',
    domain: 'sydneydigitalmarketing.com.au',
  },
  {
    name: 'TestBox',
    domain: 'testbox.com',
  },
  {
    name: 'StartupOS',
    domain: 'startupos.com',
  },
  {
    name: 'Radar',
    domain: 'radar.com',
  },
  {
    name: 'MikMak',
    domain: 'mikmak.com',
  },
  {
    name: 'Decimal',
    domain: 'decimal.com',
  },
  {
    name: 'Conversity',
    domain: 'conversity.com',
  },
  {
    name: 'atelier commerce',
    domain: 'ateliercommerce.com',
  },
  {
    name: 'Wezana',
    domain: 'wezana.solutions',
  },
  {
    name: 'Tanda',
    domain: 'tanda.co',
  },
  {
    name: 'Insellerate llc',
    domain: 'insellerate.com',
  },
  {
    name: 'Flex Marketing Group',
    domain: 'flexmg.com',
  },
  {
    name: 'Tastewise',
    domain: 'tastewise.io',
  },
  {
    name: 'Promet Source',
    domain: 'prometsource.com',
  },
  {
    name: 'preezie',
    domain: 'preezie.com',
  },
  {
    name: 'Momentum Commerce',
    domain: 'momentumcommerce.com',
  },
  {
    name: 'UserTesting',
    domain: 'usertesting.com',
  },
  {
    name: 'Prismatic',
    domain: 'prismatic.io',
  },
  {
    name: 'Citycom Solutions',
    domain: 'citycomsolutions.com',
  },
  {
    name: 'Not Your Hobby Marketing Solutions',
    domain: 'notyourhobbymarketing.com',
  },
  {
    name: 'Fun Team Events',
    domain: 'funteamevents.com',
  },
  {
    name: 'Best Pick Reports',
    domain: 'bestpickreports.com',
  },
  {
    name: 'JobNimbus',
    domain: 'jobnimbus.com',
  },
  {
    name: 'XeoMatrix',
    domain: 'xeomatrix.com',
  },
  {
    name: 'AtData',
    domain: 'atdata.com',
  },
  {
    name: 'Carton & Co (Formerly Inpractice)',
    domain: 'cartonconsultants.com',
  },
  {
    name: 'SustainIQ',
    domain: 'sustainiq.com',
  },
  {
    name: 'Hyperproof',
    domain: 'hyperproof.io',
  },
  {
    name: 'Rule Communication',
    domain: 'rule.se',
  },
  {
    name: 'Kensu',
    domain: 'kensu.io',
  },
  {
    name: 'Trika Technologies, Inc.',
    domain: 'trikatechnologies.com',
  },
  {
    name: 'Ziflow',
    domain: 'ziflow.com',
  },
  {
    name: 'PlayerZero',
    domain: 'playerzero.app',
  },
  {
    name: 'Bandwidth',
    domain: 'bandwidth.com',
  },
  {
    name: 'Appodeal',
    domain: 'appodeal.com',
  },
  {
    name: 'Range',
    domain: 'onerange.co',
  },
  {
    name: 'Quartile',
    domain: 'quartile.com',
  },
  {
    name: 'Go Inspire',
    domain: 'goinspire.co.uk',
  },
  {
    name: 'Famly',
    domain: 'famly.co',
  },
  {
    name: 'Zip (formerly Quadpay)',
    domain: 'quadpay.com',
  },
  {
    name: 'Tangoe',
    domain: 'tangoe.com',
  },
  {
    name: 'Artera',
    domain: 'artera.io',
  },
  {
    name: 'Superconductive',
    domain: 'superconductive.com',
  },
  {
    name: 'Toktent',
    domain: 'toktent.com',
  },
  {
    name: 'Optimus Fintech',
    domain: 'optimus.tech',
  },
  {
    name: 'Matthew Robinson',
    domain: 'seventyfourdesign.com.au',
  },
  {
    name: 'TokyWoky',
    domain: 'tokywoky.com',
  },
  {
    name: 'IntegridSolutions',
    domain: 'integrid.solutions',
  },
  {
    name: 'Zakeke',
    domain: 'zakeke.com',
  },
  {
    name: 'nDash',
    domain: 'ndash.com',
  },
  {
    name: 'Arctiq Inc.',
    domain: 'arctiq.ca',
  },
  {
    name: 'Lemon Seed Marketing',
    domain: 'lemonseedmarketing.com',
  },
  {
    name: 'Sora',
    domain: 'sora.co',
  },
  {
    name: 'Jebbit, Inc.',
    domain: 'jebbit.com',
  },
  {
    name: 'Branch App',
    domain: 'branchapp.com',
  },
  {
    name: 'Raken',
    domain: 'rakenapp.com',
  },
  {
    name: 'Indenseo',
    domain: 'indenseo.com',
  },
  {
    name: 'Shping',
    domain: 'shping.com',
  },
  {
    name: 'Chargent',
    domain: 'appfrontier.com',
  },
  {
    name: 'CONQA',
    domain: 'conqahq.com',
  },
  {
    name: 'Asha Madhavan DDS',
    domain: 'ashamadhavandds.com',
  },
  {
    name: 'Search Laboratory',
    domain: 'searchlaboratory.com',
  },
  {
    name: 'Productive Edge',
    domain: 'productiveedge.com',
  },
  {
    name: 'HiJiffy',
    domain: 'hijiffy.com',
  },
  {
    name: 'Kadiska',
    domain: 'kadiska.com',
  },
  {
    name: 'Kasada',
    domain: 'kasada.io',
  },
  {
    name: 'Archa',
    domain: 'archa.com.au',
  },
  {
    name: 'KPI Captain',
    domain: 'kpicaptain.com',
  },
  {
    name: 'Motion',
    domain: 'motionapp.com',
  },
  {
    name: 'Koncert',
    domain: 'koncert.com',
  },
  {
    name: 'PostPilot',
    domain: 'postpilot.com',
  },
  {
    name: 'CloudM',
    domain: 'cloudm.io',
  },
  {
    name: 'JH Garnier & Associates Ltd',
    domain: 'jimmygarnier.com',
  },
  {
    name: 'CloudFactory',
    domain: 'cloudfactory.com',
  },
  {
    name: 'AccessHope',
    domain: 'myaccesshope.org',
  },
  {
    name: 'GivingDNA',
    domain: 'givingdna.com',
  },
  {
    name: 'Grand Shooting',
    domain: 'grand-shooting.com',
  },
  {
    name: 'CRM Science',
    domain: 'crmscience.com',
  },
  {
    name: 'Pablo González-Trejo',
    domain: 'pablogt.com',
  },
  {
    name: 'SHOPLAZZA',
    domain: 'shoplazza.com',
  },
  {
    name: 'Blue Ink Digital',
    domain: 'blueinkdigital.com',
  },
  {
    name: 'ServiceTitan',
    domain: 'servicetitan.com',
  },
  {
    name: 'Left Hook',
    domain: 'lefthook.com',
  },
  {
    name: 'ArisGlobal',
    domain: 'arisglobal.com',
  },
  {
    name: 'Envision Horizons',
    domain: 'envisionhorizons.com',
  },
  {
    name: 'Dtravel',
    domain: 'dtravel.com',
  },
  {
    name: 'The Social Station',
    domain: 'thesocialstation.com',
  },
  {
    name: 'QUABLE',
    domain: 'quable.com',
  },
  {
    name: 'Simpliworks',
    domain: 'simpliworks.io',
  },
  {
    name: 'KUWAITNET',
    domain: 'kuwaitnet.com',
  },
  {
    name: 'Glide Agency',
    domain: 'glideagency.com',
  },
  {
    name: 'TIKTAL',
    domain: 'tiktal.co',
  },
  {
    name: 'Eppo',
    domain: 'geteppo.com',
  },
  {
    name: 'Felix',
    domain: 'felix.net',
  },
  {
    name: 'SoftwareONE',
    domain: 'softwareone.com',
  },
  {
    name: 'Betach Solutions Inc',
    domain: 'betach.com',
  },
  {
    name: 'Sapper Consulting',
    domain: 'sapperconsulting.com',
  },
  {
    name: 'DynaNet Online Support Private Limited',
    domain: 'dynanet.support',
  },
  {
    name: 'Seller Investigators',
    domain: 'sellerinvestigators.com',
  },
  {
    name: 'Tackle',
    domain: 'tackle.io',
  },
  {
    name: 'Vortx',
    domain: 'vortx.com',
  },
  {
    name: 'Contractor+',
    domain: 'contractorplus.app',
  },
  {
    name: 'NCS SOLUTIONS',
    domain: 'ncssolutions.org',
  },
  {
    name: 'Pointr',
    domain: 'pointr.tech',
  },
  {
    name: 'Fullview',
    domain: 'fullview.io',
  },
  {
    name: 'Enertiv',
    domain: 'enertiv.com',
  },
  {
    name: 'Weapon Depot',
    domain: 'weapondepot.com',
  },
  {
    name: 'Numerator',
    domain: 'numerator.com',
  },
  {
    name: 'Garran Lockers Limited',
    domain: 'garran-lockers.co.uk',
  },
  {
    name: 'CharlieHR',
    domain: 'charliehr.com',
  },
  {
    name: 'Opplane',
    domain: 'opplane.com',
  },
  {
    name: 'GuideOnce',
    domain: 'guideonce.com',
  },
  {
    name: 'New Amsterdam',
    domain: 'newamsterdam.se',
  },
  {
    name: 'Traxo',
    domain: 'traxo.com',
  },
  {
    name: 'MYOB',
    domain: 'myob.com',
  },
  {
    name: 'Lloyd Solves',
    domain: 'lloydsolves.com',
  },
  {
    name: 'Landing.Jobs',
    domain: 'landing.jobs',
  },
  {
    name: 'Botify',
    domain: 'botify.com',
  },
  {
    name: 'PriceTrakker',
    domain: 'pricetrakker.com',
  },
  {
    name: 'Blue.cloud',
    domain: 'blue.cloud',
  },
  {
    name: 'Magnet AMS',
    domain: 'magnetams.com',
  },
  {
    name: 'AssurancePoint',
    domain: 'assurancepoint.cpa',
  },
  {
    name: 'Cohere',
    domain: 'cohere.ai',
  },
  {
    name: 'Napier',
    domain: 'napierb2b.com',
  },
  {
    name: 'Frost Bank',
    domain: 'frostbank.com',
  },
  {
    name: 'Paradime Labs Inc.',
    domain: 'paradime.io',
  },
  {
    name: 'Social Motion Films',
    domain: 'socialmotionfilms.com',
  },
  {
    name: 'Rize',
    domain: 'rizefs.com',
  },
  {
    name: 'Reviews.io',
    domain: 'reviews.io',
  },
  {
    name: 'Virtasant',
    domain: 'virtasant.com',
  },
  {
    name: 'Fast Simon',
    domain: 'fastsimon.com',
  },
  {
    name: 'Loop Subscriptions',
    domain: 'loopwork.co',
  },
  {
    name: 'Columbus',
    domain: 'columbusglobal.com',
  },
  {
    name: 'Green Hat',
    domain: 'green-hat.com.au',
  },
  {
    name: 'Xoxoday',
    domain: 'xoxoday.com',
  },
  {
    name: 'Front',
    domain: 'front.com',
  },
  {
    name: 'Netskope',
    domain: 'netskope.com',
  },
  {
    name: 'Pennoni',
    domain: 'pennoni.com',
  },
  {
    name: 'IT UNIVERSUM',
    domain: 'ituniversum.com',
  },
  {
    name: 'Jigx, Inc',
    domain: 'jigx.com',
  },
  {
    name: 'Loha Technologie',
    domain: 'loha.ca',
  },
  {
    name: 'Ecommerce Growth Company',
    domain: 'ecommercegrowth.com',
  },
  {
    name: 'Rocket.Chat',
    domain: 'rocket.chat',
  },
  {
    name: 'Learnexus',
    domain: 'learnexus.com',
  },
  {
    name: 'Respage',
    domain: 'respage.com',
  },
  {
    name: 'Softermii',
    domain: 'softermii.com',
  },
  {
    name: 'VL OMNI',
    domain: 'vlomni.com',
  },
  {
    name: 'CohereOne',
    domain: 'cohereone.com',
  },
  {
    name: 'Zeni',
    domain: 'zeni.ai',
  },
  {
    name: 'TelCloud, LLC',
    domain: 'telcloudllc.com',
  },
  {
    name: 'Gray Analytics, Inc.',
    domain: 'grayanalytics.com',
  },
  {
    name: 'DSS Partners',
    domain: 'dss-partners.com',
  },
  {
    name: 'JobTarget',
    domain: 'jobtarget.com',
  },
  {
    name: 'Renewal Logistics',
    domain: 'renewallogistics.com',
  },
  {
    name: 'Marqeta',
    domain: 'marqeta.com',
  },
  {
    name: 'imocha',
    domain: 'imocha.io',
  },
  {
    name: 'Vizard',
    domain: 'vizardapps.com',
  },
  {
    name: 'Yumpingo',
    domain: 'yumpingo.com',
  },
  {
    name: 'KValue',
    domain: 'kvalue.net',
  },
  {
    name: 'Boundify',
    domain: 'boundify.io',
  },
  {
    name: 'Stone Mountain Ltd.',
    domain: 'stonemountainltd.com',
  },
  {
    name: 'RainFocus',
    domain: 'rainfocus.com',
  },
  {
    name: 'Ryde',
    domain: 'ryde.team',
  },
  {
    name: 'ArkBM',
    domain: 'arkbm.com',
  },
  {
    name: 'Overhaul',
    domain: 'over-haul.com',
  },
  {
    name: 'SpotDraft',
    domain: 'spotdraft.com',
  },
  {
    name: 'SPK and Associates',
    domain: 'spkaa.com',
  },
  {
    name: 'Mainspring Consulting Group LLC',
    domain: 'mainspringcg.com',
  },
  {
    name: 'PredictHQ',
    domain: 'predicthq.com',
  },
  {
    name: 'Merit',
    domain: 'merits.com',
  },
  {
    name: 'Pitcher Partners',
    domain: 'pitcher.com.au',
  },
  {
    name: 'NetSpring',
    domain: 'netspring.io',
  },
  {
    name: 'Feed Media Group',
    domain: 'feedmediagroup.com',
  },
  {
    name: 'Capchase',
    domain: 'capchase.com',
  },
  {
    name: 'Gorilla',
    domain: 'gorilla.sc',
  },
  {
    name: 'OAG Aviation Worldwide Limited',
    domain: 'oag.com',
  },
  {
    name: 'MedStack',
    domain: 'medstack.co',
  },
  {
    name: 'Xakia Technologies',
    domain: 'xakiatech.com',
  },
  {
    name: 'ConsumerTrack, Inc.',
    domain: 'gobankingrates.com',
  },
  {
    name: 'TigerGraph',
    domain: 'tigergraph.com.cn',
  },
  {
    name: 'Staufen. ValueStreamer GmbH',
    domain: 'valuestreamer.de',
  },
  {
    name: 'Slip',
    domain: 'tryslip.com',
  },
  {
    name: 'Insocial Feedback Solutions',
    domain: 'insocial.nl',
  },
  {
    name: 'Cedreo',
    domain: 'cedreo.com',
  },
  {
    name: 'Blue Ridge',
    domain: 'blueridgeglobal.com',
  },
  {
    name: 'Ordway',
    domain: 'ordwaylabs.com',
  },
  {
    name: 'Multus Medical',
    domain: 'multusmedical.com',
  },
  {
    name: 'IntelligenceBank',
    domain: 'intelligencebank.com',
  },
  {
    name: 'Wambi',
    domain: 'wambi.org',
  },
  {
    name: 'Destination Motivation',
    domain: 'increaseoursales.com',
  },
  {
    name: 'Pay Now Direct',
    domain: 'paynowdirect.com',
  },
  {
    name: 'Ocient',
    domain: 'ocient.com',
  },
  {
    name: 'Good-Loop',
    domain: 'good-loop.com',
  },
  {
    name: 'Heap',
    domain: 'heap.io',
  },
  {
    name: 'Cubyn',
    domain: 'cubyn.com',
  },
  {
    name: 'GeoToll',
    domain: 'geotoll.com',
  },
  {
    name: 'SavvyCal',
    domain: 'savvycal.com',
  },
  {
    name: 'Nexaas',
    domain: 'nexaas.com',
  },
  {
    name: 'Crash Corp',
    domain: 'crashco.io',
  },
  {
    name: 'Versalytix',
    domain: 'versalytix.com',
  },
  {
    name: 'Alteryx',
    domain: 'alteryx.com',
  },
  {
    name: 'Hamster Garage',
    domain: 'hamstergarage.com',
  },
  {
    name: 'Blyp',
    domain: 'blyp.ai',
  },
  {
    name: 'Route101',
    domain: 'route101.com',
  },
  {
    name: 'Magnetic Theory Consulting',
    domain: 'magnetictheoryconsulting.com',
  },
  {
    name: 'Stellar One Consulting',
    domain: 'stellaroneconsulting.com',
  },
  {
    name: 'Renoon',
    domain: 'renoon.com',
  },
  {
    name: 'Rudra Innovative',
    domain: 'rudrainnovative.com',
  },
  {
    name: 'Intrado',
    domain: 'intrado.com',
  },
  {
    name: 'Shoppingfeed',
    domain: 'shoppingfeed.com',
  },
  {
    name: 'Rainy City Agency',
    domain: 'rainycityagency.com',
  },
  {
    name: 'ProLytics Consulting Group',
    domain: 'prolyticsgroup.com',
  },
  {
    name: 'SVA Software, Inc.',
    domain: 'svasoftware.com',
  },
  {
    name: 'BankCard USA',
    domain: 'bankcardusa.com',
  },
  {
    name: 'ProQuo AI',
    domain: 'proquoai.com',
  },
  {
    name: 'Ermetic',
    domain: 'ermetic.com',
  },
  {
    name: 'Smoothlink',
    domain: 'smoothlink.net',
  },
  {
    name: 'Bambuser',
    domain: 'bambuser.com',
  },
  {
    name: 'Portaltech Reply (UK)',
    domain: 'portaltech.reply.com',
  },
  {
    name: 'Hypothesis',
    domain: 'hypothes.is',
  },
  {
    name: 'InfluencerBit',
    domain: 'influencerbit.com',
  },
  {
    name: 'Alesco Data',
    domain: 'alescodata.com',
  },
  {
    name: 'Lipscore',
    domain: 'lipscore.com',
  },
  {
    name: 'Hypefury',
    domain: 'hypefury.com',
  },
  {
    name: 'Shieldpay',
    domain: 'shieldpay.com',
  },
  {
    name: 'Future Digital',
    domain: 'scalewithfuture.com',
  },
  {
    name: 'Levitate Foundry',
    domain: 'levitatefoundry.com',
  },
  {
    name: 'TLC Marketing Worldwide',
    domain: 'tlcmarketing.com',
  },
  {
    name: 'IBM Ventures',
    domain: 'ibm-ventures.com',
  },
  {
    name: 'Esri',
    domain: 'esri.com',
  },
  {
    name: 'Cloud 9 ERP Solutions',
    domain: 'cloud9erp.com',
  },
  {
    name: 'Ramp',
    domain: 'ramp.com',
  },
  {
    name: 'MetaENGINE',
    domain: 'metaengine.gg',
  },
  {
    name: 'Intelligize Digital',
    domain: 'intelligizedigital.com',
  },
  {
    name: 'Stacksi',
    domain: 'stacksi.com',
  },
  {
    name: 'MicroStar Logistics',
    domain: 'microstarlogistics.com',
  },
  {
    name: 'Fortil',
    domain: 'fortil.group',
  },
  {
    name: 'Opticca Security',
    domain: 'opticcasecurity.com',
  },
  {
    name: 'Paretisa',
    domain: 'paretisa.com',
  },
  {
    name: 'Dantes Games LLC',
    domain: 'dantesgames.com',
  },
  {
    name: 'Fat Earth Media',
    domain: 'fat-earth.com',
  },
  {
    name: 'amicaldo',
    domain: 'amicaldo.de',
  },
  {
    name: 'Kill Your Competition®',
    domain: 'killyourcompetition.today',
  },
  {
    name: 'ConvertMore',
    domain: 'convertmore.com',
  },
  {
    name: 'SKU IQ',
    domain: 'skuiq.com',
  },
  {
    name: 'Wizmo Solutions Inc.',
    domain: 'shipwizmo.com',
  },
  {
    name: 'Katpro Technologies',
    domain: 'katprotech.com',
  },
  {
    name: 'Giftnote',
    domain: 'giftnote.com',
  },
  {
    name: 'SafetyWing',
    domain: 'safetywing.com',
  },
  {
    name: 'Close',
    domain: 'close.com',
  },
  {
    name: 'CloudApp',
    domain: 'getcloudapp.com',
  },
  {
    name: 'GoCanvas',
    domain: 'gocanvas.com',
  },
  {
    name: 'Allscripts Healthcare, LLC',
    domain: 'allscripts.com',
  },
  {
    name: 'Propel',
    domain: 'propelgroup.com.au',
  },
  {
    name: 'SiteSpect',
    domain: 'sitespect.com',
  },
  {
    name: 'RepairDesk',
    domain: 'repairdesk.co',
  },
  {
    name: 'WindESCo',
    domain: 'windesco.com',
  },
  {
    name: 'RingClone',
    domain: 'ringclone.com',
  },
  {
    name: 'Fingerprint',
    domain: 'fingerprint.com',
  },
  {
    name: 'Heyday',
    domain: 'heyday.co',
  },
  {
    name: 'Rev',
    domain: 'getrev.ai',
  },
  {
    name: 'Molsoft',
    domain: 'molsoft.io',
  },
  {
    name: 'All Time Design',
    domain: 'alltimedesign.com',
  },
  {
    name: 'Tigera',
    domain: 'tigera.io',
  },
  {
    name: 'Techdinamics Integrations',
    domain: 'techdinamics.com',
  },
  {
    name: 'Workshop',
    domain: 'useworkshop.com',
  },
  {
    name: 'Archipelago',
    domain: 'onarchipelago.com',
  },
  {
    name: 'Rocketseed',
    domain: 'rocketseed.com',
  },
  {
    name: 'FullCircl',
    domain: 'fullcircl.com',
  },
  {
    name: 'Rhiassuring Solutions',
    domain: 'rhiassuring.com',
  },
  {
    name: 'Tranztec Solutions',
    domain: 'tranztec.com',
  },
  {
    name: 'Tudock GmbH',
    domain: 'tudock.de',
  },
  {
    name: 'Latino STEM Alliance',
    domain: 'latinostem.org',
  },
  {
    name: 'Referoo',
    domain: 'referoo.com.au',
  },
  {
    name: 'Pricefx',
    domain: 'pricefx.com',
  },
  {
    name: 'Uplers',
    domain: 'uplers.com',
  },
  {
    name: 'Kandidate',
    domain: 'kandidate.com',
  },
  {
    name: 'WeAgency',
    domain: 'weagency.digital',
  },
  {
    name: 'Daugherty Business Solutions',
    domain: 'daugherty.com',
  },
  {
    name: 'Sales Layer',
    domain: 'saleslayer.com',
  },
  {
    name: 'PT Blend Media Kreasi',
    domain: 'blendmedia.co.id',
  },
  {
    name: 'Glassbox',
    domain: 'glassbox.com',
  },
  {
    name: 'Bird Eats Bug',
    domain: 'birdeatsbug.com',
  },
  {
    name: 'deskbird',
    domain: 'deskbird.com',
  },
  {
    name: 'Sapphire Ventures',
    domain: 'sapphireventures.com',
  },
  {
    name: 'TeamRevenue',
    domain: 'teamrevenue.com',
  },
  {
    name: 'Linc',
    domain: 'linc.cx',
  },
  {
    name: 'New/Mode',
    domain: 'newmode.net',
  },
  {
    name: 'Bongo',
    domain: 'bongolearn.com',
  },
  {
    name: 'Relish AI',
    domain: 'relish.ai',
  },
  {
    name: 'Goodo Studios',
    domain: 'goodostudios.com',
  },
  {
    name: 'Rockset',
    domain: 'rockset.com',
  },
  {
    name: 'Lightup Data Inc',
    domain: 'lightup.ai',
  },
  {
    name: 'Lance CPA Group',
    domain: 'lancecpa.com',
  },
  {
    name: 'Grant Cardone Enterprises',
    domain: 'grantcardone.com',
  },
  {
    name: 'Evermile, Ltd.',
    domain: 'evermile.io',
  },
  {
    name: 'badpixel, Inc.',
    domain: 'badpixel.io',
  },
  {
    name: 'Cambrionix Ltd',
    domain: 'cambrionix.com',
  },
  {
    name: 'Onik Lab LTD',
    domain: 'oniklab.com',
  },
  {
    name: 'Atostek',
    domain: 'atostek.com',
  },
  {
    name: 'Ravyn',
    domain: 'ravyn.app',
  },
  {
    name: 'Cutter Consulting Group',
    domain: 'cutterconsultinggroup.com',
  },
  {
    name: 'SearchPilot',
    domain: 'searchpilot.com',
  },
  {
    name: 'Aigent',
    domain: 'aigent.ai',
  },
  {
    name: 'Kochava',
    domain: 'kochava.com',
  },
  {
    name: 'LQ Digital',
    domain: 'lqdigital.com',
  },
  {
    name: 'Lendflow',
    domain: 'lendflow.com',
  },
  {
    name: 'Redkik',
    domain: 'redkik.com',
  },
  {
    name: 'Sergey Plotnikov (Crossbeam)',
    domain: 'sergeyplotnikov.com',
  },
  {
    name: 'Infometry Inc.',
    domain: 'infometry.net',
  },
  {
    name: 'Sur.la.Maison',
    domain: 'surlamaison.co.uk',
  },
  {
    name: 'Nia',
    domain: 'nia.tech',
  },
  {
    name: 'Epinova AB',
    domain: 'epinova.se',
  },
  {
    name: 'Project36',
    domain: 'project36.io',
  },
  {
    name: 'MerlynMind',
    domain: 'merlyn.org',
  },
  {
    name: 'Kinde',
    domain: 'kinde.com',
  },
  {
    name: 'Derivative Path',
    domain: 'derivativepath.com',
  },
  {
    name: 'Venerate Media Group',
    domain: 'veneratedigital.com',
  },
  {
    name: 'Foxen',
    domain: 'foxen.com',
  },
  {
    name: 'Returnalyze, Inc.',
    domain: 'returnalyze.com',
  },
  {
    name: 'Gorgias',
    domain: 'gorgias.com',
  },
  {
    name: 'Business Systems Limited',
    domain: 'bslgroup.com',
  },
  {
    name: 'BeanStock Ventures',
    domain: 'beanstockventures.com',
  },
  {
    name: 'ServeYou AB',
    domain: 'serveyou.se',
  },
  {
    name: 'ShipCalm',
    domain: 'shipcalm.com',
  },
  {
    name: 'DataDrive',
    domain: 'godatadrive.com',
  },
  {
    name: '2Win!',
    domain: '2winglobal.com',
  },
  {
    name: 'Shop Circle',
    domain: 'shopcircle.co',
  },
  {
    name: 'Incrementum Digital',
    domain: 'incrementumdigital.com',
  },
  {
    name: 'Ultra Commerce',
    domain: 'ultracommerce.co',
  },
  {
    name: 'Wave Representatives',
    domain: 'wavereps.com',
  },
  {
    name: 'Carrum Health',
    domain: 'carrumhealth.com',
  },
  {
    name: 'COZMOX',
    domain: 'cozmox.com',
  },
  {
    name: 'AddShoppers Inc.',
    domain: 'addshoppers.com',
  },
  {
    name: 'Drinkubator',
    domain: 'drinkubator.com',
  },
  {
    name: 'Oort',
    domain: 'oort.io',
  },
  {
    name: 'Attest',
    domain: 'askattest.com',
  },
  {
    name: 'Alloy Automation',
    domain: 'runalloy.com',
  },
  {
    name: 'Exafort, Inc.',
    domain: 'exafort.com',
  },
  {
    name: '29 Next',
    domain: '29next.com',
  },
  {
    name: 'Ledgy',
    domain: 'ledgy.com',
  },
  {
    name: 'deepset GmbH',
    domain: 'deepset.ai',
  },
  {
    name: 'Jangl',
    domain: 'jangl.com',
  },
  {
    name: 'Anglepoint',
    domain: 'anglepoint.com',
  },
  {
    name: 'JobCase',
    domain: 'jobcase.com',
  },
  {
    name: 'ArgonDigital',
    domain: 'argondigital.com',
  },
  {
    name: 'Air',
    domain: 'air.inc',
  },
  {
    name: 'Arnett Evans and Company',
    domain: 'arnettevans.com',
  },
  {
    name: 'CostCertified',
    domain: 'costcertified.com',
  },
  {
    name: 'AllCloud',
    domain: 'allcloud.io',
  },
  {
    name: 'Toppan Digital Language',
    domain: 'toppandigital.com',
  },
  {
    name: 'Archive',
    domain: 'archive.com',
  },
  {
    name: 'TalentQuest',
    domain: 'talentquest.com',
  },
  {
    name: 'Sercante',
    domain: 'sercante.com',
  },
  {
    name: 'Epicor',
    domain: 'epicor.com',
  },
  {
    name: 'CDXP me Ltd',
    domain: 'cdxp.me',
  },
  {
    name: 'LeadPilot',
    domain: 'leadpilot.com',
  },
  {
    name: 'Amazon Freight',
    domain: 'freight.amazon.com',
  },
  {
    name: 'Viddy, Inc',
    domain: 'viddyapp.io',
  },
  {
    name: 'FinListics Solutions',
    domain: 'finlistics.com',
  },
  {
    name: 'PC Bennett Solutions',
    domain: 'pcbennett.com',
  },
  {
    name: 'meetsocial',
    domain: 'meetsocial.com',
  },
  {
    name: 'CENTRL',
    domain: 'oncentrl.com',
  },
  {
    name: 'Upyield',
    domain: 'upyield.io',
  },
  {
    name: 'GroWrk Remote',
    domain: 'growrk.com',
  },
  {
    name: 'LegitScript',
    domain: 'legitscript.com',
  },
  {
    name: 'Butlr',
    domain: 'butlr.io',
  },
  {
    name: 'The Commerce Team',
    domain: 'thecommerceteam.com',
  },
  {
    name: 'RevOps',
    domain: 'revops.io',
  },
  {
    name: 'Paragone.ai',
    domain: 'paragone.ai',
  },
  {
    name: 'Singletrack Limited',
    domain: 'singletrack.com',
  },
  {
    name: 'RTB House',
    domain: 'rtbhouse.com',
  },
  {
    name: 'On Deck',
    domain: 'beondeck.com',
  },
  {
    name: 'Viafoura Inc.',
    domain: 'viafoura.com',
  },
  {
    name: 'HyperCurrent',
    domain: 'hypercurrent.io',
  },
  {
    name: 'Kodella',
    domain: 'kodella.com',
  },
  {
    name: 'Otter.ai',
    domain: 'otter.ai',
  },
  {
    name: 'Accountor Finago',
    domain: 'finago.com',
  },
  {
    name: 'ISI-COM',
    domain: 'isi-com.com',
  },
  {
    name: 'Modjo',
    domain: 'modjo.ai',
  },
  {
    name: 'Clients First Business Solutions',
    domain: 'cfbs-us.com',
  },
  {
    name: 'AIM Forecasting',
    domain: 'aimforecasting.com',
  },
  {
    name: 'Lockstep',
    domain: 'lockstep.io',
  },
  {
    name: 'GoCo.io',
    domain: 'goco.io',
  },
  {
    name: 'Omnizant',
    domain: 'omnizant.com',
  },
  {
    name: 'FitPros',
    domain: 'fitpros.com',
  },
  {
    name: 'Triniteq',
    domain: 'triniteq.com',
  },
  {
    name: 'Sabio',
    domain: 'sabio.inc',
  },
  {
    name: 'MulticoreWare',
    domain: 'multicorewareinc.com',
  },
  {
    name: 'Learnster',
    domain: 'learnster.com',
  },
  {
    name: 'Soapbox',
    domain: 'soap-bx.com',
  },
  {
    name: 'Evestar',
    domain: 'evestar.com',
  },
  {
    name: 'Me. Who Me?',
    domain: 'mewho.me',
  },
  {
    name: '포에스텍',
    domain: 'sodrive.co.kr',
  },
  {
    name: 'GatedContent.com',
    domain: 'gatedcontent.com',
  },
  {
    name: 'Adaptavist',
    domain: 'adaptavist.com',
  },
  {
    name: 'BeLazy',
    domain: 'belazy.cat',
  },
  {
    name: 'RepSpark',
    domain: 'repspark.com',
  },
  {
    name: 'Artifax',
    domain: 'artifax.com',
  },
  {
    name: 'Uplinq',
    domain: 'uplinq.co',
  },
  {
    name: 'Adthena',
    domain: 'adthena.com',
  },
  {
    name: 'EDRAY',
    domain: 'edray.com',
  },
  {
    name: 'Proof',
    domain: 'proofserve.com',
  },
  {
    name: 'WireWheel',
    domain: 'wirewheel.io',
  },
  {
    name: 'Datateer',
    domain: 'datateer.com',
  },
  {
    name: 'TalentReef',
    domain: 'talentreef.com',
  },
  {
    name: 'Demio',
    domain: 'demio.com',
  },
  {
    name: 'Invoiced',
    domain: 'invoiced.com',
  },
  {
    name: 'Life Science Outsourcing,',
    domain: 'lso-inc.com',
  },
  {
    name: 'Informatica',
    domain: 'informatica.com',
  },
  {
    name: 'Argyle',
    domain: 'argyle.com',
  },
  {
    name: 'Coastal Cloud',
    domain: 'coastalcloud.us',
  },
  {
    name: 'ERPA',
    domain: 'erpa.com',
  },
  {
    name: 'CyberSaint Security',
    domain: 'cybersaint.io',
  },
  {
    name: 'CloudTech NZ',
    domain: 'cloudtech.co.nz',
  },
  {
    name: 'Kona',
    domain: 'heykona.com',
  },
  {
    name: 'Intellias',
    domain: 'intellias.com',
  },
  {
    name: 'SKUTOPIA',
    domain: 'skutopia.com',
  },
  {
    name: 'BidShake',
    domain: 'bidshake.com',
  },
  {
    name: 'Grux',
    domain: 'grux.digital',
  },
  {
    name: 'Infobip',
    domain: 'infobip.com',
  },
  {
    name: 'Salt Flats LLC',
    domain: 'saltflats.co',
  },
  {
    name: 'Stacks',
    domain: 'stacksteam.com',
  },
  {
    name: 'Tenant',
    domain: 'tenantinc.com',
  },
  {
    name: 'Faye',
    domain: 'fayedigital.com',
  },
  {
    name: 'Portal Warehousing',
    domain: 'join-portal.com',
  },
  {
    name: 'Blaze',
    domain: 'blaze.tech',
  },
  {
    name: 'Cargo Chief',
    domain: 'cargochief.com',
  },
  {
    name: 'Moken Group',
    domain: 'mokengroup.com',
  },
  {
    name: 'Sunrise Integration',
    domain: 'sunriseintegration.com',
  },
  {
    name: 'Xzito',
    domain: 'xzito.com',
  },
  {
    name: 'CustomerGlu',
    domain: 'customerglu.com',
  },
  {
    name: 'World Trade Center Utah',
    domain: 'wtcutah.com',
  },
  {
    name: 'Northbeam',
    domain: 'northbeam.io',
  },
  {
    name: 'WunderGraph',
    domain: 'wundergraph.com',
  },
  {
    name: 'Yoxel, Inc.',
    domain: 'aurinko.io',
  },
  {
    name: 'Advanced Supply Chain Group',
    domain: 'advancedsupplychain.com',
  },
  {
    name: 'Aerospike',
    domain: 'aerospike.com',
  },
  {
    name: 'Webkul',
    domain: 'webkul.com',
  },
  {
    name: 'Fēnom Digital',
    domain: 'fenomdigital.com',
  },
  {
    name: 'Workvivo',
    domain: 'workvivo.com',
  },
  {
    name: 'PieEye',
    domain: 'pii.ai',
  },
  {
    name: 'Cloudi-Fi',
    domain: 'cloudi-fi.com',
  },
  {
    name: 'Braavo Capital',
    domain: 'getbraavo.com',
  },
  {
    name: 'eTrac Technologies',
    domain: 'etractechnologies.com',
  },
  {
    name: 'Brilliant',
    domain: 'brilliantmade.com',
  },
  {
    name: 'CommentSold',
    domain: 'commentsold.com',
  },
  {
    name: 'CoachIT',
    domain: 'coachit.com.br',
  },
  {
    name: 'Synerion',
    domain: 'synerion.com',
  },
  {
    name: 'Kellton Tech Solutions Limited',
    domain: 'kellton.com',
  },
  {
    name: 'Channelnomics',
    domain: 'channelnomics.com',
  },
  {
    name: 'Salesforce Ventures',
    domain: 'salesforceventures.com',
  },
  {
    name: 'Virsys12',
    domain: 'virsys12.com',
  },
  {
    name: 'Kate DiLeo Branding',
    domain: 'katedileo.com',
  },
  {
    name: 'Grepsr',
    domain: 'grepsr.com',
  },
  {
    name: 'Cynoteck Technology Solutions',
    domain: 'cynoteck.com',
  },
  {
    name: 'DMSi',
    domain: 'dmsi.com',
  },
  {
    name: 'Enlyft - Sales & Marketing Intelligence',
    domain: 'enlyft.com',
  },
  {
    name: 'TopFunnel',
    domain: 'topfunnel.com',
  },
  {
    name: 'Verdata',
    domain: 'verdata.com',
  },
  {
    name: 'Zivver',
    domain: 'zivver.com',
  },
  {
    name: 'Pulselive',
    domain: 'pulselive.com',
  },
  {
    name: 'Speakfully',
    domain: 'speakfully.com',
  },
  {
    name: 'Cogniteev',
    domain: 'cogniteev.com',
  },
  {
    name: '&Open',
    domain: 'andopen.co',
  },
  {
    name: 'Centra',
    domain: 'centra.com',
  },
  {
    name: 'Loop54',
    domain: 'loop54.com',
  },
  {
    name: 'Genius Monkey',
    domain: 'geniusmonkey.com',
  },
  {
    name: 'Code',
    domain: 'codecorp.com',
  },
  {
    name: 'Avensia',
    domain: 'avensia.com',
  },
  {
    name: 'diva-e',
    domain: 'diva-e.com',
  },
  {
    name: 'Feedzai',
    domain: 'feedzai.com',
  },
  {
    name: 'Eigen Technologies',
    domain: 'eigentech.com',
  },
  {
    name: 'Apicbase',
    domain: 'apicbase.com',
  },
  {
    name: 'Incentivio',
    domain: 'incentivio.com',
  },
  {
    name: 'Recuro',
    domain: 'recuro.io',
  },
  {
    name: 'ITSRAPID',
    domain: 'itsrapid.io',
  },
  {
    name: 'Credly',
    domain: 'credly.com',
  },
  {
    name: 'Dispatch Integration',
    domain: 'dispatchintegration.com',
  },
  {
    name: 'Blend360',
    domain: 'blend360.com',
  },
  {
    name: 'GoDysh',
    domain: 'godysh.com',
  },
  {
    name: 'DQE Software',
    domain: 'dqe.tech',
  },
  {
    name: 'Skywares LLC',
    domain: 'skywares-llc.dmc-microsite.com',
  },
  {
    name: 'Megantic',
    domain: 'megantic.com.au',
  },
  {
    name: 'Retently',
    domain: 'retently.com',
  },
  {
    name: 'Recurly',
    domain: 'recurly.com',
  },
  {
    name: 'TeChat',
    domain: 'techat.com.br',
  },
  {
    name: 'NU Technology',
    domain: 'nutechnologyinc.com',
  },
  {
    name: 'NETFORMIC GmbH',
    domain: 'netformic.com',
  },
  {
    name: 'Formidable',
    domain: 'formidable.com',
  },
  {
    name: 'QWASI Technology',
    domain: 'qwasi.com',
  },
  {
    name: 'Digital Reach Online Solutions',
    domain: 'digitalreachos.com',
  },
  {
    name: 'Notable Growth',
    domain: 'notablegrowth.com',
  },
  {
    name: 'Molly Duggan Associates',
    domain: 'mollyduggan.com',
  },
  {
    name: 'Sybill',
    domain: 'sybill.ai',
  },
  {
    name: 'Beam Mobile',
    domain: 'beam-mobile.com',
  },
  {
    name: 'Kargo',
    domain: 'kargo.com',
  },
  {
    name: 'Hacket Cyber',
    domain: 'hacketcyber.com',
  },
  {
    name: 'Ocurate',
    domain: 'ocurate.com',
  },
  {
    name: 'Hot Dog Digital',
    domain: 'hotdogdigital.co.uk',
  },
  {
    name: 'Insightly',
    domain: 'insightly.com',
  },
  {
    name: 'Striim',
    domain: 'striim.com',
  },
  {
    name: 'Apphud',
    domain: 'apphud.com',
  },
  {
    name: 'Leap',
    domain: 'leapinc.com',
  },
  {
    name: 'Jabmo',
    domain: 'jabmo.com',
  },
  {
    name: 'Otter',
    domain: 'tryotter.com',
  },
  {
    name: 'Oscilar',
    domain: 'oscilar.com',
  },
  {
    name: 'Showell OY',
    domain: 'showell.com',
  },
  {
    name: 'Prometric',
    domain: 'prometric.com',
  },
  {
    name: 'We Are TCX, LLC (TCX)',
    domain: 'wearetcx.com',
  },
  {
    name: 'Vectra AI',
    domain: 'vectra.ai',
  },
  {
    name: 'Burkland',
    domain: 'burklandassociates.com',
  },
  {
    name: 'BoxC',
    domain: 'boxc.com',
  },
  {
    name: 'Coherent Capital Advisors Limited',
    domain: 'coherent.global',
  },
  {
    name: 'Lumos',
    domain: 'lumos.com',
  },
  {
    name: 'E-goi',
    domain: 'e-goi.com',
  },
  {
    name: 'ca',
    domain: 'ca.io',
  },
  {
    name: 'Rho Business Banking',
    domain: 'rho.co',
  },
  {
    name: 'Mozart Data',
    domain: 'mozartdata.com',
  },
  {
    name: 'Sophos Solutions',
    domain: 'sophossolutions.com',
  },
  {
    name: 'Expivi',
    domain: 'expivi.com',
  },
  {
    name: 'Immersa',
    domain: 'immersa.ai',
  },
  {
    name: 'Questionmark',
    domain: 'questionmark.com',
  },
  {
    name: 'Highway App, Inc',
    domain: 'gohighway.com',
  },
  {
    name: 'GRETRIX',
    domain: 'gretrix.com',
  },
  {
    name: 'Settly',
    domain: 'getsettly.com',
  },
  {
    name: 'Starburst',
    domain: 'starburst.io',
  },
  {
    name: 'Xiatech',
    domain: 'xiatech.co.uk',
  },
  {
    name: 'Bosasi Technologies (Pty) Ltd',
    domain: 'bosasitechnologies.com',
  },
  {
    name: 'Körber Supply Chain',
    domain: 'koerber-supplychain.com',
  },
  {
    name: 'Ceros',
    domain: 'ceros.com',
  },
  {
    name: 'ResellerRatings',
    domain: 'resellerratings.com',
  },
  {
    name: 'Mapped',
    domain: 'mapped.com',
  },
  {
    name: 'Alex Solutions',
    domain: 'alexsolutions.com.au',
  },
  {
    name: 'Vecton',
    domain: 'vecton.pl',
  },
  {
    name: 'Remerge',
    domain: 'remerge.io',
  },
  {
    name: 'Aidetic',
    domain: 'aidetic.in',
  },
  {
    name: 'Moovly',
    domain: 'moovly.com',
  },
  {
    name: 'Noms',
    domain: 'getnoms.com',
  },
  {
    name: 'Point of Reference',
    domain: 'point-of-reference.com',
  },
  {
    name: 'Olive',
    domain: 'shopolive.com',
  },
  {
    name: 'PingCAP',
    domain: 'pingcap.com',
  },
  {
    name: 'Nimbla',
    domain: 'nimbla.com',
  },
  {
    name: 'BigR.io',
    domain: 'bigr.io',
  },
  {
    name: 'Como',
    domain: 'como.com',
  },
  {
    name: 'Gradient Works',
    domain: 'gradient.works',
  },
  {
    name: 'Growth Genie',
    domain: 'growthgenie.co',
  },
  {
    name: 'Riskified',
    domain: 'riskified.com',
  },
  {
    name: 'Inventory Planner',
    domain: 'inventory-planner.com',
  },
  {
    name: 'CloudPay',
    domain: 'cloudpay.com',
  },
  {
    name: 'Ironclad',
    domain: 'ironcladapp.com',
  },
  {
    name: 'Watershed Informatics',
    domain: 'watershed.ai',
  },
  {
    name: 'Onro',
    domain: 'onro.io',
  },
  {
    name: 'slippy',
    domain: 'slippy.io',
  },
  {
    name: 'B2B Fusion',
    domain: 'b2bfusiongroup.com',
  },
  {
    name: 'Luxer One',
    domain: 'luxerone.com',
  },
  {
    name: 'myComply',
    domain: 'mycomply.net',
  },
  {
    name: 'GCPay',
    domain: 'gcpay.com',
  },
  {
    name: 'Co-Active Training Institute',
    domain: 'coactive.com',
  },
  {
    name: 'Friendbuy',
    domain: 'friendbuy.com',
  },
  {
    name: 'ORBITVU-USA',
    domain: 'orbitvuusa.com',
  },
  {
    name: 'Plative',
    domain: 'plative.com',
  },
  {
    name: 'Lumen Technologies',
    domain: 'lumen.com',
  },
  {
    name: 'ReConvert',
    domain: 'reconvert.io',
  },
  {
    name: 'Admetrics',
    domain: 'admetrics.io',
  },
  {
    name: 'Octane11',
    domain: 'octane11.com',
  },
  {
    name: 'JupiterOne',
    domain: 'jupiterone.com',
  },
  {
    name: 'IRIS CRM',
    domain: 'iriscrm.com',
  },
  {
    name: 'Inbox Monster',
    domain: 'inboxmonster.com',
  },
  {
    name: 'Straight Up Growth',
    domain: 'straightupgrowth.com',
  },
  {
    name: 'Accord',
    domain: 'inaccord.com',
  },
  {
    name: 'Decile LLC',
    domain: 'decile.com',
  },
  {
    name: 'Heretto',
    domain: 'heretto.com',
  },
  {
    name: 'Netrush',
    domain: 'netrush.com',
  },
  {
    name: 'Owler',
    domain: 'owler.com',
  },
  {
    name: 'Motion2Ai',
    domain: 'motion2ai.com',
  },
  {
    name: 'The Event Nerd',
    domain: 'theeventnerd.com',
  },
  {
    name: 'Alveo',
    domain: 'alveotech.com',
  },
  {
    name: 'Retention Machine',
    domain: 'retentionmachine.io',
  },
  {
    name: 'Redforester',
    domain: 'redforester.com',
  },
  {
    name: 'Time Miner',
    domain: 'timeminer.com',
  },
  {
    name: 'Workteam',
    domain: 'workte.am',
  },
  {
    name: 'ManagementPro',
    domain: 'mproerp.com',
  },
  {
    name: 'OfferFit, Inc.',
    domain: 'offerfit.ai',
  },
  {
    name: 'Motifworks',
    domain: 'motifworks.com',
  },
  {
    name: 'Client Savvy',
    domain: 'clientsavvy.com',
  },
  {
    name: 'ledgible',
    domain: 'ledgible.io',
  },
  {
    name: 'Stock Trim',
    domain: 'stocktrim.com',
  },
  {
    name: 'HyperSocial',
    domain: 'gohypersocial.com',
  },
  {
    name: 'Stensul',
    domain: 'stensul.com',
  },
  {
    name: 'ComplyAdvantage',
    domain: 'complyadvantage.com',
  },
  {
    name: 'Aircall',
    domain: 'aircall.io',
  },
  {
    name: 'OrderProtection.com',
    domain: 'orderprotection.com',
  },
  {
    name: 'Checkr',
    domain: 'checkr.com',
  },
  {
    name: 'FactoryTen',
    domain: 'factoryten.com',
  },
  {
    name: 'Optimal Access, Inc.',
    domain: 'optimalaccess.com',
  },
  {
    name: 'Findr',
    domain: 'findr.global',
  },
  {
    name: 'Apogee Agency',
    domain: 'apogeeagency.com',
  },
  {
    name: 'Boostlingo',
    domain: 'boostlingo.com',
  },
  {
    name: 'Zweig Group',
    domain: 'zweiggroup.com',
  },
  {
    name: 'Agile Digital Marketing',
    domain: 'agiledigitalmktg.com',
  },
  {
    name: 'DigitalRoute',
    domain: 'digitalroute.com',
  },
  {
    name: 'Monit',
    domain: 'monitapp.io',
  },
  {
    name: 'ViiBE Communication',
    domain: 'viibe.co',
  },
  {
    name: 'SparkLearn',
    domain: 'sparklearn.com',
  },
  {
    name: 'CV-Library',
    domain: 'cv-library.co.uk',
  },
  {
    name: 'Station10',
    domain: 'station10.co.uk',
  },
  {
    name: 'Switcher Studio',
    domain: 'switcherstudio.com',
  },
  {
    name: 'Criterion HCM',
    domain: 'criterionhcm.com',
  },
  {
    name: 'Gravity Forms',
    domain: 'gravityforms.com',
  },
  {
    name: 'X Innovation Lab',
    domain: 'xinnovationlab.com',
  },
  {
    name: 'Vantiq',
    domain: 'vantiq.com',
  },
  {
    name: 'Cloudely',
    domain: 'cloudely.com',
  },
  {
    name: 'Shuttlerock',
    domain: 'shuttlerock.com',
  },
  {
    name: 'learningninjas',
    domain: 'learningninjas.com',
  },
  {
    name: 'Spear Growth',
    domain: 'speargrowth.com',
  },
  {
    name: 'SEON',
    domain: 'seon.io',
  },
  {
    name: 'Cassovia Code',
    domain: 'cassoviacode.sk',
  },
  {
    name: 'UnDigital',
    domain: 'undigital.com',
  },
  {
    name: 'Dor',
    domain: 'getdor.com',
  },
  {
    name: 'Scribeless',
    domain: 'scribeless.co',
  },
  {
    name: 'Orca Security',
    domain: 'orca.security',
  },
  {
    name: 'Quantum-h',
    domain: 'quantum-h.com',
  },
  {
    name: 'Optimizon',
    domain: 'optimizon.co.uk',
  },
  {
    name: 'Ombud',
    domain: 'ombud.com',
  },
  {
    name: 'Blings',
    domain: 'blings.io',
  },
  {
    name: 'TechMobius',
    domain: 'techmobius.com',
  },
  {
    name: 'Tovuti',
    domain: 'tovutilms.com',
  },
  {
    name: 'apexanalytix',
    domain: 'apexanalytix.com',
  },
  {
    name: 'Zapproved',
    domain: 'zapproved.com',
  },
  {
    name: 'Perdl',
    domain: 'perdl.com',
  },
  {
    name: 'Crisp',
    domain: 'gocrisp.com',
  },
  {
    name: 'PAPE',
    domain: 'sonofapape.com',
  },
  {
    name: 'WALTLabs.io',
    domain: 'waltlabs.io',
  },
  {
    name: 'Scanco Software',
    domain: 'scanco.com',
  },
  {
    name: 'Talroo',
    domain: 'talroo.com',
  },
  {
    name: 'dentsu',
    domain: 'dentsu.com',
  },
  {
    name: 'Canto',
    domain: 'canto.com',
  },
  {
    name: 'Sweepsify',
    domain: 'sweepsify.com',
  },
  {
    name: 'QuoLab Technologies, Inc.',
    domain: 'quolab.com',
  },
  {
    name: 'Raisely',
    domain: 'raisely.com',
  },
  {
    name: 'Sunrun',
    domain: 'sunrun.com',
  },
  {
    name: 'MishiPay',
    domain: 'mishipay.com',
  },
  {
    name: 'Code Climate',
    domain: 'codeclimate.com',
  },
  {
    name: 'Echidna',
    domain: 'echidna.co',
  },
  {
    name: 'CJ Affiliate',
    domain: 'cj.com',
  },
  {
    name: 'QPR Software Plc',
    domain: 'qpr.com',
  },
  {
    name: 'Docyt',
    domain: 'docyt.com',
  },
  {
    name: 'Spoiler Alert',
    domain: 'spoileralert.com',
  },
  {
    name: 'Chamaileon',
    domain: 'chamaileon.io',
  },
  {
    name: 'Partnership Leaders',
    domain: 'partnershipleaders.com',
  },
  {
    name: 'Clever Real Estate',
    domain: 'listwithclever.com',
  },
  {
    name: 'SITA',
    domain: 'sita.aero',
  },
  {
    name: 'CloudWerx',
    domain: 'cloudwerx.tech',
  },
  {
    name: 'Ethena',
    domain: 'goethena.com',
  },
  {
    name: 'MOVUS FitMachine',
    domain: 'fitmachine.com',
  },
  {
    name: 'Absolute Design',
    domain: 'absolute-design.co.uk',
  },
  {
    name: 'The Scalelab',
    domain: 'thescalelab.com',
  },
  {
    name: 'Bitwave',
    domain: 'bitwave.io',
  },
  {
    name: 'Aquient',
    domain: 'aquient.asia',
  },
  {
    name: 'Creatively Squared',
    domain: 'creativelysquared.com',
  },
  {
    name: 'Wayflyer',
    domain: 'wayflyer.com',
  },
  {
    name: 'Group Futurista',
    domain: 'groupfuturista.com',
  },
  {
    name: 'Apploi',
    domain: 'apploi.com',
  },
  {
    name: 'Mothership',
    domain: 'mothership.com',
  },
  {
    name: 'Sequoia Capital',
    domain: 'sequoiacap.com',
  },
  {
    name: 'saasui',
    domain: 'saasui.design',
  },
  {
    name: 'Daily',
    domain: 'daily.co',
  },
  {
    name: 'ProspectSoft',
    domain: 'prospectsoft.com',
  },
  {
    name: 'Donnawhitney',
    domain: 'donnawhitney.com',
  },
  {
    name: 'Optima Solutions',
    domain: 'optimasolutions.io',
  },
  {
    name: 'eComplete',
    domain: 'ecomplete.co.za',
  },
  {
    name: 'OfferZen',
    domain: 'offerzen.com',
  },
  {
    name: 'Force24 Ltd',
    domain: 'force24.co.uk',
  },
  {
    name: 'renovai',
    domain: 'renovai.com',
  },
  {
    name: 'Intuitive Solutions',
    domain: 'intuitive.solutions',
  },
  {
    name: '360 Destination Group',
    domain: '360dg.com',
  },
  {
    name: 'MagicRobot',
    domain: 'magicrobot.com',
  },
  {
    name: 'eStar',
    domain: 'estaronline.com',
  },
  {
    name: 'JamLoop',
    domain: 'jamloop.com',
  },
  {
    name: 'BoomPop',
    domain: 'boompop.com',
  },
  {
    name: 'Word of Mouth Digital',
    domain: 'wordofmouth.digital',
  },
  {
    name: 'HomeScreen',
    domain: 'myhomescreen.org',
  },
  {
    name: 'Sifted',
    domain: 'sifted.com',
  },
  {
    name: 'Fuelled',
    domain: 'fuelledgroup.com',
  },
  {
    name: 'Gander',
    domain: 'gogander.io',
  },
  {
    name: 'Anvyl',
    domain: 'anvyl.com',
  },
  {
    name: 'Snappy Gifts',
    domain: 'meetsnappy.com',
  },
  {
    name: 'Hitachi Vantara',
    domain: 'hds.co',
  },
  {
    name: 'Puzzel',
    domain: 'puzzel.com',
  },
  {
    name: 'JPL Solutions',
    domain: 'jplsolutions.ca',
  },
  {
    name: 'journy.io',
    domain: 'journy.io',
  },
  {
    name: 'Sensepass',
    domain: 'sensepass.com',
  },
  {
    name: 'Planit',
    domain: 'planit.co.uk',
  },
  {
    name: 'Umanize',
    domain: 'umanize.com',
  },
  {
    name: 'EnderTuring',
    domain: 'enderturing.com',
  },
  {
    name: 'Cassia Content Management',
    domain: 'cassiacm.com',
  },
  {
    name: 'TinyWhale Platforms Inc',
    domain: 'tinywhale.com',
  },
  {
    name: 'Commvault',
    domain: 'commvault.com',
  },
  {
    name: 'PlainID',
    domain: 'plainid.com',
  },
  {
    name: 'Olist',
    domain: 'olist.com',
  },
  {
    name: 'Rendr',
    domain: 'rendr.delivery',
  },
  {
    name: 'Roadflex',
    domain: 'roadflex.com',
  },
  {
    name: 'Buildkite',
    domain: 'buildkite.com',
  },
  {
    name: 'Data Cubed Limited',
    domain: 'datacubed.nz',
  },
  {
    name: 'Apptio',
    domain: 'apptio.com',
  },
  {
    name: 'Tier One Analytics',
    domain: 't1a.com',
  },
  {
    name: 'Ori Industries',
    domain: 'ori.co',
  },
  {
    name: 'Avenu Insights & Analytics',
    domain: 'avenuinsights.com',
  },
  {
    name: 'Fourthline',
    domain: 'fourthline.com',
  },
  {
    name: 'Revedy',
    domain: 'revedy.com',
  },
  {
    name: 'Fulfillrite',
    domain: 'fulfillrite.com',
  },
  {
    name: 'ForumPay',
    domain: 'forumpay.com',
  },
  {
    name: 'MyLime',
    domain: 'my-lime.com',
  },
  {
    name: 'Appfire',
    domain: 'appfire.com',
  },
  {
    name: 'Enrollme by SureCo',
    domain: 'enrollme.health',
  },
  {
    name: 'Sherwin-Williams',
    domain: 'sherwin-williams.com',
  },
  {
    name: 'Orion Global Managed Services',
    domain: 'orion247.com',
  },
  {
    name: 'Gantek Teknoloji A.S.',
    domain: 'gantek.com',
  },
  {
    name: 'Unic GmbH, Karlsruhe',
    domain: 'unic.com',
  },
  {
    name: 'Tandym',
    domain: 'bytandym.com',
  },
  {
    name: 'LUX interactive',
    domain: 'luxinteractive.com',
  },
  {
    name: 'Mamenta',
    domain: 'mamenta.com',
  },
  {
    name: 'Ranosys',
    domain: 'ranosys.com',
  },
  {
    name: 'Appmaker',
    domain: 'appmaker.xyz',
  },
  {
    name: 'Airhouse',
    domain: 'airhouse.io',
  },
  {
    name: 'Miles Partnership',
    domain: 'milespartnership.com',
  },
  {
    name: 'Pfenning Group, LLC',
    domain: 'pfenninggroup.com',
  },
  {
    name: 'Base Element',
    domain: 'baseelement.digital',
  },
  {
    name: 'Allthings Technologies GmbH',
    domain: 'allthings.me',
  },
  {
    name: 'Hybrid Revenues',
    domain: 'hybridrevenues.com',
  },
  {
    name: 'Rybbon',
    domain: 'rybbon.net',
  },
  {
    name: 'Employment Hero',
    domain: 'employmenthero.com',
  },
  {
    name: 'Civic Data',
    domain: 'civicdata.com.au',
  },
  {
    name: 'Atturra',
    domain: 'atturra.com',
  },
  {
    name: 'Milestone',
    domain: 'milestoneinternet.com',
  },
  {
    name: 'Solo Network',
    domain: 'solonetwork.com.br',
  },
  {
    name: 'CH Group',
    domain: 'chgroupus.com',
  },
  {
    name: 'Revenue Dynamics',
    domain: 'revenuedynamics.io',
  },
  {
    name: 'Riot',
    domain: 'tryriot.com',
  },
  {
    name: 'Run The World',
    domain: 'runtheworld.today',
  },
  {
    name: 'Poplin Data',
    domain: 'poplindata.com',
  },
  {
    name: 'Staxxer',
    domain: 'staxxer.com',
  },
  {
    name: 'GENE',
    domain: 'gene.co.uk',
  },
  {
    name: 'Wayfair',
    domain: 'wayfair.com',
  },
  {
    name: 'Cado Security',
    domain: 'cadosecurity.com',
  },
  {
    name: 'Growann',
    domain: 'growann.com',
  },
  {
    name: 'ORM Technologies',
    domain: 'orm-tech.com',
  },
  {
    name: 'Hub',
    domain: 'hub.inc',
  },
  {
    name: 'Blume Global',
    domain: 'blumeglobal.com',
  },
  {
    name: 'FundThrough',
    domain: 'fundthrough.com',
  },
  {
    name: 'Frequency',
    domain: 'frequencyads.com',
  },
  {
    name: 'DeepStream Technologies',
    domain: 'deep.stream',
  },
  {
    name: 'Wondersign®',
    domain: 'wondersign.com',
  },
  {
    name: 'Decision Foundry',
    domain: 'decisionfoundry.com',
  },
  {
    name: 'Croud',
    domain: 'croud.com',
  },
  {
    name: 'Sweaty Betty',
    domain: 'sweatybetty.com',
  },
  {
    name: 'NFTICALLY',
    domain: 'nftically.com',
  },
  {
    name: 'Windward',
    domain: 'windward.ai',
  },
  {
    name: 'DUNK',
    domain: 'dunk.agency',
  },
  {
    name: 'IVEY',
    domain: 'ivey.ca',
  },
  {
    name: 'Insight Plum',
    domain: 'insightplum.tech',
  },
  {
    name: 'TheMath',
    domain: 'themathcompany.com',
  },
  {
    name: 'LeadSquared',
    domain: 'leadsquared.com',
  },
  {
    name: 'Twice Baked Consulting',
    domain: 'twicebaked.uk',
  },
  {
    name: 'KOIKOI',
    domain: 'koikoi.is',
  },
  {
    name: 'Maiden Century',
    domain: 'maidencentury.com',
  },
  {
    name: 'Powerfront',
    domain: 'powerfront.com',
  },
  {
    name: 'Tanium',
    domain: 'tanium.com',
  },
  {
    name: 'Vesta',
    domain: 'vesta-go.com',
  },
  {
    name: 'Lithic',
    domain: 'lithic.com',
  },
  {
    name: 'TremStack',
    domain: 'tremstack.com',
  },
  {
    name: 'Rush',
    domain: 'rush.app',
  },
  {
    name: 'Happiest Baby',
    domain: 'happiestbaby.com',
  },
  {
    name: 'Graphite Systems',
    domain: 'graphiteconnect.com',
  },
  {
    name: 'Level Access',
    domain: 'levelaccess.com',
  },
  {
    name: 'Jobins',
    domain: 'jobins.jp',
  },
  {
    name: 'Exude',
    domain: 'exudeinc.com',
  },
  {
    name: 'DevCom',
    domain: 'devcom.com',
  },
  {
    name: 'Clanq',
    domain: 'clanq.de',
  },
  {
    name: 'Out2Bound',
    domain: 'out2bound.com',
  },
  {
    name: 'Cevoid',
    domain: 'cevoid.com',
  },
  {
    name: 'Akinon',
    domain: 'akinon.com',
  },
  {
    name: 'Repfabric LLC',
    domain: 'repfabric.com',
  },
  {
    name: 'Syfer Group Srl',
    domain: 'syfer.it',
  },
  {
    name: 'Instant Commerce',
    domain: 'instantcommerce.io',
  },
  {
    name: 'Portnox',
    domain: 'portnox.com',
  },
  {
    name: 'Canidium',
    domain: 'canidium.com',
  },
  {
    name: 'EIZOUK',
    domain: 'eizocolour.com',
  },
  {
    name: 'Behave Health',
    domain: 'behavehealth.com',
  },
  {
    name: 'Workato',
    domain: 'workato.com',
  },
  {
    name: 'VOLLARDIAN',
    domain: 'vollardian.com',
  },
  {
    name: 'Accushield',
    domain: 'accushield.com',
  },
  {
    name: 'Atomic Robot',
    domain: 'atomicrobot.com',
  },
  {
    name: 'CYREBRO',
    domain: 'cyrebro.io',
  },
  {
    name: 'Vidjet',
    domain: 'vidjet.io',
  },
  {
    name: 'Digital Turbine',
    domain: 'digitalturbine.com',
  },
  {
    name: 'Transend360 Group Limited',
    domain: 'transcend-360.com',
  },
  {
    name: 'Viking bodies',
    domain: 'vikingbodies.tv',
  },
  {
    name: 'ClientSuccess',
    domain: 'clientsuccess.com',
  },
  {
    name: 'Zuddl',
    domain: 'zuddl.com',
  },
  {
    name: 'Flike, inc.',
    domain: 'flike.app',
  },
  {
    name: 'Talevation',
    domain: 'talevation.com',
  },
  {
    name: 'Pharmaniaga Logistics Sdn Bhd',
    domain: 'pharmaniaga.com',
  },
  {
    name: 'Material Security',
    domain: 'material.security',
  },
  {
    name: 'Everhour',
    domain: 'everhour.com',
  },
  {
    name: 'Apolinar Ventures Limited',
    domain: 'apolinargroup.com',
  },
  {
    name: 'Radicle \uD83C\uDF31',
    domain: 'radicle.xyz',
  },
  {
    name: 'Cubiscan',
    domain: 'cubiscan.com',
  },
  {
    name: 'Anthem Creative',
    domain: 'anthemcreative.ca',
  },
  {
    name: 'HLL Creative',
    domain: 'hllcreative.com.au',
  },
  {
    name: 'vcita',
    domain: 'vcita.com',
  },
  {
    name: 'Inner Onion',
    domain: 'inneronion.com',
  },
  {
    name: 'Happy Brain Srl',
    domain: 'happybrain.it',
  },
  {
    name: 'Torqued Distribution',
    domain: 'torqueddistribution.com',
  },
  {
    name: 'Arbictus Technologies',
    domain: 'arbictus.eu',
  },
  {
    name: 'MiGym',
    domain: 'migym.com',
  },
  {
    name: 'Shippeo',
    domain: 'shippeo.com',
  },
  {
    name: 'TC Services USA / WOTC.com',
    domain: 'wotc.com',
  },
  {
    name: 'EasyEcom',
    domain: 'easyecom.io',
  },
  {
    name: 'Seedlever',
    domain: 'seedlever.com',
  },
  {
    name: 'Freedman International',
    domain: 'freedmaninternational.com',
  },
  {
    name: 'The Maze Group',
    domain: 'themazegroup.com',
  },
  {
    name: 'Prime Factors',
    domain: 'primefactors.com',
  },
  {
    name: 'ZE PowerGroup Inc.',
    domain: 'ze.com',
  },
  {
    name: 'Big Bang ERP',
    domain: 'bigbang360.com',
  },
  {
    name: 'Eagerly',
    domain: 'eagerly.nl',
  },
  {
    name: 'Merkle Science',
    domain: 'merklescience.com',
  },
  {
    name: 'Hoosier Web Host LLC',
    domain: 'hoosierwebhost.info',
  },
  {
    name: 'WorkFusion',
    domain: 'workfusion.com',
  },
  {
    name: 'ShipBob',
    domain: 'shipbob.com',
  },
  {
    name: 'ysouy',
    domain: 'yisou.com',
  },
  {
    name: 'AdChat.ai - Conversational Ad Platform',
    domain: 'adchat.ai',
  },
  {
    name: 'Madgicx',
    domain: 'madgicx.com',
  },
  {
    name: 'CloudMatos',
    domain: 'cloudmatos.com',
  },
  {
    name: 'Sybersafe, LLC',
    domain: 'dsyfer.com',
  },
  {
    name: 'Media Jet Marketing',
    domain: 'mediajetmarketing.com',
  },
  {
    name: 'ECOMEX NSI',
    domain: 'ecomex.com.br',
  },
  {
    name: 'Market Force Corp.',
    domain: 'marketforcecorp.com',
  },
  {
    name: 'Directus',
    domain: 'directus.io',
  },
  {
    name: 'Asilla,',
    domain: 'asilla.com',
  },
  {
    name: 'Arya.ai',
    domain: 'arya.ai',
  },
  {
    name: 'Reviewbit',
    domain: 'reviewbit.app',
  },
  {
    name: 'Xeerpa',
    domain: 'xeerpa.com',
  },
  {
    name: 'Rannkly',
    domain: 'rannkly.com',
  },
  {
    name: 'NextGen Workforce',
    domain: 'ngworkforce.com',
  },
  {
    name: 'Rdentify',
    domain: 'rdentify.com',
  },
  {
    name: 'Intech Systems',
    domain: 'intech-systems.com',
  },
  {
    name: 'demicon GmbH',
    domain: 'demicon.de',
  },
  {
    name: 'ToneTaneMent Productions LLC',
    domain: 'tonetanement.com',
  },
  {
    name: 'DoubleCheck Research',
    domain: 'doublecheckresearch.com',
  },
  {
    name: 'Almost Digital',
    domain: 'almostdigital.co',
  },
  {
    name: 'Alert Labs',
    domain: 'alertlabs.com',
  },
  {
    name: 'Impressive',
    domain: 'impressivedigital.com.au',
  },
  {
    name: 'Smarter Consulting',
    domain: 'smarter-consulting.com',
  },
  {
    name: 'JotForm',
    domain: 'jotform.com',
  },
  {
    name: 'ElectrifAi',
    domain: 'electrifai.com',
  },
  {
    name: 'Giift',
    domain: 'giift.com',
  },
  {
    name: 'Datumate',
    domain: 'datumate.com',
  },
  {
    name: 'atSistemas',
    domain: 'atsistemas.com',
  },
  {
    name: 'TaxTaker',
    domain: 'taxtaker.com',
  },
  {
    name: 'Pirate Labs',
    domain: 'piratelabs.co',
  },
  {
    name: 'Passport Global',
    domain: 'passportshipping.com',
  },
  {
    name: 'Infinite.pro',
    domain: 'infinite.pro',
  },
  {
    name: 'Lucky Labs',
    domain: 'luckylabs.io',
  },
  {
    name: 'Manifest Commerce',
    domain: 'manifestcommerce.io',
  },
  {
    name: 'Meri App',
    domain: 'meriapp.com',
  },
  {
    name: 'BrasileiroSou',
    domain: 'brasileirosou.com',
  },
  {
    name: 'GuideCX',
    domain: 'guidecx.com',
  },
  {
    name: 'eShop.Services',
    domain: 'eshop.services',
  },
  {
    name: 'Intugine',
    domain: 'intugine.com',
  },
  {
    name: 'Geo Owl',
    domain: 'geoowl.com',
  },
  {
    name: 'Brudam',
    domain: 'brudam.com.br',
  },
  {
    name: 'InkSearch.co',
    domain: 'inksearch.co',
  },
  {
    name: 'Grupo R2D',
    domain: 'grupor2d.com.br',
  },
  {
    name: 'Kargo Commerce',
    domain: 'stitcherads.com',
  },
  {
    name: 'QAD Precision',
    domain: 'precisionsoftware.com',
  },
  {
    name: 'My Office Mein Büro',
    domain: 'myoffice.space',
  },
  {
    name: 'Jinjer',
    domain: 'jinjer.co.jp',
  },
  {
    name: 'Cresta',
    domain: 'cresta.com',
  },
  {
    name: 'Davinci Micro Fulfillment',
    domain: 'davincimicrofulfillment.com',
  },
  {
    name: 'Assure DeFi',
    domain: 'assuredefi.io',
  },
  {
    name: 'AI Responsibility Lab',
    domain: 'takecontrol.ai',
  },
  {
    name: 'Deque Systems',
    domain: 'deque.com',
  },
  {
    name: 'Lavender',
    domain: 'lavender.ai',
  },
  {
    name: 'Dell',
    domain: 'dell.com',
  },
  {
    name: 'Superwall',
    domain: 'superwall.com',
  },
  {
    name: 'Veo',
    domain: 'veo.co',
  },
  {
    name: 'Living Security',
    domain: 'livingsecurity.com',
  },
  {
    name: 'Schrocken',
    domain: 'schrocken.com',
  },
  {
    name: 'KLM Web Solutions LLC',
    domain: 'klmwebsolutions.com',
  },
  {
    name: 'NexSpec',
    domain: 'nexspec.com',
  },
  {
    name: 'humii',
    domain: 'humii.co',
  },
  {
    name: 'CipherStash',
    domain: 'cipherstash.com',
  },
  {
    name: 'Digital BIAS',
    domain: 'biasdigital.com',
  },
  {
    name: 'Repustate',
    domain: 'repustate.com',
  },
  {
    name: 'Altumind',
    domain: 'altumindtech.com',
  },
  {
    name: 'Zai',
    domain: 'hellozai.com',
  },
  {
    name: 'blackwood',
    domain: 'blackwood.ai',
  },
  {
    name: 'EdgeVerve',
    domain: 'edgeverve.com',
  },
  {
    name: 'Becklyn',
    domain: 'becklyn.com',
  },
  {
    name: 'Karmen',
    domain: 'karmen.io',
  },
  {
    name: 'ShipHawk',
    domain: 'shiphawk.com',
  },
  {
    name: 'Theia Strategies',
    domain: 'theiamarketing.com',
  },
  {
    name: 'Givebutter',
    domain: 'givebutter.com',
  },
  {
    name: 'DCKAP',
    domain: 'dckap.com',
  },
  {
    name: 'PARIS Technologies International',
    domain: 'paristech.com',
  },
  {
    name: '3rdwave',
    domain: '3rdwave.co',
  },
  {
    name: 'Together Software',
    domain: 'togetherplatform.com',
  },
  {
    name: 'ProjectionHub',
    domain: 'projectionhub.com',
  },
  {
    name: 'KUMAR Digital Inc.',
    domain: 'kumardigital.xyz',
  },
  {
    name: 'Lionize',
    domain: 'lionize.ai',
  },
  {
    name: 'IronPlane',
    domain: 'ironplane.com',
  },
  {
    name: 'Kinkor Consulting',
    domain: 'kinkorconsulting.com',
  },
  {
    name: 'Burgess Commerce Ltd',
    domain: 'burgesscommerce.com',
  },
  {
    name: 'PowerRouter',
    domain: 'powerrouter.io',
  },
  {
    name: 'Jobox',
    domain: 'jobox.ai',
  },
  {
    name: 'Dr. Integration',
    domain: 'drintegration.co',
  },
  {
    name: 'ACA Reporting Service',
    domain: 'skyinsurancetech.com',
  },
  {
    name: 'Eyeful Presentations',
    domain: 'eyefulpresentations.com',
  },
  {
    name: 'Swoogo',
    domain: 'swoogo.com',
  },
  {
    name: 'JLL',
    domain: 'jll.com',
  },
  {
    name: 'Symend',
    domain: 'symend.com',
  },
  {
    name: 'Kaleidoscope GmbH',
    domain: 'kaleidoscope.at',
  },
  {
    name: 'Anchor Design',
    domain: 'anchordbc.com',
  },
  {
    name: 'CX100',
    domain: 'cx100.com',
  },
  {
    name: 'miniOrange',
    domain: 'miniorange.com',
  },
  {
    name: "It's Us",
    domain: 'itsus.nl',
  },
  {
    name: 'Comtrac',
    domain: 'comtrac.com.au',
  },
  {
    name: 'Hodroj Consulting',
    domain: 'hodroj.net',
  },
  {
    name: 'TheHypeSociety',
    domain: 'thehypesociety.com.au',
  },
  {
    name: 'HR Partner',
    domain: 'hrpartner.io',
  },
  {
    name: 'Arcturus Technologies',
    domain: 'arcturustech.com',
  },
  {
    name: 'Papaya',
    domain: 'papayadash.com',
  },
  {
    name: 'WeDoCRM',
    domain: 'wedocrm.co',
  },
  {
    name: 'empower GmbH',
    domain: 'empowersuite.com',
  },
  {
    name: 'Shopflo',
    domain: 'shopflo.com',
  },
  {
    name: 'Almavia CX',
    domain: 'almaviacx.com',
  },
  {
    name: 'Clickr Media',
    domain: 'clickrmedia.com',
  },
  {
    name: 'Xingu Advertising GmbH',
    domain: 'xingu-ad.com',
  },
  {
    name: 'beehiiv',
    domain: 'beehiiv.com',
  },
  {
    name: 'Aufiero Informática',
    domain: 'aufieroinformatica.com',
  },
  {
    name: 'XAPP AI',
    domain: 'xapp.ai',
  },
  {
    name: 'Sift',
    domain: 'sift.com',
  },
  {
    name: 'MentalHealthHub.com',
    domain: 'mentalhealthhub.com',
  },
  {
    name: 'Kavkom',
    domain: 'kavkom.com',
  },
  {
    name: 'Forward Istanbul',
    domain: 'forwardistanbul.biz',
  },
  {
    name: 'Second Nature',
    domain: 'secondnature.marketing',
  },
  {
    name: 'Flosverse',
    domain: 'flosverse.com',
  },
  {
    name: 'REPLUG - Mobile Growth Agency',
    domain: 'rplg.io',
  },
  {
    name: 'Maze',
    domain: 'maze.co',
  },
  {
    name: 'Fermat',
    domain: 'fermatcommerce.com',
  },
  {
    name: 'Asher Group',
    domain: 'ashergroup.com',
  },
  {
    name: 'Eurotech',
    domain: 'eurotech.com',
  },
  {
    name: 'Agorapulse',
    domain: 'agorapulse.com',
  },
  {
    name: 'InterOperate',
    domain: 'inter-operate.com',
  },
  {
    name: 'HIC Global Solutions',
    domain: 'hicglobalsolutions.com',
  },
  {
    name: 'nextsales',
    domain: 'nextsales.io',
  },
  {
    name: 'letus (formerly Rentmoola)',
    domain: 'let.us',
  },
  {
    name: 'Ryarc Digital',
    domain: 'ryarc.com',
  },
  {
    name: 'Cotera',
    domain: 'cotera.co',
  },
  {
    name: 'Chapter Three',
    domain: 'chapterthree.com',
  },
  {
    name: 'AvidXchange',
    domain: 'avidxchange.com',
  },
  {
    name: 'Vida Health',
    domain: 'vida.com',
  },
  {
    name: 'Postcall',
    domain: 'postcall.io',
  },
  {
    name: 'Foundation Capital',
    domain: 'foundationcapital.com',
  },
  {
    name: 'Rutter',
    domain: 'rutterapi.com',
  },
  {
    name: 'Relo (by Blueprint)',
    domain: 'reloapp.co',
  },
  {
    name: 'Visit',
    domain: 'info.myvisit.io',
  },
  {
    name: 'BORN',
    domain: 'borngroup.com',
  },
  {
    name: 'AffinityX',
    domain: 'affinityx.com',
  },
  {
    name: 'Pughaus',
    domain: 'pug.haus',
  },
  {
    name: 'Aptara',
    domain: 'aptaracorp.com',
  },
  {
    name: 'PLC Doradztwo Informatyczne',
    domain: 'plc-solutions.pl',
  },
  {
    name: 'SellMyThings',
    domain: 'sellmythings.co.uk',
  },
  {
    name: 'RocketShip',
    domain: 'rocketship.today',
  },
  {
    name: 'Validar Inc.',
    domain: 'validar.com',
  },
  {
    name: 'NewsBreak',
    domain: 'newsbreak.com',
  },
  {
    name: 'Vertice',
    domain: 'vertice.one',
  },
  {
    name: 'MonsterConnect',
    domain: 'monsterconnect.com',
  },
  {
    name: 'Resmo',
    domain: 'resmo.com',
  },
  {
    name: 'nk. new communication',
    domain: 'neuekommunikation.de',
  },
  {
    name: 'Mentorly',
    domain: 'mentorly.co',
  },
  {
    name: 'Reload Media',
    domain: 'reloadmedia.com.au',
  },
  {
    name: 'SpotMe',
    domain: 'spotme.com',
  },
  {
    name: 'AXA Venture Partners',
    domain: 'axavp.com',
  },
  {
    name: 'Talos360',
    domain: 'talos360.co.uk',
  },
  {
    name: 'DevSkiller',
    domain: 'devskiller.com',
  },
  {
    name: 'PickyStory',
    domain: 'pickystory.com',
  },
  {
    name: 'Datawords Group',
    domain: 'datawordsgroup.com',
  },
  {
    name: 'Sana Commerce',
    domain: 'sana-commerce.com',
  },
  {
    name: 'Checkout Promotions',
    domain: 'checkoutpromotions.com',
  },
  {
    name: 'CredEvolv',
    domain: 'credevolv.com',
  },
  {
    name: 'The Total Mindset',
    domain: 'thetotalmindset.com',
  },
  {
    name: 'QuickNode',
    domain: 'quicknode.com',
  },
  {
    name: 'OpenComp',
    domain: 'opencomp.com',
  },
  {
    name: 'Paladino Digital',
    domain: 'paladinodigital.com.br',
  },
  {
    name: 'CloudKitchens',
    domain: 'cloudkitchens.com',
  },
  {
    name: '100 inc.',
    domain: '100inc.co.jp',
  },
  {
    name: 'Heracleion',
    domain: 'heracleion.co.uk',
  },
  {
    name: 'Lemon Learning',
    domain: 'lemonlearning.com',
  },
  {
    name: 'Automated Dreams',
    domain: 'automateddreams.com',
  },
  {
    name: '8-Digital.com',
    domain: '8-digital.com',
  },
  {
    name: 'CTM360',
    domain: 'ctm360.com',
  },
  {
    name: 'BizCare,',
    domain: 'bizcare.com',
  },
  {
    name: 'ScienceIO',
    domain: 'science.io',
  },
  {
    name: 'AboutTime Technologies llc.',
    domain: 'workmax.com',
  },
  {
    name: 'BeLive Technology Pte Ltd',
    domain: 'belive.technology',
  },
  {
    name: 'Joyn',
    domain: 'joyn.eu',
  },
  {
    name: 'Hook Technology Ltd',
    domain: 'hook.co',
  },
  {
    name: 'Learner Market Group',
    domain: 'learnermg.com',
  },
  {
    name: 'HuskyJam',
    domain: 'huskyjam.com',
  },
  {
    name: 'Queue-it',
    domain: 'queue-it.com',
  },
  {
    name: 'Autoarti',
    domain: 'autoarti.com',
  },
  {
    name: 'Hippo Video',
    domain: 'hippovideo.io',
  },
  {
    name: 'Data Culture',
    domain: 'datacult.com',
  },
  {
    name: 'Postalytics',
    domain: 'postalytics.com',
  },
  {
    name: 'iSoftStone',
    domain: 'isoftstoneinc.com',
  },
  {
    name: 'Brocoders',
    domain: 'brocoders.com',
  },
  {
    name: 'NowSecure',
    domain: 'nowsecure.com',
  },
  {
    name: 'Wagestream',
    domain: 'wagestream.com',
  },
  {
    name: 'Z1 Consultant',
    domain: 'z1consultant.com',
  },
  {
    name: 'Promenade',
    domain: 'getpromenade.com',
  },
  {
    name: 'Elementl',
    domain: 'elementl.com',
  },
  {
    name: 'Datex Corporation',
    domain: 'datexcorp.com',
  },
  {
    name: 'Enosis VR',
    domain: 'enosis.io',
  },
  {
    name: 'Bergen Logistics',
    domain: 'bergenlogistics.com',
  },
  {
    name: 'Wayleadr',
    domain: 'wayleadr.com',
  },
  {
    name: 'THRIVE',
    domain: 'thrivelearning.com',
  },
  {
    name: 'Whiskey Marketeers',
    domain: 'whiskeymarketeers.com',
  },
  {
    name: 'Experify',
    domain: 'experify.io',
  },
  {
    name: 'Second Nature',
    domain: 'secondnature.ai',
  },
  {
    name: 'Stellium',
    domain: 'stellium.com',
  },
  {
    name: 'Divide By Zero',
    domain: 'dividebyzero.com.au',
  },
  {
    name: 'Quikly',
    domain: 'quikly.com',
  },
  {
    name: 'Efficacy Solutions',
    domain: 'efficacysolution.com',
  },
  {
    name: 'Smartify Apps',
    domain: 'smartifyapps.com',
  },
  {
    name: 'WorkBuzz',
    domain: 'workbuzz.com',
  },
  {
    name: 'Armour labs',
    domain: 'joinarmour.com',
  },
  {
    name: 'ConvergeOne',
    domain: 'convergeone.com',
  },
  {
    name: 'YOOBIC',
    domain: 'yoobic.com',
  },
  {
    name: 'SMEtk',
    domain: 'smetk.com',
  },
  {
    name: 'WorkLLama',
    domain: 'workllama.com',
  },
  {
    name: 'Rapid7',
    domain: 'rapid7.com',
  },
  {
    name: 'BambuMeta',
    domain: 'bambumeta.com',
  },
  {
    name: 'Brokerage Engine',
    domain: 'brokerageengine.com',
  },
  {
    name: 'Square One Consulting',
    domain: 'sq1consulting.co.za',
  },
  {
    name: 'VyaPay',
    domain: 'vyapay.com',
  },
  {
    name: 'Vividly',
    domain: 'govividly.com',
  },
  {
    name: 'DeskAlerts',
    domain: 'alert-software.com',
  },
  {
    name: 'Universal Background Screening',
    domain: 'universalbackground.com',
  },
  {
    name: 'Skan.ai',
    domain: 'skan.ai',
  },
  {
    name: 'InstaVC',
    domain: 'instavc.com',
  },
  {
    name: 'Viceversa',
    domain: 'goviceversa.com',
  },
  {
    name: 'tagworks LLP',
    domain: 'tagembed.com',
  },
  {
    name: 'The Brevet Group',
    domain: 'thebrevetgroup.com',
  },
  {
    name: 'Keyrus EPM Americas',
    domain: 'keyrusamericas.com',
  },
  {
    name: 'VIZION',
    domain: 'vizionapi.com',
  },
  {
    name: 'Appinio',
    domain: 'appinio.com',
  },
  {
    name: 'Knowable',
    domain: 'knowable.com',
  },
  {
    name: 'Flued Inc.',
    domain: 'flued.jp',
  },
  {
    name: 'Seated',
    domain: 'seatedapp.io',
  },
  {
    name: 'Voiceable',
    domain: 'voiceable.co',
  },
  {
    name: 'Insurge Media Technologies LLP',
    domain: 'insurge.io',
  },
  {
    name: 'Snapdocs',
    domain: 'snapdocs.com',
  },
  {
    name: 'LiveIntent',
    domain: 'liveintent.com',
  },
  {
    name: 'Ptolemay',
    domain: 'ptolemay.com',
  },
  {
    name: 'NiftyCat',
    domain: 'niftycat.com',
  },
  {
    name: 'Paved',
    domain: 'paved.com',
  },
  {
    name: '&Marketing',
    domain: 'and-marketing.com',
  },
  {
    name: 'Bovill',
    domain: 'bovill.com',
  },
  {
    name: 'ReverseLogix',
    domain: 'reverselogix.com',
  },
  {
    name: 'Senior Sistemas',
    domain: 'senior.com.br',
  },
  {
    name: 'Emvenci',
    domain: 'emvenci.com',
  },
  {
    name: 'New England Safety Partners',
    domain: 'newenglandsp.com',
  },
  {
    name: 'Surveypal',
    domain: 'surveypal.com',
  },
  {
    name: 'Koyalt Solutions LLP',
    domain: 'koyalt.com',
  },
  {
    name: 'PawTech LLC.',
    domain: 'pawtech.co',
  },
  {
    name: 'New Breed',
    domain: 'newbreedrevenue.com',
  },
  {
    name: 'Firmly',
    domain: 'firmly.ai',
  },
  {
    name: 'Chattr',
    domain: 'chattr.ai',
  },
  {
    name: 'Fuse Inventory',
    domain: 'fuseinventory.com',
  },
  {
    name: 'SparkLayer',
    domain: 'sparklayer.io',
  },
  {
    name: 'FotoNotes',
    domain: 'fotonotes.com',
  },
  {
    name: 'Surecomp',
    domain: 'surecomp.com',
  },
  {
    name: 'Assemble',
    domain: 'assembleinc.com',
  },
  {
    name: 'Jarvis ML',
    domain: 'jarvisml.com',
  },
  {
    name: 'Barrett Dixon Bell',
    domain: 'weareb2b.com',
  },
  {
    name: 'OfficeWork Software LLC',
    domain: 'orgchartpro.com',
  },
  {
    name: 'RegistrationCheckin',
    domain: 'registrationcheckin.com',
  },
  {
    name: 'Credit Canary',
    domain: 'creditcanary.co.uk',
  },
  {
    name: 'Advantage Club',
    domain: 'advantageclub.in',
  },
  {
    name: 'Cacheflow',
    domain: 'getcacheflow.com',
  },
  {
    name: 'Astrology.com',
    domain: 'astrology.com',
  },
  {
    name: 'Radial',
    domain: 'radial.com',
  },
  {
    name: 'Pricemoov',
    domain: 'pricemoov.com',
  },
  {
    name: 'Metronome',
    domain: 'metronome.com',
  },
  {
    name: 'LISNR',
    domain: 'lisnr.com',
  },
  {
    name: 'Endless Events',
    domain: 'helloendless.com',
  },
  {
    name: 'Bolton Remote',
    domain: 'boltonremote.com',
  },
  {
    name: 'Dataplane, Inc',
    domain: 'dataplane.app',
  },
  {
    name: 'Map My Customers',
    domain: 'mapmycustomers.me',
  },
  {
    name: 'HCSS',
    domain: 'hcss.com',
  },
  {
    name: 'ResultsCX',
    domain: 'results-cx.com',
  },
  {
    name: 'Blankon Technology Solutions',
    domain: 'blankontech.com',
  },
  {
    name: 'VPSrec',
    domain: 'vpsrec.com',
  },
  {
    name: 'SERVENG',
    domain: 'serveng.ao',
  },
  {
    name: 'Protopia AI, Inc.',
    domain: 'protopia.ai',
  },
  {
    name: 'BridgerPay',
    domain: 'bridgerpay.com',
  },
  {
    name: 'Altconsole Inc.',
    domain: 'altconsole.com',
  },
  {
    name: 'Cultura',
    domain: 'cultura.com',
  },
  {
    name: 'Art By City',
    domain: 'artby.city',
  },
  {
    name: 'PeakActivity',
    domain: 'peakactivity.com',
  },
  {
    name: 'AAA',
    domain: 'aaa.com',
  },
  {
    name: 'Virtual Field',
    domain: 'virtualfield.io',
  },
  {
    name: 'Village Helpdesk',
    domain: 'villagehelpdesk.com',
  },
  {
    name: 'Pivotal B2B',
    domain: 'pivotal-b2b.com',
  },
  {
    name: 'Media Design Group',
    domain: 'mediadesigngroup.com',
  },
  {
    name: 'XPR POS',
    domain: 'xprpos.com',
  },
  {
    name: 'ALLCARE',
    domain: 'allcare.ph',
  },
  {
    name: 'Vidazoo',
    domain: 'vidazoo.com',
  },
  {
    name: 'Truecaller',
    domain: 'truecaller.com',
  },
  {
    name: 'Mystery',
    domain: 'trymystery.com',
  },
  {
    name: 'Verbal+Visual',
    domain: 'verbalplusvisual.com',
  },
  {
    name: 'Fornax',
    domain: 'fornaxhq.co',
  },
  {
    name: 'TrueCommerce',
    domain: 'truecommerce.com',
  },
  {
    name: 'TLIC Worldwide',
    domain: 'tlic.com',
  },
  {
    name: 'Aggua',
    domain: 'aggua.io',
  },
  {
    name: '911inform',
    domain: 'inform.911inform.com',
  },
  {
    name: 'Clickvoyant',
    domain: 'clickvoyant.com',
  },
  {
    name: 'Arcadis Gen',
    domain: 'arcadisgen.com',
  },
  {
    name: 'Hark Technologies, Inc.',
    domain: 'sendhark.com',
  },
  {
    name: 'Dedoco',
    domain: 'dedoco.com',
  },
  {
    name: 'Think Unlimited',
    domain: 'thinkunlimited.com',
  },
  {
    name: 'BuildZoom',
    domain: 'buildzoom.com',
  },
  {
    name: 'Dotfusion technologies inc',
    domain: 'dotfusion.com',
  },
  {
    name: 'Provis Technologies Private Limited',
    domain: 'provistechnologies.com',
  },
  {
    name: 'Like Digital & Partners',
    domain: 'like.digital',
  },
  {
    name: 'Dakota Systems',
    domain: 'daksys.com',
  },
  {
    name: 'Azienda etica',
    domain: 'aziendaetica.com',
  },
  {
    name: 'SCADAfence',
    domain: 'scadafence.com',
  },
  {
    name: 'T-minus',
    domain: 'karan-tibdewal.com',
  },
  {
    name: 'Akcelo',
    domain: 'akcelo.com',
  },
  {
    name: 'Rocketium',
    domain: 'rocketium.com',
  },
  {
    name: 'Unibuddy',
    domain: 'unibuddy.com',
  },
  {
    name: 'TwentyThree',
    domain: 'twentythree.com',
  },
  {
    name: 'Multicheck',
    domain: 'multicheck.cloud',
  },
  {
    name: 'Tuatarix',
    domain: 'tuatarix.com',
  },
  {
    name: 'Wharf Street Studios',
    domain: 'wharfstreetstudios.com',
  },
  {
    name: 'Martingale Media LLC',
    domain: 'vrio.com',
  },
  {
    name: 'Recast',
    domain: 'getrecast.com',
  },
  {
    name: 'Tappable',
    domain: 'tappable.co',
  },
  {
    name: 'fiCommerce',
    domain: 'ficommerce.com',
  },
  {
    name: 'Predictable Innovation',
    domain: 'predictableinnovation.com',
  },
  {
    name: 'Tax Status',
    domain: 'taxstatus.com',
  },
  {
    name: 'FYC Labs',
    domain: 'fyclabs.com',
  },
  {
    name: 'Kuppa',
    domain: 'yourkuppa.com',
  },
  {
    name: 'acidgreen',
    domain: 'acidgreen.com.au',
  },
  {
    name: 'WowMakers',
    domain: 'wowmakers.com',
  },
  {
    name: 'Beeline',
    domain: 'beeline.com',
  },
  {
    name: 'Saya Agency',
    domain: 'saya-agency.com',
  },
  {
    name: 'Caju Benefícios',
    domain: 'caju.com.br',
  },
  {
    name: 'Anima',
    domain: 'animaapp.com',
  },
  {
    name: 'CapStorm',
    domain: 'capstorm.com',
  },
  {
    name: 'ThroughPut, Inc.',
    domain: 'throughput.ai',
  },
  {
    name: 'Inbenta',
    domain: 'inbenta.com',
  },
  {
    name: 'CQ fluency',
    domain: 'cqfluency.com',
  },
  {
    name: 'Impruvon Health',
    domain: 'impruvonhealth.com',
  },
  {
    name: 'Trivident',
    domain: 'trivident.com',
  },
  {
    name: 'Pantheon',
    domain: 'pantheon.io',
  },
  {
    name: 'splineglobal',
    domain: 'splineglobal.com',
  },
  {
    name: 'Woodpecker.co',
    domain: 'woodpecker.co',
  },
  {
    name: 'Shepherd',
    domain: 'supportshepherd.com',
  },
  {
    name: 'Envestnet Data & Analytics',
    domain: 'envestnet.com',
  },
  {
    name: 'Cloudflight',
    domain: 'cloudflight.io',
  },
  {
    name: 'Perception Point',
    domain: 'perception-point.io',
  },
  {
    name: 'NearForm',
    domain: 'nearform.com',
  },
  {
    name: 'Fanplayr',
    domain: 'fanplayr.com',
  },
  {
    name: 'gocertify',
    domain: 'gocertify.me',
  },
  {
    name: 'GRUPO NSC',
    domain: 'gruponsc.com.br',
  },
  {
    name: 'Power Behind The Sales',
    domain: 'powerbehindth.wpengine.com',
  },
  {
    name: 'LeadFabric',
    domain: 'leadfabric.com',
  },
  {
    name: 'relevanC',
    domain: 'relevanc.com',
  },
  {
    name: '4Digital Consulting',
    domain: '4digitalconsulting.com',
  },
  {
    name: 'Paul de wet',
    domain: 'pauldewet.com',
  },
  {
    name: 'RNDpoint',
    domain: 'rndpoint.com',
  },
  {
    name: 'Appstle',
    domain: 'appstle.com',
  },
  {
    name: 'Chargeflow',
    domain: 'chargeflow.io',
  },
  {
    name: 'Majente',
    domain: 'majente.com',
  },
  {
    name: 'Amped',
    domain: 'tryamped.com',
  },
  {
    name: 'MSI',
    domain: 'msi.com',
  },
  {
    name: 'Appsmith',
    domain: 'appsmith.com',
  },
  {
    name: 'Services and processes solutions S.A de C.V',
    domain: 'spsolutions.com.mx',
  },
  {
    name: 'Determinant Studios',
    domain: 'determinantstudios.com',
  },
  {
    name: 'Managino Agency',
    domain: 'managino.agency',
  },
  {
    name: 'ParcelShield',
    domain: 'parcelshield.com',
  },
  {
    name: 'OpenPayd',
    domain: 'openpayd.com',
  },
  {
    name: 'OpMentors',
    domain: 'opmentors.com',
  },
  {
    name: 'Sensedia',
    domain: 'sensedia.com',
  },
  {
    name: 'Knowmad Digital Marketing',
    domain: 'knowmad.com',
  },
  {
    name: 'Intellect',
    domain: 'intellect.com',
  },
  {
    name: 'Yollty',
    domain: 'yollty.com',
  },
  {
    name: 'Explore',
    domain: 'explore.fr',
  },
  {
    name: 'Agile Business Technology',
    domain: 'agile.co.za',
  },
  {
    name: 'ChannelAssist',
    domain: 'channelassist.com',
  },
  {
    name: 'CloudCall',
    domain: 'cloudcall.com',
  },
  {
    name: 'Databook',
    domain: 'trydatabook.com',
  },
  {
    name: 'Wing Assistant',
    domain: 'wingassistant.com',
  },
  {
    name: 'Kinetica',
    domain: 'kinetica.com',
  },
  {
    name: 'Relewise',
    domain: 'relewise.com',
  },
  {
    name: 'Gryphon.ai',
    domain: 'gryphon.ai',
  },
  {
    name: 'Denim Social',
    domain: 'denimsocial.com',
  },
  {
    name: 'DOE Media',
    domain: 'doe.media',
  },
  {
    name: 'FieldWorx',
    domain: 'fieldworx.software',
  },
  {
    name: 'Certa',
    domain: 'getcerta.com',
  },
  {
    name: 'Siro',
    domain: 'siro.ai',
  },
  {
    name: 'DRINKS',
    domain: 'drinks.com',
  },
  {
    name: 'abilex',
    domain: 'abilex.de',
  },
  {
    name: 'DG Marketing',
    domain: 'dgmarketingservices.com',
  },
  {
    name: 'UNITECH ELECTRONICS Co., Ltd.',
    domain: 'ute.com',
  },
  {
    name: 'Badger Maps',
    domain: 'badgermapping.com',
  },
  {
    name: 'SumUp',
    domain: 'sumup.com',
  },
  {
    name: 'PowerSchool',
    domain: 'powerschool.com',
  },
  {
    name: 'Oskory',
    domain: 'oskory.pl',
  },
  {
    name: 'MTLT',
    domain: 'mtlt.eu',
  },
  {
    name: 'Rakuten',
    domain: 'rakuten.com',
  },
  {
    name: 'TeamOhana',
    domain: 'teamohana.com',
  },
  {
    name: 'MarketStar',
    domain: 'marketstar.com',
  },
  {
    name: 'Data Sentinel AI',
    domain: 'datasentinelai.com',
  },
  {
    name: 'Personetics',
    domain: 'personetics.com',
  },
  {
    name: 'Unmind',
    domain: 'unmind.com',
  },
  {
    name: 'DoorDash',
    domain: 'doordash.com',
  },
  {
    name: 'Kustomer',
    domain: 'kustomer.com',
  },
  {
    name: 'Conscia',
    domain: 'conscia.ai',
  },
  {
    name: 'OnDeck',
    domain: 'ondeck.com',
  },
  {
    name: 'SweetHawk',
    domain: 'sweethawk.com',
  },
  {
    name: 'Epsilon',
    domain: 'epsilon.com',
  },
  {
    name: 'Boutiq',
    domain: 'getboutiq.com',
  },
  {
    name: 'Fintricity',
    domain: 'fintricity.com',
  },
  {
    name: 'Comparefy AB',
    domain: 'comparefy.se',
  },
  {
    name: 'Pufferfish Partners',
    domain: 'pufferfishpartners.com',
  },
  {
    name: 'BlueTuskr',
    domain: 'bluetuskr.com',
  },
  {
    name: 'Stax Pay',
    domain: 'staxpayments.com',
  },
  {
    name: 'opengrants.io',
    domain: 'opengrants.io',
  },
  {
    name: 'Squiz',
    domain: 'squiz.net',
  },
  {
    name: 'joinerhub',
    domain: 'joinerhub.ir',
  },
  {
    name: 'AroundDeal',
    domain: 'arounddeal.com',
  },
  {
    name: 'Blayzer Digital',
    domain: 'blayzer.com',
  },
  {
    name: 'Cartloop',
    domain: 'cartloop.io',
  },
  {
    name: 'nabling',
    domain: 'nabling.com',
  },
  {
    name: 'redpepper',
    domain: 'redpepper.land',
  },
  {
    name: 'Goventure',
    domain: 'goventure.es',
  },
  {
    name: 'Teamwork Commerce',
    domain: 'teamworkcommerce.com',
  },
  {
    name: 'Blue Triangle',
    domain: 'bluetriangle.com',
  },
  {
    name: 'Stitch',
    domain: 'stitch.cx',
  },
  {
    name: 'Procuros',
    domain: 'procuros.io',
  },
  {
    name: 'Cloud Tech Gurus',
    domain: 'cloudtechgurus.com',
  },
  {
    name: 'Vendure GmbH',
    domain: 'vendure.io',
  },
  {
    name: 'Hoobastank',
    domain: 'hoobastank.com',
  },
  {
    name: 'Flipside Crypto',
    domain: 'flipsidecrypto.xyz',
  },
  {
    name: 'IMA360',
    domain: 'ima360.com',
  },
  {
    name: 'Proxima',
    domain: 'proxima.ai',
  },
  {
    name: 'Churnkey',
    domain: 'churnkey.co',
  },
  {
    name: 'GoKwik',
    domain: 'gokwik.co',
  },
  {
    name: 'Yokoy',
    domain: 'yokoy.ai',
  },
  {
    name: 'RevSend',
    domain: 'revsend.com',
  },
  {
    name: 'momo',
    domain: 'momo.credit',
  },
  {
    name: 'Engagespot',
    domain: 'engagespot.co',
  },
  {
    name: 'One Medical',
    domain: 'onemedical.com',
  },
  {
    name: 'Systema AI',
    domain: 'systema.ai',
  },
  {
    name: 'Voyager Portal',
    domain: 'voyagerportal.com',
  },
  {
    name: 'Growave',
    domain: 'growave.io',
  },
  {
    name: 'Arts Consolidated',
    domain: 'artsconsolidated.com',
  },
  {
    name: 'innDex',
    domain: 'inndex.co.uk',
  },
  {
    name: 'AppFollow',
    domain: 'appfollow.io',
  },
  {
    name: '247 FCR',
    domain: '247fcr.com',
  },
  {
    name: 'SingleSprout',
    domain: 'singlesprout.com',
  },
  {
    name: 'Squareshot',
    domain: 'squareshot.com',
  },
  {
    name: 'Fondue',
    domain: 'refundco.io',
  },
  {
    name: 'Archera',
    domain: 'archera.ai',
  },
  {
    name: 'OpenLogix',
    domain: 'open-logix.com',
  },
  {
    name: 'Dataships',
    domain: 'dataships.io',
  },
  {
    name: 'Coalescence Cloud Consulting',
    domain: 'coalescence.us',
  },
  {
    name: 'Compound',
    domain: 'compound.uk.com',
  },
  {
    name: 'Eunimart',
    domain: 'eunimart.com',
  },
  {
    name: 'GoodData',
    domain: 'gooddata.com',
  },
  {
    name: 'CIMP Tech Company Limited',
    domain: 'cimptech.com',
  },
  {
    name: 'Pazo Inc.',
    domain: 'gopazo.com',
  },
  {
    name: 'Optimal Dynamics',
    domain: 'optimaldynamics.com',
  },
  {
    name: 'Feel',
    domain: 'feel.tech',
  },
  {
    name: 'Subcity',
    domain: 'subcity.com',
  },
  {
    name: 'Valgen, Inc.',
    domain: 'prosperfleet.com',
  },
  {
    name: 'Edge Delta',
    domain: 'edgedelta.com',
  },
  {
    name: 'Salary.com',
    domain: 'salary.com',
  },
  {
    name: 'dice',
    domain: 'dice.tech',
  },
  {
    name: 'isendu',
    domain: 'isendu.com',
  },
  {
    name: 'DataConcept',
    domain: 'dataconcept.digital',
  },
  {
    name: 'Confirmo',
    domain: 'confirmo.net',
  },
  {
    name: 'Preflect',
    domain: 'preflect.com',
  },
  {
    name: 'TelosOne',
    domain: 'telos.one',
  },
  {
    name: 'Muluma Management Consulting Group',
    domain: 'muluma.co.za',
  },
  {
    name: 'Intent HQ',
    domain: 'intenthq.com',
  },
  {
    name: 'IRIS.TV',
    domain: 'iris.tv',
  },
  {
    name: 'Avetti Commerce',
    domain: 'avetticommerce.com',
  },
  {
    name: 'Tectona',
    domain: 'tectona.io',
  },
  {
    name: 'Albania 10',
    domain: 'albania10.com.br',
  },
  {
    name: 'The Weedaker Group',
    domain: 'theweedakergroup.com',
  },
  {
    name: 'Bounty',
    domain: 'bounty.co',
  },
  {
    name: 'Ask Phill',
    domain: 'askphill.com',
  },
  {
    name: 'Netcovery',
    domain: 'netcovery.com',
  },
  {
    name: 'Board International',
    domain: 'board.com',
  },
  {
    name: 'FoodDocs',
    domain: 'fooddocs.com',
  },
  {
    name: 'Cyber-Duck',
    domain: 'cyber-duck.co.uk',
  },
  {
    name: 'new media entertainment ltd',
    domain: 'nme.net',
  },
  {
    name: 'Mojix',
    domain: 'mojix.com',
  },
  {
    name: 'SEEK Limited',
    domain: 'seek.com.au',
  },
  {
    name: 'Zencity',
    domain: 'zencity.io',
  },
  {
    name: 'Very Good Security',
    domain: 'verygoodsecurity.com',
  },
  {
    name: 'Virtual Office',
    domain: 'virtualofficellc.net',
  },
  {
    name: 'Netgain Solutions',
    domain: 'netgain.tech',
  },
  {
    name: 'Clean.io',
    domain: 'clean.io',
  },
  {
    name: 'Kobiton',
    domain: 'kobiton.com',
  },
  {
    name: 'NexHealth',
    domain: 'nexhealth.com',
  },
  {
    name: 'SoGoSurvey',
    domain: 'sogosurvey.com',
  },
  {
    name: 'Kenect',
    domain: 'kenect.com',
  },
  {
    name: 'Paliq',
    domain: 'paliq.io',
  },
  {
    name: 'Rockerbox',
    domain: 'rockerbox.com',
  },
  {
    name: 'Forecastr',
    domain: 'forecastr.co',
  },
  {
    name: 'Refundid',
    domain: 'refundid.com',
  },
  {
    name: 'Cloudmaven ERP',
    domain: 'cloudmaven.com',
  },
  {
    name: 'Brave Bison',
    domain: 'bravebison.com',
  },
  {
    name: 'HelpFlow',
    domain: 'helpflow.com',
  },
  {
    name: 'softwarehorsepower',
    domain: 'softwarehorsepower.com',
  },
  {
    name: 'Flashpoint',
    domain: 'flashpoint.io',
  },
  {
    name: 'asensei',
    domain: 'asensei.com',
  },
  {
    name: 'Fearsome',
    domain: 'fearsome.co.uk',
  },
  {
    name: 'Evolved Commerce',
    domain: 'evolvedcommerce.com',
  },
  {
    name: 'Rocketlane',
    domain: 'rocketlane.com',
  },
  {
    name: 'Modigie',
    domain: 'modigie.com',
  },
  {
    name: 'Mutant',
    domain: 'mutant.com.br',
  },
  {
    name: 'Chase Dimond',
    domain: 'chasedimond.com',
  },
  {
    name: 'ConWize',
    domain: 'conwize.io',
  },
  {
    name: 'Data Facts, Inc.',
    domain: 'datafacts.com',
  },
  {
    name: 'EcoEnclose',
    domain: 'ecoenclose.com',
  },
  {
    name: 'Smart Theme',
    domain: 'smarttheme.com',
  },
  {
    name: 'Kinsa',
    domain: 'kinsahealth.com',
  },
  {
    name: 'GSATi',
    domain: 'gsati.com',
  },
  {
    name: 'SharpRank',
    domain: 'sharprank.com',
  },
  {
    name: 'Schedulehead',
    domain: 'schedulehead.com',
  },
  {
    name: 'azszero',
    domain: 'azszero.com',
  },
  {
    name: 'PartnerPortal',
    domain: 'partnerportal.io',
  },
  {
    name: 'SATT ANALYTICS',
    domain: 'satthub.com',
  },
  {
    name: 'Solidus Labs',
    domain: 'soliduslabs.com',
  },
  {
    name: 'HelloGuru',
    domain: 'helloguru.io',
  },
  {
    name: 'FlashBox',
    domain: 'flashbox.co',
  },
  {
    name: 'WISK.ai',
    domain: 'wisk.ai',
  },
  {
    name: 'The Campfire',
    domain: 'thecampfire.ai',
  },
  {
    name: 'Wonderway',
    domain: 'wonderway.io',
  },
  {
    name: 'myndwrks',
    domain: 'myndwrks.com',
  },
  {
    name: 'Quantexa',
    domain: 'quantexa.com',
  },
  {
    name: 'Prevedere',
    domain: 'prevedere.com',
  },
  {
    name: 'SPAR Group',
    domain: 'sparinc.com',
  },
  {
    name: 'VanNoppen Marketing',
    domain: 'vannoppen.co',
  },
  {
    name: 'PartnerHero',
    domain: 'partnerhero.com',
  },
  {
    name: 'Demodia Digital',
    domain: 'demodia.com',
  },
  {
    name: 'Shipt',
    domain: 'shipt.com',
  },
  {
    name: 'Pong Solutions',
    domain: 'pongsolutions.com',
  },
  {
    name: 'Cadence Consulting Group',
    domain: 'thinkcadence.com',
  },
  {
    name: 'VoPay',
    domain: 'vopay.com',
  },
  {
    name: 'Bust Out',
    domain: 'bustout.com',
  },
  {
    name: 'Graveflex',
    domain: 'graveflex.com',
  },
  {
    name: 'TEKenable',
    domain: 'tekenable.ie',
  },
  {
    name: 'Bluum',
    domain: 'gobluum.com',
  },
  {
    name: 'Impact Suite',
    domain: 'impactsuite.com',
  },
  {
    name: 'penny software',
    domain: 'penny.co',
  },
  {
    name: 'Style Lab',
    domain: 'stylelab.ai',
  },
  {
    name: 'SolarNexus',
    domain: 'solarnexus.com',
  },
  {
    name: 'Ignitiv, Inc.',
    domain: 'ignitiv.com',
  },
  {
    name: 'GuestOf',
    domain: 'guestofapp.com',
  },
  {
    name: 'Searchlight',
    domain: 'searchlight.ai',
  },
  {
    name: 'CG Infinity',
    domain: 'cginfinity.com',
  },
  {
    name: 'KiloPe Inc',
    domain: 'kilope.com',
  },
  {
    name: 'Young Foodies',
    domain: 'youngfoodies.co.uk',
  },
  {
    name: 'Montivory Co.,Ltd.',
    domain: 'montivory.com',
  },
  {
    name: 'Gluo',
    domain: 'gluo.mx',
  },
  {
    name: 'Upcraft Media LLC',
    domain: 'upcraft.io',
  },
  {
    name: 'About Inbound',
    domain: 'aboutinbound.com',
  },
  {
    name: 'Return Rabbit',
    domain: 'returnrabbit.com',
  },
  {
    name: 'Trevera Solutions',
    domain: 'trevera.com',
  },
  {
    name: 'Lightdash',
    domain: 'lightdash.com',
  },
  {
    name: 'FiveRock',
    domain: 'fiverock.co',
  },
  {
    name: 'Xcel Agency',
    domain: 'xcelagency.com',
  },
  {
    name: 'LEMI GROUP',
    domain: 'lemigroup.it',
  },
  {
    name: 'Desktop Imaging',
    domain: 'desktopimaging.co.nz',
  },
  {
    name: 'Endace',
    domain: 'endace.com',
  },
  {
    name: 'Commonwealth Energy',
    domain: 'thecommonwealthenergy.com',
  },
  {
    name: 'The VP Techno Labs® International',
    domain: 'vivekpancholi.com',
  },
  {
    name: 'The Convert Way',
    domain: 'theconvertway.com',
  },
  {
    name: 'Wick Creative',
    domain: 'wickcreative.com',
  },
  {
    name: 'Hairball.IO',
    domain: 'hairball.io',
  },
  {
    name: 'Knight Solutions',
    domain: 'knight-solutions.com',
  },
  {
    name: 'Jellywall',
    domain: 'jellywall.co.uk',
  },
  {
    name: 'DefinedLogic',
    domain: 'definedlogic.com',
  },
  {
    name: 'Prodoscore',
    domain: 'prodoscore.com',
  },
  {
    name: 'ATX Venture Partners',
    domain: 'atxventurepartners.com',
  },
  {
    name: 'Fundwurx',
    domain: 'fundwurx.com',
  },
  {
    name: 'LoadProof',
    domain: 'loadproof.com',
  },
  {
    name: 'Aretec. Inc',
    domain: 'aretecinc.com',
  },
  {
    name: 'Fifty Six',
    domain: 'fiftysixny.com',
  },
  {
    name: 'Lever',
    domain: 'lever.co',
  },
  {
    name: 'Because',
    domain: 'trybecause.com',
  },
  {
    name: 'eZCom Software',
    domain: 'ezcomsoftware.com',
  },
  {
    name: 'The Silicon Partners',
    domain: 'thesiliconpartners.com',
  },
  {
    name: 'Walnut',
    domain: 'walnut.io',
  },
  {
    name: 'Fortinet',
    domain: 'fortinet.com',
  },
  {
    name: 'Sendspark',
    domain: 'sendspark.com',
  },
  {
    name: 'Sesami',
    domain: 'sesami.co',
  },
  {
    name: 'Ties',
    domain: 'brandties.io',
  },
  {
    name: 'machete.systems',
    domain: 'machetesystems.com.au',
  },
  {
    name: 'ShareChat Business',
    domain: 'ads.sharechat.com',
  },
  {
    name: 'The Roof Strategist',
    domain: 'theroofstrategist.com',
  },
  {
    name: 'SmartCommerce',
    domain: 'smartcommerce.com',
  },
  {
    name: 'InsightOut',
    domain: 'insightoutdata.com',
  },
  {
    name: 'Rezolve Ltd',
    domain: 'rezolve.com',
  },
  {
    name: 'Dispatch',
    domain: 'dispatchit.com',
  },
  {
    name: 'Artificial Intelligence Expert',
    domain: 'aie-op.com',
  },
  {
    name: 'Shorages',
    domain: 'shorages.com',
  },
  {
    name: 'Snakker™',
    domain: 'snakker.io',
  },
  {
    name: 'HRSoft',
    domain: 'hrsoft.com',
  },
  {
    name: 'Jukebox Health',
    domain: 'jukeboxhealth.com',
  },
  {
    name: 'De Nieuwe Zaak',
    domain: 'denieuwezaak.nl',
  },
  {
    name: 'Restaurant Analytics Delivered',
    domain: 'thisisrad.io',
  },
  {
    name: 'PhoneCheck',
    domain: 'phonecheck.com',
  },
  {
    name: 'Vega',
    domain: 'vegacloud.io',
  },
  {
    name: 'Disco',
    domain: 'disconetwork.com',
  },
  {
    name: 'GetAnHacker',
    domain: 'getanhacker.com',
  },
  {
    name: 'UpSlide',
    domain: 'upslide.net',
  },
  {
    name: 'Waev',
    domain: 'waev.com',
  },
  {
    name: 'Ace Digital Technologies',
    domain: 'acedigitec.com',
  },
  {
    name: 'Care2',
    domain: 'care2.com',
  },
  {
    name: 'Make An Offer App',
    domain: 'makeanofferapp.com',
  },
  {
    name: 'Kickbox',
    domain: 'kickbox.com',
  },
  {
    name: 'Flowla',
    domain: 'flowla.com',
  },
  {
    name: 'Logistically',
    domain: 'logisticallyinc.com',
  },
  {
    name: 'MEF',
    domain: 'mef.net',
  },
  {
    name: 'Market Dojo',
    domain: 'marketdojo.com',
  },
  {
    name: 'AiOne Partners',
    domain: 'aionepartners.com',
  },
  {
    name: 'Wappalyzer',
    domain: 'wappalyzer.com',
  },
  {
    name: 'Trueson',
    domain: 'trueson.com',
  },
  {
    name: 'StoryMap Marketing',
    domain: 'storymapmarketing.com',
  },
  {
    name: 'Lemnisk',
    domain: 'lemnisk.co',
  },
  {
    name: 'Multiview',
    domain: 'multiview.com',
  },
  {
    name: 'Pivotree',
    domain: 'pivotree.com',
  },
  {
    name: 'Partner Box',
    domain: 'partnerbox.net',
  },
  {
    name: 'Model N',
    domain: 'modeln.com',
  },
  {
    name: 'PlaidCloud',
    domain: 'plaidcloud.com',
  },
  {
    name: 'Advanced Solutions International (ASI)',
    domain: 'imis.com',
  },
  {
    name: 'EdgeLabs',
    domain: 'edgelabs.ai',
  },
  {
    name: 'Cvent',
    domain: 'cvent.com',
  },
  {
    name: 'Ecobot',
    domain: 'ecobot.com',
  },
  {
    name: 'Starkmedia',
    domain: 'starkmedia.com',
  },
  {
    name: 'Mundrisoft Solutions',
    domain: 'mundrisoft.com',
  },
  {
    name: 'Publitas.com',
    domain: 'publitas.com',
  },
  {
    name: 'Sitel Group',
    domain: 'sitel.com',
  },
  {
    name: 'crafted.email',
    domain: 'crafted.email',
  },
  {
    name: 'StreamElements',
    domain: 'streamelements.com',
  },
  {
    name: 'Ingentis Softwareentwicklung',
    domain: 'ingentis.com',
  },
  {
    name: 'LogicGate',
    domain: 'logicgate.com',
  },
  {
    name: 'Veem',
    domain: 'veem.com',
  },
  {
    name: 'Vonnda',
    domain: 'vonnda.com',
  },
  {
    name: 'HelloProject',
    domain: 'helloprojectusa.com',
  },
  {
    name: 'Pack',
    domain: 'packdigital.com',
  },
  {
    name: 'Red Marker',
    domain: 'redmarker.ai',
  },
  {
    name: 'INAP Vision .Inc',
    domain: 'inap-vision.co.jp',
  },
  {
    name: 'Bright IT',
    domain: 'bright.global',
  },
  {
    name: 'OneStock',
    domain: 'onestock-retail.com',
  },
  {
    name: 'Superco',
    domain: 'superco.io',
  },
  {
    name: 'Movired.cl',
    domain: 'movired.cl',
  },
  {
    name: 'Framework Labs',
    domain: 'frameworklabs.com',
  },
  {
    name: 'Social Nucleus',
    domain: 'socialnucleus.co',
  },
  {
    name: 'Hello Retail',
    domain: 'helloretail.com',
  },
  {
    name: 'Mineral.io',
    domain: 'mineral.io',
  },
  {
    name: 'Verusen',
    domain: 'verusen.com',
  },
  {
    name: 'Grupo Ulrik Segurança e Serviços',
    domain: 'ulrik.com.br',
  },
  {
    name: 'Structured',
    domain: 'structured.agency',
  },
  {
    name: 'RWS Group',
    domain: 'rws.com',
  },
  {
    name: 'Bright Harbor Advisors',
    domain: 'brightharboradvisors.com',
  },
  {
    name: 'CityCheers Media',
    domain: 'citycheersmedia.com',
  },
  {
    name: 'Arvato Supply Chain Solutions SE',
    domain: 'arvato-suppy-chain.com',
  },
  {
    name: 'Maisie',
    domain: 'maisieai.com',
  },
  {
    name: 'Cubro Network Visibility',
    domain: 'cubro.com',
  },
  {
    name: 'K1 Investment Management',
    domain: 'k1im.com',
  },
  {
    name: 'Maverick Payments',
    domain: 'maverickpayments.com',
  },
  {
    name: 'Johnson Controls',
    domain: 'johnsoncontrols.com',
  },
  {
    name: 'DLUX TECH CORP PTY LTD',
    domain: 'dluxtechcorp.com.au',
  },
  {
    name: 'InnovatorsCanLaugh',
    domain: 'innovatorscanlaugh.com',
  },
  {
    name: 'KlickTrack',
    domain: 'getklicktrack.io',
  },
  {
    name: 'Booker25',
    domain: 'booker25.com',
  },
  {
    name: 'Seasia Infotech',
    domain: 'seasiainfotech.com',
  },
  {
    name: 'Lashback',
    domain: 'lashback.com',
  },
  {
    name: 'Mind2FLO',
    domain: 'mind2flo.com',
  },
  {
    name: 'DATABAR Company Limited',
    domain: 'databar.co.th',
  },
  {
    name: 'Yesty',
    domain: 'yesty.nl',
  },
  {
    name: 'Acclaro',
    domain: 'acclaro.com',
  },
  {
    name: 'WorldFirst',
    domain: 'worldfirst.com',
  },
  {
    name: 'Shopbox',
    domain: 'shopbox.ai',
  },
  {
    name: 'Caddle',
    domain: 'getcaddle.com',
  },
  {
    name: 'The Growth Team',
    domain: 'polaranalytics.co',
  },
  {
    name: 'Route',
    domain: 'route.com',
  },
  {
    name: 'berns language consulting GmbH',
    domain: 'berns-language-consulting.de',
  },
  {
    name: 'Thin Air Labs',
    domain: 'thinairlabs.ca',
  },
  {
    name: 'Contlo',
    domain: 'contlo.com',
  },
  {
    name: 'Impelix',
    domain: 'impelix.com',
  },
  {
    name: 'Nousot',
    domain: 'nousot.com',
  },
  {
    name: 'ProspectHunter',
    domain: 'prospecthunter.com',
  },
  {
    name: 'Indigenous Friends Association',
    domain: 'indigenousfriends.org',
  },
  {
    name: 'Keesal Propulsion Labs',
    domain: 'kplabs.com',
  },
  {
    name: 'Manatee',
    domain: 'trymanatee.com',
  },
  {
    name: 'Empower',
    domain: 'empower.social',
  },
  {
    name: 'Practice Analytics',
    domain: 'practiceanalytics.com',
  },
  {
    name: 'Branch8',
    domain: 'branch8.com',
  },
  {
    name: 'Fast Forward',
    domain: 'fastforward.sh',
  },
  {
    name: 'Gimmal',
    domain: 'gimmal.com',
  },
  {
    name: 'Govly',
    domain: 'govly.com',
  },
  {
    name: 'Nutun',
    domain: 'nutun.com',
  },
  {
    name: 'Nexus Ambition',
    domain: 'nexusambition.dk',
  },
  {
    name: 'Container xChange',
    domain: 'container-xchange.com',
  },
  {
    name: 'Decathlon',
    domain: 'decathlon.be',
  },
  {
    name: 'GoToro',
    domain: 'gotoro.io',
  },
  {
    name: 'accel bi',
    domain: 'accelbi.com',
  },
  {
    name: 'Machine Mode',
    domain: 'machinemode.co.za',
  },
  {
    name: 'Hanson',
    domain: 'hansoninc.com',
  },
  {
    name: 'BD Methods',
    domain: 'bdmethodsllc.com',
  },
  {
    name: 'Veretail LLC',
    domain: 'veretail.com',
  },
  {
    name: 'Media Sonar Technologies Inc.',
    domain: 'mediasonar.com',
  },
  {
    name: 'Champify',
    domain: 'champify.io',
  },
  {
    name: 'SlashNext',
    domain: 'slashnext.com',
  },
  {
    name: 'AppSamurai',
    domain: 'appsamurai.com',
  },
  {
    name: 'BSPK',
    domain: 'bspk.com',
  },
  {
    name: 'Voyage Control',
    domain: 'voyagecontrol.com',
  },
  {
    name: 'Cmersal digital solutions and telecom services LTD',
    domain: 'cmersal.com',
  },
  {
    name: 'LitExtension',
    domain: 'litextension.com',
  },
  {
    name: 'Infopercept Consulting',
    domain: 'infopercept.com',
  },
  {
    name: 'Amblique',
    domain: 'amblique.com',
  },
  {
    name: 'RCG Global Services',
    domain: 'rcgglobalservices.com',
  },
  {
    name: 'mPokket',
    domain: 'mpokket.in',
  },
  {
    name: 'Meiro',
    domain: 'meiro.io',
  },
  {
    name: '800response',
    domain: '800response.com',
  },
  {
    name: 'Gearset',
    domain: 'gearset.com',
  },
  {
    name: 'Project Have Blue LLC',
    domain: 'haveblue.ai',
  },
  {
    name: 'Arkyn',
    domain: 'arkyn.io',
  },
  {
    name: 'incident.io',
    domain: 'incident.io',
  },
  {
    name: 'Nomad',
    domain: 'nomadmarketing.com',
  },
  {
    name: 'Sift Enterprises',
    domain: 'justsift.com',
  },
  {
    name: 'Supertext',
    domain: 'supertext.ch',
  },
  {
    name: 'CMW Automation',
    domain: 'cmwautomation.co.za',
  },
  {
    name: 'Matricle',
    domain: 'matricle.com',
  },
  {
    name: 'Innotech Software Services SRL',
    domain: 'innotech.services',
  },
  {
    name: 'Tray.io',
    domain: 'tray.io',
  },
  {
    name: 'Praetorian Security Inc',
    domain: 'praetorian.com',
  },
  {
    name: 'Nymbus',
    domain: 'nymbus.com',
  },
  {
    name: 'Retentio',
    domain: 'retentio.agency',
  },
  {
    name: 'Anthology',
    domain: 'anthology.com',
  },
  {
    name: 'TuxCare',
    domain: 'tuxcare.com',
  },
  {
    name: '30 Lines',
    domain: '30lines.com',
  },
  {
    name: 'Plastiq',
    domain: 'plastiq.com',
  },
  {
    name: 'Web Scribble',
    domain: 'webscribble.com',
  },
  {
    name: 'Engineering Software lab',
    domain: 'eswlab.com',
  },
  {
    name: 'Whereoware',
    domain: 'whereoware.com',
  },
  {
    name: 'Quiver',
    domain: 'quiver.co.uk',
  },
  {
    name: 'Lickability',
    domain: 'lickability.com',
  },
  {
    name: 'AutoScheduler.AI',
    domain: 'autoscheduler.ai',
  },
  {
    name: 'OpenINSIGHTS',
    domain: 'openinsights.ci',
  },
  {
    name: 'TapHunter',
    domain: 'evergreenhq.com',
  },
  {
    name: 'Parmonic',
    domain: 'parmonic.com',
  },
  {
    name: 'Quandary Consulting Group',
    domain: 'quandarycg.com',
  },
  {
    name: 'Tough Leaf',
    domain: 'toughleaf.com',
  },
  {
    name: 'Max Connect Digital',
    domain: 'maxconnect.com',
  },
  {
    name: 'Oodrive',
    domain: 'oodrive.com',
  },
  {
    name: 'Sland Studios',
    domain: 'slandstudios.com',
  },
  {
    name: 'Trusted Shops',
    domain: 'trustedshops.it',
  },
  {
    name: 'Invertebrates Australia',
    domain: 'invertebratesaustralia.org',
  },
  {
    name: 'salesbricks',
    domain: 'salesbricks.com',
  },
  {
    name: 'Vrolio',
    domain: 'vrolio.com',
  },
  {
    name: 'cargo',
    domain: 'cargo.co.il',
  },
  {
    name: 'admariner',
    domain: 'admariner.com',
  },
  {
    name: "D'Argenta",
    domain: 'dargenta.com',
  },
  {
    name: 'INNOVENTES DIGITAL',
    domain: 'innoventestech.com',
  },
  {
    name: 'Simon Abraham Works',
    domain: 'simonabrahamworks.com',
  },
  {
    name: 'Chargify',
    domain: 'chargify.com',
  },
  {
    name: 'Closed_Gleam.io',
    domain: 'gleam.io',
  },
  {
    name: 'RFPIO',
    domain: 'rfpio.com',
  },
  {
    name: 'Threecolts',
    domain: 'threecolts.com',
  },
  {
    name: 'Measured Analytics and Insurance',
    domain: 'measuredinsurance.com',
  },
  {
    name: 'Boss Insights',
    domain: 'bossinsights.com',
  },
  {
    name: 'Advocaci Marketing B.V.',
    domain: 'advocaci.com',
  },
  {
    name: 'Aleph',
    domain: 'getaleph.com',
  },
  {
    name: 'GrowthBook',
    domain: 'growthbook.io',
  },
  {
    name: 'Incubeta',
    domain: 'incubeta.com',
  },
  {
    name: 'Savagelyfe LLC',
    domain: '666savage.com',
  },
  {
    name: 'Opslevel',
    domain: 'opslevel.com',
  },
  {
    name: 'Boston Warwick',
    domain: 'bostonwarwick.com',
  },
  {
    name: 'Spaceback, Inc.',
    domain: 'spaceback.com',
  },
  {
    name: 'Rocket Lab',
    domain: 'rocketlab.ai',
  },
  {
    name: 'Reap Commerce',
    domain: 'reapcommerce.com',
  },
  {
    name: 'MessageMedia',
    domain: 'messagemedia.com',
  },
  {
    name: 'Seek',
    domain: 'seekinsights.com',
  },
  {
    name: 'Arrabiata Solutions GmbH',
    domain: 'arrabiata.de',
  },
  {
    name: 'Blacc Spot Media - FLEXFIG',
    domain: 'flexfig.com',
  },
  {
    name: 'Instabase',
    domain: 'instabase.com',
  },
  {
    name: 'MetaRouter',
    domain: 'metarouter.io',
  },
  {
    name: 'PEISO',
    domain: 'peiso.com.au',
  },
  {
    name: 'RocketX',
    domain: 'rocketx.group',
  },
  {
    name: 'Smart Instinct',
    domain: 'smartinstinct.co',
  },
  {
    name: 'Merchsend',
    domain: 'merchsend.com',
  },
  {
    name: 'My Low Carbon',
    domain: 'mylowcarbon.io',
  },
  {
    name: 'AppHub',
    domain: 'apphub.com',
  },
  {
    name: 'Genie AI',
    domain: 'genieai.co',
  },
  {
    name: 'Linarc',
    domain: 'linarc.com',
  },
  {
    name: 'Alpine Fulfillment',
    domain: 'alpinefulfill.com',
  },
  {
    name: 'Adrenalead',
    domain: 'adrenalead.com',
  },
  {
    name: 'Plexflo',
    domain: 'plexflo.com',
  },
  {
    name: 'Catalina Material Handling',
    domain: 'catalinamh.com',
  },
  {
    name: 'Hilti',
    domain: 'hilti.com',
  },
  {
    name: 'Blick Rothenberg',
    domain: 'blickrothenberg.com',
  },
  {
    name: 'Pluto',
    domain: 'plutocard.io',
  },
  {
    name: 'Avataar',
    domain: 'avataar.ai',
  },
  {
    name: 'Semantic Web Company',
    domain: 'poolparty.biz',
  },
  {
    name: 'GavBit Private Limited',
    domain: 'simpledmarc.com',
  },
  {
    name: 'codeitlabs GmbH',
    domain: 'codeitlabs.com',
  },
  {
    name: 'sevDesk GmbH',
    domain: 'sevdesk.de',
  },
  {
    name: 'Credello',
    domain: 'credello.com',
  },
  {
    name: 'Happy Horizon',
    domain: 'happyhorizon.com',
  },
  {
    name: 'Hey Mirza',
    domain: 'heymirza.com',
  },
  {
    name: 'rfxcel',
    domain: 'rfxcel.com',
  },
  {
    name: 'ElliotDigital',
    domain: 'elliotdigital.co.uk',
  },
  {
    name: 'Popsixle',
    domain: 'popsixle.com',
  },
  {
    name: 'iPullRank',
    domain: 'ipullrank.com',
  },
  {
    name: 'Paperplanes',
    domain: 'flypaperplanes.co.uk',
  },
  {
    name: 'Commerce Right',
    domain: 'commerceright.com',
  },
  {
    name: 'Infinityn International',
    domain: 'infinityn.com',
  },
  {
    name: 'Nextsale',
    domain: 'nextsale.io',
  },
  {
    name: 'Product Pair',
    domain: 'productpair.co',
  },
  {
    name: 'S Workz',
    domain: 's-workz.com',
  },
  {
    name: 'Datamine',
    domain: 'datamine.com',
  },
  {
    name: 'Salelytics',
    domain: 'salelytics.com',
  },
  {
    name: 'BlueOcean',
    domain: 'blueocean.ai',
  },
  {
    name: 'OptimumSupplyChain',
    domain: 'optimum-sco.com',
  },
  {
    name: 'Virtusa',
    domain: 'virtusa.com',
  },
  {
    name: 'ValueFirst',
    domain: 'vfirst.com',
  },
  {
    name: 'Occam',
    domain: 'occam.global',
  },
  {
    name: 'Bahwan CyberTek',
    domain: 'bahwancybertek.com',
  },
  {
    name: 'Image Now',
    domain: 'imagenow.ie',
  },
  {
    name: 'Invoice Stack',
    domain: 'invoicestack.co',
  },
  {
    name: 'Aplo Group',
    domain: 'aplogroup.com',
  },
  {
    name: 'Conga',
    domain: 'conga.com',
  },
  {
    name: 'Rednellac',
    domain: 'rednellac.com',
  },
  {
    name: 'StreamTech Ltd',
    domain: 'go2stream.com',
  },
  {
    name: 'Uniphore',
    domain: 'uniphore.com',
  },
  {
    name: 'Synack',
    domain: 'synack.com',
  },
  {
    name: 'Denim (Formerly Axle Payments)',
    domain: 'denim.com',
  },
  {
    name: 'Stitchd',
    domain: 'stitchd.be',
  },
  {
    name: 'Causiq',
    domain: 'causiq.com',
  },
  {
    name: 'Agora',
    domain: 'agorareal.com',
  },
  {
    name: 'Luz',
    domain: 'tryluz.com',
  },
  {
    name: 'SalesPlaybook',
    domain: 'thesalesplaybook.io',
  },
  {
    name: 'Ambee',
    domain: 'getambee.com',
  },
  {
    name: 'SQUAKE',
    domain: 'squake.earth',
  },
  {
    name: 'Semji',
    domain: 'semji.com',
  },
  {
    name: 'Exclaimer',
    domain: 'exclaimer.com',
  },
  {
    name: 'Cherrill Consulting Group',
    domain: 'cherrillconsulting.com',
  },
  {
    name: 'Transaction Cloud',
    domain: 'transaction.cloud',
  },
  {
    name: 'Merkle',
    domain: 'merkle.com',
  },
  {
    name: 'Revenue Precision',
    domain: 'revenueprecision.com',
  },
  {
    name: 'AODocs',
    domain: 'altirnao.com',
  },
  {
    name: 'Fraudio',
    domain: 'fraudio.com',
  },
  {
    name: 'Cloud Journey Consulting Group',
    domain: 'cloudjourneygroup.com',
  },
  {
    name: 'aconso',
    domain: 'aconso.com',
  },
  {
    name: 'Lender Toolkit',
    domain: 'lendertoolkit.com',
  },
  {
    name: 'Eureka Security',
    domain: 'eureka.security',
  },
  {
    name: 'Dynamics Square UK',
    domain: 'dynamicssquare.co.uk',
  },
  {
    name: 'Brilliant',
    domain: 'brilliant.tech',
  },
  {
    name: 'TopBuilder',
    domain: 'topbuildersolutions.com',
  },
  {
    name: 'Enterprise Cloud Solutions, Inc.',
    domain: 'eclouds.co',
  },
  {
    name: 'Business Warrior',
    domain: 'businesswarrior.com',
  },
  {
    name: 'Clinch',
    domain: 'clinch.co',
  },
  {
    name: 'Leaf Logistics',
    domain: 'leaflogistics.com',
  },
  {
    name: 'The Giving Block',
    domain: 'thegivingblock.com',
  },
  {
    name: 'Karlsson Global Solutions',
    domain: 'karlssonglobal.com',
  },
  {
    name: 'Ikigai',
    domain: 'ikigailabs.io',
  },
  {
    name: 'Parkable',
    domain: 'parkable.com',
  },
  {
    name: 'Indeed',
    domain: 'indeed.com',
  },
  {
    name: 'TechnologyOne',
    domain: 'technologyonecorp.com',
  },
  {
    name: 'Oculos AB',
    domain: 'oculos.no',
  },
  {
    name: 'Krix Loudspeakers',
    domain: 'krix.com.au',
  },
  {
    name: 'TwicPics',
    domain: 'twicpics.com',
  },
  {
    name: 'Upscope',
    domain: 'upscope.com',
  },
  {
    name: 'INCRMNTAL',
    domain: 'incrmntal.com',
  },
  {
    name: 'Sherpaneer Corporation',
    domain: 'sherpaneer.com',
  },
  {
    name: 'homeostase',
    domain: 'homeostase.pt',
  },
  {
    name: 'Root Digital',
    domain: 'rootdigital.ca',
  },
  {
    name: 'Amplify Group',
    domain: 'amplifyscales.com',
  },
  {
    name: 'CrowdStrike',
    domain: 'crowdstrike.com',
  },
  {
    name: 'Charmac',
    domain: 'charmac.com',
  },
  {
    name: 'Deskree',
    domain: 'deskree.com',
  },
  {
    name: 'Torii Industries',
    domain: 'toriiway.com',
  },
  {
    name: 'SaludConTech',
    domain: 'saludcontech.com',
  },
  {
    name: 'The Mirror',
    domain: 'themirror.space',
  },
  {
    name: 'Velotix',
    domain: 'velotix.ai',
  },
  {
    name: 'Fynd',
    domain: 'fynd.com',
  },
  {
    name: 'JewelML',
    domain: 'jewelml.com',
  },
  {
    name: 'Komo',
    domain: 'komo.tech',
  },
  {
    name: 'Shopassist Australia',
    domain: 'shopassist.com.au',
  },
  {
    name: 'THINK',
    domain: 'think.org.za',
  },
  {
    name: 'TWRT',
    domain: 'twrt.com.br',
  },
  {
    name: 'Zinc Work',
    domain: 'zincwork.com',
  },
  {
    name: 'NetElixir',
    domain: 'netelixir.com',
  },
  {
    name: 'Mone On Marcas',
    domain: 'moveonmarcas.com.br',
  },
  {
    name: 'Aptaria, Inc.',
    domain: 'aptaria.com',
  },
  {
    name: 'Portable Electric',
    domain: 'portable-electric.com',
  },
  {
    name: 'Zivra',
    domain: 'zivra.com',
  },
  {
    name: 'Skuid',
    domain: 'skuid.com',
  },
  {
    name: 'MarketBeam',
    domain: 'marketbeam.io',
  },
  {
    name: 'TELUS International',
    domain: 'xavient.com',
  },
  {
    name: 'Last9 Inc',
    domain: 'last9.io',
  },
  {
    name: 'Whistic',
    domain: 'whistic.com',
  },
  {
    name: 'Softprovider',
    domain: 'softprovider.com.co',
  },
  {
    name: 'Ellicium Solutions Pty Ltd.',
    domain: 'ellicium.com',
  },
  {
    name: 'Sampl Technologies Ltd',
    domain: 'sampltech.com',
  },
  {
    name: 'SCHMACK',
    domain: 'schmack.co',
  },
  {
    name: 'SSP',
    domain: 'sspayment.com',
  },
  {
    name: 'TruckerCloud',
    domain: 'truckercloud.com',
  },
  {
    name: 'AskSuite',
    domain: 'asksuite.com',
  },
  {
    name: 'Delivra',
    domain: 'delivra.com',
  },
  {
    name: 'Sumo Logic',
    domain: 'sumologic.com',
  },
  {
    name: 'Raptor Services',
    domain: 'raptorservices.com',
  },
  {
    name: 'Knightsbridge',
    domain: 'thisisknightsbridge.com',
  },
  {
    name: 'Ware2Go',
    domain: 'ware2go.co',
  },
  {
    name: 'Truffle Security',
    domain: 'trufflesecurity.com',
  },
  {
    name: 'Merkit Consulting',
    domain: 'merkit.hu',
  },
  {
    name: 'Configo Health',
    domain: 'configohealth.com',
  },
  {
    name: 'Pillar',
    domain: 'pillar.hr',
  },
  {
    name: 'GateHouse Maritime',
    domain: 'gatehousemaritime.com',
  },
  {
    name: '66degrees',
    domain: '66degrees.com',
  },
  {
    name: 'Duty Refunds',
    domain: 'dutyrefunds.co.uk',
  },
  {
    name: 'Kaching Appz',
    domain: 'kachingappz.com',
  },
  {
    name: 'Sidebrief',
    domain: 'sidebrief.com',
  },
  {
    name: 'Alkeme',
    domain: 'alkemeagency.com',
  },
  {
    name: 'Capital One Software',
    domain: 'capitalone.com',
  },
  {
    name: 'Terrakai Skin',
    domain: 'terrakaiskin.com',
  },
  {
    name: 'Bazo',
    domain: 'bazo.co',
  },
  {
    name: 'Dreamztech',
    domain: 'dreamztech.com',
  },
  {
    name: 'Reklaim',
    domain: 'reklaimyours.com',
  },
  {
    name: 'OrthoFi',
    domain: 'orthofi.com',
  },
  {
    name: 'Small Batch Learning',
    domain: 'smallbatchlearning.com',
  },
  {
    name: 'Essentials',
    domain: 'essential-apps.com',
  },
  {
    name: 'HIVA ATELIER',
    domain: 'hivaatelier.com',
  },
  {
    name: 'dkd Internet Service gmbH',
    domain: 'dkd.de',
  },
  {
    name: 'Bozala.',
    domain: 'bozala.software',
  },
  {
    name: 'Rabot',
    domain: 'rabot.us',
  },
  {
    name: 'GrokSpark Inc.',
    domain: 'grokspark.com',
  },
  {
    name: 'PolyAI',
    domain: 'poly.ai',
  },
  {
    name: 'Openforce',
    domain: 'oforce.com',
  },
  {
    name: 'UserVoice',
    domain: 'uservoice.com',
  },
  {
    name: 'Repli',
    domain: 'repli360.com',
  },
  {
    name: 'Netlify',
    domain: 'netlify.com',
  },
  {
    name: 'GitHub',
    domain: 'github.com',
  },
  {
    name: 'T-Systems Multimedia Solutions GmbH',
    domain: 't-systems-mms.com',
  },
  {
    name: 'Improntus',
    domain: 'improntus.com',
  },
  {
    name: 'Blacc Spot Media',
    domain: 'blaccspotmedia.com',
  },
  {
    name: 'ATMECS GLOBAL INC.',
    domain: 'atmecs.com',
  },
  {
    name: 'Greenshades',
    domain: 'greenshades.com',
  },
  {
    name: 'RMM Consulting',
    domain: 'rmmconsultinggroup.com',
  },
  {
    name: 'ICECAT',
    domain: 'icecat.com',
  },
  {
    name: 'Enehano Solutions s.r.o.',
    domain: 'enehano.cz',
  },
  {
    name: 'Merchlink',
    domain: 'merchlink.io',
  },
  {
    name: 'Wolftech Broadcast Solutions',
    domain: 'wolftech.no',
  },
  {
    name: 'Moonsoft Oy',
    domain: 'moonsoft.com',
  },
  {
    name: 'ShareDocView',
    domain: 'sharedocview.com',
  },
  {
    name: 'Wideview',
    domain: 'wideview.io',
  },
  {
    name: 'AXELERANT TECHNOLOGIES INC.',
    domain: 'axelerant.com',
  },
  {
    name: 'Argano',
    domain: 'argano.com',
  },
  {
    name: 'APS Payroll',
    domain: 'apspayroll.com',
  },
  {
    name: 'Grownity Media',
    domain: 'grownitymedia.com',
  },
  {
    name: 'TakeShape',
    domain: 'takeshape.io',
  },
  {
    name: 'Maergo',
    domain: 'maergo.com',
  },
  {
    name: 'YourEVSE',
    domain: 'yourevse.com',
  },
  {
    name: 'Deviniti',
    domain: 'deviniti.com',
  },
  {
    name: 'Roofr Inc',
    domain: 'roofr.com',
  },
  {
    name: 'Box Genie',
    domain: 'boxgenie.com',
  },
  {
    name: 'Turbo.net',
    domain: 'turbo.net',
  },
  {
    name: 'Reltio',
    domain: 'reltio.com',
  },
  {
    name: 'Byteplexure',
    domain: 'byteplexure.com',
  },
  {
    name: 'Airplane',
    domain: 'airplane.dev',
  },
  {
    name: 'PAY.',
    domain: 'pay.nl',
  },
  {
    name: 'Core VP',
    domain: 'corevp.co',
  },
  {
    name: 'Crossbeam',
    domain: 'partnercloud.crossbeam.com',
  },
  {
    name: 'Marketing Automation Canada',
    domain: 'marketing-automation.ca',
  },
  {
    name: 'Nextail',
    domain: 'nextail.co',
  },
  {
    name: 'Nibble Technology',
    domain: 'nibbletechnology.com',
  },
  {
    name: 'Karimata AI',
    domain: 'karimata.com.br',
  },
  {
    name: 'Yeeboo Digital',
    domain: 'yeeboodigital.com',
  },
  {
    name: 'SPS Commerce',
    domain: 'spscommerce.com',
  },
  {
    name: 'Z7 Solutions',
    domain: 'z7solutions.com',
  },
  {
    name: 'ClearPeaks',
    domain: 'clearpeaks.com',
  },
  {
    name: 'NextUser',
    domain: 'nextuser.com',
  },
  {
    name: 'Favor Delivery',
    domain: 'favordelivery.com',
  },
  {
    name: 'Vaultry',
    domain: 'vaultry.com',
  },
  {
    name: 'Arifpay',
    domain: 'arifpay.net',
  },
  {
    name: 'Cooley Digital ApS',
    domain: 'cooley.digital',
  },
  {
    name: 'Tjoernelund',
    domain: 'tjoernelund.dk',
  },
  {
    name: 'Inbound FinTech',
    domain: 'inboundfintech.com',
  },
  {
    name: 'Labelf AI',
    domain: 'labelf.ai',
  },
  {
    name: 'Zento',
    domain: 'zento.fr',
  },
  {
    name: 'Pearson',
    domain: 'pearson.com',
  },
  {
    name: 'Soldi Unlimited',
    domain: 'soldi.io',
  },
  {
    name: 'SWNetwork GmbH',
    domain: 'swnetwork.de',
  },
  {
    name: 'Zoomin Software',
    domain: 'zoominsoftware.com',
  },
  {
    name: 'Ohi',
    domain: 'ohi.com',
  },
  {
    name: 'Swapt',
    domain: 'swaptqr.com',
  },
  {
    name: 'Riskpro India',
    domain: 'riskpro.in',
  },
  {
    name: 'Donorfy',
    domain: 'donorfy.com',
  },
  {
    name: 'SalesWings',
    domain: 'saleswingsapp.com',
  },
  {
    name: 'leadPops, Inc.',
    domain: 'leadpops.com',
  },
  {
    name: 'Asean Consulting (UK)Limited',
    domain: 'aseanuk.com',
  },
  {
    name: 'relode',
    domain: 'relode.com',
  },
  {
    name: 'agnoStack',
    domain: 'agnostack.com',
  },
  {
    name: 'Apex Capital',
    domain: 'apexcapitalcorp.com',
  },
  {
    name: 'Megaport (USA), INC',
    domain: 'megaport.com',
  },
  {
    name: 'BTS Design Innovation srl',
    domain: 'btsdi.it',
  },
  {
    name: 'HCM TradeSeal',
    domain: 'hcmtradeseal.com',
  },
  {
    name: 'Horsefly Analytics',
    domain: 'horseflyanalytics.com',
  },
  {
    name: 'IT SMART CONNECTED 360',
    domain: 'itsmartconnected360.com',
  },
  {
    name: 'Foreplay',
    domain: 'foreplay.co',
  },
  {
    name: 'easy-connect',
    domain: 'easy-connect.io',
  },
  {
    name: 'Smarten Spaces',
    domain: 'smartenspaces.com',
  },
  {
    name: 'Share Creative',
    domain: 'sharecreative.com',
  },
  {
    name: 'Salius Pharma',
    domain: 'saliuspharma.in',
  },
  {
    name: 'iO',
    domain: 'iodigital.com',
  },
  {
    name: 'Aurea',
    domain: 'aurea.com',
  },
  {
    name: 'Accessible by Design',
    domain: 'accessiblebydesign.co.uk',
  },
  {
    name: 'Wowwowsoftwaredeals',
    domain: 'wowwowsoftwaredeals.com',
  },
  {
    name: 'Reebelo',
    domain: 'reebelo.com',
  },
  {
    name: 'Fenris Digital',
    domain: 'fenrisd.com',
  },
  {
    name: 'Wesual',
    domain: 'wesual.co',
  },
  {
    name: 'Truelty',
    domain: 'truelty.com',
  },
  {
    name: 'Driftrock',
    domain: 'driftrock.com',
  },
  {
    name: 'Aquiva Labs',
    domain: 'aquivalabs.com',
  },
  {
    name: 'Onehouse',
    domain: 'onehouse.ai',
  },
  {
    name: 'RS Metrics',
    domain: 'rsmetrics.com',
  },
  {
    name: 'Samsara',
    domain: 'samsara.com',
  },
  {
    name: 'Liberty Fox Technologies',
    domain: 'libertyfoxtech.com',
  },
  {
    name: '2X Marketing',
    domain: '2x.marketing',
  },
  {
    name: 'Skylab Media',
    domain: 'skylabx.com',
  },
  {
    name: 'Squeezely',
    domain: 'squeezely.tech',
  },
  {
    name: 'YouLoveWords',
    domain: 'youlovewords.com',
  },
  {
    name: 'Persio',
    domain: 'persio.io',
  },
  {
    name: 'BlaBlaCar',
    domain: 'blablacar.fr',
  },
  {
    name: 'Bond Brand Loyalty',
    domain: 'bondbrandloyalty.com',
  },
  {
    name: 'MARTECH3D',
    domain: 'martech3d.com',
  },
  {
    name: 'UnderDefense Inc',
    domain: 'underdefense.com',
  },
  {
    name: 'Nylas',
    domain: 'nylas.com',
  },
  {
    name: 'Digital Missions Project',
    domain: 'digitalmissionsproject.com',
  },
  {
    name: 'Payactiv',
    domain: 'payactiv.com',
  },
  {
    name: 'Hopara',
    domain: 'hopara.io',
  },
  {
    name: 'Vinculum Group',
    domain: 'vinculumgroup.com',
  },
  {
    name: 'Struto',
    domain: 'struto.io',
  },
  {
    name: 'Array, Inc.',
    domain: 'array.com',
  },
  {
    name: 'Comcast Technology Solutions',
    domain: 'comcasttechnologysolutions.com',
  },
  {
    name: 'Sapia.ai',
    domain: 'sapia.ai',
  },
  {
    name: 'Orderbot Software',
    domain: 'orderbot.com',
  },
  {
    name: 'CauseMic',
    domain: 'causemic.com',
  },
  {
    name: 'PT. All Data International',
    domain: 'alldataint.com',
  },
  {
    name: 'PortPro Technologies',
    domain: 'portpro.io',
  },
  {
    name: 'NexusTek',
    domain: 'nexustek.com',
  },
  {
    name: 'Island',
    domain: 'island.io',
  },
  {
    name: 'illumex technologies',
    domain: 'illumex.ai',
  },
  {
    name: 'Bennell',
    domain: 'bennell.com.au',
  },
  {
    name: 'Util',
    domain: 'util.co',
  },
  {
    name: 'Straker Translations',
    domain: 'strakertranslations.com',
  },
  {
    name: 'Advisewell',
    domain: 'advisewell.com',
  },
  {
    name: 'Valcon',
    domain: 'valcon.com',
  },
  {
    name: 'DojoNetworks',
    domain: 'dojonetworks.com',
  },
  {
    name: 'Launchpad Technologies',
    domain: 'golaunchpad.io',
  },
  {
    name: 'ShoppingGives',
    domain: 'shoppinggives.com',
  },
  {
    name: 'Jet Admin',
    domain: 'jetadmin.io',
  },
  {
    name: 'tsworks technologies inc',
    domain: 'tsworks.io',
  },
  {
    name: 'BoxHero Logistics Corp',
    domain: 'boxhero.com',
  },
  {
    name: 'Integral Recruiting Design',
    domain: 'integralrecruiting.com',
  },
  {
    name: 'Sleepless Media',
    domain: 'sleeplessmedia.com',
  },
  {
    name: 'RainierDigital',
    domain: 'rainierdigital.com',
  },
  {
    name: 'JARS Digital',
    domain: 'jarsdigital.com',
  },
  {
    name: 'The Product Alliance',
    domain: 'product-alliance.com',
  },
  {
    name: 'OneSpan',
    domain: 'onespan.com',
  },
  {
    name: 'Knotch',
    domain: 'knotch.com',
  },
  {
    name: 'Push.ai',
    domain: 'push.ai',
  },
  {
    name: 'raffle.ai',
    domain: 'raffle.ai',
  },
  {
    name: 'BYOND Creative',
    domain: 'byond.la',
  },
  {
    name: 'Leapfin',
    domain: 'leapfin.com',
  },
  {
    name: 'Medtrainer',
    domain: 'medtrainer.com',
  },
  {
    name: 'bettr.email',
    domain: 'bettr.email',
  },
  {
    name: 'Genea',
    domain: 'getgenea.com',
  },
  {
    name: 'Nelnet Campus Commerce',
    domain: 'campuscommerce.com',
  },
  {
    name: 'Arize AI',
    domain: 'arize.com',
  },
  {
    name: 'Sryas',
    domain: 'sryas.com',
  },
  {
    name: 'Save the Children International',
    domain: 'mali.savethechildren.net',
  },
  {
    name: 'Humanforce',
    domain: 'humanforce.com',
  },
  {
    name: 'Playrcart',
    domain: 'playrcart.com',
  },
  {
    name: 'Legacy e-commerce B.V.',
    domain: 'legacy.nu',
  },
  {
    name: 'Adastra Business Consulting',
    domain: 'adastra-abc.com',
  },
  {
    name: 'SS&C Intralinks',
    domain: 'intralinks.com',
  },
  {
    name: 'Kolme Group',
    domain: 'kolmegroup.com',
  },
  {
    name: 'Dreamin - App Growth Marketers',
    domain: 'dreamin.io',
  },
  {
    name: 'Make (formerly Integromat)',
    domain: 'make.com',
  },
  {
    name: 'The Juice',
    domain: 'thejuicehq.com',
  },
  {
    name: 'RAIDLOG',
    domain: 'raidlog.com',
  },
  {
    name: 'E-Distribution',
    domain: 'e-dist.com',
  },
  {
    name: 'Yogi',
    domain: 'meetyogi.com',
  },
  {
    name: 'Gurucul',
    domain: 'gurucul.com',
  },
  {
    name: 'Chorus One',
    domain: 'chorus.one',
  },
  {
    name: 'Shipperbuddy',
    domain: 'shipperbuddy.com',
  },
  {
    name: 'Speak',
    domain: 'speak.careers',
  },
  {
    name: 'Giftsenda',
    domain: 'giftsenda.com',
  },
  {
    name: 'Rich Returns',
    domain: 'richcommerce.co',
  },
  {
    name: 'Conversion Bear',
    domain: 'conversionbear.com',
  },
  {
    name: 'Broadleaf Global',
    domain: 'broadleafglobal.net',
  },
  {
    name: 'Gan.ai',
    domain: 'gan.ai',
  },
  {
    name: 'Arqit',
    domain: 'arqit.uk',
  },
  {
    name: 'Leo Prestte',
    domain: 'leoprestte.com',
  },
  {
    name: 'Jetveo',
    domain: 'jetveo.io',
  },
  {
    name: 'Zinc Systems',
    domain: 'zinc.systems',
  },
  {
    name: 'Bitskout',
    domain: 'bitskout.com',
  },
  {
    name: 'Ntantas Corporation',
    domain: 'ntantas.odoo.com',
  },
  {
    name: 'Optimajet Limited',
    domain: 'optimajet.com',
  },
  {
    name: 'Lemonway',
    domain: 'lemonway.com',
  },
  {
    name: 'Disruptive Engineering Limited',
    domain: 'disruptive.engineering',
  },
  {
    name: 'Sellematics',
    domain: 'sellematics.com',
  },
  {
    name: 'Smile Digital Health',
    domain: 'smilecdr.com',
  },
  {
    name: 'Mosaic Consulting Group',
    domain: 'mosaic-cg.com',
  },
  {
    name: 'Vibenomics',
    domain: 'vibenomics.com',
  },
  {
    name: 'Operartis',
    domain: 'operartis.com',
  },
  {
    name: 'Branding Brand',
    domain: 'brandingbrand.com',
  },
  {
    name: 'Pulsar Media Inc',
    domain: 'pulsarmedia.io',
  },
  {
    name: 'BairesDev',
    domain: 'bairesdev.com',
  },
  {
    name: 'Atigro',
    domain: 'atigro.com',
  },
  {
    name: 'Sun Technologies Inc',
    domain: 'suntechnologies.com',
  },
  {
    name: 'BrainX Technologies',
    domain: 'brainxtech.com',
  },
  {
    name: 'Bloomerang',
    domain: 'bloomerang.com',
  },
  {
    name: 'A-Jour Net',
    domain: 'a-jour-net.com',
  },
  {
    name: 'Pyxis',
    domain: 'pyxis.com.uy',
  },
  {
    name: 'Whym',
    domain: 'whymwallet.com',
  },
  {
    name: 'Intradiem',
    domain: 'intradiem.com',
  },
  {
    name: 'Montreal Analytics',
    domain: 'montrealanalytics.com',
  },
  {
    name: 'Valuize',
    domain: 'valuize.co',
  },
  {
    name: 'CedCommerce',
    domain: 'cedcommerce.com',
  },
  {
    name: 'RightBound',
    domain: 'rightbound.io',
  },
  {
    name: 'Twixor',
    domain: 'twixor.com',
  },
  {
    name: 'Y42',
    domain: 'y42.com',
  },
  {
    name: 'Concept Services',
    domain: 'conceptltd.com',
  },
  {
    name: 'AR_Book',
    domain: 'arbook.info',
  },
  {
    name: 'WodCat - WOD - workout tracker',
    domain: 'wodcat.com',
  },
  {
    name: 'Annex Cloud',
    domain: 'annexcloud.com',
  },
  {
    name: 'MetaInsVerse LLC',
    domain: 'metainsverse.com',
  },
  {
    name: 'Equator',
    domain: 'eqtr.com',
  },
  {
    name: 'Mimecast',
    domain: 'mimecast.com',
  },
  {
    name: 'Grazitti Interactive',
    domain: 'grazitti.com',
  },
  {
    name: 'Conversion Logix',
    domain: 'conversionlogix.com',
  },
  {
    name: 'imtrained',
    domain: 'imtrained.in',
  },
  {
    name: 'Sii Poland',
    domain: 'sii.pl',
  },
  {
    name: 'Calendly',
    domain: 'calendly.com',
  },
  {
    name: 'Hoist',
    domain: 'hoist.digital',
  },
  {
    name: 'Supl.ai Analytics',
    domain: 'supl.ai',
  },
  {
    name: 'StoryStream',
    domain: 'storystream.ai',
  },
  {
    name: 'Zenstores',
    domain: 'zenstores.com',
  },
  {
    name: 'Kega',
    domain: 'kega.nl',
  },
  {
    name: 'Meera.ai',
    domain: 'meera.ai',
  },
  {
    name: 'Dakika Reklam Google Reklam Ajansı',
    domain: 'dakikareklam.com',
  },
  {
    name: 'Nutanix, Inc.',
    domain: 'nutanix.com',
  },
  {
    name: 'Johnson and Johnson',
    domain: 'jnj.com',
  },
  {
    name: 'Neocom',
    domain: 'neocom.ai',
  },
  {
    name: 'Unleashed Software',
    domain: 'unleashedsoftware.com',
  },
  {
    name: 'SAS Institute, Inc.',
    domain: 'sas.com',
  },
  {
    name: 'ATG Cognizant',
    domain: 'atginfo.com',
  },
  {
    name: 'SearchStax',
    domain: 'searchstax.com',
  },
  {
    name: 'Maker.Tech',
    domain: 'maker.tech',
  },
  {
    name: 'Sharry',
    domain: 'sharry.tech',
  },
  {
    name: 'imcoworker',
    domain: 'imcoworker.com',
  },
  {
    name: 'Hofy',
    domain: 'hofy.com',
  },
  {
    name: 'PipeCodes',
    domain: 'pipecodes.com',
  },
  {
    name: 'Cleeng',
    domain: 'cleeng.com',
  },
  {
    name: 'SEAQ SERVICIOS SAS',
    domain: 'seaq.co',
  },
  {
    name: 'Wiser',
    domain: 'getwiser.ai',
  },
  {
    name: 'Fulfilmentcrowd Limited',
    domain: 'fulfilmentcrowd.com',
  },
  {
    name: 'NeoWork',
    domain: 'neowork.com',
  },
  {
    name: 'Lawpath',
    domain: 'lawpath.com.au',
  },
  {
    name: 'Chatchamp',
    domain: 'chatchamp.com',
  },
  {
    name: 'Yellow',
    domain: 'yellowhq.co',
  },
  {
    name: 'Element Ventures',
    domain: 'elementventures.vc',
  },
  {
    name: 'Doosty',
    domain: 'doosty.com',
  },
  {
    name: 'Lanor',
    domain: 'lanor.io',
  },
  {
    name: 'ContentWise',
    domain: 'fashion.contentwise.com',
  },
  {
    name: 'Orium (formerly Myplanet)',
    domain: 'orium.com',
  },
  {
    name: 'FlowFi',
    domain: 'flowfi.com',
  },
  {
    name: 'entrapeer',
    domain: 'entrapeer.com',
  },
  {
    name: 'Maximizer CRM',
    domain: 'maximizer.com',
  },
  {
    name: 'Symplicity Communications',
    domain: 'symplicitycom.com',
  },
  {
    name: 'Ninetailed',
    domain: 'ninetailed.io',
  },
  {
    name: 'LoanPro',
    domain: 'loanpro.io',
  },
  {
    name: 'Dwelo',
    domain: 'dwelo.com',
  },
  {
    name: 'Thirstie, Inc.',
    domain: 'thirstie.com',
  },
  {
    name: 'Opterus',
    domain: 'opterus.com',
  },
  {
    name: 'APIANT',
    domain: 'apiant.com',
  },
  {
    name: 'V-Soft Consulting Group',
    domain: 'vsoftconsulting.com',
  },
  {
    name: 'Simple Money Choices',
    domain: 'simplemoneychoices.com',
  },
  {
    name: 'ITsavvy LLC',
    domain: 'itsavvy.com',
  },
  {
    name: 'Raindrop',
    domain: 'raindrop.agency',
  },
  {
    name: 'No Limit Email',
    domain: 'nolimitemail.com',
  },
  {
    name: 'Global Database',
    domain: 'globaldatabase.com',
  },
  {
    name: 'Flex Cosmetics',
    domain: 'flexcosmetics.com',
  },
  {
    name: 'Buildots',
    domain: 'buildots.com',
  },
  {
    name: 'Logicalis',
    domain: 'logicalis.com',
  },
  {
    name: 'Synergy818',
    domain: 'synergy818.com',
  },
  {
    name: 'Private Mutual Investments, Inc',
    domain: 'privatemutualinvestments.com',
  },
  {
    name: 'IzySoft',
    domain: 'izysoft.com.br',
  },
  {
    name: 'Theobald Software',
    domain: 'theobald-software.com',
  },
  {
    name: 'Digital Woods',
    domain: 'digitalwoods.net',
  },
  {
    name: 'Firebrand Communications',
    domain: 'firebrand.marketing',
  },
  {
    name: 'Accorian',
    domain: 'accorian.com',
  },
  {
    name: 'Restoke',
    domain: 'restoke.ai',
  },
  {
    name: 'Relevance One',
    domain: 'relevanceone.com',
  },
  {
    name: 'Globaltact',
    domain: 'globaltact.com',
  },
  {
    name: 'Codecov',
    domain: 'codecov.io',
  },
  {
    name: 'ADvendio',
    domain: 'advendio.com',
  },
  {
    name: 'ASPER BROTHERS',
    domain: 'asperbrothers.com',
  },
  {
    name: 'KHWS Ltd',
    domain: 'khws.co.uk',
  },
  {
    name: 'RelPro',
    domain: 'relpro.com',
  },
  {
    name: 'Vajro',
    domain: 'vajro.com',
  },
  {
    name: 'Sitation',
    domain: 'sitation.com',
  },
  {
    name: 'Onward',
    domain: 'useonward.com',
  },
  {
    name: 'Packsmith',
    domain: 'packsmith.io',
  },
  {
    name: 'Cadastra',
    domain: 'cadastra.com',
  },
  {
    name: 'swerveluxe',
    domain: 'swerveluxe.com',
  },
  {
    name: 'Trainual',
    domain: 'trainual.com',
  },
  {
    name: 'maxware solution',
    domain: 'maxwareiq.com',
  },
  {
    name: 'Lanum Tecnologia da Informacao',
    domain: 'lanum.com.br',
  },
  {
    name: 'PINS',
    domain: 'pinsadvantage.com',
  },
  {
    name: 'APrime Technology',
    domain: 'aprime.io',
  },
  {
    name: 'Stay At Home Docs',
    domain: 'stayathomedocs.com',
  },
  {
    name: 'Red Cape Agency',
    domain: 'redcapeagency.com',
  },
  {
    name: 'SegmentStream',
    domain: 'segmentstream.com',
  },
  {
    name: 'Lilienthal & Co',
    domain: 'lilienthal.co',
  },
  {
    name: 'Pluo',
    domain: 'pluo.jobs',
  },
  {
    name: 'Evisort',
    domain: 'evisort.com',
  },
  {
    name: 'MaxMedia',
    domain: 'maxmedia.com',
  },
  {
    name: 'GiveCampus',
    domain: 'go.givecampus.com',
  },
  {
    name: 'Kombo',
    domain: 'kombo.dev',
  },
  {
    name: 'PaperBoat Ltd.',
    domain: 'prodeology.com',
  },
  {
    name: 'Upstock',
    domain: 'upstock.app',
  },
  {
    name: 'Fleet Device Management',
    domain: 'fleetdm.com',
  },
  {
    name: 'Yoszi',
    domain: 'yoszi.com',
  },
  {
    name: 'Spellbound',
    domain: 'spellbound.io',
  },
  {
    name: 'Milkman Technologies',
    domain: 'milkmantechnologies.com',
  },
  {
    name: 'PiLog Group',
    domain: 'piloggroup.com',
  },
  {
    name: 'Echobox',
    domain: 'echobox.com',
  },
  {
    name: 'carbonze',
    domain: 'carbonze.com',
  },
  {
    name: 'Alex Margarit',
    domain: 'alexmargarit.co.uk',
  },
  {
    name: '4ALLPORTAL GmbH',
    domain: '4allportal.com',
  },
  {
    name: 'Multiminds',
    domain: 'multiminds.eu',
  },
  {
    name: 'Protagona LLC',
    domain: 'protagona.com',
  },
  {
    name: 'Unified Streaming',
    domain: 'unified-streaming.com',
  },
  {
    name: 'Runecast',
    domain: 'runecast.com',
  },
  {
    name: 'Maxwellian',
    domain: 'maxwellian.com',
  },
  {
    name: 'Growberry',
    domain: 'growberry.io',
  },
  {
    name: 'Valley City Sign',
    domain: 'valleycitysign.com',
  },
  {
    name: 'atlas',
    domain: 'atlashxm.com',
  },
  {
    name: 'EVOTEK',
    domain: 'evotek.com',
  },
  {
    name: 'FloorFound Inc.',
    domain: 'floorfound.com',
  },
  {
    name: 'Ivor Andrew',
    domain: 'ivorandrew.com',
  },
  {
    name: 'Edge Tek Advisors',
    domain: 'edgetekadvisors.com',
  },
  {
    name: 'The Intelligence Exchange',
    domain: 'intelligenceexchange.ai',
  },
  {
    name: 'Magit',
    domain: 'mag-it.com.br',
  },
  {
    name: 'Banuba',
    domain: 'banuba.com',
  },
  {
    name: 'Data Minded',
    domain: 'dataminded.com',
  },
  {
    name: 'codegiant',
    domain: 'codegiant.io',
  },
  {
    name: 'Opaque',
    domain: 'opaque.co',
  },
  {
    name: 'Limesharp',
    domain: 'limesharp.net',
  },
  {
    name: 'RabbitLoader',
    domain: 'rabbitloader.com',
  },
  {
    name: 'TELCO',
    domain: 'telcohumanmedia.com',
  },
  {
    name: 'Neotas Limited',
    domain: 'neotas.com',
  },
  {
    name: 'Zi Cloud',
    domain: 'zicloud.in',
  },
  {
    name: 'London Data Consulting (LDC)',
    domain: 'london-data-consulting.com',
  },
  {
    name: 'Omilia',
    domain: 'omilia.com',
  },
  {
    name: 'EveryStreet',
    domain: 'everystreet.co',
  },
  {
    name: 'Adikteev Inc',
    domain: 'adikteev.com',
  },
  {
    name: 'Swageazy',
    domain: 'swageazy.com',
  },
  {
    name: 'StreamIN',
    domain: 'streamin.com.au',
  },
  {
    name: 'X3',
    domain: 'x3labs.co',
  },
  {
    name: 'Akoova ltd',
    domain: 'akoova.com',
  },
  {
    name: 'Manobyte',
    domain: 'manobyte.com',
  },
  {
    name: 'Lima Consulting Group',
    domain: 'limaconsulting.com',
  },
  {
    name: 'Adverity',
    domain: 'adverity.com',
  },
  {
    name: '24/7 Software',
    domain: '247software.com',
  },
  {
    name: 'Innovate Group',
    domain: 'innovategroup.agency',
  },
  {
    name: 'Vena Solutions',
    domain: 'venasolutions.com',
  },
  {
    name: 'icepop',
    domain: 'icepop.co',
  },
  {
    name: 'Rubber Tree Systems',
    domain: 'rubbertreesystems.net',
  },
  {
    name: 'Tinloof',
    domain: 'tinloof.com',
  },
  {
    name: 'Shopspray',
    domain: 'shopspray.com',
  },
  {
    name: 'OptIQ',
    domain: 'optiq.ai',
  },
  {
    name: 'Converge',
    domain: 'runconverge.com',
  },
  {
    name: 'SmatBot',
    domain: 'smatbot.com',
  },
  {
    name: 'SalesX',
    domain: 'salesx.be',
  },
  {
    name: 'IQM Corporation',
    domain: 'iqm.com',
  },
  {
    name: 'Vendor Choice LLC',
    domain: 'vendorchoice.com',
  },
  {
    name: 'theAppPlace (TAP) Innovations',
    domain: 'tapinnov.com',
  },
  {
    name: '28 Premium Coffee',
    domain: 'coffeethatdoesmore.com',
  },
  {
    name: 'NOVOS',
    domain: 'thisisnovos.com',
  },
  {
    name: 'GeekHunter',
    domain: 'geekhunter.io',
  },
  {
    name: 'Capture Ltd',
    domain: 'capture.co.uk',
  },
  {
    name: 'Hanzo',
    domain: 'hanzo.co',
  },
  {
    name: 'Copaco Nederland B.V.',
    domain: 'copaco.com',
  },
  {
    name: 'CXChronicles',
    domain: 'cxchronicles.com',
  },
  {
    name: 'Loyalty Juggernaut',
    domain: 'lji.io',
  },
  {
    name: 'live data solutions',
    domain: 'livedata-solutions.com',
  },
  {
    name: 'Truto',
    domain: 'truto.one',
  },
  {
    name: 'Health Professionals Alliance',
    domain: 'hpamembers.com',
  },
  {
    name: 'Inpensa',
    domain: 'inpensa.com',
  },
  {
    name: 'Oddit',
    domain: 'oddit.co',
  },
  {
    name: 'MicroMeshGutterGuards.com',
    domain: 'micromeshgutterguards.com',
  },
  {
    name: 'BrightVine Solutions',
    domain: 'brightvinesolutions.com',
  },
  {
    name: 'Framework Science',
    domain: 'fwscience.com',
  },
  {
    name: 'Clutchgrowth',
    domain: 'clutchgrowth.com',
  },
  {
    name: 'HAAS Alert',
    domain: 'haasalert.com',
  },
  {
    name: 'CIMCON Digital',
    domain: 'cimcondigital.com',
  },
  {
    name: 'fulfillmenttools',
    domain: 'fulfillmenttools.com',
  },
  {
    name: 'Ground Up Ventures',
    domain: 'groundup.vc',
  },
  {
    name: 'Scrut Automation',
    domain: 'scrut.io',
  },
  {
    name: 'AppTweak',
    domain: 'apptweak.com',
  },
  {
    name: 'Chapter E',
    domain: 'chapter-e.com',
  },
  {
    name: 'Mendix',
    domain: 'mendix.com',
  },
  {
    name: 'Elevatus',
    domain: 'elevatus.io',
  },
  {
    name: 'Mule',
    domain: 'mule.app',
  },
  {
    name: 'Sales as a System',
    domain: 'salesasasystem.com',
  },
  {
    name: 'Sirion',
    domain: 'sirionlabs.com',
  },
  {
    name: 'Shipster Solutions',
    domain: 'shipstersolutions.com',
  },
  {
    name: 'BI:PROCSI',
    domain: 'biprocsi.co.uk',
  },
  {
    name: 'Latamdata',
    domain: 'latamdata.com',
  },
  {
    name: 'Kinect Consulting',
    domain: 'kinect-consulting.com',
  },
  {
    name: 'AVT Connect',
    domain: 'avtconnect.com',
  },
  {
    name: 'sudolabs',
    domain: 'sudolabs.io',
  },
  {
    name: 'Meezy',
    domain: 'meezy.eu',
  },
  {
    name: 'iBenjamen Studio',
    domain: 'ibenjamenstudio.com',
  },
  {
    name: 'GPS Insight',
    domain: 'gpsinsight.com',
  },
  {
    name: 'Flieber',
    domain: 'flieber.com',
  },
  {
    name: 'stitch',
    domain: 'stitchtech.co',
  },
  {
    name: 'ShipNetwork',
    domain: 'shipnetwork.com',
  },
  {
    name: 'Muranix',
    domain: 'muranix.com',
  },
  {
    name: 'NYMO & Co.',
    domain: 'nymo.co',
  },
  {
    name: 'Alley',
    domain: 'alley-group.com',
  },
  {
    name: 'Viare',
    domain: 'viare.io',
  },
  {
    name: 'OzTech, Inc.',
    domain: 'michaelcottam.com',
  },
  {
    name: 'Rush Order',
    domain: 'rushorder.com',
  },
  {
    name: 'Indicium',
    domain: 'indicium.tech',
  },
  {
    name: 'WorkBright',
    domain: 'workbright.com',
  },
  {
    name: 'Centribal',
    domain: 'centribal.com',
  },
  {
    name: 'Assimil8',
    domain: 'assimil8.com',
  },
  {
    name: 'DNX Solutions',
    domain: 'dnx.solutions',
  },
  {
    name: 'Websmith Solution',
    domain: 'websmithsolution.com',
  },
  {
    name: 'Codecasper Technologies Pvt Ltd',
    domain: 'codecasper.com',
  },
  {
    name: '360&5',
    domain: '360and5.com',
  },
  {
    name: 'Ozone Overseas Pvt. Ltd.',
    domain: 'ozone-india.com',
  },
  {
    name: 'CCL',
    domain: 'capsule-corp.io',
  },
  {
    name: 'The YoungOnes B.V.',
    domain: 'youngones.com',
  },
  {
    name: 'Enriched Data, LLC',
    domain: 'enricheddata.com',
  },
  {
    name: 'Houads',
    domain: 'houads.com',
  },
  {
    name: 'Retention.com',
    domain: 'retention.com',
  },
  {
    name: 'Adwerx',
    domain: 'adwerx.com',
  },
  {
    name: 'GreyCastle Security',
    domain: 'greycastlesecurity.com',
  },
  {
    name: 'Albiware',
    domain: 'albiware.com',
  },
  {
    name: 'Entrust',
    domain: 'entrust.com',
  },
  {
    name: 'Smart Marketer',
    domain: 'smartmarketer.net',
  },
  {
    name: 'Virtual Corp., LLC',
    domain: 'virtual-corp.com',
  },
  {
    name: 'Sonatype - Partners',
    domain: 'sonatype-partners.com',
  },
  {
    name: 'Constructor.io',
    domain: 'constructor.io',
  },
  {
    name: 'John Kirkwood Technology Consulting',
    domain: 'johnkirkwood.ca',
  },
  {
    name: 'Esendex USA',
    domain: 'esendex.us',
  },
  {
    name: 'BILDIT',
    domain: 'bildit.co',
  },
  {
    name: 'Enteros, Inc',
    domain: 'enteros.com',
  },
  {
    name: 'Movespot',
    domain: 'movespotinc.com',
  },
  {
    name: 'Cobalt Robotics',
    domain: 'cobaltrobotics.com',
  },
  {
    name: 'Cira Apps Limited',
    domain: 'cirasync.com',
  },
  {
    name: 'TFiN Digital Consults & Media, LLC',
    domain: 'tfin.org',
  },
  {
    name: 'Rise DDS',
    domain: 'risedds.com',
  },
  {
    name: 'PayArc',
    domain: 'payarc.com',
  },
  {
    name: 'DataAutomation',
    domain: 'dataautomation.com',
  },
  {
    name: 'Telmai',
    domain: 'telm.ai',
  },
  {
    name: 'Prohaska Consulting',
    domain: 'prohaskaconsulting.com',
  },
  {
    name: 'Wellstack.ai',
    domain: 'wellstack.ai',
  },
  {
    name: 'Social Edge Consulting',
    domain: 'socialedgeconsulting.com',
  },
  {
    name: 'Glo3D',
    domain: 'glo3d.com',
  },
  {
    name: 'Big Human',
    domain: 'bighuman.com',
  },
  {
    name: 'Scytale',
    domain: 'scytale.ai',
  },
  {
    name: 'Cyberweb Hotels LLC',
    domain: 'cyberwebhotels.com',
  },
  {
    name: 'Verve Cloud',
    domain: 'vervecloud.com',
  },
  {
    name: 'aequilibrium',
    domain: 'aequilibrium.com',
  },
  {
    name: 'iSmartMap',
    domain: 'ismartmap.com',
  },
  {
    name: 'Recruitlio',
    domain: 'recruitlio.net',
  },
  {
    name: 'Reason',
    domain: 'reasonagency.co.nz',
  },
  {
    name: 'Blue NAP Americas',
    domain: 'bluenapamericas.com',
  },
  {
    name: 'Semgrep',
    domain: 'semgrep.dev',
  },
  {
    name: 'Aspiration',
    domain: 'aspiration.com',
  },
  {
    name: 'Veros Real Estate Solutions',
    domain: 'veros.com',
  },
  {
    name: 'HALitics',
    domain: 'halitics.com',
  },
  {
    name: 'Vocantas',
    domain: 'vocantas.com',
  },
  {
    name: 'api.video',
    domain: 'api.video',
  },
  {
    name: 'Hometrack',
    domain: 'hometrack.com',
  },
  {
    name: 'Cardinal eCom',
    domain: 'cardinalecom.com',
  },
  {
    name: 'BenefitEd',
    domain: 'youbenefited.com',
  },
  {
    name: 'Slicedbread',
    domain: 'slicedbread.agency',
  },
  {
    name: 'Pelion',
    domain: 'pelion.com',
  },
  {
    name: 'Team Sell Bigger',
    domain: 'sellbigger.com',
  },
  {
    name: 'Foresyter',
    domain: 'foresyter.com',
  },
  {
    name: 'Notchcode Creative',
    domain: 'notchcode.com',
  },
  {
    name: 'Affable.ai',
    domain: 'affable.ai',
  },
  {
    name: 'Zulaiy Technologies',
    domain: 'zulaiy.com',
  },
  {
    name: 'DignifAI',
    domain: 'dignifai.org',
  },
  {
    name: 'Content Sync',
    domain: 'cms-content-sync.io',
  },
  {
    name: 'CommerceIQ',
    domain: 'commerceiq.ai',
  },
  {
    name: 'The Blurb',
    domain: 'theblurb.co.uk',
  },
  {
    name: 'Classroom365',
    domain: 'classroom365.co.uk',
  },
  {
    name: 'Clerk.io',
    domain: 'clerk.io',
  },
  {
    name: 'datacenterHawk',
    domain: 'datacenterhawk.com',
  },
  {
    name: 'Merative',
    domain: 'merative.com',
  },
  {
    name: 'Grinteq',
    domain: 'grinteq.com',
  },
  {
    name: 'Predactica',
    domain: 'predactica.com',
  },
  {
    name: 'Stinger Studios',
    domain: 'stingerstudios.com',
  },
  {
    name: 'The Insight Studio',
    domain: 'theinsightstudio.com',
  },
  {
    name: 'Crossify',
    domain: 'crossify.app',
  },
  {
    name: 'Diray Media',
    domain: 'diraymedia.com',
  },
  {
    name: 'Lares',
    domain: 'lares.com',
  },
  {
    name: 'Visionaize',
    domain: 'visionaize.com',
  },
  {
    name: 'Rising Cyber',
    domain: 'risingcyber.com',
  },
  {
    name: 'Storz Power',
    domain: 'storzpower.com',
  },
  {
    name: 'Coveros',
    domain: 'coveros.com',
  },
  {
    name: 'CleverDigitalMarketing',
    domain: 'cleverdigitalmarketing.ca',
  },
  {
    name: 'N.Rich',
    domain: 'n.rich',
  },
  {
    name: 'Spark Sales Online',
    domain: 'sparksales.online',
  },
  {
    name: 'TechMagic',
    domain: 'techmagic.co',
  },
  {
    name: 'Alvio',
    domain: 'alvio.network',
  },
  {
    name: 'Prolitus Technologies',
    domain: 'prolitus.com',
  },
  {
    name: 'FarEye',
    domain: 'fareye.com',
  },
  {
    name: 'HealthRev Partners, LLC',
    domain: 'healthrevpartners.com',
  },
  {
    name: 'Tangible Security',
    domain: 'tangiblesecurity.com',
  },
  {
    name: 'Climb',
    domain: 'climbcs.com',
  },
  {
    name: 'Meilisearch',
    domain: 'meilisearch.com',
  },
  {
    name: 'Astronomer',
    domain: 'astronomer.io',
  },
  {
    name: 'PRIME AI',
    domain: 'primeai.co.uk',
  },
  {
    name: 'Rusty Monkey',
    domain: 'rustymonkey.com',
  },
  {
    name: 'StayAI (Formerly Retextion)',
    domain: 'stay.ai',
  },
  {
    name: 'Phrase',
    domain: 'phrase.com',
  },
  {
    name: 'CRS Credit API',
    domain: 'crscreditapi.com',
  },
  {
    name: 'Inlead',
    domain: 'inlead.fr',
  },
  {
    name: 'Amplifi',
    domain: 'goamplifi.com',
  },
  {
    name: 'Arviem AG',
    domain: 'arviem.com',
  },
  {
    name: 'DLP Manager',
    domain: 'dlpmanager.com',
  },
  {
    name: 'ATC Analytics',
    domain: 'atc-cp.com',
  },
  {
    name: 'StubGroup',
    domain: 'stubgroup.com',
  },
  {
    name: 'Kestrel Insights',
    domain: 'kestrelinsights.com',
  },
  {
    name: 'credolab',
    domain: 'credolab.com',
  },
  {
    name: 'LeadIQ',
    domain: 'leadiq.com',
  },
  {
    name: 'Zeeve',
    domain: 'zeeve.io',
  },
  {
    name: 'G&H Automatiom Services',
    domain: 'gnhautomation.com',
  },
  {
    name: 'palm.hr',
    domain: 'palmhr.net',
  },
  {
    name: '5loyalty',
    domain: '5loyalty.com',
  },
  {
    name: 'nShift',
    domain: 'nshift.com',
  },
  {
    name: 'Squark',
    domain: 'squarkai.com',
  },
  {
    name: 'Servicio Nacional de Aprendizaje',
    domain: 'sena.edu.co',
  },
  {
    name: 'Ushur',
    domain: 'ushur.com',
  },
  {
    name: 'DataGalaxy',
    domain: 'datagalaxy.com',
  },
  {
    name: 'Gem Security',
    domain: 'gem.security',
  },
  {
    name: '42 Technologies',
    domain: '42technologies.com',
  },
  {
    name: 'unea',
    domain: 'unea.io',
  },
  {
    name: 'Deep Sync',
    domain: 'deepsync.com',
  },
  {
    name: 'Jifflenow',
    domain: 'jifflenow.com',
  },
  {
    name: 'Aventus',
    domain: 'aventus.com',
  },
  {
    name: 'Saviynt',
    domain: 'saviynt.com',
  },
  {
    name: 'AscribeIT',
    domain: 'ascribe-it.com',
  },
  {
    name: 'Cohesity',
    domain: 'cohesity.com',
  },
  {
    name: 'Mushdesk',
    domain: 'mushdesk.com',
  },
  {
    name: 'Revend',
    domain: 'revend.ai',
  },
  {
    name: 'Justice Bid',
    domain: 'justicebid.com',
  },
  {
    name: 'Smartlead',
    domain: 'smartlead.ai',
  },
  {
    name: 'SEO ENGINE INC',
    domain: 'marketbrew.ai',
  },
  {
    name: 'Crosser Technologies',
    domain: 'crosser.io',
  },
  {
    name: 'MobileServe',
    domain: 'mobileserve.com',
  },
  {
    name: 'Vantage Point Consulting',
    domain: 'vantagepoint-inc.com',
  },
  {
    name: 'Weborama',
    domain: 'weborama.com',
  },
  {
    name: 'Keiboarder, LLC',
    domain: 'keiboarder.com',
  },
  {
    name: 'Magna',
    domain: 'magna.so',
  },
  {
    name: 'Ecopass Chile',
    domain: 'ecopass.cl',
  },
  {
    name: 'Fathom',
    domain: 'fathom.video',
  },
  {
    name: 'LTIMindtree',
    domain: 'ltimindtree.com',
  },
  {
    name: 'Advanced',
    domain: 'oneadvanced.com',
  },
  {
    name: 'Attribution LLC',
    domain: 'attributionapp.com',
  },
  {
    name: 'Lokalise',
    domain: 'lokalise.com',
  },
  {
    name: 'Staria',
    domain: 'staria.com',
  },
  {
    name: 'Rev-Trac',
    domain: 'rev-trac.com',
  },
  {
    name: 'intelmind',
    domain: 'intelmind.mn',
  },
  {
    name: 'BankBI',
    domain: 'bankbi.com',
  },
  {
    name: 'MSite',
    domain: 'msite.com',
  },
  {
    name: 'Smart Insider',
    domain: 'smartinsider.com',
  },
  {
    name: 'Mortgage Workflow Partners Inc',
    domain: 'workflowpartners.org',
  },
  {
    name: 'Twirl',
    domain: 'usetwirl.com',
  },
  {
    name: 'MetaOps',
    domain: 'metaops.solutions',
  },
  {
    name: 'Performio',
    domain: 'performio.co',
  },
  {
    name: 'Billtrust',
    domain: 'billtrust.com',
  },
  {
    name: 'Walz Tetrick Advertising',
    domain: 'wtads.com',
  },
  {
    name: 'Charles Technology Africa',
    domain: 'charlestechnology.com',
  },
  {
    name: 'NBCUniversal',
    domain: 'nbcuniversal.com',
  },
  {
    name: 'RedStone Logistics',
    domain: 'redstonelogistics.com',
  },
  {
    name: 'CoEnterprise',
    domain: 'coenterprise.com',
  },
  {
    name: 'ROI Hunte',
    domain: 'roihunter.com',
  },
  {
    name: 'Cloverleaf',
    domain: 'cloverleaf.me',
  },
  {
    name: 'PK4 Tech LLC',
    domain: 'pk4.tech',
  },
  {
    name: 'TradeCentric',
    domain: 'tradecentric.com',
  },
  {
    name: 'Balloon Group',
    domain: 'balloon-group.com',
  },
  {
    name: 'Marq',
    domain: 'marq.com',
  },
  {
    name: 'Curbstone',
    domain: 'curbstone.com',
  },
  {
    name: 'Requis Inc',
    domain: 'requis.com',
  },
  {
    name: 'JourneyEngine',
    domain: 'journeyengine.com',
  },
  {
    name: 'TrueLayer',
    domain: 'truelayer.com',
  },
  {
    name: 'attribution-insights',
    domain: 'attribution-insights.com',
  },
  {
    name: 'Mimith',
    domain: 'mimith.com',
  },
  {
    name: 'Tevent',
    domain: 'tevent.com',
  },
  {
    name: 'Ascend.io',
    domain: 'ascend.io',
  },
  {
    name: 'Data Travel, LLC (Hapi)',
    domain: 'hapicloud.io',
  },
  {
    name: 'Acast',
    domain: 'acast.com',
  },
  {
    name: 'Cynerio',
    domain: 'cynerio.com',
  },
  {
    name: 'AtScale',
    domain: 'atscale.com',
  },
  {
    name: 'Aduro Advisors',
    domain: 'aduroadvisors.com',
  },
  {
    name: 'Render Better',
    domain: 'renderbetter.com',
  },
  {
    name: 'Link My Books',
    domain: 'linkmybooks.com',
  },
  {
    name: 'Axco',
    domain: 'axcoinfo.com',
  },
  {
    name: 'Monita',
    domain: 'getmonita.io',
  },
  {
    name: 'Insites Technologies',
    domain: 'insites.com',
  },
  {
    name: 'BCR CX',
    domain: 'bcrcx.com',
  },
  {
    name: 'Litmus7',
    domain: 'litmus7.com',
  },
  {
    name: 'Adwise - Your Digital Brain',
    domain: 'adwise.nl',
  },
  {
    name: 'The Audience Agency',
    domain: 'theaudienceagency.org',
  },
  {
    name: 'Brandzen',
    domain: 'brandzen.co',
  },
  {
    name: 'Overpass',
    domain: 'overpass.com',
  },
  {
    name: 'Buyside',
    domain: 'percy.ai',
  },
  {
    name: 'Calculum',
    domain: 'calculum.ai',
  },
  {
    name: 'VNDR.',
    domain: 'vndr-agency.com',
  },
  {
    name: 'Dunn Solutions Group',
    domain: 'dunnsolutions.com',
  },
  {
    name: 'Akamai Technologies',
    domain: 'akamai.com',
  },
  {
    name: 'Resultant',
    domain: 'resultant.com',
  },
  {
    name: 'Teknion Data Solutions',
    domain: 'teknionusa.com',
  },
  {
    name: 'TopOut Group',
    domain: 'topoutgrp.com',
  },
  {
    name: 'BlueConic',
    domain: 'blueconic.com',
  },
  {
    name: 'HOOX',
    domain: 'hoox.co',
  },
  {
    name: 'ReleaseTEAM',
    domain: 'releaseteam.com',
  },
  {
    name: 'Jarvis',
    domain: 'jasper.ai',
  },
  {
    name: 'Walton Management Services, Inc.',
    domain: 'waltonmgt.com',
  },
  {
    name: 'Insource Services, Inc.',
    domain: 'insourceservices.com',
  },
  {
    name: 'Tealium',
    domain: 'tealium.com',
  },
  {
    name: 'Botprise',
    domain: 'botprise.com',
  },
  {
    name: 'ATHSec',
    domain: 'athsec.co',
  },
  {
    name: 'PayTabs',
    domain: 'paytabs.com',
  },
  {
    name: 'Plotly Technologies Inc',
    domain: 'plotly.com',
  },
  {
    name: 'Selfie.Live',
    domain: 'selfie.live',
  },
  {
    name: 'Yalutec',
    domain: 'yalutec.com',
  },
  {
    name: 'Tejas Software Inc',
    domain: 'tejassoftware.com',
  },
  {
    name: 'Valar Digital',
    domain: 'valardigital.com',
  },
  {
    name: 'Hadrian',
    domain: 'hadrian.io',
  },
  {
    name: 'ParcelPanel',
    domain: 'parcelpanel.com',
  },
  {
    name: 'Radiate B2B',
    domain: 'radiateb2b.com',
  },
  {
    name: 'The Brooks Group',
    domain: 'brooksgroup.com',
  },
  {
    name: 'Norkon',
    domain: 'norkon.net',
  },
  {
    name: 'Securiti, inc.',
    domain: 'securiti.ai',
  },
  {
    name: 'EMPAUA',
    domain: 'empaua.com',
  },
  {
    name: 'O.C. Tanner',
    domain: 'octanner.com',
  },
  {
    name: 'BuyologyIQ',
    domain: 'buyologyiq.com',
  },
  {
    name: 'Arkus',
    domain: 'arkusinc.com',
  },
  {
    name: 'Boox',
    domain: 'boox.eco',
  },
  {
    name: 'Hinge Global',
    domain: 'hingecommerce.com',
  },
  {
    name: 'Hero Digital',
    domain: 'herodigital.com',
  },
  {
    name: 'Sidebench',
    domain: 'sidebench.com',
  },
  {
    name: 'Integration Kings',
    domain: 'integrationkings.com',
  },
  {
    name: 'Wipfli',
    domain: 'wipfli.com',
  },
  {
    name: 'Big Red Jelly',
    domain: 'bigredjelly.com',
  },
  {
    name: 'Instant Connect',
    domain: 'instantconnect.com.au',
  },
  {
    name: 'Hawk Eye Technology Solutions Ltd',
    domain: 'hawkeyesolutions.co.uk',
  },
  {
    name: 'VentureBeat',
    domain: 'venturebeat.com',
  },
  {
    name: 'Silverfort',
    domain: 'silverfort.com',
  },
  {
    name: 'IPaidThat \uD83D\uDE80',
    domain: 'ipaidthat.io',
  },
  {
    name: 'Pivo',
    domain: 'pivo.ai',
  },
  {
    name: 'Premedia',
    domain: 'premedia.at',
  },
  {
    name: 'Kangaroo Rewards',
    domain: 'kangaroorewards.com',
  },
  {
    name: 'Casted',
    domain: 'casted.us',
  },
  {
    name: 'Oro',
    domain: 'oroinc.com',
  },
  {
    name: 'Netresearch',
    domain: 'netresearch.de',
  },
  {
    name: 'Content Allies - Podcasting for B2B Tech',
    domain: 'contentallies.com',
  },
  {
    name: 'Stillio - Automated Website Screenshots & Archiving',
    domain: 'stillio.com',
  },
  {
    name: '777 Properties',
    domain: '777properties.com',
  },
  {
    name: 'Verloop.io',
    domain: 'verloop.io',
  },
  {
    name: 'iink Payments',
    domain: 'iink.com',
  },
  {
    name: 'Liveplex Incorporated',
    domain: 'liveplex.io',
  },
  {
    name: 'Plannit',
    domain: 'plannit.io',
  },
  {
    name: 'Startup.Security',
    domain: 'startup.security',
  },
  {
    name: 'GroupeX Solutions',
    domain: 'groupex-solutions.com',
  },
  {
    name: 'Xebra Consulting',
    domain: 'xebraconsulting.com',
  },
  {
    name: 'Kixie',
    domain: 'kixie.com',
  },
  {
    name: 'King Marketing',
    domain: 'kingmarketing.la',
  },
  {
    name: 'Rivo',
    domain: 'rivo.io',
  },
  {
    name: 'WOWS GLOBAL',
    domain: 'wowsglobal.com',
  },
  {
    name: 'Rostan Technologies Pvt Ltd',
    domain: 'rostantechnologies.com',
  },
  {
    name: 'Swap',
    domain: 'swap-commerce.com',
  },
  {
    name: 'H&D Associates',
    domain: 'hndassociates.com',
  },
  {
    name: 'Eunoia',
    domain: 'cfour.tech',
  },
  {
    name: 'Beacon Building Materials',
    domain: 'becn.com',
  },
  {
    name: 'DayBlink Consulting',
    domain: 'dayblinkconsulting.com',
  },
  {
    name: 'Context Analytics,',
    domain: 'contextanalytics-ai.com',
  },
  {
    name: 'Fairing (formerly EnquireLabs)',
    domain: 'fairing.co',
  },
  {
    name: 'Growthmill',
    domain: 'growthmill.com',
  },
  {
    name: 'TAXDAI',
    domain: 'taxdai.com',
  },
  {
    name: 'Bubblehouse',
    domain: 'bubblehouse.com',
  },
  {
    name: 'Fletcher/CSI',
    domain: 'fletchercsi.com',
  },
  {
    name: 'StackPros',
    domain: 'stackpros.com',
  },
  {
    name: 'Plum Voice',
    domain: 'plumvoice.com',
  },
  {
    name: 'Robust Intelligence',
    domain: 'robustintelligence.com',
  },
  {
    name: 'Shopper Approved',
    domain: 'shopperapproved.com',
  },
  {
    name: 'RNR Digital Media Gro',
    domain: 'rnrmediagrp.com',
  },
  {
    name: 'Visual Quiz Builder',
    domain: 'apps.shopify.com',
  },
  {
    name: 'Order',
    domain: 'order.co',
  },
  {
    name: 'Liventus',
    domain: 'liventus.com',
  },
  {
    name: 'Refuel Creative',
    domain: 'refuelcreative.com.au',
  },
  {
    name: 'Roadside Dental Marketing',
    domain: 'roadsidedentalmarketing.com',
  },
  {
    name: 'MonitorBase',
    domain: 'monitorbase.com',
  },
  {
    name: 'Artie Technologies LLC',
    domain: 'artie.so',
  },
  {
    name: 'P99SOFT PVT LTD',
    domain: 'p99soft.com',
  },
  {
    name: 'LazyMetrics Inc',
    domain: 'lazymetrics.com',
  },
  {
    name: 'Super Computer USA LLC',
    domain: 'supercomputerusa.com',
  },
  {
    name: 'Vibencode',
    domain: 'vibencode.com',
  },
  {
    name: 'Venn Apps',
    domain: 'vennapps.com',
  },
  {
    name: 'Datashift',
    domain: 'datashift.eu',
  },
  {
    name: 'Monad',
    domain: 'monad.com',
  },
  {
    name: '1West Finance',
    domain: '1west.com',
  },
  {
    name: 'Crossroads Tax Advisors',
    domain: 'crossroadstax.com',
  },
  {
    name: 'Canonic',
    domain: 'canonic.dev',
  },
  {
    name: 'Orckestra Technologies - Powered by mdf commerce',
    domain: 'orckestra.com',
  },
  {
    name: 'Reejig',
    domain: 'reejig.com',
  },
  {
    name: 'fuse.cloud',
    domain: 'fuse.cloud',
  },
  {
    name: 'FMT Consultants',
    domain: 'fmtconsultants.com',
  },
  {
    name: 'Applaudo Studios',
    domain: 'applaudostudios.com',
  },
  {
    name: 'Mavrck',
    domain: 'mavrck.co',
  },
  {
    name: 'Powerfleet',
    domain: 'powerfleet.com',
  },
  {
    name: 'Allegiance Group',
    domain: 'teamallegiance.com',
  },
  {
    name: 'ASTUTR',
    domain: 'astutr.com',
  },
  {
    name: 'Reveni',
    domain: 'reveni.io',
  },
  {
    name: 'Deskpass',
    domain: 'deskpass.com',
  },
  {
    name: 'B Generous',
    domain: 'bgenerous.com',
  },
  {
    name: 'Labor Central',
    domain: 'laborcentral.com',
  },
  {
    name: 'Meltano',
    domain: 'meltano.com',
  },
  {
    name: 'Verity',
    domain: 'verityplatform.com',
  },
  {
    name: 'DeZeeuw ltd',
    domain: 'dezeeuw.eu',
  },
  {
    name: 'RIB Software',
    domain: 'rib-software.com',
  },
  {
    name: 'LightEdge Solutions',
    domain: 'lightedge.com',
  },
  {
    name: 'SQLI Deutschland GmbH',
    domain: 'sqli.de',
  },
  {
    name: 'Covalent Marketing',
    domain: 'covalentmarketing.com',
  },
  {
    name: 'Rome Italy Travel',
    domain: 'carpediemtours.com',
  },
  {
    name: 'Urban Insight',
    domain: 'urbaninsight.com',
  },
  {
    name: 'Acceldata',
    domain: 'acceldata.io',
  },
  {
    name: 'Absolutelabs.',
    domain: 'absolutelabs.co',
  },
  {
    name: 'Enable',
    domain: 'enable.com',
  },
  {
    name: 'ITX Norge AS',
    domain: 'itx.no',
  },
  {
    name: 'UNRVLD',
    domain: 'unrvld.com',
  },
  {
    name: 'Appointedd',
    domain: 'appointedd.com',
  },
  {
    name: 'Maverick',
    domain: 'trymaverick.com',
  },
  {
    name: 'Sport:80 Limited',
    domain: 'sport80.com',
  },
  {
    name: 'HeiTech Padu Berhad',
    domain: 'heitech.com.my',
  },
  {
    name: 'HR for Health',
    domain: 'hrforhealth.com',
  },
  {
    name: 'Sertifi',
    domain: 'sertifi.com',
  },
  {
    name: 'Savings4Members',
    domain: 'savings4members.com',
  },
  {
    name: 'Creating Coding Careers',
    domain: 'cccareers.org',
  },
  {
    name: 'Spresso',
    domain: 'spresso.com',
  },
  {
    name: 'NILA DO SIMON',
    domain: 'nilado.com',
  },
  {
    name: 'Abstrakt Cloud Solutions',
    domain: 'abstraktcloud.com',
  },
  {
    name: 'Logik.io',
    domain: 'logik.io',
  },
  {
    name: 'OSI Digital',
    domain: 'osidigital.com',
  },
  {
    name: 'WebStores',
    domain: 'webstoresltd.com',
  },
  {
    name: 'NavVis',
    domain: 'navvis.com',
  },
  {
    name: 'NEW Design Model',
    domain: 'newdesignmodel.com',
  },
  {
    name: 'Affogata',
    domain: 'affogata.com',
  },
  {
    name: 'FeedStation',
    domain: 'feedstation.com',
  },
  {
    name: 'Voiant',
    domain: 'voiantgroup.com',
  },
  {
    name: 'Exchange Solutions, Inc.',
    domain: 'exchangesolutions.com',
  },
  {
    name: 'Synthego',
    domain: 'synthego.com',
  },
  {
    name: 'Zee',
    domain: 'zee.co',
  },
  {
    name: 'Plin Tech',
    domain: 'plintech.ro',
  },
  {
    name: 'ListingLogic',
    domain: 'listinglogic.com',
  },
  {
    name: 'Netprofiler',
    domain: 'netprofiler.nl',
  },
  {
    name: 'Postis',
    domain: 'postis.eu',
  },
  {
    name: 'Cloudee',
    domain: 'gocloudee.com',
  },
  {
    name: 'Soar With Us',
    domain: 'soarwithus.co',
  },
  {
    name: 'demandDrive',
    domain: 'demanddrive.com',
  },
  {
    name: 'Videoly',
    domain: 'videoly.co',
  },
  {
    name: 'Meet Transfer',
    domain: 'meettransfer.com',
  },
  {
    name: 'VIABIRDS Technologies GmbH',
    domain: 'viabirds.com',
  },
  {
    name: 'YouPay',
    domain: 'youpay.co',
  },
  {
    name: 'LoopingBack.ai',
    domain: 'loopingback.ai',
  },
  {
    name: 'Uncommon Marketing Works',
    domain: 'uncommonmarketingworks.com',
  },
  {
    name: 'Shopify Website Design Experts and Digital Marketing Strategists',
    domain: '7rockmarketing.com',
  },
  {
    name: 'StatBid',
    domain: 'statbid.com',
  },
  {
    name: 'ARPU',
    domain: 'getarpu.com',
  },
  {
    name: 'Cloudnexa',
    domain: 'cloudnexa.com',
  },
  {
    name: 'MageNative',
    domain: 'magenative.com',
  },
  {
    name: 'Digitek Cloud',
    domain: 'digitek.mx',
  },
  {
    name: 'Brookaire Company',
    domain: 'brookaire.com',
  },
  {
    name: 'NextAfter',
    domain: 'nextafter.com',
  },
  {
    name: 'Eggplant',
    domain: 'eggplantsoftware.com',
  },
  {
    name: 'Hewlett Packard Enterprise',
    domain: 'hpe.com',
  },
  {
    name: 'DataSauce',
    domain: 'datasauce.com',
  },
  {
    name: 'Kineo',
    domain: 'kineo.com',
  },
  {
    name: 'UCRAFT',
    domain: 'ucraft.com',
  },
  {
    name: 'Barbara',
    domain: 'barbaraiot.com',
  },
  {
    name: 'Sandler North Hampshire',
    domain: 'northhampshire.sandler.com',
  },
  {
    name: 'Pave',
    domain: 'pave.com',
  },
  {
    name: 'Emporix',
    domain: 'emporix.com',
  },
  {
    name: 'SuperConnect®',
    domain: 'thesuperconnect.com',
  },
  {
    name: 'WeClick Group',
    domain: 'weclickgroup.com',
  },
  {
    name: 'comspace',
    domain: 'comspace.de',
  },
  {
    name: 'Mobilab',
    domain: 'mobilab.com.br',
  },
  {
    name: 'Broken Egg',
    domain: 'brokenegg.tech',
  },
  {
    name: 'Folderly',
    domain: 'folderly.com',
  },
  {
    name: 'ViziRecruiter',
    domain: 'vizirecruiter.com',
  },
  {
    name: 'Mezzo',
    domain: 'teammezzo.com',
  },
  {
    name: 'Drake Holdings LLC',
    domain: 'howtomovetheneedle.com',
  },
  {
    name: 'FastRefunds',
    domain: 'fastrefunds.co.uk',
  },
  {
    name: 'Hasura',
    domain: 'hasura.io',
  },
  {
    name: 'Pacer',
    domain: 'pacer.studio',
  },
  {
    name: 'Elite Brand Advisors',
    domain: 'elitebrandadvisors.com',
  },
  {
    name: 'ICM Hub Inc.',
    domain: 'icmhub.com',
  },
  {
    name: 'Intensify',
    domain: 'intensifynow.com',
  },
  {
    name: 'elteve',
    domain: 'elteve.com',
  },
  {
    name: 'The Thoughtful Agency',
    domain: 'thethoughtfulagency.com',
  },
  {
    name: 'Speed',
    domain: 'tryspeed.com',
  },
  {
    name: 'DesWare Lda',
    domain: 'desware.com',
  },
  {
    name: 'hapily',
    domain: 'hapily.com',
  },
  {
    name: 'Vanguard X',
    domain: 'vanguard-x.com',
  },
  {
    name: 'Funraise',
    domain: 'funraise.org',
  },
  {
    name: 'Growzer NV',
    domain: 'growzer.com',
  },
  {
    name: 'Compass Experience Labs',
    domain: 'compassexperiencelabs.com',
  },
  {
    name: 'Planslive',
    domain: 'planslive.com',
  },
  {
    name: 'Grosso University',
    domain: 'grossouniversity.com',
  },
  {
    name: 'ContentStatus',
    domain: 'contentstatus.com',
  },
  {
    name: 'HorizontalDigital',
    domain: 'horizontaldigital.com',
  },
  {
    name: 'Milestones Labs',
    domain: 'milestones.ai',
  },
  {
    name: 'Ampere',
    domain: 'amperecomputing.com',
  },
  {
    name: 'Damani Data',
    domain: 'damanidata.com',
  },
  {
    name: 'Insurtech Amsterdam',
    domain: 'insurtechamsterdam.com',
  },
  {
    name: 'Perfect Venue',
    domain: 'perfectvenue.com',
  },
  {
    name: 'Micro Estimating Systems',
    domain: 'microest.com',
  },
  {
    name: 'Embrace SAS',
    domain: 'embrace.fr',
  },
  {
    name: 'SHOPMACHER eCommerce GmbH & Co.KG',
    domain: 'shopmacher.de',
  },
  {
    name: 'The Latino Coalition for Health Equity (LCHE)',
    domain: 'lche.org',
  },
  {
    name: 'Humanly',
    domain: 'humanly.io',
  },
  {
    name: 'qikify',
    domain: 'qikify.com',
  },
  {
    name: 'Fides Communication',
    domain: 'gofides.com',
  },
  {
    name: 'Platformatory',
    domain: 'platformatory.io',
  },
  {
    name: 'Confer With',
    domain: 'conferwith.io',
  },
  {
    name: 'Arcana Network',
    domain: 'arcana.network',
  },
  {
    name: 'FwdView',
    domain: 'fwdview.com',
  },
  {
    name: 'MOST Wanted Co',
    domain: 'themostwanted.co',
  },
  {
    name: 'GLOBALNET',
    domain: 'globalnet.com.tr',
  },
  {
    name: 'EComposer Landing Page Builder',
    domain: 'ecomposer.io',
  },
  {
    name: 'Instrumental Group',
    domain: 'instrumental.net',
  },
  {
    name: 'BigPanda',
    domain: 'bigpanda.io',
  },
  {
    name: 'ShipScience',
    domain: 'shipscience.com',
  },
  {
    name: 'DonorDock',
    domain: 'donordock.com',
  },
  {
    name: 'Woven',
    domain: 'woventeams.com',
  },
  {
    name: 'Entropik Tech',
    domain: 'entropik.io',
  },
  {
    name: 'Outbound Funnel',
    domain: 'outboundfunnel.com',
  },
  {
    name: 'Home in Tunisia',
    domain: 'homeintunisia.com',
  },
  {
    name: 'AppWrap',
    domain: 'appwrap.tech',
  },
  {
    name: 'SustainaBase',
    domain: 'sustainabase.com',
  },
  {
    name: 'Resourcive',
    domain: 'resourcive.com',
  },
  {
    name: 'Trusted Data Solutions',
    domain: 'trusteddata.co.uk',
  },
  {
    name: 'iCIMS',
    domain: 'icims.com',
  },
  {
    name: 'Northern Commerce',
    domain: 'northern.co',
  },
  {
    name: 'Satori',
    domain: 'satoricyber.com',
  },
  {
    name: 'JUICER',
    domain: 'juicerpricing.com',
  },
  {
    name: 'ZOOP',
    domain: 'zoop.com.br',
  },
  {
    name: 'Infopro Digital',
    domain: 'infopro-digital.com',
  },
  {
    name: 'OpTonal',
    domain: 'optonal.com',
  },
  {
    name: 'Yeastar',
    domain: 'yeastar.com',
  },
  {
    name: 'Rhei Srl',
    domain: 'rhei.it',
  },
  {
    name: 'Advisr',
    domain: 'advisr.com',
  },
  {
    name: 'Tabee Networking Limited',
    domain: 'services.tabee.mobi',
  },
  {
    name: 'Arq Design Studio',
    domain: 'arqdesign.studio',
  },
  {
    name: 'CloudScale',
    domain: 'cloudscale.io',
  },
  {
    name: 'Vonahi Security',
    domain: 'vonahi.io',
  },
  {
    name: 'Tag WorldWide',
    domain: 'tagww.com',
  },
  {
    name: 'Marketing Fusion',
    domain: 'marketing-fusion.co.uk',
  },
  {
    name: 'Sora ID',
    domain: 'soraid.com',
  },
  {
    name: 'The ZaneRay Group',
    domain: 'zaneray.com',
  },
  {
    name: 'McGaw.io',
    domain: 'mcgaw.io',
  },
  {
    name: 'Layer 8 Solutions Inc.',
    domain: 'layer8solutions.ca',
  },
  {
    name: 'Skyvia',
    domain: 'skyvia.com',
  },
  {
    name: 'Predize',
    domain: 'predize.com',
  },
  {
    name: 'Workspot',
    domain: 'workspot.com',
  },
  {
    name: 'Waterfield Tech',
    domain: 'waterfieldtech.com',
  },
  {
    name: 'Appbrew',
    domain: 'appbrew.tech',
  },
  {
    name: 'Graph',
    domain: 'graph.digital',
  },
  {
    name: 'Status',
    domain: 'statusaccounts.com',
  },
  {
    name: 'Shoplley',
    domain: 'shoplley.co.uk',
  },
  {
    name: 'ZeroDay',
    domain: 'zeroday.co.uk',
  },
  {
    name: 'DefensX',
    domain: 'defensx.com',
  },
  {
    name: 'Kofuku Idea Labs',
    domain: 'kofukuidealabs.com',
  },
  {
    name: 'My Flyer Inserts',
    domain: 'myflyerinserts.co.uk',
  },
  {
    name: 'SIMPLEX SERVICES (UK) LIMITED',
    domain: 'simplex-services.com',
  },
  {
    name: 'RevenueHunt',
    domain: 'revenuehunt.com',
  },
  {
    name: 'MassMutual Ventures',
    domain: 'massmutualventures.com',
  },
  {
    name: 'Swantide',
    domain: 'swantide.com',
  },
  {
    name: 'Iris',
    domain: 'iris-worldwide.com',
  },
  {
    name: 'Basis Theory',
    domain: 'basistheory.com',
  },
  {
    name: 'ShipTection',
    domain: 'shiptection.com',
  },
  {
    name: 'ResponsiBid',
    domain: 'responsibid.com',
  },
  {
    name: 'Pitted Logistics',
    domain: 'pittedlogistics.com',
  },
  {
    name: 'CommandBar',
    domain: 'commandbar.com',
  },
  {
    name: 'CBRE Group',
    domain: 'cbre.com',
  },
  {
    name: 'Healthlaunchpad',
    domain: 'healthlaunchpad.com',
  },
  {
    name: 'Pacific IQ',
    domain: 'pacificiq.com',
  },
  {
    name: 'Joveo',
    domain: 'joveo.com',
  },
  {
    name: 'Lightspin',
    domain: 'lightspin.io',
  },
  {
    name: "Bob's Burgers- Partners",
    domain: 'bobsburgers.partners.com',
  },
  {
    name: 'RocketReach',
    domain: 'rocketreach.co',
  },
  {
    name: 'SimplyFood Software',
    domain: 'simplyfoodsoftware.com',
  },
  {
    name: 'paydhealth',
    domain: 'paydhealth.com',
  },
  {
    name: 'Bildung Data',
    domain: 'bildungdata.com',
  },
  {
    name: 'Demand Science',
    domain: 'demandscience.com',
  },
  {
    name: 'LivePay',
    domain: 'livepay.co.uk',
  },
  {
    name: 'FounderPartners',
    domain: 'founderpartners.co',
  },
  {
    name: 'Nividous',
    domain: 'nividous.com',
  },
  {
    name: 'Leaf',
    domain: 'leafgrow.io',
  },
  {
    name: 'GreatPixel',
    domain: 'greatpixel.it',
  },
  {
    name: 'Norce',
    domain: 'norce.io',
  },
  {
    name: 'BuildLab',
    domain: 'buildlab.co',
  },
  {
    name: 'eloomi',
    domain: 'eloomi.com',
  },
  {
    name: 'Legit Security',
    domain: 'legitsecurity.com',
  },
  {
    name: 'Insight Marketing',
    domain: 'insightco.xyz',
  },
  {
    name: 'PlumUC',
    domain: 'plumuc.com',
  },
  {
    name: 'CybeReady',
    domain: 'cybeready.com',
  },
  {
    name: 'LABL',
    domain: 'lablpx.com',
  },
  {
    name: 'Denamico',
    domain: 'denamico.com',
  },
  {
    name: 'Diligent-Testing',
    domain: 'diligent-testing.com',
  },
  {
    name: 'VidMob',
    domain: 'vidmob.com',
  },
  {
    name: 'Rally Corp',
    domain: 'rallycorp.com',
  },
  {
    name: 'Upgrade,',
    domain: 'upgrade.com',
  },
  {
    name: 'NFTMagazine.com',
    domain: 'nftmagazine.com',
  },
  {
    name: 'DSR & Associates',
    domain: 'dsr-associates.consulting',
  },
  {
    name: 'Leglaease Solutions',
    domain: 'legaleasesolutions.com',
  },
  {
    name: 'Dunzo LLC',
    domain: 'godunzo.com',
  },
  {
    name: 'Apiqu Inc.',
    domain: 'apiqu.com',
  },
  {
    name: 'Begine Fusion',
    domain: 'beginefusion.com',
  },
  {
    name: 'CloudQuery',
    domain: 'cloudquery.io',
  },
  {
    name: 'Emergence Labs',
    domain: 'emergencelabs.io',
  },
  {
    name: 'Progressus',
    domain: 'progressus.io',
  },
  {
    name: 'Circularity Marketing',
    domain: 'circularity.marketing',
  },
  {
    name: 'Parcel Perform',
    domain: 'parcelperform.com',
  },
  {
    name: '#food',
    domain: 'hashtagfood.com.br',
  },
  {
    name: 'BasePair Inc',
    domain: 'basepairtech.com',
  },
  {
    name: 'Co-Pour',
    domain: 'co-pour.com',
  },
  {
    name: 'AIM Solutions',
    domain: 'aimsolutionsinc.com',
  },
  {
    name: 'Splash BI',
    domain: 'splashbi.com',
  },
  {
    name: 'ZS',
    domain: 'zs.com',
  },
  {
    name: 'Sivo',
    domain: 'sivo.com',
  },
  {
    name: 'Nationwide Appraisal Network',
    domain: 'nan-amc.com',
  },
  {
    name: 'GigSmart',
    domain: 'gigsmart.com',
  },
  {
    name: 'World Wide Technology Digital',
    domain: 'wwtdigital.com',
  },
  {
    name: 'RedIron',
    domain: 'redirontech.com',
  },
  {
    name: 'Metrical',
    domain: 'metric.al',
  },
  {
    name: 'Ably Realtime',
    domain: 'ably.com',
  },
  {
    name: 'Hermis, Inc.',
    domain: 'herm.is',
  },
  {
    name: 'Phoenix Strategy Group',
    domain: 'phoenixstrategy.group',
  },
  {
    name: 'Paperform',
    domain: 'paperform.co',
  },
  {
    name: 'The Mortgage Collaborative',
    domain: 'mortgagecollaborative.com',
  },
  {
    name: 'Panda Health',
    domain: 'panda.health',
  },
  {
    name: 'Convert.com',
    domain: 'convert.com',
  },
  {
    name: 'Opinew',
    domain: 'opinew.com',
  },
  {
    name: 'Shipnet',
    domain: 'shipnet.no',
  },
  {
    name: 'AAMP Agency',
    domain: 'aamp.agency',
  },
  {
    name: 'Align HCM',
    domain: 'alignhcm.com',
  },
  {
    name: 'Dynamic Messaging',
    domain: 'dynamicmessaging.co.uk',
  },
  {
    name: 'Bill.com',
    domain: 'bill.com',
  },
  {
    name: 'ProLine',
    domain: 'useproline.com',
  },
  {
    name: 'Bitstrapped',
    domain: 'bitstrapped.com',
  },
  {
    name: 'Cyber Monks GmbH',
    domain: 'cyber-monks.com',
  },
  {
    name: 'Like Reply',
    domain: 'likereply.it',
  },
  {
    name: 'CompStak',
    domain: 'compstak.com',
  },
  {
    name: 'Xumansoft',
    domain: 'xumansoft.com',
  },
  {
    name: 'Customer Impact',
    domain: 'customerimpact.be',
  },
  {
    name: 'Flip the Script',
    domain: 'flipthescript.co',
  },
  {
    name: 'Return Fairy',
    domain: 'returnfairy.co',
  },
  {
    name: 'SwiftConnect',
    domain: 'swiftconnect.io',
  },
  {
    name: 'Breakthrough Academy',
    domain: 'btacademy.com',
  },
  {
    name: 'GoBolt',
    domain: 'gobolt.com',
  },
  {
    name: 'Ampersand Accounting',
    domain: 'ampersandaccounting.com',
  },
  {
    name: 'Dun & Bradstreet',
    domain: 'dnb.com',
  },
  {
    name: 'Sidero Labs, Inc',
    domain: 'siderolabs.com',
  },
  {
    name: 'meez',
    domain: 'getmeez.com',
  },
  {
    name: 'World Book, Inc.',
    domain: 'worldbook.com',
  },
  {
    name: 'Makesbridge',
    domain: 'makesbridge.com',
  },
  {
    name: 'Conovo Technologies',
    domain: 'conovoinc.com',
  },
  {
    name: 'Spinta Digital',
    domain: 'spintadigital.com',
  },
  {
    name: 'Ethiopian Airlines',
    domain: 'ethiopianairlines.com',
  },
  {
    name: 'Fresh Prints',
    domain: 'freshprints.com',
  },
  {
    name: 'Precoro',
    domain: 'precoro.com',
  },
  {
    name: 'AltiSales',
    domain: 'altisales.com',
  },
  {
    name: 'Udundi',
    domain: 'udundi.com',
  },
  {
    name: 'Gravyty',
    domain: 'gravyty.com',
  },
  {
    name: 'Paradigm Technology Inc',
    domain: 'pt-corp.com',
  },
  {
    name: 'Project Partners LLC',
    domain: 'projectp.com',
  },
  {
    name: 'OAYAW, Inc.',
    domain: 'get1page.com',
  },
  {
    name: 'RevenueBase',
    domain: 'revenuebase.ai',
  },
  {
    name: 'BetterComp',
    domain: 'bettercomp.com',
  },
  {
    name: 'Panorama IT',
    domain: 'panoramait.com',
  },
  {
    name: 'Leadline, Inc.',
    domain: 'getleadline.com',
  },
  {
    name: 'Spur Reply',
    domain: 'spur-reply.com',
  },
  {
    name: 'Prodly',
    domain: 'prodly.co',
  },
  {
    name: 'Giftagram',
    domain: 'giftagram.com',
  },
  {
    name: 'evalmyBRAND',
    domain: 'evalmybrand.com',
  },
  {
    name: 'Gainsight',
    domain: 'gainsight.com',
  },
  {
    name: 'recruitAbility',
    domain: 'therecruitability.com',
  },
  {
    name: 'GTY Technology',
    domain: 'gtytechnology.com',
  },
  {
    name: 'Mento',
    domain: 'mento.co',
  },
  {
    name: 'Thoropass (formerly Laika)',
    domain: 'thoropass.com',
  },
  {
    name: 'classoptima',
    domain: 'classoptima.com',
  },
  {
    name: 'Armis Bilisim',
    domain: 'armisbilisim.com',
  },
  {
    name: 'Rokt',
    domain: 'rokt.com',
  },
  {
    name: 'Adacted',
    domain: 'adacted.com',
  },
  {
    name: 'Upflow',
    domain: 'upflow.io',
  },
  {
    name: 'FAV Solution',
    domain: 'favsolution.com',
  },
  {
    name: 'Teesnap LLC',
    domain: 'teesnap.com',
  },
  {
    name: 'KLDiscovery',
    domain: 'kldiscovery.com',
  },
  {
    name: 'PCI Pal',
    domain: 'pcipal.com',
  },
  {
    name: 'Intaface',
    domain: 'intaface.com',
  },
  {
    name: 'Leads On Way',
    domain: 'leadsonway.com',
  },
  {
    name: 'PorterLogic',
    domain: 'porterlogic.com',
  },
  {
    name: 'Pliable',
    domain: 'pliable.co',
  },
  {
    name: 'MLveda',
    domain: 'mlveda.com',
  },
  {
    name: 'Discern',
    domain: 'discern.io',
  },
  {
    name: 'Infinite Ranges',
    domain: 'infiniteranges.com',
  },
  {
    name: 'Togal.AI',
    domain: 'togal.ai',
  },
  {
    name: 'Splashtop',
    domain: 'splashtop.com',
  },
  {
    name: 'Marvia',
    domain: 'getmarvia.com',
  },
  {
    name: 'Zorang, Inc.',
    domain: 'zorang.com',
  },
  {
    name: 'Keka HR',
    domain: 'keka.com',
  },
  {
    name: 'Arcules',
    domain: 'arcules.com',
  },
  {
    name: 'dear digital',
    domain: 'deardigital.com',
  },
  {
    name: 'Axelliant',
    domain: 'axelliant.com',
  },
  {
    name: 'Visme',
    domain: 'visme.co',
  },
  {
    name: 'Talkwalker',
    domain: 'talkwalker.com',
  },
  {
    name: 'activpayroll',
    domain: 'activpayroll.com',
  },
  {
    name: 'WDB Agency',
    domain: 'wdb.agency',
  },
  {
    name: 'SourceDay',
    domain: 'sourceday.com',
  },
  {
    name: 'Userlane',
    domain: 'userlane.com',
  },
  {
    name: 'Zebel',
    domain: 'zebel.io',
  },
  {
    name: 'STS Education',
    domain: 'stseducation-us.com',
  },
  {
    name: 'Lead Built',
    domain: 'leadbuilt.com',
  },
  {
    name: 'Sprout Solutions',
    domain: 'sprout.ph',
  },
  {
    name: 'Voyado',
    domain: 'voyado.com',
  },
  {
    name: 'giosg',
    domain: 'giosg.com',
  },
  {
    name: 'Squadded Social Shopping',
    domain: 'squadded.co',
  },
  {
    name: 'Valogix',
    domain: 'valogix.com',
  },
  {
    name: 'Swahili Technologies Limited',
    domain: 'swahili.co.ke',
  },
  {
    name: 'MICOLSIR',
    domain: 'micolsir.com',
  },
  {
    name: 'Rainf4ll',
    domain: 'rainf4ll.com',
  },
  {
    name: 'Trice',
    domain: 'tricedigital.com',
  },
  {
    name: 'ReMake',
    domain: 'remake.video',
  },
  {
    name: 'Incentro',
    domain: 'incentro.com',
  },
  {
    name: 'Open-Xchange',
    domain: 'open-xchange.com',
  },
  {
    name: 'Teachable',
    domain: 'teachable.com',
  },
  {
    name: 'Cro Metrics',
    domain: 'crometrics.com',
  },
  {
    name: 'Ashby',
    domain: 'ashbyhq.com',
  },
  {
    name: 'WebPresented',
    domain: 'webpresented.com',
  },
  {
    name: 'Syndic8',
    domain: 'syndic8.io',
  },
  {
    name: 'dataPlor',
    domain: 'dataplor.com',
  },
  {
    name: 'SnapLogic',
    domain: 'snaplogic.com',
  },
  {
    name: 'Accelerate Media',
    domain: 'theacceleratemedia.com',
  },
  {
    name: '+Purpose',
    domain: 'addpurpose.com',
  },
  {
    name: 'Amous International, Inc.',
    domain: 'amousinternational.com',
  },
  {
    name: 'Grounded',
    domain: 'grounded-consulting.com',
  },
  {
    name: 'GDS Group',
    domain: 'gdsgroup.com',
  },
  {
    name: 'dLuxury Brands',
    domain: 'dluxurybrands.com',
  },
  {
    name: 'InsightFinder',
    domain: 'insightfinder.com',
  },
  {
    name: 'vCom Solutions',
    domain: 'vcomsolutions.com',
  },
  {
    name: 'Acuere Technology',
    domain: 'acuere.com.au',
  },
  {
    name: 'Competera',
    domain: 'competera.net',
  },
  {
    name: 'Bounce Insights',
    domain: 'bounceinsights.com',
  },
  {
    name: 'Increff',
    domain: 'increff.com',
  },
  {
    name: 'Rise Up',
    domain: 'riseup.ai',
  },
  {
    name: '11 Degrees Consulting Ltd',
    domain: 'team11degrees.com',
  },
  {
    name: 'Digital Learning Institute',
    domain: 'digitallearninginstitute.com',
  },
  {
    name: 'Hiver',
    domain: 'hiverhq.com',
  },
  {
    name: 'PayPlug',
    domain: 'payplug.com',
  },
  {
    name: 'Weavik',
    domain: 'weavik.com',
  },
  {
    name: 'Webflow',
    domain: 'webflow.com',
  },
  {
    name: 'Blu Banyan',
    domain: 'blubanyan.com',
  },
  {
    name: 'Diamond Log',
    domain: 'diamondlog.tec.br',
  },
  {
    name: 'Level Fifty Three',
    domain: 'levelfiftythree.co.uk',
  },
  {
    name: 'Virbela',
    domain: 'virbela.com',
  },
  {
    name: 'GRÜNE STRABE',
    domain: 'grune.io',
  },
  {
    name: 'Envoy',
    domain: 'weareenvoy.com',
  },
  {
    name: 'Convertful',
    domain: 'convertful.co',
  },
  {
    name: 'MarketDial',
    domain: 'marketdial.com',
  },
  {
    name: 'Datahash',
    domain: 'datahash.com',
  },
  {
    name: 'Horizon Labs',
    domain: 'madeinhorizon.com',
  },
  {
    name: 'Productsup-Partners',
    domain: 'productsup-partners.com',
  },
  {
    name: 'ICP',
    domain: 'icpnet.com',
  },
  {
    name: 'Monotype',
    domain: 'monotype.com',
  },
  {
    name: 'SJ Consultants',
    domain: 'sjconsultants.in',
  },
  {
    name: 'Digital Realty Trust, Inc.',
    domain: 'digitalrealty.com',
  },
  {
    name: 'Cameyo',
    domain: 'cameyo.com',
  },
  {
    name: 'IBISWorld',
    domain: 'ibisworld.com',
  },
  {
    name: 'Arena Analytics',
    domain: 'arenaanalytics.io',
  },
  {
    name: 'Endgame',
    domain: 'endgame.io',
  },
  {
    name: 'HiddenLayer',
    domain: 'hiddenlayer.com',
  },
  {
    name: 'DreamFactory Software',
    domain: 'dreamfactory.com',
  },
  {
    name: 'Mighty & True',
    domain: 'mightyandtrue.com',
  },
  {
    name: 'Minds On Design Lab',
    domain: 'mod-lab.com',
  },
  {
    name: 'Print.com',
    domain: 'print.com',
  },
  {
    name: 'Cordless',
    domain: 'cordless.io',
  },
  {
    name: 'Helloprint',
    domain: 'helloprint.com',
  },
  {
    name: 'GIN LOGISTICS LLC',
    domain: 'ginlogisticsllc.com',
  },
  {
    name: 'Mineiros GmbH',
    domain: 'mineiros.io',
  },
  {
    name: 'Uptok',
    domain: 'uptok.com',
  },
  {
    name: 'wakeo',
    domain: 'wakeo.co',
  },
  {
    name: 'Datawiz',
    domain: 'datawiz.io',
  },
  {
    name: 'Clarify',
    domain: 'clarify.io',
  },
  {
    name: 'Refine Labs',
    domain: 'refinelabs.com',
  },
  {
    name: 'Mooko',
    domain: 'mooko.media',
  },
  {
    name: 'Trusaic',
    domain: 'trusaic.com',
  },
  {
    name: 'Stingray Group Inc.',
    domain: 'stingray.com',
  },
  {
    name: '8returns',
    domain: '8returns.com',
  },
  {
    name: 'BioLizard',
    domain: 'lizard.bio',
  },
  {
    name: 'Ladd Partners',
    domain: 'laddpartners.com',
  },
  {
    name: 'DemandPDX',
    domain: 'demandpdx.com',
  },
  {
    name: 'Artefact',
    domain: 'artefact.com',
  },
  {
    name: 'viax.io',
    domain: 'viax.io',
  },
  {
    name: 'Eckoh',
    domain: 'eckoh.com',
  },
  {
    name: 'Dig Security',
    domain: 'dig.security',
  },
  {
    name: 'AddEvent',
    domain: 'addevent.com',
  },
  {
    name: 'Conpago',
    domain: 'conpago.com.au',
  },
  {
    name: 'Trak Capital',
    domain: 'trakcap.com',
  },
  {
    name: 'Tada Cognitive Solutions',
    domain: 'tadanow.com',
  },
  {
    name: 'Sparqle',
    domain: 'sparqle.com',
  },
  {
    name: 'as siber',
    domain: 'siemplus.com',
  },
  {
    name: 'Airspeeder',
    domain: 'airspeeder.com',
  },
  {
    name: 'ItsaCheckmate',
    domain: 'itsacheckmate.com',
  },
  {
    name: 'Shiftboard',
    domain: 'shiftboard.com',
  },
  {
    name: 'Veraset',
    domain: 'veraset.com',
  },
  {
    name: 'Concord Capital LLC',
    domain: 'concordcapital.us',
  },
  {
    name: 'Hansa Marketing Services, Inc.',
    domain: 'hansamarketing.com',
  },
  {
    name: 'GOAT Commerce',
    domain: 'goatcommerce.xyz',
  },
  {
    name: 'Tartan',
    domain: 'tartanhq.com',
  },
  {
    name: 'Twigeo',
    domain: 'twigeo.com',
  },
  {
    name: 'AmPhil',
    domain: 'amphil.com',
  },
  {
    name: 'yoummday GmbH',
    domain: 'yoummday.com',
  },
  {
    name: 'Kbrw',
    domain: 'kbrw.fr',
  },
  {
    name: 'blackthorn.io',
    domain: 'blackthorn.io',
  },
  {
    name: 'thirdweb',
    domain: 'thirdweb.com',
  },
  {
    name: 'Eco-Movement',
    domain: 'eco-movement.com',
  },
  {
    name: 'SimpliContract',
    domain: 'simplicontract.com',
  },
  {
    name: 'Zerto',
    domain: 'zerto.com',
  },
  {
    name: 'Batch',
    domain: 'batch.com',
  },
  {
    name: 'Builder Sourcing',
    domain: 'buildersourcing.com',
  },
  {
    name: 'Cyderes',
    domain: 'cyderes.com',
  },
  {
    name: 'Avetta, LLC',
    domain: 'avetta.com',
  },
  {
    name: 'Iceberg RevOps',
    domain: 'icebergops.com',
  },
  {
    name: 'Staircase AI',
    domain: 'staircase.ai',
  },
  {
    name: 'SafeStack',
    domain: 'safestack.io',
  },
  {
    name: 'eCube Gmbh',
    domain: 'ecube.de',
  },
  {
    name: 'INGENIUS',
    domain: 'ingenius-data.com',
  },
  {
    name: 'alwaysAI',
    domain: 'alwaysai.co',
  },
  {
    name: 'AgentSync',
    domain: 'agentsync.io',
  },
  {
    name: 'SelectFew',
    domain: 'selectfew.co',
  },
  {
    name: 'DIDOAGENCY',
    domain: 'didoagency.com',
  },
  {
    name: 'The Orbit',
    domain: 'theorbit.me',
  },
  {
    name: 'Miltton',
    domain: 'miltton.com',
  },
  {
    name: 'Wilco',
    domain: 'trywilco.com',
  },
  {
    name: 'Vermile',
    domain: 'vermile.com',
  },
  {
    name: 'bundle benefits',
    domain: 'bundlebenefits.com',
  },
  {
    name: 'SHINE Strategy',
    domain: 'shine-strategy.com',
  },
  {
    name: 'KAWO',
    domain: 'kawo.com',
  },
  {
    name: 'Atlassian',
    domain: 'atlassian.com',
  },
  {
    name: 'LetsGrow.com',
    domain: 'letsgrow.com',
  },
  {
    name: 'Global App Testing',
    domain: 'globalapptesting.com',
  },
  {
    name: 'Cocolabs',
    domain: 'cocolabs.com',
  },
  {
    name: 'Visagio',
    domain: 'visagio.com',
  },
  {
    name: 'Joost.graphics',
    domain: 'joost.graphics',
  },
  {
    name: 'upstream',
    domain: 'upstreamtech.io',
  },
  {
    name: 'FINN Partners',
    domain: 'finnpartners.com',
  },
  {
    name: 'Cofruition',
    domain: 'cofruition.com',
  },
  {
    name: 'More Metrics Limited',
    domain: 'moremetrics.co.uk',
  },
  {
    name: 'Automation and Mechatronic Solutions',
    domain: 'automechsol.co.za',
  },
  {
    name: 'Flowpass',
    domain: 'flowpass.co',
  },
  {
    name: 'NovoEd',
    domain: 'novoed.com',
  },
  {
    name: 'Prediko',
    domain: 'prediko.io',
  },
  {
    name: 'Defiance Digital',
    domain: 'defiancedigital.com',
  },
  {
    name: 'Trabian',
    domain: 'trabian.com',
  },
  {
    name: 'Curri',
    domain: 'curri.com',
  },
  {
    name: 'Shiftsmart',
    domain: 'shiftsmart.com',
  },
  {
    name: '1SKYDIGITAL',
    domain: '1skydigital.com',
  },
  {
    name: 'Mammoth Analytics',
    domain: 'mammoth.io',
  },
  {
    name: 'OutPoint',
    domain: 'outpoint.app',
  },
  {
    name: 'SunTec Business Solutions',
    domain: 'suntecgroup.com',
  },
  {
    name: 'First Try',
    domain: 'firsttry.co',
  },
  {
    name: 'Incture Technologies',
    domain: 'incture.com',
  },
  {
    name: 'Frase',
    domain: 'frase.io',
  },
  {
    name: 'LOGEX',
    domain: 'logex.com',
  },
  {
    name: 'Debtist GmbH',
    domain: 'debtist.de',
  },
  {
    name: 'Soda',
    domain: 'soda.io',
  },
  {
    name: 'Data Driven',
    domain: 'datadriven.works',
  },
  {
    name: 'Truework',
    domain: 'truework.com',
  },
  {
    name: 'FlowMo',
    domain: 'getflowmo.com',
  },
  {
    name: 'Stripe',
    domain: 'stripe.com',
  },
  {
    name: 'Iterable',
    domain: 'iterable.com',
  },
  {
    name: 'Phalanx',
    domain: 'phalanx.io',
  },
  {
    name: 'Dapps.co',
    domain: 'dapps.co',
  },
  {
    name: 'Moda',
    domain: 'getmoda.io',
  },
  {
    name: 'OutThink',
    domain: 'outthink.io',
  },
  {
    name: 'DFVU d.o.o.',
    domain: 'dfvu.org',
  },
  {
    name: 'eTail Support',
    domain: 'etailsupport.com',
  },
  {
    name: 'Maicon Ferreira 【ツ】',
    domain: 'side.tech',
  },
  {
    name: 'Innovwayz',
    domain: 'innovwayz.com',
  },
  {
    name: 'PixNew',
    domain: 'pixnew.com.br',
  },
  {
    name: 'Plecto',
    domain: 'plecto.com',
  },
  {
    name: 'Rware Solutions Inc',
    domain: 'marketingops.com',
  },
  {
    name: 'FlyPaper Technologies',
    domain: 'flypaper.com',
  },
  {
    name: 'Quill',
    domain: 'quillsql.com',
  },
  {
    name: 'JUSTLY Markets',
    domain: 'investjustly.com',
  },
  {
    name: 'Harbor by Luxer One',
    domain: 'harborlockers.com',
  },
  {
    name: 'Praxent',
    domain: 'praxent.com',
  },
  {
    name: 'Mavely',
    domain: 'joinmavely.com',
  },
  {
    name: 'Idencia, Inc.',
    domain: 'idencia.com',
  },
  {
    name: 'First San Francisco Partners',
    domain: 'firstsanfranciscopartners.com',
  },
  {
    name: 'Hawk Ventures',
    domain: 'hvconsultinggroup.com',
  },
  {
    name: 'DataInception LLC',
    domain: 'datainception.co',
  },
  {
    name: 'MoreLogin',
    domain: 'morelogin.com',
  },
  {
    name: 'Homecare Homebase',
    domain: 'hchb.com',
  },
  {
    name: 'InnoMaint',
    domain: 'innomaint.com',
  },
  {
    name: 'True Elements',
    domain: 'trueelements.com',
  },
  {
    name: 'Travod',
    domain: 'travod.com',
  },
  {
    name: 'Willow',
    domain: 'willowinc.com',
  },
  {
    name: 'Exiger',
    domain: 'exiger.com',
  },
  {
    name: 'Revel Systems',
    domain: 'revelsystems.com',
  },
  {
    name: 'spotin',
    domain: 'spotin.com',
  },
  {
    name: 'ChameleonCRM',
    domain: 'chameleoncrm.co.uk',
  },
  {
    name: 'Andreessen Horowitz',
    domain: 'a16z.com',
  },
  {
    name: 'Cronofy',
    domain: 'cronofy.com',
  },
  {
    name: 'DimeTyd',
    domain: 'dimetyd.com',
  },
  {
    name: 'Firney',
    domain: 'firney.com',
  },
  {
    name: 'Grafted',
    domain: 'grafted.com',
  },
  {
    name: 'WEKA',
    domain: 'weka.io',
  },
  {
    name: 'ProcessMaker',
    domain: 'processmaker.com',
  },
  {
    name: 'Improvado',
    domain: 'improvado.io',
  },
  {
    name: 'ACOMWARE',
    domain: 'acomware.cz',
  },
  {
    name: 'Hoopla Consulting',
    domain: 'hooplaconsulting.com',
  },
  {
    name: 'Engagetech (formerly EngageIQ)',
    domain: 'engagetech.co.uk',
  },
  {
    name: 'iundf Marketing Technology',
    domain: 'iundf-martech.com',
  },
  {
    name: 'Revotas',
    domain: 'revotas.com',
  },
  {
    name: 'Vipgearz',
    domain: 'vipgearz.com',
  },
  {
    name: 'AKKO',
    domain: 'getakko.com',
  },
  {
    name: 'greenlist',
    domain: 'shopgreenlist.com',
  },
  {
    name: 'Brighter Click',
    domain: 'brighterclick.com',
  },
  {
    name: 'Mlytics',
    domain: 'mlytics.com',
  },
  {
    name: 'Loadsure',
    domain: 'loadsure.net',
  },
  {
    name: 'Cygnvs',
    domain: 'cygnvs.com',
  },
  {
    name: '1Huddle',
    domain: '1huddle.co',
  },
  {
    name: 'Kugamon',
    domain: 'kugamon.com',
  },
  {
    name: 'Personica',
    domain: 'personica.com',
  },
  {
    name: 'OneText',
    domain: 'onetext.com',
  },
  {
    name: 'D2C Design',
    domain: 'd2cdesign.com',
  },
  {
    name: 'Scientific Financial Systems',
    domain: 'scifinsys.com',
  },
  {
    name: 'Data Rebels',
    domain: 'datarebels.io',
  },
  {
    name: 'Yearly',
    domain: 'yearly.report',
  },
  {
    name: 'Alpha Solutions',
    domain: 'alpha-solutions.com',
  },
  {
    name: 'praella',
    domain: 'praella.com',
  },
  {
    name: 'rf IDEAS',
    domain: 'rfideas.com',
  },
  {
    name: 'Hermes',
    domain: 'hermeshq.io',
  },
  {
    name: 'Ignitium',
    domain: 'ignitium.com',
  },
  {
    name: 'Ansuz Ltd',
    domain: 'appsclicks.com',
  },
  {
    name: 'MBS Highway',
    domain: 'mbshighway.com',
  },
  {
    name: 'Concourse',
    domain: 'concourselabs.com',
  },
  {
    name: 'Simple',
    domain: 'simple.io',
  },
  {
    name: 'Partnearz',
    domain: 'partnearz.com',
  },
  {
    name: 'LearnWorlds',
    domain: 'learnworlds.com',
  },
  {
    name: 'Charles Sellers Consulting',
    domain: 'charlessellers.com',
  },
  {
    name: 'Bespoke Metrics',
    domain: 'bespokemetrics.com',
  },
  {
    name: 'Dosear',
    domain: 'dosear.com',
  },
  {
    name: 'NetLogistiK',
    domain: 'netlogistik.com',
  },
  {
    name: 'Persooa',
    domain: 'persooa.com',
  },
  {
    name: 'FSI',
    domain: 'fsiservices.com',
  },
  {
    name: 'Agiloft',
    domain: 'agiloft.com',
  },
  {
    name: 'Master Meter',
    domain: 'mastermeter.com',
  },
  {
    name: 'Mutually Human',
    domain: 'mutuallyhuman.com',
  },
  {
    name: 'Dakota',
    domain: 'dakota.com',
  },
  {
    name: 'Traject',
    domain: 'trajectdata.com',
  },
  {
    name: 'Performica',
    domain: 'performica.com',
  },
  {
    name: 'MarketL',
    domain: 'marketlinc.com',
  },
  {
    name: 'JFrog',
    domain: 'jfrog.com',
  },
  {
    name: 'PixelForce',
    domain: 'pixelforce.com.au',
  },
  {
    name: 'Web Shop Manager',
    domain: 'webshopmanager.com',
  },
  {
    name: 'Spoke Phone',
    domain: 'spokephone.com',
  },
  {
    name: 'Digital Union Marketing',
    domain: 'digitalunionmarketing.com',
  },
  {
    name: 'CloudBees, Inc.',
    domain: 'cloudbees.com',
  },
  {
    name: 'scratchie.com',
    domain: 'scratchie.com',
  },
  {
    name: 'Emplifi',
    domain: 'emplifi.io',
  },
  {
    name: 'Climb Channel Solutions UK',
    domain: 'climbcs.co.uk',
  },
  {
    name: 'Visible Alpha',
    domain: 'visiblealpha.com',
  },
  {
    name: 'MITER',
    domain: 'miter.com',
  },
  {
    name: 'Easycom',
    domain: 'easycom.com',
  },
  {
    name: 'Seer Interactive',
    domain: 'seerinteractive.com',
  },
  {
    name: 'chain.io',
    domain: 'chain.io',
  },
  {
    name: 'Yodeck',
    domain: 'yodeck.com',
  },
  {
    name: 'SmarterSends',
    domain: 'smartersends.com',
  },
  {
    name: 'BlueLabel',
    domain: 'bluelabellabs.com',
  },
  {
    name: 'Chariot',
    domain: 'givechariot.com',
  },
  {
    name: 'Insider',
    domain: 'useinsider.com',
  },
  {
    name: 'MSI Data',
    domain: 'msidata.com',
  },
  {
    name: 'Whole Whale',
    domain: 'wholewhale.com',
  },
  {
    name: 'BetterRX',
    domain: 'betterrx.com',
  },
  {
    name: 'Homebase.ai',
    domain: 'homebase.ai',
  },
  {
    name: 'contactSPACE',
    domain: 'contactspace.com',
  },
  {
    name: 'Archetype',
    domain: 'archetype.dev',
  },
  {
    name: 'Rely Ability',
    domain: 'relyability.ai',
  },
  {
    name: 'Checkstep',
    domain: 'checkstep.com',
  },
  {
    name: 'Laserfiche',
    domain: 'laserfiche.com',
  },
  {
    name: 'SimpliStack',
    domain: 'simplistack.com',
  },
  {
    name: 'MSRcosmos',
    domain: 'msrcosmos.com',
  },
  {
    name: 'Unirac',
    domain: 'unirac.com',
  },
  {
    name: 'Kevari',
    domain: 'kevari.com',
  },
  {
    name: 'Glass Media',
    domain: 'glass-media.com',
  },
  {
    name: 'Enterprise Monkey',
    domain: 'enterprisemonkey.com.au',
  },
  {
    name: 'BetterManager',
    domain: 'bettermanager.co',
  },
  {
    name: 'CustomWeather, Inc.',
    domain: 'customweather.com',
  },
  {
    name: 'Cloutly',
    domain: 'cloutly.com',
  },
  {
    name: 'AssuranceLab',
    domain: 'assurancelab.com.au',
  },
  {
    name: 'B2Metric',
    domain: 'b2metric.com',
  },
  {
    name: 'Help me Fix',
    domain: 'helpmefix.io',
  },
  {
    name: 'Industrious',
    domain: 'industriousoffice.com',
  },
  {
    name: 'Centerline Digital',
    domain: 'centerline.net',
  },
  {
    name: 'Portland Europe',
    domain: 'portland.eu',
  },
  {
    name: 'PetScreening',
    domain: 'petscreening.com',
  },
  {
    name: 'Bainbridge',
    domain: 'bainbridgegrowth.com',
  },
  {
    name: 'Pensight',
    domain: 'pensight.com',
  },
  {
    name: 'Adomik',
    domain: 'adomik.com',
  },
  {
    name: 'Juro',
    domain: 'juro.com',
  },
  {
    name: 'Fable',
    domain: 'sharefable.com',
  },
  {
    name: 'Box & Bestow',
    domain: 'boxandbestow.com',
  },
  {
    name: 'RemoteLock',
    domain: 'remotelock.com',
  },
  {
    name: 'OneShop',
    domain: 'oneshopretail.com',
  },
  {
    name: 'Sherpa',
    domain: 'thesherpagroup.com',
  },
  {
    name: 'Kulin',
    domain: 'kulinco.com',
  },
  {
    name: 'Panagora',
    domain: 'panagora.agency',
  },
  {
    name: 'Multiplier',
    domain: 'usemultiplier.com',
  },
  {
    name: 'Leadzai',
    domain: 'leadzai.com',
  },
  {
    name: 'For You Advertising Limited',
    domain: 'foryouadvertising.com',
  },
  {
    name: 'Parcel Pending by Quadient',
    domain: 'parcelpending.com',
  },
  {
    name: 'Asset Infinity',
    domain: 'assetinfinity.com',
  },
  {
    name: 'Reveni',
    domain: 'reveni.com',
  },
  {
    name: 'Hexagon AB',
    domain: 'hexagon.com',
  },
  {
    name: 'userwerk',
    domain: 'userwerk.com',
  },
  {
    name: 'LenderKit',
    domain: 'lenderkit.com',
  },
  {
    name: 'OpsGuru',
    domain: 'opsguru.io',
  },
  {
    name: 'Payroll4Construction',
    domain: 'payroll4construction.com',
  },
  {
    name: 'McCormick Systems',
    domain: 'mccormicksys.com',
  },
  {
    name: 'Estimating Edge',
    domain: 'estimatingedge.com',
  },
  {
    name: 'Medallion',
    domain: 'medallion.co',
  },
  {
    name: 'Returnfy',
    domain: 'returnfy.io',
  },
  {
    name: 'HRLocker',
    domain: 'hrlocker.com',
  },
  {
    name: 'YouStellar',
    domain: 'youstellar.com',
  },
  {
    name: 'isahit',
    domain: 'isahit.com',
  },
  {
    name: 'Bolt Digital',
    domain: 'boltdigital.media',
  },
  {
    name: 'Synerity AB',
    domain: 'synerity.eu',
  },
  {
    name: 'Sendcloud',
    domain: 'sendcloud.com',
  },
  {
    name: 'Immagnify',
    domain: 'immagnify.com',
  },
  {
    name: 'HiPay',
    domain: 'hipay.com',
  },
  {
    name: 'ASM Web Services',
    domain: 'asmws.com',
  },
  {
    name: 'Storeplum',
    domain: 'storeplum.com',
  },
  {
    name: 'Shieldhub',
    domain: 'shieldhub.com',
  },
  {
    name: 'strongDM',
    domain: 'strongdm.com',
  },
  {
    name: 'Adaptive Shield',
    domain: 'adaptive-shield.com',
  },
  {
    name: 'Secureworks',
    domain: 'secureworks.com',
  },
  {
    name: 'Press Hook',
    domain: 'presshook.com',
  },
  {
    name: 'Madison Ave Consulting',
    domain: 'madisonaveconsulting.com',
  },
  {
    name: 'JCDecaux',
    domain: 'jcdecaux.com',
  },
  {
    name: 'Nav.it Inc.',
    domain: 'navitmoney.com',
  },
  {
    name: 'Seaborn',
    domain: 'seabornnetworks.com',
  },
  {
    name: 'Code Koalas',
    domain: 'codekoalas.com',
  },
  {
    name: 'Healthie',
    domain: 'gethealthie.com',
  },
  {
    name: 'SELLKLEVER LLC',
    domain: 'sellklever.com',
  },
  {
    name: 'Mayple Global',
    domain: 'maypleglobal.com',
  },
  {
    name: 'OpenXcell',
    domain: 'openxcell.com',
  },
  {
    name: 'Ridgeway',
    domain: 'ridgeway.com',
  },
  {
    name: 'Tcwlm',
    domain: 'tcwlm.com',
  },
  {
    name: '85SIXTY',
    domain: '85sixty.com',
  },
  {
    name: 'PrestaShop',
    domain: 'prestashop.com',
  },
  {
    name: 'Grafbase',
    domain: 'grafbase.com',
  },
  {
    name: 'Trifecta Telecom Solutions',
    domain: 'trifectatelecomsolutions.com',
  },
  {
    name: 'Bundle Builder',
    domain: 'bundlebuilder.app',
  },
  {
    name: 'Concord',
    domain: 'concordusa.com',
  },
  {
    name: 'SBC Technology Consulting',
    domain: 'sbcteco.com',
  },
  {
    name: 'Expedibox',
    domain: 'expedibox.com',
  },
  {
    name: 'Brighthive',
    domain: 'brighthive.io',
  },
  {
    name: 'LexisNexis CounselLink',
    domain: 'counsellink.com',
  },
  {
    name: 'POPcomms',
    domain: 'popcomms.com',
  },
  {
    name: 'theom',
    domain: 'theom.ai',
  },
  {
    name: 'Coin Metrics',
    domain: 'coinmetrics.io',
  },
  {
    name: 'SafeBreach',
    domain: 'safebreach.com',
  },
  {
    name: 'Kargo',
    domain: 'mykargo.com',
  },
  {
    name: 'Oat Financial',
    domain: 'oatfinancial.com',
  },
  {
    name: 'Empathy First Media',
    domain: 'empathyfirstmedia.com',
  },
  {
    name: 'Last Journey',
    domain: 'lastjourney.in',
  },
  {
    name: 'IBM iX DACH',
    domain: 'ibmix.at',
  },
  {
    name: 'Pitch121',
    domain: 'pitch121.com',
  },
  {
    name: 'Zūm Rails',
    domain: 'zumrails.com',
  },
  {
    name: 'Virtual Identity AG',
    domain: 'virtual-identity.com',
  },
  {
    name: 'El Dorado Group',
    domain: 'eldoradogrp.com',
  },
  {
    name: 'Planet Payment',
    domain: 'weareplanet.com',
  },
  {
    name: 'Creatuity, Inc.',
    domain: 'creatuity.com',
  },
  {
    name: 'Cynch Security',
    domain: 'cynch.com.au',
  },
  {
    name: 'Influx',
    domain: 'influx.com',
  },
  {
    name: 'Protecto Inc',
    domain: 'protecto.ai',
  },
  {
    name: 'SameSystem',
    domain: 'samesystem.com',
  },
  {
    name: 'allcolibri',
    domain: 'allcolibri.com',
  },
  {
    name: 'BR-DGE',
    domain: 'br-dge.to',
  },
  {
    name: '주식회사 페어리',
    domain: 'salesclue.io',
  },
  {
    name: 'SafeAdvisory Limited',
    domain: 'safeadvisory.co.nz',
  },
  {
    name: 'Azumuta',
    domain: 'azumuta.com',
  },
  {
    name: 'Ocrolus',
    domain: 'ocrolus.com',
  },
  {
    name: 'supersonic.online',
    domain: 'supersonic.online',
  },
  {
    name: 'SADA Systems',
    domain: 'sada.com',
  },
  {
    name: 'NPact',
    domain: 'npact.com',
  },
  {
    name: 'Popcorn Growth',
    domain: 'popcorngrowth.com',
  },
  {
    name: 'LeaseQuery',
    domain: 'leasequery.com',
  },
  {
    name: 'BOL Agency',
    domain: 'bol-agency.com',
  },
  {
    name: 'Navigate Consulting Group,',
    domain: 'navigatecg.com',
  },
  {
    name: 'One Branding',
    domain: 'onedsm.com',
  },
  {
    name: 'Entri',
    domain: 'entri.com',
  },
  {
    name: 'ProcurementIQ',
    domain: 'procurementiq.com',
  },
  {
    name: 'Shield Financial Compliance Ltd',
    domain: 'shieldfc.com',
  },
  {
    name: 'MHS Inc.',
    domain: 'mhs.com',
  },
  {
    name: 'Papershift',
    domain: 'papershift.com',
  },
  {
    name: 'Zluri',
    domain: 'zluri.com',
  },
  {
    name: 'Kong',
    domain: 'konghq.com',
  },
  {
    name: 'Deltologic',
    domain: 'deltologic.com',
  },
  {
    name: 'JobsForHer',
    domain: 'jobsforher.com',
  },
  {
    name: 'Siena',
    domain: 'siena.cx',
  },
  {
    name: 'Proposales',
    domain: 'proposales.com',
  },
  {
    name: 'Powerling Inc',
    domain: 'powerling.com',
  },
  {
    name: 'Toki',
    domain: 'buildwithtoki.com',
  },
  {
    name: 'Quadient',
    domain: 'quadient.com',
  },
  {
    name: 'YTT LLC',
    domain: 'yourtrucktax.com',
  },
  {
    name: 'Synthesized',
    domain: 'synthesized.io',
  },
  {
    name: 'Cardata',
    domain: 'cardata.co',
  },
  {
    name: 'Melior Hire',
    domain: 'getmelior.com',
  },
  {
    name: 'Intrepid by VitalSource',
    domain: 'intrepidlearning.com',
  },
  {
    name: 'Parkway',
    domain: 'pkwyprogram.com',
  },
  {
    name: 'Clozd',
    domain: 'clozd.com',
  },
  {
    name: 'Quinby Partners',
    domain: 'quinbypartners.com',
  },
  {
    name: 'Nexla',
    domain: 'nexla.com',
  },
  {
    name: 'Ashmont MediaTech',
    domain: 'ashmontmediatech.com',
  },
  {
    name: 'Slashdot Media',
    domain: 'slashdotmedia.com',
  },
  {
    name: 'Folktale',
    domain: 'folktale.io',
  },
  {
    name: 'LimeChat',
    domain: 'limechat.ai',
  },
  {
    name: 'Nullius in Verba',
    domain: 'niv.al',
  },
  {
    name: 'Padok',
    domain: 'padok.fr',
  },
  {
    name: 'passbolt',
    domain: 'passbolt.com',
  },
  {
    name: 'MercuryGate International',
    domain: 'mercurygate.com',
  },
  {
    name: 'Nightfall',
    domain: 'nightfall.ai',
  },
  {
    name: 'Sym',
    domain: 'symops.com',
  },
  {
    name: 'Vivayic, Inc.',
    domain: 'vivayic.com',
  },
  {
    name: 'Wavicle Data Solutions',
    domain: 'wavicledata.com',
  },
  {
    name: 'Popmenu',
    domain: 'popmenu.com',
  },
  {
    name: 'CarsVansandBikes Limited',
    domain: 'carsvansandbikes.com',
  },
  {
    name: 'LoudHippo',
    domain: 'loudhippo.io',
  },
  {
    name: 'MOST',
    domain: 'datamost.pro',
  },
  {
    name: 'Qonsent',
    domain: 'qonsent.com',
  },
  {
    name: 'Pigment',
    domain: 'gopigment.com',
  },
  {
    name: 'Leverage',
    domain: 'getleverage.com',
  },
  {
    name: 'Hyper Digital Partners',
    domain: 'hyperdp.com',
  },
  {
    name: 'MERGE',
    domain: 'mergeworld.com',
  },
  {
    name: 'LiveRecover',
    domain: 'liverecover.com',
  },
  {
    name: 'Cube',
    domain: 'cube.dev',
  },
  {
    name: 'Brivo',
    domain: 'brivo.com',
  },
  {
    name: 'Arelyz AI Tech',
    domain: 'arelyz.com',
  },
  {
    name: 'FeedMob',
    domain: 'feedmob.com',
  },
  {
    name: 'Ambit',
    domain: 'ambit.ai',
  },
  {
    name: 'MangoApps',
    domain: 'mangoapps.com',
  },
  {
    name: 'Gibbs Smith Education',
    domain: 'gibbssmitheducation.com',
  },
  {
    name: 'Rapyuta Robotics',
    domain: 'rapyuta-robotics.com',
  },
  {
    name: 'Pattern',
    domain: 'thisispattern.com',
  },
  {
    name: 'Ingrid',
    domain: 'ingrid.com',
  },
  {
    name: 'Storeis',
    domain: 'store.is',
  },
  {
    name: 'Redpanda',
    domain: 'redpanda.com',
  },
  {
    name: 'QL TechWorks',
    domain: 'qltechworks.com',
  },
  {
    name: 'Patchworks',
    domain: 'wearepatchworks.com',
  },
  {
    name: 'V7',
    domain: 'v7labs.com',
  },
  {
    name: 'HourWork',
    domain: 'hourwork.com',
  },
  {
    name: 'Tatango',
    domain: 'tatango.com',
  },
  {
    name: 'Semrush',
    domain: 'semrush.com',
  },
  {
    name: 'ATON',
    domain: 'atoninformatica.it',
  },
  {
    name: 'Order Desk',
    domain: 'orderdesk.com',
  },
  {
    name: 'ELK Marketing',
    domain: 'elkhq.com',
  },
  {
    name: 'SynergySuite',
    domain: 'synergysuite.com',
  },
  {
    name: 'Casper Labs',
    domain: 'casperlabs.io',
  },
  {
    name: 'Performance Development Group',
    domain: 'performdev.com',
  },
  {
    name: 'Synthesis Systems',
    domain: 'synthesis-systems.com',
  },
  {
    name: 'Varis',
    domain: 'govaris.com',
  },
  {
    name: 'Smappen',
    domain: 'smappen.com',
  },
  {
    name: 'Chapman Bright',
    domain: 'chapmanbright.com',
  },
  {
    name: 'Datactics',
    domain: 'datactics.com',
  },
  {
    name: 'pickzen',
    domain: 'pickzen.com',
  },
  {
    name: 'Kontur',
    domain: 'kontur.ru',
  },
  {
    name: 'Onepoint Consulting Ltd',
    domain: 'onepointltd.com',
  },
  {
    name: 'Amberdata',
    domain: 'amberdata.io',
  },
  {
    name: 'Optima Audience',
    domain: 'optima-audience.com',
  },
  {
    name: 'Navan',
    domain: 'navan.com',
  },
  {
    name: 'Elation Health',
    domain: 'elationhealth.com',
  },
  {
    name: 'Jedox',
    domain: 'jedox.com',
  },
  {
    name: 'Media.net',
    domain: 'media.net',
  },
  {
    name: 'Cubtale Inc.',
    domain: 'cubtale.com',
  },
  {
    name: 'Talisman',
    domain: 'gettalisman.com',
  },
  {
    name: 'DeVO Protocol',
    domain: 'devoprotocol.org',
  },
  {
    name: 'Dealfront',
    domain: 'dealfront.com',
  },
  {
    name: 'Proactis',
    domain: 'proactis.com',
  },
  {
    name: 'Smokeball',
    domain: 'smokeball.com',
  },
  {
    name: 'RentCheck',
    domain: 'getrentcheck.com',
  },
  {
    name: 'BeCloud Solutions',
    domain: 'becloudsolutions.com',
  },
  {
    name: 'XENA Intelligence',
    domain: 'xenaintelligence.com',
  },
  {
    name: 'Lingpad',
    domain: 'lingpad.com',
  },
  {
    name: 'Techment Technology',
    domain: 'techment.com',
  },
  {
    name: 'WickEdCommerce',
    domain: 'wickedcommerce.co.uk',
  },
  {
    name: 'ShopDev',
    domain: 'shopdev.co',
  },
  {
    name: 'Yembo',
    domain: 'yembo.ai',
  },
  {
    name: 'Colect',
    domain: 'colect.io',
  },
  {
    name: 'NorthBound Solutions, Inc.',
    domain: 'northboundsolutions.com',
  },
  {
    name: 'Directorii',
    domain: 'directorii.com',
  },
  {
    name: 'Deeping Source',
    domain: 'deepingsource.io',
  },
  {
    name: 'The Pedowitz Group',
    domain: 'pedowitzgroup.com',
  },
  {
    name: 'Intercap Registry',
    domain: 'get.inc',
  },
  {
    name: '2nd Watch',
    domain: '2ndwatch.com',
  },
  {
    name: 'Dyspatch',
    domain: 'dyspatch.io',
  },
  {
    name: 'GRAYBOX',
    domain: 'graybox.co',
  },
  {
    name: 'Crater',
    domain: 'crater.financial',
  },
  {
    name: 'Spreedly',
    domain: 'spreedly.com',
  },
  {
    name: 'Frankly A/S',
    domain: 'frankly.dk',
  },
  {
    name: 'Insider Intelligence',
    domain: 'insiderintelligence.com',
  },
  {
    name: 'HappyCo',
    domain: 'happy.co',
  },
  {
    name: 'Ambassador',
    domain: 'getambassador.com',
  },
  {
    name: 'KnowBe4',
    domain: 'knowbe4.com',
  },
  {
    name: 'PayU',
    domain: 'colombia.payu.com',
  },
  {
    name: 'Dassana',
    domain: 'dassana.io',
  },
  {
    name: 'Infuse Medical- Digital Production Agency',
    domain: 'infusemed.com',
  },
  {
    name: 'Omtera',
    domain: 'omtera.com',
  },
  {
    name: 'Global Filter',
    domain: 'globalfilter.com',
  },
  {
    name: 'Arbure Inc.',
    domain: 'arbure.com',
  },
  {
    name: 'I-35 LOGISTIC SOLUTIONS LLC',
    domain: 'i35logisticsolutions.com',
  },
  {
    name: 'Liftango',
    domain: 'liftango.com',
  },
  {
    name: 'Malabar Investments',
    domain: 'malabarinvest.com',
  },
  {
    name: 'adaoverseasmarketing',
    domain: 'adaoverseasmarketing.com',
  },
  {
    name: 'Write',
    domain: 'write.cz',
  },
  {
    name: 'phData, Inc.',
    domain: 'phdata.io',
  },
  {
    name: 'HES FinTech',
    domain: 'hesfintech.com',
  },
  {
    name: 'Kooomo SaaS Limited',
    domain: 'kooomo.com',
  },
  {
    name: 'Crito Capital',
    domain: 'critocapital.com',
  },
  {
    name: 'Telefonica Venezuela',
    domain: 'telefonica.com.ve',
  },
  {
    name: 'BoxLock',
    domain: 'boxlock.io',
  },
  {
    name: 'Artemis Health',
    domain: 'artemishealth.com',
  },
  {
    name: 'Redo Tech, Inc',
    domain: 'getredo.com',
  },
  {
    name: 'SmartMedia Technologies',
    domain: 'smartmediatech.io',
  },
  {
    name: 'Cycle Labs',
    domain: 'cyclelabs.io',
  },
  {
    name: 'Intellizence',
    domain: 'intellizence.com',
  },
  {
    name: 'Mutt Data',
    domain: 'muttdata.ai',
  },
  {
    name: 'Hitech BIM Services',
    domain: 'hitechbimservices.com',
  },
  {
    name: 'Giraffe Mission',
    domain: 'giraffemission.com',
  },
  {
    name: 'HTC Global Services - Official Page',
    domain: 'htcinc.com',
  },
  {
    name: 'Lunio',
    domain: 'lunio.ai',
  },
  {
    name: 'Plan A',
    domain: 'plana.earth',
  },
  {
    name: 'Upside',
    domain: 'meetupside.com',
  },
  {
    name: 'CNO',
    domain: 'gocno.io',
  },
  {
    name: 'JFE techno-Research Co., Ltd.',
    domain: 'jfe-tec.co.jp',
  },
  {
    name: 'Weathernews',
    domain: 'weathernews.com',
  },
  {
    name: 'Mail Handling International',
    domain: 'mhi.co',
  },
  {
    name: 'Polymer',
    domain: 'polymerhq.io',
  },
  {
    name: 'Surfe (ex Leadjet)',
    domain: 'surfe.com',
  },
  {
    name: 'InflowCX',
    domain: 'inflowcx.com',
  },
  {
    name: 'TINY Technologies',
    domain: 'tiny.cloud',
  },
  {
    name: 'Deleted_PPC Protect',
    domain: 'deletedppcprotect.com',
  },
  {
    name: 'ContextLink',
    domain: 'contextlink.io',
  },
  {
    name: 'Beezlabs',
    domain: 'beezlabs.com',
  },
  {
    name: 'apiable.io',
    domain: 'apiable.io',
  },
  {
    name: 'App Solve',
    domain: 'appsolve.com',
  },
  {
    name: 'DesktopShipper',
    domain: 'desktopshipper.com',
  },
  {
    name: 'The Email Studio Inc',
    domain: 'theemailstud.io',
  },
  {
    name: 'HqO',
    domain: 'hqo.co',
  },
  {
    name: 'Netguru',
    domain: 'netguru.com',
  },
  {
    name: 'Civalgo',
    domain: 'civalgo.com',
  },
  {
    name: 'Obsidian Security',
    domain: 'obsidiansecurity.com',
  },
  {
    name: 'Synthesis Technology',
    domain: 'synthesistechnology.com',
  },
  {
    name: 'Fidelitas',
    domain: 'fidelitas.co',
  },
  {
    name: 'WildJar',
    domain: 'wildjar.com',
  },
  {
    name: 'ClearTrust',
    domain: 'cleartrust.cc',
  },
  {
    name: 'Team Nijhuis',
    domain: 'teamnijhuis.com',
  },
  {
    name: 'VAT IT',
    domain: 'vatit.com',
  },
  {
    name: 'Theodo',
    domain: 'theodo.fr',
  },
  {
    name: 'Progression',
    domain: 'progression.co',
  },
  {
    name: 'advatra',
    domain: 'advatra.com',
  },
  {
    name: 'Flare',
    domain: 'getflare.co.uk',
  },
  {
    name: 'Valispace',
    domain: 'vali.space',
  },
  {
    name: 'Tillo',
    domain: 'tillo.io',
  },
  {
    name: 'Liquid Voice',
    domain: 'liquidvoice.com',
  },
  {
    name: '7SIGNAL, Inc.',
    domain: '7signal.com',
  },
  {
    name: 'MediaDev',
    domain: 'mediadev.com',
  },
  {
    name: 'XyberMed',
    domain: 'xybermed.com',
  },
  {
    name: 'Terminal49',
    domain: 'terminal49.com',
  },
  {
    name: 'Aurora Solar',
    domain: 'aurorasolar.com',
  },
  {
    name: 'CreatorCart',
    domain: 'creatorcart.com',
  },
  {
    name: 'CareRev, Inc',
    domain: 'carerev.com',
  },
  {
    name: 'Zip',
    domain: 'ziphq.com',
  },
  {
    name: 'Cone',
    domain: 'getcone.io',
  },
  {
    name: 'mediawave commerce GmbH',
    domain: 'mediawave.de',
  },
  {
    name: 'Thrive Global',
    domain: 'thriveglobal.com',
  },
  {
    name: 'Living Simply Practical',
    domain: 'livingsimplypractical.com',
  },
  {
    name: 'FeenPOP',
    domain: 'feenpop.com',
  },
  {
    name: 'MyGlocal FZ-LLC',
    domain: 'gloc.al',
  },
  {
    name: 'Slimstock',
    domain: 'slimstock.com',
  },
  {
    name: 'Awardco',
    domain: 'award.co',
  },
  {
    name: 'Bradford Technology',
    domain: 'bradfordtechnology.tech',
  },
  {
    name: 'S3',
    domain: 's3.consulting',
  },
  {
    name: 'Blotout',
    domain: 'blotout.io',
  },
  {
    name: 'Sprockets',
    domain: 'sprockets.ai',
  },
  {
    name: 'Bluescape',
    domain: 'bluescape.com',
  },
  {
    name: 'Pai',
    domain: 'pai.lat',
  },
  {
    name: 'Pai Suscripciones',
    domain: 'paisuscripciones.com',
  },
  {
    name: 'Greater Good Strategy',
    domain: 'greatergoodstrategy.com',
  },
  {
    name: 'Redlist',
    domain: 'getredlist.com',
  },
  {
    name: 'Onport',
    domain: 'onport.com',
  },
  {
    name: 'Axonius',
    domain: 'axonius.com',
  },
  {
    name: 'Frejun App',
    domain: 'frejun.com',
  },
  {
    name: 'Netcore',
    domain: 'netcorecloud.com',
  },
  {
    name: 'Heyloyalty',
    domain: 'heyloyalty.com',
  },
  {
    name: 'salonMonster',
    domain: 'salonmonster.com',
  },
  {
    name: 'SAM Corporate',
    domain: 'samcorporate.com',
  },
  {
    name: 'Clootrack',
    domain: 'clootrack.com',
  },
  {
    name: 'Autusus LLC',
    domain: 'autusus.com',
  },
  {
    name: 'Cassovia Code',
    domain: 'cassoviacode.com',
  },
  {
    name: 'Percentage Consulting Co., Ltd.',
    domain: 'thepercentage.asia',
  },
  {
    name: 'Rabinovici + Associates',
    domain: 'rab2b.com',
  },
  {
    name: 'Databricks',
    domain: 'databricks.com',
  },
  {
    name: 'CFGI',
    domain: 'cfgi.com',
  },
  {
    name: 'Launched',
    domain: 'launchedtech.io',
  },
  {
    name: 'Vation Ventures',
    domain: 'vationventures.com',
  },
  {
    name: 'Mach5 Software',
    domain: 'mach5.io',
  },
  {
    name: 'iWave',
    domain: 'iwave.com',
  },
  {
    name: 'Even',
    domain: 'even.in',
  },
  {
    name: 'Astra Inc',
    domain: 'astra.finance',
  },
  {
    name: 'Nutrislice',
    domain: 'nutrislice.com',
  },
  {
    name: 'Lyngsoe Systems',
    domain: 'lyngsoesystems.com',
  },
  {
    name: 'Entity Vibes',
    domain: 'entityvibes.com',
  },
  {
    name: 'Donately',
    domain: 'donately.com',
  },
  {
    name: 'Software & Consulting Americas LLC',
    domain: 'softconsultamericas.com',
  },
  {
    name: 'limber',
    domain: 'limber.work',
  },
  {
    name: 'Massive Rocket',
    domain: 'massiverocket.com',
  },
  {
    name: 'Megantic',
    domain: 'megantic.online',
  },
  {
    name: 'TAP CXM',
    domain: 'tapcxm.com',
  },
  {
    name: 'SiteTrax by Netarus',
    domain: 'sitetrax.io',
  },
  {
    name: 'Creative Force',
    domain: 'creativeforce.io',
  },
  {
    name: 'OneTrust',
    domain: 'onetrust.com',
  },
  {
    name: 'Aporia',
    domain: 'aporia.com',
  },
  {
    name: 'Lazer Technologies',
    domain: 'lazertechnologies.com',
  },
  {
    name: 'Samsung Ads',
    domain: 'samsungads.com',
  },
  {
    name: 'Qsic',
    domain: 'getqsic.com',
  },
  {
    name: 'AlertMedia',
    domain: 'alertmedia.com',
  },
  {
    name: 'Tech Advising',
    domain: 'tech-advising.com',
  },
  {
    name: 'StudyDrome',
    domain: 'studydrome.com',
  },
  {
    name: 'NMB Solutions',
    domain: 'nmbsolutions.ca',
  },
  {
    name: 'Clear House Accountants',
    domain: 'chacc.co.uk',
  },
  {
    name: 'ayora',
    domain: 'helloayora.com',
  },
  {
    name: 'AIVARR Telecom Group',
    domain: 'aivarr.com',
  },
  {
    name: 'Letit Technologies FZ-LLC',
    domain: 'letit.app',
  },
  {
    name: 'Sôlt Africana Limited',
    domain: 'solt.com.ng',
  },
  {
    name: 'Fillogic',
    domain: 'fillogic.com',
  },
  {
    name: 'Synetic',
    domain: 'synetic.nl',
  },
  {
    name: 'Turnkey for Good, Inc.',
    domain: 'turnkeyforgood.com',
  },
  {
    name: 'Foursixty',
    domain: 'foursixty.com',
  },
  {
    name: 'Metomic',
    domain: 'metomic.io',
  },
  {
    name: 'CAPGEMINI POLSKA SP Z O O',
    domain: 'capgemini.pl',
  },
  {
    name: 'shopstar',
    domain: 'getshopstar.com',
  },
  {
    name: 'Address Guard',
    domain: 'addressguard.io',
  },
  {
    name: 'Engine Room Technology',
    domain: 'engineroomtech.com',
  },
  {
    name: 'LiveLike',
    domain: 'livelike.com',
  },
  {
    name: 'LinkUp',
    domain: 'linkup.com',
  },
  {
    name: 'Biztory',
    domain: 'biztory.be',
  },
  {
    name: 'Flowout',
    domain: 'flowout.com',
  },
  {
    name: 'Blott Studio',
    domain: 'blott.studio',
  },
  {
    name: 'Successive Digital',
    domain: 'successive.tech',
  },
  {
    name: 'elastic.io',
    domain: 'elastic.io',
  },
  {
    name: 'ancoreSoft GmbH',
    domain: 'ancoresoft.com',
  },
  {
    name: 'Dataseat',
    domain: 'dataseat.com',
  },
  {
    name: 'HanSpringett Ltd (Trading as H Labs)',
    domain: 'hlabs.co.uk',
  },
  {
    name: 'HyperFinity',
    domain: 'hyperfinity.ai',
  },
  {
    name: 'Authvia',
    domain: 'authvia.com',
  },
  {
    name: 'Brainworks Software',
    domain: 'brainworks.com',
  },
  {
    name: 'Hunters',
    domain: 'hunters.security',
  },
  {
    name: 'Cyolo',
    domain: 'cyolo.io',
  },
  {
    name: 'Cyara',
    domain: 'cyara.com',
  },
  {
    name: 'CloudNine',
    domain: 'cloudnine.com',
  },
  {
    name: 'InMoment',
    domain: 'inmoment.com',
  },
  {
    name: 'Nexxmed Equipaments',
    domain: 'nexxmed.com.br',
  },
  {
    name: 'Elastic Path Software',
    domain: 'elasticpath.com',
  },
  {
    name: 'Snapp',
    domain: 'snapp-media.com',
  },
  {
    name: 'JetRails',
    domain: 'jetrails.com',
  },
  {
    name: 'Breyta.io',
    domain: 'breyta.io',
  },
  {
    name: 'Dealerware',
    domain: 'dealerware.com',
  },
  {
    name: 'Skillikz Ltd',
    domain: 'skillikz.co.uk',
  },
  {
    name: 'PortalCX',
    domain: 'portalcx.io',
  },
  {
    name: 'Elisity',
    domain: 'elisity.com',
  },
  {
    name: 'Notion',
    domain: 'notion.so',
  },
  {
    name: 'Bodyguard.ai',
    domain: 'bodyguard.ai',
  },
  {
    name: 'CredAcc',
    domain: 'credacc.com',
  },
  {
    name: 'Credentially',
    domain: 'credentially.io',
  },
  {
    name: 'Gradient',
    domain: 'begradient.com',
  },
  {
    name: 'pCloudy',
    domain: 'pcloudy.com',
  },
  {
    name: 'Panaya ForeSight',
    domain: 'panaya.com',
  },
  {
    name: 'NAGL MedTech',
    domain: 'nmddo.com',
  },
  {
    name: 'NDP Studio',
    domain: 'ndp-studio.com',
  },
  {
    name: 'Pedal',
    domain: 'pedalapp.com',
  },
  {
    name: 'QiO Technologies',
    domain: 'qio.io',
  },
  {
    name: 'Slice Communications',
    domain: 'slicecommunications.com',
  },
  {
    name: 'isLocaly',
    domain: 'islocaly.com',
  },
  {
    name: 'Paul Street',
    domain: 'paulstreet.co',
  },
  {
    name: 'Spacelift',
    domain: 'spacelift.io',
  },
  {
    name: 'simplicityDX',
    domain: 'simplicitydx.com',
  },
  {
    name: 'TubeScience',
    domain: 'tubescience.com',
  },
  {
    name: 'NextMinute',
    domain: 'nextminute.com',
  },
  {
    name: 'MLTG',
    domain: 'mltgcorp.com',
  },
  {
    name: 'Anonos',
    domain: 'anonos.com',
  },
  {
    name: 'The Ortus Club',
    domain: 'ortusclub.com',
  },
  {
    name: 'Fifth Wall',
    domain: 'fifthwall.com',
  },
  {
    name: 'Rightlander',
    domain: 'rightlander.com',
  },
  {
    name: 'Kennek',
    domain: 'kennek.io',
  },
  {
    name: 'Bound Technologies, Inc.',
    domain: 'bounddelivery.com',
  },
  {
    name: 'best it AG',
    domain: 'bestit.de',
  },
  {
    name: '1901 Consulting Group',
    domain: '1901consultinggroup.com',
  },
  {
    name: 'STS Recycling',
    domain: 'stselectronicrecyclinginc.com',
  },
  {
    name: 'Room without a roof',
    domain: 'roomwithoutaroof.be',
  },
  {
    name: 'Snap! Mobile',
    domain: 'snapraise.com',
  },
  {
    name: 'Orum',
    domain: 'orum.com',
  },
  {
    name: 'Bloom Growth Studio',
    domain: 'bloomgrowth.studio',
  },
  {
    name: 'MegaplanIT',
    domain: 'megaplanit.com',
  },
  {
    name: 'Melon/DEPT®',
    domain: 'melonheads.com',
  },
  {
    name: 'Viably',
    domain: 'runviably.com',
  },
  {
    name: 'SiteDocs Safety Corp ULC',
    domain: 'sitedocs.com',
  },
  {
    name: 'Spin.AI',
    domain: 'spin.ai',
  },
  {
    name: 'Arroyo360, LLC',
    domain: 'arroyo360.com',
  },
  {
    name: 'Lucid Financial Markets',
    domain: 'lucidfinancialmarkets.com',
  },
  {
    name: 'Ooma',
    domain: 'ooma.com',
  },
  {
    name: 'Lirik',
    domain: 'lirik.io',
  },
  {
    name: 'Avaza',
    domain: 'avaza.com',
  },
  {
    name: 'Gufy',
    domain: 'gufy.com.au',
  },
  {
    name: 'FINELOG-BISEUM',
    domain: 'finelog-biseum.com',
  },
  {
    name: 'EIKONA Media',
    domain: 'eikona-media.de',
  },
  {
    name: 'MDsave',
    domain: 'mdsave.com',
  },
  {
    name: '3Degrees',
    domain: '3degreesinc.com',
  },
  {
    name: 'Circle Security',
    domain: 'circlesecurity.ai',
  },
  {
    name: 'Rising Cloud',
    domain: 'risingcloud.com',
  },
  {
    name: 'MorganFranklin Consulting',
    domain: 'morganfranklin.com',
  },
  {
    name: 'Persona',
    domain: 'withpersona.com',
  },
  {
    name: 'GAMMA AR',
    domain: 'gamma-ar.com',
  },
  {
    name: 'IGS Solar',
    domain: 'igs.com',
  },
  {
    name: 'Ribbon Health',
    domain: 'ribbonhealth.com',
  },
  {
    name: 'Bluesky',
    domain: 'getbluesky.io',
  },
  {
    name: 'Manufactured',
    domain: 'manufactured.com',
  },
  {
    name: 'RallyUp.com',
    domain: 'rallyup.com',
  },
  {
    name: 'Syniverse',
    domain: 'syniverse.com',
  },
  {
    name: 'Ridgeline Agency',
    domain: 'ridgelineagency.com',
  },
  {
    name: 'scaleMatters',
    domain: 'scalematters.com',
  },
  {
    name: 'Renoworks',
    domain: 'renoworks.com',
  },
  {
    name: 'StackGo',
    domain: 'stackgo.io',
  },
  {
    name: 'Metaco',
    domain: 'metaco.com',
  },
  {
    name: 'Qlikflow',
    domain: 'qlikflow.nl',
  },
  {
    name: 'Compwise',
    domain: 'compwise.com',
  },
  {
    name: 'Xpanse',
    domain: 'xpanse.com',
  },
  {
    name: 'Prepaid Expense Card Solutions, Inc.',
    domain: 'pexcard.com',
  },
  {
    name: 'Targeted Marketing',
    domain: 'targetedmarketing.io',
  },
  {
    name: 'Antiloop GmbH',
    domain: 'antiloop.com',
  },
  {
    name: 'SmartAC.com',
    domain: 'smartac.com',
  },
  {
    name: 'Foundation Commerce, Inc',
    domain: 'getfoundation.com',
  },
  {
    name: 'CoinTracker',
    domain: 'cointracker.io',
  },
  {
    name: 'XpertHR',
    domain: 'xperthr.com',
  },
  {
    name: 'Burt Intelligence',
    domain: 'burtintelligence.com',
  },
  {
    name: 'Persefoni',
    domain: 'persefoni.com',
  },
  {
    name: '22 IMPACT',
    domain: '22impact.com',
  },
  {
    name: 'Social Snug',
    domain: 'socialsnug.net',
  },
  {
    name: 'BSS Commerce',
    domain: 'bsscommerce.com',
  },
  {
    name: 'Hyperstate',
    domain: 'kappax.io',
  },
  {
    name: 'e-Comas',
    domain: 'e-comas.com',
  },
  {
    name: 'SupplyPike',
    domain: 'supplypike.com',
  },
  {
    name: 'GoodUnited',
    domain: 'goodunited.io',
  },
  {
    name: 'Ignite Your Brand',
    domain: 'igniteyourbrand.co',
  },
  {
    name: 'Huge Win Media',
    domain: 'hugewinmedia.com',
  },
  {
    name: 'NICE',
    domain: 'nice.com',
  },
  {
    name: 'ActionForDogs',
    domain: 'actionfordogs.com',
  },
  {
    name: 'Kcloud Technologies',
    domain: 'kcloudtechnologies.com',
  },
  {
    name: 'Taal Media',
    domain: 'taalmedia.com',
  },
  {
    name: 'Xactware',
    domain: 'xactware.com',
  },
  {
    name: 'Noom',
    domain: 'noom.com',
  },
  {
    name: 'ECS',
    domain: 'ecstech.com',
  },
  {
    name: 'GiveCentral',
    domain: 'givecentral.org',
  },
  {
    name: 'Vultr',
    domain: 'vultr.com',
  },
  {
    name: 'TrustCloud',
    domain: 'trustcloud.tech',
  },
  {
    name: 'Joseki Technologies',
    domain: 'joseki-tech.com',
  },
  {
    name: 'Netenrich',
    domain: 'netenrich.com',
  },
  {
    name: 'Forager',
    domain: 'goforager.com',
  },
  {
    name: 'Binary Stream Software',
    domain: 'binarystream.com',
  },
  {
    name: 'Rinsed',
    domain: 'rinsed.co',
  },
  {
    name: 'Arrive',
    domain: 'thearriveplatform.com',
  },
  {
    name: 'Fireside Digital (Formely PCR)',
    domain: 'firesidedigital.co',
  },
  {
    name: 'Boardroom',
    domain: 'ecommboardroom.com',
  },
  {
    name: 'Good Joo Joo',
    domain: 'goodjoojoo.com',
  },
  {
    name: 'ApertureXI Technologies',
    domain: 'aperturexi.com',
  },
  {
    name: '10SQ',
    domain: 'tensq.com.au',
  },
  {
    name: 'Reveneer Inc.',
    domain: 'reveneer.io',
  },
  {
    name: 'Opsfleet',
    domain: 'opsfleet.com',
  },
  {
    name: 'Affinity Solutions',
    domain: 'affinitysolutions.com',
  },
  {
    name: 'V-Ex',
    domain: 'v-ex.com',
  },
  {
    name: 'Uber - Partners',
    domain: 'uber-partners.com',
  },
  {
    name: 'AccuSourceHR',
    domain: 'accusourcehr.com',
  },
  {
    name: 'Replicant',
    domain: 'replicant.com',
  },
  {
    name: 'MobileMind Technologies, Inc.',
    domain: 'mobilemind.io',
  },
  {
    name: 'Adobe',
    domain: 'adobe.com',
  },
  {
    name: 'Brad Goodman Solutions - iOps360',
    domain: 'iops360.com',
  },
  {
    name: 'Workstream',
    domain: 'workstream.us',
  },
  {
    name: 'Macondo Magic Softwares',
    domain: 'macondosoftwares.com',
  },
  {
    name: 'Timeero',
    domain: 'timeero.com',
  },
  {
    name: 'Allthenticate',
    domain: 'allthenticate.net',
  },
  {
    name: 'OST',
    domain: 'ostusa.com',
  },
  {
    name: 'Valor Software',
    domain: 'valor-software.com',
  },
  {
    name: 'TripLog',
    domain: 'triplogmileage.com',
  },
  {
    name: 'Reindeer Consultants',
    domain: 'reindeerconsultants.com',
  },
  {
    name: 'Omni Labs',
    domain: 'omniinc.com',
  },
  {
    name: 'Astute',
    domain: 'astutereview.com',
  },
  {
    name: 'ZeeMee',
    domain: 'zeemee.com',
  },
  {
    name: 'Botcopy',
    domain: 'botcopy.com',
  },
  {
    name: 'Gulf Coast Solutions',
    domain: 'gcsworks.com',
  },
  {
    name: 'Instant Financial',
    domain: 'instant.co',
  },
  {
    name: 'Instapage',
    domain: 'instapage.com',
  },
  {
    name: 'Springboard Digital',
    domain: 'springboardigital.com',
  },
  {
    name: 'STUDIIO',
    domain: 'studiio.com',
  },
  {
    name: 'Andrews Cooper',
    domain: 'andrews-cooper.com',
  },
  {
    name: 'Simply Business',
    domain: 'simplybusiness.com',
  },
  {
    name: 'Kharon',
    domain: 'kharon.com',
  },
  {
    name: 'Kailua Labs',
    domain: 'kailualabs.com',
  },
  {
    name: 'Ranqx',
    domain: 'ranqx.com',
  },
  {
    name: 'SimScale',
    domain: 'simscale.com',
  },
  {
    name: 'Cirtuo',
    domain: 'cirtuo.com',
  },
  {
    name: 'Vesper',
    domain: 'vespertool.com',
  },
  {
    name: 'MIU Strategies',
    domain: 'miustrategies.com',
  },
  {
    name: 'Attlaz',
    domain: 'attlaz.com',
  },
  {
    name: 'Delaget',
    domain: 'delaget.com',
  },
  {
    name: 'Tempo',
    domain: 'tempo.io',
  },
  {
    name: 'MetaMap',
    domain: 'metamap.com',
  },
  {
    name: 'Sketch',
    domain: 'sketch.com',
  },
  {
    name: 'Zing',
    domain: 'zingcomunicacao.com.br',
  },
  {
    name: 'Lawmatics',
    domain: 'lawmatics.com',
  },
  {
    name: 'InDeap',
    domain: 'indeap.com',
  },
  {
    name: 'Triple Whale Inc.',
    domain: 'triplewhale.com',
  },
  {
    name: 'Manta',
    domain: 'manta.io',
  },
  {
    name: 'Revelstoke SOAR',
    domain: 'revelstoke.io',
  },
  {
    name: 'NetVendor',
    domain: 'netvendor.com',
  },
  {
    name: 'Multikrd',
    domain: 'multikrd.com',
  },
  {
    name: 'Safe Site Check In',
    domain: 'safesitecheckin.com',
  },
  {
    name: 'NUACOM',
    domain: 'nuacom.com',
  },
  {
    name: 'AdvisoryHub, LLC.',
    domain: 'advisoryhub.com',
  },
  {
    name: 'Ditto',
    domain: 'dittowords.com',
  },
  {
    name: 'Junk Removal Authority',
    domain: 'junkremovalauthority.com',
  },
  {
    name: 'Emulsion Group',
    domain: 'emulsiongroup.com',
  },
  {
    name: 'iQuanti',
    domain: 'iquanti.com',
  },
  {
    name: 'Co-Created Goods',
    domain: 'cocreatedgoods.com',
  },
  {
    name: 'JumpCrew',
    domain: 'jumpcrew.com',
  },
  {
    name: 'Acryl Data',
    domain: 'acryldata.io',
  },
  {
    name: 'CarDana',
    domain: 'cardana.co',
  },
  {
    name: 'Audience 1st',
    domain: 'audience1st.fm',
  },
  {
    name: 'Trigo',
    domain: 'trigoretail.com',
  },
  {
    name: 'SentiOne',
    domain: 'sentione.com',
  },
  {
    name: 'Venped',
    domain: 'venped.com',
  },
  {
    name: 'TechneValue GmbH',
    domain: 'technevalue.com',
  },
  {
    name: 'Simplement',
    domain: 'simplement.us',
  },
  {
    name: 'Graft',
    domain: 'graft.com',
  },
  {
    name: 'Peopleoma',
    domain: 'peopleoma.com',
  },
  {
    name: 'Finmail',
    domain: 'finmail.com',
  },
  {
    name: 'Zion & Zion',
    domain: 'zionandzion.com',
  },
  {
    name: 'Bent Ear Solutions',
    domain: 'bentearsolutions.com',
  },
  {
    name: 'APIIDA',
    domain: 'apiida.com',
  },
  {
    name: 'Retox Digital',
    domain: 'retoxdigital.com',
  },
  {
    name: 'Four13 Group',
    domain: 'four13.co',
  },
  {
    name: 'NetWitness',
    domain: 'netwitness.com',
  },
  {
    name: 'Trucker Tools',
    domain: 'truckertools.com',
  },
  {
    name: 'Prime Trust',
    domain: 'primetrust.com',
  },
  {
    name: 'Lookout',
    domain: 'thelookoutway.com',
  },
  {
    name: 'Logixboard',
    domain: 'logixboard.com',
  },
  {
    name: 'Opteo',
    domain: 'opteo.com',
  },
  {
    name: 'CBRE',
    domain: 'cbre.us',
  },
  {
    name: 'Fastpath',
    domain: 'gofastpath.com',
  },
  {
    name: 'Blue Corona',
    domain: 'bluecorona.com',
  },
  {
    name: 'Drata',
    domain: 'drata.com',
  },
  {
    name: 'APIcenter',
    domain: 'apicenter.io',
  },
  {
    name: 'Demandwell',
    domain: 'demandwell.com',
  },
  {
    name: 'Logotheray Logo Design',
    domain: 'logotherapylogo.design',
  },
  {
    name: 'IMG: Intermedia Global',
    domain: 'intermedia-global.com',
  },
  {
    name: 'Resonate',
    domain: 'resonate.com',
  },
  {
    name: 'Showpad',
    domain: 'showpad.com',
  },
  {
    name: 'Very Good Ventures',
    domain: 'verygood.ventures',
  },
  {
    name: 'solvpath',
    domain: 'solvpath.com',
  },
  {
    name: 'WitFoo, Inc.',
    domain: 'witfoo.com',
  },
  {
    name: '5 Ronin Media Ltd',
    domain: 'wolfdigitalforge.com',
  },
  {
    name: 'Zuppler',
    domain: 'zuppler.com',
  },
  {
    name: 'Teramind',
    domain: 'teramind.co',
  },
  {
    name: 'CURIO',
    domain: 'curio.life',
  },
  {
    name: 'nSure.ai',
    domain: 'nsure.ai',
  },
  {
    name: 'Pax8',
    domain: 'pax8.com',
  },
  {
    name: 'Pilot.com',
    domain: 'pilot.com',
  },
  {
    name: 'Thena',
    domain: 'thena.ai',
  },
  {
    name: 'Bitfreighter',
    domain: 'bitfreighter.com',
  },
  {
    name: 'FreightClaims.com',
    domain: 'freightclaims.com',
  },
  {
    name: 'Probooking',
    domain: 'getprobooking.com',
  },
  {
    name: 'Enovvio, Inc.',
    domain: 'enovvio.com',
  },
  {
    name: 'CommBox',
    domain: 'commbox.io',
  },
  {
    name: 'Partnorize',
    domain: 'partnorize.com',
  },
  {
    name: 'Deltatre',
    domain: 'deltatre.com',
  },
  {
    name: 'The Wishlist',
    domain: 'thewishlist.io',
  },
  {
    name: 'idoba',
    domain: 'idoba.com',
  },
  {
    name: 'Comark',
    domain: 'comark.be',
  },
  {
    name: 'Textmetrics',
    domain: 'textmetrics.com',
  },
  {
    name: 'eComBrew',
    domain: 'ecombrew.co',
  },
  {
    name: 'Sintertek',
    domain: 'solidzer.com',
  },
  {
    name: 'BidX - Master Amazon Advertising',
    domain: 'bidx.io',
  },
  {
    name: 'nymbly, LLC',
    domain: 'nymbly.work',
  },
  {
    name: 'Retail Lease Trac',
    domain: 'rltrac.com',
  },
  {
    name: 'Denodo Technologies',
    domain: 'denodo.com',
  },
  {
    name: 'Canoe',
    domain: 'canoeintelligence.com',
  },
  {
    name: 'BrightHire',
    domain: 'brighthire.com',
  },
  {
    name: 'BRIO',
    domain: 'gobrio.com',
  },
  {
    name: 'NewBeauty',
    domain: 'newbeauty.com',
  },
  {
    name: 'Vision2Voice Communications',
    domain: 'vision2voice.ca',
  },
  {
    name: 'iATS Payments',
    domain: 'iatspayments.com',
  },
  {
    name: 'Luminate',
    domain: 'luminatedata.com',
  },
  {
    name: 'Fluxx',
    domain: 'fluxx.io',
  },
  {
    name: 'Kogneta',
    domain: 'kogneta.com',
  },
  {
    name: 'Sigma Connectivity',
    domain: 'sigmaconnectivity.com',
  },
  {
    name: 'Digital Bridge Partners',
    domain: 'digitalbridgepartners.com',
  },
  {
    name: 'SQLI Switzerland',
    domain: 'sqli.ch',
  },
  {
    name: 'HomeGrowth, Inc.',
    domain: 'homegrowth.us',
  },
  {
    name: 'TEAM',
    domain: 'weareteamstudio.com',
  },
  {
    name: 'Prism Data',
    domain: 'prismdata.com',
  },
  {
    name: 'Fluidata',
    domain: 'fluidata.co',
  },
  {
    name: 'Viamedici',
    domain: 'viamedici.com',
  },
  {
    name: 'Alleyroy',
    domain: 'alleyroy.com',
  },
  {
    name: 'Clupea, Inc.',
    domain: 'clupea.co.kr',
  },
  {
    name: 'Axela Technologies',
    domain: 'axela-tech.com',
  },
  {
    name: 'No Revisions',
    domain: 'norevisions.co',
  },
  {
    name: 'Advanced Cloud Solutions.com',
    domain: 'advcloudsolutions.com',
  },
  {
    name: 'Redstor',
    domain: 'redstor.com',
  },
  {
    name: 'Trint',
    domain: 'trint.com',
  },
  {
    name: 'Ciloo',
    domain: 'ciloo.com',
  },
  {
    name: 'Quotient Technology',
    domain: 'quotient.com',
  },
  {
    name: 'WorkBoard',
    domain: 'workboard.com',
  },
  {
    name: 'Hilltop Partner Network',
    domain: 'hilltoppn.com',
  },
  {
    name: 'Rubix Agency',
    domain: 'rubixagency.com',
  },
  {
    name: 'Tesorio',
    domain: 'tesorio.com',
  },
  {
    name: 'ONES',
    domain: 'ones.com',
  },
  {
    name: 'Scott Van Zandt',
    domain: 'svz.io',
  },
  {
    name: 'Stats Perform',
    domain: 'statsperform.com',
  },
  {
    name: 'Garay Ecommerce Marketing',
    domain: 'garayecommercemarketing.com',
  },
  {
    name: 'Anura',
    domain: 'anura.io',
  },
  {
    name: 'FrodX',
    domain: 'frodx.com',
  },
  {
    name: 'DataDome',
    domain: 'datadome.co',
  },
  {
    name: 'Repricer.com',
    domain: 'repricer.com',
  },
  {
    name: 'Ogilvy',
    domain: 'ogilvy.com',
  },
  {
    name: 'Red Sky Personnel',
    domain: 'redskypersonnel.co.uk',
  },
  {
    name: 'Two Owls',
    domain: 'twoowls.io',
  },
  {
    name: 'Squadcast',
    domain: 'squadcast.com',
  },
  {
    name: 'REO',
    domain: 'reodigital.com',
  },
  {
    name: 'Kontent.ai',
    domain: 'kontent.ai',
  },
  {
    name: 'Subify Subscriptions',
    domain: 'subify.info',
  },
  {
    name: 'Cloudinary',
    domain: 'cloudinary.com',
  },
  {
    name: 'Lepaya',
    domain: 'lepaya.com',
  },
  {
    name: 'Hero',
    domain: 'heropay.eu',
  },
  {
    name: 'Defiant',
    domain: 'wearedefiant.io',
  },
  {
    name: 'Volt Active Data',
    domain: 'voltactivedata.com',
  },
  {
    name: 'Escalon Services',
    domain: 'escalon.services',
  },
  {
    name: 'CompanyCam',
    domain: 'companycam.com',
  },
  {
    name: 'Elevated Third',
    domain: 'elevatedthird.com',
  },
  {
    name: 'Association Analytics',
    domain: 'associationanalytics.com',
  },
  {
    name: 'Simpli Scaled',
    domain: 'simpliscaled.com',
  },
  {
    name: 'TCP Software',
    domain: 'tcpsoftware.com',
  },
  {
    name: 'TrustLayer',
    domain: 'trustlayer.io',
  },
  {
    name: 'Red Sentry',
    domain: 'redsentry.com',
  },
  {
    name: 'FormPiper',
    domain: 'formpiper.com',
  },
  {
    name: 'OnPay',
    domain: 'onpay.com',
  },
  {
    name: 'SnackMagic',
    domain: 'snackmagic.com',
  },
  {
    name: 'ROOFLE',
    domain: 'roofle.com',
  },
  {
    name: 'Medium Marketing',
    domain: 'mediummarketing.com.au',
  },
  {
    name: 'ScaliX Agency',
    domain: 'scalix.agency',
  },
  {
    name: 'Provide Capital',
    domain: 'provide.capital',
  },
  {
    name: 'Whistle',
    domain: 'whistle.ltd',
  },
  {
    name: 'ezeep',
    domain: 'ezeep.com',
  },
  {
    name: 'Yoghurt Digital',
    domain: 'yoghurtdigital.com.au',
  },
  {
    name: 'Odore',
    domain: 'odore.com',
  },
  {
    name: 'Terminus',
    domain: 'terminus.com',
  },
  {
    name: 'Revizto',
    domain: 'revizto.com',
  },
  {
    name: 'Goflow',
    domain: 'goflow.com',
  },
  {
    name: 'EON',
    domain: 'eon.xyz',
  },
  {
    name: 'EcomExperts',
    domain: 'ecomexperts.io',
  },
  {
    name: 'Relevvo',
    domain: 'relevvo.com',
  },
  {
    name: 'Enigma',
    domain: 'enigma.com',
  },
  {
    name: 'AirMason',
    domain: 'airmason.com',
  },
  {
    name: 'Gatekeeper',
    domain: 'gatekeeperhq.com',
  },
  {
    name: 'Zeet',
    domain: 'zeet.co',
  },
  {
    name: 'PowerStation Studios',
    domain: 'powerstation-studios.co.uk',
  },
  {
    name: 'OneReach.ai',
    domain: 'onereach.ai',
  },
  {
    name: 'Blanchard',
    domain: 'blanchard.com',
  },
  {
    name: 'Aicademix',
    domain: 'aicademix.com',
  },
  {
    name: 'eStoreMedia',
    domain: 'estoremedia.com',
  },
  {
    name: 'Blueprint Partners',
    domain: 'blueprintpartners.com',
  },
  {
    name: 'Shaachi',
    domain: 'shaachi.com',
  },
  {
    name: 'Elevate Leadership Inc',
    domain: 'elevateleadership.com',
  },
  {
    name: 'BLUMEx',
    domain: 'blumex.io',
  },
  {
    name: 'Crowdlinker',
    domain: 'crowdlinker.com',
  },
  {
    name: 'Beae - Flexible Landing Page Builder',
    domain: 'beae.com',
  },
  {
    name: 'Stepin Solutions',
    domain: 'stepin-solutions.com',
  },
  {
    name: 'Ikonos',
    domain: 'ikonos.tv',
  },
  {
    name: 'Reids Online',
    domain: 'reidsonline.co.uk',
  },
  {
    name: 'Crstl',
    domain: 'crstl.so',
  },
  {
    name: 'Numeral',
    domain: 'numeralhq.com',
  },
  {
    name: 'Lightyear',
    domain: 'lightyear.ai',
  },
  {
    name: 'NetCraftsmen',
    domain: 'netcraftsmen.com',
  },
  {
    name: 'Technik Solutions Group',
    domain: 'techniksg.com',
  },
  {
    name: 'MightyCFO',
    domain: 'mightystartup.com',
  },
  {
    name: 'zælot',
    domain: 'zaelot.com',
  },
  {
    name: 'Number eight security',
    domain: 'numbereightsecurity.co.nz',
  },
  {
    name: 'Clearjet',
    domain: 'clearjet.com',
  },
  {
    name: '22°',
    domain: '22deg.co',
  },
  {
    name: 'Certinia',
    domain: 'certinia.com',
  },
  {
    name: 'Solospace',
    domain: 'solospace.org',
  },
  {
    name: 'Halo',
    domain: 'halo.ceo',
  },
  {
    name: 'Logos Systems',
    domain: 'logos.systems',
  },
  {
    name: 'Lia & Saora',
    domain: 'liaandsaora.com',
  },
  {
    name: 'Ditto',
    domain: 'ditto.live',
  },
  {
    name: 'Budbee',
    domain: 'budbee.com',
  },
  {
    name: 'GetYourGuide',
    domain: 'getyourguide.com',
  },
  {
    name: 'YNSAT tech, S.L.',
    domain: 'ynsat.com',
  },
  {
    name: 'Sprintive',
    domain: 'sprintive.com',
  },
  {
    name: 'Archlight Solutions',
    domain: 'archlightsolutions.com',
  },
  {
    name: 'Thoughtworks',
    domain: 'thoughtworks.com',
  },
  {
    name: 'Blend Commerce',
    domain: 'blendcommerce.com',
  },
  {
    name: 'Mediaset',
    domain: 'mediaset.no',
  },
  {
    name: 'C3 Media',
    domain: 'c3.agency',
  },
  {
    name: "s'nce group",
    domain: 'sncegroup.ch',
  },
  {
    name: 'Suru Partners',
    domain: 'surupartners.com',
  },
  {
    name: 'Viewpoint',
    domain: 'viewpointcomms.com',
  },
  {
    name: 'Tomorrow.io',
    domain: 'tomorrow.io',
  },
  {
    name: 'Cloud Posse',
    domain: 'cloudposse.com',
  },
  {
    name: 'Duo Security',
    domain: 'duo.com',
  },
  {
    name: 'EverConnect',
    domain: 'everconnect.com',
  },
  {
    name: 'Navvisa',
    domain: 'navvisa.com',
  },
  {
    name: 'surefoot',
    domain: 'surefoot.me',
  },
  {
    name: 'HYCU',
    domain: 'hycu.com',
  },
  {
    name: 'Brex',
    domain: 'brex.com',
  },
  {
    name: 'OrgChart LLc',
    domain: 'theorgchart.com',
  },
  {
    name: 'Brunner',
    domain: 'brunnerworks.com',
  },
  {
    name: 'Spotlight Analyst Relations',
    domain: 'spotlightar.com',
  },
  {
    name: 'Logoi',
    domain: 'logoi.io',
  },
  {
    name: 'Flowtrics.com',
    domain: 'flowtrics.com',
  },
  {
    name: 'Shadow-Soft',
    domain: 'shadow-soft.com',
  },
  {
    name: 'eCommerce Today',
    domain: 'ecommerce-today.com',
  },
  {
    name: 'NOW Digital',
    domain: 'nowdigital.com.au',
  },
  {
    name: 'ExpertSender',
    domain: 'expertsender.cn',
  },
  {
    name: 'RegenMed',
    domain: 'rgnmed.com',
  },
  {
    name: 'GrexIt',
    domain: 'grexit.com',
  },
  {
    name: 'SmartHop',
    domain: 'smarthop.com',
  },
  {
    name: 'Optm',
    domain: 'optm.com',
  },
  {
    name: 'Spintr',
    domain: 'spintr.com',
  },
  {
    name: 'Unleashed Growth',
    domain: 'unleashedgrowth.com',
  },
  {
    name: 'hello innovations',
    domain: 'helloinnovations.es',
  },
  {
    name: 'Knexus',
    domain: 'knexus.co',
  },
  {
    name: 'Flybuy',
    domain: 'flybuy.com',
  },
  {
    name: 'HYPR',
    domain: 'hypr.com',
  },
  {
    name: 'AMB Interactive',
    domain: 'ambinteractive.com',
  },
  {
    name: 'BankBound',
    domain: 'bankbound.com',
  },
  {
    name: 'Cleartelligence',
    domain: 'cleartelligence.com',
  },
  {
    name: 'The Gnar Company',
    domain: 'thegnar.com',
  },
  {
    name: 'Paradigm',
    domain: 'paradigmiq.com',
  },
  {
    name: 'Boldr',
    domain: 'boldrimpact.com',
  },
  {
    name: 'Black Heron Tech & Services LLC',
    domain: 'blackherontech.com',
  },
  {
    name: 'Follow Up Boss',
    domain: 'followupboss.com',
  },
  {
    name: 'Joyous',
    domain: 'joyoushq.com',
  },
  {
    name: 'VT Netzwelt',
    domain: 'vtnetzwelt.com',
  },
  {
    name: 'Optimum Output',
    domain: 'optimumoutput.com',
  },
  {
    name: 'Finout',
    domain: 'finout.io',
  },
  {
    name: 'SparkDynamic GmbH',
    domain: 'sparkdynamic.com',
  },
  {
    name: 'TimeSite Australia Pty Ltd',
    domain: 'timesitepro.com',
  },
  {
    name: 'SevData GmbH',
    domain: 'sevdata.de',
  },
  {
    name: 'sparkplant GmbH',
    domain: 'sparkplant.io',
  },
  {
    name: 'Audience.co',
    domain: 'audience.co',
  },
  {
    name: 'Income Access',
    domain: 'incomeaccess.com',
  },
  {
    name: 'Advanced Intralogistics',
    domain: 'advancedintralogistics.com',
  },
  {
    name: 'Hunter Hill Studio',
    domain: 'hunterhillstudio.com',
  },
  {
    name: 'Tobi Digital',
    domain: 'tobi.ie',
  },
  {
    name: 'Spot.',
    domain: 'discover.getspot.co.uk',
  },
  {
    name: 'Pay Ready',
    domain: 'payready.com',
  },
  {
    name: 'EverService',
    domain: 'everservice.com',
  },
  {
    name: 'PM Sherpas',
    domain: 'pmsherpas.com',
  },
  {
    name: 'Distru',
    domain: 'distru.com',
  },
  {
    name: 'The CRM Firm',
    domain: 'thecrmfirm.com',
  },
  {
    name: 'Signa Marketing',
    domain: 'signamarketing.com',
  },
  {
    name: 'Trendsi',
    domain: 'trendsi.com',
  },
  {
    name: 'Digital-студия StandApp',
    domain: 'standapp.pro',
  },
  {
    name: 'Inmost HQ',
    domain: 'inmosthq.com',
  },
  {
    name: 'Marketing Sharks',
    domain: 'marketingsharks.ee',
  },
  {
    name: 'Clean Canvas',
    domain: 'cleancanvas.co.uk',
  },
  {
    name: 'Disprz',
    domain: 'disprz.com',
  },
  {
    name: 'Apptile',
    domain: 'apptile.com',
  },
  {
    name: 'Equiem',
    domain: 'equiem.com.au',
  },
  {
    name: 'GrowthLogix',
    domain: 'growthlogix.com',
  },
  {
    name: 'Ciklum',
    domain: 'ciklum.com',
  },
  {
    name: 'ComFreight',
    domain: 'comfreight.com',
  },
  {
    name: 'Plumstack',
    domain: 'plumstack.io',
  },
  {
    name: 'Answerable',
    domain: 'joinanswerable.com',
  },
  {
    name: 'Integralio Technology Consulting Pvt',
    domain: 'integralio.com',
  },
  {
    name: 'PlayPlay',
    domain: 'playplay.com',
  },
  {
    name: 'Dotcom',
    domain: 'dotcomsoftware.co.za',
  },
  {
    name: 'Breadwinner',
    domain: 'breadwinner.com',
  },
  {
    name: 'WITHIN',
    domain: 'within.co',
  },
  {
    name: 'Apphut',
    domain: 'apphut.co.uk',
  },
  {
    name: 'Pipedream',
    domain: 'pipedream.com',
  },
  {
    name: 'DataSquad',
    domain: 'datasquad.es',
  },
  {
    name: 'CrossBorder Solutions',
    domain: 'crossborder.ai',
  },
  {
    name: 'Big Leap',
    domain: 'bigleap.com',
  },
  {
    name: 'Steadynamic',
    domain: 'steadynamic.com',
  },
  {
    name: 'NINJIO Cybersecurity Awareness Training',
    domain: 'ninjio.com',
  },
  {
    name: 'EDICOM',
    domain: 'edicomgroup.com',
  },
  {
    name: 'Gently',
    domain: 'gently.io',
  },
  {
    name: 'LACE Partners',
    domain: 'lacepartners.co.uk',
  },
  {
    name: 'IWS Solutions',
    domain: 'iwsaustralia.com.au',
  },
  {
    name: 'Naviteq',
    domain: 'naviteq.io',
  },
  {
    name: 'Cultivate Advisors',
    domain: 'cultivateadvisors.com',
  },
  {
    name: 'ChangeGPS',
    domain: 'changegps.com.au',
  },
  {
    name: 'Catena',
    domain: 'catenacompany.be',
  },
  {
    name: 'Awtomic',
    domain: 'awtomic.com',
  },
  {
    name: 'DataSentics',
    domain: 'datasentics.com',
  },
  {
    name: 'PPM Express',
    domain: 'ppm.express',
  },
  {
    name: 'Sagacity',
    domain: 'sagacitysolutions.co.uk',
  },
  {
    name: 'Pantarhei Advisors',
    domain: 'pantarhei.com',
  },
  {
    name: 'Theta Global Advisors',
    domain: 'thetaglobal.co.uk',
  },
  {
    name: 'Voxel Technology',
    domain: 'voxel.com.kw',
  },
  {
    name: 'Janover',
    domain: 'janover.co',
  },
  {
    name: 'Truphone',
    domain: 'truphone.com',
  },
  {
    name: 'Fletch',
    domain: 'fletchpmm.com',
  },
  {
    name: 'Cloudforia',
    domain: 'cloudforia.com',
  },
  {
    name: 'AxleHire',
    domain: 'axlehire.com',
  },
  {
    name: 'Flourish CRM',
    domain: 'flourishworld.com',
  },
  {
    name: 'Propensity',
    domain: 'propensity.com',
  },
  {
    name: 'RhinoDox',
    domain: 'rhinodox.com',
  },
  {
    name: 'DemandOS - Previously Brantr Media',
    domain: 'demandos.com',
  },
  {
    name: 'Softcrylic',
    domain: 'softcrylic.com',
  },
  {
    name: 'Dexa Digital Experience Agency',
    domain: 'dexa.ag',
  },
  {
    name: 'Dream Ads',
    domain: 'dreamads111.com',
  },
  {
    name: 'Sicura',
    domain: 'sicura.us',
  },
  {
    name: 'Galileo Financial Technologies',
    domain: 'galileo-ft.com',
  },
  {
    name: 'CampusESP',
    domain: 'campusesp.com',
  },
  {
    name: 'Position Green',
    domain: 'positiongreen.com',
  },
  {
    name: 'Givsly',
    domain: 'givsly.com',
  },
  {
    name: 'FreeFuse',
    domain: 'freefuse.com',
  },
  {
    name: 'Octup',
    domain: 'octup.com',
  },
  {
    name: 'entero',
    domain: 'entero.de',
  },
  {
    name: 'Rapid Search',
    domain: 'rapidsearch.app',
  },
  {
    name: 'Zoopla',
    domain: 'zoopla.co.uk',
  },
  {
    name: 'Matrix',
    domain: 'matrix.co.il',
  },
  {
    name: 'AXON21',
    domain: 'axon21.com',
  },
  {
    name: 'Alto',
    domain: 'goalto.io',
  },
  {
    name: 'Uplifting Leadership',
    domain: 'upliftingleadership.com',
  },
  {
    name: 'Roundtable Learning',
    domain: 'roundtablelearning.com',
  },
  {
    name: 'Commerce Layer',
    domain: 'commercelayer.io',
  },
  {
    name: 'Adapt',
    domain: 'adaptagency.com',
  },
  {
    name: 'Sight Machine',
    domain: 'sightmachine.com',
  },
  {
    name: 'AutoRABIT',
    domain: 'autorabit.com',
  },
  {
    name: 'Phoenix Consulting Group',
    domain: 'phoenixcg.com',
  },
  {
    name: 'Interval',
    domain: 'interval.com',
  },
  {
    name: 'Cleanlab',
    domain: 'cleanlab.ai',
  },
  {
    name: 'House of Revenue',
    domain: 'houseofrevenue.com',
  },
  {
    name: 'Smith',
    domain: 'smithcommerce.com',
  },
  {
    name: 'Preql',
    domain: 'preql.com',
  },
  {
    name: 'Modern Health',
    domain: 'modernhealth.com',
  },
  {
    name: 'Yurgosky',
    domain: 'yurgoskyconsulting.com',
  },
  {
    name: 'Obius',
    domain: 'obius.co',
  },
  {
    name: 'Affinaquest',
    domain: 'affinaquest.com',
  },
  {
    name: 'VENDO',
    domain: 'vendocommerce.com',
  },
  {
    name: 'Just Wines',
    domain: 'justwines.com.au',
  },
  {
    name: 'Cintoo',
    domain: 'cintoo.com',
  },
  {
    name: 'WINR',
    domain: 'winrdata.com',
  },
  {
    name: 'Searoutes',
    domain: 'searoutes.com',
  },
  {
    name: 'Healthcare Australia',
    domain: 'healthcareaustralia.com.au',
  },
  {
    name: 'Intronsoft',
    domain: 'intronsoft.com',
  },
  {
    name: 'McEasy',
    domain: 'mceasy.co.id',
  },
  {
    name: 'Thinkwise Software',
    domain: 'thinkwisesoftware.com',
  },
  {
    name: 'Swordfish.ai',
    domain: 'swordfish.ai',
  },
  {
    name: 'The Ford Enterprises Group LLC',
    domain: 'ford-enterprises.com',
  },
  {
    name: 'DriverReach',
    domain: 'driverreach.com',
  },
  {
    name: 'Bloom Financial Group Limited',
    domain: 'letsbloom.com',
  },
  {
    name: 'Demeter ICT Company Limited',
    domain: 'dmit.co.th',
  },
  {
    name: 'ONEcount',
    domain: 'one-count.com',
  },
  {
    name: 'IST International Software Technology AS',
    domain: 'ist.com',
  },
  {
    name: 'Verifile Limited',
    domain: 'verifile.co.uk',
  },
  {
    name: 'AgriWebb',
    domain: 'agriwebb.com',
  },
  {
    name: 'webeyez',
    domain: 'webeyez.com',
  },
  {
    name: 'The Lexington Group',
    domain: 'thelexingtongroup.io',
  },
  {
    name: 'SafetyCulture',
    domain: 'safetyculture.com',
  },
  {
    name: 'OnSite Support',
    domain: 'onsitesupport.io',
  },
  {
    name: 'Float',
    domain: 'floatcard.com',
  },
  {
    name: 'Onebeat',
    domain: '1beat.com',
  },
  {
    name: 'Lab49',
    domain: 'lab49.com',
  },
  {
    name: 'Luminous',
    domain: 'joinluminous.com',
  },
  {
    name: 'Amla Commerce',
    domain: 'amla.io',
  },
  {
    name: 'BDATA',
    domain: 'bdata.ca',
  },
  {
    name: 'Lux Scientiae',
    domain: 'luxsci.com',
  },
  {
    name: 'Revelio Labs',
    domain: 'reveliolabs.com',
  },
  {
    name: 'Over the Top Promotions',
    domain: 'ottpromotions.com.au',
  },
  {
    name: 'MergersCorp M&A International',
    domain: 'mergerccorp.com',
  },
  {
    name: 'Springbok Agency',
    domain: 'springbokagency.com',
  },
  {
    name: 'Jscrambler',
    domain: 'jscrambler.com',
  },
  {
    name: 'Vitro',
    domain: 'vitroglobal.com',
  },
  {
    name: 'Divido',
    domain: 'divido.com',
  },
  {
    name: 'Technacy Srl',
    domain: 'technacy.it',
  },
  {
    name: 'Ipsos Karian and Box',
    domain: 'ipsoskarianandbox.com',
  },
  {
    name: 'BS Consulting',
    domain: 'benspector.uk',
  },
  {
    name: 'PCS Software',
    domain: 'pcssoft.com',
  },
  {
    name: 'Ping Identity',
    domain: 'pingidentity.com',
  },
  {
    name: 'Discount Tire',
    domain: 'discounttire.com',
  },
  {
    name: 'Prodport',
    domain: 'prodport.com',
  },
  {
    name: 'CORE - Raise & Retain',
    domain: 'raiseretain.com',
  },
  {
    name: 'Altium',
    domain: 'altium.com',
  },
  {
    name: 'Qualitest',
    domain: 'qualitestgroup.com',
  },
  {
    name: 'Acosta',
    domain: 'acosta.com',
  },
  {
    name: 'Stowers Institute for Medical Research',
    domain: 'stowers.org',
  },
  {
    name: 'Nox Health',
    domain: 'noxhealth.com',
  },
  {
    name: 'Gleantap',
    domain: 'gleantap.com',
  },
  {
    name: 'Quinn',
    domain: 'quinn.live',
  },
  {
    name: 'BitSight',
    domain: 'bitsight.com',
  },
  {
    name: 'Podium',
    domain: 'podium.com',
  },
  {
    name: 'Forsight',
    domain: 'forsight.ai',
  },
  {
    name: 'Basis Finance',
    domain: 'basis.so',
  },
  {
    name: 'Nectar',
    domain: 'nectarhr.com',
  },
  {
    name: 'Rulesware',
    domain: 'rulesware.com',
  },
  {
    name: 'Span Global Services',
    domain: 'spanglobalservices.com',
  },
  {
    name: 'Evron',
    domain: 'evron.io',
  },
  {
    name: 'Imana Borena,',
    domain: 'imanaborena.org',
  },
  {
    name: 'Ylopo',
    domain: 'ylopo.com',
  },
  {
    name: 'hiline',
    domain: 'hiline.co',
  },
  {
    name: 'Sitback Solutions',
    domain: 'sitback.com.au',
  },
  {
    name: 'HomeBuddy',
    domain: 'homebuddy.com',
  },
  {
    name: 'Zeotap',
    domain: 'zeotap.com',
  },
  {
    name: 'Boxtrot',
    domain: 'boxtrot.us',
  },
  {
    name: 'AMO Consultancy',
    domain: 'amoconsultancy.com',
  },
  {
    name: 'BannerWave',
    domain: 'bannerwave.com',
  },
  {
    name: 'Refractive Inc.',
    domain: 'refractive.ai',
  },
  {
    name: 'Laminar',
    domain: 'laminarsecurity.com',
  },
  {
    name: 'Cossette',
    domain: 'cossette.com',
  },
  {
    name: 'Zamp',
    domain: 'zamp.com',
  },
  {
    name: 'GiveCampus',
    domain: 'givecampus.com',
  },
  {
    name: 'FlashIntel',
    domain: 'myflashcloud.com',
  },
  {
    name: 'CalmWave',
    domain: 'calmwave.ai',
  },
  {
    name: 'Melodics',
    domain: 'melodics.com',
  },
  {
    name: 'Evalueserve',
    domain: 'evalueserve.com',
  },
  {
    name: 'Minerva Technologies',
    domain: 'minerva.ae',
  },
  {
    name: 'QX Global Group',
    domain: 'qxglobalgroup.com',
  },
  {
    name: 'NORTH Link',
    domain: 'northlink.org.au',
  },
  {
    name: 'Klappir',
    domain: 'klappir.com',
  },
  {
    name: 'intelliRANK Agency',
    domain: 'intellirank.info',
  },
  {
    name: 'Bearer',
    domain: 'bearer.com',
  },
  {
    name: 'iXsystems',
    domain: 'ixsystems.com',
  },
  {
    name: 'cutting edge surgical',
    domain: 'cuttingedgesurgicalllc.com',
  },
  {
    name: 'Zone & Co',
    domain: 'zoneandco.com',
  },
  {
    name: 'LocoWIz',
    domain: 'locowiz.com',
  },
  {
    name: 'Reform',
    domain: 'reform.app',
  },
  {
    name: 'drypowder',
    domain: 'drypowder.capital',
  },
  {
    name: 'PhishingBox',
    domain: 'phishingbox.com',
  },
  {
    name: 'PayU',
    domain: 'payu.com',
  },
  {
    name: 'HelpCrunch',
    domain: 'helpcrunch.com',
  },
  {
    name: 'Blanco Martin & Asociados',
    domain: 'bmya.cl',
  },
  {
    name: 'Webpodologue.fr',
    domain: 'webpodologue.fr',
  },
  {
    name: 'Pisoneo',
    domain: 'pisoneo.com',
  },
  {
    name: 'Signum.AI',
    domain: 'signum.ai',
  },
  {
    name: 'Aim Squad',
    domain: 'aimsquad.com',
  },
  {
    name: 'WellData',
    domain: 'welldata.co.uk',
  },
  {
    name: 'TLB Law',
    domain: 'tlb.law',
  },
  {
    name: 'D4t4 Solutions Plc',
    domain: 'd4t4solutions.com',
  },
  {
    name: 'Datacop',
    domain: 'datacop.services',
  },
  {
    name: 'bi2ai',
    domain: 'bi2ai.in',
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
    name: 'Analog Devices',
    domain: 'analog.com',
  },
  {
    name: 'Apollo',
    domain: 'apollo.com',
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
    name: 'Qualcomm',
    domain: 'qualcomm.com',
  },
  {
    name: 'Sherwin-Williams',
    domain: 'sherwin-williams.com',
  },
  {
    name: 'Tractor Supply',
    domain: 'tractorsupply.com',
  },
  {
    name: 'Ikea',
    domain: 'ikea.com',
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
    name: 'Snapchat',
    domain: 'snapchat.com',
  },
  {
    name: 'Lifehacker',
    domain: 'lifehacker.com',
  },
  {
    name: 'IGN',
    domain: 'ign.com',
  },
  {
    name: 'Mozilla',
    domain: 'mozilla.com',
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
    name: 'NBA',
    domain: 'nba.com',
  },
  {
    name: 'GameSpot',
    domain: 'gamespot.com',
  },
  {
    name: 'Asus',
    domain: 'asus.com',
  },
  {
    name: 'IHG Hotels & Resorts',
    domain: 'ihg.com',
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
    name: 'Kaspersky',
    domain: 'kaspersky.com',
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
    name: 'Panasonic',
    domain: 'panasonic.com',
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
    name: 'TreeHugger',
    domain: 'treehugger.com',
  },
  {
    name: 'McAfee',
    domain: 'mcafee.com',
  },
  {
    name: 'NerdWallet',
    domain: 'nerdwallet.com',
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
    name: 'Barrons',
    domain: 'barrons.com',
  },
  {
    name: 'Livestrong',
    domain: 'livestrong.com',
  },
  {
    name: 'HBO',
    domain: 'hbo.com',
  },
];
export default orgs