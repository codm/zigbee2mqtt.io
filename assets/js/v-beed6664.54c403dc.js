"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[29296],{613420:(e,a,r)=>{r.r(a),r.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-beed6664","path":"/guide/adapters/emberznet.html","title":"EmberZNet adapters (Silicon Labs)","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":3,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":3,"title":"Firmware flashing","slug":"firmware-flashing","link":"#firmware-flashing","children":[]},{"level":2,"title":"Recommended","slug":"recommended","link":"#recommended","children":[{"level":3,"title":"USB","slug":"usb","link":"#usb","children":[]},{"level":3,"title":"Network (TCP)","slug":"network-tcp","link":"#network-tcp","children":[]},{"level":3,"title":"Hybrid (USB + Network)","slug":"hybrid-usb-network","link":"#hybrid-usb-network","children":[]},{"level":3,"title":"Hub","slug":"hub","link":"#hub","children":[]},{"level":3,"title":"Custom","slug":"custom","link":"#custom","children":[]}]},{"level":2,"title":"Not recommended","slug":"not-recommended","link":"#not-recommended","children":[]},{"level":2,"title":"Logging specific to this stack","slug":"logging-specific-to-this-stack","link":"#logging-specific-to-this-stack","children":[{"level":3,"title":"info level","slug":"info-level","link":"#info-level","children":[]},{"level":3,"title":"warning level","slug":"warning-level","link":"#warning-level","children":[]},{"level":3,"title":"error level","slug":"error-level","link":"#error-level","children":[]}]}],"git":{"updatedTime":1715286044000},"filePathRelative":"guide/adapters/emberznet.md"}')},678140:(e,a,r)=>{r.r(a),r.d(a,{default:()=>ve});var n=r(166252);const t=r.p+"assets/img/skyconnect_isometric.6ba6d724.jpg",l=r.p+"assets/img/smlight-slzb-07.8851ef5a.jpg",s=r.p+"assets/img/tubezb-mgm24-poe.44f1c168.jpg",i=r.p+"assets/img/smlight-slzb-06mg24.a6e336b6.jpg",o=r.p+"assets/img/yellow.b2cc4373.jpg",d=(0,n.uE)('<h1 id="emberznet-adapters-silicon-labs" tabindex="-1"><a class="header-anchor" href="#emberznet-adapters-silicon-labs" aria-hidden="true">#</a> EmberZNet adapters (Silicon Labs)</h1><p>Currently supported firmware version: 7.4.0, 7.4.1</p><p>Firmware release notes: https://www.silabs.com/developers/zigbee-emberznet?tab=documentation</p><p><em>Multiprotocol is not currently supported due to the various issues associated with it. The recommended alternative to establish multiple networks is to use one adapter per protocol.</em></p><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">serial</span><span class="token punctuation">:</span>\n  <span class="token key atrule">adapter</span><span class="token punctuation">:</span> ember\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',6),c={class:"custom-container tip"},u=(0,n._)("p",{class:"custom-container-title"},"TIP",-1),p={href:"https://github.com/darkxst/silabs-firmware-builder/tree/ember-nohw/firmware_builds/",target:"_blank",rel:"noopener noreferrer"},h=(0,n.uE)('<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">serial</span><span class="token punctuation">:</span>\n  <span class="token key atrule">rtscts</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',1),m=(0,n._)("div",{class:"custom-container tip"},[(0,n._)("p",{class:"custom-container-title"},"TIP"),(0,n._)("p",null,[(0,n.Uk)("The use of "),(0,n._)("code",null,"adapter: ezsp"),(0,n.Uk)(" is now deprecated. See https://github.com/Koenkk/zigbee2mqtt/discussions/21462")])],-1),A=(0,n._)("h3",{id:"firmware-flashing",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#firmware-flashing","aria-hidden":"true"},"#"),(0,n.Uk)(" Firmware flashing")],-1),g={href:"https://github.com/darkxst/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://darkxst.github.io/silabs-firmware-builder/",target:"_blank",rel:"noopener noreferrer"},f=(0,n._)("li",null,"Nabu Casa Home Assistant: https://skyconnect.home-assistant.io/firmware-update/",-1),k=(0,n._)("li",null,"SMLight: https://smlight.tech/flasher/",-1),w={href:"https://github.com/NabuCasa/universal-silabs-flasher",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.silabs.com/developers/simplicity-studio",target:"_blank",rel:"noopener noreferrer"},v={href:"https://docs.silabs.com/simplicity-studio-5-users-guide/latest/",target:"_blank",rel:"noopener noreferrer"},y=(0,n._)("li",null,'Some Ethernet adapters support flashing Zigbee firmware over their own web-interface. In this case you do not need any external software and hardware. Just go to the webinterface and press "Update Zigbee firmware". Please refer to the manual of your particular Zigbee adapter for this functionality.',-1),R=(0,n._)("h2",{id:"recommended",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#recommended","aria-hidden":"true"},"#"),(0,n.Uk)(" Recommended")],-1),B=(0,n._)("h3",{id:"usb",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#usb","aria-hidden":"true"},"#"),(0,n.Uk)(" USB")],-1),U=(0,n._)("summary",null,"Sonoff ZBDongle-E (V2 model, EFR32MG21)",-1),I=(0,n._)("p",null,"With external antenna.",-1),_={href:"https://sonoff.tech/product/gateway-and-sensors/sonoff-zigbee-3-0-usb-dongle-plus-e/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://sonoff.tech/product-review/how-to-use-sonoff-dongle-plus-on-home-assistant-how-to-flash-firmware/",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://sonoff.tech/wp-content/uploads/2022/08/SONOFF-Zigbee-3.0-USB-dongle-plus-firmware-flashing-.pdf",target:"_blank",rel:"noopener noreferrer"},x={href:"https://itead.cc/product/zigbee-3-0-usb-dongle/",target:"_blank",rel:"noopener noreferrer"},T=(0,n._)("img",{src:"data:image/jpeg;base64,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",width:"200"},null,-1),C=(0,n.uE)('<summary>Nabu Casa Home Assistant SkyConnect (EFR32MG21)</summary><p>With integrated antenna and hardware flow control support.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">serial</span><span class="token punctuation">:</span>\n  <span class="token key atrule">rtscts</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',3),S={href:"https://www.home-assistant.io/skyconnect",target:"_blank",rel:"noopener noreferrer"},W={href:"https://github.com/NabuCasa/silabs-firmware",target:"_blank",rel:"noopener noreferrer"},M={href:"https://skyconnect.home-assistant.io/",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://www.home-assistant.io/skyconnect",target:"_blank",rel:"noopener noreferrer"},D=(0,n._)("img",{src:t,width:"200"},null,-1),L=(0,n.uE)('<summary>SMLIGHT SLZB-07 (EFR32MG21)</summary><p>With external antenna and hardware flow control support.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">serial</span><span class="token punctuation">:</span>\n  <span class="token key atrule">rtscts</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',3),z={href:"https://smlight.tech/product/slzb-07/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://smartlight.me/smart-home-devices/zigbee-devices/slzb-07-zigbee-usb-adapter-en",target:"_blank",rel:"noopener noreferrer"},O={href:"https://www.aliexpress.com/item/1005006273914143.html",target:"_blank",rel:"noopener noreferrer"},j=(0,n._)("br",null,null,-1),q={href:"https://shop.dialedin.com.au/products/smlight-slzb-07-usb-zigbee-adapter",target:"_blank",rel:"noopener noreferrer"},H={href:"https://www.hobbyelectronica.nl/product/slzb-07-zigbee-coordinator-usb/",target:"_blank",rel:"noopener noreferrer"},J={href:"https://www.domadoo.fr/fr/interface-domotique/7044-smlight-dongle-usb-zigbee-efr32mg21-cp2102n-soc-antenne-3db-zigbee2mqtt-et-zha.html",target:"_blank",rel:"noopener noreferrer"},G={href:"https://pcblab.io/szukaj?controller=search&s=slzb",target:"_blank",rel:"noopener noreferrer"},V={href:"https://www.amazon.com/LOAMLIN-SMLIGHT-SLZB-07-Zigbee-Coordinator/dp/B0CNVBCCR3",target:"_blank",rel:"noopener noreferrer"},F=(0,n._)("img",{src:l,width:"200"},null,-1),X=(0,n._)("h3",{id:"network-tcp",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#network-tcp","aria-hidden":"true"},"#"),(0,n.Uk)(" Network (TCP)")],-1),Y=(0,n._)("summary",null,"TubeZB EFR32 MGM24 POE (MGM240PB32VNN)",-1),K=(0,n._)("p",null,"With external antenna.",-1),$={href:"https://tubeszb.com/product/efr32-mgm24-poe-coordinator/",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://tubeszb.com/product/efr32-mgm24-poe-coordinator/",target:"_blank",rel:"noopener noreferrer"},ae=(0,n._)("img",{src:s,width:"200"},null,-1),re=(0,n._)("h3",{id:"hybrid-usb-network",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#hybrid-usb-network","aria-hidden":"true"},"#"),(0,n.Uk)(" Hybrid (USB + Network)")],-1),ne=(0,n._)("summary",null,"SMLIGHT SLZB-06mg24 (EFR32MG24)",-1),te=(0,n._)("p",null,"With external antenna.",-1),le={href:"https://smlight.tech/product/slzb-06mg24/",target:"_blank",rel:"noopener noreferrer"},se=(0,n._)("li",null,"[Buy] UPCOMING",-1),ie=(0,n._)("img",{src:i,width:"200"},null,-1),oe=(0,n._)("h3",{id:"hub",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#hub","aria-hidden":"true"},"#"),(0,n.Uk)(" Hub")],-1),de=(0,n.uE)('<summary>Nabu Casa Home Assistant Yellow (MGM210P)</summary><p>With integrated antenna and hardware flow control support.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">serial</span><span class="token punctuation">:</span>\n  <span class="token key atrule">rtscts</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',3),ce={href:"https://www.home-assistant.io/yellow",target:"_blank",rel:"noopener noreferrer"},ue={href:"https://github.com/NabuCasa/silabs-firmware",target:"_blank",rel:"noopener noreferrer"},pe={href:"https://skyconnect.home-assistant.io/",target:"_blank",rel:"noopener noreferrer"},he={href:"https://www.home-assistant.io/yellow",target:"_blank",rel:"noopener noreferrer"},me=(0,n._)("img",{src:o,width:"200"},null,-1),Ae=(0,n._)("h3",{id:"custom",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#custom","aria-hidden":"true"},"#"),(0,n.Uk)(" Custom")],-1),ge=(0,n._)("h2",{id:"not-recommended",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#not-recommended","aria-hidden":"true"},"#"),(0,n.Uk)(" Not recommended")],-1),be=(0,n._)("summary",null,"All Series 0/1 based-devices",-1),fe=(0,n._)("p",null,"Older hardware.",-1),ke={href:"https://www.silabs.com/documents/public/release-notes/emberznet-release-notes-7.4.3.0.pdf",target:"_blank",rel:"noopener noreferrer"},we=(0,n.uE)('<details><summary>Easyiot ZB-GW04 (v1.1, v1.2)</summary><p>Low-resources hardware.</p></details><details><summary>SMLIGHT SLZB-06m (EFR32MG21)</summary><p>Has had firmware issues (some still pending). Recommended to look for the more recent SMLIGHT SLZB-06mg24.</p></details><h2 id="logging-specific-to-this-stack" tabindex="-1"><a class="header-anchor" href="#logging-specific-to-this-stack" aria-hidden="true">#</a> Logging specific to this stack</h2><h3 id="info-level" tabindex="-1"><a class="header-anchor" href="#info-level" aria-hidden="true">#</a> <code>info</code> level</h3><p>The start and stop sequences describe the steps taken to get Zigbee2MQTT running with <code>ember</code> in more details. This should help to locate potential start and stop problems.</p><p>Stack/Network status changes (up/down, channel change, open/close from Permit Join, etc).</p><h3 id="warning-level" tabindex="-1"><a class="header-anchor" href="#warning-level" aria-hidden="true">#</a> <code>warning</code> level</h3><p><em>Node descriptor reports device is only compliant to revision</em>: Device identified as having an older Zigbee revision. These can be the source of problems, especially if <code>pre-21</code>.</p><p><em>[EzspConfigId] Failed to SET</em>: Usually when the coordinator has lower memory than others. In-firmware value will be used instead.</p><p><em>An ID conflict was detected</em>: Two devices cannot have the same ID on the same network. The involved devices are kicked off the network then should rejoin (may need to re-pair them if not).</p><p><em>Network/Route error</em>: These are accompanied by a status that describes in more details the source of the error. A few of these over time is expected (or on Zigbee2MQTT start), too many, too often, is indicative of a problem in your network.</p><p><em>NOT READY - Signaling NCP</em>: <code>ember</code> driver is temporarily overloaded. The coordinator is made aware and processing is deferred for a short period.</p><h3 id="error-level" tabindex="-1"><a class="header-anchor" href="#error-level" aria-hidden="true">#</a> <code>error</code> level</h3><p>Mismatching EZSP version on start. <code>ember</code> currently requires a firmware with EZSP v13 (EmberZNet firmware 7.4.x).</p><p>Mismatching backup version when restoring on start. <code>ember</code> currently only supports EZSP v12 and above backups (can be identified by opening the <code>coordinator_backup.json</code> file).</p><p>Failed delivery of a message. The target device could not be reached. There can be several causes for this, the rest of the logs should help identify which.</p><p>Failed request. Message should be self-explanatory, and give a <code>status</code> indicating the reason of the failure.</p><p>NCP Fatal Error. The coordinator failed (the reason should be given in the message). Zigbee2MQTT will attempt to reset it and resume communication. If unsuccessful, Zigbee2MQTT will be stopped completely and the system&#39;s watchdog (if any) will attempt to restart it.</p>',18),Ee={},ve=(0,r(983744).Z)(Ee,[["render",function(e,a){const r=(0,n.up)("RouterLink"),t=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[d,(0,n._)("p",null,[(0,n.Wm)(r,{to:"/guide/configuration/adapter-settings.html"},{default:(0,n.w5)((()=>[(0,n.Uk)("Other settings")])),_:1})]),(0,n._)("div",c,[u,(0,n._)("p",null,[(0,n.Uk)("If you are experiencing issues with your adapter and it has hardware flow control support (check list below), try to flash a "),(0,n._)("a",p,[(0,n.Uk)("firmware with hardware flow control disabled"),(0,n.Wm)(t)]),(0,n.Uk)(" and use the following setting instead:")]),h]),m,A,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Uk)("Web-based "),(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Uk)("Multi-devices by "),(0,n._)("a",g,[(0,n.Uk)("@darkxst"),(0,n.Wm)(t)]),(0,n.Uk)(": "),(0,n._)("a",b,[(0,n.Uk)("Silabs Firmware Flasher"),(0,n.Wm)(t)])]),f,k])]),(0,n._)("li",null,[(0,n.Uk)("Command-line based: "),(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Uk)("Multi-devices by Nabu Casa: "),(0,n._)("a",w,[(0,n.Uk)("Universal Silicon Labs Flasher"),(0,n.Wm)(t)]),(0,n.Uk)(" (also available via Home Assistant add-on)")])])]),(0,n._)("li",null,[(0,n.Uk)("Other: "),(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Uk)("Silicon Labs "),(0,n._)("a",E,[(0,n.Uk)("Simplicity Studio"),(0,n.Wm)(t)]),(0,n.Uk)(' included "Flash Programmer" ('),(0,n._)("a",v,[(0,n.Uk)("instructions"),(0,n.Wm)(t)]),(0,n.Uk)(")")])])]),y]),R,B,(0,n._)("details",null,[U,I,(0,n._)("p",null,[(0,n._)("strong",null,[(0,n.Uk)('This section is about the "ZBDongle-E", for "ZBDongle-P" see '),(0,n.Wm)(r,{to:"/guide/adapters/zstack.html"},{default:(0,n.w5)((()=>[(0,n.Uk)("zStack")])),_:1}),(0,n.Uk)(".")])]),(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",_,[(0,n.Uk)("Product Page"),(0,n.Wm)(t)])]),(0,n._)("li",null,[(0,n._)("a",P,[(0,n.Uk)("Coordinator firmware"),(0,n.Wm)(t)])]),(0,n._)("li",null,[(0,n._)("a",Q,[(0,n.Uk)("Flashing"),(0,n.Wm)(t)])]),(0,n._)("li",null,[(0,n._)("a",x,[(0,n.Uk)("Buy"),(0,n.Wm)(t)])])]),T]),(0,n._)("details",null,[C,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",S,[(0,n.Uk)("Product page"),(0,n.Wm)(t)])]),(0,n._)("li",null,[(0,n._)("a",W,[(0,n.Uk)("Coordinator firmware"),(0,n.Wm)(t)])]),(0,n._)("li",null,[(0,n._)("a",M,[(0,n.Uk)("Flashing"),(0,n.Wm)(t)])]),(0,n._)("li",null,[(0,n._)("a",Z,[(0,n.Uk)("Buy"),(0,n.Wm)(t)])])]),D]),(0,n._)("details",null,[L,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",z,[(0,n.Uk)("Product page"),(0,n.Wm)(t)])]),(0,n._)("li",null,[(0,n.Uk)("Buy: "),(0,n._)("a",N,[(0,n.Uk)("Official Store - Worldwide"),(0,n.Wm)(t)]),(0,n.Uk)(", "),(0,n._)("a",O,[(0,n.Uk)("Aliexpress - Worldwide"),(0,n.Wm)(t)]),(0,n.Uk)("."),j,(0,n.Uk)(" Local fast delivery: "),(0,n._)("a",q,[(0,n.Uk)("Australia"),(0,n.Wm)(t)]),(0,n.Uk)(", "),(0,n._)("a",H,[(0,n.Uk)("Austria, Belgium, Germany, Netherlands"),(0,n.Wm)(t)]),(0,n.Uk)(", "),(0,n._)("a",J,[(0,n.Uk)("France"),(0,n.Wm)(t)]),(0,n.Uk)(", "),(0,n._)("a",G,[(0,n.Uk)("Poland"),(0,n.Wm)(t)]),(0,n.Uk)(", "),(0,n._)("a",V,[(0,n.Uk)("US Amazon"),(0,n.Wm)(t)])])]),F]),X,(0,n._)("details",null,[Y,K,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",$,[(0,n.Uk)("Product page"),(0,n.Wm)(t)])]),(0,n._)("li",null,[(0,n._)("a",ee,[(0,n.Uk)("Buy"),(0,n.Wm)(t)])])]),ae]),re,(0,n._)("details",null,[ne,te,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",le,[(0,n.Uk)("Product page"),(0,n.Wm)(t)])]),se]),ie]),oe,(0,n._)("details",null,[de,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",ce,[(0,n.Uk)("Product page"),(0,n.Wm)(t)])]),(0,n._)("li",null,[(0,n._)("a",ue,[(0,n.Uk)("Coordinator firmware"),(0,n.Wm)(t)])]),(0,n._)("li",null,[(0,n._)("a",pe,[(0,n.Uk)("Flashing"),(0,n.Wm)(t)])]),(0,n._)("li",null,[(0,n._)("a",he,[(0,n.Uk)("Buy"),(0,n.Wm)(t)])])]),me]),Ae,ge,(0,n._)("details",null,[be,fe,(0,n._)("p",null,[(0,n.Uk)("See "),(0,n._)("a",ke,[(0,n.Uk)("Silicon Labs announcement"),(0,n.Wm)(t)]),(0,n.Uk)(".")])]),we])}]])}}]);