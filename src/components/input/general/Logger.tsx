import { useConfig } from '../../../hooks/useConfig';
import Accordion from '../../Accordion';
import Select from '../../form/Select';
import { SwitchGroup } from '../../form/Switch';

const Logger: React.FC = () => {
  const [config] = useConfig();

  return (
    <Accordion title="Logger Options">
      <div className="flex flex-col space-y-5">
        <Select
          label="Log level"
          prop="logLevel"
          disabled={!config.logConsole && !config.logFile}
          options={{
            error: 'error',
            warning: 'warning',
            info: 'info',
            debug: 'debug',
            spam: 'spam',
          }}
        />
        <SwitchGroup label="Console log" prop="logConsole">
          Whether to actually write to stdout/stderr if foregrounded.
        </SwitchGroup>
        <SwitchGroup label="File log" prop="logFile">
          Whether to use a log file.
        </SwitchGroup>
      </div>
    </Accordion>
  );
};

export default Logger;
