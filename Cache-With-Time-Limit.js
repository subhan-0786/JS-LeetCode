
class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(e, t, c) {
    const h = Date.now(),
      s = this.cache.has(e) && this.cache.get(e).expiry > h;
    this.cache.set(e, { value: t, expiry: h + c });
    setTimeout(() => {
      this.cache.has(e) && this.cache.get(e).expiry <= Date.now() && this.cache.delete(e);
    }, c);
    return s;
  }

  get(e) {
    const t = Date.now(),
      c = this.cache.get(e);
    return c && c.expiry > t ? c.value : (this.cache.delete(e), -1);
  }

  count() {
    const e = Date.now();
    let t = 0;
    for (const [c, h] of this.cache) h.expiry > e ? t++ : this.cache.delete(c);
    return t;
  }
}
