let images=document.querySelectorAll('.single__image')
let imagesArray=Array.from(images)
let mainWord=document.getElementById('mainWord')
let shower=document.getElementById('shower')
let testImage=document.getElementById('testImage')
let imagesId=document.getElementById('imagesId')
let rightScoreValue=document.getElementById('rightScoreValue')
let wrongScoreValue=document.getElementById('wrongScoreValue')
let wordNumber=document.getElementById('wordNumber')
let btn=document.getElementById('btn')
let audio=document.getElementById('audio')
let body=document.getElementById('body')

let gifSource='./rightanswer.gif'
let gifContainer=document.createElement('div')
gifContainer.setAttribute('id','fireWork')

let PlayButton=document.getElementById('playButton')
let SpeakAloud=document.getElementById('speakAloud')

let mainwordlink=document.getElementById('mainwordlink')

let scroolup=document.getElementById('scroolup')


 

let Whisper="./whisper.jpg"
let Mumble="./Whisper.jpg"
let Annoy='./annoy.jpg'
let Yawn='./yawn.jpg'
let Consent='./consent.png'
let Approval='./consent.png'
let Accord='./consent.png'
let Plead='./plead.webp'
let Apologize='./plead.webp'
let Provide='./provide.jpg'
let Abstain='./abstain.jpg'
let Vain='./vain.webp'
let Storm='./storm.jpg'
let Gale='./storm.jpg'
let Tempest='./storm.jpg'
let Compulsion='./compulsion.webp'
let Neglect='./neglect.jpg'
let Resolve='./resolve.jpg'
let Lick='./lick.webp'
let Courage='./courage.jpg'
let Inevitable='./inevitable.jpg'
let Sneeze='./sneeze.jpg'
let Begger='./begger.jpg'
let Disaster ='./disaster.jpg'
let Distraught='./distraught.jpg'
let Economical='./economical.webp'
let Emphasize='./emphasize.webp'
let Extravagant='./extravagant.jpg'
let Fire='./fire.jpg'
let Gigantic='./enormous.jpg'
let Impatience='./impatience.jpg'
let Lack='./lack.jpg'
let Scarcity='./lack.jpg'
let Deficiency='./lack.jpg'

let Loot='./loot.jpg'
let Miser='./miser.webp'
let Stingy='./miser.webp'
let Persuade='./persuade.webp'
let Reduce='./reduce.png'
let Sacrifice='./sacrifice.jpg'
let Seek='./seek.jpg'
let Strength='./strength.jpg'
let Suffer='./suffer.jpg' 
let Summon='./summon.webp'
let Unpleasant='./unpleasant.jpg'
let Blunder='./blunder.jpg'
let Patience='./patience.png'
let Deaf='./deaf.jpg'
let Condemn='./condemn.jpg'
let Criticize='./condemn.jpg'
let Blame='./condemn.jpg'

let Greedy='./greedy.jpg'
let Fortunate='./fortunate.jpg'
let Vanity='./vanity.jpg'
let Abundant='./abundant.jpg'
let Abandon='./abandon.jpg'
let Secure='./secure.jpg'
let Deteriorate='./deteriorate.webp'
let Privacy='./privacy.png'
let Wonder='./wonder.jpg'

let Reward='./reward.png'

let Feeble='./feeble.jpg'

let Ritual='./ritual.JPG'

let Weary='./weary.jpg'
let Interguing='./interguing.jpg'

let Overcome='./overcome.webp'
let Sympathy='./sympathy.jpg'

let Tolerance='./tolerate.jpeg'

let Crave='./crave.jpg'

let Insist='./insist.jpg'

let Gratify='./gratify.webp'
let Pleased='./gratify.webp'

let Seldom='./seldom.jpg'

let Rare='./rare.jpg'


let Trap='./trap.jpg'

let Inspire='./inspire.webp'

let Glad='./glad.jpg'

let Peep='./peep.jpg'

let Rope='./rope.jpg'


let Various='./various.jpg'
let Unity='./unity.jpg'

let Diversity='./diversity.jpg'

let Resemble='./resemble.jpg'

let Chew='./chew.gif'

let Empty='./empty.jpg'
let Vacant='./vacant.jpg'

let Disguise='./disguise.webp'
let Shelter='./shelter.jpg'

let Admire='./admire.webp'

let Praise='./praise.webp'
let Glorify='./praise.webp'

let Appreciate='./praise.webp'





let Scold='./chastise.jpg'
let Rebuke='./chastise.jpg'
let Reprimand='./chastise.jpg'
let Chastise='./chastise.jpg'

let Yell='./yell.jpg'

let Shout='./yell.jpg'

let Terrified='./terrified.jpg'

let Horrified='./terrified.jpg'

let Scared='./terrified.jpg'

let Cheer='./cheer.jpg'
let Chanting='./chanting.jpg'

let Wet='./wet.jpg'
let Blind='./blind.jpg'
let Drag='./drag.jpg'

let Pull='./drag.jpg'

let Reconcile ='./reconcile.webp'

let Bend='./bend.jpg'

let Deform='./deform.jpg'

let Tolerate='./tolerate.jpeg'
let Bear='./tolerate.jpeg'
let Endure='./tolerate.jpeg'

let Resist='./resist.jpg'

let Convenient='./convenient.jpg'

let Extensive='./extensive.webp'

let Vessel='./vessel.webp'

let Utensil='./vessel.webp'

let Accumulate='./economical.webp'

let Consequences='./consequences.webp'

let Avoid='./avoid.jpg'

let Negligible='./negligible.jpg'

let Trivial='./trivial.jpg'

let Insuficient='./insuficient.jpg'
let Enormous='./enormous.jpg'

let Adopt='./adopt.jpg'

let Anticipate='./anticipate.jpg'

let Argue='./argue.webp'

let Assume='./assume.jpg'

let Borrow='./borrow.png'

let Hesitate='./hesitate.jpg'

let Irritate='./annoy.jpg'

let Exasperate='./annoy.jpg'

let Eager='./eager.webp'

let Curious='./curious.jpg'


let Keen='./eager.webp'

let Concern='./concern.jpg'

let Anxiety='./anxiety.jpg'

let Describe ='./describe.webp'

let Elaborate='./elaborate.webp'

let Drown='./drown.jpg'

let Choose='./choose.jpg'

let Enhance='./enhance.jpg'

let Fall='./fall.jpg'

let Fly='./fly.jpg'

let Follow='./follow.jpg'
let Forbid='./forbid.webp'

let Forget='./forget.jpg'

let Forgive='./forgive.jpg'

let Explore='./explore.jpg'

let Gather='./gather.jpg'

