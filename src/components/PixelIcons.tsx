import React from 'react';

export const PixelHeart: React.FC<{ full?: boolean; className?: string }> = ({ full = true, className = "w-4 h-4" }) => {
  return (
    <svg viewBox="0 0 9 9" className={className} shapeRendering="crispEdges">
      {full ? (
        <>
          {/* Border */}
          <path d="M1 0h3v1h1v-1h3v1h1v3h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-3h1z" fill="#000000" />
          {/* Main Red */}
          <path d="M2 1h2v3h-2zm3 0h2v3h-2zm-2 3h4v1h-4zm1 1h2v1h-2z" fill="#e11d48" />
          {/* Dark Red Shadow */}
          <path d="M6 2h1v2h-1zm-4 3h1v1h-1zm1 1h1v1h-1zm1 1h1v1h-1z" fill="#9f1239" />
          {/* White Highlight */}
          <path d="M2 1h1v1h-1zm3 0h1v1h-1z" fill="#ffffff" />
        </>
      ) : (
        <>
          {/* Empty Heart Border */}
          <path d="M1 0h3v1h1v-1h3v1h1v3h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-3h1z" fill="#000000" />
          <path d="M2 1h2v3h-2zm3 0h2v3h-2zm-2 3h4v1h-4zm1 1h2v1h-2z" fill="#1f2937" />
        </>
      )}
    </svg>
  );
};

export const PixelDrumstick: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => {
  return (
    <svg viewBox="0 0 9 9" className={className} shapeRendering="crispEdges">
      {/* Outer border */}
      <path d="M3 0h3v1h2v2h1v3h-1v1h-1v1h-1v-1h-1v1h-2v-1h-1v-1h-1v-2h1v-1h1v-1h-1v-1z" fill="#000000" />
      {/* Meat brown */}
      <path d="M4 1h2v2h2v2h-1v1h-1v-1h-1v-1h-1v-1h-1v-2z" fill="#d97706" />
      {/* Dark crust */}
      <path d="M6 3h2v2h-1v1h-1z" fill="#92400e" />
      {/* Bone */}
      <path d="M1 6h2v2h-2z" fill="#e2e8f0" />
      <path d="M0 7h1v1h-1zm2 1h1v1h-1z" fill="#94a3b8" />
    </svg>
  );
};

export const PixelGrassBlock: React.FC<{ className?: string; size?: number }> = ({ className = "w-6 h-6", size }) => {
  return (
    <svg viewBox="0 0 16 16" className={className} style={size ? { width: size, height: size } : undefined} shapeRendering="crispEdges">
      {/* Dirt Base */}
      <rect width="16" height="16" fill="#6d4928" />
      {/* Dark Dirt Spots */}
      <rect x="2" y="8" width="2" height="2" fill="#4a3018" />
      <rect x="7" y="11" width="3" height="2" fill="#4a3018" />
      <rect x="12" y="7" width="2" height="2" fill="#4a3018" />
      <rect x="4" y="13" width="2" height="2" fill="#4a3018" />
      <rect x="11" y="13" width="3" height="2" fill="#4a3018" />
      {/* Light Dirt Spots */}
      <rect x="5" y="7" width="2" height="2" fill="#845a33" />
      <rect x="10" y="9" width="2" height="2" fill="#845a33" />
      <rect x="1" y="11" width="2" height="2" fill="#845a33" />
      {/* Grass Top */}
      <rect x="0" y="0" width="16" height="4" fill="#5b8c32" />
      {/* Grass Highlight */}
      <rect x="1" y="0" width="3" height="1" fill="#78b13f" />
      <rect x="6" y="0" width="4" height="1" fill="#78b13f" />
      <rect x="12" y="0" width="3" height="1" fill="#78b13f" />
      <rect x="3" y="1" width="2" height="1" fill="#78b13f" />
      <rect x="9" y="1" width="2" height="1" fill="#78b13f" />
      {/* Grass Dark Shadow Line */}
      <rect x="0" y="3" width="2" height="1" fill="#3f5f1a" />
      <rect x="4" y="3" width="3" height="1" fill="#3f5f1a" />
      <rect x="9" y="3" width="2" height="1" fill="#3f5f1a" />
      <rect x="13" y="3" width="3" height="1" fill="#3f5f1a" />
      {/* Overhang Drips */}
      <rect x="1" y="4" width="1" height="2" fill="#5b8c32" />
      <rect x="3" y="4" width="2" height="1" fill="#5b8c32" />
      <rect x="4" y="5" width="1" height="1" fill="#3f5f1a" />
      <rect x="7" y="4" width="1" height="3" fill="#5b8c32" />
      <rect x="8" y="4" width="1" height="1" fill="#5b8c32" />
      <rect x="11" y="4" width="2" height="2" fill="#5b8c32" />
      <rect x="14" y="4" width="1" height="2" fill="#3f5f1a" />
      {/* Crisp Border */}
      <rect x="0" y="0" width="16" height="1" fill="#88c848" />
      <rect x="0" y="0" width="1" height="16" fill="#88c848" opacity="0.3" />
      <rect x="0" y="15" width="16" height="1" fill="#2d1c0d" />
      <rect x="15" y="0" width="1" height="16" fill="#2d1c0d" />
    </svg>
  );
};

