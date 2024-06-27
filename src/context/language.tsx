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
import { LanguageType, UkLanguage } from '../languages/uk.ts'
import { PtLanguage } from '../languages/pt.ts'

type CountryCode = 'pt' | 'uk'

type LanguageContextType = {
  setCurrentCountry: Dispatch<SetStateAction<CountryCode>>
  currentLanguage: LanguageType
}

const LanguageContext = createContext<LanguageContextType>({
  setCurrentCountry: () => null,
  currentLanguage: UkLanguage,
})

const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentCountry, setCurrentCountry] = useState<CountryCode>('uk')
  const [currentLanguage, setCurrentLanguage] =
    useState<LanguageType>(UkLanguage)

  useEffect(() => {
    if (currentCountry === 'pt') setCurrentLanguage(PtLanguage)
    else setCurrentLanguage(UkLanguage)
  }, [currentCountry])

  return (
    <LanguageContext.Provider value={{ setCurrentCountry, currentLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

const useLanguage = () => useContext(LanguageContext)

export { LanguageProvider, useLanguage }