let Grow='./grow.gif'

let Grasp='./grasp.jpg'
let Hold='./grasp.jpg'

let Glance='./glance.gif'
let Glimpse='./glance.gif'

let Guide='./guide.gif'

let Mentor='./mentor.jpg'

let Give_Up='./give_up.jpg'

let Guess='./guess.jpg'

let Hang='./hang.jpg'

let Hug='./hug.gif'

let Hurry='./hurry.gif'

let Ignore='./ignore.webp'

let Justify='./justify.jpg'



let Keep='./keep.gif'
let Lay='./keep.gif'

let Lead='./guide.gif'

let Lean='./lean.webp'


let Leave='./leave.webp'
let Observe='./curious.jpg'
let Obtain='./obtain.jpg'
let Get='./obtain.jpg'

let Recall='./recall.gif'
let Remember='./recall.gif'

let Refuse='./refuse.jpg'


let Regret='./regret.webp'


let Require='./require.png'

let Satisfy='./gratify.webp'

let Serve='./serve.gif'

let Survive='./survive.webp'

let Squeeze='./squeeze.jpg'

let Swell='./swell.jpg'

let Swallow='./swallow.jpg'
let Culprit='./guilty.webp'

let Pair='./pair.jpg'

let Quit='./give_up.jpg'

let Vanish='./vanish.gif'

let Wear='./wear.gif'

let Impair='./impair.webp'

let Beverage='./beverage.jpg'



let Guilty='./guilty.webp'
let Faith='./faith.jpg'

let Jelous='./jelous.jpg'

let Religion='./diversity.jpg'



let Trust='./trust.jpg'

let Quarrel='./argue.webp'

let Dispute='./argue.webp'


let Roof='./roof.jpg'

let Stretch='./stretch.gif'

let Clap='./clap.gif'

let Wander='./wander.gif'

let Pardon='./forgive.jpg'
let Swear='./swear.webp'

let Prison='./prison.jpg'

let Futile='./futile.webp'

let Excruciating='./suffer.jpg'

let Capture='./capture.gif'

let Expel='./expel.webp'

//200 words 

let Spend='./spend.jpg'
let Climb='./climb.gif'
let Crowd='./gather.jpg'
let Ruin='./disaster.jpg'
let Exaggerate='./exaggerate.jpg'
let Deny='./forbid.webp'
let Plenty='./abundant.jpg'
let Ample='./abundant.jpg'
let Decline='./reduce.png'
let Abolish='./disaster.jpg'
let Earthquake='earthquake.gif'
let Destroy='./disaster.jpg'
let Landslide='./landslide.gif'
let Dig='./dig.gif'
let Associate='./consent.png'
let Carry='./carry.gif'
let Stare='./stare.gif'
let Gasping='./gasping.gif'
let Faint='./faint.gif'
let Scatter='./scatter.gif'
let Put='./put.gif'
let Look_For='./look_for.gif'
let Melt='./melt.jpeg'
let Gain='./enhance.jpg'
let Shiver='shiver.gif'
let Panting='./gasping.gif'
let Stumble='./stumble.gif'
let Breathing='breathing.jpg'
let Sorrow='./vain.webp'
let Wound='./wound.jpg'
let Spill='./spill.jpg'
let Hastily='hurry.gif'  
let Cave='./cave.jpeg'
let Expand='./expanding.gif'
let Shrink='./shrink.gif'
let Humble='./humble.jpeg'
let Kind='./humble.jpeg'
let Gesture='./gesture.gif'
let Dizzy='./faint.gif'
let Injury='./wound.jpg'
let Expensive='./expensive.jpg'
let Cheap='cheap.jpg'
let Hungry='./hungry.jpg'
let Thirsty='./thirsty.png'
let Feel='./feel.jpg'
let Spread='./spread.gif'
let Garbage='./garbage.jpg'
let Merchant='./merchant.jpg'
let Stain='./stain.jpg'
let Pond='./pond.jpeg'
let Lake='./pond.jpeg'
let Well='./well.jpg'
let Cure='./cure.webp'
let Infant='./infant.webp'
let Spoiled='./spoiled.jpg'
let Rotten='./spoiled.jpg'
let Eradicate='./disaster.jpg'
let Annihilate='./disaster.jpg'
let Cattle='./cattle.jpeg'
let Isolate='./isolate.jpg'
let Separate='./separate.jpg'
let Transparent='./transparent.jpg'
let Kneding='./kneding.gif'
let Assist='./trust.jpg'
let Warm='./warm.jpeg'
let Spooky='./spooky.jpg'
let Ditch='./ditch.webp'
let Narrow='./narrow.jpg'
let Hunt='./hunt.jpg'
let Furnish='./furnish.gif'
let Flatterer='./flatterer.webp'
let Naughty='./naughty.webp'
let sight='./sight.jpg'
let Chase='./chase.gif'
let Cunning='./cunning.jpg'
let Comb='./comb.webp'
let Wall='wall.jpeg'
let Emperor='./emperor.jpg'
let Thunder='./thunder.jpg'
let Spare='./spare.webp'
let Fear='./terrified.jpg'
let War='./war.webp'
let Battle='./war.webp'
let Shove='./shove.jpg'
let Coward='./coward.jpeg'
let Ponytail='./ponytail.jpeg'
let Beard='./beard.png'
let Mustache ='./mustache.webp'
let Broom='./broom.webp'
let Groom='./groom.jpeg'
let Bride='./bride.webp'
let Stitching='./stitching.webp'
let Compress='./compress.gif'
let Tie='./tie.gif'
let Stir='./stir.gif'
let Make_Fun='./make_fun.webp'
let Make_Noise='./make_noise.jpg'
let Make_Excuse='./make_excuse.png'
let Surround='./surround.webp'
 let Mat='./mat.jpg'
 let Street='./street.jpg'
 let Mice='./mice.jpeg'
 let Vomit='./vomit.jpeg'
 let Worthy='./worthy.png'
 let Boast='./vanity.jpg'
 let Flood='./flood.webp'
 let Drought='./drought.jpg'
 let Cling='./cling.jpeg'
 let Consult='./consult.jpg'
 let Prefer='./prefer.png'
let Grumble='./whisper.jpg'
let Steam='./warm.jpeg'
let Bury='./bury.gif'
let Aware='./aware.png'
let Extraction='./extraction.png'
let Ladder='./ladder.jpg'
let Aquire='./aquire.png'
let Depend='./depend.png'
let Issue='./issue.jpg'
let Tidious='./tidious.webp'
let Responsibility='./responsibility.png'
let Flag='./flag.webp'
let Silly='./silly.webp'
let Frightened='./terrified.jpg'
let Escape='./escape.webp'
let Trouble='./trouble.png'
let Pour='./pour.jpg'
let Slap='./slap.gif'
let Reach='./reach.png'
let Arrive='./reach.png'
let Lend='./borrow.png'
let Pollution='./pollution.png'
let Prevention='./prevention.png'
let Moisture='./wet.jpg'
let Rock='./rock.webp'
let Cover='./cover.gif'





