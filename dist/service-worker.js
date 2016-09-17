/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';


importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["404.html","6c0f1d4d0b0469d84dedd530d7ed05ab"],["assets/ajax-masonry/loadMore.html","06233208819caafb4378a5549b8beefe"],["assets/ajax-masonry/project1.html","25e1a2f8b693bb3d4d84bfd562d17174"],["assets/ajax-masonry/project2.html","b96f20ea3dee03e2fa867a2f0b5d8a6e"],["assets/ajax/loadMore-fullwidth.html","fcb65807896ac25f4d99b1804a7d5f62"],["assets/ajax/loadMore.html","4fcca6b366c82961b142c59a5c33600b"],["assets/ajax/project1.html","aaea5a3ceb7f9ee944eb2b742fd0230c"],["assets/ajax/project2.html","29cac4bcfc7c602428c60eef8e3bbd09"],["assets/ajax/project3.html","ecfcbc257bb846b87e19313b91f1ed8f"],["assets/ajax/project4.html","e4745cdc468218397368ff8427684fe4"],["assets/bootstrap/css/bootstrap-theme.css","bfd7093b60e8242fe591a10ac9dca1a5"],["assets/bootstrap/css/bootstrap-theme.css.map","efe618bf82d169dd43641497b8a14d5e"],["assets/bootstrap/css/bootstrap-theme.min.css","9d7e7fda09c8c376d3214dcfe8803c25"],["assets/bootstrap/css/bootstrap-theme.min.css.map","0eda4826805223ac5212594f2a9833fa"],["assets/bootstrap/css/bootstrap.css","8a1c555683f2f198f6e612d634b8f397"],["assets/bootstrap/css/bootstrap.css.map","804137cf9776c210bcb825a9f14464e7"],["assets/bootstrap/css/bootstrap.min.css","280348d889004a11e3d8a8523611a94b"],["assets/bootstrap/css/bootstrap.min.css.map","2dfdb49cb247842e3056bc9bfb94bdaa"],["assets/bootstrap/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["assets/bootstrap/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["assets/bootstrap/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["assets/bootstrap/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["assets/bootstrap/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["assets/css/animate.css","25bd65184859934bb6a86789a0494186"],["assets/css/animate.css.map","65337dafabdf1a97d2af9406cb07180a"],["assets/css/flexslider.css","8b32e5785908caa67fa30c55999d3915"],["assets/css/flexslider.css.map","b282d488f8dc23cdb1799bc006b04927"],["assets/css/magnific-popup.css","8dfd5ae2b9f8dfc26a65f55b0dbf06ad"],["assets/css/magnific-popup.css.map","86653a7684dc183bd4280d4ee7ccb700"],["assets/css/master-slider-custom.css","13926ef15362c5f21132a5d7be7aeccb"],["assets/css/master-slider-custom.css.map","7b10741db838484f9079b23061849305"],["assets/css/pricing.css","c895bd368a2d95d8fe11b190e3028e19"],["assets/css/pricing.css.map","cfc2149c7a96b9498b570c4a66b78bc7"],["assets/css/style-background-slider.css","c01e05966018a07c4e27c9247fef26af"],["assets/css/style-background-slider.css.map","9b7a82943958ed5714f119e0d7dd57a9"],["assets/css/style.css","748e02d7541a178c53474c7f2724e902"],["assets/css/style.css.map","4180efbf58de7a26e8365a74be7607c0"],["assets/cubeportfolio/css/cubeportfolio.css","bfbfacb8e87235232ba0527572697981"],["assets/cubeportfolio/css/cubeportfolio.css.map","624b608422c2ff46ebd6aeaa6029df45"],["assets/cubeportfolio/css/cubeportfolio.min.css","3816c42e37c312edfe871f8b25b382db"],["assets/cubeportfolio/css/cubeportfolio.min.css.map","d80bdee3f5367c7d97d519b11d08f541"],["assets/cubeportfolio/img/cbp-loading-popup.gif","fbc22aa777339fd7d9009439d61efb4a"],["assets/cubeportfolio/img/cbp-loading.gif","4b8b8ed40a76e266504d52113cc2e989"],["assets/cubeportfolio/img/cbp-sprite.png","d076f83086d6274f6cfa9b562a294a3f"],["assets/icons/css/ionicons.css","5592dc9aefda08019d1c27c5ec7faf76"],["assets/icons/css/ionicons.css.map","7bcf8e41de49a0903207ed222480c92b"],["assets/icons/css/ionicons.min.css","817698f891f34be367501b9906b24636"],["assets/icons/css/ionicons.min.css.map","d05a9ddf39095d53b9ac4745b6767161"],["assets/icons/fonts/ionicons.eot","2c2ae068be3b089e0a5b59abb1831550"],["assets/icons/fonts/ionicons.svg","621bd386841f74e0053cb8e67f8a0604"],["assets/icons/fonts/ionicons.ttf","24712f6c47821394fba7942fbb52c3b2"],["assets/icons/fonts/ionicons.woff","05acfdb568b3df49ad31355b19495d4a"],["assets/images/ELL.jpg","a85b5d50708796daabe8a15be3f39e61"],["assets/images/ELL2.jpg","7736c071613a632f4f5871039c98788a"],["assets/images/Edu.png","4cdd5cd885ae14b5b736b22aa639a0a7"],["assets/images/Fin.jpg","f0c2aafe7b1b772414098bf084c3c47c"],["assets/images/Fina.jpg","c98b23ab07a148325f33d4623590269c"],["assets/images/MultipleIntelligence.png","cada8caaddd578a69daa3f839101468f"],["assets/images/Preloader.gif","2297bb1a3b1311ac6564fd870fed399c"],["assets/images/Robo.jpg","e93f128fc2d6b9e65639f26275ae2c3a"],["assets/images/Robo1.jpg","95de917d7bc5dbf9dc4d1c8d15ef5f0b"],["assets/images/Robot.jpg","621c1be1cddbca36b359d0b0e54b0c61"],["assets/images/arrows.png","c3898cc4438a6b991c7ced7ea3be39f5"],["assets/images/bg-1.jpg","9d7863793623654259346c9eabfe5fce"],["assets/images/bg-2.jpg","800a1990ea53ded8d03a6770018ed24e"],["assets/images/bg-3.jpg","45020daa3b109299847380ae563abcf3"],["assets/images/blog-1.jpg","ed55a2406207624f7d5b046292dc4ef9"],["assets/images/blog-2.jpg","9b2a4e0be74ae748262355b15deca940"],["assets/images/blog-3.jpg","7e18401df1220f03f3f355cbc577daf7"],["assets/images/cd-icon-small-arrow.svg","978355f974a709b33d8cdfe92bd03140"],["assets/images/cover 1.jpg","0a8cd3135e1798af6522f6a57e5954c7"],["assets/images/drink_cover.jpg","ab036baa978c2bb7cfdf46ec4de7a2ff"],["assets/images/edudefine-png-title.png","345f239a75e82eb7820f08de96616955"],["assets/images/edulogo.png","e166ebf865b5c685ee27b90f02e0d315"],["assets/images/ipad.png","f393380e5f603b0b8ccd34009dafdf8b"],["assets/images/logo-dark.png","98be6ee2fcfaac1ac1b35c12bb412c8c"],["assets/images/logo-light.png","d515caf53ad2e476da11cfcec5a334ae"],["assets/images/logo.png","a9ba08835f7429998c6b0d4f5a5d0623"],["assets/images/map-bg.jpg","4d95f54f8a643e38e06285f66ccd75cf"],["assets/images/mas-1.jpg","309c8981ea785940d7686e8d60d5d228"],["assets/images/mas-2.jpg","2bd9ed95a5cb5ef0f839a9946a722728"],["assets/images/mas-3.jpg","2dcef93ac7133f2c593e263eb734f597"],["assets/images/pattern.png","9bf22b3d432daef67d2cd80002254179"],["assets/images/redefining png title.png","4658fe401da83760d9a078a9aa686220"],["assets/images/star-cover.jpg","0d35ff7a17ea0fb33ce026b7c9271c49"],["assets/images/team-1.jpg","72f7e051066b47805dbc37344ba0739e"],["assets/images/team-2.jpg","274ca952c48f4e2ea46ebc31b96263ed"],["assets/images/team-3.jpg","6a28f9f126cbbbd1c84904de33bdbd87"],["assets/images/team-4.jpg","71a0056c44dc8ac6c4c3ec072d6f5cd1"],["assets/images/title new edudefine.png","1f32eac0f395df67362383bd94ec546b"],["assets/images/typing-cover.jpg","81e66718a7c0dff9fae16838f24cc1ba"],["assets/images/work-1.jpg","8362fd68d3710b1b1a5a6fd9e8d8ac8a"],["assets/images/work-2.jpg","9583cb7b5e762e905a6b7c45757894ea"],["assets/images/work-3.jpg","9c8070e4f68a142bfbd0a8ca2272b186"],["assets/images/work-4.jpg","d0f12fb63bc5cb8418f4f794863d2874"],["assets/images/work-5.jpg","575056ca949c1d76e2d214c5850de7ff"],["assets/images/work-6.jpg","888419a167e706736177f7f413914b3d"],["assets/images/work-7.jpg","fb601eded5bba29f0531f994419bf50e"],["assets/images/work-8.jpg","f185e7a42f71d390534f6ce6aa368fea"],["assets/js/bootstrap-hover-dropdown.min.js","59cbdf6285f906442fe59392004c5cee"],["assets/js/bootstrap.min.js","e53c31e004fd17144c98f4bd0bbccc89"],["assets/js/jquery-migrate-1.2.1.min.js","ea4a72fa901161c2201c4aa50e6a6bd3"],["assets/js/jquery-migrate.min.js","f79427f055d1810fc8137dac03d704e6"],["assets/js/jquery.backstretch.min.js","a99badcd58bf680bb89ddb94e954d376"],["assets/js/jquery.cubeportfolio.min.js","5e0df1021a3d52e56bd2f9332577545d"],["assets/js/jquery.easing.1.3.min.js","3af228d7ac489ce72bccefa9adb069f8"],["assets/js/jquery.flexslider-min.js","de5ba2532076f07a59d0885e51a3dcd9"],["assets/js/jquery.imagesloaded.min.js","c38681c1356975fba6d2ea4a9bcaa292"],["assets/js/jquery.magnific-popup.min.js","f31d9eeb04c2c45243ac24f1ef270db3"],["assets/js/jquery.min.js","a54dd9adaa050a51a75dab4ef0b0b53d"],["assets/js/jquery.sticky.min.js","c20bd6fbffa6a44e606423e53d23e276"],["assets/js/jquery.themepunch.revolution.min.js","2a09dd7a1d283a8e14bf284cf6354a14"],["assets/js/jquery.themepunch.tools.min.js","b1e27b975e0214ed4583944375557f81"],["assets/js/masterslider.min.js","7711ca3d0791d9d1d94d9fc9dc68344d"],["assets/js/moderniz.min.js","27d647e370ac83d1f5470e8ffb0f9bb7"],["assets/js/pace.min.js","9fc31bce643062eed2624d3a873090ed"],["assets/js/parallax.min.js","fd4e7373fed27cc0687b28116520f3b2"],["assets/js/scripts.min.js","a4537c127153a0f272deba655d6a63cb"],["assets/js/tweetie.min.js","e2d781744b38e9730156dbbeada9d1df"],["assets/js/waypoints.min.js","68026b86eb0a75c096d854de80b200c8"],["assets/js/wow.min.js","4eeafdc71b812b652fa0e38819c981b0"],["assets/mailchimp/MCAPI.class.php","bc941ee460818007df929d5b7f6b68e2"],["assets/mailchimp/config.inc.php","d759b8ce1faaa093b27ad35b7b7cf67e"],["assets/mailchimp/index.html","4dedebf4518fe85439fa46203b2eead8"],["assets/mailchimp/process-subscribe.php","55f77ad3e0220e9f19ab84af65f94d90"],["assets/master-slider/skins/black-1/black-skin-1-retina.png","9b70954998b986be6895c3151a3cb6ea"],["assets/master-slider/skins/black-1/black-skin-1.png","d178f53efeaefaf048bad5e3c87f243d"],["assets/master-slider/skins/black-1/style.css","3770ba05f512beec4b6d1d6cb0b3111b"],["assets/master-slider/skins/black-1/style.css.map","50001c86e4445ca00a5cc993915aa2c7"],["assets/master-slider/skins/black-2/black-skin-2-retina.png","f9b1258dcf6daaf01cde61ac04854444"],["assets/master-slider/skins/black-2/black-skin-2.png","4935feffb4ad53beff09b95654f9b10f"],["assets/master-slider/skins/black-2/style.css","d71fa0ba6e3b8897d3f910c83ae5092f"],["assets/master-slider/skins/black-2/style.css.map","44749daad7eef135d3089ce0e286c27a"],["assets/master-slider/skins/contrast/contrast-skin-retina.png","39574691a3644bb61cc5c8491dbb468c"],["assets/master-slider/skins/contrast/contrast-skin.png","34ce131f805cd6fd5a55ee67b335cdeb"],["assets/master-slider/skins/contrast/style.css","0ad4ba10a108bb5eacf1b212086f5b3a"],["assets/master-slider/skins/contrast/style.css.map","1d574878b4b05d3883a770ef4e1bc661"],["assets/master-slider/skins/default/light-skin-1-retina.png","09be0c3e0644f14919e291b4381b63db"],["assets/master-slider/skins/default/light-skin-1.png","f0711cad176ce82622ee227595303c4a"],["assets/master-slider/skins/default/style.css","da71f97583effdfd7d0cbb08539157ff"],["assets/master-slider/skins/default/style.css.map","b57b505e38dbb2fd046e40fdfba268f9"],["assets/master-slider/skins/light-2/light-skin-2-retina.png","61204fd8ff3b26518baaeec516840b21"],["assets/master-slider/skins/light-2/light-skin-2.png","db5e0ad7ac70fa60ea5a0fb0950b8349"],["assets/master-slider/skins/light-2/style.css","a19e08eec7267cf06245d345f97be922"],["assets/master-slider/skins/light-2/style.css.map","7cac1ed9182d0c47ecb809225532d663"],["assets/master-slider/skins/light-3/light-skin-3-retina.png","f667898ea5cb6f09e529904b84669e72"],["assets/master-slider/skins/light-3/light-skin-3.png","764188285eef754b876d33c9cee2bcc4"],["assets/master-slider/skins/light-3/style.css","dfb42a4a93ef092f1c40f718add74fa4"],["assets/master-slider/skins/light-3/style.css.map","e9614645a0ecc163d5e6c28b1b2a5991"],["assets/master-slider/skins/light-4/light-skin-4-retina.png","e12d83409593cdf24c3bb4cf2b3d4015"],["assets/master-slider/skins/light-4/light-skin-4.png","e6da74c865a8781dab309f5d6e6339f7"],["assets/master-slider/skins/light-4/style.css","bedc7da99ead26e26837e8e78bbf2ea9"],["assets/master-slider/skins/light-4/style.css.map","9a316c68e80e96f8d9f55b6a600ba609"],["assets/master-slider/skins/light-5/light-skin-5-retina.png","8303842e1b459b29008a3e1ae595d124"],["assets/master-slider/skins/light-5/light-skin-5.png","bc429107004eada87d6a512b5b5d1c64"],["assets/master-slider/skins/light-5/style.css","cce030619ec0b451f3a5322ea8d2d88c"],["assets/master-slider/skins/light-5/style.css.map","f7ecd81f0a4796fde52c1429294afc9d"],["assets/master-slider/skins/light-6/light-skin-6-retina.png","addfa591290d5e052f152ce0d18541ee"],["assets/master-slider/skins/light-6/light-skin-6.png","1eaf485f56a946b27e338480b92f4f27"],["assets/master-slider/skins/light-6/style.css","e0120c7445c5b215276a67bd83a6508b"],["assets/master-slider/skins/light-6/style.css.map","6be7e7d4b909b67d14db2c59e546b9a6"],["assets/master-slider/skins/metro/metro-skin-retina.png","df3aaa92268f4c7b8473540f78e5bfde"],["assets/master-slider/skins/metro/metro-skin.png","cee1816617d12661e297eec8b5a064c1"],["assets/master-slider/skins/metro/style.css","25ccb9a4197c43ea093d85da37c6f8b0"],["assets/master-slider/skins/metro/style.css.map","6ec5af1d1a529ee6f7a7c324433be322"],["assets/master-slider/style/blank.gif","f837aa60b6fe83458f790db60d529fc9"],["assets/master-slider/style/flat-phone-land.png","1217287038e35ed6c9c272e01b866c1f"],["assets/master-slider/style/grab.cur","b06c243f534d9c5461d16528156cd5a8"],["assets/master-slider/style/grab.png","c82d4a6bf8f38c6abdc6b3055ae7e17d"],["assets/master-slider/style/grabbing.cur","a8c874b93b3d848f39a71260c57e3863"],["assets/master-slider/style/grabbing.png","ab31513462871dc591384c4d158ad560"],["assets/master-slider/style/loading-1-dark.gif","fc991f2369cb3bb0571e6b599f729722"],["assets/master-slider/style/loading-1-light.gif","2522c2301e8a06e3bda5e68e7102cbb1"],["assets/master-slider/style/loading-1.gif","c2c94f96e3c815b6cb15aa88cbca7a9f"],["assets/master-slider/style/loading-2-dark.gif","bc93d2df25b7554da19ceaf9ff0ee67f"],["assets/master-slider/style/loading-2-light.gif","4bd62de33c4c6446beebcb8aa20249d2"],["assets/master-slider/style/loading-2.gif","214f3c5ef3de8b01b2fe67da6ccfc7e7"],["assets/master-slider/style/masterslider.css","9585a5d637289378c6440865cbbdd7a1"],["assets/master-slider/style/masterslider.css.map","1d4a86180f1027a691439749732f218d"],["assets/master-slider/style/ms-phone-style.css","7449372b13020dc3240b617bd707d3f0"],["assets/master-slider/style/ms-phone-style.css.map","8701d5d096629b636fdfc2b8b993c869"],["assets/master-slider/style/skin.png","b8441a9b02e3354121ab260cf70ce411"],["assets/master-slider/style/video-close-btn.png","2fad20bdee650136e94da131e2386587"],["assets/rs-plugin/assets/arrow_large_left.png","6d2d479d643263a75a95b4cf9f33032c"],["assets/rs-plugin/assets/arrow_large_right.png","df39e233d9c5c60855293b09fc77cd86"],["assets/rs-plugin/assets/arrow_left.png","56458574dfbdc004d385499c968c516b"],["assets/rs-plugin/assets/arrow_left2.png","904f4a773b15b429b665a6c6e79ff104"],["assets/rs-plugin/assets/arrow_right.png","528f50a273ef6fa047f7376ca321d6d7"],["assets/rs-plugin/assets/arrow_right2.png","81d17d06ca481b690b3a116ba7a7f25b"],["assets/rs-plugin/assets/arrowleft.png","312c31a080e0c3ed0bbdfb953bd8cc70"],["assets/rs-plugin/assets/arrowright.png","9a98951eeb045dc3dfb9cdd3c68dc87a"],["assets/rs-plugin/assets/arrows.psd","dfb33be3fd58d5fa6efef7b9c2a13c4f"],["assets/rs-plugin/assets/black50.png","607039adaa52c099043af7b1a5d359b6"],["assets/rs-plugin/assets/boxed_bgtile.png","850c2108a300513e45f03c7dc9326546"],["assets/rs-plugin/assets/bullet.png","09f2d370b116ede485daa168eca058b5"],["assets/rs-plugin/assets/bullet_boxed.png","39cf708d6731424fa1569907676c2cbd"],["assets/rs-plugin/assets/bullets.png","198fa59d622688f36a1f760ea00115ef"],["assets/rs-plugin/assets/bullets.psd","d0327d58ae0d9f8bdd836184c8fe739f"],["assets/rs-plugin/assets/bullets2.png","8a6714867943152949276189668d6125"],["assets/rs-plugin/assets/coloredbg.png","403b2ccc022f9f264a31dec760bd55b9"],["assets/rs-plugin/assets/grain.png","6bce366e2713a84aa4297003b804de8f"],["assets/rs-plugin/assets/gridtile.png","3888ecc03086ee849014409a07864ba6"],["assets/rs-plugin/assets/gridtile_3x3.png","fd995e40c1acad690d12d245d48663ae"],["assets/rs-plugin/assets/gridtile_3x3_white.png","dccf4b08b92c4480debf11b5cbb2cdf4"],["assets/rs-plugin/assets/gridtile_white.png","ab9ca7a1eb5d4a6de6f2ffc8ccfd105c"],["assets/rs-plugin/assets/large_left.png","f7dd4aee8ebb28b7c88509f3e43383fb"],["assets/rs-plugin/assets/large_right.png","167358b175dce48971d149a3973c8ffe"],["assets/rs-plugin/assets/loader.gif","3fd27945212db12ca133d3e634953af6"],["assets/rs-plugin/assets/loader2.gif","75ee3dd2201bb7577f94b128ffb399ee"],["assets/rs-plugin/assets/navigdots.png","2915fa321fa0ac4d3d594542eca0eb2d"],["assets/rs-plugin/assets/navigdots_bgtile.png","6dd796a92f8ff07b64e06e7915d22a38"],["assets/rs-plugin/assets/shadow1.png","6558580a951ef6d685451f8272d6f2ec"],["assets/rs-plugin/assets/shadow2.png","c2a6ff678855127a164a64fb08eed1a3"],["assets/rs-plugin/assets/shadow3.png","2ceabc7593430639c7c11d7d266d5f7b"],["assets/rs-plugin/assets/small_arrows.psd","3da76f1ee501fd5db2e8c33eb91863fd"],["assets/rs-plugin/assets/small_left.png","e9afdf79eeef5d86b520cdbe73d91fcd"],["assets/rs-plugin/assets/small_left_boxed.png","f750ed4e89c4391ba1fb5d532a441467"],["assets/rs-plugin/assets/small_right.png","7c415d24f90c1d673b25bf0b1f2cf468"],["assets/rs-plugin/assets/small_right_boxed.png","1609b70a465389bfe1944d108d55354c"],["assets/rs-plugin/assets/timer.png","0cbab8b24884682ef93daad1c66cba1e"],["assets/rs-plugin/assets/timerdot.png","4befdd0dbf996d971a7cb70fe62e36fa"],["assets/rs-plugin/assets/transparent.jpg","391ded01873db90453e899775f910f8c"],["assets/rs-plugin/assets/white50.png","14e0213a1a5921bd9b9de997c1da4c53"],["assets/rs-plugin/css/settings-ie8.css","b8cefbf6cea415d3949c68d1289d1393"],["assets/rs-plugin/css/settings-ie8.css.map","f0398fdfed540d3cef686789863b91e6"],["assets/rs-plugin/css/settings.css","e08349c11df17f53893c9d716dd5fcb3"],["assets/rs-plugin/css/settings.css.map","565812796c337dce6c5785a8cbfc5822"],["assets/rs-plugin/font/revicons.eot","2feb69ccb596730c72920c6ba3e37ef8"],["assets/rs-plugin/font/revicons.svg","5ad4f0d6e99dd65aba77cbef6e17c25c"],["assets/rs-plugin/font/revicons.ttf","17629a5dfe0d3c3946cf401e1895f091"],["assets/rs-plugin/font/revicons.woff","04eb8fc57f27498e5ae37523e3bfb2c7"],["assets/rs-plugin/images/decor_inside.png","6c809a6151b431c305162101d2683724"],["assets/rs-plugin/images/decor_inside_white.png","daabaceea43f2491ebd614d315d55fb8"],["assets/rs-plugin/images/decor_testimonial.png","1a5870fb2db17787ec5049fbd05789ba"],["assets/rs-plugin/images/gradient/g30.png","9cdf24e5e370571e56e2974ebdb2bce8"],["assets/rs-plugin/images/gradient/g40.png","2108e8ded803878342488b6fd89c78ff"],["assets/twit-api/config.php","ae9f512f5b13e7213adad5f7e28230a0"],["assets/twit-api/tweet.php","e609fdc519075a645494b1560662bb6d"],["assets/twit-api/twitteroauth/OAuth.php","d7b40029f9d61580663a04727d166156"],["assets/twit-api/twitteroauth/twitteroauth.php","c329e25121783a292524acaea23bb28d"],["assets/video-background/background.css","567bdb36a04ef57992ca8cf71e1f2d5d"],["assets/video-background/background.css.map","1aebe0a99ea8effae9ffd5ad37d68ae7"],["blog-single.html","e03129f3ca3703d2e4af1197f0908a60"],["index.html","5b1979602dc10b3f97efe1e8bbdef0b8"],["manifest.json","59b047a6f2cd70c68657fe7a882f4f87"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","66531e5962e4dccb0526a2b4cd6364a4"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-EduDefine-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, now) {
    now = now || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') + 'sw-precache=' + now;

    return urlWithCacheBusting.toString();
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  event.waitUntil(
    caches.keys().then(function(allCacheNames) {
      return Promise.all(
        Object.keys(CurrentCacheNamesToAbsoluteUrl).filter(function(cacheName) {
          return allCacheNames.indexOf(cacheName) === -1;
        }).map(function(cacheName) {
          var urlWithCacheBusting = getCacheBustedUrl(CurrentCacheNamesToAbsoluteUrl[cacheName],
            now);

          return caches.open(cacheName).then(function(cache) {
            var request = new Request(urlWithCacheBusting, {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName], response);
              }

              console.error('Request for %s returned a response with status %d, so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          });
        })
      ).then(function() {
        return Promise.all(
          allCacheNames.filter(function(cacheName) {
            return cacheName.indexOf(CacheNamePrefix) === 0 &&
                   !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html')) {
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});

