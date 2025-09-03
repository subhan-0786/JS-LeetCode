
class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const now = Date.now();
    // Check if key exists and not expired
    const exists = this.cache.has(key) && this.cache.get(key).expiry > now;

    // Set/overwrite with new value and expiry time
    this.cache.set(key, { value, expiry: now + duration });

    // Schedule cleanup after duration expires
    setTimeout(() => {
      if (this.cache.has(key) && this.cache.get(key).expiry <= Date.now()) {
        this.cache.delete(key);
      }
    }, duration);

    return exists;
  }

  get(key) {
    const now = Date.now();
    const entry = this.cache.get(key);

    // Return value if exists and not expired
    if (entry && entry.expiry > now) return entry.value;

    // Otherwise, delete expired entry and return -1
    this.cache.delete(key);
    return -1;
  }

  count() {
    const now = Date.now();
    let count = 0;

    for (const [key, entry] of this.cache) {
      if (entry.expiry > now) {
        count++;
      } else {
        this.cache.delete(key);
      }
    }

    return count;
  }
}
