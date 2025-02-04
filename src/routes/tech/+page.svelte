<!-- SCRIPT -->
<script>
	// import assets
	import case_image from '$lib/assets/tech/case.png';
	import fans_image from '$lib/assets/tech/fans.png';
	import motherboard_image from '$lib/assets/tech/motherboard.png';
	import cpu_image from '$lib/assets/tech/cpu.png';
	import cpu_cooler_image from '$lib/assets/tech/cpu_cooler.png';
	import ram_image from '$lib/assets/tech/ram.png';
	import gpu_image from '$lib/assets/tech/gpu.png';
	import ssd_image from '$lib/assets/tech/ssd.png';
	import psu_image from '$lib/assets/tech/psu.png';
	import main_monitor_image from '$lib/assets/tech/main_monitor.png';
	import second_monitor_image from '$lib/assets/tech/second_monitor.png';
	import monitor_holder_image from '$lib/assets/tech/monitor_holder.png';
	import led_light_strip_image from '$lib/assets/tech/led_light_strip.png';
    import keyboard_image from '$lib/assets/tech/keyboard.png';
    import keycaps_image from '$lib/assets/tech/keycaps.png';
    import switches_image from '$lib/assets/tech/switches.png';
    import mouse_image from '$lib/assets/tech/mouse.png';
	import mouse_pad_image from '$lib/assets/tech/mouse_pad.png';
	import microphone_image from '$lib/assets/tech/microphone.png';
	import headphone_image from '$lib/assets/tech/headphone.png';
	import usb_hub_image from '$lib/assets/tech/usb_hub.png';
	import phone_image from '$lib/assets/tech/phone.png';
	import earphone_image from '$lib/assets/tech/earphone.png';
	import rpi_image from '$lib/assets/tech/rpi.png';
	import rpi_cooler_image from '$lib/assets/tech/rpi_cooler.png';
	import rpi_hdd_image from '$lib/assets/tech/rpi_hdd.png';
	import hdd_reduction_image from '$lib/assets/tech/hdd_reduction.png';
	// import libs
	import locales from "$lib/locales.json";
	// import stores
	import { lang } from "$lib/stores/user_store.js";

    // TODO: {locales[$lang]["13"]}
</script>

