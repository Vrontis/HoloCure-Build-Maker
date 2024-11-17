import siteIcon from "$lib/images/holocure_icon.png";

export const load = (async () => {
	const meta = [
		{
			name: 'viewport',
			content: 'width=device-width, initial-scale=1'
		},
		{
			name: 'description',
			content: "Generate and share builds for HoloCure"
		},
		{
			name: 'description',
			content: "Generate and share builds for HoloCure"
		},
		{
			name: "keywords",
			content: "holocure, build, maker, guide" 
		},
		{
			name: "author",
			content: "Zenora" 
		},
		{
			name: "og:title",
			content: "HoloCure Build Maker" 
		},
		{
			name:"og:description",
			content: "A build maker for Holocure." 
		},
		{
			property:"og:image",
			content: siteIcon
		},
		{
			property: "og:site_name",
			content: "HoloCure Build Maker" 
		},
		{
			property:"og:url",
			content: "https://holocure-build-maker-opal.vercel.app/"
		}]

	try {
	return meta;
	} catch (error) {
		console.log(error);
	}
});
