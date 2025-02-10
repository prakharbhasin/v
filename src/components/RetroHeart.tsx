const RetroHeart = ({ showShake }: { showShake: boolean }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 60"
            className="size-60"
        >
            <style>
                {`
          @keyframes fillHeart {
            0% { fill: transparent; }
            100% { fill: var(--fill-color); }
          }
          .pixel {
            animation: fillHeart 0.5s forwards;
            animation-delay: var(--delay);
          }
          .shake {
            animation: shake 0.5s infinite;
          }
          @keyframes shake {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-5deg); }
            75% { transform: rotate(5deg); }
          }
        `}
            </style>
            <g className={showShake ? 'shake' : ''}>
                {/* Outline */}
                <path fill="#000" d="M18 6h6v6h-6z" />
                <path fill="#000" d="M12 6h6v6h-6z" />
                <path fill="#000" d="M24 12h6v6h-6z" />
                <path fill="#000" d="M30 12h6v6h-6z" />
                <path fill="#000" d="M36 6h6v6h-6z" />
                <path fill="#000" d="M42 6h6v6h-6z" />
                <path fill="#000" d="M48 6h6v6h-6z" />
                <path fill="#000" d="M54 12h6v6h-6z" />
                <path fill="#000" d="M54 18h6v6h-6z" />
                <path fill="#000" d="M6 6h6v6H6z" />
                <path fill="#000" d="M0 12h6v6H0z" />
                <path fill="#000" d="M0 18h6v6H0z" />
                <path fill="#000" d="M0 24h6v6H0z" />
                <path fill="#000" d="M54 24h6v6h-6z" />
                <path fill="#000" d="M6 30h6v6H6z" />
                <path fill="#000" d="M12 36h6v6h-6z" />
                <path fill="#000" d="M18 42h6v6h-6z" />
                <path fill="#000" d="M24 48h6v6h-6z" />
                <path fill="#000" d="M30 48h6v6h-6z" />
                <path fill="#000" d="M36 42h6v6h-6z" />
                <path fill="#000" d="M42 36h6v6h-6z" />
                <path fill="#000" d="M48 30h6v6h-6z" />

                {/* Fill */}
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '0.1s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M6 12h6v6H6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '0.15s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M12 12h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '0.2s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M18 12h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '0.25s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M6 18h6v6H6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '0.3s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M12 18h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '0.35s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M18 18h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '0.4s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M6 24h6v6H6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '0.45s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M12 24h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '0.5s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M18 24h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '0.55s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M12 30h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '0.6s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M18 30h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '0.65s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M18 36h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '0.7s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M24 36h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '0.75s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M24 42h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '0.8s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M30 42h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '0.85s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M30 36h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '0.9s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M24 30h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '0.95s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M30 30h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '1s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M30 24h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '1.05s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M24 24h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '1.1s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M24 18h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '1.15s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M30 18h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '1.2s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M36 24h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '1.25s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M42 30h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '1.3s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M36 30h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '1.35s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M36 36h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '1.4s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M42 24h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '1.45s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M48 24h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '1.5s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M36 18h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '1.55s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M42 18h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '1.6s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M48 18h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '1.65s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M48 12h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '1.7s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M42 12h6v6h-6z"
                />
                <path
                    style={
                        {
                            '--fill-color': 'red',
                            '--delay': '1.75s',
                        } as React.CSSProperties
                    }
                    className="pixel"
                    d="M36 12h6v6h-6z"
                />
            </g>
        </svg>
    );
};

export default RetroHeart;
