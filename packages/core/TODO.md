# New

x Rename action -> basic?
- Form control sizes: small | medium | large
- Checkbox indeterminate state
- Form control and button hover effects

- Review all colors
    - primary:
        - highlighted (e.g. hover)
        - dimmed (e.g. dimmed label)
        - faded (e.g. disabled)
        - divider (e.g. border)


    {
        primary: {
            base: x,
            contrast: x,
            variants: {
                highlighted: { action: 'lighten', amount: 0.1 },
                dimmed: { action: 'mix', target: 'base', amount: 0.5 },
                divider: { action: 'override', color: 'red' },
            }
        },
        success: {
            base: 'x',
            contrast: 'y',
            variants: {
                primary: { action: 'invert' },
            }
        },
    }


- Auto-populate controls in docs
- UI-text vs "running text"
    - Some nice formatting for stuff like `<code>`, `<em | i>`, and `<a>`.

# Old

- Proper Navlink component
- Overflow auto on hover (otherwise hidden) in navbar
- Add support for theme overrides (eg panel.padding)
- Rename icons
- Light/dark color variations
- Overlay color overrides.
- `action` font class (e.g. button, tabs etc)
- Intent vs appearance
- Color schemes:
    - Sequential
    - Diverging
    - Random
    - Low to high
- Responsive?

- Enhancements
    - Tooltip
        - Positioning

- Components
    - Timeline
    - Dropdown
    - Popover
    - Callout
    - Menu (e.g. content for sidebar)
    - Center/Align
    - Forms
    - SelectPanel (like Yalla device select or Palantir network analysis)
    - Charts
    - Box
    - SideSheet
    - Dialog
    - Switch
    - Avatar
    - Pill
    - Checkbox
    - DatePicker
- Next generation
    - Weather
    - DataGrid
- Maybe
    - Comment

-Elements
    - ClimateOverview
    - ClimateSensors3d
    - DoorSensors3d
    - AnomalyDetection

- Stories

- Documentation
    - Example app
    - Explain "spacing" and that many container components have a margin by
      default, but can switch between settings (reduced, compact etc)
    - Fabric vs "EFC", "Elements" etc
    - How this does not replace css or aim to be an exhaustive design
      specification. Many uis are unique and we don't want the devs to fight
      with the system.
    - "When it comes to layout, do basic things, reasonably well"
