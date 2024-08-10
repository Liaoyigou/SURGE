/*
revenuecat 通用模板

quanx
[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-request-body https://raw.githubusercontent.com/Liaoyigou/SURGE/master/IPcames.js
[mimt]
hostname = api.revenuecat.com

*/

const token = $request.headers["authorization"];
const url = "https://api.revenuecat.com/v1/product_entitlement_mapping";
const headers = {
"content-type": "application/json",
"authorization": token,
"x-platform-flavor-version": "5.0.0",
"x-client-version": "1.2.0",
"x-platform-flavor": "flutter",
"x-client-bundle-id": "com.coneno.cape",
"x-platform-version": "Version 13.0.1 (Build 22A400)",
"x-version": "4.21.0",
"x-is-sandbox": false,
"x-storekit2-enabled": false,
"user-agent": "QuikFlow/27 CFNetwork/1399.4 Darwin/22.1.0",
"x-observer-mode-enabled": false,
"x-platform": "macOS",
"x-client-build-version": 27,
 };
 const api = {
  url: url,
  headers: headers
  };
const resp = {};
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
const list = {
'VSCO': { name: 'membership', id: 'com.circles.fin.premium.yearly' },
'1Blocker': { name: 'premium', id: 'blocker.ios.subscription.lifetime' },
'Anybox': { name: 'pro', id: 'cc.anybox.Anybox.annual' },
'Fileball': { name: 'filebox_pro', id: 'filebox_pro' },
'APTV': { name: 'pro', id: 'com.kimen.aptvpro.lifetime' },
'Blink': { name: 'pro', id: 'blink_shell_plus_1y_1999' },
'mizframa': { name: 'premium', id: 'mf_20_lifetime2' },
'CallRecorder': { name: 'full_access', id: 'com.prettyboa.CallRecorder.MonthlySubscription2999' },
'Pixelcut': { name: 'teams', id: 'com.circular.pixels.teams.monthly.3' },
'Planny': { name: 'premium', id: 'com.kevinreutter.Sagittarius.Premium3Months' },
'WidgetsApp': { name: 'pro', id: 'cw_1999_1y' },
'djay': { name: 'pro', id: 'com.algoriddim.djay_iphone_free.pro.yearly' },
'PhotoRoom': { name: 'business', id: 'com.background.business.yearly' },
'CPUMonitor': { name: 'Pro', id: 'pro_annual' },
'Alpenglow': { name: 'newPro', id: 'ProLifetime' },
'Pomodoro': { name: 'Plus', id: 'com.MINE.PomodoroTimer.plus.lifetime.en.forYearly' },
'MoneyCoach': { name: 'Premium', id: 'lifetimePremium' },
'Reface': { name: 'pro', id: 'com.reface.yearly' },
'MyAniList': { name: 'Tokubetsu+', id: 'com.coreyroberts.myanilist.tokubetsu.forever' },
'Currency': { name: 'pro', id: 'com.jeffreygrossman.currencyapp.iap.pro' },
'audiomack': { name: 'Premium1', id: 'com.audiomack.premium.2023' },
'OffScreen': { name: 'Entitlement.Pro', id: 'tech.miidii.OffScreen.pro.c' },
'Logo_Maker': { name: 'UNLIMITED ACCESS', id: 'com.logomaker.fullyearly' },
'MallocVPN': { name: 'IOS_PRO', id: 'malloc_vpn_one_off' },
'Grow': { name: 'grow.pro', id: 'grow_lifetime' },
'Noto': { name: 'pro', id: 'com.lkzhao.editor.full'},
'Ultrawall': { name: 'lifetime', id: 'com.idevtal.Wallpapers.lifetime'},
'ClipDrop': { name: 'unlimited', id: 'app.arcopypaste.subscriptions.yearly'},
'Mockview': { name: 'Pro', id: 'kavsoft.dev.yearly'},
'Harukong': { name: 'premium', id: 'com.bluesignum.harukong.lifetime.premium'},
'CadTool': { name: 'revencat.entitlement.cadviewer', id: 'com.jieluo.cadviewer.subsription.yearly'},
'chatbotapp': { name: 'Premium', id: 'aichat_premium_yearly1'},
'Moises': { name: 'premium', id: 'yearly'},
'NotePlan': { name: 'Personal Annual', id: 'co.noteplan.subscription.personal.annual'},
'Greg': { name: 'super_greg', id: 'greg_29999_lifetime'},
'OneBox': { name: 'all', id: 'com.ziheng.totowallet.onetimepurchase'},
'ScannerPro': { name: 'plus', id: 'com.readdle.Scanner.subscription.year25'},
'Naughty': { name: 'Premium', id: 'com.scottjulian.nice.yearly2'},
'Clockology': { name: 'pro', id: 'com.mikehill.clockologyios.yearly'},
'Parrot': { name: 'Lifetime Pro', id: 'p_2999_life'},
'ProximoJogo': { name: 'Pro', id: 'nm_199_lifetime'},
'Mojo': { name: 'pro', id: 'video.mojo.pro.yearly'},
'Paper': { name: 'pro', id: 'com.fiftythree.paper.pro_12'},
'Collect': { name: 'pro', id: 'com.revenuecat.product.yearly.ios'},
'Simple': { name: 'pro', id: 'ios_simple_original_subscription_12_weeks_2999_trial_7d'},
'DNS%20Changer': { name: 'premium', id: 'com.burakgon.dnschanger.sub_1_year_7.99usd'},
'Everlog': { name: 'premium', id: 'co.wonderbit.hummingbird.lifetime'},
'Meditation': { name: 'premium', id: 'thien_duong_dai_goi_nam'},
'ChessvisionMobile': { name: 'default', id: 'basic_subscription_1_year'},
'Calories': { name: 'premium', id: 'com.lhmedia.healthyfood.calories.12months'},
'Athan%20Pro': { name: 'com.quanticapps.premium', id: 'com.quanticapps.athanpro.premium.onetime'},
'Quran%20Pro': { name: 'com.quanticapps.premium', id: 'com.quanticapps.quranpro.premium.onetime'},
'Radarbot': { name: 'truck_access', id: 'rb_truck_5999_annual_direct'},
'PDF%20Viewer': { name: 'sub.pro', id: 'com.pspdfkit.viewer.sub.pro.yearly'},
'Thenics': { name: 'Pro', id: 'pro_yearly_subscription_ios'},
'Super%20Agent': { name: 'unlimited', id: 'sa_2999_lifetime'},
'Endel': { name: 'pro', id: 'Lifetime  discount 50'},
'Usage': { name: 'pro', id: 'com.olegst.usage.pro'},
'GoRecord': { name: 'Pro', id: 'com.alloy.screenrecorder.subcription.monthlyPro'},
'DSDownload': { name: 'Unlimited', id: 'dsdownload.app.subscription.lifetime.a'},
'FoodNoms': { name: 'plus', id: 'com.algebraiclabs.foodnoms.plus.annual'},
'Penbook02': { name: 'pro', id: 'penbook.lifetime02'},
'TuneIn': { name: 'subscriptions', id: 'com.tunein.TuneInRadio.TUNEIN_1_MONTH_7_DAY_1.99'},
'Viet%20ID': { name: 'Pro', id: 'yearly_pro'},
'Spark': { name: 'premium', id: 'spark_b_799_1m_1w0'},
'NotVPN': { name: 'Premium', id: 'org.reactjs.native.exampleio.NotVPN.30'},
'Darkroom': { name: 'subscriptions', id: 'co.bergen.Darkroom.product.forever.everything'},
'Genius': { name: 'premium', id: 'com.alloy.genius.subscription.monthly'},
'TouchRetouchBasic': { name: 'premium', id: 'tr5_yearlysubsc_15dlrs_1'},
'image_upscaler': { name: 'pro', id: 'yearly_sub_pro'},
'dreamerai': { name: 'Pro', id: 'dreamerai_lifetime'},
'HTTPBot': { name: 'pro', id: 'com.behindtechlines.HTTPBot.prounlock'},
'TV%20Remote%20Samsung': { name: 'premium', id: 'tvs_999_1y_3d0'},

'Monefy': { name: 'premium', id: 'com.monefyapp.subscription.yearly.v2'},
'Rise%20Sleep': { name: 'Pro', id: 'com.risesci.nyx.subscriptions.annual_70'},
'Konsensus': { name: 'patron', id: 'konsensus.patron.lifetime'},
'universal': { name: 'Premium', id: 'remotetv.yearly.01'},
'SCRL': { name: 'com.dopedevelopment.Panels.subscription.Pro', id: 'com.dopedevelopment.Panels.subscription.Pro'},
'Smart%20Video': { name: 'Max', id: 'TranscriptionMaxYearly'},
'Pixel%20Pals': { name: 'Premium', id: 'com.christianselig.pixelpalspremium.yearly'},
'Authenticator': { name: 'Premium', id: 'com.obsidian.lifetime'},
'Drafthound': { name: 'Pro', id: 'drafthound_pro_annual'},
'aichat/23': { name: 'premium', id: 'sa_lifetime_premium'},
'Loopsie': { name: 'pro-iOS', id: 'com.gamelounge.loopsie.ios.one_time'},
'AnkiPro': { name: 'Premium', id: 'com.ankipro.app.lifetime'},
'Done': { name: 'Growth_Bundle_Subscription', id: 'com.tbd.Done.growth.bundle.yearly.v6'},
'IPTVUltra': { name: 'premium', id: 'com.poopsnaggle.IPTVUltra.lifetime'},
'ServerCat': { name: 'premium', id: 'servercat_premium_universal'},
'Scorespot': { name: 'plus', id: 'com.roadesign.Scorespot.Lifetime'},
'PhotoSync': { name: 'premium', id: 'com.touchbyte.PhotoSync.PremiumLifetime'},
'FitnessCoach': { name: 'premium', id: 'yearly_79_zing.coach'},
'Locket': { name: 'Gold', id: 'locket_3600_1y'},
'MOZE': { name: 'MOZE_PRO_SUBSCRIPTION_MONTHLY_BASIC', id: 'MOZE_PRO_SUBSCRIPTION_MONTHLY_BASIC'},
'Structured': { name: 'pro', id: 'today.structured.pro'},
'One4WallSwiftUI': { name: 'lifetime', id: 'lifetime_key'},
'Gear': { name: 'pro', id: 'com.gear.app.yearly'},
'Photomator': { name: 'pixelmator_photo_pro_access', id: 'pixelmator_photo_lifetime_v1'},
'Browser': { name: 'pro', id: 'pro_zoomable'},
'Shortcuts': { name: 'Pro', id: 'pro.infinity.infinity'},
'Chai': { name: 'premium', id: 'subscription_gold_trial'}, // subscription_gold
'Chatme': { name: 'premium', id: 'chatme_premium_week_trial'},
'DeforumAI': { name: 'Subscriptions', id: 'com.niwoq.deforum.weekly.subscription'},
'Tangerine': { name: 'Premium', id: 'PremiumMonthly'},
'Widgetsmith': { name: 'Premium', id: 'PremiumMonthly' },
'Purple': { name: 'Pro', id: 'com.ddjacobsen17.F1Widget.proLifetime'},
'Avatar': { name: 'ProStandard', id: 'com.pixery.avatar.yearly'},
'Tacter': { name: 'tier1.tacter.app', id: 'pe.high.annual.tacter.app' },
'NexTran': { name: 'pro', id: 'nextran.max.sub.annual' },
'GoodCrypto': { name: 'pro', id: 'pro_lifetime' }

};
$httpClient.get(api, function(error, response, data){
  if (error) {
    $done({});
  } else {
  var json = JSON.parse(data).product_entitlement_mapping;
  var obj = {
  "request_date_ms" : 1704664060864,
  "request_date" : "2024-01-07T21:47:40Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2024-01-07T21:42:02Z",
    "original_application_version" : "1",
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {

    },
    "entitlements" : {

    },
    "original_purchase_date" : "2024-01-07T21:38:41Z",
    "original_app_user_id" : "$RCAnonymousID:06923c3f1dfc4f23b1b56c9e24dbdffc",
    "last_seen" : "2024-01-07T21:42:02Z"
  }
};
  var lk = {
 "expires_date": "2099-02-18T07:52:54Z",
 "original_purchase_date": "2020-02-11T07:52:55Z",
 "purchase_date": "2020-02-11T07:52:54Z"
};
  for (var i in json) {
   obj.subscriber.subscriptions[i] = lk;
   for(var j in json[i]["entitlements"]){
   if(json[i]["entitlements"][j]){
   obj.subscriber.entitlements[json[i]["entitlements"][j]] = JSON.parse(JSON.stringify(lk));
   obj.subscriber.entitlements[json[i]["entitlements"][j]].product_identifier = i;}

  }
  }
for (var i in list) {
  if (new RegExp(`^${i}(?:\\W|$)`, `i`).test(ua)) {
   obj.subscriber.subscriptions[list[i].id] = lk;
   obj.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(lk));
   obj.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
   break;
  }
 }
   console.log(obj)
      $done({response: {body: JSON.stringify(obj), status: 200}});
  }
});