//audio for elements

let whisperAudio='./whisper.mp3'
let annoyAudio='./annoy.mp3'
let yawnAudio='./yawn.mp3'
let consentAudio='./consent.mp3'
let pleadAudio='./plead.mp3'
let provideAudio='./provide.mp3'
let abstainAudio='./abstain.mp3'
let vainAudio='./vain.mp3'
let stormAudio='./storm.mp3'
let compulsionAudio='./compulsion.mp3'
let neglectAudio='./neglect.mp3'
let resolveAudio='./resolve.mp3'
let lickAudio='./lick.mp3'
let courageAudio='./courage.mp3'
let inevitableAudio='./inevitable.mp3'
let sneezeAudio='./sneeze.mp3'
let beggerAudio='./begger.mp3'
let disasterAudio='./disaster.mp3'
let distraughtAudio='./distraught.mp3'
let economicalAudio='./economical.mp3'
let emphasizeAudio='./emphasize.mp3'
let endureAudio='./endure.mp3'
let extravagantAudio='./extravagant.mp3'
let fireAudio='./fire.mp3'
let giganticAudio='./gigantic .mp3'
let impatienceAudio='./impatience.mp3'
let lackAudio='./lack .mp3'
let lootAudio='./loot .mp3'
let miserAudio='./miser .mp3'
let persuadeAudio='./persuade .mp3'
let reduceAudio='./reduce.mp3'
let sacrificeAudio='./sacrifice .mp3'
let seekAudio='./seek .mp3'
let strengthAudio='./strength.mp3'
let sufferAudio='./suffer .mp3'
let summonAudio='./summon.mp3'
let unpleasantAudio='./unpleasant .mp3'
let blunderAudio='./blunder.mp3'
let patienceAudio='./patience .mp3'
let deafAudio='./deaf .mp3'
let condemnAudio='./condemn .mp3'
let fortunateAudio='./fortunate .mp3'
let vanityAudio='./vanity .mp3'
let abundantAudio='./abundant .mp3'
let abandonAudio='./abandon.mp3'
let secureAudio='./secure .mp3'
let deteriorateAudio='./deteriorate .mp3'
let privacyAudio='./privacy .mp3'
let wonderAudio='./wonder.mp3'
let reprimandAudio='./reprimand .mp3'
let rewardAudio='./reward .mp3'
let feebleAudio='./feeble .mp3'
let ritualAudio='./ritual .mp3'
let wearyAudio='./weary .mp3'
let interguingAudio='./interguing .mp3'
let sympathyAudio='./sympathy.mp3'
let toleranceAudio='./tolerance .mp3'
let craveAudio='./crave .mp3'
let insistAudio='./insist .mp3'
let gratifyAudio='./gratify.mp3'
let seldomAudio='./seldom .mp3'
let trapAudio='./trap .mp3'
let inspireAudio='./inspire .mp3'
let gladAudio='./glad .mp3'
let peepAudio='./peep .mp3'
let ropeAudio='./rope .mp3'
let variousAudio='./various .mp3'
let unityAudio='./unity .mp3'
let diversityAudio='./diversity .mp3'
let resembleAudio='./resemble .mp3'
let chewAudio='./chew .mp3'
let emptyAudio='./empty .mp3'
let shelterAudio='./shelter .mp3'
let admireAudio='./admire .mp3'
let scoldAudio='./scold .mp3'
let yellAudio='./yell .mp3'
let terrifiedAudio='./terrified .mp3'
let cheerAudio='./cheer .mp3'
let chantingAudio='./chanting .mp3'
let wetAudio='./wet .mp3'
let blindAudio='./blind .mp3'
let dragAudio='./drag .mp3'
let reconcileAudio='./reconcile .mp3'
let bendAudio='./bend .mp3'
let deformAudio='./deform .mp3'
let tolerateAudio='./tolerate .mp3'
let resistAudio='./resist .mp3'
let convenientAudio='./convenient .mp3'
let extensiveAudio='./extensive .mp3'
let vesselAudio='./vessel.mp3'
let accumulateAudio='./accumulate .mp3'
let consequencesAudio='./consequences .mp3'
let avoidAudio='./avoid .mp3'
let negligibleAudio='./negligible .mp3'
let adoptAudio='./adopt .mp3'
let anticipateAudio='./anticipate .mp3'
let argueAudio='./argue .mp3'
let assumeAudio='./assume .mp3'
let borrowAudio='./borrow .mp3'
let hesitateAudio='./hesitate .mp3'
let irritateAudio='./irritate .mp3'
let approvalAudio='./approval .mp3'
let exasperateAudio='./exasperate .mp3'
let mumbleAudio='./mumble .mp3'
let galeAudio='./gale .mp3'
let horrifiedAudio='./horrified .mp3'
let scaredAudio='./scared .mp3'
let rareAudio='./rare .mp3'
let praiseAudio='./praise .mp3'
let glorifyAudio='./glorify .mp3'
let pullAudio='./pull .mp3'
let insuficientAudio='./insuficient .mp3'
let trivialAudio='./trivial .mp3'
let eagerAudio='./eager .mp3'
let curiousAudio='./curious .mp3'
let keenAudio='./keen .mp3'
let appreciateAudio='./appreciate .mp3'
let vacantAudio='./vacant .mp3'
let disguiseAudio='./disguise .mp3'
let rebukeAudio='./rebuke .mp3'
let chastiseAudio='./chastise .mp3'
let bearAudio='./bear .mp3'
let criticizeAudio='./criticize .mp3'
let blameAudio='./blame .mp3'
let describeAudio='./describe .mp3'
let elaborateAudio='./elaborate.mp3'
let pleasedAudio='./pleased .mp3'
let stingyAudio='./stingy .mp3'
let greedyAudio='./greedy .mp3'
let drownAudio='./drown .mp3'
let chooseAudio='./choose .mp3'
let enhanceAudio='./enhance .mp3'
let fallAudio='./fall .mp3'
let flyAudio='./fly .mp3'
let followAudio='./follow .mp3'
let forbidAudio='./forbid .mp3'
let forgetAudio='./forget .mp3'
let forgiveAudio='./forgive .mp3'
let exploreAudio='./explore .mp3'
let gatherAudio='./gather .mp3'
let growAudio='./grow .mp3'
let graspAudio='./grasp .mp3'
let holdAudio='./hold .mp3'
let glanceAudio='./glance .mp3'
let glimpseAudio='./glimpse .mp3'
let guideAudio='./guide .mp3'
let mentorAudio='./mentor .mp3'
let give_upAudio='./give_up.mp3'
let guessAudio='./guess .mp3'
let hangAudio='./hang .mp3'
let hugAudio='./hug .mp3'
let hurryAudio='./hurry .mp3'
let ignoreAudio='./ignore .mp3'
let justifyAudio='./justify .mp3'
let keepAudio='./keep .mp3'
let layAudio='./lay .mp3'
let leadAudio='./lead .mp3'
let leaveAudio='./leave .mp3'
let observeAudio='./observe .mp3'
let obtainAudio='./obtain .mp3'
let getAudio='./get .mp3'
let recallAudio='./recall.mp3'
let rememberAudio='./remember.mp3'
let refuseAudio='./refuse.mp3'
let regretAudio='./regret.mp3'
let requireAudio='./require.mp3'
let satisfyAudio='./satisfy.mp3'
let serveAudio='./serve.mp3'
let surviveAudio='./survive.mp3'
let squeezeAudio='./squeeze.mp3'
let swellAudio='./swell.mp3'
let swallowAudio='./swallow.mp3'
let culpritAudio='./culprit.mp3'
let pairAudio='./pair.mp3'
let quitAudio='./quit.mp3'
let vanishAudio='./vanish.mp3'
let wearAudio='./wear.mp3'
let impairAudio='./impair.mp3'
let beverageAudio='./beverage.mp3'
let accordAudio='./accord.mp3'
let scarcityAudio='./scarcity.mp3'
let deficiencyAudio='./deficiency.mp3'
let guiltyAudio='./guilty.mp3'
let faithAudio='./faith.mp3'
let jelousAudio='./jelous.mp3'
let religionAudio='./religion.mp3'
let trustAudio='./trust.mp3'
let quarrelAudio='./quarrel.mp3'
let disputeAudio='./dispute.mp3'
let roofAudio='./roof.mp3'
let stretchAudio='./stretch.mp3'
let clapAudio='./clap.mp3'
let wanderAudio='./wander.mp3'
let pardonAudio='./pardon.mp3'
let swearAudio='./swear.mp3'
let prisonAudio='./prison.mp3'
let futileAudio='./futile.mp3'
let excruciatingAudio='./excruciating.mp3'
let captureAudio='./capture.mp3'
let expelAudio='./expel.mp3'
let spendAudio='./spend.mp3'
let climbAudio='./climb.mp3'
let crowdAudio='./crowd .mp3'
let ruinAudio='./ruin.mp3'
let exaggerateAudio='./exaggerate.mp3'
let denyAudio='./deny.mp3'
let plentyAudio='./plenty.mp3'
let ampleAudio='./ample.mp3'
let declineAudio='./decline.mp3'
let abolishAudio='./abolish.mp3'
let earthquakeAudio='./earthquake.mp3'
let destroyAudio='./destroy.mp3'
let landslideAudio='./landslide.mp3'
let digAudio='./dig.mp3'
let associateAudio='./associate.mp3'
let carryAudio='./carry.mp3'
let stareAudio='./stare.mp3'
let gaspingAudio='./gasping.mp3'
let faintAudio='./faint.mp3'
let putAudio='./put.mp3'
let look_forAudio='./look_for.mp3'
let meltAudio='./melt.mp3'
let gainAudio='./gain.mp3'
let shiverAudio='./shiver.mp3'
let pantingAudio='./panting.mp3'
let stumbleAudio='./stumble.mp3'
let breathingAudio='./breathing.mp3'
let sorrowAudio='./sorrow.mp3'
let woundAudio='./wound.mp3'
let spillAudio='./spill.mp3'
let hastilyAudio='./hastily.mp3'
let caveAudio='./cave.mp3'
let expandAudio='./expand.mp3'
let shrinkAudio='./shrink.mp3'
let humbleAudio='./humble.mp3'
let kindAudio='./kind.mp3'
let gestureAudio='./gesture.mp3'
let dizzyAudio='./dizzy.mp3'
let injuryAudio='./injury.mp3'
let expensiveAudio='./expensive.mp3'
let cheapAudio='./cheap.mp3'
let hungryAudio='./hungry.mp3'
let thirstyAudio='./thirsty.mp3'
let feelAudio='./feel.mp3'
let spreadAudio='./spread.mp3'
let garbageAudio='./garbage.mp3'
let merchantAudio='./merchant.mp3'
let stainAudio='./stain.mp3'
let pondAudio='./pond.mp3'
let lakeAudio='./lake.mp3'
let wellAudio='./well.mp3'
let cureAudio='./cure.mp3'
let infantAudio='./infant.mp3'
let spoiledAudio='./spoiled.mp3'
let rottenAudio='./rotten.mp3'
let eradicateAudio='./eradicate.mp3'
let annihilateAudio='./annihilate.mp3'
let cattleAudio='./cattle.mp3'
let isolateAudio='./isolate.mp3'
let separateAudio='./separate.mp3'
let transparentAudio='./transparent.mp3'
let knedingAudio='./kneding.mp3'
let assistAudio='./assist.mp3'
let warmAudio='./warm.mp3'
let spookyAudio='./spooky.mp3'
let ditchAudio='./ditch.mp3'
let narrowAudio='./narrow.mp3'
let huntAudio='./hunt.mp3'
let furnishAudio='./furnish.mp3'
let flattererAudio='./flatterer.mp3'
let naughtyAudio='./naughty.mp3'
let sightAudio='./sight.mp3'
let chaseAudio='./chase.mp3'
let cunningAudio='./cunning.mp3'
let combAudio='./comb.mp3'
let wallAudio='./wall.mp3'
let emperorAudio='./emperor.mp3'
let thunderAudio='./thunder.mp3'
let spareAudio='./spare.mp3'
let fearAudio='./fear.mp3'
let warAudio='./war.mp3'
let battleAudio='./battle.mp3'
let shoveAudio='./shove.mp3'
let cowardAudio='./coward.mp3'
let ponytailAudio='./ponytail.mp3'
let beardAudio='./beard.mp3'
let mustacheAudio='./mustache.mp3'
let broomAudio='./broom.mp3'
let groomAudio='./groom.mp3'
let brideAudio='./bride.mp3'
let stitchingAudio='./stitching.mp3'
let compressAudio='./compress.mp3'
let tieAudio='./tie.mp3'
let stirAudio='./stir.mp3'
let make_funAudio='./make_fun.mp3'
let make_noiseAudio='./make_noise.mp3'
let make_excuseAudio='./make_excuse.mp3'
let surroundAudio='./surround.mp3'
let matAudio='./mat.mp3'
let streetAudio='./street.mp3'
let miceAudio='./mice.mp3'
let vomitAudio='./vomit.mp3'
let worthyAudio='./worthy.mp3'
let boastAudio='./boast.mp3'
let floodAudio='./flood.mp3'
let droughtAudio='./drought.mp3'
let clingAudio='./cling.mp3'
let consultAudio='./consult.mp3'
let preferAudio='./prefer.mp3'
let grumbleAudio='./grumble.mp3'
let steamAudio='./steam.mp3'
let buryAudio='./bury.mp3'
let awareAudio='./aware.mp3'
let extractionAudio='./extraction.mp3'
let ladderAudio='./ladder.mp3'
let aquireAudio='./aquire.mp3'
let dependAudio='./depend.mp3'
let issueAudio='./issue.mp3'
let tidiousAudio='./tidious.mp3'
let responsibilityAudio='./responsibility.mp3'
let flagAudio='./flag.mp3'
let sillyAudio='./silly.mp3'
let frightenedAudio='./frightened.mp3'
let escapeAudio='./escape.mp3'
let troubleAudio='./trouble.mp3'
let pourAudio='./pour.mp3'
let slapAudio='./slap.mp3'
let reachAudio='./reach.mp3'
let arriveAudio='./arrive.mp3'
let lendAudio='./lend.mp3'
let pollutionAudio='./pollution.mp3'
let preventionAudio='./prevention.mp3'
let moistureAudio='./moisture.mp3'
let coverAudio='./cover.mp3'
let scatterAudio='./scatter.mp3'
let rockAudio='./rock.mp3'







