import BaseLayout from '../layouts/BaseLayout.astro';
import ContactCTA from '../components/ContactCTA.astro';
import PortfolioPreview from '../components/PortfolioPreview.astro';
import Hero from '../components/Hero.astro';
import Grid from '../components/Grid.astro';
import { projects } from './work.astro';

<Fragment>
<BaseLayout title="Mes projets | Adrien Valo" description="tous mes projets" {...{ ";": true }}>
<div class="stack gap-20">
<main class="wrapper stack gap-8">
<Hero title="Tous mes projets" tagline="" align="start" />
<Grid variant="offset">
{projects.map((project) => (
<Fragment><li>
<PortfolioPreview project={project} />
</li></Fragment>
))}
</Grid>
</main>
<ContactCTA />
</div>
</BaseLayout>

</Fragment>;
