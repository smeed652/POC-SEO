// Molecule: PreferenceIndicators
import React from 'react';

interface PreferenceIndicatorsProps {
  calories?: number;
  match?: boolean;
}

export const PreferenceIndicators: React.FC<PreferenceIndicatorsProps> = ({ calories, match }) => (
  <div className="flex flex-row items-center gap-2 w-full justify-center">
    {typeof calories === 'number' && (
      <span className="text-sm font-medium text-[#071D3B]">{calories} Calories</span>
    )}
    {typeof calories === 'number' && match !== undefined && (
      <span className="w-[3px] h-[9px] border-l border-[#071D3B] mx-1" />
    )}
    {match !== undefined && (
      <span className={`flex items-center gap-1 text-xs ${match ? 'text-green-600' : 'text-gray-400'}`}> 
        <span className={`inline-block w-2 h-2 rounded-full ${match ? 'bg-green-500' : 'bg-gray-300'}`}></span>
        {match ? 'Preference Match' : 'No Match'}
      </span>
    )}
  </div>
)
