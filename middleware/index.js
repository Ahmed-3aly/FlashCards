import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Logger from './Logger';

export default applyMiddleware(
    thunk,
    Logger,
)
