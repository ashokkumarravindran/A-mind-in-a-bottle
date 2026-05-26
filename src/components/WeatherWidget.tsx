'use client';

import { useEffect, useState } from 'react';

type WeatherData = {
  temperature: number;
  windSpeed: number;
  weatherCode: number;
  description: string;
  locationLabel: string;
};

const weatherDescriptions: Record<number, string> = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  56: 'Light freezing drizzle',
  57: 'Dense freezing drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  66: 'Light freezing rain',
  67: 'Heavy freezing rain',
  71: 'Slight snow',
  73: 'Moderate snow',
  75: 'Heavy snow',
  77: 'Snow grains',
  80: 'Slight rain showers',
  81: 'Moderate rain showers',
  82: 'Violent rain showers',
  85: 'Slight snow showers',
  86: 'Heavy snow showers',
  95: 'Thunderstorm',
  96: 'Thunderstorm with hail',
  99: 'Thunderstorm with heavy hail',
};

const weatherEmoji: Record<number, string> = {
  0: '☀️',
  1: '🌤️',
  2: '⛅',
  3: '☁️',
  45: '🌫️',
  48: '🌫️',
  51: '🌧️',
  53: '🌧️',
  55: '🌧️',
  56: '🌧️',
  57: '🌧️',
  61: '🌦️',
  63: '🌧️',
  65: '🌧️',
  66: '🌧️',
  67: '🌧️',
  71: '❄️',
  73: '❄️',
  75: '❄️',
  77: '🌨️',
  80: '🌦️',
  81: '🌧️',
  82: '⛈️',
  85: '🌨️',
  86: '🌨️',
  95: '⛈️',
  96: '⛈️',
  99: '⛈️',
};

const getDescription = (code: number) => {
  return weatherDescriptions[code] || 'Changing conditions';
};

const getEmoji = (code: number) => {
  return weatherEmoji[code] || '🌈';
};

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation unavailable in this browser.');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`
          );

          if (!response.ok) {
            throw new Error('Unable to fetch weather.');
          }

          const data = await response.json();

          const current = data.current_weather;
          if (!current) {
            throw new Error('Weather response missing current weather.');
          }

          setWeather({
            temperature: current.temperature,
            windSpeed: current.windspeed,
            weatherCode: current.weathercode,
            description: getDescription(current.weathercode),
            locationLabel: 'Your location',
          });
        } catch (fetchError) {
          setError('Unable to retrieve live weather.');
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError('Location access denied.');
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 600000,
      }
    );
  }, []);

  return (
    <aside className="fixed top-24 right-4 z-50 w-72 rounded-3xl border border-white/15 bg-slate-950/90 p-4 text-white shadow-2xl shadow-black/40 backdrop-blur-lg transition-all duration-300 sm:right-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-amber-300/90">Live Weather</p>
          <p className="mt-2 text-sm text-white/75">Current location</p>
        </div>
        <div className="rounded-2xl bg-white/10 px-3 py-1 text-sm text-amber-200">
          {loading ? 'Updating…' : error ? 'Offline' : getEmoji(weather?.weatherCode ?? 0)}
        </div>
      </div>

      <div className="mt-6">
        {loading ? (
          <p className="text-sm text-white/70">Allow location access to see live weather.</p>
        ) : error ? (
          <p className="text-sm text-red-300">{error}</p>
        ) : weather ? (
          <div className="space-y-4">
            <div>
              <p className="text-4xl font-semibold tracking-tight text-white">{Math.round(weather.temperature)}°C</p>
              <p className="text-sm uppercase tracking-[0.28em] text-white/60">{weather.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 rounded-3xl bg-white/5 p-3 text-sm text-white/80">
              <div className="space-y-1">
                <p className="text-[0.75rem] uppercase text-white/50">Wind</p>
                <p>{Math.round(weather.windSpeed)} km/h</p>
              </div>
              <div className="space-y-1">
                <p className="text-[0.75rem] uppercase text-white/50">Location</p>
                <p>{weather.locationLabel}</p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-sm text-white/70">Fetching weather data…</p>
        )}
      </div>
    </aside>
  );
}
