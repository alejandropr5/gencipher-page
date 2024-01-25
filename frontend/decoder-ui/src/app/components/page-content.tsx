'use client'

import React from 'react'
import { TextArea } from './textarea'
import { PageText } from './page-text'
import { FieldValues, UseFormRegister, UseFormReset, UseFormSetValue } from 'react-hook-form'

interface PageContentProps {
  register: UseFormRegister<FieldValues>
  setValue: UseFormSetValue<FieldValues>
  showResult: boolean
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>
  cipherKey: string
  setCipherKey: React.Dispatch<React.SetStateAction<string>>
  fitness: number
  reset: UseFormReset<FieldValues>
  inputDevRef: React.RefObject<HTMLDivElement>
}

export function PageContent(data: PageContentProps) {
  return (
    <div className="flex min-h-full h-fit w-full justify-between px-4 z-0">
      <div className="flex flex-col w-auto mx-28 font-sans mt-5">
        <PageText/>
        <TextArea
          register={data.register}
          setValue={data.setValue}
          showResult={data.showResult}
          setShowResult={data.setShowResult}
          cipherKey={data.cipherKey}
          fitness={data.fitness}
          reset={data.reset}
          setCipherKey={data.setCipherKey}
          inputDevRef={data.inputDevRef}
        />
      </div>
    </div>
  )
}