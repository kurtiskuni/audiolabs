import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro_D1VRAqZQ.mjs';
import { g as getImage } from './pages/generic_BAdGQ7XI.mjs';
import 'clsx';

const Astro__Z1Dq4EL = new Proxy({"src":"/_astro/focalpoint.CWXTP_g0.webp","width":800,"height":800,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/My Websites/Astro Websites/Clients/AudioLabs V2/public/images/focalpoint.webp";
							}
							
							return target[name];
						}
					});

const Astro__DIeJ6 = new Proxy({"src":"/_astro/closer.DZx-eN-D.webp","width":1000,"height":1000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/My Websites/Astro Websites/Clients/AudioLabs V2/public/images/closer.webp";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/images/focalpoint\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/images/focalpoint.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1Dq4EL, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/images/closer\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/images/closer.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__DIeJ6, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<p>While the primary aim of the AudioLabs platform is to generate business for audio services, it also serves as a vehicle for promoting my own creative work under the alias Focal Point.</p>\n<p>At this early stage of client and lead generation, I’ve been using my own productions as a portfolio of sorts—showcasing skills like recording, mixing, editing, and sound design, alongside writing and development of the music. Each project is an opportunity to refine these abilities, and through experimentation, discovering new techniques.</p>\n<p>Of course, not every experiment is a success—some ideas sound horrible—but every now and then I land on something interesting, and I believe that contributes to developing your own sound or style.</p>\n<p>Focal Point is actually my second creative venture. My first project, empyral, was inspired by my favorite album at the time, The Empyrean by John Frusciante. It marked my initial venture into electronic music after spending years as a guitarist in bands.</p>\n<p>This current project, Focal Point, is still highly experimental in nature—exploring sound, production, and genre. While I tend to lean on the instruments available in the AudioLabs studio for a sense of continuity, there’s always room for creative evolution.</p>\n<p>So far, I’ve released a three-track EP titled Undulation. At the time, I was heavily into chopping up drum breaks and looped percussion, which became a signature element across the tracks. Looking back, I’d love to revisit the mixes using my newer Barefoot Footprint 03 monitors, but those songs represent where I was then, and I’m content to let them stand as they are.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/images/focalpoint.webp&#x22;,&#x22;alt&#x22;:&#x22;Early Studio Set Up&#x22;,&#x22;title&#x22;:&#x22;2016 Studio Set Up&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>After Undulation, I ventured into edits and remixes. One was Closer by Satoshi &#x26; Makoto, and the other was Quarto De Hotel by Hareton Salvanini. Both were really fun to create, offering a fresh perspective and an entirely different creative process. I’m genuinely proud of how they turned out.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/images/closer.webp&#x22;,&#x22;alt&#x22;:&#x22;Focal Point Closer Edit&#x22;,&#x22;title&#x22;:&#x22;Focal Point Edit&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Now, as we enter 2025, I have my sights set on releasing a record—whether through an existing label or as a self-funded project. If I feel confident in the quality of the music, I’ll gladly take the plunge and release it independently.</p>\n<p>Listen back to Focal Point releases on <a href=\"https://audiolabs.bandcamp.com/music\">Bandcamp</a>.</p>\n<p>Check out my mixing and production walkthroughs on <a href=\"https://www.youtube.com/@Audiolabs_au\">YouTube</a>.</p>\n<p>Follow us for weekly updates on <a href=\"https://www.instagram.com/audiolabs.au/\">Instagram</a>\r\n.</p>");
	

				const frontmatter = {"title":"Focal Point—Artistic Alias","articleNumber":"Editorial - 003","pubDate":"2025-02-14T00:00:00.000Z","image":"editorial_003.webp","slug":"focal-point-artistic-alias"};
				const file = "D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/content/blog/editorial_003.md";
				const url = undefined;
				function rawContent() {
					return "\r\nWhile the primary aim of the AudioLabs platform is to generate business for audio services, it also serves as a vehicle for promoting my own creative work under the alias Focal Point.\r\n\r\nAt this early stage of client and lead generation, I’ve been using my own productions as a portfolio of sorts—showcasing skills like recording, mixing, editing, and sound design, alongside writing and development of the music. Each project is an opportunity to refine these abilities, and through experimentation, discovering new techniques.\r\n\r\nOf course, not every experiment is a success—some ideas sound horrible—but every now and then I land on something interesting, and I believe that contributes to developing your own sound or style.\r\n\r\nFocal Point is actually my second creative venture. My first project, empyral, was inspired by my favorite album at the time, The Empyrean by John Frusciante. It marked my initial venture into electronic music after spending years as a guitarist in bands.\r\n\r\nThis current project, Focal Point, is still highly experimental in nature—exploring sound, production, and genre. While I tend to lean on the instruments available in the AudioLabs studio for a sense of continuity, there’s always room for creative evolution.\r\n\r\nSo far, I’ve released a three-track EP titled Undulation. At the time, I was heavily into chopping up drum breaks and looped percussion, which became a signature element across the tracks. Looking back, I’d love to revisit the mixes using my newer Barefoot Footprint 03 monitors, but those songs represent where I was then, and I’m content to let them stand as they are.\r\n\r\n![Early Studio Set Up](../../../public/images/focalpoint.webp \"2016 Studio Set Up\")\r\n\r\nAfter Undulation, I ventured into edits and remixes. One was Closer by Satoshi & Makoto, and the other was Quarto De Hotel by Hareton Salvanini. Both were really fun to create, offering a fresh perspective and an entirely different creative process. I’m genuinely proud of how they turned out.\r\n\r\n![Focal Point Closer Edit](../../../public/images/closer.webp \"Focal Point Edit\")\r\n\r\nNow, as we enter 2025, I have my sights set on releasing a record—whether through an existing label or as a self-funded project. If I feel confident in the quality of the music, I’ll gladly take the plunge and release it independently.\r\n\r\nListen back to Focal Point releases on [Bandcamp](https://audiolabs.bandcamp.com/music). \r\n\r\nCheck out my mixing and production walkthroughs on [YouTube](https://www.youtube.com/@Audiolabs_au). \r\n\r\nFollow us for weekly updates on [Instagram](https://www.instagram.com/audiolabs.au/)\r\n.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
