import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styled from 'styled-components'

type Option = { label: string; value: string }

type Props = {
  title: string
  name: string
  setFilter: (name: string, values: any) => void
  state: any
  options: Option[]
}

const optionValue = (o: Option) => o.value
const optionLabel = (o: Option) => o.label

const addOrRemoveOption = (selected: Option[], option: Option) => {
  if (isSelected(option, selected)) {
    return selected.filter(s => optionValue(s) !== optionValue(option))
  }

  return [...selected, option]
}

const isSelected = (option: Option, selected: Option[]) => {
  return (
    selected.find(s => optionValue(s) === optionValue(option)) !== undefined
  )
}

function useComponentVisible(
  initialIsOpened: boolean,
  onVisibilityChange: (visibility: boolean) => void,
) {
  const [opened, setOpened] = useState(initialIsOpened)
  const ref = useRef(null) as any

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onVisibilityChange(false)
    }
  }

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onVisibilityChange(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleHideDropdown, true)
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('keydown', handleHideDropdown, true)
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return { ref, opened, setOpened }
}

function useOuterClickNotifier(innerRef: any, onOuterClick: () => void) {
  useLayoutEffect(() => {
    function handleClick(e: any) {
      if (innerRef.current && !innerRef.current.contains(e.target)) {
        onOuterClick()
      }
    }
    document.addEventListener('click', handleClick)
    // called for each previous layout effect
    return () => document.removeEventListener('click', handleClick)
  }, [onOuterClick, innerRef]) // invoke again, if inputs have changed
}

export const FilterSelect: React.SFC<Props> = props => {
  const [selected, setSelected] = useState<Option[]>(
    props.state.filters[props.name] || [],
  )
  const { ref, opened, setOpened } = useComponentVisible(
    false,
    newVisibility => {
      if (opened && !newVisibility) {
        setOpened(false)

        props.setFilter(props.name, selected)
      }
    },
  )

  const onChange = (option: { label: string; value: string }) => {
    const items = addOrRemoveOption(selected, option)
    setSelected(items)
  }

  return (
    <div ref={ref}>
      <Toggler
        opened={opened}
        hasSelectedElements={selected.length > 0}
        onClick={() => setOpened(!opened)}
      >
        {props.title}
      </Toggler>
      {opened && (
        <Box>
          <ActionPane>
            <AmountSelected>{selected.length} selected</AmountSelected>
          </ActionPane>
          <SelectContainer>
            <List>
              {props.options.map(o => (
                <Option
                  key={`${o.label}-${o.value}`}
                  onClick={() => onChange({ label: o.label, value: o.value })}
                >
                  <CheckBox checked={isSelected(o, selected)} />
                  <Label>{o.label}</Label>
                </Option>
              ))}
            </List>
          </SelectContainer>
        </Box>
      )}
    </div>
  )
}

const Toggler = styled.div<{ hasSelectedElements: boolean; opened: boolean }>`
  padding: 5px;
  cursor: pointer;
  padding: 7px 12px;
  line-height: 1;
  letter-spacing: 0.5px;
  background: #f3f3f3;
  color: #333;
  border-radius: 20px;
  margin-right: 8px;

  ${props =>
    props.hasSelectedElements || props.opened
      ? `background: #1a1a1a; color: #fff;`
      : ''}

  &:hover {
    ${props =>
      props.hasSelectedElements || props.opened
        ? 'color: #fff; background-color: #4b4b4b;'
        : 'background: #ddd; color: #1a1a1a;'}
  }
`

const Box = styled.div`
  position: absolute;
  width: 252px;
  padding-top: 11px;
  border: 1px solid #ddd;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.15);
  margin-top: 5px;
  background: #fff;
`

const ActionPane = styled.div`
  color: #1a1a1a;
  padding-bottom: 12px;
  border-bottom: 1px solid #ddd;
  line-height: 21px;
`

const AmountSelected = styled.span`
  display: inline;
  text-align: left;
  padding-left: 10px;
`

const ActionRight = styled.span`
  display: inline;
  text-align: right;
  display: none;
  font-weight: 700;
  padding-right: 17px;
  cursor: pointer;
`

const SelectContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 180px;
  max-height: 300px;
  height: 40vh;
  margin-right: 12px;
  color: #1a1a1a;
  transform: translateZ(0);
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  outline: none;
  overflow-x: hidden;
`

const Option = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  list-style-type: none;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #f3f3f3;
  }
`
const CheckBox = styled.span<{ checked: boolean }>`
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  text-align: center;
  vertical-align: middle;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 2px;
  border: 1px solid #333;

  ${props => `border: 1px solid ${props.checked ? '#0062b4' : '#333'};}`}

  &:after {
    content: '';
    opacity: 0;
    position: absolute;
    width: 11px;
    height: 5px;
    top: 8px;
    left: 6px;
    border: 2px solid #1a1a1a;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    transition: opacity 0.1s ease-in-out;
    ${props => `opacity: ${props.checked ? 1 : 0};`}
  }
`

const Label = styled.span`
  color: #1a1a1a;
  text-decoration: none;
  font-size: 14px;
`

/**
 * opened
 * 
 *     background-color: #1a1a1a;
    color: #fff;
    text-shadow: 0 0 1px #fff;
 */
