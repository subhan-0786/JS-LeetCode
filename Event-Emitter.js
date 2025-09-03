class EventEmitter {
    constructor() {
        this.events = new Map();
    }
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, new Set());
        }
        const callbacks = this.events.get(eventName);
        callbacks.add(callback);
        
        return {
            unsubscribe: () => {
                callbacks.delete(callback);
                if (callbacks.size === 0) {
                    this.events.delete(eventName);
                }
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events.has(eventName)) return [];
        const callbacks = this.events.get(eventName);
        const results = [];
        for (const cb of callbacks) {
            results.push(cb(...args));
        }
        return results;
    }
}
