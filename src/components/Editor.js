import React from "react";
import CoverImage from "./CoverImage";
import ComponentToImg from "./ComponentToImg";
import Select from 'react-select';
import RandomTheme from './RandomTheme';


import { THEMES } from "../utils/constants";

const defaultIcon = { 'label': 'kotlin', 'value': 'kotlin' }

const googleFonts = {
	serif: [
		{ value: 'Merriweather', label: 'Merriweather' },
		{ value: 'Playfair Display', label: 'Playfair Display' },
		{ value: 'Libre Baskerville', label: 'Libre Baskerville' },
		{ value: 'Cormorant', label: 'Cormorant' },
		{ value: 'Slabo 27px', label: 'Slabo 27px' },
		{ value: 'Zilla Slab', label: 'Zilla Slab' },
		{ value: 'Old Standard TT', label: 'Old Standard TT' },
		{ value: 'Vollkorn', label: 'Vollkorn' },
		{ value: 'Rasa', label: 'Rasa' },
		{ value: 'Crimson Text', label: 'Crimson Text' },
	],
	'sans-serif': [
		{ value: 'Roboto', label: 'Roboto' },
		{ value: 'Open Sans', label: 'Open Sans' },
		{ value: 'Lato', label: 'Lato' },
		{ value: 'Montserrat', label: 'Montserrat' },
		{ value: 'Oswald', label: 'Oswald' },
		{ value: 'Raleway', label: 'Raleway' },
		{ value: 'PT Sans', label: 'PT Sans' },
		{ value: 'Nunito Sans', label: 'Nunito Sans' },
		{ value: 'Work Sans', label: 'Work Sans' },
		{ value: 'Signika', label: 'Signika' },
	],
	monospace: [
		{ value: 'Source Code Pro', label: 'Source Code Pro' },
		{ value: 'Inconsolata', label: 'Inconsolata' },
	],
	display: [
		{ value: 'Concert One', label: 'Concert One' },
		{ value: 'Passion One', label: 'Passion One' },
		{ value: 'Fjalla One', label: 'Fjalla One' },
		{ value: 'Orbitron', label: 'Orbitron' },
		{ value: 'Teko', label: 'Teko' },
		{ value: 'Lalezar', label: 'Lalezar' },
		{ value: 'Righteous', label: 'Righteous' },
		{ value: 'Yatra One', label: 'Yatra One' },
	],
	handwriting: [
		{ value: 'Pattaya', label: 'Pattaya' },
	],
};

const defaultSettings = {
	title: "How to build a Linear Clone with Supabase and Next.js?",
	bgColor: "#949ee5",
	bgColorLeft: "#949ee5",
	bgColorRight: "#6366f1",
	gradientAngle: 90,
	pattern: "",
	download: "PNG",
	author: 'Developer Guide',
	icon: defaultIcon,
	devIconOptions: [defaultIcon],
	titleFont: 'Roboto',
	authorFont: 'Roboto',
	titleFontSize: 'text-5xl',
	authorFontSize: 'text-2xl',
	theme: 'background',
	customIcon: '',
	titleAlign: 'left',
	authorAlign: 'left',
	iconAlign: 'left',
	iconVersion: 'original',
	iconSize: 8,
	googleFonts: googleFonts,
};

const devIconsUrl = "https://raw.githubusercontent.com/devicons/devicon/master/devicon.json"

class Editor extends React.Component {


	state = defaultSettings;
	componentDidMount() {
		// console.log("Mount")
		fetch(devIconsUrl).then(r => r.json()).then(data => {
			data.unshift({ name: 'upload your own' })
			this.setState({ devIconOptions: data.map(item => ({ 'value': item.name, 'label': item.name, 'versions': item.versions })) })
		})
	}
	handleReset = () => {
		this.setState({
			...defaultSettings,
			devIconOptions: this.state.devIconOptions,
		});
	};

	getRandomTheme = (theme, Pattern) => {
		this.setState({ bgColorLeft: theme.bgColorLeft, bgColorRight: theme.bgColorRight, pattern: Pattern, gradientAngle: Math.floor(Math.random() * 360) });
	}

