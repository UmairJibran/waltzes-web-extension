import React from 'react';
import { JobStatus } from '../api/jobs';
import { StatusIndicator } from './StatusIndicator';

interface Props {
  status: JobStatus;
  selectedOptions: {
    resume: boolean;
    coverLetter: boolean;
  };
  mode?: 'page_scan' | 'selected_text';
}

export const StatusPanel: React.FC<Props> = ({
  status,
  selectedOptions,
  mode,
}) => (
  <div className="neo-container">
    <h3 className="font-bold text-xl mb-4 text-primary-heading">
      Status: {status.status.charAt(0).toUpperCase() + status.status.slice(1)}
    </h3>

    <div className="space-y-3">
      <StatusIndicator
        status={status.steps.scraping}
        label={
          mode === 'selected_text'
            ? 'Processing Selected Text'
            : 'Scanning Job Post'
        }
        tooltip={
          mode === 'selected_text'
            ? 'Using your selected text for better accuracy'
            : undefined
        }
      />
      {selectedOptions.resume && (
        <StatusIndicator
          status={status.steps.resume || 'pending'}
          label="Generating Resume"
        />
      )}
      {selectedOptions.coverLetter && (
        <StatusIndicator
          status={status.steps.coverLetter || 'pending'}
          label="Generating Cover Letter"
        />
      )}
      <StatusIndicator status={status.steps.pdf} label="Creating PDF" />
    </div>
  </div>
);
