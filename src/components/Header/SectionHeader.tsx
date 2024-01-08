const SectionHeader = (props: any) => (
    <div className={props.className}>
        <div className="space-y-4">
        <span className="text-secondary block font-mono text-xs uppercase tracking-widest">
          {props.subtitle}
        </span>
            <h3 className="h2">
                <span>{props.title} </span>
                {props.title_alt && (
                    <span className="text-highlight-secondary inline">{props.title_alt}</span>
                )}
            </h3>
        </div>
        {props.paragraph && <p className="p max-w-3xl text-lg sm:mt-4">{props.paragraph}</p>}
    </div>
)

export default SectionHeader;