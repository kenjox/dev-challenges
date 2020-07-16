import React from 'react';
import './App.css';
import { Button, Snippet } from './components/';

function App() {
  return (
    <div className="container">
      <h2 className="title">Modes</h2>
      <div className="row">
        <div className="item">
          <Snippet>&lt;Button /&gt;</Snippet>
          <Button />
        </div>
        <div className="item">
          <Snippet>&lt;Button variant="outline" /&gt;</Snippet>
          <Button variant="outline" />
        </div>
        <div className="item">
          <Snippet>&lt;Button variant="text" /&gt;</Snippet>
          <Button variant="text" />
        </div>
        <div className="item">
          <Snippet>&lt;Button disableShadow /&gt;</Snippet>
          <Button disableShadow color="primary" />
        </div>
      </div>
      <h2>Disabled</h2>
      <div className="row">
        <div className="item">
          <Snippet>&lt;Button disabled /&gt;</Snippet>
          <Button disabled />
        </div>
        <div className="item">
          <Snippet>&lt;Button disabled variant="text" /&gt;</Snippet>
          <Button disabled variant="text" title="Disabled" />
        </div>
      </div>
      <h2>Icons</h2>
      <div className="row">
        <div className="item">
          <Snippet>&lt;Button startIcon="local_store" /&gt;</Snippet>
          <Button />
        </div>
        <div className="item">
          <Snippet>&lt;Button endIcon="local_store" /&gt;</Snippet>
          <Button />
        </div>
      </div>
      <h2>Sizes</h2>
      <div className="row">
        <div className="item">
          <Snippet>&lt;Button size="sm" /&gt;</Snippet>
          <Button size="sm" />
        </div>
        <div className="item">
          <Snippet>&lt;Button size="md" /&gt;</Snippet>
          <Button size="md" color="primary" />
        </div>
        <div className="item">
          <Snippet>&lt;Button size="lg" /&gt;</Snippet>
          <Button size="lg" color="primary" />
        </div>
      </div>
      <h2>Colors</h2>
      <div className="row">
        <div className="item">
          <Snippet>&lt;Button color="default" /&gt;</Snippet>
          <Button color="default" />
        </div>
        <div className="item">
          <Snippet>&lt;Button color="primary" /&gt;</Snippet>
          <Button color="primary" />
        </div>
        <div className="item">
          <Snippet>&lt;Button color="secondary" /&gt;</Snippet>
          <Button color="secondary" title="Secondary" />
        </div>
      </div>
    </div>
  );
}

export default App;
