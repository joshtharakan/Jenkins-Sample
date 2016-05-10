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
var PrecacheConfig = [["404.html","6c0f1d4d0b0469d84dedd530d7ed05ab"],["assets/ajax-masonry/loadMore.html","06233208819caafb4378a5549b8beefe"],["assets/ajax-masonry/project1.html","1e1ca918bab33826536dc0b17e161869"],["assets/ajax-masonry/project2.html","7020ff92875be3cd871f08ff4ce93bef"],["assets/ajax/loadMore-fullwidth.html","0ebe46c727ca1c3caca39352c4081d73"],["assets/ajax/loadMore.html","87091bbed8551b0998ee3e1e58a34c00"],["assets/ajax/project1.html","e4831d3de761d7c908ffc46763a0c15d"],["assets/ajax/project10.html","b40391553b2f594e16a29e50ee75507b"],["assets/ajax/project11.html","25d039ba2abd6d72c8292cc360f2aec3"],["assets/ajax/project12.html","4a7e1a5dc4eb59a7e3d64d575aa773f7"],["assets/ajax/project13.html","436c0104010c2dc43e80b5620399fe25"],["assets/ajax/project2.html","e4be97001f25a3872b56bd8dfb9dbe20"],["assets/ajax/project3.html","40e46a7bb3bd22700314cda746eedfaa"],["assets/ajax/project4.html","162e96879fb857300f07cf294c30a565"],["assets/ajax/project5.html","76eece02f28ff2a51c077313a373cef2"],["assets/ajax/project6.html","2d59a7b645130fd6cbd894dd5ecd98a9"],["assets/ajax/project7.html","3da3fbec22fe0a4c8a35d18346b5daeb"],["assets/ajax/project8.html","7b16a8f646a66156a96432339eb33967"],["assets/ajax/project9.html","f9c7ae0f1f8abaf91b5db487787287e4"],["assets/bootstrap/css/bootstrap-theme.css","bfd7093b60e8242fe591a10ac9dca1a5"],["assets/bootstrap/css/bootstrap-theme.css.map","efe618bf82d169dd43641497b8a14d5e"],["assets/bootstrap/css/bootstrap-theme.min.css","9d7e7fda09c8c376d3214dcfe8803c25"],["assets/bootstrap/css/bootstrap-theme.min.css.map","0eda4826805223ac5212594f2a9833fa"],["assets/bootstrap/css/bootstrap.css","3bb1ee099477df92793d25bc5e475839"],["assets/bootstrap/css/bootstrap.css.map","de0851accc1c22aef63baff8cc299728"],["assets/bootstrap/css/bootstrap.min.css","5b167fa7b77476249df39470a4035480"],["assets/bootstrap/css/bootstrap.min.css.map","8e835b9ef1d29dfea779892844f2d7e9"],["assets/bootstrap/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["assets/bootstrap/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["assets/bootstrap/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["assets/bootstrap/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["assets/bootstrap/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["assets/css/animate.css","13da0a5e98b0eb3698db855d7f279d71"],["assets/css/animate.css.map","a2b65cad5e9872b3d4e7c94a8199a499"],["assets/css/flexslider.css","c6844eb4f69973db58d75e1885cafee5"],["assets/css/flexslider.css.map","fac45df465487fb5d652d06eb7f6dbc1"],["assets/css/magnific-popup.css","8dfd5ae2b9f8dfc26a65f55b0dbf06ad"],["assets/css/magnific-popup.css.map","86653a7684dc183bd4280d4ee7ccb700"],["assets/css/master-slider-custom.css","13926ef15362c5f21132a5d7be7aeccb"],["assets/css/master-slider-custom.css.map","7b10741db838484f9079b23061849305"],["assets/css/pricing.css","699df3b7dba92626d9ea6c1c71a2d543"],["assets/css/pricing.css.map","4f6d16290614608688914569181a0d3c"],["assets/css/style-background-slider.css","c01e05966018a07c4e27c9247fef26af"],["assets/css/style-background-slider.css.map","8caf9b8b5d68f18298f251531e847863"],["assets/css/style.css","46140271aa529175765bbd0824acdc79"],["assets/css/style.css.map","e83317660819f36223b5baf7b11c3500"],["assets/cubeportfolio/css/cubeportfolio.css","ab8d5791a94c5ee6032b83a9be8df7b1"],["assets/cubeportfolio/css/cubeportfolio.css.map","758a5f1a395874aa90c062b439f25175"],["assets/cubeportfolio/css/cubeportfolio.min.css","af5bf1d36ed3188c062d74cb5f8d5cca"],["assets/cubeportfolio/css/cubeportfolio.min.css.map","358acdbe4cc47be3d8d1046bf2fd5e88"],["assets/cubeportfolio/img/cbp-loading-popup.gif","fbc22aa777339fd7d9009439d61efb4a"],["assets/cubeportfolio/img/cbp-loading.gif","4b8b8ed40a76e266504d52113cc2e989"],["assets/cubeportfolio/img/cbp-sprite.png","d076f83086d6274f6cfa9b562a294a3f"],["assets/form/library/sendmail.php","23be4a25e026fff7ebc9c75a78426a76"],["assets/form/library/vender/php_mailer/PHPMailerAutoload.php","afa2b6a11650a9ea43052e9a35429747"],["assets/form/library/vender/php_mailer/class.phpmailer.php","44c30b031ff7adfa723ef60a8d95e82f"],["assets/form/library/vender/php_mailer/class.pop3.php","d3d8636f2392ae4406d6fe4de4edc56b"],["assets/form/library/vender/php_mailer/class.smtp.php","8d5ea195c7aa2dc3efb9f1a1ca042c1d"],["assets/form/library/vender/securimage/AHGBold.ttf","8dddfc4c12cf25d9913689b1969523d7"],["assets/form/library/vender/securimage/LICENSE.txt","85df47c8ceca5bed50232e34d521f2bc"],["assets/form/library/vender/securimage/README.FONT.txt","302de6df15ce519b756b5878575a1289"],["assets/form/library/vender/securimage/README.txt","2ce4fff7e563a7814a0b3c7916cf5266"],["assets/form/library/vender/securimage/WavFile.php","2323d9ab9bef747e33800c1b8b54ed16"],["assets/form/library/vender/securimage/backgrounds/bg3.jpg","9f7797343ee6fd84efc454b03eca3b98"],["assets/form/library/vender/securimage/backgrounds/bg4.jpg","dd6b807ddc6170ec83c7acef1c6556a5"],["assets/form/library/vender/securimage/backgrounds/bg5.jpg","5b55f6de21575e6118de4d6b5a91afe7"],["assets/form/library/vender/securimage/backgrounds/bg6.png","7007d0ef4d59c73a71c7dacfd62ef4e4"],["assets/form/library/vender/securimage/captcha.html","1b62468c3292a3766a14bd7bff7182a0"],["assets/form/library/vender/securimage/database/index.html","d41d8cd98f00b204e9800998ecf8427e"],["assets/form/library/vender/securimage/example_form.ajax.php","e18cf9650c0ca1de2fd87810e88e9b00"],["assets/form/library/vender/securimage/example_form.php","d10a28912846b5ea1a62d22028628f22"],["assets/form/library/vender/securimage/images/audio_icon.png","354e4ed559c258dfdd82583bf5832376"],["assets/form/library/vender/securimage/images/refresh.png","61faa21add7f5dd20fa4cbaab7293659"],["assets/form/library/vender/securimage/securimage.php","4229e91648e9fcfc60c763205a7ad5cf"],["assets/form/library/vender/securimage/securimage_play.php","b3abe61bf58a68c6c94b210368a2f9d6"],["assets/form/library/vender/securimage/securimage_play.swf","4421706c67b1dce5fcd06593dab34e7e"],["assets/form/library/vender/securimage/securimage_show.php","d1f31992d25d4a123f8b69fe620204b4"],["assets/form/library/vender/securimage/words/words.txt","da135251208b29a86188a9820da4f94e"],["assets/icons/css/ionicons.css","5592dc9aefda08019d1c27c5ec7faf76"],["assets/icons/css/ionicons.css.map","7bcf8e41de49a0903207ed222480c92b"],["assets/icons/css/ionicons.min.css","4eb63119510da3829b0c8375cf263cb7"],["assets/icons/css/ionicons.min.css.map","1f20c974a4755ccc371ff8890ba8dc3a"],["assets/icons/fonts/ionicons.eot","2c2ae068be3b089e0a5b59abb1831550"],["assets/icons/fonts/ionicons.svg","621bd386841f74e0053cb8e67f8a0604"],["assets/icons/fonts/ionicons.ttf","24712f6c47821394fba7942fbb52c3b2"],["assets/icons/fonts/ionicons.woff","05acfdb568b3df49ad31355b19495d4a"],["assets/images/arrows.png","c3898cc4438a6b991c7ced7ea3be39f5"],["assets/images/bg-1.jpg","9d7863793623654259346c9eabfe5fce"],["assets/images/bg-2.jpg","800a1990ea53ded8d03a6770018ed24e"],["assets/images/bg-3.jpg","45020daa3b109299847380ae563abcf3"],["assets/images/blog-1.jpg","ed55a2406207624f7d5b046292dc4ef9"],["assets/images/blog-2.jpg","9b2a4e0be74ae748262355b15deca940"],["assets/images/blog-3.jpg","7e18401df1220f03f3f355cbc577daf7"],["assets/images/cd-icon-small-arrow.svg","978355f974a709b33d8cdfe92bd03140"],["assets/images/drink_cover.jpg","ab036baa978c2bb7cfdf46ec4de7a2ff"],["assets/images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["assets/images/ipad.png","8e91c801428cf1e74e05dd90999143dd"],["assets/images/logo-dark.png","98be6ee2fcfaac1ac1b35c12bb412c8c"],["assets/images/logo-light.png","d515caf53ad2e476da11cfcec5a334ae"],["assets/images/map-bg.jpg","4d95f54f8a643e38e06285f66ccd75cf"],["assets/images/mas-1.jpg","309c8981ea785940d7686e8d60d5d228"],["assets/images/mas-2.jpg","2bd9ed95a5cb5ef0f839a9946a722728"],["assets/images/mas-3.jpg","2dcef93ac7133f2c593e263eb734f597"],["assets/images/pattern.png","9bf22b3d432daef67d2cd80002254179"],["assets/images/star-cover.jpg","0d35ff7a17ea0fb33ce026b7c9271c49"],["assets/images/team-1.jpg","72f7e051066b47805dbc37344ba0739e"],["assets/images/team-2.jpg","274ca952c48f4e2ea46ebc31b96263ed"],["assets/images/team-3.jpg","6a28f9f126cbbbd1c84904de33bdbd87"],["assets/images/team-4.jpg","71a0056c44dc8ac6c4c3ec072d6f5cd1"],["assets/images/touch/apple-touch-icon.png","7326f54bfe6776293f08b34c3a5fde7b"],["assets/images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["assets/images/touch/icon-128x128.png","7c46d686765c49b813ac5eb34fabf712"],["assets/images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["assets/images/typing-cover.jpg","81e66718a7c0dff9fae16838f24cc1ba"],["assets/images/work-1.jpg","8362fd68d3710b1b1a5a6fd9e8d8ac8a"],["assets/images/work-2.jpg","9583cb7b5e762e905a6b7c45757894ea"],["assets/images/work-3.jpg","9c8070e4f68a142bfbd0a8ca2272b186"],["assets/images/work-4.jpg","d0f12fb63bc5cb8418f4f794863d2874"],["assets/images/work-5.jpg","575056ca949c1d76e2d214c5850de7ff"],["assets/images/work-6.jpg","888419a167e706736177f7f413914b3d"],["assets/images/work-7.jpg","fb601eded5bba29f0531f994419bf50e"],["assets/images/work-8.jpg","f185e7a42f71d390534f6ce6aa368fea"],["assets/js/bootstrap-hover-dropdown.min.js","59cbdf6285f906442fe59392004c5cee"],["assets/js/bootstrap.min.js","e53c31e004fd17144c98f4bd0bbccc89"],["assets/js/jquery-migrate-1.2.1.min.js","ea4a72fa901161c2201c4aa50e6a6bd3"],["assets/js/jquery-migrate.min.js","f79427f055d1810fc8137dac03d704e6"],["assets/js/jquery.backstretch.min.js","a99badcd58bf680bb89ddb94e954d376"],["assets/js/jquery.cubeportfolio.min.js","5e0df1021a3d52e56bd2f9332577545d"],["assets/js/jquery.easing.1.3.min.js","320f82f38644a95f0e277794a36018d9"],["assets/js/jquery.flexslider-min.js","de5ba2532076f07a59d0885e51a3dcd9"],["assets/js/jquery.imagesloaded.min.js","c38681c1356975fba6d2ea4a9bcaa292"],["assets/js/jquery.magnific-popup.min.js","f31d9eeb04c2c45243ac24f1ef270db3"],["assets/js/jquery.min.js","a54dd9adaa050a51a75dab4ef0b0b53d"],["assets/js/jquery.sticky.min.js","c6216890cdca1853e74ed9eddc6dffcd"],["assets/js/jquery.themepunch.revolution.min.js","2a09dd7a1d283a8e14bf284cf6354a14"],["assets/js/jquery.themepunch.tools.min.js","b1e27b975e0214ed4583944375557f81"],["assets/js/masterslider.min.js","7711ca3d0791d9d1d94d9fc9dc68344d"],["assets/js/moderniz.min.js","27d647e370ac83d1f5470e8ffb0f9bb7"],["assets/js/pace.min.js","9fc31bce643062eed2624d3a873090ed"],["assets/js/parallax.min.js","fd4e7373fed27cc0687b28116520f3b2"],["assets/js/scripts.min.js","fef445db87085471c31cba16cbd4e347"],["assets/js/tweetie.min.js","e2d781744b38e9730156dbbeada9d1df"],["assets/js/waypoints.min.js","68026b86eb0a75c096d854de80b200c8"],["assets/js/wow.min.js","4eeafdc71b812b652fa0e38819c981b0"],["assets/mailchimp/MCAPI.class.php","bc941ee460818007df929d5b7f6b68e2"],["assets/mailchimp/config.inc.php","c4f98718cd1b569b9407c732ca41a99c"],["assets/mailchimp/index.html","4dedebf4518fe85439fa46203b2eead8"],["assets/mailchimp/process-subscribe.php","7bd21797237d12e7a28a3fb4bd1f8259"],["assets/main.css","a7edb573e755e112fa61f84af00880bc"],["assets/main.css.map","e9329d5286ee7a9dcd6b61ca4b193cf3"],["assets/master-slider/skins/black-1/black-skin-1-retina.png","9b70954998b986be6895c3151a3cb6ea"],["assets/master-slider/skins/black-1/black-skin-1.png","d178f53efeaefaf048bad5e3c87f243d"],["assets/master-slider/skins/black-1/style.css","49cdd8a4b17aaecfb39e3dd5054b3d14"],["assets/master-slider/skins/black-1/style.css.map","c98e9228c1f0ff2a9bfe8b89ae6abf25"],["assets/master-slider/skins/black-2/black-skin-2-retina.png","f9b1258dcf6daaf01cde61ac04854444"],["assets/master-slider/skins/black-2/black-skin-2.png","4935feffb4ad53beff09b95654f9b10f"],["assets/master-slider/skins/black-2/style.css","350d8916d8347dcf3c2d98dac610bb8f"],["assets/master-slider/skins/black-2/style.css.map","74d7d798444bde34556a4086a48846c6"],["assets/master-slider/skins/contrast/contrast-skin-retina.png","39574691a3644bb61cc5c8491dbb468c"],["assets/master-slider/skins/contrast/contrast-skin.png","a10c6e63ca866705020722cb0ff1bd96"],["assets/master-slider/skins/contrast/style.css","d7901d99cbd526d94323888d58a209db"],["assets/master-slider/skins/contrast/style.css.map","812d18e53eda0e69998ca408f67863d0"],["assets/master-slider/skins/default/light-skin-1-retina.png","976ade8997ba19bd02642377ba58f520"],["assets/master-slider/skins/default/light-skin-1.png","f0711cad176ce82622ee227595303c4a"],["assets/master-slider/skins/default/style.css","e0ea1c0a96c00a28025d17111f3f80ee"],["assets/master-slider/skins/default/style.css.map","5264e907da1f98b82c55cd09802fd837"],["assets/master-slider/skins/light-2/light-skin-2-retina.png","61204fd8ff3b26518baaeec516840b21"],["assets/master-slider/skins/light-2/light-skin-2.png","6c2e9b230e137f9f4c63efe98c1b638a"],["assets/master-slider/skins/light-2/style.css","57dece592d9c4639ee38e682dded8104"],["assets/master-slider/skins/light-2/style.css.map","bf4c17cd6319cec734b3fe51b243f521"],["assets/master-slider/skins/light-3/light-skin-3-retina.png","f667898ea5cb6f09e529904b84669e72"],["assets/master-slider/skins/light-3/light-skin-3.png","764188285eef754b876d33c9cee2bcc4"],["assets/master-slider/skins/light-3/style.css","8f5248d218d30dd244c0ae6b9b995c82"],["assets/master-slider/skins/light-3/style.css.map","984b5888a42da3f40605d601b1715c45"],["assets/master-slider/skins/light-4/light-skin-4-retina.png","93e53e0e8cd16c69b10b61084fb4ea2c"],["assets/master-slider/skins/light-4/light-skin-4.png","e6da74c865a8781dab309f5d6e6339f7"],["assets/master-slider/skins/light-4/style.css","62fb71efbb808bce6eae8e1370be2b6f"],["assets/master-slider/skins/light-4/style.css.map","94fa50bd051af17b6a2b30bceb84c16f"],["assets/master-slider/skins/light-5/light-skin-5-retina.png","8303842e1b459b29008a3e1ae595d124"],["assets/master-slider/skins/light-5/light-skin-5.png","bc429107004eada87d6a512b5b5d1c64"],["assets/master-slider/skins/light-5/style.css","305ea01e80764879af869231f6d87641"],["assets/master-slider/skins/light-5/style.css.map","be792bc761fcdd35caa7a3c6cc1be8d0"],["assets/master-slider/skins/light-6/light-skin-6-retina.png","addfa591290d5e052f152ce0d18541ee"],["assets/master-slider/skins/light-6/light-skin-6.png","1eaf485f56a946b27e338480b92f4f27"],["assets/master-slider/skins/light-6/style.css","a56e9dc03fefc8e19471ac618582f757"],["assets/master-slider/skins/light-6/style.css.map","98d8114c20d162e754a77a2ad9790dfb"],["assets/master-slider/skins/metro/metro-skin-retina.png","df3aaa92268f4c7b8473540f78e5bfde"],["assets/master-slider/skins/metro/metro-skin.png","cee1816617d12661e297eec8b5a064c1"],["assets/master-slider/skins/metro/style.css","6b117a6384568a9eb675996f7efe4265"],["assets/master-slider/skins/metro/style.css.map","d12735fdcfc1b254b4b2606a2a874394"],["assets/master-slider/style/blank.gif","f837aa60b6fe83458f790db60d529fc9"],["assets/master-slider/style/flat-phone-land.png","2f4f3b186bba229a0a0493d8b06ce13b"],["assets/master-slider/style/grab.cur","b06c243f534d9c5461d16528156cd5a8"],["assets/master-slider/style/grab.png","c82d4a6bf8f38c6abdc6b3055ae7e17d"],["assets/master-slider/style/grabbing.cur","a8c874b93b3d848f39a71260c57e3863"],["assets/master-slider/style/grabbing.png","ab31513462871dc591384c4d158ad560"],["assets/master-slider/style/loading-1-dark.gif","fc991f2369cb3bb0571e6b599f729722"],["assets/master-slider/style/loading-1-light.gif","2522c2301e8a06e3bda5e68e7102cbb1"],["assets/master-slider/style/loading-1.gif","c2c94f96e3c815b6cb15aa88cbca7a9f"],["assets/master-slider/style/loading-2-dark.gif","bc93d2df25b7554da19ceaf9ff0ee67f"],["assets/master-slider/style/loading-2-light.gif","4bd62de33c4c6446beebcb8aa20249d2"],["assets/master-slider/style/loading-2.gif","214f3c5ef3de8b01b2fe67da6ccfc7e7"],["assets/master-slider/style/masterslider.css","07957eebd8ad0afba99ac377a6b4df80"],["assets/master-slider/style/masterslider.css.map","3065a021b42c5ab9b5039d0637953ec9"],["assets/master-slider/style/ms-phone-style.css","7449372b13020dc3240b617bd707d3f0"],["assets/master-slider/style/ms-phone-style.css.map","8701d5d096629b636fdfc2b8b993c869"],["assets/master-slider/style/skin.png","b8441a9b02e3354121ab260cf70ce411"],["assets/master-slider/style/video-close-btn.png","2fad20bdee650136e94da131e2386587"],["assets/rs-plugin/assets/arrow_large_left.png","6d2d479d643263a75a95b4cf9f33032c"],["assets/rs-plugin/assets/arrow_large_right.png","df39e233d9c5c60855293b09fc77cd86"],["assets/rs-plugin/assets/arrow_left.png","56458574dfbdc004d385499c968c516b"],["assets/rs-plugin/assets/arrow_left2.png","904f4a773b15b429b665a6c6e79ff104"],["assets/rs-plugin/assets/arrow_right.png","528f50a273ef6fa047f7376ca321d6d7"],["assets/rs-plugin/assets/arrow_right2.png","81d17d06ca481b690b3a116ba7a7f25b"],["assets/rs-plugin/assets/arrowleft.png","312c31a080e0c3ed0bbdfb953bd8cc70"],["assets/rs-plugin/assets/arrowright.png","9a98951eeb045dc3dfb9cdd3c68dc87a"],["assets/rs-plugin/assets/arrows.psd","dfb33be3fd58d5fa6efef7b9c2a13c4f"],["assets/rs-plugin/assets/black50.png","607039adaa52c099043af7b1a5d359b6"],["assets/rs-plugin/assets/boxed_bgtile.png","850c2108a300513e45f03c7dc9326546"],["assets/rs-plugin/assets/bullet.png","09f2d370b116ede485daa168eca058b5"],["assets/rs-plugin/assets/bullet_boxed.png","39cf708d6731424fa1569907676c2cbd"],["assets/rs-plugin/assets/bullets.png","198fa59d622688f36a1f760ea00115ef"],["assets/rs-plugin/assets/bullets.psd","d0327d58ae0d9f8bdd836184c8fe739f"],["assets/rs-plugin/assets/bullets2.png","8a6714867943152949276189668d6125"],["assets/rs-plugin/assets/coloredbg.png","403b2ccc022f9f264a31dec760bd55b9"],["assets/rs-plugin/assets/grain.png","6bce366e2713a84aa4297003b804de8f"],["assets/rs-plugin/assets/gridtile.png","3888ecc03086ee849014409a07864ba6"],["assets/rs-plugin/assets/gridtile_3x3.png","fd995e40c1acad690d12d245d48663ae"],["assets/rs-plugin/assets/gridtile_3x3_white.png","dccf4b08b92c4480debf11b5cbb2cdf4"],["assets/rs-plugin/assets/gridtile_white.png","ab9ca7a1eb5d4a6de6f2ffc8ccfd105c"],["assets/rs-plugin/assets/large_left.png","f7dd4aee8ebb28b7c88509f3e43383fb"],["assets/rs-plugin/assets/large_right.png","167358b175dce48971d149a3973c8ffe"],["assets/rs-plugin/assets/loader.gif","3fd27945212db12ca133d3e634953af6"],["assets/rs-plugin/assets/loader2.gif","75ee3dd2201bb7577f94b128ffb399ee"],["assets/rs-plugin/assets/navigdots.png","2915fa321fa0ac4d3d594542eca0eb2d"],["assets/rs-plugin/assets/navigdots_bgtile.png","6dd796a92f8ff07b64e06e7915d22a38"],["assets/rs-plugin/assets/shadow1.png","6558580a951ef6d685451f8272d6f2ec"],["assets/rs-plugin/assets/shadow2.png","c2a6ff678855127a164a64fb08eed1a3"],["assets/rs-plugin/assets/shadow3.png","2ceabc7593430639c7c11d7d266d5f7b"],["assets/rs-plugin/assets/small_arrows.psd","3da76f1ee501fd5db2e8c33eb91863fd"],["assets/rs-plugin/assets/small_left.png","e9afdf79eeef5d86b520cdbe73d91fcd"],["assets/rs-plugin/assets/small_left_boxed.png","f750ed4e89c4391ba1fb5d532a441467"],["assets/rs-plugin/assets/small_right.png","7c415d24f90c1d673b25bf0b1f2cf468"],["assets/rs-plugin/assets/small_right_boxed.png","1609b70a465389bfe1944d108d55354c"],["assets/rs-plugin/assets/timer.png","0cbab8b24884682ef93daad1c66cba1e"],["assets/rs-plugin/assets/timerdot.png","4befdd0dbf996d971a7cb70fe62e36fa"],["assets/rs-plugin/assets/transparent.jpg","391ded01873db90453e899775f910f8c"],["assets/rs-plugin/assets/white50.png","14e0213a1a5921bd9b9de997c1da4c53"],["assets/rs-plugin/css/settings-ie8.css","319c1ff4012691bcf47bb42b1090fb90"],["assets/rs-plugin/css/settings-ie8.css.map","9498ebd08cb382d4f54416c969567b89"],["assets/rs-plugin/css/settings.css","6ad8c7d73fb08b464e61a34e54c1f105"],["assets/rs-plugin/css/settings.css.map","9c5956fab250950930e18c33819d739a"],["assets/rs-plugin/font/revicons.eot","2feb69ccb596730c72920c6ba3e37ef8"],["assets/rs-plugin/font/revicons.svg","5ad4f0d6e99dd65aba77cbef6e17c25c"],["assets/rs-plugin/font/revicons.ttf","17629a5dfe0d3c3946cf401e1895f091"],["assets/rs-plugin/font/revicons.woff","04eb8fc57f27498e5ae37523e3bfb2c7"],["assets/rs-plugin/images/decor_inside.png","6c809a6151b431c305162101d2683724"],["assets/rs-plugin/images/decor_inside_white.png","daabaceea43f2491ebd614d315d55fb8"],["assets/rs-plugin/images/decor_testimonial.png","1a5870fb2db17787ec5049fbd05789ba"],["assets/rs-plugin/images/gradient/g30.png","9cdf24e5e370571e56e2974ebdb2bce8"],["assets/rs-plugin/images/gradient/g40.png","2108e8ded803878342488b6fd89c78ff"],["assets/twit-api/config.php","ae9f512f5b13e7213adad5f7e28230a0"],["assets/twit-api/tweet.php","e609fdc519075a645494b1560662bb6d"],["assets/twit-api/twitteroauth/OAuth.php","d7b40029f9d61580663a04727d166156"],["assets/twit-api/twitteroauth/twitteroauth.php","c329e25121783a292524acaea23bb28d"],["assets/video-background/background.css","567bdb36a04ef57992ca8cf71e1f2d5d"],["assets/video-background/background.css.map","1aebe0a99ea8effae9ffd5ad37d68ae7"],["blog-single.html","7d03bea7f323dabafbe62083c2d1553a"],["images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["images/touch/apple-touch-icon.png","7326f54bfe6776293f08b34c3a5fde7b"],["images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["images/touch/icon-128x128.png","7c46d686765c49b813ac5eb34fabf712"],["images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["index.html","84cdab3056ea1c07974d501bcfdf4237"],["manifest.json","40ee631ea01c982ecafa19956834bd53"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","42dd9073ba0a0c8e0ae2230432870678"]];
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

