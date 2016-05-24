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
var PrecacheConfig = [["404.html","7ad8c1600a2a65ebdd99ae65590288c3"],["assets/ajax-masonry/loadMore.html","06233208819caafb4378a5549b8beefe"],["assets/ajax-masonry/project1.html","25e1a2f8b693bb3d4d84bfd562d17174"],["assets/ajax-masonry/project2.html","b96f20ea3dee03e2fa867a2f0b5d8a6e"],["assets/ajax/loadMore-fullwidth.html","fcb65807896ac25f4d99b1804a7d5f62"],["assets/ajax/loadMore.html","4fcca6b366c82961b142c59a5c33600b"],["assets/ajax/project1.html","744dbe87a7be9d5b4637a4c48948aaf8"],["assets/ajax/project2.html","d529a31d163bae12ebbfd50f65906464"],["assets/ajax/project3.html","fda83529ca378809a061b271dc043ab8"],["assets/bootstrap/css/bootstrap-theme.css","c64209bf9e910e265ef199072c4d0440"],["assets/bootstrap/css/bootstrap-theme.css.map","fd7eba222295a8c9ffa1d2df573eaca6"],["assets/bootstrap/css/bootstrap-theme.min.css","5f29d454afd1802fa827a9c91cc5f8e5"],["assets/bootstrap/css/bootstrap-theme.min.css.map","6567ea3e3cfbdefe4dd7b253e3562b65"],["assets/bootstrap/css/bootstrap.css","3595a86b0a8600449cbe8107a2a66de1"],["assets/bootstrap/css/bootstrap.css.map","8a0a65cc8afd00ba8aa3db14c1df681d"],["assets/bootstrap/css/bootstrap.min.css","a10a2b93a47e9e9f400db60d197ec762"],["assets/bootstrap/css/bootstrap.min.css.map","f2b31e7974689c08c541b76d102e7ec0"],["assets/bootstrap/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["assets/bootstrap/fonts/glyphicons-halflings-regular.svg","f721466883998665b87923b92dea655b"],["assets/bootstrap/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["assets/bootstrap/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["assets/bootstrap/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["assets/css/animate.css","35d82fcced769c373e2327c880c48a68"],["assets/css/animate.css.map","c950aec1fb7185caf7de48ff32fe05a7"],["assets/css/flexslider.css","c6844eb4f69973db58d75e1885cafee5"],["assets/css/flexslider.css.map","2d3e0ec5905715636b4bda3d8377f856"],["assets/css/magnific-popup.css","8dfd5ae2b9f8dfc26a65f55b0dbf06ad"],["assets/css/magnific-popup.css.map","4118f2897022f37798b2da8093eae227"],["assets/css/master-slider-custom.css","13926ef15362c5f21132a5d7be7aeccb"],["assets/css/master-slider-custom.css.map","7505178082bda07d42014b045a3450ca"],["assets/css/pricing.css","699df3b7dba92626d9ea6c1c71a2d543"],["assets/css/pricing.css.map","6f8815f911e6e3054cd8a14af63f4763"],["assets/css/style-background-slider.css","c01e05966018a07c4e27c9247fef26af"],["assets/css/style-background-slider.css.map","8caf9b8b5d68f18298f251531e847863"],["assets/css/style.css","2c0e3348f6e12cdf108ca4d42fc2310f"],["assets/css/style.css.map","e275d74eb09de6e4bc16116432560d41"],["assets/cubeportfolio/css/cubeportfolio.css","72e165211e1116bdd87ec00fb4ef9f24"],["assets/cubeportfolio/css/cubeportfolio.css.map","8e100ad1e4fa99b2c87a1e0d6f39b2b0"],["assets/cubeportfolio/css/cubeportfolio.min.css","1ad36099002f0c69b27f6a22ae10dad3"],["assets/cubeportfolio/css/cubeportfolio.min.css.map","121e87cf39b8998e48fb3c701d0f2b62"],["assets/cubeportfolio/img/cbp-loading-popup.gif","fbc22aa777339fd7d9009439d61efb4a"],["assets/cubeportfolio/img/cbp-loading.gif","4b8b8ed40a76e266504d52113cc2e989"],["assets/cubeportfolio/img/cbp-sprite.png","d076f83086d6274f6cfa9b562a294a3f"],["assets/form/library/sendmail.php","6e6cbf1c7a98569a634bf7cf99291719"],["assets/form/library/vender/php_mailer/PHPMailerAutoload.php","f8fc963f492e1672f05e4d84764a1209"],["assets/form/library/vender/php_mailer/class.phpmailer.php","d6bf5d75254fa72516718c9d0b147668"],["assets/form/library/vender/php_mailer/class.pop3.php","af0ac01a3ac5d8f7e1a4f9aa8bca18f8"],["assets/form/library/vender/php_mailer/class.smtp.php","a208e4984a1817aa10ce34aebbea1e8d"],["assets/form/library/vender/securimage/AHGBold.ttf","8dddfc4c12cf25d9913689b1969523d7"],["assets/form/library/vender/securimage/LICENSE.txt","c397a97e4a802701ed6ec7e15f6b412e"],["assets/form/library/vender/securimage/README.FONT.txt","5d80be0f7f0fa67ecdf878ee08777a0e"],["assets/form/library/vender/securimage/README.txt","814a1e1694e0d51d7c75946214b2c2fd"],["assets/form/library/vender/securimage/WavFile.php","2d7bc23a2d3beeb3d973e748d85b4ae8"],["assets/form/library/vender/securimage/backgrounds/bg3.jpg","9f7797343ee6fd84efc454b03eca3b98"],["assets/form/library/vender/securimage/backgrounds/bg4.jpg","dd6b807ddc6170ec83c7acef1c6556a5"],["assets/form/library/vender/securimage/backgrounds/bg5.jpg","5b55f6de21575e6118de4d6b5a91afe7"],["assets/form/library/vender/securimage/backgrounds/bg6.png","7007d0ef4d59c73a71c7dacfd62ef4e4"],["assets/form/library/vender/securimage/captcha.html","1b62468c3292a3766a14bd7bff7182a0"],["assets/form/library/vender/securimage/database/index.html","d41d8cd98f00b204e9800998ecf8427e"],["assets/form/library/vender/securimage/example_form.ajax.php","73b87a7101df0659240076d4ae4fc3ab"],["assets/form/library/vender/securimage/example_form.php","6cbb0447930b56b8a4295e9689a95114"],["assets/form/library/vender/securimage/images/audio_icon.png","354e4ed559c258dfdd82583bf5832376"],["assets/form/library/vender/securimage/images/refresh.png","61faa21add7f5dd20fa4cbaab7293659"],["assets/form/library/vender/securimage/securimage.php","b2af68412303b596cf80b6cd31308a0b"],["assets/form/library/vender/securimage/securimage_play.php","929f4333f488087e64a7f923feb1b6ad"],["assets/form/library/vender/securimage/securimage_play.swf","4421706c67b1dce5fcd06593dab34e7e"],["assets/form/library/vender/securimage/securimage_show.php","d76a04f72a2ab1f5d535396540a57491"],["assets/form/library/vender/securimage/words/words.txt","77f4be347b16ae94888e28f9091a25b0"],["assets/icons/css/ionicons.css","6bf297b76daa7946f3170b5d0fff1a7e"],["assets/icons/css/ionicons.css.map","8b882a0adb3c52c33f92159c78865bd1"],["assets/icons/css/ionicons.min.css","c474e2d578addb522292bcefb0fa2dea"],["assets/icons/css/ionicons.min.css.map","6a47aaca21107dd811da0222bf37ffab"],["assets/icons/fonts/ionicons.eot","2c2ae068be3b089e0a5b59abb1831550"],["assets/icons/fonts/ionicons.svg","c037dbbc0e6790f30e824a50010df5fb"],["assets/icons/fonts/ionicons.ttf","24712f6c47821394fba7942fbb52c3b2"],["assets/icons/fonts/ionicons.woff","05acfdb568b3df49ad31355b19495d4a"],["assets/images/ELL.jpg","a85b5d50708796daabe8a15be3f39e61"],["assets/images/ELL2.jpg","7736c071613a632f4f5871039c98788a"],["assets/images/Edu.png","1f32eac0f395df67362383bd94ec546b"],["assets/images/Fin.jpg","f0c2aafe7b1b772414098bf084c3c47c"],["assets/images/Fina.jpg","c98b23ab07a148325f33d4623590269c"],["assets/images/Robo.jpg","e93f128fc2d6b9e65639f26275ae2c3a"],["assets/images/Robo1.jpg","95de917d7bc5dbf9dc4d1c8d15ef5f0b"],["assets/images/Robot.jpg","621c1be1cddbca36b359d0b0e54b0c61"],["assets/images/arrows.png","c3898cc4438a6b991c7ced7ea3be39f5"],["assets/images/bg-1.jpg","9d7863793623654259346c9eabfe5fce"],["assets/images/bg-2.jpg","800a1990ea53ded8d03a6770018ed24e"],["assets/images/bg-3.jpg","45020daa3b109299847380ae563abcf3"],["assets/images/blog-1.jpg","ed55a2406207624f7d5b046292dc4ef9"],["assets/images/blog-2.jpg","9b2a4e0be74ae748262355b15deca940"],["assets/images/blog-3.jpg","7e18401df1220f03f3f355cbc577daf7"],["assets/images/cd-icon-small-arrow.svg","978355f974a709b33d8cdfe92bd03140"],["assets/images/cover 1.jpg","0a8cd3135e1798af6522f6a57e5954c7"],["assets/images/drink_cover.jpg","ab036baa978c2bb7cfdf46ec4de7a2ff"],["assets/images/edudefine-png-title.png","345f239a75e82eb7820f08de96616955"],["assets/images/edulogo.png","dbcdb573ad2ecee93f59b43927aa4ab1"],["assets/images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["assets/images/ipad.png","8e91c801428cf1e74e05dd90999143dd"],["assets/images/logo-dark.png","98be6ee2fcfaac1ac1b35c12bb412c8c"],["assets/images/logo-light.png","d515caf53ad2e476da11cfcec5a334ae"],["assets/images/logo.png","d28c5d2844549a7a758403c5954d1ca2"],["assets/images/map-bg.jpg","4d95f54f8a643e38e06285f66ccd75cf"],["assets/images/mas-1.jpg","309c8981ea785940d7686e8d60d5d228"],["assets/images/mas-2.jpg","2bd9ed95a5cb5ef0f839a9946a722728"],["assets/images/mas-3.jpg","2dcef93ac7133f2c593e263eb734f597"],["assets/images/pattern.png","9bf22b3d432daef67d2cd80002254179"],["assets/images/redefining png title.png","717a54170dedb2d057f5732976429983"],["assets/images/star-cover.jpg","0d35ff7a17ea0fb33ce026b7c9271c49"],["assets/images/team-1.jpg","72f7e051066b47805dbc37344ba0739e"],["assets/images/team-2.jpg","274ca952c48f4e2ea46ebc31b96263ed"],["assets/images/team-3.jpg","6a28f9f126cbbbd1c84904de33bdbd87"],["assets/images/team-4.jpg","71a0056c44dc8ac6c4c3ec072d6f5cd1"],["assets/images/touch/apple-touch-icon.png","7326f54bfe6776293f08b34c3a5fde7b"],["assets/images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["assets/images/touch/icon-128x128.png","7c46d686765c49b813ac5eb34fabf712"],["assets/images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["assets/images/typing-cover.jpg","81e66718a7c0dff9fae16838f24cc1ba"],["assets/images/work-1.jpg","8362fd68d3710b1b1a5a6fd9e8d8ac8a"],["assets/images/work-2.jpg","9583cb7b5e762e905a6b7c45757894ea"],["assets/images/work-3.jpg","9c8070e4f68a142bfbd0a8ca2272b186"],["assets/images/work-4.jpg","d0f12fb63bc5cb8418f4f794863d2874"],["assets/images/work-5.jpg","575056ca949c1d76e2d214c5850de7ff"],["assets/images/work-6.jpg","888419a167e706736177f7f413914b3d"],["assets/images/work-7.jpg","fb601eded5bba29f0531f994419bf50e"],["assets/images/work-8.jpg","f185e7a42f71d390534f6ce6aa368fea"],["assets/js/bootstrap-hover-dropdown.min.js","03866ca2e00add7ff61a94366988c7ed"],["assets/js/bootstrap.min.js","0c8fd38a012c4ccf23b1dfb48aca8269"],["assets/js/jquery-migrate-1.2.1.min.js","aacee57ccb331786b45f2b4d7fb3d11b"],["assets/js/jquery-migrate.min.js","d4b39b518739354c6b72e6ec69edccdd"],["assets/js/jquery.backstretch.min.js","5399760e6890858d03f17139362cd236"],["assets/js/jquery.cubeportfolio.min.js","e2a0d2edf05d5fc893da02476fefef8c"],["assets/js/jquery.easing.1.3.min.js","320f82f38644a95f0e277794a36018d9"],["assets/js/jquery.flexslider-min.js","dc781fe27379c7684eafbe1aa5f993bf"],["assets/js/jquery.imagesloaded.min.js","3357042c93274ea024377d4e9ac7abe1"],["assets/js/jquery.magnific-popup.min.js","5ca64683eb52f46cfbe19463cc21067f"],["assets/js/jquery.min.js","bf3212b82bf37a374595224ca6f3dccd"],["assets/js/jquery.sticky.min.js","c6216890cdca1853e74ed9eddc6dffcd"],["assets/js/jquery.themepunch.revolution.min.js","8ea9f13a079dac1d6a77839e24dc0fc7"],["assets/js/jquery.themepunch.tools.min.js","e55312995c04ae60dedb71d07487d411"],["assets/js/masterslider.min.js","fec03bff5c407db47a60d24d6c5b80bd"],["assets/js/moderniz.min.js","b35340c1c6023ecdd17379b71b12be0d"],["assets/js/pace.min.js","dba76500909eb5999edc3521e0b308df"],["assets/js/parallax.min.js","8198847f8accce82cb268072c64cde28"],["assets/js/scripts.min.js","f94cbed48f2da586ff6ed88e2e017b15"],["assets/js/tweetie.min.js","e2d781744b38e9730156dbbeada9d1df"],["assets/js/waypoints.min.js","a07ee8ef33e7520010de70d312b9dd44"],["assets/js/wow.min.js","b22c279778ae63777e4278f34078b138"],["assets/mailchimp/MCAPI.class.php","e07a9beb98d5dd9951bf8e0376fce8f4"],["assets/mailchimp/config.inc.php","c4f98718cd1b569b9407c732ca41a99c"],["assets/mailchimp/index.html","4dedebf4518fe85439fa46203b2eead8"],["assets/mailchimp/process-subscribe.php","7bd21797237d12e7a28a3fb4bd1f8259"],["assets/main.css","c05843e974b893b1fff7b7830949c121"],["assets/main.css.map","bc5ec7018c3529cb231787bfa5d286d3"],["assets/master-slider/skins/black-1/black-skin-1-retina.png","9b70954998b986be6895c3151a3cb6ea"],["assets/master-slider/skins/black-1/black-skin-1.png","d178f53efeaefaf048bad5e3c87f243d"],["assets/master-slider/skins/black-1/style.css","49cdd8a4b17aaecfb39e3dd5054b3d14"],["assets/master-slider/skins/black-1/style.css.map","ac035ce4b671657a6cc0f6197c9f6ea8"],["assets/master-slider/skins/black-2/black-skin-2-retina.png","f9b1258dcf6daaf01cde61ac04854444"],["assets/master-slider/skins/black-2/black-skin-2.png","4935feffb4ad53beff09b95654f9b10f"],["assets/master-slider/skins/black-2/style.css","350d8916d8347dcf3c2d98dac610bb8f"],["assets/master-slider/skins/black-2/style.css.map","17cbb2900943958532bd0d17122d95cd"],["assets/master-slider/skins/contrast/contrast-skin-retina.png","39574691a3644bb61cc5c8491dbb468c"],["assets/master-slider/skins/contrast/contrast-skin.png","a10c6e63ca866705020722cb0ff1bd96"],["assets/master-slider/skins/contrast/style.css","d7901d99cbd526d94323888d58a209db"],["assets/master-slider/skins/contrast/style.css.map","23c9fed83b4b4773838db219b33c3d3a"],["assets/master-slider/skins/default/light-skin-1-retina.png","976ade8997ba19bd02642377ba58f520"],["assets/master-slider/skins/default/light-skin-1.png","f0711cad176ce82622ee227595303c4a"],["assets/master-slider/skins/default/style.css","e0ea1c0a96c00a28025d17111f3f80ee"],["assets/master-slider/skins/default/style.css.map","c044998bdad17fcda082f0945d5861bc"],["assets/master-slider/skins/light-2/light-skin-2-retina.png","61204fd8ff3b26518baaeec516840b21"],["assets/master-slider/skins/light-2/light-skin-2.png","6c2e9b230e137f9f4c63efe98c1b638a"],["assets/master-slider/skins/light-2/style.css","57dece592d9c4639ee38e682dded8104"],["assets/master-slider/skins/light-2/style.css.map","1b7b5a61ab8c6128e22dff972d8a0811"],["assets/master-slider/skins/light-3/light-skin-3-retina.png","f667898ea5cb6f09e529904b84669e72"],["assets/master-slider/skins/light-3/light-skin-3.png","764188285eef754b876d33c9cee2bcc4"],["assets/master-slider/skins/light-3/style.css","8f5248d218d30dd244c0ae6b9b995c82"],["assets/master-slider/skins/light-3/style.css.map","18357710310c434e8b3b48db6533b629"],["assets/master-slider/skins/light-4/light-skin-4-retina.png","93e53e0e8cd16c69b10b61084fb4ea2c"],["assets/master-slider/skins/light-4/light-skin-4.png","e6da74c865a8781dab309f5d6e6339f7"],["assets/master-slider/skins/light-4/style.css","62fb71efbb808bce6eae8e1370be2b6f"],["assets/master-slider/skins/light-4/style.css.map","b52ab59eeaaae6b75077aa24dae0a66a"],["assets/master-slider/skins/light-5/light-skin-5-retina.png","8303842e1b459b29008a3e1ae595d124"],["assets/master-slider/skins/light-5/light-skin-5.png","bc429107004eada87d6a512b5b5d1c64"],["assets/master-slider/skins/light-5/style.css","305ea01e80764879af869231f6d87641"],["assets/master-slider/skins/light-5/style.css.map","547b564d63fb1b464a383c95ccfe052e"],["assets/master-slider/skins/light-6/light-skin-6-retina.png","addfa591290d5e052f152ce0d18541ee"],["assets/master-slider/skins/light-6/light-skin-6.png","1eaf485f56a946b27e338480b92f4f27"],["assets/master-slider/skins/light-6/style.css","a56e9dc03fefc8e19471ac618582f757"],["assets/master-slider/skins/light-6/style.css.map","e226388db5134bbb9ef3f782feaa5e9d"],["assets/master-slider/skins/metro/metro-skin-retina.png","df3aaa92268f4c7b8473540f78e5bfde"],["assets/master-slider/skins/metro/metro-skin.png","cee1816617d12661e297eec8b5a064c1"],["assets/master-slider/skins/metro/style.css","6b117a6384568a9eb675996f7efe4265"],["assets/master-slider/skins/metro/style.css.map","c6de1a83afac8f28bb9e140902fa48ec"],["assets/master-slider/style/blank.gif","f837aa60b6fe83458f790db60d529fc9"],["assets/master-slider/style/flat-phone-land.png","2f4f3b186bba229a0a0493d8b06ce13b"],["assets/master-slider/style/grab.cur","b06c243f534d9c5461d16528156cd5a8"],["assets/master-slider/style/grab.png","c82d4a6bf8f38c6abdc6b3055ae7e17d"],["assets/master-slider/style/grabbing.cur","a8c874b93b3d848f39a71260c57e3863"],["assets/master-slider/style/grabbing.png","ab31513462871dc591384c4d158ad560"],["assets/master-slider/style/loading-1-dark.gif","fc991f2369cb3bb0571e6b599f729722"],["assets/master-slider/style/loading-1-light.gif","2522c2301e8a06e3bda5e68e7102cbb1"],["assets/master-slider/style/loading-1.gif","c2c94f96e3c815b6cb15aa88cbca7a9f"],["assets/master-slider/style/loading-2-dark.gif","bc93d2df25b7554da19ceaf9ff0ee67f"],["assets/master-slider/style/loading-2-light.gif","4bd62de33c4c6446beebcb8aa20249d2"],["assets/master-slider/style/loading-2.gif","214f3c5ef3de8b01b2fe67da6ccfc7e7"],["assets/master-slider/style/masterslider.css","e393753f2ce90e478e7d7159ce2c186f"],["assets/master-slider/style/masterslider.css.map","c3f5032ceb79ee68d7898ddecfd1172f"],["assets/master-slider/style/ms-phone-style.css","7449372b13020dc3240b617bd707d3f0"],["assets/master-slider/style/ms-phone-style.css.map","30514823899448c9a74b2d2730410935"],["assets/master-slider/style/skin.png","b8441a9b02e3354121ab260cf70ce411"],["assets/master-slider/style/video-close-btn.png","2fad20bdee650136e94da131e2386587"],["assets/rs-plugin/assets/arrow_large_left.png","6d2d479d643263a75a95b4cf9f33032c"],["assets/rs-plugin/assets/arrow_large_right.png","df39e233d9c5c60855293b09fc77cd86"],["assets/rs-plugin/assets/arrow_left.png","56458574dfbdc004d385499c968c516b"],["assets/rs-plugin/assets/arrow_left2.png","904f4a773b15b429b665a6c6e79ff104"],["assets/rs-plugin/assets/arrow_right.png","528f50a273ef6fa047f7376ca321d6d7"],["assets/rs-plugin/assets/arrow_right2.png","81d17d06ca481b690b3a116ba7a7f25b"],["assets/rs-plugin/assets/arrowleft.png","312c31a080e0c3ed0bbdfb953bd8cc70"],["assets/rs-plugin/assets/arrowright.png","9a98951eeb045dc3dfb9cdd3c68dc87a"],["assets/rs-plugin/assets/arrows.psd","dfb33be3fd58d5fa6efef7b9c2a13c4f"],["assets/rs-plugin/assets/black50.png","607039adaa52c099043af7b1a5d359b6"],["assets/rs-plugin/assets/boxed_bgtile.png","850c2108a300513e45f03c7dc9326546"],["assets/rs-plugin/assets/bullet.png","09f2d370b116ede485daa168eca058b5"],["assets/rs-plugin/assets/bullet_boxed.png","39cf708d6731424fa1569907676c2cbd"],["assets/rs-plugin/assets/bullets.png","198fa59d622688f36a1f760ea00115ef"],["assets/rs-plugin/assets/bullets.psd","d0327d58ae0d9f8bdd836184c8fe739f"],["assets/rs-plugin/assets/bullets2.png","8a6714867943152949276189668d6125"],["assets/rs-plugin/assets/coloredbg.png","403b2ccc022f9f264a31dec760bd55b9"],["assets/rs-plugin/assets/grain.png","6bce366e2713a84aa4297003b804de8f"],["assets/rs-plugin/assets/gridtile.png","3888ecc03086ee849014409a07864ba6"],["assets/rs-plugin/assets/gridtile_3x3.png","fd995e40c1acad690d12d245d48663ae"],["assets/rs-plugin/assets/gridtile_3x3_white.png","dccf4b08b92c4480debf11b5cbb2cdf4"],["assets/rs-plugin/assets/gridtile_white.png","ab9ca7a1eb5d4a6de6f2ffc8ccfd105c"],["assets/rs-plugin/assets/large_left.png","f7dd4aee8ebb28b7c88509f3e43383fb"],["assets/rs-plugin/assets/large_right.png","167358b175dce48971d149a3973c8ffe"],["assets/rs-plugin/assets/loader.gif","3fd27945212db12ca133d3e634953af6"],["assets/rs-plugin/assets/loader2.gif","75ee3dd2201bb7577f94b128ffb399ee"],["assets/rs-plugin/assets/navigdots.png","2915fa321fa0ac4d3d594542eca0eb2d"],["assets/rs-plugin/assets/navigdots_bgtile.png","6dd796a92f8ff07b64e06e7915d22a38"],["assets/rs-plugin/assets/shadow1.png","6558580a951ef6d685451f8272d6f2ec"],["assets/rs-plugin/assets/shadow2.png","c2a6ff678855127a164a64fb08eed1a3"],["assets/rs-plugin/assets/shadow3.png","2ceabc7593430639c7c11d7d266d5f7b"],["assets/rs-plugin/assets/small_arrows.psd","3da76f1ee501fd5db2e8c33eb91863fd"],["assets/rs-plugin/assets/small_left.png","e9afdf79eeef5d86b520cdbe73d91fcd"],["assets/rs-plugin/assets/small_left_boxed.png","f750ed4e89c4391ba1fb5d532a441467"],["assets/rs-plugin/assets/small_right.png","7c415d24f90c1d673b25bf0b1f2cf468"],["assets/rs-plugin/assets/small_right_boxed.png","1609b70a465389bfe1944d108d55354c"],["assets/rs-plugin/assets/timer.png","0cbab8b24884682ef93daad1c66cba1e"],["assets/rs-plugin/assets/timerdot.png","4befdd0dbf996d971a7cb70fe62e36fa"],["assets/rs-plugin/assets/transparent.jpg","391ded01873db90453e899775f910f8c"],["assets/rs-plugin/assets/white50.png","14e0213a1a5921bd9b9de997c1da4c53"],["assets/rs-plugin/css/settings-ie8.css","319c1ff4012691bcf47bb42b1090fb90"],["assets/rs-plugin/css/settings-ie8.css.map","de40e7eacd45649907607d5fbcf194e7"],["assets/rs-plugin/css/settings.css","6ad8c7d73fb08b464e61a34e54c1f105"],["assets/rs-plugin/css/settings.css.map","40e51dbecd4879ca68ce0a02559619f7"],["assets/rs-plugin/font/revicons.eot","2feb69ccb596730c72920c6ba3e37ef8"],["assets/rs-plugin/font/revicons.svg","ac38240b01066dbfdb6b548b8bee04d3"],["assets/rs-plugin/font/revicons.ttf","17629a5dfe0d3c3946cf401e1895f091"],["assets/rs-plugin/font/revicons.woff","04eb8fc57f27498e5ae37523e3bfb2c7"],["assets/rs-plugin/images/decor_inside.png","6c809a6151b431c305162101d2683724"],["assets/rs-plugin/images/decor_inside_white.png","daabaceea43f2491ebd614d315d55fb8"],["assets/rs-plugin/images/decor_testimonial.png","1a5870fb2db17787ec5049fbd05789ba"],["assets/rs-plugin/images/gradient/g30.png","9cdf24e5e370571e56e2974ebdb2bce8"],["assets/rs-plugin/images/gradient/g40.png","2108e8ded803878342488b6fd89c78ff"],["assets/twit-api/config.php","0122e23d8368358995277da8112f78a7"],["assets/twit-api/tweet.php","ed0a779be7bd85dac76a34a3e3a21b4e"],["assets/twit-api/twitteroauth/OAuth.php","2deacb144dfc9eb2dd8b45b7a47d61dd"],["assets/twit-api/twitteroauth/twitteroauth.php","af23534fe9ef3419ada554ee634f9250"],["assets/video-background/background.css","567bdb36a04ef57992ca8cf71e1f2d5d"],["assets/video-background/background.css.map","47b15be25c4e6d376351ef7887fdc37e"],["blog-single.html","843c49d96dd0d7352a07c7b5714ebac0"],["images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["images/touch/apple-touch-icon.png","7326f54bfe6776293f08b34c3a5fde7b"],["images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["images/touch/icon-128x128.png","7c46d686765c49b813ac5eb34fabf712"],["images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["index.html","7678985e793336f9072a7f772b487beb"],["manifest.json","65a07f106e8bec91aed8b5b8272f00ef"],["scripts/sw/runtime-caching.js","4f3881ee12be74267853341468418ccb"],["scripts/sw/sw-toolbox.js","42dd9073ba0a0c8e0ae2230432870678"]];
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

