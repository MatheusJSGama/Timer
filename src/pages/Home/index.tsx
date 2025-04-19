import { Play } from '@phosphor-icons/react/dist/ssr'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  HomeContainer,
  StopCountDownButton,
  StartCountdownButton,
} from './styles'
import { useContext } from 'react'
import { HandPalm } from '@phosphor-icons/react'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/CountDown'
import { CyclesContext } from '../../context/CyclesContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, { message: 'informe a tarefa' }),
  minutesAmount: zod.number()
    .min(1, { message: 'O ciclo deve ter no mínimo 5 minutos' })
    .max(60, { message: 'o clico deve ter no máximo 60 minutos' }),
})

type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const {
    CreateNewCicle,
    InterruptCurrentCycle,
    activeCycle,
  } = useContext(CyclesContext)

  const newCycleForm = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      minutesAmount: 0,
      task: '',
    },
  })

  const { watch, handleSubmit, reset } = newCycleForm

  function handleCreateNewCycle(data: newCycleFormData) {
    CreateNewCicle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle
          ? (
            <StopCountDownButton onClick={InterruptCurrentCycle} type="button">
              <HandPalm size={24} />
              Interromber
            </StopCountDownButton>
            )
          : (
            <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
              <Play size={24} />
              Começar
            </StartCountdownButton>
            )}

      </form>
    </HomeContainer>
  )
}
