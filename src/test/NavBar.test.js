import { render, screen } from '@testing-library/react'
import { Loading } from '../components/panel_items/Loading'

describe('Logo', () => {
    it('renders appropriately', () => {
        render(<Loading style="" />)
        expect(screen.getByTestId)
    })

    // it('render class', () => {
    //     render(<Loading style=""/>)
    //     expect(screen.'loading-span')).toBe()
    // })
})