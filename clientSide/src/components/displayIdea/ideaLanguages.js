import React from 'react';
// known languages: none,react,php,javascript,java-script,cPlusPlus,python,ruby,rails,ruby-on-rails,jquery,java,css,sass,scss,less,cSharp,c,go,typescript,type-script,shell,bash,swift,scala,objective-c,
export default function Languages(props) {
	let languagesToPrint;
	if (props.theLanguages) {
		let languageArray = props.theLanguages
			.split(',')
			.map(language => language.trim())
			.filter(language => language.length > 0);
		// check if we have an empty array after removing
		// empty strings
		if (languageArray.length > 0) {
			languagesToPrint = languageArray;
		} else {
			languagesToPrint = ['none'];
		}
	} else {
		languagesToPrint = ['none'];
	}
	return (
		<div
			className={
				props.theLanguages
					? 'fade fadeIn projectIdeaViewSection'
					: 'fade projectIdeaViewSection'
			}
		>
			<label className="label">Recommended Languages:</label>
			<p className="">
				{languagesToPrint.map((language, i) => {
					let spaceFreeAlphaCharNameOfLanguage = language
						.toLowerCase()
						.replace(/\s/gi, '-')
						.replace(/\+\+/gi, 'PlusPlus')
						.replace(/\#/gi, 'Sharp');
					return (
						<span
							key={`language-${spaceFreeAlphaCharNameOfLanguage}-${i}`}
							className={`language ${spaceFreeAlphaCharNameOfLanguage}`}
						>
							{language.trim().toLowerCase()}
						</span>
					);
				})}
			</p>
		</div>
	);
}
