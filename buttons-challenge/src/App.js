import React from 'react';
import './App.css';
import { Button, Snippet } from './components/';

function App() {
  return (
    <div className="container">
      <h2 className="title">Default</h2>
      <div className="row">
        <div className="item">
          <Snippet>&lt;Button /&gt;</Snippet>
          <Button />
        </div>
      </div>
      <h2 className="title">Colors</h2>
      <div className="row">
        <div className="item">
          <Snippet>&lt;Button color="primary" /&gt;</Snippet>
          <Button color="primary" />
        </div>
        <div className="item">
          <Snippet>&lt;Button color="secondary" /&gt;</Snippet>
          <Button color="secondary" />
        </div>
        <div className="item">
          <Snippet>&lt;Button color="danger" /&gt;</Snippet>
          <Button color="danger" />
        </div>
      </div>

      <h2 className="title">Variant</h2>
      <div className="row">
        <div className="item">
          <Snippet>&lt;Button variant="outline" /&gt;</Snippet>
          <Button variant="outline" />
        </div>
        <div className="item">
          <Snippet>&lt;Button variant="text" /&gt;</Snippet>
          <Button variant="text" />
        </div>
      </div>
      <h2 className="title">Disabled shadow</h2>
      <div className="row">
        <div className="item">
          <Snippet>&lt;Button disableShadow /&gt;</Snippet>
          <Button color="primary" disableShadow />
        </div>
      </div>
      <h2 className="title">Sizes</h2>
      <div className="row">
        <div className="item">
          <Snippet>&lt;Button size="sm" /&gt;</Snippet>
          <Button color="primary" size="sm" />
        </div>
        <div className="item">
          <Snippet>&lt;Button size="md" /&gt;</Snippet>
          <Button color="primary" size="md" />
        </div>
        <div className="item">
          <Snippet>&lt;Button size="lg" /&gt;</Snippet>
          <Button color="primary" size="lg" />
        </div>
      </div>
      <h2 className="title">Disabled</h2>
      <div className="row">
        <div className="item">
          <Snippet>&lt;Button disabled /&gt;</Snippet>
          <Button disabled />
        </div>
        <div className="item">
          <Snippet>&lt;Button disabled variant="text" /&gt;</Snippet>
          <Button disabled variant="text" />
        </div>
      </div>
      <h2 className="title">Icons</h2>
      <div className="row">
        <div className="item">
          <Snippet>&lt;Button startIcon="local_grocery_store" /&gt;</Snippet>
          <Button startIcon="local_grocery_store" color="primary" />
        </div>
        <div className="item">
          <Snippet>&lt;Button endIcon="local_grocery_store" /&gt;</Snippet>
          <Button endIcon="local_grocery_store" />
        </div>
      </div>
    </div>
  );
}

export default App;
