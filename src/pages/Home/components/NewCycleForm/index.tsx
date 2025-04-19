import { FormContainer, MinutesAmoutInput, TaskInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../context/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)

  const { register } = useFormContext()

  return (
    <FormContainer>

      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        placeholder="Dê nome para o seu projeto"
        list="TaskSugestions"
        disabled={!!activeCycle}
        {
            ...register('task', {
            })
            }
      />

      <datalist id="TaskSugestions">
        <option value="Estudar React" />
        <option value="Estudar documentação" />
        <option value="Leitura" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmoutInput
        type="number"
        id="minutesAmout"
        placeholder="00"
        step={1}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {
            ...register('minutesAmount', {
              valueAsNumber: true,
            })
            }
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
