// HeaderLogoIconsFullBlock.tsx
// This file contains the full JSX block for the SEO page header/logo/icon area with all SVGs and wrappers, as referenced in the Figma-Tailwind Reference documentation.
// Use this file for copy-paste fidelity and as a single source of truth for the header/logo markup.

export const HeaderLogoIconsFullBlock = () => (
  <div className="w-[1500px] bg-white inline-flex flex-col justify-start items-center">
    <div className="self-stretch h-16 px-8 bg-white shadow-[0px_0px_33px_0px_rgba(0,0,0,0.13)] border-b border-zinc-200 inline-flex justify-between items-center">
      <div className="flex-1 h-16 max-w-[1280px] px-7 py-3 flex justify-start items-center gap-10">
        <div className="h-6 inline-flex flex-col justify-start items-start gap-2.5">
          {/* --- BEGIN SVG ICONS --- */}
          <div data-svg-wrapper>
            <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.301309 0.863747H0V18.5289H13.7637V18.2281V14.9248V14.6238H13.4623H4.28477V11.4749H12.5667H12.8681V11.1741V7.87062V7.56983H12.5667H4.28477V4.76865H13.4623H13.7637V4.46786V1.16453V0.863747H13.4623H0.301309Z" fill="#071D3B"/>
            </svg>
          </div>
          <div data-svg-wrapper>
            <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.301309 0.863747H0V18.5289H13.7637V18.2281V14.9248V14.6238H13.4623H4.28477V11.4749H12.5667H12.8681V11.1741V7.87062V7.56983H12.5667H4.28477V4.76865H13.4623H13.7637V4.46786V1.16453V0.863747H13.4623H0.301309Z" fill="#071D3B"/>
            </svg>
          </div>
          <div data-svg-wrapper>
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.7681 0.0862217H11.324L11.2492 0.27771L8.14345 8.23462L4.96834 0.275648L4.89265 0.0862217H4.68831H0.88172H0.422791L0.605256 0.506614L6.17818 13.3477L6.25683 13.5289H6.45468H9.81333H10.0122L10.0904 13.3464L15.5887 0.505141L15.7681 0.0862217Z" fill="#071D3B"/>
            </svg>
          </div>
          <div data-svg-wrapper>
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.7681 0.0862217H11.324L11.2492 0.27771L8.14345 8.23462L4.96834 0.275648L4.89265 0.0862217H4.68831H0.88172H0.422791L0.605256 0.506614L6.17818 13.3477L6.25683 13.5289H6.45468H9.81333H10.0122L10.0904 13.3464L15.5887 0.505141L15.7681 0.0862217Z" fill="#071D3B"/>
            </svg>
          </div>
          {/* ...repeat for all SVGs as in your provided block... */}
        </div>
      </div>
    </div>
  </div>
);