<!-- TECH ROOT -->
<div class="tech_root">
    <!-- LINE TEXT -->
    <div class="line_text">{locales[$lang]["14"]}</div>
    <!-- TECH CONTAINER -->
    <div class="tech_container">
        <!-- CASE -->
        <div>
            <img alt="Case" src={case_image} />
            <a target="_blank" href="https://www.coolermaster.com/en-global/products/masterbox-q300l/">{locales[$lang]["15"]}</a>
        </div>
        <!-- FANS -->
        <div>
            <img alt="Fan's" src={fans_image} />
            <a target="_blank" href="https://www.arctic.de/en/P12-PWM/ACFAN00119A">{locales[$lang]["16"]}</a>
        </div>
        <!-- MOTHERBOARD -->
        <div>
            <img alt="Motherboard" src={motherboard_image} />
            <a target="_blank" href="https://www.asus.com/motherboards-components/motherboards/prime/prime-a320m-k/">{locales[$lang]["17"]}</a>
        </div>
        <!-- CPU -->
        <div>
            <img alt="CPU" src={cpu_image} />
            <a target="_blank" href="https://www.techpowerup.com/cpu-specs/ryzen-3-1200.c1899">{locales[$lang]["18"]}</a>
        </div>
        <!-- CPU COOLER -->
        <div>
            <img alt="CPU cooler" src={cpu_cooler_image} />
            <a target="_blank" href="https://www.arctic.de/en/Alpine-23/ACALP00035A">{locales[$lang]["19"]}</a>
        </div>
        <!-- RAM -->
        <div>
            <img alt="RAM" src={ram_image} />
            <a target="_blank" href="https://www.kingston.com/en/memory/gaming/kingston-fury-beast-ddr4-memory?speed=2666mt%2Fs&total%20(kit)%20capacity=16gb&kit=kit%20of%202&dram%20density=8gbit">{locales[$lang]["20"]}</a>
        </div>
        <!-- GPU -->
        <div>
            <img alt="GPU" src={gpu_image} />
            <a target="_blank" href="https://www.msi.com/Graphics-Card/GeForce-GTX-1060-ARMOR-6G-OCV1/Specification">{locales[$lang]["21"]}</a>
        </div>
        <!-- SSD -->
        <div>
            <img alt="SSD" src={ssd_image} />
            <a target="_blank" href="https://www.gigabyte.com/SSD/GIGABYTE-Gen3-2500E-SSD-500GB">{locales[$lang]["22"]}</a>
        </div>
        <!-- PSU -->
        <div>
            <img alt="PSU" src={psu_image} />
            <a target="_blank" href="https://www.silverstonetek.com/en/product/info/power-supplies/ST60F-ES230/">{locales[$lang]["23"]}</a>
        </div>
    </div>

    <!-- LINE TEXT -->
    <div class="line_text">{locales[$lang]["24"]}</div>
    <!-- TECH CONTAINER -->
    <div class="tech_container">
        <!-- MAIN MONITOR -->
        <div>
            <img alt="Main monitor" src={main_monitor_image} />
            <a target="_blank" href="https://www.msi.com/Business-Productivity-Monitor/PRO-MP225">{locales[$lang]["25"]}</a>
        </div>
        <!-- SECOND MONITOR -->
        <div>
            <img alt="Second monitor" src={second_monitor_image} />
            <a target="_blank" href="https://www.amazon.com/Dell-UltraSharp-Widescreen-Performance-DisplayPort/dp/B00302DNZ4">{locales[$lang]["26"]}</a>
        </div>
        <!-- MONITOR HOLDER -->
        <div>
            <img alt="Monitor holder" src={monitor_holder_image} />
            <a target="_blank" href="https://drziaky-a-stojany-na-tv-a-monitory.heureka.sk/stell-sos-1720/#prehlad/">{locales[$lang]["27"]}</a>
        </div>
        <!-- LED LIGHT STRIP -->
        <div>
            <img alt="LED light strip" src={led_light_strip_image} />
            <a target="_blank" href="https://www.sonoff.sk/kategoria/svetla-a-ziarovky/sonoff-l2-lite-pasik-5m-interierovy-rgb-wifi-led-pasik/">{locales[$lang]["28"]}</a>
        </div>
        <!-- KEYBOARD -->
        <div>
            <img alt="Keyboard" src={keyboard_image} />
            <a target="_blank" href="https://allegro.cz/nabidka/mechanicka-klavesnice-chimera-wireless-16889209861?utm_medium=detail_redirect&utm_source=czc_detail&utm_campaign=kompaktni_klavesnice">{locales[$lang]["29"]}</a>
        </div>
        <!-- KEYCAPS -->
        <div>
            <img alt="Keycaps" src={keycaps_image} />
            <a target="_blank" href="https://darkproject.eu/product/87-fuji?model=DPO87_GSH_FUJI_ANSI">{locales[$lang]["30"]}</a>
        </div>
        <!-- SWITCHES -->
        <div>
            <img alt="Switches" src={switches_image} />
            <a target="_blank" href="https://www.gateron.co/products/gateron-phantom-switch-set">{locales[$lang]["31"]}</a>
        </div>
        <!-- MOUSE -->
        <div>
            <img alt="Mouse" src={mouse_image} />
            <a target="_blank" href="https://www.msi.com/Gaming-Gear/CLUTCH-DM07">{locales[$lang]["32"]}</a>
        </div>
        <!-- MOUSE PAD -->
        <div>
            <img alt="Mouse pad" src={mouse_pad_image} />
            <a target="_blank" href="https://hyperx.com/products/hyperx-pulsefire-mat-gaming-mouse-pad-l?variant=42135502749853">{locales[$lang]["33"]}</a>
        </div>
        <!-- MICROPHONE -->
        <div>
            <img alt="Microphone" src={microphone_image} />
            <a target="_blank" href="https://www.trust.com/en/product/23791-gxt-212-mico-usb-microphone">{locales[$lang]["34"]}</a>
        </div>
        <!-- HEADPHONE -->
        <div>
            <img alt="Headphone" src={headphone_image} />
            <a target="_blank" href="https://steelseries.com/gaming-headsets/arctis-nova-1x">{locales[$lang]["35"]}</a>
        </div>
        <!-- USB HUB -->
        <div>
            <img alt="USB hub" src={usb_hub_image} />
            <a target="_blank" href="https://axagon.eu/sk/produkty/hue-p1a">{locales[$lang]["36"]}</a>
        </div>
    </div>

    <!-- LINE TEXT -->
    <div class="line_text">{locales[$lang]["37"]}</div>
    <!-- TECH CONTAINER -->
    <div class="tech_container">
        <!-- PHONE -->
        <div>
            <img alt="Phone" src={phone_image} />
            <a target="_blank" href="https://mobilne-telefony.heureka.sk/oppo-reno7-lite-5g-8gb-128gb">{locales[$lang]["38"]}</a>
        </div>
        <!-- EARPHONE -->
        <div>
            <img alt="Earphone" src={earphone_image} />
            <a target="_blank" href="https://cmf.tech/en-sk/pages/buds-pro">{locales[$lang]["39"]}</a>
        </div>
    </div>

    <!-- LINE TEXT -->
    <div class="line_text">{locales[$lang]["40"]}</div>
    <!-- TECH CONTAINER -->
    <div class="tech_container">
        <!-- RPI -->
        <div>
            <img alt="RPi" src={rpi_image} />
            <a target="_blank" href="https://www.raspberrypi.com/products/raspberry-pi-4-model-b/">{locales[$lang]["41"]}</a>
        </div>
        <!-- RPI COOLER -->
        <div>
            <img alt="RPi cooler" src={rpi_cooler_image} />
            <a target="_blank" href="https://shop.pimoroni.com/products/aluminium-heatsink-case-for-raspberry-pi-4?variant=29430673178707">{locales[$lang]["42"]}</a>
        </div>
        <!-- RPI HDD -->
        <div>
            <img alt="RPi hdd" src={rpi_hdd_image} />
            <a target="_blank" href="https://www.ebay.com/itm/224900061136">{locales[$lang]["43"]}</a>
        </div>
        <!-- RPI REDUCTION -->
        <div>
            <img alt="RPi reduction" src={hdd_reduction_image} />
            <a target="_blank" href="https://axagon.eu/sk/produkty/adsa-fp2">{locales[$lang]["44"]}</a>
        </div>
    </div>
</div>