import { createGlobalState } from 'react-use';
import { defaultConfig } from '../constants';
import { Config } from '../types';

const useGlobalValue = createGlobalState<Config>(defaultConfig);

export const useConfig = (): [Config, (config: Partial<Config>) => void] => {
  const [config, setConfig] = useGlobalValue();

  const setPartialConfig = (partialConfig: Partial<Config>) => {
    setConfig({
      ...config,
      ...partialConfig,
    });
  };

  return [config, setPartialConfig];
};

export const useSingleConfig = <T extends Config[keyof Config]>(
  key: keyof Config
): [T, (value: T) => void] => {
  const [config, setConfig] = useConfig();

  const setSingleConfig = (value: T) => {
    setConfig({
      ...config,
      [key]: value,
    });
  };

  return [config[key] as T, setSingleConfig as (value: T) => void];
};
