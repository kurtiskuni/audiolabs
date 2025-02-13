import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro_D1VRAqZQ.mjs';
import { g as getImage } from './pages/generic_BAdGQ7XI.mjs';
import 'clsx';

const Astro__ZOoni2 = new Proxy({"src":"/_astro/2.1.B2wLbnzQ.jpg","width":828,"height":1098,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/My Websites/Astro Websites/Clients/AudioLabs V2/public/images/blog/2.1.jpg";
							}
							
							return target[name];
						}
					});

const Astro__ZOkj6l = new Proxy({"src":"/_astro/2.2.wi9ju8Mv.jpg","width":1200,"height":900,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/My Websites/Astro Websites/Clients/AudioLabs V2/public/images/blog/2.2.jpg";
							}
							
							return target[name];
						}
					});

const Astro__ZOgeTE = new Proxy({"src":"/_astro/2.3.C6FNxKAO.jpg","width":6240,"height":4160,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/My Websites/Astro Websites/Clients/AudioLabs V2/public/images/blog/2.3.jpg";
							}
							
							return target[name];
						}
					});

const Astro__ZOcaHX = new Proxy({"src":"/_astro/2.4.DyXmV0pB.jpg","width":1200,"height":800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/My Websites/Astro Websites/Clients/AudioLabs V2/public/images/blog/2.4.jpg";
							}
							
							return target[name];
						}
					});

const Astro__ZO42kA = new Proxy({"src":"/_astro/2.6.DyyO9nnw.jpg","width":1200,"height":800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/My Websites/Astro Websites/Clients/AudioLabs V2/public/images/blog/2.6.jpg";
							}
							
							return target[name];
						}
					});

