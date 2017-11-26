import React from 'react';
// known languages: none,react,php,javascript,java-script,cPlusPlus,python,ruby,rails,ruby-on-rails,jquery,java,css,sass,scss,less,cSharp,c,go,typescript,type-script,shell,bash,swift,scala,objective-c,
export default function Languages(props) {
	return (
		<div
			className={
				props.theLanguages[0] !== 'none'
					? 'fade fadeIn projectIdeaViewSection'
					: 'fade projectIdeaViewSection'
			}
		>
			<label className="label">Recommended Languages:</label>
			<p className="">
				{props.theLanguages.map((language, i) => {
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
