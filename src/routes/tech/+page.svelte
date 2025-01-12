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
	import main_monitor_image from '$lib/assets/tech/main_monitor.jpg';
	import second_monitor_image from '$lib/assets/tech/second_monitor.png';
	import monitor_holder_image from '$lib/assets/tech/monitor_holder.png';
	import led_light_strip_image from '$lib/assets/tech/led_light_strip.png';
	import keyboard_image from '$lib/assets/tech/keyboard.png';
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
</script>

<!-- TODO: ADD OF DISTRIBUTOR LINKS -->

<div class="tech_root">
    <div class="tech_pc">
        <div class="text_from_lines">My PC</div>
        <div>
            <a target="_blank" href="https://www.alza.sk/cooler-master-masterbox-q300l-d5263683.htm"><img alt="Case" src={case_image} /> Case</a>
            <a target="_blank" href="https://www.alza.sk/arctic-p12-pwm-120-mm-d5524594.htm"><img alt="Fan's" src={fans_image} /> Fan's</a>
            <a target="_blank" href="https://www.alza.sk/asus-prime-a320m-k-d5089813.htm"><img alt="Motherboard" src={motherboard_image} /> Motherboard</a>
            <a target="_blank" href="https://www.alza.sk/amd-ryzen-3-1200-d5072232.htm"><img alt="CPU" src={cpu_image} /> CPU</a>
            <a target="_blank" href="https://www.alza.sk/arctic-alpine-23-co-d6363663.htm"><img alt="CPU cooler" src={cpu_cooler_image} /> CPU cooler</a>
            <a target="_blank" href="https://www.alza.sk/kingston-fury-16-gb-kit-ddr4-3200-mhz-cl16-beast-black-d6622616.htm"><img alt="RAM" src={ram_image} /> RAM</a>
            <a target="_blank" href="https://www.alza.sk/msi-gtx-1060-armor-6g-ocv1-d4480942.htm"><img alt="GPU" src={gpu_image} /> GPU</a>
            <a target="_blank" href="https://www.alza.sk/gigabyte-gen3-2500e-500-gb-d7772175.htm"><img alt="SSD" src={ssd_image} /> SSD</a>
            <a target="_blank" href="https://www.alza.sk/silverstone-strider-essential-80plus-st60f-es230-600-w-d5249930.htm"><img alt="PSU" src={psu_image} /> PSU</a>
        </div>
    </div>

    <div class="tech_accessory">
        <div class="text_from_lines">My accessory</div>
        <div>
            <a target="_blank" href="https://www.alza.sk/msi-pro-mp225-d12695067.htm"><img alt="Main monitor" src={main_monitor_image} /> Main Monitor</a>
            <a target="_blank" href="https://www.refurbished.sk/lcd-dell-24-u2410f-blacksilver-149088"><img alt="Second monitor" src={second_monitor_image} /> Second Monitor</a>
            <a target="_blank" href="https://www.tonerpartner.sk/sos-1720-plyn-drziak-dual-stell-28903sk/"><img alt="Monitor holder" src={monitor_holder_image} /> Monitor holder</a>
            <a target="_blank" href="https://www.alza.sk/sonoff-l2-lite-smart-led-light-strip-1-5-m-d6796884.htm"><img alt="LED light strip" src={led_light_strip_image} /> LED light strip</a>
            <a target="_blank" href="https://www.alza.sk/logitech-g413-tkl-se-mechanical-gaming-keyboard-black-us-intl-d6944846.htm"><img alt="Keyboard" src={keyboard_image} /> Keyboard</a>
            <a target="_blank" href="https://www.nay.sk/msi-clutch-dm07-cierna"><img alt="Mouse" src={mouse_image} /> Mouse</a>
            <a target="_blank" href="https://www.alza.sk/hyperx-plusefire-mat-l-d7059034.htm"><img alt="Mouse pad" src={mouse_pad_image} /> Mouse pad</a>
            <a target="_blank" href="https://www.alza.sk/trust-gxt-212-mico-cerveny-d6235588.htm"><img alt="Microphone" src={microphone_image} /> Microphone</a>
            <a target="_blank" href="https://www.alza.sk/steelseries-arctis-nova-1x-d7366334.htm"><img alt="Headphone" src={headphone_image} /> Headphone</a>
            <a target="_blank" href="https://www.alza.sk/axagon-hue-p1a-round-hub-usb-a-d6588597.htm"><img alt="USB hub" src={usb_hub_image} /> USB hub</a>
        </div>
    </div>

    <div class="tech_every_day_carry">
        <div class="text_from_lines">My every day carry</div>
        <div>
            <a target="_blank" href="https://mobilne-telefony.heureka.sk/oppo-reno7-lite-5g-8gb-128gb/#prehlad/"><img alt="Phone" src={phone_image} /> Phone</a>
            <a target="_blank" href="https://www.alza.sk/cmf-by-nothing-buds-pro-dark-grey-d7962874.htm"><img alt="Earphone" src={earphone_image} /> Earphone</a>
        </div>
    </div>

    <div class="tech_rpi">
        <div class="text_from_lines">My every day carry</div>
        <div>
            <a target="_blank" href="https://rpishop.cz/raspberry-pi-4/1598-raspberry-pi-4-model-b-4gb-ram.html"><img alt="RPi" src={rpi_image} /> RPi</a>
            <a target="_blank" href="https://rpishop.cz/raspberry-pi-4/1901-chladici-sada-krabicka-pro-raspberry-pi-4b-cerna.html"><img alt="RPi cooler" src={rpi_cooler_image} /> RPi cooler</a>
            <a target="_blank" href="https://www.ebay.com/itm/224900061136"><img alt="RPi hdd" src={rpi_hdd_image} /> RPi hdd</a>
            <a target="_blank" href="https://www.alza.sk/axagon-adsa-fp2-fastport2-d4256878.htm"><img alt="RPi reduction" src={hdd_reduction_image} /> RPi reduction</a>
        </div>
    </div>
</div>