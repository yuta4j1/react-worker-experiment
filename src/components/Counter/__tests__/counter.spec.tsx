import React from "react"
import { shallow } from "enzyme"
import Counter from "../index"

describe("<Counter />", () => {
  it("<Counter /> init val", () => {
    const wrapper = shallow(<Counter initialValue={10} />)
    expect(wrapper.childAt(0).type()).toBe("button")
    expect(wrapper.childAt(1).type()).toBe("span")
    expect(wrapper.childAt(2).type()).toBe("button")
  })
})
