import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import { PtLanguage } from '../languages/pt.ts'
import { LanguageType, UkLanguage } from '../languages/uk.ts'

type CountryCode = 'pt' | 'uk'

type LanguageContextType = {
  setCurrentCountry: Dispatch<SetStateAction<CountryCode>>
  currentLanguage: LanguageType
  currentCountry: CountryCode
}

const LanguageContext = createContext<LanguageContextType>({
  setCurrentCountry: () => null,
  currentLanguage: UkLanguage,
  currentCountry: 'uk',
})

const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const localstorageKey = 'ENGAGE_AGENCY_LANGUAGE'
  const [currentCountry, setCurrentCountry] = useState<CountryCode>(
    (localStorage.getItem(localstorageKey) as CountryCode) ?? 'uk'
  )
  const [currentLanguage, setCurrentLanguage] =
    useState<LanguageType>(UkLanguage)

  useEffect(() => {
    if (currentCountry === 'pt') setCurrentLanguage(PtLanguage)
    else setCurrentLanguage(UkLanguage)

    localStorage.setItem(localstorageKey, currentCountry)
  }, [currentCountry])

  useEffect(() => {
    const country = localStorage.getItem(localstorageKey)
    if (country) setCurrentCountry(country as CountryCode)
  }, [])

  return (
    <LanguageContext.Provider
      value={{ currentCountry, setCurrentCountry, currentLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

const useLanguage = () => useContext(LanguageContext)

export { LanguageProvider, useLanguage }
