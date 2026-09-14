import React, { useState } from "react";
import "./styles.css";

// --- LAYOUT TYPES ---
const LAYOUT = {
  DEFAULT: "DEFAULT",
  SPLITTING: "SPLITTING",
  MODIFICATION: "MODIFICATION",
  ROTATION: "ROTATION",
};

// --- DATASET: UPDATED FOR CONSISTENCY ---
const STEPS_DATA = [
  {
    id: 1,
    title: "MINOR DESIGN CHANGE",
    examples: [
      {
        id: "ex-1",
        layoutType: LAYOUT.DEFAULT,
        title: "1. DESIGN SLIGHTLY CHANGE",
        partName: "TOE OVERLAY",
        changeText: "EXPANDED PATTERN",
        currentPartImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/NEW-toe-oley-design-change-example-1-current.png",
        optimizedPartImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/NEW-toe-oley-design-change-example-1-optimised.png",
        currentNestingImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/NEW-design-change-example-1-current.png",
        optimizedNestingImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/NEW-design-change-example-1-optimised.png",
        currentP: "P: 61.46%", currentY: "Y: 0.049",
        optimizedP: "P: 61.59%", optimizedY: "Y: 0.044",
        metrics: { efficiency: "+0.13%", yieldVal: "-0.005 YD", costImpact: "-$0.065/pair" },
      },
      {
        id: "ex-2",
        layoutType: LAYOUT.DEFAULT,
        title: "1. DESIGN SLIGHTLY CHANGE",
        partName: "VAMP DECORATION",
        changeText: "ADJUSTED PATTERN",
        currentPartImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/vamp-decor-design-change-example-2-current.png",
        optimizedPartImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/vamp-decor-design-change-example-2-optimised.png",
        currentNestingImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/design-change-example-2-current.png",
        optimizedNestingImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/design-change-example-2-optimised.png",
        currentP: "P: 42.59%", currentY: "Y: 0.013/4pcs",
        optimizedP: "P: 55.54%", optimizedY: "Y: 0.0094/4pcs",
        metrics: { efficiency: "+12.95%", yieldVal: "-0.0036 YD", costImpact: "-$0.04/pair" },
      },
      {
        id: "ex-3",
        layoutType: LAYOUT.DEFAULT,
        title: "1. DESIGN SLIGHTLY CHANGE",
        partName: "HEEL MUDGUARD",
        changeText: "ADJUSTED PATTERN",
        currentPartImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/heel-mudguard-design-change-example-3-current.png",
        optimizedPartImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/heel-mudguard-design-change-example-3-optimised.png",
        currentNestingImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/design-change-example-3-current.png",
        optimizedNestingImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/design-change-example-3-optimised.png",
        currentP: "P: 61.87%", currentY: "Y: 0.021",
        optimizedP: "P: 66.41%", optimizedY: "Y: 0.018",
        metrics: { efficiency: "+4.54%", yieldVal: "-0.003 YD", costImpact: "-$0.054/pair" },
      },
    ],
  },
  {
    id: 2,
    title: "PATTERN SPLITTING",
    examples: [
      {
        id: "ex-1",
        layoutType: LAYOUT.SPLITTING,
        title: "2. PATTERN SPLITTING",
        partName: "HEEL MUDGUARD REINFORCEMENT",
        changeText: "SPLIT PATTERN",
        currentPartImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/heel-mud-reinf-pattern-splitting-example-1-current.png",
        optimizedPartImgs: ["https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/heel-mud-reinf-pattern-splitting-example-1-optimised-1.png", "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/heel-mud-reinf-pattern-splitting-example-1-optimised-2.png", "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/heel-mud-reinf-pattern-splitting-example-1-optimised-3.png"],
        currentNestingImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/pattern-splitting-example-1-current.png",
        currentP: "P: 46.8%", currentY: "Y: 0.193",
        optimizedNestings: [
          { img: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/pattern-splitting-example-1-optimised-1.png", p: "P: 67%", y: "Y: 0.044" },
          { img: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/pattern-splitting-example-1-optimised-2.png", p: "P: 85.1%", y: "Y: 0.094" },
        ],
        metrics: {
          efficiency: "+32.2%",
          yieldVal: "-0.055/YD",
          detailedCost: "Material: -$0.39/pair; Process: +$0.21/pair => Total: -$0.18/pair",
        },
      },
      {
        id: "ex-2",
        layoutType: LAYOUT.SPLITTING,
        title: "2. PATTERN SPLITTING",
        partName: "TOE CAP",
        changeText: "SPLIT PATTERN",
        currentPartImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/toe-cap-pattern-splitting-example-2-current.png",
        optimizedPartImgs: ["https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/toe-cap-pattern-splitting-example-2-optimised-1.png", "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/toe-cap-pattern-splitting-example-2-optimised-2.png"],
        currentNestingImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/pattern-splitting-example-2-current.png",
        currentP: "P: 54.17%", currentY: "Y: 0.042",
        optimizedNestings: [
          { img: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/pattern-splitting-example-2-optimised-1.png", p: "P: 66.9%", y: "Y: 0.014" },
          { img: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/pattern-splitting-example-2-optimised-2.png", p: "P: 68.6%", y: "Y: 0.013" },
        ],
        metrics: {
          efficiency: "+13.58%",
          yieldVal: "-0.015/YD",
          detailedCost: "Material: -$0.18/pair; Process: +$0.07/pair => Total: -$0.11/pair",
        },
      }
    ],
  },
  {
    id: 3,
    title: "PATTERN COMBINATION",
    examples: [
      {
        id: "ex-1",
        layoutType: LAYOUT.DEFAULT,
        title: "3. PATTERN COMBINATION",
        partName: "EYESTAY REINFORCEMENT",
        changeText: "COMBINE PATTERN",
        currentPartImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/eye-stay-pattern-combination-current.png",
        optimizedPartImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/eye-stay-pattern-combination-optimised.png",
        currentNestingImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/pattern-combination-current.png",
        optimizedNestingImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/pattern-combination-optimised.png",
        currentP: "P: 70.28%", currentY: "Y: 0.0047",
        optimizedP: "P: 76.1%", optimizedY: "Y: 0.0042",
        metrics: {
          efficiency: "+5.8%",
          yieldVal: "-0.001/YD",
          detailedCost: "Material -$0.03/pair; Process -$0.1/pair => Total: $-0.13/pair",
        },
      },
    ],
  },
  {
    id: 4,
    title: "PATTERN MODIFICATION",
    examples: [
      {
        id: "ex-1",
        layoutType: LAYOUT.DEFAULT,
        title: "3. PATTERN MODIFICATION",
        partName: "COLLAR REINFORCEMENT",
        changeText: "ADJUSTED PATTERN",
        currentPartImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/collar-reinf-pattern-modification-example-1-current.png",
        optimizedPartImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/collar-reinf-pattern-modification-example-1-optimised.png",
        currentNestingImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/pattern-modification-example-1-current.png",
        optimizedNestingImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/pattern-modification-example-1-optimised.png",
        currentP: "P: 74.64%", currentY: "Y: 0.054",
        optimizedP: "P: 75.25%", optimizedY: "Y: 0.047",
        metrics: {
          efficiency: "+0.61%",
          yieldVal: "-0.007/YD",
          detailedCost: "-$0.07/pair",
        },
      },
      {
        id: "ex-2",
        layoutType: LAYOUT.MODIFICATION,
        title: "4. PATTERN MODIFICATION: Example 2",
        partName: "VAMP LINING",
        variants: [
          { title: "Current Pattern", partImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/vamp-lining-pattern-modification-example-2-current.png", nestImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/pattern-modification-example-2-current.png", p: "P: 62.33%", y: "Y: 0.077", cost: "$0.272/pair" },
          { title: "Narrow Pattern", partImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/vamp-lining-pattern-modification-example-2-optimised-2.png", nestImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/pattern-modification-example-2-optimised-2.png", p: "P: 65.27%", y: "Y: 0.072", cost: "$0.249/pair" },
          { title: "Expand Pattern", partImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/vamp-lining-pattern-modification-example-2-optimised-3.png", nestImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/pattern-modification-example-2-optimised-3.png", p: "P: 48.4%", y: "Y: 0.104", cost: "$0.38/pair" },
        ]
      },
    ],
  },
  {
    id: 5,
    title: "PATTERN ROTATION",
    examples: [
      {
        id: "ex-1",
        layoutType: LAYOUT.ROTATION,
        title: "5. PATTERN ROTATION",
        partName: "HEEL COUNTER",
        partImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/heel-counter-pattern-rotation-example-1.png",
        directions: [
          { title: "Horizontal direction", nestImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/pattern-rotation-example-1-optimised.png", p: "P: 70.4%", y: "Y: 0.012" },
          { title: "Vertical direction", nestImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/pattern-rotation-example-1-current.png", p: "P: 76.5%", y: "Y: 0.011" },
        ],
        metrics: { efficiency: "+6.1%", yieldVal: "-0.001/YD", costImpact: "-$0.02/pair" }
      },
      {
        id: "ex-2",
        layoutType: LAYOUT.ROTATION,
        title: "5. PATTERN ROTATION",
        partName: "TOE CAP",
        partImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/toe-cap-pattern-rotation-example-2.png",
        directions: [
          { title: "Horizontal Direction", nestImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/pattern-rotation-example-2-current.png", p: "P: 64.37%", y: "Y: 0.006" },
          { title: "Vertical Direction", nestImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/pattern-rotation-example-2-optimised.png", p: "P: 67.68%", y: "Y: 0.005" },
        ],
        metrics: { efficiency: "+3.3%", yieldVal: "-0.001/YD", costImpact: "-$0.03/pair" }
      },
    ],
  },
  {
    id: 6,
    title: "PATTERN INTERLOCKING",
    examples: [
      {
        id: "ex-1",
        layoutType: LAYOUT.ROTATION,
        title: "6. PATTERN INTERLOCKING",
        partName: "COLLAR REINFORCEMENT",
        partImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/collar-reinf-pattern-interlocking-example-1.png",
        directions: [
          { title: "", nestImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/pattern-interlocking-example-1-current.png", p: "P: 68.62%", y: "Y: 0.022" },
          { title: "", nestImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/pattern-interlocking-example-1-optimised.png", p: "P: 71.05%", y: "Y: 0.02" },
        ],
        metrics: { efficiency: "+2.43%", yieldVal: "-0.002/YD", costImpact: "-$0.05/pair" }
      },
      {
        id: "ex-2",
        layoutType: LAYOUT.ROTATION,
        title: "6. PATTERN INTERLOCKINGN",
        partName: "TOE BOX",
        partImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/toe-box-pattern-interlocking-example-2.png",
        directions: [
          { title: "", nestImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/pattern-interlocking-example-2-current.png", p: "P: 47.74%", y: "Y: 0.078" },
          { title: "", nestImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/pattern-interlocking-example-2-optimised.png", p: "P: 55.2%", y: "Y: 0.068" },
        ],
        metrics: { efficiency: "+7.46%", yieldVal: "-0.01/YD", costImpact: "-$0.09/pair" }
      },
    ],
  },
  {
    id: 7,
    title: "MATERIAL WIDTH MODIFICATION",
    examples: [
      {
        id: "ex-1",
        layoutType: LAYOUT.ROTATION,
        title: "7. MATERIAL WIDTH MODIFICATION",
        partName: "TONGUE",
        partImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/tongue-material-width-example-1.png",
        directions: [
          { title: "44 Inch x Yard", nestImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/material-width-example-1-current.png", p: "P: 68.54%", y: "Y: 0.034" },
          { title: "54 Inch x Yard", nestImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/material-width-example-1-optimised.png", p: "P: 78.85%", y: "Y: 0.024" },
        ],
        metrics: { efficiency: "+10.31%", yieldVal: "-0.01/YD", costImpact: "-$0.06/pair" }
      },
      {
        id: "ex-2",
        layoutType: LAYOUT.ROTATION,
        title: "7. MATERIAL WIDTH MODIFICATION",
        partName: "COLLAR LINING",
        partImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/collar-lining-material-width-example-2.png",
        directions: [
          { title: "44 Inch x Yard", nestImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/material-width-example-2-current.png", p: "P: 54.35%", y: "Y: 0.075" },
          { title: "54 Inch x Yard", nestImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/material-width-example-2-optimised.png", p: "P: 69.31%", y: "Y: 0.048" },
        ],
        metrics: { efficiency: "+14.96%", yieldVal: "-0.027/YD", costImpact: "-$0.07/pair" }
      },
    ],
  },
];

// --- IMAGE PLACEHOLDER COMPONENT ---
const ImageBox = ({ src, alt, label }) => {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className="img-placeholder">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <span>{label || "Image Missing"}</span>
      </div>
    );
  }
  return <img src={src} alt={alt} onError={() => setError(true)} className="img-media" />;
};

// --- METRICS CARD WITH HOVER EFFECT ---
const MetricsCard = ({ example }) => (
  <div className="metrics-summary-card">
    <div className="metrics-mask">
      <span>Hover to Reveal Results</span>
    </div>
    <div className="metrics-content">
      <div className="metric-item">
        <span className="metric-label">Pattern Efficiency:</span>
        <span className="metric-value highlight">{example.metrics.efficiency}</span>
      </div>
      <div className="metric-item">
        <span className="metric-label">Yield:</span>
        <span className="metric-value">{example.metrics.yieldVal}</span>
      </div>
      <div className="metric-item">
        <span className="metric-label">Cost Impact:</span>
        <span className="metric-value">{example.metrics.detailedCost || example.metrics.costImpact}</span>
      </div>
    </div>
  </div>
);

export default function App() {
  const [activeStepId, setActiveStepId] = useState(1);
  const [activeExampleIndex, setActiveExampleIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false); // New state for overlay

  const currentStep = STEPS_DATA.find((step) => step.id === activeStepId) || STEPS_DATA[0];
  const currentExample = currentStep.examples[activeExampleIndex] || currentStep.examples[0];

  const handleStepChange = (stepId) => {
    setActiveStepId(stepId);
    setActiveExampleIndex(0); 
    setShowOverlay(false); // Reset overlay when changing steps
  };

  const handleExampleChange = (idx) => {
    setActiveExampleIndex(idx);
    setShowOverlay(false); // Reset overlay when changing tabs
  };

  // 1. DEFAULT LAYOUT RENDERER (Includes Image Overlay Feature)
  const renderDefaultBoard = (example) => (
    <div className="comparison-board">
      <div className="comparison-row row-parts">
        <div className="part-col">
          <span className="part-name-tag">{example.partName}</span>
          <span className="pattern-label-sub">Current Pattern</span>
          <div className="image-frame"><ImageBox src={example.currentPartImg} label="Current Part" /></div>
        </div>
        <div className="arrow-col">
          <span className="change-badge">CHANGE:<br/>{example.changeText}</span>
          <div className="arrow-icon">➔</div>
        </div>
        <div className="part-col">
          <div className="flex-space-between">
            <span className="part-name-tag spacer">SPACER</span>
            <button className="overlay-toggle-btn" onClick={() => setShowOverlay(!showOverlay)}>
              {showOverlay ? "Hide Overlay" : "Overlay Current"}
            </button>
          </div>
          <span className="pattern-label-sub">Optimisation Pattern</span>
          <div className="image-frame relative">
            <ImageBox src={example.optimizedPartImg} label="Optimized Part" />
            {showOverlay && (
              <img src={example.currentPartImg} alt="Current Pattern Overlay" className="overlay-img" />
            )}
          </div>
        </div>
      </div>
      <div className="comparison-row row-nesting">
        <div className="nesting-col">
          <span className="pattern-label-sub">Current Nesting</span>
          <div className="image-frame nesting-frame">
            <ImageBox src={example.currentNestingImg} label="Current Nesting" />
            <div className="metrics-overlay left"><span>{example.currentP}</span><span>{example.currentY}</span></div>
          </div>
        </div>
        <div className="arrow-col"><div className="arrow-icon green">➔</div></div>
        <div className="nesting-col">
          <span className="pattern-label-sub">Optimised Nesting</span>
          <div className="image-frame nesting-frame">
            <ImageBox src={example.optimizedNestingImg} label="Optimized Nesting" />
            <div className="metrics-overlay right"><span>{example.optimizedP}</span><span>{example.optimizedY}</span></div>
          </div>
        </div>
      </div>
      <MetricsCard example={example} />
    </div>
  );

  // 2. SPLITTING LAYOUT RENDERER
  const renderSplittingBoard = (example) => (
    <div className="comparison-board">
      <div className="comparison-row row-parts">
        <div className="part-col">
          <span className="part-name-tag">{example.partName}</span>
          <span className="pattern-label-sub">Current Pattern</span>
          <div className="image-frame"><ImageBox src={example.currentPartImg} label="Current Part" /></div>
        </div>
        <div className="arrow-col">
          <span className="change-badge">CHANGE:<br/>{example.changeText}</span>
          <div className="arrow-icon">➔</div>
        </div>
        <div className="multi-col parts">
          <span className="part-name-tag spacer"></span>
          <span className="pattern-label-sub">Optimisation Pattern</span>
          <div className="multi-images">
            {example.optimizedPartImgs.map((img, i) => (
              <div className="image-frame" key={i}><ImageBox src={img} label={`Opt Part ${i+1}`} /></div>
            ))}
          </div>
        </div>
      </div>
      <div className="comparison-row row-nesting">
        <div className="nesting-col">
          <span className="pattern-label-sub">Current Nesting</span>
          <div className="image-frame nesting-frame">
            <ImageBox src={example.currentNestingImg} label="Current Nesting" />
            <div className="metrics-overlay center"><span>{example.currentP}</span><span>{example.currentY}</span></div>
          </div>
        </div>
        <div className="arrow-col"><div className="arrow-icon green">➔</div></div>
        <div className="multi-col nests">
          <span className="pattern-label-sub">Optimised Nesting</span>
          <div className="multi-images">
            {example.optimizedNestings.map((nest, i) => (
              <div className="nesting-col" key={i}>
                <div className="image-frame nesting-frame">
                  <ImageBox src={nest.img} label={`Opt Nest ${i+1}`} />
                  <div className="metrics-overlay right"><span>{nest.p}</span><span>{nest.y}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MetricsCard example={example} />
    </div>
  );

  // 3. MODIFICATION LAYOUT RENDERER
  const renderModificationBoard = (example) => (
    <div className="comparison-board">
      <span className="part-name-tag">{example.partName}</span>
      <div className="mod-grid">
        {example.variants.map((v, i) => (
          <div className="mod-col" key={i}>
            <span className="pattern-label-sub">{v.title}</span>
            <div className="image-frame"><ImageBox src={v.partImg} label={`${v.title} Part`} /></div>
            
            <span className="pattern-label-sub" style={{marginTop: '0.5rem'}}>{v.title} Nesting</span>
            <div className="image-frame nesting-frame">
              <ImageBox src={v.nestImg} label={`${v.title} Nesting`} />
              <div className="metrics-overlay right"><span>{v.p}</span><span>{v.y}</span></div>
            </div>
            
            <div className="cost-card">
              <span className="metric-label">Material Cost:</span>
              <span className="metric-value lg">{v.cost}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // 4. ROTATION LAYOUT RENDERER
  const renderRotationBoard = (example) => (
    <div className="comparison-board">
      <div className="rotation-top">
        <div className="part-col center-col">
          <span className="part-name-tag">{example.partName}</span>
          <span className="pattern-label-sub">Current Pattern</span>
          <div className="image-frame"><ImageBox src={example.partImg} label="Current Part" /></div>
        </div>
      </div>
      <div className="rotation-grid">
        {example.directions.map((d, i) => (
          <div className="nesting-col" key={i}>
             <span className="pattern-label-sub" style={{textAlign: 'center'}}>{d.title}</span>
             <div className="image-frame nesting-frame">
                <ImageBox src={d.nestImg} label={d.title} />
                <div className="metrics-overlay right"><span>{d.p}</span><span>{d.y}</span></div>
             </div>
          </div>
        ))}
      </div>
      <MetricsCard example={example} />
    </div>
  );

  // Dynamic board selector
  const renderActiveBoard = () => {
    switch (currentExample.layoutType) {
      case LAYOUT.SPLITTING: return renderSplittingBoard(currentExample);
      case LAYOUT.MODIFICATION: return renderModificationBoard(currentExample);
      case LAYOUT.ROTATION: return renderRotationBoard(currentExample);
      case LAYOUT.DEFAULT:
      default:
        return renderDefaultBoard(currentExample);
    }
  };

  return (
    <div className="app-container">
      <div className="folder-container">
        {/* SIDEBAR NAVIGATION */}
        <div className="folder-sidebar">
          <h2 className="sidebar-title">7 STEPS FOR PATTERN EFFICIENCY IMPROVEMENT</h2>
          <div className="tab-list">
            {STEPS_DATA.map((step) => (
              <button
                key={step.id}
                onClick={() => handleStepChange(step.id)}
                className={`tab-button ${step.id === activeStepId ? "active" : ""}`}
              >
                <span className="step-number">{step.id}</span>
                <span className="step-text">{step.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="folder-content">
          <div className="content-header">
            <h1 className="content-title">{currentExample.title}</h1>
            <div className="example-tabs">
              {currentStep.examples.map((ex, idx) => (
                <button
                  key={ex.id}
                  onClick={() => handleExampleChange(idx)}
                  className={`example-btn ${activeExampleIndex === idx ? "active" : ""}`}
                >
                  Example {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* RENDER THE CORRECT LAYOUT FOR THE EXAMPLE */}
          {renderActiveBoard()}

        </div>
      </div>
    </div>
  );
}