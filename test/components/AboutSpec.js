import test from 'tape'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'
import fetch from 'node-fetch'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import { getAllTags, getTag } from '../utils'
import setup from '../setup.js'
import data from '../data/projects.json'
import { getInitialState } from '../../src/getInitialState'
import getStaticContent from '../../src/staticContent'

const staticContent = getStaticContent()
setup()

// Components to check
import About from '../../src/components/about/About'
import Button from '../../src/components/common/StarMeButton'

test('Star on Github button', assert => {
  const component = mount(
    <Button url={staticContent.repo} />
  )

  assert.ok(component, `The component should exist.`)

  const a = component.find('a')
  const node = a.getNode()
  const url = node.href

  assert.ok(/michaelrambeau/.test(url), `It should be one of my repositories.`)

  // http request to check the repository
  fetch(url)
    .then(r => {
      assert.ok(r.status === 200, `Github response should be OK`)
      assert.end()
    })
    .catch(err => {
      assert.fail('Bad response!', err.message)
      assert.end()
    })
})

test('Check <About> component', assert => {
  const state = getInitialState(data)
  const component = TestUtils.renderIntoDocument(
    <MemoryRouter>
      <About githubProjects={state} staticContent={staticContent} />
    </MemoryRouter>
  )

  assert.ok(component, `The component should exist.`)

  const p = getAllTags(component, 'p')

  assert.ok(p.length > 10, `There should be several paragraphs.`)

  assert.end()
})
