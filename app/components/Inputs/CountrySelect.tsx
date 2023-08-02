import useCountries from '@/app/hooks/useCountries';
import ReactCountryFlag from 'react-country-flag';

import Select from 'react-select';

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<
  CountrySelectProps
> = ({ value, onChange }) => {
  const { getAll } = useCountries();

  return (
    <div className=''>
      <Select
        placeholder='Anywhere'
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) =>
          onChange(value as CountrySelectValue)
        }
        formatOptionLabel={(option: any) => (
          <div className='flex flex-row items-center gap-3'>
            <ReactCountryFlag
              className='w-1[em] h-[1em]'
              countryCode={option.value}
              svg
              aria-label={option.label}
            />
            <div className=''>
              {option.label},
              <span className='text-neutral-500 ml-1'>
                {option.region}
              </span>
            </div>
          </div>
        )}
        // Selector Styling
        classNames={{
          control: () => 'p-3 border-2',
          input: () => 'text-lg',
          option: () => 'text-lg',
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: '#03045e',
            primary25: '#57b9fa',
          },
        })}
      />
    </div>
  );
};

export default CountrySelect;