export const PixelEmerald: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => {
  return (
    <svg viewBox="0 0 16 16" className={className} shapeRendering="crispEdges">
      {/* Border */}
      <polygon points="4,0 12,0 16,4 16,12 12,16 4,16 0,12 0,4" fill="#062e12" />
      {/* Mid Green */}
      <polygon points="4,1 12,1 15,4 15,12 12,15 4,15 1,12 1,4" fill="#10b981" />
      {/* Facets */}
      <rect x="4" y="3" width="8" height="10" fill="#34d399" />
      {/* Bright Highlight */}
      <rect x="4" y="3" width="3" height="3" fill="#a7f3d0" />
      <rect x="2" y="4" width="2" height="2" fill="#6ee7b7" />
      {/* Shadow */}
      <polygon points="12,12 14,10 14,13 11,15" fill="#047857" />
      <rect x="8" y="11" width="4" height="2" fill="#059669" />
    </svg>
  );
};

export const PixelSword: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => {
  return (
    <svg viewBox="0 0 16 16" className={className} shapeRendering="crispEdges">
      {/* Blade Tip */}
      <rect x="13" y="1" width="2" height="2" fill="#10b981" />
      <rect x="12" y="0" width="2" height="1" fill="#064e3b" />
      <rect x="15" y="2" width="1" height="2" fill="#064e3b" />
      {/* Blade Body */}
      <rect x="11" y="3" width="2" height="2" fill="#34d399" />
      <rect x="9" y="5" width="2" height="2" fill="#34d399" />
      <rect x="7" y="7" width="2" height="2" fill="#34d399" />
      <rect x="12" y="2" width="2" height="2" fill="#6ee7b7" />
      <rect x="10" y="4" width="2" height="2" fill="#6ee7b7" />
      <rect x="8" y="6" width="2" height="2" fill="#6ee7b7" />
      <rect x="10" y="2" width="1" height="1" fill="#047857" />
      <rect x="8" y="4" width="1" height="1" fill="#047857" />
      <rect x="6" y="6" width="1" height="1" fill="#047857" />
      {/* Guard */}
      <rect x="5" y="9" width="3" height="1" fill="#854d0e" />
      <rect x="7" y="7" width="1" height="3" fill="#854d0e" />
      <rect x="6" y="8" width="2" height="2" fill="#fbbf24" />
      {/* Handle */}
      <rect x="3" y="11" width="2" height="2" fill="#78350f" />
      <rect x="2" y="12" width="2" height="2" fill="#451a03" />
      {/* Pommel */}
      <rect x="1" y="14" width="2" height="1" fill="#fbbf24" />
      <rect x="0" y="13" width="1" height="2" fill="#fbbf24" />
    </svg>
  );
};

export const PixelPickaxe: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => {
  return (
    <svg viewBox="0 0 16 16" className={className} shapeRendering="crispEdges">
      {/* Pick Head Diamond/Cyan */}
      <rect x="9" y="1" width="6" height="2" fill="#38bdf8" />
      <rect x="13" y="3" width="2" height="4" fill="#38bdf8" />
      <rect x="7" y="2" width="3" height="2" fill="#0284c7" />
      <rect x="12" y="6" width="2" height="2" fill="#0284c7" />
      <rect x="11" y="1" width="3" height="1" fill="#bae6fd" />
      {/* Handle Wood */}
      <rect x="8" y="6" width="2" height="2" fill="#78350f" />
      <rect x="6" y="8" width="2" height="2" fill="#92400e" />
      <rect x="4" y="10" width="2" height="2" fill="#78350f" />
      <rect x="2" y="12" width="2" height="2" fill="#92400e" />
      <rect x="0" y="14" width="2" height="2" fill="#78350f" />
    </svg>
  );
};

export const PixelBeacon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => {
  return (
    <svg viewBox="0 0 16 16" className={className} shapeRendering="crispEdges">
      {/* Obsidian Base */}
      <rect x="1" y="13" width="14" height="3" fill="#1e1b4b" />
      <rect x="2" y="14" width="12" height="1" fill="#312e81" />
      {/* Glass outer box */}
      <rect x="2" y="2" width="12" height="11" fill="none" stroke="#67e8f9" strokeWidth="1" opacity="0.6" />
      {/* Core Nether Star / Crystal */}
      <rect x="5" y="5" width="6" height="6" fill="#38bdf8" />
      <rect x="6" y="6" width="4" height="4" fill="#e0f2fe" />
      <rect x="7" y="7" width="2" height="2" fill="#ffffff" />
      {/* Energy beam emission */}
      <rect x="6" y="0" width="4" height="2" fill="#a5f3fc" opacity="0.8" />
    </svg>
  );
};

export const PixelCraftingTable: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => {
  return (
    <svg viewBox="0 0 16 16" className={className} shapeRendering="crispEdges">
      {/* Oak Wood Base */}
      <rect width="16" height="16" fill="#854d0e" />
      {/* Top Grid Area */}
      <rect x="1" y="1" width="14" height="4" fill="#a16207" />
      <rect x="2" y="1" width="4" height="4" fill="#b45309" />
      <rect x="7" y="1" width="3" height="4" fill="#78350f" />
      <rect x="11" y="1" width="4" height="4" fill="#ca8a04" />
      {/* Front Tool Inset */}
      <rect x="2" y="7" width="12" height="7" fill="#713f12" />
      {/* Saw & Hammer silhouette */}
      <rect x="4" y="9" width="3" height="1" fill="#451a03" />
      <rect x="5" y="10" width="1" height="3" fill="#451a03" />
      <rect x="10" y="9" width="2" height="3" fill="#ca8a04" />
      {/* Top Border highlight */}
      <rect x="0" y="0" width="16" height="1" fill="#eab308" opacity="0.5" />
      <rect x="0" y="15" width="16" height="1" fill="#361704" />
    </svg>
  );
};

