import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  favorites: state.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  add: (obj) => dispatch({ type: "ADD", payload: obj }),
  remove: (obj) => dispatch({ type: "REMOVE", payload: obj }),
});

const Facts = (props) => {
  const {favorites, add, remove} = props

  return (
    <div>
      {props.facts.map((fact) => (
        <div key={fact.id} className="mx-5 my-5">
          <Card>
            <Card.Header>Fact</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>{fact.value}</p>
              </blockquote>
            </Card.Body>
            <Card.Footer className="d-flex">
              <div>
                <p>Updated at: {fact.updated_at}</p>
                <p>
                  {fact.categories.length > 0
                    ? `Categorias: ${fact.categories}`
                    : ""}
                </p>
              </div>
              <div className="mx-5 d-flex align-items-center">
                {favorites.some((favorite) => favorite.id === fact.id) ? (
                  <Button variant="danger" onClick={() => remove(fact)}>
                    Remove
                  </Button>
                ) : (
                  <Button className="" onClick={() => add(fact)}>
                    Like
                  </Button>
                )}
              </div>
            </Card.Footer>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Facts);