let intialRightScore
let intialWrongScore


// for right score
if(sessionStorage.getItem('rightScore')==0){
    intialRightScore=0
    rightScoreValue.textContent=intialRightScore
}
else(
    intialRightScore=sessionStorage.getItem('rightScore')
)

// for worng score

if(sessionStorage.getItem('wrongScore')==0){
    intialWrongScore=0
    wrongScoreValue.textContent=intialWrongScore
}
else(
    intialWrongScore=sessionStorage.getItem('wrongScore')
)

rightScoreValue.textContent=0
wrongScoreValue.textContent=0

let retrievedRightScore=sessionStorage.getItem('rightScore')
let retrievedWrongScore=sessionStorage.getItem('wrongScore')
// adding rightScore to the session storage
if(retrievedRightScore===null){
    var scoreValueRight=0
    sessionStorage.setItem('rightScore',JSON.stringify(scoreValueRight))
}
else{
    scoreValueRight=JSON.parse(retrievedRightScore)
    rightScoreValue.textContent=scoreValueRight
}

// adding wrongScore to the session storage

if(retrievedWrongScore===null){
    var scoreValueWrong=0
    sessionStorage.setItem('wrongScore',JSON.stringify(scoreValueWrong))
}
else{
    scoreValueWrong=JSON.parse(retrievedWrongScore)
    wrongScoreValue.textContent=scoreValueWrong
}