const Astro__ZNYX8T = new Proxy({"src":"/_astro/2.7.ChmBKuP-.jpg","width":1200,"height":800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/My Websites/Astro Websites/Clients/AudioLabs V2/public/images/blog/2.7.jpg";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/images/blog/2\\.1\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/images/blog/2.1.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZOoni2, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/images/blog/2\\.2\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/images/blog/2.2.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZOkj6l, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/images/blog/2\\.3\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/images/blog/2.3.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZOgeTE, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/images/blog/2\\.4\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/images/blog/2.4.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZOcaHX, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/images/blog/2\\.6\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/images/blog/2.6.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZO42kA, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/images/blog/2\\.7\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/images/blog/2.7.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZNYX8T, ...props});
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
			const html = await updateImageReferences("<p>AudioLabs studio has been a work in progress for about 10 years now.\r\nI embarked on this production studio journey in 2016 with a Steinberg UR22 audio interface (a gift\r\nfrom my friends), a refurbished Macbook Pro Retina loaded with a cracked copy of Ableton Live 9, a\r\npair of Mackie CR3 speakers, and a set of Sennheiser HD25s.</p>\n<p>On the instrument front, I had a PRS SE Soapbar, a Mexican Fender acoustic, and, around that\r\ntime, I was gifted a 1995 Fender Jazzmaster (Japanese).</p>\n<p>Image pictured below 2016/17</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/images/blog/2.1.jpg&#x22;,&#x22;alt&#x22;:&#x22;Early Studio Set Up&#x22;,&#x22;title&#x22;:&#x22;2016 Studio Set Up&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Shortly after setting up this little studio, I started to gain interest in synthesizers and electronic music.\r\nA friend of mine had just started working at StoreDJ, so together, we decided the Novation Circuit\r\nwould be the best starting point. He was already a few years ahead of me in the music production\r\nworld, owning a range of Elektron gear (Analog Keys, Octatrack &#x26; Rytm), and a good collection of\r\nVST synths, so I took his advice and dove in.\r\nI had hardly any money at the time, so I spent a good chunk of my savings on this machine, but I\r\nwas keen and eager to learn how it all worked.</p>\n<p>Not even three months into owning the Circuit, I took it interstate and bought some subpar batteries\r\nto use on the go—the batteries melted inside the unit, rendering it almost useless.\r\nI was heartbroken.</p>\n<p>I can’t remember now if I went through the effort of getting it fixed. I do remember calling for quotes\r\nand explaining the situation, but the fix would have likely cost as much as a new unit. I ended up\r\ngiving it away on Marketplace to a tinkerer who wanted the challenge of fixing it. I pushed on with my\r\nmission and stuck to Ableton Live.</p>\n<p>Fast forward a year or so. I had just completed a five-month Euro trip with my girlfriend and returned\r\nto Melbourne to a full-time job. I had the studio set up in our room at our new sharehouse, with the\r\naddition of an Ableton Push 1 and an upgrade of monitors to JBL LSR305s (which I still own). I’d\r\nbeen looking for something a bit more serious synth-wise so I sought the advice of my friend again\r\nand he linked me to an Access Virus TI on marketplace.</p>\n<p>I took the plunge and bought this synth, not really knowing much about it.. The poor thing had had a\r\nhard life, it was all beaten up and I distinctly remember the guy I bought it off handing it over to me in\r\na plastic shopping bag with the PSU and a USB cable.</p>\n<p>Owning this synth was short lived, it wasn’t tactile enough for me coming from a guitar background\r\nand I didn’t have any interest or patience learning the software user interface. I sold it pretty quickly.</p>\n<p>From there, after lots of research, I decided that the Novation Peak would be my next purchase.</p>\n<p>I found one on Marketplace at a very reasonable price. I drove over the Westgate Bridge to pick it\r\nup. The guy was selling it to fund a Moog Sub 37 and wanted a quick sale—thank you very much!\r\nRather than having his gear set up on keyboard stands or racks, he used his old skateboards.</p>\n<p>Not long after, I found an Analog Rytm on Marketplace that was priced too good to be true—$900\r\nAUD! That was atleast $500 less than market price at the time.\r\nI bought it off a French dude living in a bus under a bridge with his girlfriend in Richmond.</p>\n<p>They invited me into their bus, and he showed me his setup—running Maschine, the Rytm, and a\r\nlaptop. The bus was decorated with prayer flags and stank of Nag Champa incense.\r\nI remember taking my Leatherman with me just in case, but luckily, they were just hippies needing\r\nmoney to get back to Europe. I handed him the cash, we shook hands, and I never saw them again.</p>\n<p>This leads into the second iteration of the AudioLabs studio. With this setup, I recorded and released\r\nmy first EP under the name Empyral. The EP featured four tracks, using the Peak, Rytm, and\r\nAbleton Live 9. My very first record—produced, recorded, and mixed by myself—used only sounds I\r\nhad created on the Peak. This was 2018/19.\r\nStudio pictured below 2018/19</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/images/blog/2.2.jpg&#x22;,&#x22;alt&#x22;:&#x22;2019 Studio Set Up&#x22;,&#x22;title&#x22;:&#x22;2019 Studio Set Up&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Fast forward a year, and we were back at my parents’ house. I had gotten it into my head that I\r\nwanted a big mixer, connecting everything with external effects as send/returns. I’m almost certain\r\nthis was shortly after seeing Nils Frahm live for the first time—one of the most transformative shows\r\nI’ve ever witnessed.</p>\n<p>I bought the Allen &#x26; Heath ZED R16, again at a great price. When I eventually sold it, I remember\r\nflipping it for a $600 profit. I’ve had a good run finding bargains.</p>\n<p>This setup didn’t last long, though. I had a lot of equipment, and the GAS (Gear Acquisition\r\nSyndrome) bug hit me hard. I wasn’t using any of it to its full potential and was moving on to the next\r\nthing before really exploring the previous purchase. However, I used this setup to record a mix for an\r\nambient label called Chomley, who were running cool open-air parties at the time. My contribution to\r\ntheir Trailmix series was a one-hour set.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/images/blog/2.3.jpg&#x22;,&#x22;alt&#x22;:&#x22;Allen &#x26; Heath ZED R16&#x22;,&#x22;title&#x22;:&#x22;Allen &#x26; Heath ZED R16&#x22;,&#x22;index&#x22;:0}\"></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/images/blog/2.4.jpg&#x22;,&#x22;alt&#x22;:&#x22;2019 Studio Set Up&#x22;,&#x22;title&#x22;:&#x22;2019 Studio Set Up&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I eventually offloaded a lot of this equipment to fund a trip around Australia. I downsized everything\r\ninto one bootleg Pelican case and entered the Elektron world. I now had only a Digitakt, Digitone,\r\ninterface, and my trusty refurbished laptop. With this little rig, we set off into the country, ending up in\r\nAlice Springs, where I began my live audio and radio journey (that will have to be another article). I\r\nplayed a couple of live shows with this setup and had a tiny makeshift studio in our granny flat, made\r\nmostly of free furniture from Marketplace and the tip shop.</p>\n<p>Image pictured below 2020/21 - equipment, couldn’t find old photos of the studio room :(</p>\n<p>Fast forward to now—October 2024—the current AudioLabs studio. I’m now based in Fairfield, VIC,\r\nand use the spare bedroom of our share house as the studio. I now consider this studio to be just\r\none giant instrument.</p>\n<p>Everything is routed and set up exactly for my brain.. and it works!\r\nThat last statement has been the bane of my audio journey through all the other iterations of my\r\nstudio. Everything works, and it works great—no troubleshooting halfway through making a song, no\r\nhours trawling through forums to find a solution to an issue that only one other person in the world\r\nhas encountered. None of that.</p>\n<p>AudioLabs now boasts Barefoot monitors, an RME audio interface, an external mic preamp, a Moog\r\nMatriarch, a Vermona Perfourmer MkII, the same Peak, a 303 clone, a Push 2, a legal copy of Live\r\n12 Suite, UAD plugins, and a range of microphones.\r\nAny upgrades from here will be about making what’s already in the room better—Neve preamps, a</p>\n<p>laptop upgrade, nicer microphones, etc. The core system will ultimately stay the same, at least for\r\nthe next few years.</p>\n<p>Image pictured below 2024</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/images/blog/2.6.jpg&#x22;,&#x22;alt&#x22;:&#x22;2024 Studio Set Up&#x22;,&#x22;title&#x22;:&#x22;2024 Studio Set Up&#x22;,&#x22;index&#x22;:0}\"></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/images/blog/2.7.jpg&#x22;,&#x22;alt&#x22;:&#x22;2024 Studio Set Up&#x22;,&#x22;title&#x22;:&#x22;2024 Studio Set Up&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>This is AudioLabs, a constant journey of learning, frustration, buying, selling, teaching, forums,\r\nYouTube videos, friend networks, writer’s block, motivation, huge wins, and lots of creation.\r\nFeel free to reach out if you’d like to be part of the story. I’d love to hear from you!</p>\n<p>Benny x</p>");
	

				const frontmatter = {"title":"The Studio — Iterations Over 10 Years","articleNumber":"Editorial - 002","pubDate":"2024-01-20T00:00:00.000Z","image":"editorial_002.webp","slug":"studio-iterations-over-10-years"};
				const file = "D:/My Websites/Astro Websites/Clients/AudioLabs V2/src/content/blog/editorial_002.md";
				const url = undefined;
				function rawContent() {
					return "\r\nAudioLabs studio has been a work in progress for about 10 years now.\r\nI embarked on this production studio journey in 2016 with a Steinberg UR22 audio interface (a gift\r\nfrom my friends), a refurbished Macbook Pro Retina loaded with a cracked copy of Ableton Live 9, a\r\npair of Mackie CR3 speakers, and a set of Sennheiser HD25s.\r\n\r\nOn the instrument front, I had a PRS SE Soapbar, a Mexican Fender acoustic, and, around that\r\ntime, I was gifted a 1995 Fender Jazzmaster (Japanese).\r\n\r\nImage pictured below 2016/17\r\n\r\n![Early Studio Set Up](../../../public/images/blog/2.1.jpg \"2016 Studio Set Up\")\r\n\r\nShortly after setting up this little studio, I started to gain interest in synthesizers and electronic music.\r\nA friend of mine had just started working at StoreDJ, so together, we decided the Novation Circuit\r\nwould be the best starting point. He was already a few years ahead of me in the music production\r\nworld, owning a range of Elektron gear (Analog Keys, Octatrack & Rytm), and a good collection of\r\nVST synths, so I took his advice and dove in.\r\nI had hardly any money at the time, so I spent a good chunk of my savings on this machine, but I\r\nwas keen and eager to learn how it all worked.\r\n\r\nNot even three months into owning the Circuit, I took it interstate and bought some subpar batteries\r\nto use on the go—the batteries melted inside the unit, rendering it almost useless.\r\nI was heartbroken.\r\n\r\nI can’t remember now if I went through the effort of getting it fixed. I do remember calling for quotes\r\nand explaining the situation, but the fix would have likely cost as much as a new unit. I ended up\r\ngiving it away on Marketplace to a tinkerer who wanted the challenge of fixing it. I pushed on with my\r\nmission and stuck to Ableton Live.\r\n\r\nFast forward a year or so. I had just completed a five-month Euro trip with my girlfriend and returned\r\nto Melbourne to a full-time job. I had the studio set up in our room at our new sharehouse, with the\r\naddition of an Ableton Push 1 and an upgrade of monitors to JBL LSR305s (which I still own). I’d\r\nbeen looking for something a bit more serious synth-wise so I sought the advice of my friend again\r\nand he linked me to an Access Virus TI on marketplace.\r\n\r\nI took the plunge and bought this synth, not really knowing much about it.. The poor thing had had a\r\nhard life, it was all beaten up and I distinctly remember the guy I bought it off handing it over to me in\r\na plastic shopping bag with the PSU and a USB cable.\r\n\r\nOwning this synth was short lived, it wasn’t tactile enough for me coming from a guitar background\r\nand I didn’t have any interest or patience learning the software user interface. I sold it pretty quickly.\r\n\r\nFrom there, after lots of research, I decided that the Novation Peak would be my next purchase.\r\n\r\nI found one on Marketplace at a very reasonable price. I drove over the Westgate Bridge to pick it\r\nup. The guy was selling it to fund a Moog Sub 37 and wanted a quick sale—thank you very much!\r\nRather than having his gear set up on keyboard stands or racks, he used his old skateboards.\r\n\r\nNot long after, I found an Analog Rytm on Marketplace that was priced too good to be true—$900\r\nAUD! That was atleast $500 less than market price at the time.\r\nI bought it off a French dude living in a bus under a bridge with his girlfriend in Richmond.\r\n\r\nThey invited me into their bus, and he showed me his setup—running Maschine, the Rytm, and a\r\nlaptop. The bus was decorated with prayer flags and stank of Nag Champa incense.\r\nI remember taking my Leatherman with me just in case, but luckily, they were just hippies needing\r\nmoney to get back to Europe. I handed him the cash, we shook hands, and I never saw them again.\r\n\r\nThis leads into the second iteration of the AudioLabs studio. With this setup, I recorded and released\r\nmy first EP under the name Empyral. The EP featured four tracks, using the Peak, Rytm, and\r\nAbleton Live 9. My very first record—produced, recorded, and mixed by myself—used only sounds I\r\nhad created on the Peak. This was 2018/19.\r\nStudio pictured below 2018/19\r\n\r\n![2019 Studio Set Up](../../../public/images/blog/2.2.jpg \"2019 Studio Set Up\")\r\n\r\nFast forward a year, and we were back at my parents’ house. I had gotten it into my head that I\r\nwanted a big mixer, connecting everything with external effects as send/returns. I’m almost certain\r\nthis was shortly after seeing Nils Frahm live for the first time—one of the most transformative shows\r\nI’ve ever witnessed.\r\n\r\nI bought the Allen & Heath ZED R16, again at a great price. When I eventually sold it, I remember\r\nflipping it for a $600 profit. I’ve had a good run finding bargains.\r\n\r\nThis setup didn’t last long, though. I had a lot of equipment, and the GAS (Gear Acquisition\r\nSyndrome) bug hit me hard. I wasn’t using any of it to its full potential and was moving on to the next\r\nthing before really exploring the previous purchase. However, I used this setup to record a mix for an\r\nambient label called Chomley, who were running cool open-air parties at the time. My contribution to\r\ntheir Trailmix series was a one-hour set.\r\n\r\n![Allen & Heath ZED R16](../../../public/images/blog/2.3.jpg \"Allen & Heath ZED R16\")\r\n\r\n![2019 Studio Set Up](../../../public/images/blog/2.4.jpg \"2019 Studio Set Up\")\r\n\r\nI eventually offloaded a lot of this equipment to fund a trip around Australia. I downsized everything\r\ninto one bootleg Pelican case and entered the Elektron world. I now had only a Digitakt, Digitone,\r\ninterface, and my trusty refurbished laptop. With this little rig, we set off into the country, ending up in\r\nAlice Springs, where I began my live audio and radio journey (that will have to be another article). I\r\nplayed a couple of live shows with this setup and had a tiny makeshift studio in our granny flat, made\r\nmostly of free furniture from Marketplace and the tip shop.\r\n\r\nImage pictured below 2020/21 - equipment, couldn’t find old photos of the studio room :(\r\n\r\nFast forward to now—October 2024—the current AudioLabs studio. I’m now based in Fairfield, VIC,\r\nand use the spare bedroom of our share house as the studio. I now consider this studio to be just\r\none giant instrument.\r\n\r\nEverything is routed and set up exactly for my brain.. and it works!\r\nThat last statement has been the bane of my audio journey through all the other iterations of my\r\nstudio. Everything works, and it works great—no troubleshooting halfway through making a song, no\r\nhours trawling through forums to find a solution to an issue that only one other person in the world\r\nhas encountered. None of that.\r\n\r\nAudioLabs now boasts Barefoot monitors, an RME audio interface, an external mic preamp, a Moog\r\nMatriarch, a Vermona Perfourmer MkII, the same Peak, a 303 clone, a Push 2, a legal copy of Live\r\n12 Suite, UAD plugins, and a range of microphones.\r\nAny upgrades from here will be about making what’s already in the room better—Neve preamps, a\r\n\r\nlaptop upgrade, nicer microphones, etc. The core system will ultimately stay the same, at least for\r\nthe next few years.\r\n\r\nImage pictured below 2024\r\n\r\n![2024 Studio Set Up](../../../public/images/blog/2.6.jpg \"2024 Studio Set Up\")\r\n\r\n![2024 Studio Set Up](../../../public/images/blog/2.7.jpg \"2024 Studio Set Up\")\r\n\r\nThis is AudioLabs, a constant journey of learning, frustration, buying, selling, teaching, forums,\r\nYouTube videos, friend networks, writer’s block, motivation, huge wins, and lots of creation.\r\nFeel free to reach out if you’d like to be part of the story. I’d love to hear from you!\r\n\r\nBenny x";
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
