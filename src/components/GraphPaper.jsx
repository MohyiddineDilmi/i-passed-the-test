// GraphPaper.js
import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Keyframes to draw horizontal and vertical lines
const drawHorizontalLine = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const drawVerticalLine = keyframes`
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
`;

const LineContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const HorizontalLine = styled.div`
  position: absolute;
  top: ${({ top }) => top}%;
  left: 0;
  width: 0; /* Initially set width to 0 */
  height: 1px;
  background-color: #222;
  ${({ animate }) =>
    animate &&
    css`
      animation: ${drawHorizontalLine} 1s linear forwards;
      animation-delay: ${({ delay }) => delay}s;
    `}
`;

const VerticalLine = styled.div`
  position: absolute;
  left: ${({ left }) => left}%;
  top: 0;
  width: 1px;
  height: 0; /* Initially set height to 0 */
  background-color: #222;
  ${({ animate }) =>
    animate &&
    css`
      animation: ${drawVerticalLine} 1s linear forwards;
      animation-delay: ${({ delay }) => delay}s;
    `}
`;

const GraphPaperContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 72.25%; /* 16:9 Aspect Ratio */
  max-width: 1080px;
  background-color: transparent;
  overflow: hidden;
`;

const GraphPaperContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const GraphPaper = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const lines = [];
  for (let i = 6; i < 100; i += 6) { // Adjusted loop to skip 0 and 100
    lines.push(
      <HorizontalLine key={`h-${i}`} top={i} animate={isVisible} delay={i / 10} />,
      <VerticalLine key={`v-${i}`} left={i} animate={isVisible} delay={i / 10} />
    );
  }

  return (
    <GraphPaperContainer ref={containerRef}>
      <GraphPaperContent>
        <LineContainer>{lines}</LineContainer>
      </GraphPaperContent>
    </GraphPaperContainer>
  );
};

export default GraphPaper;
