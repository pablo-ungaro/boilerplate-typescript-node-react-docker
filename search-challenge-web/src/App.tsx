import React from 'react';
import './App.css';
import { debounce } from 'throttle-debounce';

interface IState {
  hightlights: Hightlight[];
  suggestions: Suggestion[];
  search: string;
  showSearchBox: boolean;
  arrowIdx: number;
}
interface Hightlight {
  _id: string;
  title: string;
  url: string;
  logo: string;
  queries: string[];
}

interface Suggestion {
  _id: string;
  text: string;
}

export default class App extends React.Component<{}, IState> {
  state: IState = {
    hightlights: [],
    suggestions: [],
    search: '',
    showSearchBox: false,
    arrowIdx: -1
  };

  search = async (text: string) => {
    if (!text) {
      this.setState({ suggestions: [], hightlights: [], showSearchBox: false });
      return;
    }
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SEARCH_CHALLENGE_API}/search?q=${text}`
      );
      const result = await response.json();
      this.setState({ ...result });
      this.setState({
        arrowIdx: -1,
        showSearchBox:
          result.hightlights.length > 0 || result.suggestions.length > 0
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleOnKeyDown = (event: any) => {
    if (event.keyCode === 38 && this.state.arrowIdx > 0) {
      //ArrowUp
      this.setState({
        arrowIdx: this.state.arrowIdx - 1,
        search: this.state.suggestions[this.state.arrowIdx - 1].text
      });
    } else if (
      event.keyCode === 40 &&
      this.state.arrowIdx < this.state.suggestions.length - 1
    ) {
      //ArrowDown
      this.setState({
        arrowIdx: this.state.arrowIdx + 1,
        search: this.state.suggestions[this.state.arrowIdx + 1].text
      });
    }
  };

  handleOnChange = debounce(500, text => {
    this.search(text);
  });

  render() {
    return (
      <div>
        <header className="header">
          <div className="form-icon-group">
            <i className="icon-search" />
            <input
              onChange={(e: any) => {
                this.setState({ search: e.target.value });
                this.handleOnChange(e.target.value);
              }}
              onKeyDown={this.handleOnKeyDown}
              type="text"
              className="form-control"
              placeholder="Buscar"
              value={this.state.search}
            />
          </div>
        </header>
        {this.state.showSearchBox && (
          <div className="tooltip-container">
            <div className="tooltip">
              <span className="tooltiptext">
                <ul className="search-list-item">
                  {this.state.hightlights.map(h => {
                    return (
                      <li key={h._id}>
                        <a
                          href={h.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="list-item-content">
                            <img
                              height="50"
                              width="50"
                              src={h.logo}
                              alt={h.title}
                            />
                            <span>{h.title}</span>
                          </div>
                        </a>
                      </li>
                    );
                  })}

                  {this.state.suggestions.length > 0 && (
                    <li className="suggestion-container">
                      <div className="suggestion">Sugestões de busca</div>
                      {this.state.suggestions.map((s, idx) => {
                        return (
                          <p
                            className={
                              this.state.arrowIdx === idx ? 'active' : ''
                            }
                            key={s._id}
                            onClick={() => {
                              this.setState({ search: s.text });
                              this.search(s.text);
                            }}
                          >
                            {s.text}
                          </p>
                        );
                      })}
                    </li>
                  )}

                  {this.state.suggestions.length > 0 && (
                    <li>
                      <a
                        href={`http://g1.globo.com/busca/?q=${
                          this.state.search
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="other-search">
                          buscar{' '}
                          <span className="black">'{this.state.search}'</span>{' '}
                          na Globo.com
                          <span style={{ fontSize: '10px' }}> ></span>
                        </p>
                      </a>
                    </li>
                  )}
                  {this.state.suggestions.length > 0 && (
                    <li>
                      <a
                        href={`https://www.google.com/search?q=${
                          this.state.search
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="other-search">
                          buscar{' '}
                          <span className="black"> '{this.state.search}'</span>{' '}
                          na Web<span style={{ fontSize: '10px' }}> ></span>
                        </p>
                      </a>
                    </li>
                  )}
                </ul>
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
}