// vocabulary array
let vocabArray=["Whisper","Annoy","Yawn","Consent","Plead","Provide","Abstain","Vain","Storm",
    "Compulsion","Neglect","Resolve","Lick","Courage","Inevitable",'Sneeze','Begger','Disaster',
    'Distraught',"Economical", "Emphasize",'Endure',"Extravagant","Fire",'Gigantic','Impatience',
    'Lack','Loot','Miser','Persuade','Reduce','Sacrifice','Seek','Strength',"Suffer","Summon",
    "Unpleasant","Blunder",'Patience','Deaf', "Condemn", "Fortunate",'Vanity','Abundant','Abandon',
    'Secure','Deteriorate','Privacy','Wonder','Reprimand','Reward', 'Feeble','Ritual','Weary',
    'Interguing','Sympathy','Tolerance','Crave','Insist','Gratify','Seldom','Trap','Inspire','Glad',
    'Peep','Rope', 'Various','Unity','Diversity','Resemble','Chew','Empty','Shelter','Admire','Scold',
    'Yell','Terrified','Cheer','Chanting','Wet','Blind','Drag','Reconcile','Bend','Deform','Tolerate',
    'Resist','Convenient','Extensive','Vessel', 'Accumulate','Consequences','Avoid', 'Negligible', 
    'Adopt','Anticipate','Argue','Assume','Borrow','Hesitate','Irritate','Approval','Exasperate',
    'Mumble','Gale','Horrified' ,'Scared', 'Rare' ,'Praise', 'Glorify','Pull','Insuficient', 'Trivial',
    'Eager','Curious','Keen','Appreciate','Vacant','Disguise','Rebuke','Chastise','Bear','Criticize',
    'Blame','Describe', 'Elaborate','Pleased','Stingy','Greedy','Drown','Choose','Enhance','Fall','Fly',
    'Follow','Forbid','Forget','Forgive','Explore',  'Gather','Grow',
    'Grasp','Hold','Glance','Glimpse','Guide','Mentor','Give_Up','Guess','Hang'
    ,'Hug','Hurry','Ignore','Justify','Keep','Lay','Lead','Leave',
    'Observe','Obtain','Get','Recall','Remember','Refuse','Regret','Require','Satisfy','Serve',
    'Survive','Squeeze','Swell','Swallow','Culprit',
    'Pair','Quit','Vanish','Wear','Impair','Beverage','Accord','Scarcity','Deficiency',"Guilty",
    "Faith","Jelous","Religion","Trust","Quarrel","Dispute","Roof","Stretch","Clap",
    "Wander","Pardon","Swear","Prison","Futile","Excruciating","Capture","Expel",
    'Spend','Climb','Crowd','Ruin','Exaggerate','Deny','Plenty','Ample','Decline','Abolish'
    ,'Earthquake','Destroy', 'Landslide','Dig','Associate','Carry','Stare','Gasping','Faint','Scatter','Put',
    'Look_For','Melt','Gain','Shiver',  'Panting','Stumble','Breathing','Sorrow','Wound','Spill','Hastily','Cave',
    'Expand','Shrink','Humble','Kind','Gesture',  'Dizzy','Injury','Expensive','Cheap','Hungry','Thirsty'
    ,'Feel','Spread','Garbage','Merchant','Stain','Pond','Lake','Well','Cure','Infant','Spoiled','Rotten','Eradicate'
    ,'Annihilate','Cattle','Isolate','Separate','Transparent', 'Kneding','Assist','Warm','Spooky','Ditch',
    'Narrow','Hunt','Furnish','Flatterer','Naughty','sight','Chase','Cunning', 'Comb','Wall','Emperor','Thunder',
    'Spare','Fear','War','Battle','Shove','Coward','Ponytail','Beard','Mustache','Broom','Groom','Bride'
    ,'Stitching','Compress','Tie','Stir','Make_Fun','Make_Noise','Make_Excuse','Surround', 'Mat','Street',
    'Mice','Vomit','Worthy','Boast','Flood','Drought','Cling','Consult','Prefer','Grumble','Steam', 'Bury',
    'Aware','Extraction','Ladder','Aquire','Depend','Issue','Tidious','Responsibility','Flag','Silly',
    'Frightened', 'Escape','Trouble','Pour','Slap','Reach','Arrive','Lend','Pollution','Prevention',
    'Moisture','Rock','Cover'

 ]


