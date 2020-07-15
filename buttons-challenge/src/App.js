import React from 'react';
import './App.css';
import { Button, Snippet } from './components/';

function App() {
  return (
    <div className="container">
      <h2 className="title">Modes</h2>
      <div class="row">
        <div class="item">
          <Snippet>&lt;Button /&gt;</Snippet>
          <Button />
        </div>
        <div class="item">
          <Snippet>&lt;Button variant="outline" /&gt;</Snippet>
          <Button variant="outline" />
        </div>
        <div class="item">
          <Snippet>&lt;Button variant="text" /&gt;</Snippet>
          <Button variant="text" />
        </div>
        <div class="item">
          <Snippet>&lt;Button disableShadow /&gt;</Snippet>
          <Button disableShadow />
        </div>
        <div class="item">
          <Snippet>&lt;Button disabled /&gt;</Snippet>
          <Button disabled />
        </div>
      </div>
      <h2>Icons</h2>
      <div class="row">
        <div class="item">
          <Snippet>&lt;Button startIcon="local_store" /&gt;</Snippet>
          <Button />
        </div>
        <div class="item">
          <Snippet>&lt;Button endIcon="local_store" /&gt;</Snippet>
          <Button />
        </div>
      </div>
      <h2>Sizes</h2>
      <div class="row">
        <div class="item">
          <Snippet>&lt;Button size="sm" /&gt;</Snippet>
          <Button size="sm" />
        </div>
        <div class="item">
          <Snippet>&lt;Button size="md" /&gt;</Snippet>
          <Button size="md" />
        </div>
        <div class="item">
          <Snippet>&lt;Button size="lg" /&gt;</Snippet>
          <Button size="lg" />
        </div>
      </div>
      <h2>Colors</h2>
      <div class="row">
        <div class="item">
          <Snippet>&lt;Button color="default" /&gt;</Snippet>
          <Button color="default" />
        </div>
        <div class="item">
          <Snippet>&lt;Button color="primary" /&gt;</Snippet>
          <Button color="primary" />
        </div>
        <div class="item">
          <Snippet>&lt;Button color="secondary" /&gt;</Snippet>
          <Button color="secondary" />
        </div>
      </div>
    </div>
  );
}

export default App;
