import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Container from '../Container/Container.js';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore';

class SearchResults extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.string,
    columns: PropTypes.array,
    changeSearchString: PropTypes.func,
    history: PropTypes.object,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
    title: 'Search Results ',
  }

  state = {
    searchString: this.props.changeSearchString(this.props.history.location.pathname.replace('/search/', '')),
  }

  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.component}> 
        <Container>
          <h3 className={styles.title}>{title}
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>
          </h3>
          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </Container>
      </section> 
    );
  }
}

export default SearchResults;