//  console.log(vocabArray.length)


 let ArrayOfImages=[   Whisper,Annoy,Yawn,Consent,Plead,Provide,Abstain,Vain,Storm,
     Compulsion,Neglect,Resolve,Lick,Courage,Inevitable,Sneeze,Begger,Disaster,Distraught,Economical,Emphasize,Endure,
     Extravagant,
     Fire,Gigantic,Impatience,Lack,Loot,Miser,Persuade,Reduce,Sacrifice,Seek,Strength,Suffer,Summon,Unpleasant,Blunder,
     Patience,Deaf,
     Condemn, Fortunate,Vanity,Abundant,Abandon,Secure,Deteriorate,Privacy,Wonder,Reprimand,Reward,Feeble,
    Ritual,Weary,Interguing,Sympathy,Tolerance,Crave,Insist,Gratify,Seldom,Trap,Inspire,Glad,Peep,Rope,Various,Unity,
     Diversity,Resemble,Chew,Empty,Shelter,Admire,Scold,Yell,Terrified,Cheer,Chanting,Wet,Blind,Drag,
     Reconcile,Bend,Deform,Tolerate,Resist,Convenient,Extensive,Vessel,Accumulate,Consequences,Avoid,Negligible,
     Adopt,Anticipate,Argue,Assume,Borrow,Hesitate,Irritate,Approval,Exasperate,Mumble,Gale,Horrified,Scared, Rare ,Praise,
     Glorify,Pull,Insuficient, Trivial,Eager,Curious,Keen,Appreciate,Vacant,Disguise,Rebuke,Chastise,Bear,Criticize,Blame
     ,Describe,
     Elaborate,Pleased,Stingy,Greedy,Drown,Choose,Enhance,Fall,Fly,Follow,Forbid,Forget,Forgive,Explore,Gather,Grow,
     Grasp,Hold,Glance,Glimpse,Guide,Mentor,Give_Up,Guess,Hang,Hug,Hurry,Ignore,Justify,Keep,Lay,Lead,Leave,
     Observe,Obtain,Get,Recall,Remember,Refuse,Regret,Require,Satisfy,Serve,Survive,Squeeze,Swell,Swallow,Culprit,
     Pair,Quit,Vanish,Wear,Impair,Beverage,Accord,Scarcity,Deficiency,Guilty,Faith,Jelous,Religion,Trust,
     Quarrel,Dispute,Roof,Stretch,Clap,Wander,Pardon,Swear,Prison,Futile,Excruciating,Capture,Expel,

     Spend,Climb,Crowd,Ruin,Exaggerate,Deny,Plenty,Ample,Decline,Abolish,Earthquake,Destroy,
     Landslide,Dig,Associate,Carry,Stare,Gasping,Faint,Scatter,Put,Look_For,Melt,Gain,Shiver,
     Panting,Stumble,Breathing,Sorrow,Wound,Spill,Hastily,Cave,Expand,Shrink,Humble,Kind,Gesture,
     Dizzy,Injury,Expensive,Cheap,Hungry,Thirsty,Feel,Spread,Garbage,Merchant,Stain,Pond,Lake,
     Well,Cure,Infant,Spoiled,Rotten,Eradicate,Annihilate,Cattle,Isolate,Separate,Transparent,
     Kneding,Assist,Warm,Spooky,Ditch,Narrow,Hunt,Furnish,Flatterer,Naughty,sight,Chase,Cunning,
     Comb,Wall,Emperor,Thunder,Spare,Fear,War,Battle,Shove,Coward,Ponytail,Beard,Mustache,
     Broom,Groom,Bride,Stitching,Compress,Tie,Stir,Make_Fun,Make_Noise,Make_Excuse,Surround,
     Mat,Street,Mice,Vomit,Worthy,Boast,Flood,Drought,Cling,Consult,Prefer,Grumble,Steam,
     Bury,Aware,Extraction,Ladder,Aquire,Depend,Issue,Tidious,Responsibility,Flag,Silly,Frightened,
     Escape,Trouble,Pour,Slap,Reach,Arrive,Lend,Pollution,Prevention,Moisture,Rock,Cover







 ]
 

 let ArrayOfAudios=[
   whisperAudio,annoyAudio,yawnAudio,consentAudio,pleadAudio,provideAudio,abstainAudio,vainAudio,
     stormAudio,compulsionAudio,neglectAudio,resolveAudio,lickAudio,courageAudio,inevitableAudio,
     sneezeAudio,beggerAudio,disasterAudio,distraughtAudio,economicalAudio,emphasizeAudio,endureAudio,
     extravagantAudio,fireAudio,giganticAudio,impatienceAudio,lackAudio,lootAudio,miserAudio,
     persuadeAudio,reduceAudio,sacrificeAudio,seekAudio,strengthAudio,sufferAudio,summonAudio,
     unpleasantAudio,blunderAudio,patienceAudio,deafAudio,condemnAudio,fortunateAudio,vanityAudio,
     abundantAudio,abandonAudio,secureAudio,deteriorateAudio,privacyAudio,wonderAudio,reprimandAudio,
     rewardAudio,feebleAudio,ritualAudio,wearyAudio,interguingAudio,sympathyAudio,toleranceAudio,
     craveAudio,insistAudio,gratifyAudio,seldomAudio,trapAudio,inspireAudio,gladAudio,peepAudio,
     ropeAudio,variousAudio,unityAudio,diversityAudio,resembleAudio,chewAudio,emptyAudio,shelterAudio,
     admireAudio,scoldAudio,yellAudio,terrifiedAudio,cheerAudio,chantingAudio,wetAudio,blindAudio,
     dragAudio,reconcileAudio,bendAudio,deformAudio,tolerateAudio,resistAudio,convenientAudio,
     extensiveAudio,vesselAudio,accumulateAudio,consequencesAudio,avoidAudio,negligibleAudio,
     adoptAudio,anticipateAudio,argueAudio,assumeAudio,borrowAudio,hesitateAudio,irritateAudio,
     approvalAudio,exasperateAudio,mumbleAudio,galeAudio,horrifiedAudio,scaredAudio,rareAudio,
     praiseAudio,glorifyAudio,pullAudio,insuficientAudio,trivialAudio,eagerAudio,curiousAudio,
     keenAudio,appreciateAudio,vacantAudio,disguiseAudio,rebukeAudio,chastiseAudio,bearAudio,
     criticizeAudio,blameAudio,describeAudio,elaborateAudio,pleasedAudio,stingyAudio,greedyAudio,
     drownAudio,chooseAudio,enhanceAudio,fallAudio,flyAudio,followAudio,forbidAudio,forgetAudio,
     forgiveAudio,exploreAudio,gatherAudio,growAudio,graspAudio,holdAudio,glanceAudio,glimpseAudio,
     guideAudio,mentorAudio,give_upAudio,guessAudio,hangAudio,hugAudio,hurryAudio,ignoreAudio,
     justifyAudio,keepAudio,layAudio,leadAudio,leaveAudio,observeAudio,obtainAudio,getAudio,
     recallAudio,rememberAudio,refuseAudio,regretAudio,requireAudio,satisfyAudio,serveAudio,
     surviveAudio,squeezeAudio,swellAudio,swallowAudio,culpritAudio,pairAudio,quitAudio,
     vanishAudio,wearAudio,impairAudio,beverageAudio,accordAudio,scarcityAudio,deficiencyAudio,
     guiltyAudio,faithAudio,jelousAudio,religionAudio,trustAudio,quarrelAudio,disputeAudio,roofAudio,
     stretchAudio,clapAudio,wanderAudio,pardonAudio,swearAudio,prisonAudio,futileAudio,excruciatingAudio,
     captureAudio,expelAudio, 
      
     spendAudio,climbAudio,crowdAudio ,ruinAudio,exaggerateAudio,denyAudio
     ,plentyAudio,ampleAudio,declineAudio,abolishAudio,earthquakeAudio,destroyAudio,
     landslideAudio,digAudio,associateAudio,carryAudio,stareAudio,gaspingAudio,faintAudio,
     scatterAudio,putAudio,look_forAudio,meltAudio,gainAudio,shiverAudio,
     pantingAudio,stumbleAudio,breathingAudio,sorrowAudio,woundAudio,spillAudio,hastilyAudio,caveAudio
     ,expandAudio,shrinkAudio,humbleAudio,kindAudio,gestureAudio, dizzyAudio,injuryAudio,expensiveAudio
     ,cheapAudio,
     hungryAudio,thirstyAudio,feelAudio,spreadAudio,garbageAudio,merchantAudio,stainAudio,pondAudio
     ,lakeAudio,wellAudio,cureAudio,infantAudio,spoiledAudio,rottenAudio,eradicateAudio,annihilateAudio
     ,cattleAudio,
     isolateAudio,separateAudio,transparentAudio,
     knedingAudio,assistAudio,warmAudio,spookyAudio,ditchAudio,narrowAudio,huntAudio,furnishAudio
     ,flattererAudio,naughtyAudio,sightAudio,chaseAudio,cunningAudio,
     combAudio,wallAudio,emperorAudio,thunderAudio,spareAudio,fearAudio,warAudio,battleAudio
     ,shoveAudio,cowardAudio,ponytailAudio,beardAudio,mustacheAudio,
     broomAudio,groomAudio,brideAudio,stitchingAudio,compressAudio,tieAudio,stirAudio,make_funAudio
     ,make_noiseAudio,make_excuseAudio,surroundAudio,
     matAudio,streetAudio,miceAudio,vomitAudio,worthyAudio,boastAudio,floodAudio,droughtAudio
     ,clingAudio,consultAudio,preferAudio,grumbleAudio,steamAudio,
     buryAudio,awareAudio,extractionAudio,ladderAudio,aquireAudio,dependAudio,issueAudio,tidiousAudio
     ,responsibilityAudio,flagAudio,sillyAudio,frightenedAudio,
     escapeAudio,troubleAudio,pourAudio,slapAudio,reachAudio,arriveAudio,lendAudio,pollutionAudio
     ,preventionAudio,moistureAudio,rockAudio,coverAudio  
 ]






