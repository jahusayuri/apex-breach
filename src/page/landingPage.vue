<template>
    <main class="main-content">
        <!-- Hero Section -->
        <section class="hero2"
            :style="{ backgroundImage: 'url(/media/evapcont/industries_hub_hero_def.jpg?width=1920&height=475&v=1db8e7d3c3b3150)' }">
            <div class="container macro">
                <div class="hero2-content">
                    <div class="row">
                        <div class="col-md-8 column">
                            <h1 class="hero2-title">Industries</h1>
                            <div class="hero2-sub-content">
                                <p style="font-size: 22px;">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna
                                    eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis
                                    neque.
                                </p>
                            </div>
                            <div class="hero2-buttons">
                                <a class="btn btn-default left" href="#" title="Get A Quote">Start a Project</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 column hero2-lower">
                        <div>
                            <p><strong>Certifications</strong> ISO 9001:2015 | AS9100D | ITAR</p>
                            <p>ISO 13485 certification available through Protolabs Network</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section Title -->
        <section>
            <div class="container">
                <h2 style="text-align: center;">Industries We Serve</h2>
                <hr class="section-margin s" />
                <div class="row">
                    <div class="col-md-4 column">
                        <IndustryCard title="Medical & Health Care" img="/media/34mcvhvv/medical_industry.jpg"
                            link="/industries/medical/" />
                        <IndustryCard title="Robotic Automation" img="/media/qqfl3qgd/robotics.jpg"
                            link="/industries/robotics/" />
                    </div>
                    <div class="col-md-4 column">
                        <IndustryCard title="Aerospace & Defense" img="/media/wdndewk5/aerospace.jpg"
                            link="/industries/aerospace/" />
                        <IndustryCard title="Consumer Electronics" img="/media/vurnp11l/electronics.jpg"
                            link="/industries/consumer-electronics/" />
                    </div>
                    <div class="col-md-4 column">
                        <IndustryCard title="Automotive & EV/AV" img="/media/skdfh1l0/automotive_industry.jpg"
                            link="/industries/automotive/" />
                        <IndustryCard title="Industrial Equipment" img="/media/1017650/industrial-equipment-570x308.jpg"
                            link="/industries/industrial-equipment/" />
                    </div>
                </div>
            </div>
        </section>

        <!-- How Companies Use Section -->
        <section>
            <div class="container">
                <hr class="section-margin l" />
                <h2 style="text-align: center;">How Companies Use Apex Breach</h2>
                <hr class="section-margin s" />
                <div class="row">
                    <div class="col-md-4 column">
                        <FeatureCard icon="/media/3uzll1ya/medical_icon_32px.svg" title="Medical"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur." />
                    </div>
                    <div class="col-md-4 column">
                        <FeatureCard icon="/media/urvdjfr1/aerospace_icon_32px.svg" title="Aerospace"
                            text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
                    </div>
                    <div class="col-md-4 column">
                        <FeatureCard icon="/media/0bgfd4dj/automotive_icon_32px.svg" title="Automotive"
                            text="Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 column">
                        <FeatureCard icon="/media/czlbhi3f/robotics_icon_32px.svg" title="Robotics"
                            text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
                    </div>
                    <div class="col-md-4 column">
                        <FeatureCard icon="/media/2cfjtjg3/electronics_icon_32px.svg" title="Consumer Electronics"
                            text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    </div>
                    <div class="col-md-4 column">
                        <FeatureCard icon="/media/zsfhh3wy/industrial_equipment_icon_32px.svg"
                            title="Industrial Equipment"
                            text="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt." />
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="cta-section">
            <div class="container">
                <div class="hero-content center">
                    <p style="font-size: 32px;">Start Your Next Project Today</p>
                    <a class="btn btn-default center" href="#" title="Get A Quote">Get Instant Quote</a>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { defineComponent } from 'vue'

// Simple card components for brevity
const IndustryCard = defineComponent({
    props: ['title', 'img', 'link'],
    template: `
    <div class="quick-links">
      <a class="one-item image-only" :href="link" target="_self">
        <div class="quick-link">
          <div class="link-image-wrapper">
            <div class="link-image">
              <div class="bg-cover">
                <img :src="img" :alt="title" />
              </div>
            </div>
          </div>
          <div class="content">
            <div class="title">{{ title }}</div>
            <div class="link">
              <i class="material-symbols-outlined">arrow_right_alt</i>
            </div>
          </div>
        </div>
      </a>
    </div>
  `
})

const FeatureCard = defineComponent({
    props: ['icon', 'title', 'text'],
    template: `
    <table border="0" style="border-collapse: collapse; width: 90%;">
      <tr>
        <td style="width: 99%; padding: 0px;">
          <img :src="icon" :alt="title" style="height:32px; margin-bottom:8px;" />
          <h3>{{ title }}</h3>
          <p>{{ text }}</p>
        </td>
      </tr>
    </table>
  `
})
</script>

<style scoped>
.main-content {
    background: var(--surface-0, #fff);
}

.hero2 {
    background-size: cover;
    background-position: center;
    color: #fff;
    padding: 3rem 0 2rem 0;
}

.hero2-title {
    font-size: 3rem;
    font-weight: bold;
}

.hero2-buttons .btn {
    margin-top: 1.5rem;
}

.section-margin.s {
    margin: 2rem 0;
}

.section-margin.l {
    margin: 3rem 0;
}

.quick-links {
    margin-bottom: 2rem;
}

.quick-link {
    background: var(--surface-1, #f4f4f5);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    transition: box-shadow 0.2s;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.quick-link:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.link-image img {
    width: 100%;
    height: 140px;
    object-fit: cover;
}

.content {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.content .title {
    font-size: 1.1rem;
    font-weight: 600;
}

.cta-section {
    background: var(--surface-1, #f4f4f5);
    padding: 3rem 0;
    text-align: center;
}

.hero-content.center {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.btn {
    background: var(--primary-color, #2196f3);
    color: #fff;
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 4px;
    font-weight: 600;
    text-decoration: none;
    margin-top: 1rem;
    display: inline-block;
    transition: background 0.2s;
}

.btn:hover {
    background: var(--primary-color-hover, #1769aa);
}
</style>