	formatOptionLabel = ({ value, label }) => (
		<div className="flex">
			<span className="mr-2">{label}</span>
			<div className="ml-auto mr-2">
				<i className={`devicon-${value}-plain dev-icon text-2xl`}></i>
			</div>
		</div>
	);



	render() {
		return (
			<div className="max-w-[1400px]  mx-auto">

					<div className="flex md:flex-row flex-col  ">

						<div className="bg-white flex flex-col h-100 md:w-3/12">

							<div>
								<div className="flex md:flex-row flex-col">



									<div className="bg-white font-Inter  border-dashed border-r-2 border-gray-100 w-full p-4 ">
										<div>

											<div className="m-2 flex flex-col">
												<span className="font-medium text-sm pb-1">Blog Title</span>
												<textarea
													type="text"
													value={this.state.title}
													placeholder="Enter title here"
													className="focus:outline-none border text-gray-700 text-lg  rounded p-2 h-24"
													onChange={(e) => this.setState({ title: e.target.value })}
												/>
											</div>

											<div className="flex flex-col m-2 ">
												<span className="font-medium text-sm pb-1">Author</span>
												<input
													type="text"
													value={this.state.author}
													placeholder="Author"
													className="focus:outline-none border text-gray-700 text-lg rounded bg-white p-2"
													onChange={(e) => this.setState({ author: e.target.value })}
												></input>
											</div>

											<div className="flex flex-col m-2 ">
												<span className="font-medium text-sm pb-1">Icon</span>
												<Select value={this.state.icon}
													onChange={(selectedOption) => {
														const versions = this.state.devIconOptions.find(i => i.value === selectedOption.value)?.versions?.svg || [];
														this.setState({ icon: selectedOption, iconVersion: versions[0] || 'original' });
													}}
													options={this.state.devIconOptions}
													formatOptionLabel={this.formatOptionLabel}
													className="outline-none focus:outline-none items-center text-lg text-gray-700"
												/>
											</div>
											<div className="flex flex-col m-2 ">
												<span className="font-medium text-sm pb-1">Icon Version</span>
												<select
													value={this.state.iconVersion}
													onChange={(e) => this.setState({ iconVersion: e.target.value })}
													className="focus:outline-none text-gray-700 text-lg p-2 rounded border">
													{(this.state.devIconOptions.find(i => i.value === this.state.icon.value)?.versions?.svg || []).map(v => <option key={v}>{v}</option>)}
												</select>
											</div>
											<div className="flex flex-col m-2 ">
												<span className="font-medium text-sm pb-1">Icon Size</span>
												<input
													type="range"
													min="1"
													max="12"
													value={this.state.iconSize}
													onChange={(e) => this.setState({ iconSize: e.target.value })}
													className="focus:outline-none text-gray-700 text-lg p-2 rounded border"
												/>
											</div>
											<div className="w-full">

												{this.state.icon.label === 'upload your own' ?
													<div className="flex items-center justify-center w-64 mx-auto">
														<input type="file"
															className="focus:outline-none w-full text-sm cursor-pointer bg-white rounded border"
															onChange={(e) => this.setState({ 'customIcon': URL.createObjectURL(e.target.files[0]) })}
														/>
													</div>
													:
													<div></div>
												}

											</div>

											<div className="flex items-center">

												<div className="flex flex-col m-2 w-1/2">
													<span className="font-medium text-sm pb-1">Title Font</span>

													<select
														value={this.state.titleFont}
														onChange={(e) => this.setState({ titleFont: e.target.value })}
														className="focus:outline-none text-gray-700 text-lg p-2 rounded border">
														{Object.keys(this.state.googleFonts).map(category => (
															<optgroup label={category} key={category}>
																{this.state.googleFonts[category].map(font => <option key={font.value} value={font.value}>{font.label}</option>)}
															</optgroup>
														))}
													</select>
												</div>
												<div className="flex flex-col m-2 w-1/2">
													<span className="font-medium text-sm pb-1">Title Font Size</span>

													<select
														value={this.state.titleFontSize}
														onChange={(e) => this.setState({ titleFontSize: e.target.value })}
														className="focus:outline-none text-gray-700 text-lg p-2 rounded border">
														<option>text-xs</option>
														<option>text-sm</option>
														<option>text-base</option>
														<option>text-lg</option>
														<option>text-xl</option>
														<option>text-2xl</option>
														<option>text-3xl</option>
														<option>text-4xl</option>
														<option>text-5xl</option>
														<option>text-6xl</option>
														<option>text-7xl</option>
														<option>text-8xl</option>
														<option>text-9xl</option>
													</select>
												</div>
											</div>
											<div className="flex items-center">

												<div className="flex flex-col m-2 w-1/2">
													<span className="font-medium text-sm pb-1">Author Font</span>

													<select
														value={this.state.authorFont}
														onChange={(e) => this.setState({ authorFont: e.target.value })}
														className="focus:outline-none text-gray-700 text-lg p-2 rounded border">
														{Object.keys(this.state.googleFonts).map(category => (
															<optgroup label={category} key={category}>
																{this.state.googleFonts[category].map(font => <option key={font.value} value={font.value}>{font.label}</option>)}
															</optgroup>
														))}
													</select>
												</div>
												<div className="flex flex-col m-2 w-1/2">
													<span className="font-medium text-sm pb-1">Author Font Size</span>

													<select
														value={this.state.authorFontSize}
														onChange={(e) => this.setState({ authorFontSize: e.target.value })}
														className="focus:outline-none text-gray-700 text-lg p-2 rounded border">
														<option>text-xs</option>
														<option>text-sm</option>
														<option>text-base</option>
														<option>text-lg</option>
														<option>text-xl</option>
														<option>text-2xl</option>
														<option>text-3xl</option>
														<option>text-4xl</option>
														<option>text-5xl</option>
														<option>text-6xl</option>
														<option>text-7xl</option>
														<option>text-8xl</option>
														<option>text-9xl</option>
													</select>
												</div>
											</div>
											<div className="flex items-center">
												<div className="flex flex-col m-2 w-1/2">
													<span className="font-medium text-sm pb-1">Color Left</span>
													<div className="border rounded flex items-center p-1">

														{/* <span className="text-base text-gray-700  mx-2">{this.state.bgColor}</span> */}
														<input type="color" value={this.state.bgColorLeft}
															onChange={(e) => this.setState({ bgColorLeft: e.target.value })}
															className="h-8 w-full  rounded"
														/>
													</div>
												</div>
												<div className="flex flex-col m-2 w-1/2">
													<span className="font-medium text-sm pb-1">Color Right</span>
													<div className="border rounded flex items-center p-1">

														{/* <span className="text-base text-gray-700  mx-2">{this.state.bgColor}</span> */}
														<input type="color" value={this.state.bgColorRight}
															onChange={(e) => this.setState({ bgColorRight: e.target.value })}
															className="h-8 w-full  rounded"
														/>
													</div>
												</div>
											</div>
											<div className="flex flex-col m-2">
												<span className="font-medium text-sm pb-1">Gradient Angle</span>
												<input
													type="range"
													min="0"
													max="360"
													value={this.state.gradientAngle}
													onChange={(e) => this.setState({ gradientAngle: e.target.value })}
													className="focus:outline-none text-gray-700 text-lg p-2 rounded border"
												/>
											</div>
											<div className="flex items-center">
												<div className="flex flex-col m-2 w-1/2">
													<span className="font-medium text-sm pb-1">Title Align</span>
													<div className="border rounded flex items-center p-1 justify-around">
														<button onClick={() => this.setState({ titleAlign: 'left' })}>
															<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg>
														</button>
														<button onClick={() => this.setState({ titleAlign: 'center' })}>
															<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
														</button>
														<button onClick={() => this.setState({ titleAlign: 'right' })}>
															<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" /></svg>
														</button>
													</div>
												</div>
												<div className="flex flex-col m-2 w-1/2">
													<span className="font-medium text-sm pb-1">Author Align</span>
													<div className="border rounded flex items-center p-1 justify-around">
														<button onClick={() => this.setState({ authorAlign: 'left' })}>
															<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg>
														</button>
														<button onClick={() => this.setState({ authorAlign: 'center' })}>
															<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
														</button>
														<button onClick={() => this.setState({ authorAlign: 'right' })}>
															<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" /></svg>
														</button>
													</div>
												</div>
												<div className="flex flex-col m-2 w-1/2">
													<span className="font-medium text-sm pb-1">Icon Align</span>
													<div className="border rounded flex items-center p-1 justify-around">
														<button onClick={() => this.setState({ iconAlign: 'left' })}>
															<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg>
														</button>
														<button onClick={() => this.setState({ iconAlign: 'center' })}>
															<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
														</button>
														<button onClick={() => this.setState({ iconAlign: 'right' })}>
															<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" /></svg>
														</button>
													</div>
												</div>
											</div>


											<div className="flex items-center">
												{/* <div className="flex flex-col m-2 w-1/2">
													<span className="font-medium text-sm pb-1">Pattern</span>
													<select
														onChange={(e) => this.setState({ pattern: e.target.value })}
														className="focus:outline-none border text-lg p-2 rounded"
														value={this.state.pattern}>

														<option>none</option>
														<option>graph-paper</option>
														<option>jigsaw</option>
														<option>hideout</option>
														<option>dots</option>
														<option>falling-triangles</option>
														<option>circuit-board</option>
														<option>temple</option>
														<option>anchors</option>
														<option>brickwall</option>
														<option>overlapping-circles</option>
														<option>wiggle</option>
														<option>tic-tac-toe</option>
														<option>leaf</option>
														<option>bubbles</option>
														<option>squares</option>
														<option>explorer</option>
														<option>jupiter</option>
														<option>sun</option>
													</select>
												</div> */}

							

											</div>

											<button
												className="flex items-center bg-gray-700 hover:bg-gray-800 text-white rounded-lg mt-6 text-base  p-1 px-4 mx-auto border"
												onClick={this.handleReset}>
												<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white mr-2 " fill="currentColor" viewBox="0 0 24 24" ><path d="M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3-3 1.331-3 3 1.329 3 3 3z"></path><path d="M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219 9.053 9.053 0 0 0-2.43-2.43 8.95 8.95 0 0 0-3.219-1.355 9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053 7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725 7.11 7.11 0 0 1-.644 1.188 7.2 7.2 0 0 1-.858 1.039 7.028 7.028 0 0 1-3.536 1.907 7.13 7.13 0 0 1-2.822 0 6.961 6.961 0 0 1-2.503-1.054 7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034 9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183 9.014 9.014 0 0 0 3.218-1.355 8.886 8.886 0 0 0 1.331-1.099 9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814z"></path></svg>
												<span className="font-Inter">Reset All</span>
											</button>

										</div>



									</div>

								</div>
							</div>


							{/* <div className="mx-4 my-1">
						<h6>Download As</h6>
						<select onChange={(e) => this.setState({ download: e.target.value })}
							className="form-control input"
							value={this.state.download}>
							<option>PNG</option>
							<option>JPEG</option>
						</select>
					</div> */}

						</div>

						{/* cover image preview */}

						<div className=" flex m-2 flex-col items-center justify-center ">

							<ComponentToImg downloadAs={this.state.download}>
								<CoverImage {...this.state} />
							</ComponentToImg>
						</div>

						{/* themes section */}

						<div className="md:w-60 px-4 border-dashed border-l-2 border-gray-100 bg-white">
							<div className="h-99 w-full flex flex-col justify-center">

								<div className="flex items-center">
									<h2 className="text-lg pl-2 font-inter font-semibold">Themes</h2>
									<div className="ml-auto mr-1 p-2">
										<RandomTheme onThemeChange={this.getRandomTheme} />

									</div>
								</div>

								<div className="  flex gap-2 flex-wrap justify-center overflow-y-scroll ">

									{
										THEMES.map(themePlaceholder => (
											<div className={`${themePlaceholder.label === this.state.theme ? 'border-blue-400 border-2' : ''}`} key={themePlaceholder.label}>


												<img src={themePlaceholder.preview} alt={themePlaceholder.label}
													onClick={(e) => this.setState({ theme: themePlaceholder.label })}
													className=" cursor-pointer border border-gray-100 hover:border-gray-200 hover:scale-105 duration-300 "
												/>
											</div>
										))
									}

								</div>


							</div>
						</div>

					</div>
			</div>

		);
	}
}

export default Editor;