// adding max range here

let maxField=document.getElementById('maxField')
let submitButton1=document.getElementById('submitButton1')

let maxRetrivedValue=sessionStorage.getItem('maxValueKey')

if(maxRetrivedValue===null){
    var b2=302
    sessionStorage.setItem('maxValueKey',b2)
}

else{
         b2=maxRetrivedValue
    
}




// ending max range code here


// adding min range here

let minField=document.getElementById('minField')


let minRetrivedValue=sessionStorage.getItem('minValueKey')

if(maxRetrivedValue===null){
    var a2=0
    sessionStorage.setItem('minValueKey',a2)
}

else{
         a2=minRetrivedValue
    
}





submitButton1.addEventListener('click',(event)=>{

    
  
    if(maxField.value < minField.value){
        b2 = minField.value
        a2=maxField.value
    }
    else{
        b2 = maxField.value
        a2 = minField.value
    }
    
    sessionStorage.setItem('maxValueKey',b2)
    sessionStorage.setItem('minValueKey',a2)
  
})



let b3=parseInt(b2)
b3 = b3-1
let a3=parseInt(a2)
let random2=Math.round(a3+(b3-a3)*Math.random())

let random3=Math.round(a3+(b3-a3)*Math.random())

let random4=Math.round(a3+(b3-a3)*Math.random())

let random5=Math.round(a3+(b3-a3)*Math.random())
let checker=0


let Image1
let Image2
let Image3
let Image4

let mainInterval= setInterval(() => {
    if(ArrayOfImages[random2]!=ArrayOfImages[random3] && ArrayOfImages[random2]!=ArrayOfImages[random4] && ArrayOfImages[random2]!=ArrayOfImages[random5] && ArrayOfImages[random3]!=ArrayOfImages[random4] && ArrayOfImages[random3]!=ArrayOfImages[random5] && ArrayOfImages[random4]!=ArrayOfImages[random5]){
        checker=1
    }


    else{
        random2=Math.round(a3+(b3-a3)*Math.random())

        random3=Math.round(a3+(b3-a3)*Math.random())

        random4=Math.round(a3+(b3-a3)*Math.random())

        random5=Math.round(a3+(b3-a3)*Math.random())
    }

    
    
    
},4);


window.addEventListener('load',()=>{
    let element = document.getElementById('mainContainer')
    element.scrollIntoView()
    // 
})


setTimeout(() => {
    let randomArray=[random2,random3,random4,random5]
    let a6=0
    let b6=3
   let random6=Math.round(a6+(b6-a6)*Math.random())

 
       let value=vocabArray[randomArray[random6]] 
      mainwordlink.setAttribute('href',`#${value}2`)
    let elements=document.getElementById(`${value}2`)
    mainWord.addEventListener('click',()=>{
  
    }) 

   
    
   
    
    
      if(value==undefined){
        mainwordlink.setAttribute('href','#Whisper')
      }

       mainWord.textContent=vocabArray[randomArray[random6]] 
      console.log(mainWord.textContent)
      clearInterval(mainInterval)
  
      
    
       SpeakAloud.setAttribute('src',ArrayOfAudios[randomArray[random6]])


       PlayButton.addEventListener('click',()=>{
          SpeakAloud.play()
      }) 
      

       wordNumber.textContent=randomArray[random6]+1
    if(checker=1){
           
     Image1=document.createElement('img')
    Image1.setAttribute('src',ArrayOfImages[random2])
    Image1.setAttribute('id',vocabArray[random2])
    imagesId.appendChild(Image1)
    
     Image2=document.createElement('img')
    
    Image2.setAttribute('src',ArrayOfImages[random3])
    Image2.setAttribute('id',vocabArray[random3])
    imagesId.appendChild(Image2)
    
     Image3=document.createElement('img')
    
    Image3.setAttribute('src',ArrayOfImages[random4])
    Image3.setAttribute('id',vocabArray[random4])
    imagesId.appendChild(Image3)
    
     Image4=document.createElement('img')
    Image4.setAttribute('src',ArrayOfImages[random5])
    Image4.setAttribute('id',vocabArray[random5])
    imagesId.appendChild(Image4)
    }

      // console.log(ArrayOfImages[99])
      let err=document.createElement('p')

      Image1.addEventListener('click',()=>{
          if(Image1.id==mainWord.textContent){
              let gifElement=document.createElement('img')
              gifElement.setAttribute('src',gifSource)
              gifContainer.appendChild(gifElement)
              body.appendChild(gifContainer)
              err.textContent="right answer"
            //   audio.play()
              err.classList.add('rightAnswer')
              shower.appendChild(err)
              intialRightScore++
              scoreValueRight=intialRightScore
              sessionStorage.setItem('rightScore',JSON.stringify(scoreValueRight))
              rightScoreValue.textContent=scoreValueRight
  
             setTimeout(() => {
              window.location.reload()
             }, 2000);
          }
      
          else if(Image1.id!=mainWord.textContent){
              err.textContent="wrong answer"
              err.classList.add('worngAnswer')
              shower.appendChild(err)
              intialWrongScore++
              scoreValueWrong=intialWrongScore
              sessionStorage.setItem('wrongScore',JSON.stringify(scoreValueWrong))
              wrongScoreValue.textContent=scoreValueWrong
              setTimeout(() => {
                  window.location.reload()
                 }, 1000);
          }
      })
  
      
     
  
      Image2.addEventListener('click',()=>{
          if(Image2.id==mainWord.textContent){
              let gifElement=document.createElement('img')
              gifElement.setAttribute('src',gifSource)
              gifContainer.appendChild(gifElement)
              body.appendChild(gifContainer)
              err.textContent="right answer"
            //   audio.play()
              err.classList.add('rightAnswer')
              shower.appendChild(err)
              intialRightScore++
              scoreValueRight=intialRightScore
              sessionStorage.setItem('rightScore',JSON.stringify(scoreValueRight))
              rightScoreValue.textContent=scoreValueRight
              setTimeout(() => {
                  window.location.reload()
                 }, 2000);
          }
      
          else if(Image2.id!=mainWord.textContent){
  
              err.textContent="wrong answer"
              err.classList.add('worngAnswer')
              shower.appendChild(err)
              intialWrongScore++
              scoreValueWrong=intialWrongScore
              sessionStorage.setItem('wrongScore',JSON.stringify(scoreValueWrong))
              wrongScoreValue.textContent=scoreValueWrong
              setTimeout(() => {
                  window.location.reload()
                 }, 1000);
          }
      })
  
  
      Image3.addEventListener('click',()=>{
          if(Image3.id==mainWord.textContent){
              let gifElement=document.createElement('img')
              gifElement.setAttribute('src',gifSource)
              gifContainer.appendChild(gifElement)
              body.appendChild(gifContainer)
              err.textContent="right answer"
            //   audio.play()
              err.classList.add('rightAnswer')
              shower.appendChild(err)
              intialRightScore++
              scoreValueRight=intialRightScore
              sessionStorage.setItem('rightScore',JSON.stringify(scoreValueRight))
              rightScoreValue.textContent=scoreValueRight
              setTimeout(() => {
                  window.location.reload()
                 },2000);
          }
      
          else if(Image3.id!=mainWord.textContent){
  
              err.textContent="wrong answer"
              err.classList.add('worngAnswer')
              shower.appendChild(err)
              intialWrongScore++
              scoreValueWrong=intialWrongScore
              sessionStorage.setItem('wrongScore',JSON.stringify(scoreValueWrong))
              wrongScoreValue.textContent=scoreValueWrong
              setTimeout(() => {
                  window.location.reload()
                 }, 1000);
          }
      })
  
      Image4.addEventListener('click',()=>{
          if(Image4.id==mainWord.textContent){
              let gifElement=document.createElement('img')
              gifElement.setAttribute('src',gifSource)
              gifContainer.appendChild(gifElement)
              body.appendChild(gifContainer)
              err.textContent="right answer"
            //   audio.play()
              err.classList.add('rightAnswer')
              shower.appendChild(err)
              intialRightScore++
              scoreValueRight=intialRightScore
              sessionStorage.setItem('rightScore',JSON.stringify(scoreValueRight))
              rightScoreValue.textContent=scoreValueRight
              setTimeout(() => {
                  window.location.reload()
                 }, 2000);
          }
      
          else if(Image4.id!=mainWord.textContent){
              err.textContent="wrong answer"
              err.classList.add('worngAnswer')
              shower.appendChild(err)
              intialWrongScore++
              scoreValueWrong=intialWrongScore
              sessionStorage.setItem('wrongScore',JSON.stringify(scoreValueWrong))
              wrongScoreValue.textContent=scoreValueWrong
              setTimeout(() => {
                  window.location.reload()
                 }, 1000);
          }
      })
  
  

    
   }, 500);




   
  

